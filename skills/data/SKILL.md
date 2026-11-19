---
name: data
description: "Raccoglie i dati che servono a una decisione di marketing (volumi di ricerca, SERP, concorrenti, annunci attivi, numeri del progetto) e li scrive con fonte, data, query ed etichetta misurato, documentato o stima. Usa prima di validare una domanda di mercato, scegliere un canale, diagnosticare una metrica, o ogni volta che un playbook di growth chiede un numero."
argument-hint: "<la decisione che il dato deve servire>"
---

# Data

Un numero entra nel lavoro solo se un altro lo può rifare.

`<plugin>` è la radice del plugin: due cartelle sopra quella che contiene questo file.

## Prima di raccogliere

Scrivi la decisione che il dato serve e il risultato che la cambierebbe. Poi chiediti cos'altro quel numero potrebbe misurare: un volume di ricerca misura chi cerca una parola, non chi compra; il tasso di una pagina dipende da chi ci arriva. Se pstack è installato applica `pstack:principle-explain-the-number`.

## Ordine delle fonti

1. **Dati del progetto**: analytics, account pubblicitario, CRM, export. Sono l'unica fonte per le metriche del progetto. Vanno nel brief con `[misurato: ...]`.
2. **Fonti pubbliche**: ricerca web, pagine dei concorrenti, recensioni, librerie di annunci, community. Gratuite.
3. **API a pagamento**: DataForSEO tramite lo skill `growth:dataforseo`, che elenca endpoint e costi. Prima della prima chiamata della sessione di' all'utente cosa chiamerai e il costo stimato, e aspetta l'ok.

Le procedure dei libri per ogni tipo di dato sono le unità dello strato dati: `<plugin>/registry/units/dataforseo.md` per gli endpoint, e le unità di tipo `data` in `<plugin>/registry/units.tsv` per i metodi di ricerca.

## Come si scrive un numero

Ogni numero va in `.growth/evidence/AAAA-MM-GG-<slug>.md` con:

- valore e unità;
- fonte, e la query o il percorso esatti per rifarlo;
- data di raccolta e periodo a cui si riferisce;
- dimensione del campione, quando esiste;
- etichetta: `misurato` (letto dalla fonte in questa sessione), `documentato` (riportato da un libro o da un documento, con il riferimento), `stima` (calcolato o ipotizzato, con il calcolo).

Un riferimento preso da un libro è `documentato`: è il numero dell'autore nel suo contesto, non un dato di questo mercato.

## Regole

- Una domanda di mercato si dice confermata con due fonti indipendenti. Una fonte sola è un indizio (`A-036` in `<plugin>/registry/units/gtm-internet-pipes.md`).
- Riporta i risultati nulli. "Cercato X, trovato niente" è un dato.
- Non arrotondare a favore della tesi. Se le fonti divergono, riporta entrambe.
- Non mettere credenziali, email o dati personali di clienti nel file di prove.

## Risposta

La decisione, i numeri con i campi qui sopra, cosa non si è potuto raccogliere e perché, il costo sostenuto, il percorso del file.
