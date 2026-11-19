# P3 Diagnosi

**Possiedi la causa.** Una metrica cede e non si sa perché. Consegni una diagnosi citata, non una correzione.

Ogni conclusione poggia su un dato. Una causa plausibile letta in un libro è un'ipotesi finché un numero del progetto non la conferma.

1. Fissa la metrica, il periodo, il valore atteso e da dove viene quel valore atteso (storico del progetto, riferimento di un libro, obiettivo dell'utente).
2. Raccogli i dati prima delle ipotesi, con [P7](P7-raccolta-prove.md): i numeri di ogni stadio del percorso che porta alla metrica.
3. Localizza lo stadio. Confronta ogni passaggio con il suo storico e trova dove il tasso si è spostato di più. Controlla che il calo non sia un artefatto della misura (tracciamento cambiato, periodo non confrontabile, campione piccolo).
4. Elenca le ipotesi per quello stadio. Le unità di tipo `diagnose` nel registro (`grep -P '\tdiagnose\t' <plugin>/registry/units.tsv`) danno le procedure dei libri per stadio.
5. Elimina le ipotesi una alla volta con un dato per ciascuna, partendo da quella che ne esclude di più.
6. Per lo stadio individuato, se esiste un asset, esegui [P2](P2-teardown.md) su quello.

Fermati alla causa. La correzione appartiene al playbook di dominio, o a [P4](P4-esperimento.md) se va provata.

**Risposta:** la metrica e lo scostamento, lo stadio dove cede, le ipotesi escluse e con quale dato, la causa che resta e quanto è solida (confermata da un dato, oppure l'ipotesi più forte che i dati permettono), il playbook da usare dopo.
