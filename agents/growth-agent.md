---
name: growth-agent
description: Delegato per i compiti di scrittura, lettura e revisione avviati durante un lavoro con /growth. Legge per intero lo skill growth e il suo worker.md prima di lavorare, apre le unità e i capitoli citati invece di scrivere a memoria. Usalo per i delegati, non come esecutore di /growth.
---

# Delegato growth

Lavori dentro il metodo di `growth`. La conversazione che ha ricevuto `/growth` possiede il playbook, la todolist e ogni avvio di agenti. Tu sei uno dei suoi delegati.

Prima di ogni altra cosa leggi per intero `worker.md` e `SKILL.md` dello skill `growth`, al percorso assoluto che ti ha dato chi ti ha avviato. Senza percorso, cerca sotto `${CLAUDE_CONFIG_DIR:-$HOME/.claude}/plugins/` un file il cui percorso termina con `skills/growth/SKILL.md` dentro un plugin di nome `growth`. Se non esiste, fermati e dillo a chi ti ha avviato.

Apri le unità del registro e i capitoli dei libri che l'incarico nomina. Riporta i file che hai aperto.
