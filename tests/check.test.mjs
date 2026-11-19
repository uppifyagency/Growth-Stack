// Each test builds a clean fixture tree, breaks it in one way, and runs the real CLI on it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const tools = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'tools');

const UNIT = (id, name, { steps = [`1. Do it. [chapters/ch01.md]`], criteria = ['- It is done. [SKILL.md]'] } = {}) => [
  `## ${id} ${name}`,
  '- ask: "Do the thing."', '- inputs: facts', '- data: none', '- upstream: none', '- downstream: none', '- depth: full',
  '', '### steps', ...steps, '### criteria', ...criteria, '',
].join('\n');

const CLEAN = {
  'registry/playbooks.tsv': 'id\tarea\tname\tstatus\nA1\tA\tFirst\tbozza\nA2\tA\tSecond\ttodo\nP1\tP\tConsulto\ttodo\nDL\tDL\tData layer\ttodo\n',
  'registry/units.tsv': 'unit_id\tbook\tunit\tdepth\towner\talso\tkind\tneeds_data\n'
    + 'A-001\tbook1\tUnit one\tfull\tA1\t\tbuild\tno\n'
    + 'A-002\tbook1\tUnit two\tfull\tA2\tP1\tplan\tno\n',
  'registry/units/book1.md': `# book1\n\n${UNIT('A-001', 'Unit one')}\n${UNIT('A-002', 'Unit two')}`,
  'registry/conflicts.tsv': 'id\tplaybook\tstep\tunit_a\tside_a\tunit_b\tside_b\trule\tapproved\nK01\tA1\tStep\tA-001\tside a\tA-002\tside b\tA wins\tyes\n',
  'books/book1/SKILL.md': '# book1\n',
  'books/book1/chapters/ch01.md': '# ch01\n',
  'skills/growth/playbooks/a-mercato/A1-first.md': '# A1\n\nCall A-001. Rubric: [A1](../../rubrics/A1.md).\n',
  'skills/growth/rubrics/A1.md': '# Rubric\n',
};

function tree(edits = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'growth-check-'));
  for (const [rel, text] of Object.entries({ ...CLEAN, ...edits })) {
    if (text === null) continue;
    fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
    fs.writeFileSync(path.join(root, rel), text);
  }
  return root;
}

function run(script, root, ...args) {
  const r = spawnSync(process.execPath, [path.join(tools, script), '--root', root, '--books', path.join(root, 'books'), ...args], { encoding: 'utf8' });
  return { code: r.status, out: r.stdout + r.stderr };
}

function assertFails(edits, ...mustName) {
  const { code, out } = run('check.mjs', tree(edits));
  assert.equal(code, 1, out);
  for (const s of mustName) assert.ok(out.split('\n').some((l) => l.startsWith('error') && l.includes(s)), `no error line names "${s}":\n${out}`);
}

const replace = (rel, from, to) => {
  const text = CLEAN[rel];
  assert.ok(text.includes(from), `fixture ${rel} lacks "${from}"`);
  return { [rel]: text.replace(from, to) };
};

test('clean tree passes and reports the summary', () => {
  const { code, out } = run('check.mjs', tree());
  assert.equal(code, 0, out);
  assert.match(out, /2 units, citations resolved 4\/4, conflicts with a rule 1\/1, approved 1\/1, 0 errors, 0 warnings/);
});

test('owner not in playbooks.tsv', () => assertFails(replace('registry/units.tsv', 'Unit one\tfull\tA1', 'Unit one\tfull\tZ9'), 'A-001', 'Z9'));
test('also id not in playbooks.tsv', () => assertFails(replace('registry/units.tsv', '\tP1\t', '\tP1,Q7\t'), 'A-002', 'Q7'));
test('domain playbook owning no unit', () => assertFails(replace('registry/playbooks.tsv', 'P1\tP', 'A3\tA\tThird\ttodo\nP1\tP'), 'A3'));

test('unit without a section', () => assertFails({ 'registry/units/book1.md': `# book1\n\n${UNIT('A-001', 'Unit one')}` }, 'A-002'));
test('section without a units.tsv row', () => assertFails(
  { 'registry/units/book1.md': `${CLEAN['registry/units/book1.md']}\n${UNIT('A-003', 'Stray')}` }, 'A-003'));
test('section breaking the strict format', () => assertFails(replace('registry/units/book1.md', '- data: none\n', ''), 'registry/units/book1.md', 'A-001'));
test('section with no steps', () => assertFails({ 'registry/units/book1.md': `# book1\n\n${UNIT('A-001', 'Unit one', { steps: [] })}\n${UNIT('A-002', 'Unit two')}` }, 'A-001'));
test('section with no criteria', () => assertFails({ 'registry/units/book1.md': `# book1\n\n${UNIT('A-001', 'Unit one')}\n${UNIT('A-002', 'Unit two', { criteria: [] })}` }, 'A-002'));

