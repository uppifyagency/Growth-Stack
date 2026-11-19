// Bootstrap only: promotes research/ into registry/. The registry is the source of truth afterwards
// and is edited by hand, so this refuses to overwrite it unless --force is passed.
// Fails loudly (exit 1, nothing written) on any unit or table row it cannot parse.
import fs from 'node:fs';
import path from 'node:path';
import {
  DEFAULT_ROOT, registryPaths, readTsv, formatTsv, formatUnitsFile, parseUnitsFile, splitList,
} from './registry.mjs';

const root = DEFAULT_ROOT;
if (fs.existsSync(path.join(root, 'registry', 'units.tsv')) && !process.argv.includes('--force')) {
  console.error('import-research: registry/ already exists and is the source of truth; pass --force to overwrite it from research/');
  process.exit(1);
}
const research = path.join(root, 'research');
const INVENTORIES = { A: 'inventory-A-offer-research.md', B: 'inventory-B-acquisition-sales.md', C: 'inventory-C-copy-landing-seo.md', D: 'inventory-D-content-creator.md', E: 'inventory-E-business-scale.md' };

// ---- Catalog v2 (catalog-review.md sections 3 and 8) ----
const MERGED = { A6: 'A3', E2: 'E1', C8: 'C7' };
const REHOMED = { 'E-041': 'D2', 'A-043': 'DL', 'D-022': 'H3', 'D-018': 'I3', 'E-026': 'H12' };
const DATA_LAYER_BOOK = 'dataforseo';
const H2_SPLIT = {
  H2: ['B-004', 'D-012', 'E-020', 'E-046', 'E-047'],
  H11: ['B-003', 'D-003', 'D-004', 'D-007', 'E-021', 'E-031'],
  H12: ['D-005', 'D-006', 'D-010', 'E-026'],
};

// ---- Conflicts (catalog-review.md section 5) ----
// Section 3: scheduling goes to H11, cadence and platform count stay in H2.
const CONFLICT_PLAYBOOK = { 'H2|Scheduling': 'H11' };
// unit_a / unit_b default to the first unit id named on each side. Overrides, with the reason:
// H2 Cadence side b names D-010 (owned by H12) and E-046 (owned by H2); E-046 is the side H2 owns.
const CONFLICT_UNITS = { 'H2|Cadence': { unit_b: 'E-046' } };

// ---- Citation repairs (explicit; every entry is reported in the summary) ----
// Raw backtick text in the inventory -> list of book-relative paths.
const CITATION_FIXES = {
  'hormozi-offers': {
    '`chapters/ch09`..`ch13`': ['chapters/ch09-enhance-scarcity.md', 'chapters/ch10-enhance-urgency.md', 'chapters/ch11-enhance-bonuses.md', 'chapters/ch12-enhance-guarantees.md', 'chapters/ch13-enhance-naming.md'],
  },
  // A cross-book citation is written relative to the unit's own book folder.
  dataforseo: {
    '(`seo-2026-sota` ch16)': ['../seo-2026-sota/chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md'],
  },
  'gtm-internet-pipes': {
    '`chapters/ch07`..`ch10`': ['chapters/ch07-exploration-station.md', 'chapters/ch08-affirmation-station.md', 'chapters/ch09-location-station.md', 'chapters/ch10-variation-station.md'],
  },
};
// Upstream/downstream values that do not split on a single "→" or " / ".
const UPDOWN_OVERRIDES = {
  'L7 → composes L2–L6 → feeds L8, L9.': ['L7', 'composes L2–L6 → feeds L8, L9.'],
  'part of L1; the incentive is the favorite small-test variable in L9.': ['part of L1', 'the incentive is the favorite small-test variable in L9.'],
};

const problems = [];
const fail = (where, msg) => problems.push(`${where}: ${msg}`);
const fixesApplied = [];

// ---------- inventory parsing ----------
const C_KEYS = { S: 'SKILL.md', P: 'patterns.md', C: 'cheatsheet.md' };

