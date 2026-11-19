// Shared registry model: paths, TSV I/O, and the strict units/<book>.md format.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const AREAS = {
  A: 'a-mercato', B: 'b-offerta', C: 'c-acquisizione', D: 'd-conversione', E: 'e-vendita',
  F: 'f-email', G: 'g-seo', H: 'h-contenuti', I: 'i-scala',
};

export const UNIT_FIELDS = ['ask', 'inputs', 'data', 'upstream', 'downstream', 'depth'];
export const DEPTHS = ['full', 'partial'];
const UNIT_ID = /^[A-Z]+-\d{3,}$/;
const CITATION = /^(\.\.\/)?[A-Za-z0-9_.-]+(\/[A-Za-z0-9_.-]+)*\.md$/;

export function parseArgs(argv) {
  const opts = { root: DEFAULT_ROOT, books: null, check: false, strict: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--root') opts.root = path.resolve(argv[++i]);
    else if (a === '--books') opts.books = path.resolve(argv[++i]);
    else if (a === '--check') opts.check = true;
    else if (a === '--strict') opts.strict = true;
    else throw new Error(`unknown argument: ${a}`);
  }
  opts.books ??= path.join(opts.root, 'skills');
  return opts;
}

export const registryPaths = (root) => ({
  playbooks: path.join(root, 'registry', 'playbooks.tsv'),
  units: path.join(root, 'registry', 'units.tsv'),
  unitsDir: path.join(root, 'registry', 'units'),
  conflicts: path.join(root, 'registry', 'conflicts.tsv'),
  skill: path.join(root, 'skills', 'growth'),
});

export function readTsv(file) {
  const [header, ...lines] = fs.readFileSync(file, 'utf8').split('\n').filter((l) => l !== '');
  const cols = header.split('\t');
  return lines.map((line) => {
    const cells = line.split('\t');
    return Object.fromEntries(cols.map((c, i) => [c, cells[i] ?? '']));
  });
}

export function formatTsv(cols, rows) {
  return [cols.join('\t'), ...rows.map((r) => cols.map((c) => r[c] ?? '').join('\t'))].join('\n') + '\n';
}

export const splitList = (s) => (s ? s.split(',').map((x) => x.trim()).filter(Boolean) : []);

/** Split "text [a.md, b.md]" into text and citations; no trailing bracket of paths means no citations. */
export function splitCitations(line) {
  const m = line.match(/^(.*?)\s*\[([^\]]+)\]$/);
  if (m) {
    const cites = m[2].split(',').map((c) => c.trim());
    if (cites.every((c) => CITATION.test(c))) return { text: m[1], cites };
  }
  return { text: line, cites: [] };
}

const itemLine = ({ text, cites }) => (cites.length ? `${text} [${cites.join(', ')}]` : text);

export function formatUnitsFile(book, units) {
  const out = [`# ${book}`, ''];
  for (const u of units) {
    out.push(`## ${u.id} ${u.name}`);
    for (const f of UNIT_FIELDS) out.push(`- ${f}: ${u[f]}`.trimEnd());
    out.push('', '### steps');
    u.steps.forEach((s, i) => out.push(`${i + 1}. ${itemLine(s)}`));
    out.push('### criteria');
    u.criteria.forEach((c) => out.push(`- ${itemLine(c)}`));
    out.push('');
  }
  return out.join('\n');
}

/**
 * Parse a units/<book>.md file. Returns units and format errors; never guesses.
 * Line order per unit: "## id name", the six fields in UNIT_FIELDS order, "### steps",
 * numbered steps from 1, "### criteria", "- " criteria. Blank lines are ignored.
 */
export function parseUnitsFile(text, file) {
  const units = [];
  const errors = [];
  let u = null;
  let state = 'start';
  let fieldIdx = 0;
  const err = (n, msg) => errors.push({ file, id: u?.id, line: n, msg });
  text.split('\n').forEach((raw, i) => {
    const n = i + 1;
    const line = raw.trimEnd();
    if (line === '') return;
    if (state === 'start') {
      if (line.startsWith('# ')) { state = 'title'; return; }
      state = 'title';
    }
    const head = line.match(/^## (\S+) (.+)$/);
    if (head) {
      if (u && state !== 'criteria') err(n, `section ended before its criteria`);
      if (!UNIT_ID.test(head[1])) { u = null; err(n, `bad unit id "${head[1]}"`); state = 'skip'; return; }
      u = { id: head[1], name: head[2], line: n, steps: [], criteria: [] };
      units.push(u);
      state = 'fields';
      fieldIdx = 0;
      return;
    }
    if (state === 'skip') return;
    if (!u) return err(n, `text outside a unit section`);
    if (state === 'fields') {
      if (fieldIdx === UNIT_FIELDS.length) {
        if (line === '### steps') { state = 'steps'; return; }
        return err(n, `expected "### steps", found "${line}"`);
      }
      const f = UNIT_FIELDS[fieldIdx];
      const m = line.match(new RegExp(`^- ${f}:(?: (.*))?$`));
      if (!m) { err(n, `expected "- ${f}:", found "${line}"`); state = 'skip'; return; }
      u[f] = m[1] ?? '';
      if (f === 'depth' && !DEPTHS.includes(u[f])) err(n, `depth must be full or partial, found "${u[f]}"`);
      fieldIdx++;
      return;
    }
    if (state === 'steps') {
      if (line === '### criteria') { state = 'criteria'; return; }
      const m = line.match(/^(\d+)\. (.+)$/);
      if (!m) return err(n, `expected a numbered step, found "${line}"`);
      if (Number(m[1]) !== u.steps.length + 1) err(n, `step numbered ${m[1]}, expected ${u.steps.length + 1}`);
      u.steps.push({ ...splitCitations(m[2]), line: n });
      return;
    }
    if (state === 'criteria') {
      const m = line.match(/^- (.+)$/);
      if (!m) return err(n, `expected a "- " criterion, found "${line}"`);
      u.criteria.push({ ...splitCitations(m[1]), line: n });
    }
  });
  if (u && state !== 'criteria' && state !== 'skip') err(u.line, `section ended before its criteria`);
  return { units, errors };
}

/** Load registry TSVs plus every units/<book>.md. Throws only on missing TSV files. */
export function loadRegistry(root) {
  const p = registryPaths(root);
  const playbooks = readTsv(p.playbooks);
  const units = readTsv(p.units);
  const conflicts = readTsv(p.conflicts);
  const sections = new Map();
  const formatErrors = [];
  const files = fs.existsSync(p.unitsDir) ? fs.readdirSync(p.unitsDir).filter((f) => f.endsWith('.md')).sort() : [];
  for (const f of files) {
    const rel = path.join('registry', 'units', f);
    const { units: secs, errors } = parseUnitsFile(fs.readFileSync(path.join(p.unitsDir, f), 'utf8'), rel);
    formatErrors.push(...errors);
    for (const s of secs) {
      if (sections.has(s.id)) formatErrors.push({ file: rel, id: s.id, line: s.line, msg: `duplicate section, also in ${sections.get(s.id).file}` });
      else sections.set(s.id, { ...s, book: f.replace(/\.md$/, ''), file: rel });
    }
  }
  return { playbooks, units, conflicts, sections, formatErrors };
}

export const isDomain = (pb) => pb.area in AREAS;
