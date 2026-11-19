---
name: teardown
description: "Audit avversariale di un asset di marketing (landing, offerta, email, annuncio, script, post) contro la rubrica del suo tipo: tre revisori che non hanno scritto il pezzo, e resta solo il rilievo che cita la riga dell'asset e il criterio violato. Usa per 'teardown', 'fai a pezzi questa pagina', 'audit di questo copy', 'cosa non funziona in', e prima di consegnare un asset prodotto da un playbook di growth."
argument-hint: "<asset: file o URL> [id rubrica]"
---

# Teardown

Tre revisori cercano dove un asset non regge. Un rilievo resta solo se indica la riga dell'asset e la regola che viola. Riporta i rilievi. Non correggere, a meno che l'utente lo chieda.

La rubrica viene dai libri. Dice se l'asset rispetta ciò che i libri prescrivono, non se convertirà. Scrivilo nel verdetto.

## Inquadra

1. L'asset reale, su file. Di una pagina pubblicata salva il testo in un file, con le righe numerate, così ogni revisore cita le stesse righe.
2. La rubrica: `../growth/rubrics/<id>.md`, dove l'id è il playbook che possiede quel tipo di asset. Se non sai quale, guarda gli indici in `../growth/playbooks/`.
3. Il brief: `.growth/brief.md`. Dà al cliente scettico un cliente da interpretare e al verificatore le prove ammesse.
4. L'intento in una riga: a chi parla l'asset e quale azione deve ottenere.

## Apri i revisori

Avvia i tre in un solo messaggio, ognuno come subagente separato, su un modello diverso da quello che ha scritto l'asset quando ce n'è uno. Ogni incarico inizia con `Leggi <percorso>/worker.md prima di tutto.` (la cartella `../growth/`) e porta asset, rubrica, brief e intento come percorsi di file.

- **Revisore di rubrica** (`growth:growth-agent`). Scorre la rubrica criterio per criterio. Per ognuno: `passa` con la riga che lo soddisfa, `non passa` con la riga che lo viola o con "assente" se manca la parte, `non applicabile` con il motivo.
- **Cliente scettico** (`growth:skeptical-buyer`). Legge l'asset come il cliente descritto nel brief. Riporta la riga in cui smette di credere, quella in cui smette di leggere, ogni domanda che l'asset gli lascia senza risposta.
- **Verificatore dei fatti** (`growth:growth-agent`). Elenca ogni affermazione verificabile dell'asset: numeri, risultati, testimonianze, confronti, garanzie. Per ognuna cerca la prova nel brief. Riporta quelle senza prova e quelle che contraddicono il brief.

Ogni rilievo ha: la riga dell'asset tra virgolette con il numero, il criterio violato (id dell'unità e testo) oppure il fatto del brief, e una frase sul perché. Nessuna opinione di stile senza un criterio.

Se un revisore non risponde, procedi con gli altri e dichiaralo. Se i subagenti non sono disponibili, esegui i tre ruoli in sequenza e dichiara che il giudizio non è indipendente.

## Verifica

Rileggi ogni rilievo contro l'asset. Tieni quello in cui la riga citata esiste e viola davvero il criterio. Scarta il resto. Unisci i rilievi che hanno la stessa causa.

## Risultato

- **Intento**: la riga dell'inquadramento.
- **Rubrica**: criteri che passano su criteri applicabili.
- **Rilievi**: in ordine di peso. Prima ciò che riguarda promessa, pubblico e prova, poi il resto. Ognuno con riga, criterio, e i revisori che l'hanno trovato.
- **Scartati**: per revisore, quanti e perché.
- **Limite**: la rubrica è un sostituto del mercato.

## Dopo una correzione

Riesegui solo il revisore di rubrica sulle parti cambiate. Dopo due giri, un rilievo ancora aperto si riporta all'utente con le alternative, invece di un terzo giro.