function parseInventory(letter) {
  const file = INVENTORIES[letter];
  const lines = fs.readFileSync(path.join(research, file), 'utf8').split('\n');
  const units = [];
  let book = null;
  let u = null;
  let field = null;
  lines.forEach((line, i) => {
    const where = `${file}:${i + 1}`;
    if (line.startsWith('## ')) {
      u = null;
      book = line.slice(3).split(' ')[0];
      return;
    }
    if (line.startsWith('### ')) {
      u = { letter, book, name: line.slice(4), where, fields: {}, notes: {}, steps: [], criteria: [] };
      units.push(u);
      field = null;
      return;
    }
    if (!u) return;
    if (line.trim() === '') return;
    if (/^\S/.test(line) && !line.startsWith('- ')) { u.ended = true; return; } // book-level prose after a unit
    if (u.ended) return fail(where, `list line after unit "${u.name}" ended`);
    const fm = line.match(/^- \*\*([a-z /]+)\*\*([^:]*):\s?(.*)$/);
    if (fm) {
      field = fm[1];
      const [, , note, rest] = fm;
      if (field === 'upstream') {
        const m = rest.match(/^(.*?)\s*\*\*downstream\*\*:\s*(.*)$/);
        if (!m) return fail(where, `upstream line without **downstream**`);
        u.fields.upstream = m[1];
        u.fields.downstream = m[2];
        return;
      }
      if (field === 'upstream / downstream') {
        const ud = splitUpDown(rest);
        if (!ud) return fail(where, `cannot split upstream / downstream: "${rest}"`);
        [u.fields.upstream, u.fields.downstream] = ud;
        return;
      }
      if (!['ask', 'inputs', 'steps', 'criteria', 'data', 'depth', 'name'].includes(field)) return fail(where, `unknown field "${field}"`);
      if (note.trim()) u.notes[field] = note.trim();
      if (field === 'steps' || field === 'criteria') {
        if (rest.trim()) u[field].push({ raw: rest.trim().replace(/^\[ \]\s*/, ''), where }); // one-line list
      } else u.fields[field] = rest;
      return;
    }
    const sm = line.match(/^\s+(\d+)\.\s+(.*)$/);
    if (sm) {
      if (field !== 'steps') return fail(where, `numbered item outside steps (in ${field})`);
      u.steps.push({ raw: sm[2], where });
      return;
    }
    const cm = line.match(/^\s+-\s+(?:\[ \]\s+)?(.*)$/);
    if (cm) {
      if (field !== 'criteria') return fail(where, `bullet item outside criteria (in ${field})`);
      u.criteria.push({ raw: cm[1], where });
      return;
    }
    fail(where, `unrecognized line in unit "${u.name}": ${line}`);
  });
  return { units, keysFor: collectKeys(letter, lines) };
}

// Per-book short-key maps for inventory C (re-read so each unit knows its book's map).
function collectKeys(letter, lines) {
  if (letter !== 'C') return {};
  const keys = {};
  let book = null;
  for (const line of lines) {
    if (line.startsWith('## ')) { book = line.slice(3).split(' ')[0]; keys[book] = {}; }
    else if (book && line.startsWith('Files:')) {
      for (const m of line.matchAll(/(ch\d+[a-z]?|R\d) `([^`]+)`/g)) {
        keys[book][m[1]] = m[1].startsWith('R') ? `references/${m[2]}` : `chapters/${m[2]}`;
      }
    }
  }
  return keys;
}

function splitUpDown(s) {
  if (UPDOWN_OVERRIDES[s]) return UPDOWN_OVERRIDES[s];
  const arrows = s.split(' → ');
  const slashes = s.split(' / ');
  if (arrows.length === 2 && slashes.length === 1) return [arrows[0], arrows[1]];
  if (slashes.length === 2 && arrows.length === 1) return [slashes[0], slashes[1]];
  return null;
}

// ---------- citations ----------
const MARK = '\u0000';

/** Classify one backtick span. Returns a book-relative path, null for code, or throws for a broken citation. */
function citationOf(span, ctx) {
  if (ctx.letter === 'C') {
    if (C_KEYS[span]) return C_KEYS[span];
    if (/^(ch\d+[a-z]?|R\d)$/.test(span)) {
      const p = ctx.keys[span];
      if (!p) throw new Error(`short key \`${span}\` not in the Files line of ${ctx.book}`);
      return p;
    }
    if (/^ch\d+[a-z]?-[\w-]+\.md$/.test(span)) return `chapters/${span}`; // key: chNN = chapters/chNN-*.md
  }
  if (/^(\.\.\/)?[\w.-]+(\/[\w.-]+)*\.md$/.test(span)) return span;
  if (/^(chapters|references)\//.test(span) || /^ch\d+$/.test(span)) throw new Error(`incomplete citation \`${span}\``);
  return null;
}

