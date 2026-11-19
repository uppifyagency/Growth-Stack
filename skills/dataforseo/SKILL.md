---
name: dataforseo
description: >
  Complete reference for the DataForSEO API and its MCP server — all 11 API tiers
  (SERP, Keywords Data, DataForSEO Labs, Backlinks, OnPage, Domain Analytics,
  Content Analysis, Merchant/Amazon+Google Shopping, App Data, Business Data,
  AI Optimization/LLM mentions) with verbatim REST endpoint paths, request
  parameters, response fields, costs, and curl examples — plus dual access
  (MCP tools when connected, curl when not). Use whenever building, debugging,
  or answering questions about DataForSEO: keyword volume/difficulty/intent,
  search volume, Google Trends, live SERP data, backlink profiles, on-page /
  Lighthouse audits, technology/WHOIS lookups, Amazon/Google Shopping product
  data, app-store data, Google Business / reviews / listings, or AI/LLM
  visibility (ChatGPT scraper, LLM mentions). Triggers on "dataforseo",
  "keyword volume", "search volume", "keyword difficulty", "live SERP",
  "backlink data", "competitor keywords", "traffic estimation", "domain rank",
  "AI visibility", "LLM mentions", "ricerca keyword", "volumi di ricerca",
  "dati SERP", or "real search data".
---

# DataForSEO — Complete API & MCP Reference

DataForSEO is a pay-as-you-go data API: live SERPs, keyword metrics, backlinks, on-page crawls, marketplace/app data, and AI-visibility signals, billed per call against a prepaid balance. This is a **reference skill** — verbatim endpoint docs navigated through indices, not a how-to. Find the data you need below, open the matching reference file, copy the exact path/params, and call it.

