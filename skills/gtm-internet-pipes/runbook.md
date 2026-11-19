# Internet Pipes — Execution Protocol (runbook)

**Read this BEFORE applying the method to a real topic.** The chapters teach the *what*; this enforces the *how*. Each guardrail below exists to kill a specific failure mode that turns a rigorous method into a confident-sounding shortcut. Follow the order. Maintain the ledger. Do not narrate coverage you don't have.

---

## G0 — Scope contract (declare up front; do not creep)
Before any tool call, pick **one** level and state it to the user:
- **Recon** — 1–2 stations, a quick read. Minutes.
- **Standard** — Generation → Validation → Evaluation. The core funnel.
- **Full E2E** — all 7 stations + Generation sub-methods + the ledger.

Write a one-line **run plan** (which stations, which data sources, which market/geo) and commit to it. If you must expand, *re-declare* the scope explicitly — never silently bolt on stations because the user pushed. Reactive scope creep means rework and a deliverable you had to be *pulled* to. Plan the whole funnel once.

## G1 — Funnel order is law (Generation BEFORE Validation)
Run stops in order: **Generation → Validation → Evaluation → Differentiation → (Visualization / Recommendation).** You cannot validate ideas you haven't generated.

**Seeds must be data-derived, not your hunches.** Generate from `keyword_ideas` / `related_keywords`, Reddit/community upvoted (Affirmation), US→IT arbitrage (Location), trends-rising, regulation, seasonality. Any operator/agent intuition is **tagged `[hunch · Survey-tier]`**, must be the *minority* of the seed set, and gets validated — never trusted. If your seed list is mostly your own guesses, you are doing Survey tier and calling it research. Stop and regenerate from data.

## G2 — Hierarchy first (Sales > Search > Survey)
Attempt the **highest tier available early**, not as an afterthought:
- **Sales** (Amazon `bought_past_month`/reviews, app revenue, store data) — attempt in the first pass.
- **Search** (volumes/trends) — the workhorse, but it is the *middle* tier.
- **Survey** (what people say) — lowest; treat as hypothesis only.

**Lead your headline with the highest tier you actually reached.** If you only have Search, the headline says "search-demand signal," not "validated market." Never present a Search-only run as end-to-end.

> **Free executor for Search/Social tier:** the `agent-reach` Data Layer (see `patterns.md` → "Free Data-Layer Execution" and `cheatsheet.md`) reads Reddit/Twitter/YouTube/web at €0 — use it to actually *reach* this tier, not just describe it. It does **not** reach the Sales tier (still DataForSEO/Jungle Scout/Koala/AppMagic).

## G3 — Two-source rule + data-quality disclosure (no false precision)
- A trend is **not "confirmed" on one source.** Require **≥2 independent signals** (e.g. search + sales, or search + an independent index like Google Trends) before any confident claim.
- **Disclose granularity every time:** Google volumes come in ~+22% buckets (a single step is noise); single-month YoY is jumpy for seasonal terms. Say it.
- Attach a **confidence tag** (High / Med / Low) to each headline finding.
- Visualization must *encode* uncertainty (ranges, caveats, "directional"), never launder noisy data into authority. A beautiful dashboard raises the burden of honesty, it doesn't lower it.

> **Cheapest second source:** when one signal is search/trends, get the independent second one for free via the `agent-reach` Data Layer — e.g. confirm a Trends spike by directly reading Reddit threads + YouTube comments. Two €0 reads can satisfy the ≥2-source rule without any paid API.

## G4 — Evaluation = 3 competitors × 8 questions (no single-point wedge)
- Evaluate **≥3 competitors**, not one, and ideally across the relevant vertical(s).
- Track Steph's 8 questions in a **matrix**, marking each cell `answered / inferred / blocked`: build · priorities · traffic · competitors · metrics · messaging · reputation(2–3★) · indirect.
- A **blocked tool ≠ a skipped question.** When BuiltWith/SimilarWeb wall you (CAPTCHA/403 are normal), substitute the *function* (inspect the live site; use Amazon as a revenue proxy) and label the substitution.
- **Differentiation needs ≥3 data points.** A wedge built on one competitor's reviews is a hypothesis, not a finding — say so.

## G5 — Localize the community (don't pad a weak station)
Community mining is the qualitative "why." **If the market ≠ US, Reddit is often thin** — swap to local sources (forums, Facebook groups, YouTube/TikTok comments, local Q&A). Rate community confidence **honestly**: "thin signal, US-proxy only" is a valid, useful result. Empty ≠ done. Never dress a couple of web-search summaries as a mined community.

## G6 — Coverage Ledger + Honesty Gate (the big one)
Maintain a **live ledger** and surface it in the deliverable. For every in-scope station:

| Station | Status | Evidence |
|---|---|---|
| … | `EXECUTED` / `PARTIAL` / `BLOCKED` / `SKIPPED` | artifact / file / data link — or *why* |

Rules:
- **`EXECUTED` requires a concrete artifact** (a dataset, a query result, a scraped table). "I described how one would do it" = **`PARTIAL`**, not executed. Retro-fitting/mapping a station after the fact ≠ executing it.
- **Forbidden words** — *complete · end-to-end · E2E · all stations · done* — unless **every in-scope station is `EXECUTED` with evidence.** Otherwise state exactly what's `PARTIAL`/`BLOCKED` in the same breath.
- **Self-audit before declaring done:** for each station ask *"what did I actually DO, and where is the artifact?"* If the honest answer is "I talked about it," downgrade it. Make the user *find* nothing — surface the gaps yourself.

---

## Pre-flight checklist (run top to bottom)
1. **G0** Scope level + run plan stated.
2. **G1** Seeds are data-derived; hunches tagged + minority. Generation done *first*.
3. **G2** Highest tier attempted early; headline matches tier reached.
4. Validation done; **G3** every claim has ≥2 sources + confidence tag + granularity caveat.
5. **G4** ≥3 competitors, 8-question matrix, blocks labeled.
6. **G5** Community localized + confidence rated honestly.
7. **G6** Ledger filled; honesty gate passed; no forbidden words unmet.

## Definition of done
The deliverable shows the **ledger**, leads with the **highest tier reached** (not the easiest), labels every **blocked/partial** station, and contains **zero confident claims resting on a single noisy source.** If you were the skeptic reading it, you could not catch the author overstating — because the author already surfaced every gap.