/** Turn an inventory item into { text, cites }: citations removed from the wording, section notes kept. */
function normalizeItem(raw, ctx) {
  let s = raw;
  for (const [from, to] of Object.entries(CITATION_FIXES[ctx.book] ?? {})) {
    if (s.includes(from)) {
      s = s.replace(from, to.map((p) => `\`${p}\``).join(', '));
      fixesApplied.push(`${ctx.id} ${ctx.book}: ${from} -> ${to.join(', ')}`);
    }
  }
  const cites = [];
  s = s.replace(/`([^`]+)`/g, (whole, span) => {
    const c = citationOf(span, ctx);
    if (c === null) return whole;
    if (!cites.includes(c)) cites.push(c);
    return MARK;
  });
  return { text: cleanText(s), cites };
}

function cleanText(s) {
  const group = new RegExp(`${MARK}(?:\\s*(?:,|and|\\+)?\\s*${MARK})*`, 'g');
  return s
    .replace(group, MARK)
    .replace(new RegExp(`Sources?:\\s*${MARK}`, 'g'), MARK)
    .replace(new RegExp(`\\(\\s*${MARK}\\s*\\)`, 'g'), '')
    .replace(new RegExp(`\\(\\s*${MARK}\\s*[,;]?\\s*`, 'g'), '(')
    .replace(new RegExp(`\\s*[,;]?\\s*${MARK}\\s*\\)`, 'g'), ')')
    .replace(new RegExp(MARK, 'g'), '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:)])/g, '$1')
    .replace(/\(\s*\)/g, '')
    .trim()
    .replace(/\s*[,;+]$/, '')
    .replace(/\.\s*\.$/, '.');
}

function expandKeysInline(text, ctx) {
  if (ctx.letter !== 'C') return text.trim();
  return text.replace(/`([^`]+)`/g, (whole, span) => {
    try {
      const c = citationOf(span, ctx);
      return c ? `\`${c}\`` : whole;
    } catch { return whole; }
  }).trim();
}

// ---------- catalog tables ----------
function section(md, heading) {
  const start = md.indexOf(`\n## ${heading}`);
  if (start < 0) throw new Error(`section "${heading}" not found`);
  const end = md.indexOf('\n## ', start + 1);
  return md.slice(start, end < 0 ? undefined : end);
}
const tableRows = (text) => text.split('\n').filter((l) => l.startsWith('| ') && !/^\| ?-/.test(l))
  .map((l) => l.slice(1, -1).split('|').map((c) => c.trim()));

// ---------- main ----------
const tsvRows = readTsv(path.join(research, 'units.tsv'));
const parsed = Object.keys(INVENTORIES).map(parseInventory);
const invUnits = parsed.flatMap((p) => p.units);
const keysByBook = Object.assign({}, ...parsed.map((p) => p.keysFor));

