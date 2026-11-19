# Internet Pipes — Cheatsheet

## The GTM Pipeline (Stations)
`Preparation → Generation → Validation → Evaluation → Differentiation` (+ Visualization, Recommendation)
Generate many → filter on demand → analyze rivals → find your wedge.

## Hierarchy of Information (trust order)
| Tier | Data | Why |
|---|---|---|
| 🥇 | **Sales** | wallet forward — proven |
| 🥈 | **Search** | what they do unwatched — scale + nuance |
| 🥉 | **Survey** | what they *say* — biased, small |

## The 12 Generation Methods
| # | Substation | Lens |
|---|---|---|
| 1 | Exploration | tech progress / hype cycles |
| 2 | Affirmation | already-upvoted / pre-vetted |
| 3 | Location | geo-arbitrage of trends |
| 4 | Variation | seasonality / aspirational self |
| 5 | Authorization | patents/IP/open APIs |
| 6 | Regulation | new laws reshape markets |
| 7–12 | Monetization, Association, Innovation, Valuation, Compensation, Reflection | (written-only) |

## 2–3 Star Review Rule
5★ = fans (no signal) · 1★ = chronically angry (little) · **2–3★ = actionable gaps** ("loved it, but…").

## Tool Map (by job)
| Job | Tools |
|---|---|
| Search volume / intent | Keywords Everywhere, Google Trends, Answer the Public, Also Asked |
| Reddit / community | Subreddit Stats, Gummy Search, anvaka "say it", GigaBrain, Reddit List |
| Sales / revenue | Jungle Scout (Amazon), Koala (Shopify), AppMagic (apps) |
| Traffic / ads | SimilarWeb, Facebook Ad Library, Adbeat, Moat, Ahrefs |
| Tech / suppliers | BuiltWith, Ghostery, Wappalyzer, Import Yeti |
| Audience | SparkToro, Gummy Search, YouGov, Polymarket/Manifold |
| Trends / seasonality | Google Trends, WikiPulse, eRank |
| Visualization | Flourish, Visual Capitalist, The Pudding |
| Datasets | Google Dataset Search, Our World in Data, USDA Food Data Central |

## Data Layer — agent-reach (free read access)
Free *execution* layer for the read-heavy Stations: gives the agent direct read access to web/search/social via cookie-auth + open-source CLIs + free MCP tiers (no paid API). It's the **HOW** under the methodology's **WHAT** — not an outreach/email tool. Install once: `pipx install https://github.com/Panniantong/agent-reach/archive/main.zip && agent-reach install --env=auto`.

**Availability is NOT uniform** (verified on a real install): out of the box only **web (Jina), exa_search, github, rss** work zero-config. **twitter** needs cookies; **reddit** needs OpenCLI/rdt-cli **+ login**; **linkedin** needs an MCP server + login; **youtube** needs `yt-dlp` on PATH. Run `agent-reach doctor --json` to see each channel's `active_backend` — but note **`doctor` checks config, not reachability**: confirm a channel with one real call before trusting it (e.g. Exa can show `ok` yet fail on a blocked network).

| Station / job | What to pull | agent-reach command (verbatim) |
|---|---|---|
| Validation — read any mega-site/page (Ch11) | page → markdown | `curl -s "https://r.jina.ai/URL"` |
| Validation — semantic web search (Ch11) | ranked URLs/summaries | `mcporter call 'exa.web_search_exa(query: "q", numResults: 5)'` |
| Affirmation / Differentiation — Reddit (Ch08, Ch13) | search, thread, subreddit, hot | `opencli reddit search "q" -f yaml` · `opencli reddit read POST_ID -f yaml` · `opencli reddit subreddit NAME -f yaml` · `opencli reddit hot -f yaml` (server: `rdt search "q" --limit 10`) |
| Evaluation / Differentiation — Twitter sentiment & reputation (Ch12, Ch13) | search, user posts, thread | `twitter search "q" -n 10` · `twitter user-posts @user -n 20` · `twitter tweet URL_OR_ID` |
| Validation / audience — YouTube (Ch11, Ch05) | subtitles, search | `yt-dlp --write-sub --write-auto-sub --sub-lang "en" --skip-download -o "/tmp/%(id)s" "URL"` · `yt-dlp --dump-json "ytsearch5:q"` |
| Evaluation — competitor team/company (Ch12) | profile, people, company | `mcporter call 'linkedin-scraper.search_people(keyword: "q", limit: 10)'` (fallback: `curl -s "https://r.jina.ai/https://linkedin.com/in/user"`) |
| Tech/suppliers — GitHub (Ch12) | repo search/read | `gh search repos "q" --sort stars --limit 10` |
| Audience — RSS (Ch05, Ch15) | feed items | `python3 -c "import feedparser;[print(e.title,e.link) for e in feedparser.parse('URL').entries[:5]]"` |

⚠️ Cookie-auth platforms (Twitter/Reddit) are grey-area ToS → use **secondary accounts**; cookies expire; Exa MCP is a free quota-limited tier (key optional). Does **not** cover keyword volume (→ DataForSEO/Keywords Everywhere), sales data (→ Jungle Scout/Koala/AppMagic), or contact/email finding.

## Browser Setup (Preparation = automatic win)
1. Foldered bookmark bar · 2. Extensions (Keywords Everywhere, Ghostery, Wappalyzer, SimilarWeb, Weva, Textblaze) · 3. Shortcuts (⌘⇧A tab home, ⌘⌥←→ move tabs, ⌘T new, ⌘L URL bar) · 4. Passive noticing overlays · 5. Use your own eyes — trace every chart to its data source.

## Operating Maxims
- **No bad ideas (yet)** — defer judgment to Validation.
- **Follow the surprise** — surprise = research prompt.
- **What people *do* > what they *say*.**
- **"API = opportunity."**
- **Every great company differentiates** (Apple=design, Amazon=speed, Costco=cost, RockAuto=variety).
- **Give a rod, not a fish** — learn the method, not the example.
