# Patterns & Techniques — Internet Pipes

## The Tool-Chaining Research Workflow (signature move)
**When to use**: any idea/audience investigation, from an arbitrary starting point.
**How** (the Preparation-Station demo, generalized):
1. Start anywhere (a random Reddit community, a keyword, a product you noticed).
2. **Size & growth** → Subreddit Stats / Gummy Search (subscribers, posts, trajectory).
3. **Problems & language** → Gummy Search solution-requests + patterns; GigaBrain for synthesized Q&A.
4. **Adjacent communities & audience** → anvaka "say it" / Map of Reddit (what else do they like?).
5. **Real questions** → Answer the Public / Also Asked (intent, comparisons, X-vs-Y).
6. **Demand & datasets** → Keywords Everywhere (volume), Google Trends, Google Dataset Search.
7. **Tell the story** → Flourish (visualize the finding).
**Trade-offs**: powerful but time-intensive; instrument the browser (extensions) so steps 2/6 happen passively.

## The GTM Funnel (Station pipeline)
**When**: taking an idea from spark to defensible launch.
**How**: Generate (many, uncritically) → Validate (demand on mega-sites) → Evaluate (competitors) → Differentiate (audience-led wedge). Visualization + Recommendation amplify.
**Trade-offs**: linear by default, but Stations are skippable/revisitable.

## Hierarchy of Information (decision rule)
**When**: weighing any signal.
**How**: trust **sales > search > survey**. Prefer behavioral data; treat stated preferences as weakest.
**Trade-offs**: sales data is hardest to obtain; use search as the workhorse.

## Follow the Surprise
**When**: browsing anything.
**How**: when something feels surprisingly big/niche/persistent, treat it as a research prompt and go deeper.

## Geo-Arbitrage of Trends
**When**: a product/trend is concentrated in one region.
**How**: Google Trends subregion view → intensify where demand clusters, or enter early where volume is zero but the trend is spreading. Watch gastrodiplomacy (gov-funded cultural export) as a leading indicator.

## Seasonality as Audience Insight
**When**: a term shows recurring spikes.
**How**: Google Trends + WikiPulse + eRank to confirm; trace what the spike is *linked to* (e.g. New Year = aspirational self) to understand identity and time campaigns.

## Gadget-as-Platform
**When**: a hardware product is broadly popular.
**How**: treat it as a base layer; search its name in Jungle Scout to find accessory markets doing real revenue.

## Hype-Cycle Re-entry
**When**: a tech was once hyped then went quiet.
**How**: look for it climbing out of the Trough of Disillusionment — falling cost (the productivity trigger), existing marketplaces, real industry use (3D printing → hearing aids/dental/rocketry).

## Competitor Reverse-Engineering (the 8 questions)
**When**: a validated space has incumbents.
**How**: build/operate (BuiltWith, Import Yeti) · priorities (above-fold, nav, pricing) · traffic (SimilarWeb, FB Ad Library) · competitors direct+indirect (Answer the Public) · metrics (Jungle Scout, AppMagic, Koala) · messaging (Owletter, SparkToro) · reputation (**2–3★ reviews**, Twitter dynamic search).

## The 2–3 Star Review Mine
**When**: assessing where incumbents fall short.
**How**: skip 5★ (friends/fans) and 1★ (chronically angry); read **2–3★** for "I wanted to love it, but…" — these are differentiation wedges.

## Differentiation by Audience Empathy
**When**: deciding how to stand out.
**How**: pick a clear axis (design/speed/cost/variety) that matches what the audience values; learn their exact lingo; mine Gummy Search solution-requests + 2–3★ reviews for unmet needs.

## Content-Diet Curation
**When**: ongoing.
**How**: purge low-signal inputs before adding; adopt vetted high-fidelity sources; contribute finds back to compound the collective.

## Free Data-Layer Execution (agent-reach)
**When**: any Station that requires *reading* public social/web data — Validation (Ch11), Evaluation (Ch12), Differentiation (Ch13), audience discovery (Ch05/09/10) — and you want it at zero API cost.
**What it is**: agent-reach is an internet *capability router* (install + route + `doctor`), not an outreach tool. `agent-reach install --env=auto` installs the upstream CLIs; the agent then reads Reddit/Twitter/YouTube/LinkedIn/web by running the shell commands directly (cookie-auth + open-source CLIs + free MCP tiers) — works in any agent that can run a shell, so its own skill auto-registration is optional, not required for this integration. See command map in `cheatsheet.md` → "Data Layer".
**How** (map methodology → executor):
- **Tool-Chaining workflow** steps 3–5 (problems/language, adjacent communities, real questions) → run on Reddit/YouTube via agent-reach instead of (or alongside) Gummy Search/GigaBrain when those are paywalled or thin.
- **Competitor Reverse-Engineering** → `r.jina.ai` to read the site/pricing/reviews, `linkedin-scraper` for the team, `twitter search` for live reputation.
- **2–3★ Review Mine** → `r.jina.ai` over the review pages; `twitter search` for unfiltered "wanted to love it, but…".
- **Differentiation by Audience Empathy** → `opencli reddit search`/`read` to mine solution-requests and exact lingo.
**Runbook hooks**: satisfies **G2** (Hierarchy → covers the Search/Social tier robustly) and is the cheapest way to honor **G3** (two-source rule → an independent second signal at €0, e.g. confirm a Trends spike by reading Reddit + YouTube directly).
**Trade-offs**: cookie-auth platforms (Twitter/Reddit) are grey-area ToS → secondary accounts only; cookies expire; backends depend on upstream repos (run `agent-reach doctor --json` to see the live one). Does **not** replace keyword-volume tools (DataForSEO), sales data (Jungle Scout/Koala/AppMagic), or contact/email finding.
