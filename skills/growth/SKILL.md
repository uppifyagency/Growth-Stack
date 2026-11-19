---
name: growth
description: "Ingresso unico per il lavoro di marketing e business: mercato, positioning, offerta, lead, ads, landing, copy, vendita, email, SEO e GEO, contenuti, e-commerce, scala. Instrada la richiesta al playbook giusto, che compone le procedure dei libri e verifica il risultato su una rubrica. Usa per /growth e per ogni richiesta che produce, valuta o diagnostica un asset di marketing."
argument-hint: "[richiesta, oppure id di un playbook come B3 o P2]"
---

# Growth

I libri sono la conoscenza. Questo skill è il modo di lavorarci. Tre livelli, ognuno con un solo proprietario:

- **Libro** (`<plugin>/skills/<libro>/`): capitoli, cheatsheet, pattern.
- **Unità** (`<plugin>/registry/units/<libro>.md`, indice in `<plugin>/registry/units.tsv`): un deliverable per cui un libro prescrive una procedura, con passi, criteri e capitolo citato.
- **Playbook** (`playbooks/`): un tipo di lavoro. Dice in che ordine chiamare le unità e chi vince quando due libri si contraddicono. La rubrica che lo giudica sta in `rubrics/<id>.md` ed è generata dai criteri delle unità.

**Percorsi.** `<plugin>` è la radice del plugin: due cartelle sopra quella che contiene questo file (questo file sta in `<plugin>/skills/growth/`). Il registro è `<plugin>/registry/`, i libri sono `<plugin>/skills/<libro>/`. Calcola `<plugin>` una volta dal percorso di questo skill e usa percorsi assoluti.

## Primo messaggio

Riformula in una riga l'obiettivo e l'asset che l'utente si aspetta. Nomina il modo e il playbook scelti, poi procedi. Se la richiesta nomina un id, apri quello.

## Instradamento

Scegli prima il modo, poi l'area. Un asset nuovo usa il playbook di dominio. Un asset che esiste già usa P2. Una metrica che cede usa P3.

| Modo | Quando |
| --- | --- |
| [P1 Consulto](playbooks/process/P1-consulto.md) | domanda su cosa dicono i libri, nessun asset da produrre |
| [P2 Teardown](playbooks/process/P2-teardown.md) | audit di un asset che esiste già |
| [P3 Diagnosi](playbooks/process/P3-diagnosi.md) | una metrica cede e la causa non è nota |
| [P4 Esperimento](playbooks/process/P4-esperimento.md) | migliorare una metrica con prove ripetute |
| [P5 Programma](playbooks/process/P5-programma.md) | lavoro che attraversa più playbook |
| [P6 Brief](playbooks/process/P6-brief.md) | manca il contesto di progetto, o va aggiornato |
| [P7 Raccolta prove](playbooks/process/P7-raccolta-prove.md) | servono dati esterni prima di decidere |

| Area | Indice dei playbook |
| --- | --- |
| A. Mercato e cliente | [a-mercato](playbooks/a-mercato/INDEX.md) |
| B. Posizionamento e offerta | [b-offerta](playbooks/b-offerta/INDEX.md) |
| C. Acquisizione | [c-acquisizione](playbooks/c-acquisizione/INDEX.md) |
| D. Conversione | [d-conversione](playbooks/d-conversione/INDEX.md) |
| E. Vendita | [e-vendita](playbooks/e-vendita/INDEX.md) |
| F. Email e CRM | [f-email](playbooks/f-email/INDEX.md) |
| G. SEO e GEO | [g-seo](playbooks/g-seo/INDEX.md) |
| H. Contenuti e creator | [h-contenuti](playbooks/h-contenuti/INDEX.md) |
| I. Brand, e-commerce e scala | [i-scala](playbooks/i-scala/INDEX.md) |

L'indice dell'area elenca ogni playbook con stato e unità. Per trovare un libro o un tema parti da [references/library.md](references/library.md).

Copia i passi del playbook nella todolist prima di iniziare. Un passo che salti resta in lista con `saltato: <motivo>`.

