// Validates the registry and skills/growth/. Prints one line per problem; exits 1 on any error.
import fs from 'node:fs';
import path from 'node:path';
import { parseArgs, registryPaths, loadRegistry, isDomain, splitList, AREAS } from './registry.mjs';

const opts = parseArgs(process.argv.slice(2));
const { playbooks, units, conflicts, sections, formatErrors } = loadRegistry(opts.root);
const { skill } = registryPaths(opts.root);
const errors = [];
const warnings = [];
const error = (file, id, msg) => errors.push(`${file}: ${id}: ${msg}`);

// 1. Ownership
const pbIds = new Set(playbooks.map((p) => p.id));
const unitIds = new Set(units.map((u) => u.unit_id));
for (const u of units) {
  if (!pbIds.has(u.owner)) error('registry/units.tsv', u.unit_id, `owner "${u.owner}" is not in playbooks.tsv`);
  for (const a of splitList(u.also)) if (!pbIds.has(a)) error('registry/units.tsv', u.unit_id, `also "${a}" is not in playbooks.tsv`);
}
for (const p of playbooks.filter(isDomain)) {
  if (!units.some((u) => u.owner === p.id)) error('registry/playbooks.tsv', p.id, 'domain playbook owns no unit');
}

// 2. Sections match units.tsv and keep the strict format
for (const e of formatErrors) error(`${e.file}:${e.line}`, e.id ?? '-', e.msg);
for (const u of units) {
  const s = sections.get(u.unit_id);
  const want = `registry/units/${u.book}.md`;
  if (!s) { error(want, u.unit_id, 'no section for this unit'); continue; }
  if (s.book !== u.book) error(s.file, u.unit_id, `section is in ${s.file}, units.tsv says book ${u.book}`);
  if (s.name !== u.unit) error(s.file, u.unit_id, `section name "${s.name}" differs from units.tsv "${u.unit}"`);
  if (!s.steps.length) error(s.file, u.unit_id, 'no steps');
  if (!s.criteria.length) error(s.file, u.unit_id, 'no criteria');
}
for (const s of sections.values()) if (!unitIds.has(s.id)) error(s.file, s.id, 'section has no row in units.tsv');

// 3. Citations
let found = 0;
let resolved = 0;
for (const s of sections.values()) {
  for (const [kind, items] of [['step', s.steps], ['criterion', s.criteria]]) {
    items.forEach((it, i) => {
      const where = `${s.file}:${it.line}`;
      if (!it.cites.length) return error(where, s.id, `${kind} ${i + 1} has no citation`);
      for (const c of it.cites) {
        found++;
        if (fs.existsSync(path.join(opts.books, s.book, c))) resolved++;
        else error(where, s.id, `${kind} ${i + 1} cites ${c}, not found under ${path.join(opts.books, s.book)}`);
      }
    });
  }
}

// 4. Conflicts
const unitById = new Map(units.map((u) => [u.unit_id, u]));
for (const k of conflicts) {
  for (const col of ['unit_a', 'unit_b']) {
    if (!unitById.has(k[col])) error('registry/conflicts.tsv', k.id, `${col} "${k[col]}" is not a unit`);
  }
  if (!pbIds.has(k.playbook)) error('registry/conflicts.tsv', k.id, `playbook "${k.playbook}" is not in playbooks.tsv`);
  const touches = [k.unit_a, k.unit_b].map((id) => unitById.get(id)).filter(Boolean)
    .some((u) => u.owner === k.playbook || splitList(u.also).includes(k.playbook));
  if (!touches) error('registry/conflicts.tsv', k.id, `playbook ${k.playbook} neither owns nor calls ${k.unit_a} or ${k.unit_b}`);
  if (!k.rule.trim()) (opts.strict ? errors : warnings).push(`registry/conflicts.tsv: ${k.id}: no rule yet`);
  else if (k.approved !== 'yes') warnings.push(`registry/conflicts.tsv: ${k.id}: rule proposed, not approved by the operator`);
}

// 5. skills/growth: unit ids in playbooks, relative links everywhere
const walk = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [])
  .flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]))
  .filter((f) => f.endsWith('.md')).sort();
const playbooksDir = path.join(skill, 'playbooks');
for (const f of walk(skill)) {
  const rel = path.relative(opts.root, f);
  const text = fs.readFileSync(f, 'utf8');
  if (f.startsWith(playbooksDir + path.sep) && path.basename(f) !== 'INDEX.md') {
    for (const id of new Set(text.match(/\b[A-Z]-\d{3}\b/g) ?? [])) {
      if (!unitIds.has(id)) error(rel, id, 'cites a unit id that does not exist');
    }
  }
  for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = m[1].split('#')[0];
    if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('/')) continue;
    if (!fs.existsSync(path.resolve(path.dirname(f), decodeURI(target)))) error(rel, target, 'relative link does not resolve');
  }
}

// 6. A playbook's status and its file agree: `todo` means no file, anything else means one file.
const STATUSES = ['todo', 'bozza', 'valido', 'provato'];
for (const pb of playbooks) {
  if (!STATUSES.includes(pb.status)) error('registry/playbooks.tsv', pb.id, `status "${pb.status}" is not one of ${STATUSES.join(', ')}`);
  if (pb.area === 'DL') continue;
  const folder = pb.area === 'P' ? 'process' : AREAS[pb.area];
  const dir = path.join(playbooksDir, folder ?? '');
  const files = folder && fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.startsWith(`${pb.id}-`) && f.endsWith('.md')) : [];
  if (pb.status === 'todo' && files.length) error('registry/playbooks.tsv', pb.id, `status is todo but ${files[0]} exists`);
  if (pb.status !== 'todo' && files.length !== 1) error('registry/playbooks.tsv', pb.id, `status is ${pb.status} but ${files.length} playbook files named ${pb.id}-*.md exist in playbooks/${folder}`);
}

for (const e of errors) console.log(`error ${e}`);
for (const w of warnings) console.log(`warning ${w}`);
const withRule = conflicts.filter((k) => k.rule.trim()).length;
console.log(`check: ${units.length} units, citations resolved ${resolved}/${found}, conflicts with a rule ${withRule}/${conflicts.length}, approved ${conflicts.filter((k) => k.approved === 'yes').length}/${conflicts.length}, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
