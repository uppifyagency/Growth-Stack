![Growth-Stack — pstack applied to growth marketing](assets/growth-stack.svg)

# Growth-Stack

Porta un brief in Claude Code per costruire un’offerta, una landing o una campagna. Se hai già una bozza, portala direttamente al teardown. In entrambi i casi puoi risalire dal documento al criterio usato per giudicarlo, fino al capitolo da cui viene.

[Installa](#installazione) · [Comandi](#comandi) · [Composizione](#composizione) · [Teardown](#teardown) · [Playbook](#playbook) · [Processi](#processi) · [Skill](#skill) · [Agenti](#agenti)

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

Scegli il lavoro dal risultato che ti serve. Per esempio, **B3** definisce cosa vendi, **D1** usa quell’offerta per costruire la pagina e **F2** prepara le email che partono quando un contatto lascia i suoi dati. Puoi richiamare ciascuno con il suo ID, come in `/growth:growth D1 Scrivi la landing per l’offerta in offerta.md`.

Il registro comprende **55 playbook di dominio**. I nove qui sotto hanno una procedura scritta e revisionata (stato `valido`). Ogni link nella prima colonna apre l’indice dell’area con le unità e le rubriche.

| Area | Playbook revisionato | Cosa ottieni |
| --- | --- | --- |
| [Mercato e cliente](skills/growth/playbooks/a-mercato/INDEX.md) | [A3 · Ricerca clienti: interviste e sondaggi](skills/growth/playbooks/a-mercato/A3-ricerca-clienti.md) | Segmento, invito, traccia di intervista e sintesi delle risposte. |
| [Posizionamento e offerta](skills/growth/playbooks/b-offerta/INDEX.md) | [B3 · Offerta](skills/growth/playbooks/b-offerta/B3-offerta.md) | Documento d’offerta con risultato promesso, consegne, condizioni e ipotesi. |
| [Acquisizione](skills/growth/playbooks/c-acquisizione/INDEX.md) | [C5 · Campagna Meta](skills/growth/playbooks/c-acquisizione/C5-campagna-meta.md) | Struttura della campagna Meta, budget e criteri per intervenire. |
| [Conversione](skills/growth/playbooks/d-conversione/INDEX.md) | [D1 · Landing page](skills/growth/playbooks/d-conversione/D1-landing-page.md) | Pagina con messaggio, prove e percorso verso la conversione. |
| [Vendita](skills/growth/playbooks/e-vendita/INDEX.md) | [E1 · Vendita: script, chiusura e pipeline](skills/growth/playbooks/e-vendita/E1-vendita.md) | Traccia della call, gestione delle obiezioni e avanzamento in pipeline. |
| [Email e CRM](skills/growth/playbooks/f-email/INDEX.md) | [F2 · Flussi automatici](skills/growth/playbooks/f-email/F2-flussi-automatici.md) | Sequenze email con evento di ingresso e messaggi collegati. |
| [SEO e GEO](skills/growth/playbooks/g-seo/INDEX.md) | [G2 · Piano contenuti e keyword](skills/growth/playbooks/g-seo/G2-piano-contenuti-keyword.md) | Mappa delle keyword, brief dei contenuti e link interni. |
| [Contenuti e creator](skills/growth/playbooks/h-contenuti/INDEX.md) | [H11 · Post e batch settimanale](skills/growth/playbooks/h-contenuti/H11-post-batch-settimanale.md) | Archivio di idee e post da programmare nella settimana. |
| [Brand ed e-commerce](skills/growth/playbooks/i-scala/INDEX.md) | [I5 · Diagnosi di stadio e priorita](skills/growth/playbooks/i-scala/I5-diagnosi-stadio.md) | Diagnosi del vincolo principale e ordine di intervento. |

<details>
<summary>Esplora anche i playbook pianificati per area</summary>

Per le voci con stato `todo`, il plugin può lavorare dalle unità già raccolte nell’indice dell’area e segnala che la procedura dedicata è ancora da scrivere.

- **Mercato e cliente** — A1 Selezione mercato e idea · A2 Nicchia personale · A4 Jobs to Be Done · A5 Concorrenti e differenziazione.
- **Posizionamento e offerta** — B1 Positioning · B2 Messaging e sales story · B4 Prezzo e margini · B5 Servizio produttizzato · B6 Prodotto digitale e pre-vendita (build, community).
- **Acquisizione** — C1 Piano canali e vincolo · C2 Lead magnet e cattura · C3 Outreach caldo e referral · C4 Outreach freddo · C6 Creativita ads · C7 Partner: affiliati, agenzie, influencer e giveaway.
- **Conversione** — D2 Store e-commerce: setup, pagina prodotto, CRO · D3 VSL · D4 Headline e hook · D5 Prove e testimonianze · D6 Revisione copy.
- **Email e CRM** — F1 Strategia, setup e segmentazione email · F3 Campagne e promo email · F4 Newsletter.
- **SEO e GEO** — G1 Audit tecnico · G3 Pagina o articolo SEO-GEO · G4 Autorita · G5 Misura e diagnosi traffico · G6 Aggiornamento contenuti.
- **Contenuti e creator** — H1 Profilo LinkedIn · H2 Strategia contenuti social · H3 Storytelling personale · H4 Strategia canale YouTube · H5 Packaging video · H6 Script video · H7 Produzione video · H8 Riuso e distribuzione · H9 Monetizzazione creator · H10 Visual AI · H12 Crescita audience e networking.
- **Brand ed e-commerce** — I1 Brand foundation · I2 Fornitori ed economia unitaria (DTC fisico) · I3 Lancio (pre-vendita, waitlist, fasi, drop) · I4 Retention e churn · I6 Espansione · I7 Sistema operativo · I8 Assunzioni.

</details>

## Processi

I playbook di dominio descrivono il lavoro da consegnare. I sette processi stabiliscono come affrontarlo. Per esempio, una landing da scrivere parte da D1, una landing già online da valutare parte da P2 e un calo delle conversioni di origine incerta parte da P3.

| Processo | Quando usarlo | Stato nel registro |
| --- | --- | --- |
| [P1 · Consulto](skills/growth/playbooks/process/P1-consulto.md) | Vuoi confrontare ciò che dicono le fonti su una domanda precisa. | `provato` |
| [P2 · Teardown](skills/growth/playbooks/process/P2-teardown.md) | Hai un asset da valutare con una rubrica e il brief del cliente. | `provato` |
| [P3 · Diagnosi](skills/growth/playbooks/process/P3-diagnosi.md) | Una metrica è peggiorata e devi individuare la causa. | `bozza` |
| [P4 · Esperimento](skills/growth/playbooks/process/P4-esperimento.md) | Vuoi cambiare una variabile e misurare l’effetto rispetto a una base. | `bozza` |
| [P5 · Programma](skills/growth/playbooks/process/P5-programma.md) | Devi mettere in ordine lavori che dipendono uno dall’altro. | `bozza` |
| [P6 · Brief di progetto](skills/growth/playbooks/process/P6-brief.md) | Inizi un progetto o devi aggiornare pubblico, prove e vincoli. | `bozza` |
| [P7 · Raccolta prove](skills/growth/playbooks/process/P7-raccolta-prove.md) | Ti manca un dato che potrebbe cambiare la decisione. | `bozza` |

`provato` indica l’uso su un lavoro reale. `bozza` indica una procedura scritta ancora da revisionare. Il registro contiene anche **DL**, la voce dedicata alle fonti dati, con stato `todo`. La raccolta operativa è già disponibile tramite la skill `growth:data`. [Registro completo](registry/playbooks.tsv)

## Skill

Il plugin installa **29 skill**. Le prime quattro servono a lavorare sul progetto. Le altre 25 contengono i metodi e i riferimenti che i playbook consultano. Puoi partire da una richiesta in linguaggio naturale e lasciare a `/growth:growth` la scelta delle fonti.

| Skill operativa | Quando aprirla |
| --- | --- |
| [growth](skills/growth/SKILL.md) | Parti da un obiettivo. Sceglie il playbook, apre le fonti e compone la consegna. |
| [brief](skills/brief/SKILL.md) | Fissa i fatti del progetto in `.growth/brief.md` prima di produrre un asset. |
| [data](skills/data/SKILL.md) | Raccogli una misura utile a una decisione e conserva fonte, data e query. |
| [teardown](skills/teardown/SKILL.md) | Sottoponi un asset esistente ai revisori e verifica ogni rilievo. |

### Biblioteca delle 25 skill di riferimento

Ogni nome apre la relativa skill. Per esempio, per preparare interviste parti da **Fitzpatrick**. Per trasformare i risultati in un’offerta consulta **Hormozi Offers**. Per portarla su una pagina trovi **Shleyner** sotto copy e conversione.

| Ambito | Skill e applicazioni |
| --- | --- |
| Ricerca e posizionamento | [Fitzpatrick](skills/fitzpatrick-mom-test/SKILL.md) (interviste) · [Christensen](skills/christensen-jobs/SKILL.md) (Jobs to Be Done) · [Dunford](skills/dunford-positioning/SKILL.md) (posizionamento) · [Internet Pipes](skills/gtm-internet-pipes/SKILL.md) (ricerca di mercato) |
| Offerta e crescita | [Hormozi Offers](skills/hormozi-offers/SKILL.md) (offerte e prezzi) · [Hormozi Leads](skills/hormozi-leads/SKILL.md) (lead e canali) · [Hormozi Scaling](skills/hormozi-scaling/SKILL.md) (stadio e vincoli) · [Butcher](skills/butcher-productize/SKILL.md) (servizi a pacchetto) · [Gray](skills/gray-founder-os/SKILL.md) (organizzazione del lavoro del founder) |
| Copy, conversione e vendita | [Drew](skills/drew-sucks-framework/SKILL.md) (messaggi e prove) · [Shleyner](skills/shleyner-landing-pages/SKILL.md) (landing page) · [Neville](skills/neville-copywriting/SKILL.md) (copy di vendita) · [Fazio](skills/fazio-vsl/SKILL.md) (video di vendita) · [Liguori](skills/liguori-persuasystem/SKILL.md) (persuasione e trattative) |
| E-commerce e campagne | [Gretta](skills/gretta-start-scale/SKILL.md) (lancio e crescita di brand) · [Instagram Performance Marketing](skills/instagram-performance-marketing/SKILL.md) (campagne e creatività) · [Advanced Email Marketing](skills/advanced-email-marketing/SKILL.md) (segmentazione e automazioni) |
| Ricerca organica e dati | [Doing Content Right](skills/doing-content-right/SKILL.md) (piano editoriale e distribuzione) · [SEO 2026](skills/seo-2026-sota/SKILL.md) (SEO e GEO) · [DataForSEO](skills/dataforseo/SKILL.md) (dati su keyword, SERP e backlink) |
| Creator e produzione | [Ali Abdaal](skills/ali-abdaal-youtuber/SKILL.md) (canale YouTube) · [Oliur](skills/oliur-video-creator/SKILL.md) (produzione video) · [Welsh Idea to Audience](skills/welsh-idea-audience/SKILL.md) (pubblico e prodotti digitali) · [Welsh LinkedIn](skills/welsh-linkedin/SKILL.md) (profilo e post) · [AI Visual Prompting](skills/ai-visual-prompting/SKILL.md) (brief e prompt visivi) |

Le skill raccolgono **254 file di capitoli**. Il registro organizza i metodi in **264 unità** e documenta **18 regole di spareggio approvate** per le fonti che danno indicazioni diverse. [Indice delle unità](registry/units.tsv) · [Mappa tra fonti e playbook](skills/growth/references/library.md) · [Regole di spareggio](registry/conflicts.tsv)

## Agenti

Il plugin include due agenti. Durante un teardown, il primo riceve due incarichi separati. Il secondo legge il documento dalla prospettiva del cliente.

| Agente | Incarico |
| --- | --- |
| [growth-agent](agents/growth-agent.md) | Esegue il lavoro assegnato con brief e unità. Nel teardown un’istanza valuta la rubrica e un’altra verifica i fatti. |
| [skeptical-buyer](agents/skeptical-buyer.md) | Interpreta il cliente descritto nel brief e indica il punto in cui perde fiducia, smette di leggere o resta con una domanda aperta. |

Se l’ambiente non consente subagenti, la procedura esegue i tre ruoli in sequenza e dichiara il limite di indipendenza nel verdetto. [Istruzioni del teardown](skills/teardown/SKILL.md)

## Licenza e attribuzioni

Il software originale di Growth-Stack è distribuito con [licenza MIT](LICENSE). Libri, corsi, marchi e materiale di terzi appartengono ai rispettivi titolari. La licenza del progetto copre soltanto i diritti che i contributori possono concedere.

Il progetto si ispira a pstack di Lauren Tan e Michael Denyer.
