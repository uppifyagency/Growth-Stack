#!/usr/bin/env node
// Prints a deterministic, per-book stratified sample of cited steps and criteria,
// for a reader to check that each cited file supports the claim.
// Usage: node tools/sample-citations.mjs [perBook=2] [seed=1]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseUnitsFile } from './registry.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const perBook = Number(process.argv[2] ?? 2);
let state = Number(process.argv[3] ?? 1);
const rand = () => ((state = (state * 1664525 + 1013904223) % 4294967296) / 4294967296);

console.log(['n', 'unit_id', 'book', 'kind', 'claim', 'cited_file'].join('\t'));
let n = 0;
for (const file of fs.readdirSync(path.join(root, 'registry/units')).sort()) {
  const book = file.replace(/\.md$/, '');
  const items = [];
  const full = path.join(root, 'registry/units', file);
  const parsed = parseUnitsFile(fs.readFileSync(full, 'utf8'), full);
  for (const u of parsed.units ?? parsed) {
    for (const s of u.steps) items.push([u.id, 'step', s]);
    for (const c of u.criteria) items.push([u.id, 'criterion', c]);
  }
  for (let i = 0; i < perBook && items.length; i++) {
    const [id, kind, it] = items.splice(Math.floor(rand() * items.length), 1)[0];
    console.log([++n, id, book, kind, it.text, it.cites.map((c) => path.join('skills', book, c)).join(', ')].join('\t'));
  }
}
