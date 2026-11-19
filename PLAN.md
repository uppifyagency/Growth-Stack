# Piano: plugin `growth` (v2)

Stato al 19/11/2026: fasi 1–3 chiuse, nove piloti integrati in fase 4.

| Fase | Stato | Prova |
| --- | --- | --- |
| 1. Registro e attrezzi | chiusa | `node tools/check.mjs`: 264 unità, 2.799 citazioni risolte su 2.799, 0 errori. `node --test tests/`: 20 su 20. Plugin 0.3.0 installato. |
| Controllo delle citazioni sul contenuto | campione | 50 affermazioni lette contro il capitolo: 45 confermate, 5 con un dettaglio aggiunto (corrette). Il resto del registro non è stato letto. |
| 2. Contratto, brief, processo | chiusa | P1 su una domanda cliente: aperte le unità A-006 e B-010 e i capitoli 12 e 16, 74 s, 0,60 $. P2 due volte sullo stesso documento: stessa rubrica, stesso verdetto (1 criterio su 6), 11 rilievi in comune su 14, 5,81 $ e 5,22 $. |
| 3. Spareggi | chiusa | 18 regole su 18 registrate come approvate in `registry/conflicts.tsv`. |
| 4. Piloti | integrati, prove sul campo aperte | A3, B3, C5, D1, E1, F2, G2, H11 e I5 revisionati e registrati come `valido`. |
| 5-8 | da fare | |
Sviluppo condotto con pstack: `swarm` per l'inventario, `architect` per la forma, playbook Multi-phase plan per questo file.

## 1. Cosa cambia

Oggi i 25 skill di marketing e business sono solo conoscenza: un libro ciascuno. `growth` aggiunge il livello di processo: un contratto operativo, 62 playbook, un registro delle unità di lavoro che i libri descrivono, rubriche di verifica e la memoria tra sessioni.

## 2. Quanti playbook: i numeri

Tutti misurati sui file in [research/](research/), salvo dove dico stima.

| Cosa | Numero | Come è stato ottenuto |
| --- | --- | --- |
| Libri letti | 25 | 5 worker in parallelo, ognuno su SKILL.md, patterns, cheatsheet e capitoli |
| Unità (deliverable con una procedura nel libro) | 264 | conteggio delle intestazioni nei 5 file `inventory-*.md` |
| Unità con procedura completa | 216 | colonna `depth` di `units.tsv` |
| Unità parziali, da combinare con un altro libro | 48 | idem |
| Playbook di dominio | 55 | catalogo v2 dopo la mappatura unità per unità |
| Playbook di processo | 7 | trasversali, vedi sezione 4 |
| Totale playbook | 62 | |
| Unità per playbook | da 2 a 10 | `catalog-review.md` |
| Unità senza proprietario | 0 | `units.tsv`, controllato con awk |
| Conflitti tra libri dentro lo stesso playbook | 18, in 14 playbook | `catalog-review.md` sezione 5, ognuno con riga di inventario |
| Unità che richiedono dati esterni | 156 | lettura del campo `data`, giudizio del worker |

Cosa i numeri non dicono. Proprietario e tipo di ogni unità sono un giudizio: 8 casi sono al limite e spostarne uno cambia un conteggio di 1. Il limite a 264 non è il numero di libri ma la regola usata: un'unità entra solo se il libro prescrive una procedura, non se nomina il tema. Con una regola più larga il numero sale, e i playbook diventano più deboli.

Tipi di unità: 125 costruiscono un asset, 73 pianificano, 23 raccolgono dati, 21 sono routine, 11 fanno audit, 11 fanno diagnosi.

## 3. Le due forme considerate

**Forma A, 55 playbook scritti a mano.** Ogni playbook riscrive i passi dei libri. Scartata: i passi vivrebbero in due posti (libro e playbook), le rubriche in un terzo, e ogni libro nuovo obbliga a rileggere tutto.

**Forma B, registro delle unità più playbook sottili (scelta).** Ogni fatto ha un solo proprietario:

- il **libro** possiede il contenuto (capitoli);
- l'**unità** possiede la procedura e i criteri di un deliverable, con il capitolo citato;
- il **playbook** possiede solo l'ordine in cui chiamare le unità e la regola che decide quando due libri si contraddicono;
- la **rubrica** è generata dai criteri delle unità, non scritta;
- il **brief** possiede i fatti del progetto.

Un libro nuovo aggiunge unità al registro; il generatore aggiorna indici e rubriche; il controllo fallisce se un'unità resta senza playbook.

## 4. Architettura

```
growth/
├── .claude-plugin/plugin.json, marketplace.json
├── VERSION, CHANGES.md, CONTEXT.md
├── hooks/                        mandato di routing, solo nei progetti con un brief
├── agents/growth-agent.md, skeptical-buyer.md
├── registry/
│   ├── units.tsv                 una riga per unità: id, libro, tipo, proprietario, stato
│   ├── units/<libro>.md          procedura, criteri e fonti di ogni unità
│   └── conflicts.tsv             i 18 conflitti con la regola che li risolve
├── skills/
│   ├── growth/                   ingresso: /growth
│   │   ├── SKILL.md              contratto: aree, modi, autonomia, regole di risposta
│   │   ├── playbooks/<area>/INDEX.md      generato
│   │   ├── playbooks/<area>/<id>-<nome>.md
│   │   ├── playbooks/process/P1..P7.md
│   │   ├── rubrics/<id>.md       generate dai criteri delle unità
│   │   ├── programs/             catene di playbook (lancio, e-commerce, creator)
│   │   └── worker.md
│   ├── brief/, teardown/, data/, setup-growth/, growth-help/
│   └── <25 libri>/               invariati
├── tools/generate.mjs, check.mjs
└── tests/
```

**Forma di un playbook di dominio** (da 10 a 25 righe): riga di proprietà, campi del brief che legge, unità in ordine, regole di spareggio, dati richiesti, contratto di risposta.

**Instradamento in due passi.** Con 62 playbook il contratto non può elencarli tutti. Elenca le 9 aree e i 7 modi; l'indice dell'area, generato, elenca i suoi playbook.

**I 7 playbook di processo** incrociano quelli di dominio, come in pstack Bug fix e Refactoring incrociano qualsiasi modulo:

| id | Nome | Equivalente pstack |
| --- | --- | --- |
| P1 | Consulto: cosa dicono i libri su X | Investigation |
| P2 | Teardown: audit di un asset esistente contro la sua rubrica | interrogate |
| P3 | Diagnosi: una metrica cede, trova la causa prima di toccare | Bug fix |
| P4 | Esperimento: una metrica, un cambio alla volta, tieni o annulla | Hillclimb |
| P5 | Programma: piano che concatena più playbook | Multi-phase plan |
| P6 | Brief di progetto | create-verification-skill |
| P7 | Raccolta prove: dati esterni, ogni numero etichettato | benchmark-checklist |

**Strato dati.** Le 16 unità DataForSEO più la visualizzazione dati non appartengono a nessun playbook: sono un passo condiviso che P7 esegue e che gli altri chiamano.

**Stato di ogni playbook**, colonna nel registro: `bozza` (scritto), `valido` (supera `check.mjs` e la revisione indipendente), `provato` (usato su un compito vero, pezzo passato al teardown). Solo `provato` conta come finito.

**Riuso da pstack per nome:** `arena`, `swarm`, `show-me-your-work`, `unslop`, `pause-safely`, `session-pickup`, `reflect`.

## 5. Catalogo v2: 55 playbook di dominio

Tra parentesi le unità possedute. Dettaglio in [research/catalog-review.md](research/catalog-review.md).