**Stato dei playbook.** `todo`: il file non esiste ancora. Lavora dalle unità elencate nell'indice seguendo la [forma standard](#forma-di-un-playbook-di-dominio) e dillo nella risposta. `bozza`: scritto, non revisionato. `valido`: revisionato da chi non l'ha scritto. `provato`: usato su un lavoro vero e passato al teardown.

## Regole fisse

- **Il brief prima di tutto.** Leggi `.growth/brief.md` nel progetto. Se manca e il playbook produce un asset, esegui P6 prima. Non inventare fatti sul business: un fatto che manca è una domanda all'utente o un'ipotesi scritta come ipotesi.
- **Apri la fonte.** Prima di scrivere apri l'unità nel registro e i capitoli che cita. Il ricordo del libro non è una fonte. L'unità è un riassunto: se un suo dettaglio (un numero, una soglia, un tempo) non compare nel capitolo, vale il capitolo, e lo segnali nella risposta.
- **Cita.** Ogni framework applicato porta libro e capitolo. Chi legge deve poter aprire il file.
- **Etichetta i numeri.** Ogni numero è `misurato` (con fonte e data), `documentato` (con libro e capitolo) o `stima`. Un numero di un libro è un riferimento dell'autore, non un dato del progetto.
- **Conflitti.** Quando due unità dello stesso playbook si contraddicono, applica la regola in `<plugin>/registry/conflicts.tsv`. Se la regola è vuota, mostra le due posizioni con le fonti, scegli quella che il brief giustifica e dichiara la scelta.
- **Chi scrive non giudica.** Un asset finito passa dal teardown (skill `growth:teardown`) prima della consegna. La rubrica è un sostituto del mercato, non il mercato: dillo ogni volta che riporti un verdetto.
- **Dati.** Un numero esterno si raccoglie con lo skill `growth:data`.
- **Prosa.** Applica lo skill `pstack:unslop` al testo che consegni, quando è installato.

## Autonomia

Procedi senza chiedere su tutto ciò che si può annullare: bozze, analisi, file nel progetto. Fermati e chiedi prima di inviare un messaggio a una persona, pubblicare, spendere (budget pubblicitario, API a pagamento come DataForSEO) o cancellare.

Se l'utente propone un approccio che i libri o i dati smentiscono, dillo con la fonte. L'accordo non è il default.

## Subagenti e workflow

Usa `subagent_type: "growth:growth-agent"` per i delegati. La prima riga di ogni incarico è `Leggi <percorso>/worker.md prima di tutto.`, con il percorso assoluto di questa cartella. L'incarico porta l'obiettivo, il percorso del brief, gli id delle unità e cosa riportare.

Quando pstack è installato, usa i suoi workflow per nome: `pstack:arena` per più varianti dello stesso asset, `pstack:swarm` per letture o ricerche in parallelo, `pstack:show-me-your-work` per il registro delle decisioni di un lavoro lungo, `pstack:reflect` a fine lavoro. I modelli per ruolo sono quelli di `pstack-models.md`: `judgment and prose` per chi scrive un asset, `swarm workers` per chi legge o raccoglie. Il giudice di un teardown gira su un modello diverso da chi ha scritto, quando ce n'è uno. Senza pstack, fai gli stessi passi in sequenza e dichiaralo.

## Forma di un playbook di dominio

```markdown
# <id> <nome>

**Possiedi <cosa>.** <una riga su cosa consegna e cosa no>

Brief: <campi del brief che servono>
Dati: <cosa raccogliere con growth:data, o nessuno>

1. <passo: quale unità, cosa produce> (`<unit_id>`)
2. ...

Spareggi: <regola per ogni conflitto del playbook, con l'id del conflitto>

**Risposta:** <cosa contiene la consegna>
```

Da 10 a 25 righe. Il playbook non riscrive i passi dell'unità: la nomina e dice cosa prendere dal suo risultato.

## La risposta

Prima l'asset o la risposta, per intero. Poi le fonti (libro e capitolo per ogni framework). Poi il verdetto del teardown con i rilievi rimasti aperti. In fondo cosa non è provato: ipotesi sul business, numeri stimati, spareggi scelti senza regola.