test('step with no citation', () => assertFails({ 'registry/units/book1.md': `# book1\n\n${UNIT('A-001', 'Unit one', { steps: ['1. Do it.'] })}\n${UNIT('A-002', 'Unit two')}` }, 'A-001'));
test('cited file missing under the books dir', () => assertFails({ 'books/book1/chapters/ch01.md': null }, 'A-001', 'chapters/ch01.md'));

test('conflict naming a unit that does not exist', () => assertFails(replace('registry/conflicts.tsv', '\tA-002\t', '\tA-099\t'), 'K01', 'A-099'));
test('conflict in a playbook that neither owns nor calls its units', () => assertFails(replace('registry/conflicts.tsv', 'K01\tA1', 'K01\tDL'), 'K01'));

test('playbook file citing a unit id that does not exist', () => assertFails(
  replace('skills/growth/playbooks/a-mercato/A1-first.md', 'Call A-001.', 'Call A-001 then A-777.'), 'A-777'));
test('relative link that does not resolve', () => assertFails({ 'skills/growth/rubrics/A1.md': null }, 'skills/growth/playbooks/a-mercato/A1-first.md'));

test('empty conflict rule warns by default and fails with --strict', () => {
  const root = tree(replace('registry/conflicts.tsv', 'A wins', ''));
  const loose = run('check.mjs', root);
  assert.equal(loose.code, 0, loose.out);
  assert.match(loose.out, /^warning .*K01/m);
  const strict = run('check.mjs', root, '--strict');
  assert.equal(strict.code, 1, strict.out);
  assert.match(strict.out, /K01/);
});

test('generate --check fails after a generated file is edited by hand', () => {
  const root = tree();
  assert.equal(run('generate.mjs', root).code, 0);
  assert.equal(run('generate.mjs', root, '--check').code, 0);
  const rubric = path.join(root, 'skills/growth/rubrics/A1.md');
  fs.appendFileSync(rubric, '- hand edit\n');
  const { code, out } = run('generate.mjs', root, '--check');
  assert.equal(code, 1, out);
  assert.match(out, /rubrics\/A1\.md/);
});

test('A3 rubric applies approved K02 without grading hypothetical yes answers', () => {
  const root = tree({
    'registry/playbooks.tsv': 'id\tarea\tname\tstatus\nA3\tA\tInterviews\ttodo\n',
    'registry/units.tsv': 'unit_id\tbook\tunit\tdepth\towner\talso\tkind\tneeds_data\n'
      + 'A-031\tbook1\tInterview script\tfull\tA3\t\tbuild\tno\n'
      + 'E-037\tbook1\tValidation interviews\tfull\tA3\t\tbuild\tno\n',
    'registry/units/book1.md': `# book1\n\n${UNIT('A-031', 'Interview script')}\n${UNIT('E-037', 'Validation interviews', {
      criteria: [
        '- Sample is ~20 and persona-matched. [SKILL.md]',
        '- Uses the five scripted questions. [SKILL.md]',
        '- Reports yes count against majority. [SKILL.md]',
        '- Done before any spend on physical product. [SKILL.md]',
      ],
    })}`,
    'registry/conflicts.tsv': 'id\tplaybook\tstep\tunit_a\tside_a\tunit_b\tside_b\trule\tapproved\n'
      + 'K02\tA3\tInterview questions\tA-031\tPast events\tE-037\tHypothetical questions\tConta gli impegni concreti.\tyes\n',
  });
  const generated = run('generate.mjs', root);
  assert.equal(generated.code, 0, generated.out);
  const rubric = fs.readFileSync(path.join(root, 'skills/growth/rubrics/A3.md'), 'utf8');
  assert.match(rubric, /K02: Conta gli impegni concreti\./);
  assert.match(rubric, /domanda ipotetica di acquisto o raccomandazione viola il criterio/);
  assert.match(rubric, /impegni concreti ottenuti con la maggioranza degli intervistati/);
  assert.match(rubric, /Sample is ~20 and persona-matched/);
  assert.match(rubric, /Done before any spend on physical product/);
  assert.doesNotMatch(rubric, /five scripted questions|Reports yes count/);
  assert.equal(run('generate.mjs', root, '--check').code, 0);
});

test('a rule the operator has not approved warns and names the conflict', () => {
  const root = tree(replace('registry/conflicts.tsv', 'A wins\tyes', 'A wins\tno'));
  const r = run('check.mjs', root);
  assert.equal(r.code, 0);
  assert.match(r.out, /^warning .*K01.*not approved/m);
  assert.match(r.out, /approved 0\/1/);
});

test('a playbook marked todo that already has a file', () => assertFails(replace('registry/playbooks.tsv', 'First\tbozza', 'First\ttodo'), 'A1', 'todo'));
test('a playbook marked written that has no file', () => assertFails(replace('registry/playbooks.tsv', 'Second\ttodo', 'Second\tvalido'), 'A2', 'valido'));