| Area | Playbook |
| --- | --- |
| A. Mercato e cliente (5) | A1 Selezione mercato e idea (8) · A2 Nicchia personale (5) · A3 Ricerca clienti: interviste e sondaggi (10) · A4 Jobs to Be Done (6) · A5 Concorrenti e differenziazione (4) |
| B. Posizionamento e offerta (6) | B1 Positioning (9) · B2 Messaging e sales story (3) · B3 Offerta (9) · B4 Prezzo e margini (2) · B5 Servizio produttizzato (6) · B6 Prodotto digitale e community (4) |
| C. Acquisizione (7) | C1 Piano canali e vincolo (3) · C2 Lead magnet e cattura (4) · C3 Outreach caldo e referral (2) · C4 Outreach freddo (3) · C5 Campagna Meta (9) · C6 Creatività ads (5) · C7 Partner: affiliati, agenzie, influencer (6) |
| D. Conversione (6) | D1 Landing page (9) · D2 Store e-commerce: setup, pagina prodotto, CRO (3) · D3 VSL (3) · D4 Headline e hook (3) · D5 Prove e testimonianze (4) · D6 Revisione copy (3) |
| E. Vendita (1) | E1 Script, chiusura e pipeline (8) |
| F. Email e CRM (4) | F1 Strategia, setup e segmentazione (5) · F2 Flussi automatici (10) · F3 Campagne e promo (3) · F4 Newsletter (3) |
| G. SEO e GEO (6) | G1 Audit tecnico (3) · G2 Piano contenuti e keyword (3) · G3 Pagina o articolo (3) · G4 Autorità (5) · G5 Misura e diagnosi traffico (3) · G6 Aggiornamento contenuti (2) |
| H. Contenuti e creator (12) | H1 Profilo LinkedIn (2) · H2 Strategia contenuti social (5) · H3 Storytelling personale (2) · H4 Strategia canale YouTube (3) · H5 Packaging video (2) · H6 Script video (2) · H7 Produzione video (5) · H8 Riuso e distribuzione (4) · H9 Monetizzazione creator (3) · H10 Visual AI (6) · H11 Post e batch settimanale (6) · H12 Crescita audience e networking (4) |
| I. Brand, e-commerce e scala (8) | I1 Brand foundation (4) · I2 Fornitori ed economia unitaria (3) · I3 Lancio (3) · I4 Retention e churn (5) · I5 Diagnosi di stadio e priorità (2) · I6 Espansione (5) · I7 Sistema operativo (6) · I8 Assunzioni (4) |

## 6. I 18 conflitti

Sono il vero lavoro manuale: dove due libri dicono il contrario, il playbook deve dichiarare chi vince e quando. Esempi dal file:

- **A3, domande d'intervista.** Mom Test vieta "compreresti?"; lo script di validazione di Gretta lo chiede.
- **B3, sconto.** *$100M Offers* dice mai scontare; lo Scaling Roadmap usa una scala di sconti in cambio di recensioni.
- **C5, quando spegnere un annuncio.** Hormozi ragiona sul tetto di cassa, Thomas sulle impressioni.
- **G4, metrica dei link.** *Doing Content Right* punta alla Domain Authority; *SEO 2026* dice che Google non la usa.
- **H7, luci e microfono.** Ali Abdaal: una luce, niente lavalier. Oliur: tre luci, DJI Mic.

Alcuni si risolvono con una condizione (stadio del business, budget). Altri sono una tua scelta. Te li porto tutti e 18 in una tabella con il default che propongo.

## 7. Fasi

Ogni fase ha un'uscita controllabile. Le durate sono stime.

### Fase 1. Registro e attrezzi (stima 2 ore)
- [ ] Promuovere `research/` a `registry/`: `units.tsv`, `units/<libro>.md`, `conflicts.tsv`.
- [ ] `generate.mjs`: indici di area e rubriche dai criteri delle unità.
- [ ] `check.mjs`: ogni unità ha un proprietario esistente, ogni playbook cita unità esistenti, ogni capitolo citato esiste su disco, ogni conflitto ha una regola.
- [ ] Test che dimostra che `check.mjs` fallisce su un albero rotto di proposito.
- [ ] Spostare i 25 libri in `growth/skills/` e installare il plugin in locale.
- **Uscita:** `check.mjs` verde; il controllo dei capitoli citati stampa quante citazioni ha risolto su quante; `claude plugin details growth` elenca i libri.

