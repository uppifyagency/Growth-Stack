---
name: brief
description: "Scrive o aggiorna il brief di progetto (.growth/brief.md): cosa si vende, a chi, con quali prove, con quale voce e sotto quali vincoli. Ogni playbook di growth lo legge prima di lavorare. Usa per 'crea il brief', 'aggiorna il brief', quando un playbook non trova il contesto del business, o all'inizio del lavoro su un progetto nuovo."
argument-hint: "[progetto o campo da aggiornare]"
---

# Brief

Il brief è per `growth` ciò che il codice è per chi programma: la cosa vera da leggere prima di toccare. Vive in `.growth/brief.md` nella cartella del progetto.

## Regola

Ogni riga porta la sua fonte tra parentesi quadre. Una riga senza fonte non entra.

- `[utente, AAAA-MM-GG]`: detto dall'utente in conversazione. Tieni le sue parole quando contano.
- `[file: <percorso>]`: letto in un file del progetto.
- `[misurato: <fonte>, AAAA-MM-GG]`: un numero preso da una piattaforma o da un export.
- `[cliente: <chi>, AAAA-MM-GG]`: parole di un cliente, tra virgolette.
- `[ipotesi]`: non verificato. Un playbook può usarlo solo dichiarandolo.

## Procedura

1. Leggi il brief se esiste. Stai aggiornando, non riscrivendo.
2. Cerca nel progetto prima di chiedere: README, documenti di offerta, pagine pubblicate, export di piattaforme, vecchi piani. Riempi ciò che trovi, con la fonte.
3. Chiedi all'utente solo i campi che mancano e che il prossimo playbook richiede, tutti in una volta. Se non risponde, scrivi `[ipotesi]` o lascia vuoto.
4. Scrivi il file nel formato qui sotto. Un campo vuoto resta con `da raccogliere`.
5. Rileggi il file dal disco e controlla che ogni riga abbia la fonte.

Non abbellire. Le parole dei clienti restano come sono state dette, errori compresi: servono al copy più di una parafrasi.

## Formato

```markdown
# Brief: <progetto>
Aggiornato: AAAA-MM-GG

## Business
Cosa vende, a che prezzo, come consegna, da quanto, con quanti clienti.

## Cliente ideale
Chi compra oggi (i migliori clienti, non il mercato teorico), cosa cercava di ottenere, cosa usava prima, cosa lo ha fatto decidere.

## Alternative
Cosa farebbe il cliente se questo prodotto non esistesse: concorrenti, fai da te, non fare nulla.

## Offerta attuale
Promessa, cosa include, garanzia, bonus, scadenze, nome.

## Prove
Risultati di clienti, testimonianze tra virgolette, numeri, casi, loghi. Ognuna con chi e quando.

## Voce
Tre esempi di testo già scritto dal brand che suonano giusti. Parole da usare e da evitare.

## Canali e numeri
Per ogni canale attivo: volume, costo, tasso di conversione, periodo.

## Vincoli
Budget, tempi, vincoli legali e di settore, cosa non si può promettere, strumenti in uso.

## Decisioni
AAAA-MM-GG: cosa è stato deciso e perché. Solo in aggiunta.
```

## Risposta

Il percorso del file, i campi scritti con la fonte, i campi `da raccogliere` e quale playbook ne avrà bisogno.
