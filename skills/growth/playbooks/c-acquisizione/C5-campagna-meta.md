# C5 Campagna Meta

**Possiedi la configurazione, il budget, il retargeting e la diagnosi delle campagne Meta. C6 Creatività ads consegna gli annunci, D1 Landing page la destinazione e F2 Flussi automatici il seguito dei lead.**

Brief: Business, Cliente ideale, Offerta attuale, Canali e numeri, Vincoli.
Dati: con `growth:data` raccogli spesa, impressioni ed eventi da Meta, incassi e costi dal CRM, segnali del Pixel e volumi dei segmenti. Per retargeting, aggiungi catalogo e dati sui segmenti pertinenti.

1. Prendi da C6 promessa e annunci (`B-006`) e da D1 la verifica della destinazione per il traffico ads (`B-018`). Usa `B-007` per ricavare costo di acquisizione sostenibile, tetto di cassa, condizioni di scala e tracciamento necessario.
2. Usa `B-015` per il piano di pubblico e geografie. Se F1 ha già segmenti CRM, integra seed, esclusioni e messaggi abbinati ai flussi F2 da `B-052`.
3. Con pubblico, annunci e destinazione pronti, componi la scheda di lancio con `B-014`. Per una campagna lead, passa evento e campi del form a F2 (`B-019`).
4. Completa il piano di lancio con la finestra di apprendimento e la decisione su quando accelerare o fermarsi, usando il CPA obiettivo dell'evento scelto (`B-020`), entro il limite del passo 1.
5. Passa gli asset a `growth:teardown` con la [rubrica C5](../../rubrics/C5.md). Lancia, pubblica o spendi solo con l'ok dell'operatore.

Varianti del lavoro:

- **Retargeting.** Con una pagina VSL già pronta, prendi da `B-036` la specifica per chat, tracciamento delle prenotazioni ed esclusioni. Usa poi `B-021` per il piano di pubblico e messaggi, anche per il recupero carrello quando è quello il solo incarico.
- **Campagna che rende poco.** Parti da [P3](../process/P3-diagnosi.md) e usa `B-023` per localizzare la leva. Passa la promessa da rifare a C6, la pagina a D1 o la sospetta stanchezza dell'offerta a B3 (`A-009`).
- **Test di una variante.** Da una configurazione di riferimento, prendi da `B-022` la variabile, la metrica e la regola di decisione e passale a [P4](../process/P4-esperimento.md). Il test è distinto dal configurazione iniziale del passo 3.

Spareggi: K06. Spegni il singolo annuncio dopo circa 10.000 impressioni senza eventi. Il tetto di cassa di `B-007` governa la spesa totale del test. Fermati al primo limite che scatta.

**Risposta:** scheda di campagna e piano di spesa, retargeting se richiesto e verdetto sugli asset. Per diagnosi e test, consegna evidenza e ipotesi al playbook della leva o a P4 come indicato sopra.
