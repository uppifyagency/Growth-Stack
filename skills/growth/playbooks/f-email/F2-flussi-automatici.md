# F2 Flussi automatici

**Possiedi le automazioni e i messaggi attivati da un evento. F1 Strategia, setup e segmentazione email fornisce segmenti e punteggi, F3 Campagne e promo email i lanci a invio programmato e F4 Newsletter gli invii ricorrenti.**

Brief: Business, Cliente ideale, Offerta attuale, Prove, Voce, Canali e numeri, Vincoli.
Dati: con `growth:data` raccogli da ESP, CRM e store gli eventi disponibili, le dimensioni dei segmenti e i flussi attivi. Per la variante scelta verifica anche consenso al tracciamento, storico degli acquisti o attributi necessari al trigger.

1. Parti dall'evento e dall'azione attesa. Prendi da F1 i segmenti e, per i lead, il punteggio se disponibile (`B-045`). Con `B-038` definisci ingresso, esclusioni e logica del flusso.
2. Scegli la variante che corrisponde all'evento. Prendi messaggi, tempi e uscita dall'unità scelta e riportali nella specifica `B-038`. Se servono più flussi, usa la specifica per gestirne le sovrapposizioni.
3. Passa specifica e messaggi a `growth:teardown` con la [rubrica F2](../../rubrics/F2.md). Usa il collaudo di `B-038` prima dell'attivazione. Attiva invii a persone solo con l'ok dell'operatore.

Varianti del lavoro:

- **Nuova iscrizione.** Usa `B-039` per onboarding e uscita verso F4. Applica K08 alla sequenza.
- **Lead da modulo pubblicitario.** Da `B-019` prendi la mappa del primo contatto e dei segmenti a partire dal form consegnato da C5. Se deve prenotare una call, usa `B-040` per la sequenza e l'azione CRM da passare a [E1](../e-vendita/E1-vendita.md).
- **Follow-up dopo un opt-in.** Usa `C-008` per l'arco dei messaggi e l'introduzione dell'offerta, con K08 per tempi e link.
- **Lancio già fatto, da rendere evergreen.** Prendi da F3 gli invii originali e da `C-009` la sequenza a intervalli, da portare nell'autoresponder `C-008`.
- **Visita prodotto o carrello abbandonato.** Scegli il ramo di `B-041` in base all'evento. Se serve anche il retargeting, passa il segmento a [C5](../c-acquisizione/C5-campagna-meta.md).
- **Ordine o riordino.** Da `B-042` prendi il ramo per nuovo cliente o cliente di ritorno e il tempo di riordino legato al prodotto.
- **Inattività.** Da `B-043` prendi il recupero e il ramo di uscita per chi resta inattivo, basati sulla cadenza del cliente.
- **Compleanno o altra ricorrenza.** Usa `B-044` per il ramo legato alla data e, se manca, per raccoglierla.

Spareggi: K08. Nell'e-commerce applica AEMA, con incentivo in apertura e promemoria a 4 e 8 ore. Per servizi, B2B e formazione applica Neville, con valore prima e nessun link all'offerta nelle prime tre email. Invii giornalieri solo fino a quattro email, oltre si distribuiscono su 10-15 giorni totali.

**Risposta:** specifica dei flussi scelti, messaggi, condizioni di passaggio e uscita, esito del collaudo se svolto e verdetto del teardown.