**Want the complete list of every endpoint?** [references/00-full-endpoint-catalog.md](references/00-full-endpoint-catalog.md) enumerates **all 437 `/v3` paths** (parsed verbatim from DataForSEO's official OpenAPI spec), grouped by tier with method + operationId. Reference files 02–06 then give full parameters/response/cost/curl for the most-used endpoints in each tier.

## How to call DataForSEO (two paths)

**1. MCP tools (preferred when connected).** If the DataForSEO MCP server is wired in, tools named like `serp_organic_live_advanced`, `dataforseo_labs_google_keyword_overview`, `backlinks_summary` are available. Check with ToolSearch (`mcp__dataforseo` or the tool name); if present, call directly. Each endpoint in the reference files lists its **MCP tool** name. The server is configured in `.mcp.json` (see [references/01-mcp-and-conventions.md](references/01-mcp-and-conventions.md) for the config block and the `ENABLED_MODULES` / `DATAFORSEO_FULL_RESPONSE` flags).

**2. curl with REST (works from any session).** When the MCP tools are **not** loaded (ToolSearch "dataforseo" finds nothing), call the REST API directly. Set DATAFORSEO_USERNAME and DATAFORSEO_PASSWORD in your environment for HTTP Basic authentication.

```bash
# Read creds, then call any endpoint. Request body is ALWAYS a JSON array [ {…} ].
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keywords":["ricambi auto"],"location_code":2380,"language_code":"it"}]' \
  https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live
```

> **Corporate proxy caveat:** the corporate proxy has a self-signed cert that makes Python `urllib`/`requests` fail with `CERTIFICATE_VERIFY_FAILED`. **Use `curl`** (trusts the system cert store). In a sandboxed agent, network calls need `dangerouslyDisableSandbox`.

**Before any paid call:** validate creds + check balance for free with `GET /v3/appendix/user_data` (returns `money.balance`). A Labs keyword query costs fractions of a cent.

## Pick the right tier → file → endpoint

| I want to… | Tier | File | Start with endpoint |
|---|---|---|---|
| Search volume + CPC + 12-mo trend for known keywords | Labs (cheapest) | [03](references/03-keywords-data-and-labs.md) | `keyword_overview` (free `monthly_searches` trend) |
| Expand a seed into long-tail / related keywords | Labs | [03](references/03-keywords-data-and-labs.md) | `keyword_ideas`, `keyword_suggestions`, `related_keywords` |
| Keyword difficulty (bulk) | Labs | [03](references/03-keywords-data-and-labs.md) | `bulk_keyword_difficulty` |
| Search intent classification | Labs | [03](references/03-keywords-data-and-labs.md) | `search_intent` |
| Google Ads search volume (planner data) | Keywords Data | [03](references/03-keywords-data-and-labs.md) | `google_ads/search_volume` |
| Trend over time / seasonality / geo / demographics | Keywords Data | [03](references/03-keywords-data-and-labs.md) | `google_trends/explore`, `dataforseo_trends/*` |
| Keywords a domain ranks for; competitors; traffic est. | Labs | [03](references/03-keywords-data-and-labs.md) | `ranked_keywords`, `competitors_domain`, `domain_intersection`, `bulk_traffic_estimation` |
| Live Google/Bing/Yahoo SERP (parsed) | SERP | [02](references/02-serp-and-ai-optimization.md) | `serp/google/organic/live/advanced` |
| YouTube search / video info / comments / subtitles | SERP | [02](references/02-serp-and-ai-optimization.md) | `serp/youtube/*` |
| Backlink profile, anchors, referring domains | Backlinks | [04](references/04-backlinks-and-domain-analytics.md) | `summary`, then `backlinks`/`anchors`/`referring_domains` |
| Bulk rank / spam-score / new-lost for many domains | Backlinks | [04](references/04-backlinks-and-domain-analytics.md) | `bulk_*` family |
| Tech stack / WHOIS of a domain | Domain Analytics | [04](references/04-backlinks-and-domain-analytics.md) | `technologies/domain_technologies`, `whois/overview` |
| On-page audit of one URL (instant) | OnPage | [05](references/05-onpage-and-content-analysis.md) | `instant_pages` |
| Full site crawl / Lighthouse / Core Web Vitals | OnPage | [05](references/05-onpage-and-content-analysis.md) | `task_post` → `summary` → `pages`…; `lighthouse` |
| Brand/keyword citations & sentiment across the web | Content Analysis | [05](references/05-onpage-and-content-analysis.md) | `search`, `summary`, `sentiment_analysis` |
| Amazon product/SERP data + sales-velocity proxy | Merchant | [06](references/06-merchant-app-business.md) | `amazon/products/live/advanced` (`bought_past_month`) |
| Google Shopping products/sellers | Merchant | [06](references/06-merchant-app-business.md) | `google/products/task_post` |
| App-store ranking / app info / reviews | App Data | [06](references/06-merchant-app-business.md) | `app_data/{google,apple}/*` |
| Google Business profile / reviews / local listings | Business Data | [06](references/06-merchant-app-business.md) | `google/my_business_info`, `business_listings/search` |
| AI visibility: what ChatGPT cites; LLM mentions | AI Optimization | [02](references/02-serp-and-ai-optimization.md) | `chat_gpt/llm_scraper`, `llm_mentions/*` |
| Auth, request envelope, status codes, sandbox, pricing | — | [01](references/01-mcp-and-conventions.md) | read this first |

## Reference files

- **[00-full-endpoint-catalog.md](references/00-full-endpoint-catalog.md)** — **every one of the 437 `/v3` endpoints**, parsed from the official OpenAPI spec, grouped by the 12 tiers with HTTP method + operationId. The authoritative complete enumeration. Includes a "spec vs. reality" caveat (live variants, providers, Reddit) — read it.
- **[01-mcp-and-conventions.md](references/01-mcp-and-conventions.md)** — MCP server (`dataforseo-mcp-server`): transports, `ENABLED_MODULES`, `DATAFORSEO_FULL_RESPONSE`, `.mcp.json`. Global API: auth, JSON-array request body, `/live` vs task-based, `/advanced` vs `/regular`, response envelope, status codes, pricing, sandbox, location/language lookups, balance check. **Read first.**
- **[02-serp-and-ai-optimization.md](references/02-serp-and-ai-optimization.md)** — SERP (Google/Bing/Yahoo/YouTube) + AI Optimization (ChatGPT scraper, AI keyword volume, LLM responses, LLM mentions).
- **[03-keywords-data-and-labs.md](references/03-keywords-data-and-labs.md)** — Keywords Data (Google Ads, Google Trends, DataForSEO Trends) + DataForSEO Labs (keyword research + domain analysis). **The keyword-research workhorse.**
- **[04-backlinks-and-domain-analytics.md](references/04-backlinks-and-domain-analytics.md)** — Backlinks (summary, backlinks, anchors, referring domains/networks, intersections, timeseries, bulk_*) + Domain Analytics (Technologies, WHOIS).
- **[05-onpage-and-content-analysis.md](references/05-onpage-and-content-analysis.md)** — OnPage (instant_pages, the task-based crawl workflow, Lighthouse, content_parsing) + Content Analysis (citations, sentiment, trends).
- **[06-merchant-app-business.md](references/06-merchant-app-business.md)** — Merchant (Amazon, Google Shopping) + App Data (Google Play, App Store) + Business Data (Google Business, listings, Pinterest, Trustpilot, Tripadvisor). **Sales tier — REST/curl only, no MCP tools.**

## Cheat-sheet

**Location / language codes** (most common):

| Country | location_code | language_code |
|---|---|---|
| United States | 2840 | en |
| Italy | 2380 | it |
| United Kingdom | 2826 | en |
| Germany | 2276 | de |
| France | 2250 | fr |

Need others? `GET /v3/dataforseo_labs/locations_and_languages` (Labs) or `/v3/serp/{se}/locations`. **Amazon/marketplace** endpoints want a full locale (`en_US`, `it_IT`), not the short code.

**Free endpoints (cost 0):** `appendix/user_data` (balance); all `*/locations`, `*/locations_and_languages`, `*/available_filters`, `*/categories`, `lighthouse/audits|languages`, `llm_responses/models`; OnPage task-read endpoints (`summary`, `pages`, `resources`, `links`, … — you pay only at `task_post`). Labs `keyword_overview.monthly_searches` gives a 12-month trend at no extra cost.

**Cost ladder (cheap → pricey):** Labs (per request, flat) < SERP regular/task < SERP `/live/advanced` < Backlinks (scales with rows) < sales tiers (Merchant / App Data / Business Data, per result) < AI Optimization LLM scraper/responses.

**Golden patterns** (Internet Pipes-style demand validation):
- Low keyword_difficulty + high CPC = buyers present, cheap to rank for.
- `keyword_info.monthly_searches` with the first quarter ≈ 0 then a spike = a "NEW" keyword that exploded from zero.
- `bought_past_month` on Amazon Products = real sales velocity, not just price.
- Always prefer **bulk** endpoints (`bulk_*`, multi-keyword `keywords[]`) over loops; warn before full backlink crawls or large `depth`.

## Discipline

- **One task per `/live` call; up to 100 tasks per task-based POST.** Body is always a JSON array.
- **Default to US/English** unless the user specifies a market; for Italian work use `location_code 2380`, `language_code it`.
- **Check the per-task `status_code`** even when the envelope is `20000` — a task can fail with `40501 Invalid Field` inside a successful response.
- **Test against the sandbox** (`https://sandbox.dataforseo.com/v3/…`, same paths, dummy data, never charged) when iterating on request shape.
- **Don't re-fetch** data already pulled this session; note the data source as "DataForSEO (live)".