const byLetter = {};
for (const iu of invUnits) (byLetter[iu.letter] ??= []).push(iu);
const units = [];
for (const row of tsvRows) {
  const [letter, num] = row.unit_id.split('-');
  const iu = byLetter[letter]?.[Number(num) - 1];
  if (!iu) { fail(row.unit_id, 'no matching ### heading in the inventory'); continue; }
  if (iu.name !== row.unit || iu.book !== row.book) { fail(iu.where, `heading "${iu.book} / ${iu.name}" does not match units.tsv "${row.book} / ${row.unit}"`); continue; }
  const invDepth = (iu.fields.depth ?? '').replace(/[`*]/g, '').trim().split(/[\s.,(]/)[0];
  if (invDepth && invDepth !== row.depth) fail(iu.where, `inventory depth "${invDepth}" differs from units.tsv "${row.depth}"`);
  const ctx = { letter, book: row.book, keys: keysByBook[row.book] ?? {}, id: row.unit_id };
  const norm = (items, field) => {
    let header = { cites: [] };
    try { header = normalizeItem(iu.notes[field] ?? '', ctx); } catch (e) { fail(iu.where, `${field} header: ${e.message}`); }
    return items.map((it) => {
      try {
        const n = normalizeItem(it.raw, ctx);
        if (!n.cites.length && header.cites.length) n.cites = header.cites; // "- **steps** `ch14`:" covers every step
        return n;
      } catch (e) { fail(it.where, e.message); return { text: it.raw, cites: [] }; }
    });
  };
  units.push({
    id: row.unit_id, name: row.unit, book: row.book, depth: row.depth, row, inv: iu,
    ask: expandKeysInline(iu.fields.ask ?? '', ctx),
    inputs: expandKeysInline(iu.fields.inputs ?? '', ctx),
    data: expandKeysInline(iu.fields.data ?? '', ctx),
    upstream: expandKeysInline(iu.fields.upstream ?? '', ctx),
    downstream: expandKeysInline(iu.fields.downstream ?? '', ctx),
    steps: norm(iu.steps, 'steps'),
    criteria: norm(iu.criteria, 'criteria'),
  });
}
if (invUnits.length !== tsvRows.length) fail('inventory', `${invUnits.length} ### headings vs ${tsvRows.length} units.tsv rows`);

// v2 owners
const v1H2 = tsvRows.filter((r) => r.owner === 'H2').map((r) => r.unit_id);
const splitIds = Object.values(H2_SPLIT).flat();
for (const id of v1H2) if (!splitIds.includes(id)) fail(id, 'v1 H2 unit missing from the H2 split');
const splitOwner = Object.fromEntries(Object.entries(H2_SPLIT).flatMap(([pb, ids]) => ids.map((id) => [id, pb])));
const v2 = (pb) => MERGED[pb] ?? pb;
const notes = [];
for (const u of units) {
  const owner = u.book === DATA_LAYER_BOOK ? 'DL' : REHOMED[u.id] ?? splitOwner[u.id] ?? v2(u.row.owner);
  const also = [];
  for (const a of splitList(u.row.also).map(v2)) {
    if (a === owner) { notes.push(`${u.id}: dropped "${a}" from also (now its owner)`); continue; }
    if (!also.includes(a)) also.push(a);
    else notes.push(`${u.id}: dropped duplicate "${a}" from also`);
  }
  u.owner = owner;
  u.also = also.join(',');
}

// playbooks.tsv
const review = fs.readFileSync(path.join(research, 'catalog-review.md'), 'utf8');
const catalog = fs.readFileSync(path.join(research, 'playbook-catalog.md'), 'utf8');
const v2Rows = tableRows(section(review, '8. Proposed catalog v2')).slice(1).filter((r) => /^[A-I]\d+$|^DL$/.test(r[0]));
const playbooks = v2Rows.filter((r) => r[0] !== 'DL').map(([id, name]) => ({ id, area: id[0], name, status: 'todo' }));
const expected = Object.fromEntries(v2Rows.map((r) => [r[0], Number(r[2])]));
for (const r of tableRows(section(catalog, 'Process playbooks')).filter((r) => /^P\d$/.test(r[0]))) {
  playbooks.push({ id: r[0], area: 'P', name: r[1], status: 'todo' });
}
playbooks.push({ id: 'DL', area: 'DL', name: 'Data layer', status: 'todo' });

// conflicts.tsv
const conflicts = tableRows(section(review, '5. Conflicts inside one playbook')).slice(1).map((r, i) => {
  const [pb, step, a, b] = r;
  const key = `${pb}|${step}`;
  const first = (s) => s.match(/[A-E]-\d{3}/)?.[0];
  const row = {
    id: `K${String(i + 1).padStart(2, '0')}`, playbook: CONFLICT_PLAYBOOK[key] ?? v2(pb), step,
    unit_a: first(a), side_a: a, unit_b: first(b), side_b: b, rule: '', ...CONFLICT_UNITS[key],
  };
  if (!row.unit_a || !row.unit_b) fail(`conflict ${key}`, 'a side names no unit id');
  return row;
});
if (conflicts.length !== 18) fail('conflicts', `expected 18 rows, parsed ${conflicts.length}`);

if (problems.length) {
  console.error(`import-research: ${problems.length} problem(s), nothing written`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

// ---------- write ----------
const P = registryPaths(root);
fs.mkdirSync(P.unitsDir, { recursive: true });
fs.writeFileSync(P.playbooks, formatTsv(['id', 'area', 'name', 'status'], playbooks));
fs.writeFileSync(P.units, formatTsv(['unit_id', 'book', 'unit', 'depth', 'owner', 'also', 'kind', 'needs_data'],
  units.map((u) => ({ ...u.row, owner: u.owner, also: u.also }))));
fs.writeFileSync(P.conflicts, formatTsv(['id', 'playbook', 'step', 'unit_a', 'side_a', 'unit_b', 'side_b', 'rule'], conflicts));
const books = [...new Set(units.map((u) => u.book))];
for (const f of fs.readdirSync(P.unitsDir)) if (f.endsWith('.md') && !books.includes(f.slice(0, -3))) fs.rmSync(path.join(P.unitsDir, f));
for (const book of books) {
  const text = formatUnitsFile(book, units.filter((u) => u.book === book));
  const { units: back, errors } = parseUnitsFile(text, book);
  if (errors.length || back.length !== units.filter((u) => u.book === book).length) {
    console.error(`import-research: round trip failed for ${book}`, errors);
    process.exit(1);
  }
  fs.writeFileSync(path.join(P.unitsDir, `${book}.md`), text);
}

// ---------- report ----------
const counts = {};
for (const u of units) counts[u.owner] = (counts[u.owner] ?? 0) + 1;
const diffs = Object.keys({ ...expected, ...counts }).filter((k) => counts[k] !== expected[k]);
const domainTotal = units.filter((u) => u.owner !== 'DL').length;
console.log(`units: ${units.length} in ${books.length} books; domain-owned ${domainTotal}, DL ${counts.DL ?? 0}`);
console.log(`playbooks: ${playbooks.length} rows; conflicts: ${conflicts.length}`);
console.log(`per-owner counts vs catalog-review.md section 8: ${diffs.length ? 'MISMATCH' : 'all match'}`);
for (const k of diffs) console.log(`  ${k}: registry ${counts[k] ?? 0}, section 8 ${expected[k] ?? 0}`);
const noCite = units.flatMap((u) => [...u.steps, ...u.criteria].filter((x) => !x.cites.length).map(() => u.id));
console.log(`items without citation: ${noCite.length}${noCite.length ? ` (${[...new Set(noCite)].join(', ')})` : ''}`);
const empty = units.flatMap((u) => ['ask', 'inputs', 'data', 'upstream', 'downstream'].filter((f) => !u[f]).map((f) => `${u.id}.${f}`));
if (empty.length) console.log(`empty fields: ${empty.join(', ')}`);
const dropped = units.flatMap((u) => Object.entries(u.inv.notes).filter(([f]) => f !== 'name').map(([f, n]) => `${u.id} ${f}: "${n}"`));
if (dropped.length) console.log(`field-header notes (citations kept, note text not carried):\n  ${dropped.join('\n  ')}`);
for (const f of fixesApplied) console.log(`citation fix: ${f}`);
for (const n of notes) console.log(`also: ${n}`);
if (diffs.length) process.exit(1);
