![Growth-Stack — pstack applied to growth marketing](assets/growth-stack.svg)

# Growth-Stack

Porta un brief in Claude Code per costruire un’offerta, una landing o una campagna. Se hai già una bozza, portala direttamente al teardown. In entrambi i casi puoi risalire dal documento al criterio usato per giudicarlo, fino al capitolo da cui viene.

[Installa](#installazione) · [Comandi](#comandi) · [Composizione](#composizione) · [Teardown](#teardown) · [Playbook](#playbook)

## Installazione

Esegui questi comandi in Claude Code, uno alla volta.

```text
/plugin marketplace add uppifyagency/Growth-Stack
/plugin install growth@growth-local
```

Apri il progetto su cui vuoi lavorare e parti dal brief. Se hai già interviste, prezzi o testimonianze in un file, indica il percorso. Il plugin raccoglie pubblico, offerta, prove e vincoli in `.growth/brief.md`, che puoi aggiornare prima del lavoro successivo.

```text
/growth:brief Prepara il brief per il servizio di onboarding. Parti da note/interviste.md.
```

## Comandi

Il comando principale è la skill `growth`. Nel plugin installato puoi richiamarla con il nome completo `/growth:growth`. Descrivi il lavoro in italiano oppure indica un playbook per ID.

| Cosa vuoi fare | Comando di esempio |
| --- | --- |
| Scegliere da dove partire | `/growth:growth Le visite sono stabili ma ricevo meno richieste di demo. Cosa controllo?` |
| Comporre un’offerta | `/growth:growth B3 Prepara l’offerta usando il brief del progetto.` |
| Aggiornare il brief | `/growth:brief Aggiorna la capacità mensile a quattro clienti.` |
| Valutare una bozza | `/growth:teardown offerta.md B3` |
| Raccogliere dati per una decisione | `/growth:data Quali query italiane conviene coprire nella guida all’onboarding?` |

La raccolta dati registra fonte, data e query. Il plugin chiede conferma prima di usare API a pagamento. [Guida ai dati](skills/data/SKILL.md)

## Composizione

**Dal brief al documento d’offerta.** Immagina uno studio che aiuta i clienti a configurare un CRM. Il brief riporta due fatti: i clienti si bloccano durante l’importazione dei contatti e lo studio può seguire quattro avvii al mese.

```text
/growth:growth B3 Componi l’offerta di onboarding CRM. Usa le interviste del brief per scegliere cosa includere e lascia aperto il prezzo.
```

| Passaggio di B3 | Come cambia l’offerta nell’esempio |
| --- | --- |
| Individua l’ostacolo del cliente | La difficoltà è importare correttamente i contatti. Il documento può promettere una verifica del primo import. |
| Traduci il problema in una consegna | La bozza include una sessione guidata sul file del cliente e un controllo dei campi importati. |
| Applica i vincoli del brief | I quattro avvii mensili spiegano la capacità dello studio. Per dichiarare quanti posti restano serve l’agenda aggiornata. |
| Consegna e verifica | Il documento riporta condizioni, prezzo da definire e capitoli usati. Passa quindi alla rubrica B3. |

Il playbook specifica in quale ordine usare le unità dei libri. Per esempio, A-003 collega problemi, soluzioni e modalità di consegna. Quando due fonti danno indicazioni diverse, il plugin consulta il registro degli spareggi. [Playbook B3](skills/growth/playbooks/b-offerta/B3-offerta.md) · [Registro degli spareggi](registry/conflicts.tsv)

## Teardown

**Dalla promessa alla prova.** Supponi che la riga 8 di `offerta.md` dica «Il tuo team userà il CRM in autonomia entro 48 ore». Il brief documenta la durata della sessione guidata e lascia aperto il tempo necessario per raggiungere l’autonomia.

```text
/growth:teardown offerta.md B3
```

Il **revisore di rubrica** controlla i criteri applicabili all’offerta. Il **cliente scettico** indica dove perde fiducia e quale domanda resta aperta. Il **verificatore dei fatti** confronta le promesse con le prove nel brief.

> **Esempio di rilievo · riga 8.** «In autonomia entro 48 ore» promette un risultato con una scadenza. Per il criterio A-002 manca una prova che renda credibile quella promessa. Il brief documenta quando lo studio tiene la sessione. Quanto tempo impiega poi il cliente a lavorare da solo?

Il verdetto riporta quanti criteri passano sul totale applicabile e ordina i rilievi per peso. Ogni rilievo conservato identifica il passaggio contestato e il criterio o fatto che lo giustifica. Per sapere quanto converte l’offerta serve una prova sul mercato. [Procedura di teardown](skills/teardown/SKILL.md) · [Rubrica B3](skills/growth/rubrics/B3.md)

## Playbook

I nove piloti revisionati coprono un lavoro per area. Nel catalogo hanno stato `valido`. Lo stato `provato` richiede l’uso su un incarico reale e il successivo teardown.

| Mercato e offerta | Acquisizione e vendita | Contenuti e crescita |
| --- | --- | --- |
| A3 · Interviste e sondaggi | C5 · Campagna Meta | G2 · Piano contenuti e keyword |
| B3 · Documento d’offerta | D1 · Landing page | H11 · Post e batch settimanale |
| I5 · Stadio e priorità | E1 · Script e pipeline di vendita | F2 · Flussi email automatici |

Il plugin include **254 file di capitoli**, **264 unità** e **18 regole di spareggio approvate**. Puoi consultare direttamente le fonti e usare i modi di processo per un consulto (P1), un teardown (P2), una diagnosi (P3), un esperimento (P4), un programma (P5), un brief (P6) o una raccolta di prove (P7). [Catalogo con gli stati](registry/playbooks.tsv) · [Biblioteca](skills/growth/references/library.md) · [Guida ai modi](skills/growth/SKILL.md)

## Licenza e attribuzioni

Il software originale di Growth-Stack è distribuito con [licenza MIT](LICENSE). Libri, corsi, marchi e materiale di terzi appartengono ai rispettivi titolari. La licenza del progetto copre soltanto i diritti che i contributori possono concedere.

Il progetto si ispira a pstack di Lauren Tan e Michael Denyer.