### Fase 2. Contratto, brief, processo (stima 3 ore)
- [ ] `skills/growth/SKILL.md`, `worker.md`, i due agenti.
- [ ] `brief`, `teardown`, `data`.
- [ ] I 7 playbook di processo.
- **Uscita:** P1 su una domanda vera di un cliente: la trascrizione mostra i capitoli aperti. P2 su una landing esistente: ogni rilievo cita riga e criterio, e due esecuzioni concordano sui rilievi principali.

### Fase 3. Spareggi (stima 1 ora, più la tua revisione)
- [ ] Tabella dei 18 conflitti con default proposto.
- **Uscita:** `conflicts.tsv` senza righe vuote, approvata da te.

### Fase 4. Un playbook pilota per area (stima 5 ore)
- [x] 9 playbook, uno per area, scritti a mano per fissare il modello sui diversi tipi di unità.
- [ ] Ognuno provato su un compito vero prima del successivo.
- **Uscita:** 9 playbook in stato `provato`.

### Fase 5. Gli altri 46 (stima 4 ore di orologio)
- [ ] `swarm` per area: ogni worker scrive i playbook dal registro secondo il modello della fase 4.
- [ ] Revisore indipendente per area, che non ha scritto.
- **Uscita:** 55 playbook almeno `valido`. Restano `bozza` quelli che il revisore boccia, elencati.

### Fase 6. Programmi, principi, hook, help (stima 3 ore)
- [ ] Programmi derivati dal grafo upstream/downstream delle unità.
- [ ] Principi trasversali: regole che tornano in almeno due autori.
- [ ] Hook attivo solo con brief presente, `setup-growth`, `growth-help`.

### Fase 7. Prova che serve (stima 2 ore)
- [ ] Confronto alla cieca secondo il playbook Eval di pstack: 3 richieste vere, con e senza `growth`.
- **Uscita:** verdetto del giudice più lettura mia. Se `growth` non vince, lo dico.

### Fase 8. Promozione a `provato`, continua
- [ ] Ogni volta che usi un playbook `valido` su un lavoro vero, passa per il teardown e cambia stato.
- [ ] `book-to-skill` aggiunge le unità dei libri nuovi al registro.

## 8. Costo

Misurato: l'inventario e la mappatura hanno consumato circa 1,39 milioni di token di subagenti su Opus (somma dei 6 report: 179k, 226k, 280k, 221k, 182k, 305k). Questo numero conta anche le riletture dei file fatte dai worker, quindi sovrastima il contenuto prodotto.

Stima per le fasi da 1 a 7: tra 3 e 5 milioni di token di subagenti, quasi tutti nelle fasi 4 e 5. Non ho una misura per confermarla.

## 9. Cosa resta fuori

In `Book to Skill/.claude/skills/`: `agile-technical-practices`, `bugl-fullstack-react`, `rogov-postgresql-internals`, `secure-source-code`, `shopify-development`, `book-to-skill`, `viada-hybrid-athlete`, `liguori-limitless`, `clona-carosello`. `welsh-linkedin copia` è identico a `welsh-linkedin` (verificato con `diff -rq`).

## 10. Cosa non è provato

- Che una rubrica estratta dai libri predica cosa converte. È un sostituto dichiarato.
- Che i criteri dell'inventario corrispondano tutti ai capitoli citati: i worker hanno citato i file, ma nessuno ha ancora ricontrollato le citazioni. Lo fa `check.mjs` in fase 1 per l'esistenza dei file, e un campione letto a mano per il contenuto.
- Che il teardown dia rilievi stabili tra due esecuzioni.
- Che 46 playbook scritti da worker reggano l'uso reale: per questo esiste lo stato `provato`.
