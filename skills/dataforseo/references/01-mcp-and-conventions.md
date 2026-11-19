# DataForSEO — MCP Server & Global API Conventions

> Verbatim-grade reference distilled from github.com/dataforseo/mcp-server-typescript and docs.dataforseo.com (fetched June 2026). This is the foundational file: read it first — every other reference file assumes the auth, request envelope, and `/live` vs task-based model documented here.

# The DataForSEO MCP Server

The official TypeScript MCP server (`dataforseo-mcp-server`, GitHub: `dataforseo/mcp-server-typescript`) wraps the DataForSEO REST API as a set of MCP tools. In Claude Code it runs over **stdio** via `npx`. It can also run as an **HTTP** server and is publishable as a **Cloudflare Worker**.

## Running it

```bash
# stdio (default — what Claude Code uses)
npx dataforseo-mcp-server@latest

# HTTP server mode (listens on port 3000)
npx dataforseo-mcp-server@latest http
```

- **Default transport:** stdio — direct MCP communication over stdin/stdout. This is the mode Claude Code launches.
- **HTTP transport:** pass the literal `http` argument; the server listens on **port 3000** by default. Used for remote/shared deployments and for the Cloudflare Worker build, which uses the same environment variables.

## Authentication

HTTP Basic Auth, supplied through two **required** environment variables. The server base64-encodes them into the `Authorization: Basic <credentials>` header it sends to `api.dataforseo.com`.

| Env var | Required | Purpose |
|---|---|---|
| `DATAFORSEO_USERNAME` | yes | DataForSEO API login (from app.dataforseo.com/api-access) |
| `DATAFORSEO_PASSWORD` | yes | DataForSEO API password (distinct from the account/website password) |

## Module selection — `ENABLED_MODULES`

`ENABLED_MODULES` is a **comma-separated** list that restricts which API groups are exposed as tools. If unset, **all modules are enabled**. Narrowing it reduces the number of tools registered (useful to stay under client tool limits and to scope cost surface).

Accepted module names (verbatim spellings):

| Module name | API area |
|---|---|
| `SERP` | Search-engine results (Google/Bing/etc.) |
| `KEYWORDS_DATA` | Google Ads / Bing / Clickstream keyword volumes |
| `ONPAGE` | On-page crawl / technical SEO |
| `DATAFORSEO_LABS` | Labs (keyword_overview, ranked keywords, competitors, etc.) — cheapest data |
| `BACKLINKS` | Backlink profiles |
| `BUSINESS_DATA` | Google Business / reviews / social signals |
| `DOMAIN_ANALYTICS` | Technologies, WHOIS |
| `CONTENT_ANALYSIS` | Brand/citation sentiment analysis |
| `MERCHANT` | Google Shopping / Amazon merchant data |
| `APP_DATA` | App-store (Google Play / App Store) data |
| `AI_OPTIMIZATION` | LLM-era / AI-optimization endpoints |

Example: `ENABLED_MODULES="SERP,KEYWORDS_DATA,ONPAGE,DATAFORSEO_LABS,BACKLINKS,BUSINESS_DATA,DOMAIN_ANALYTICS"`

## Response shaping — full vs. concise (the "FULL_MODE" equivalent)

This server does **not** use a `FULL_MODE` variable. The equivalent control is `DATAFORSEO_FULL_RESPONSE`:

| Env var | Default | Effect |
|---|---|---|
| `DATAFORSEO_FULL_RESPONSE` | `"false"` | Server filters and transforms API responses into a concise, token-efficient format |
| `DATAFORSEO_FULL_RESPONSE` | `"true"` | Server returns the full, unmodified API responses |

> Note: there is no "free-mode hides paid endpoints" toggle in this package — paid vs. free is governed by your DataForSEO account/subscription, not an MCP flag. Module gating is done with `ENABLED_MODULES`; verbosity with `DATAFORSEO_FULL_RESPONSE`.

## Other environment variables

| Env var | Default | Purpose |
|---|---|---|
| `ENABLED_PROMPTS` | (all) | Comma-separated list of MCP prompt names to enable, e.g. `"top_3_google_result_domains,top_5_serp_paid_and_organic"` |
| `DATAFORSEO_SIMPLE_FILTER` | `"false"` | Set `"true"` for a simplified filter schema — required for ChatGPT and similar LLMs that choke on the full filter schema |

## `.mcp.json` config for Claude Code (stdio)

```json
{
  "mcpServers": {
    "dataforseo": {
      "command": "npx",
      "args": ["-y", "dataforseo-mcp-server"],
      "env": {
        "DATAFORSEO_USERNAME": "your_login",
        "DATAFORSEO_PASSWORD": "your_password",
        "ENABLED_MODULES": "SERP,KEYWORDS_DATA,DATAFORSEO_LABS,BACKLINKS",
        "DATAFORSEO_FULL_RESPONSE": "false"
      }
    }
  }
}
```

For a remote HTTP / Cloudflare-Worker deployment the client points at a URL instead of spawning a process:

```json
{
  "name": "DataForSEO",
  "transport": {
    "type": "http",
    "baseUrl": "https://your-worker.your-subdomain.workers.dev/mcp"
  }
}
```

## How tool names are derived

Tool names are generated from the underlying API endpoint path. The pattern is `module + endpoint` rendered in kebab-case (the API path segments become the tool name). So a Labs keyword-overview endpoint surfaces as a tool whose name mirrors that endpoint path — letting you predict a tool name from the REST path you'd otherwise `curl`.

## Rate limits / concurrency

The MCP server README documents no rate-limit or concurrency controls of its own — it inherits the DataForSEO account limits (see Global API Conventions below: 2000 calls/min, `X-RateLimit-*` headers, error `40202`/`40209`).

---

# Global API Conventions

## Base URL, auth, request shape

- **Production base URL:** `https://api.dataforseo.com/` (all v3 paths start `/v3/...`).
- **Sandbox base URL:** `https://sandbox.dataforseo.com/v3/` — structurally identical responses with **dummy data**, **never charged**. Swap only the hostname; no code/POST-body changes. Works with `pingback_url`/`postback_url` too.
- **Auth:** HTTP Basic only. `Authorization: Basic <base64(login:password)>`. Credentials cannot be passed as URL params; there is no separate login call. The API password is **not** the website account password (get it at app.dataforseo.com/api-access).
- **Request body is always a JSON array of task objects:** `[ { …task1… }, { …task2… } ]`, even for a single task.
- **Max tasks per POST:** **100** tasks per call (`/live` methods accept **1** task per call).
- **Throughput:** up to **2000 API calls per minute**.
- **Per-task fields:** `tag` (custom identifier echoed back in the response) and `postback_url` / `pingback_url` (completion notifications for task-based mode).

## `/live` vs. task-based, and `/advanced` vs. `/regular`

| Mode | Flow | Latency | Cost | Storage |
|---|---|---|---|---|
| **Live** (`.../live/...`) | single round-trip, results returned in the response | real-time | highest per query | not stored |
| **Standard / task-based** | `task_post` → poll `tasks_ready` (or `pingback`/`postback`) → `task_get` | minutes (Standard queue) or faster (Priority) | cheaper than Live | results stored 30 days (JSON) / 7 days (HTML) |

- `/advanced` returns a richer/expanded result set (more SERP elements, more fields) than `/regular`; `/advanced` is the more expensive variant. Both exist across SERP engines (Google Organic, Bing, etc.).
- Example SERP cost gradient: Standard queue ≈ $0.0006/query, Priority queue ≈ $0.0012/query, Live ≈ $0.002/query.

## Response envelope

Top-level fields:

| Field | Meaning |
|---|---|
| `version` | API version string |
| `status_code` | top-level status (20000 = Ok) |
| `status_message` | human text, e.g. `"Ok."` |
| `time` | processing time |
| `cost` | total USD cost of this response |
| `tasks_count` | number of tasks returned |
| `tasks_error` | number of failed tasks |
| `tasks[]` | array of task objects |

Each `tasks[]` element:

| Field | Meaning |
|---|---|
| `id` | task id |
| `status_code` | per-task status (20000 = Ok, 20100 = Task Created) |
| `status_message` | per-task message |
| `time` | per-task time |
| `cost` | per-task USD cost |
| `result_count` | number of result items |
| `path` | endpoint path the task hit |
| `data` | the parameters you submitted (echoed) |
| `result[...]` | the actual payload |

## Status codes

Success and task codes:

| Code | Message / meaning |
|---|---|
| `20000` | "Ok." — request completed successfully |
| `20100` | "Task Created." — task accepted (task-based mode) |

Common error codes (selected, verbatim):

| Code | Message |
|---|---|
| `40000` | "You can set only one task at a time." |
| `40001` | "This id is used by another client, check the id." |
| `40006` | "You can set no more than 100 tasks at a time." |
| `40100` | "You are not authorized to access this resource." |
| `40102` | "No Search Results." |
| `40104` | "Please verify your account before using the API." |
| `40200` | "Payment Required." |
| `40202` | "The rate-limit per minute has been exceeded." |
| `40203` | "The cost limit has been exceeded." |
| `40204` | "Access denied. Visit Plans and Subscriptions…" |
| `40207` | "Access denied. Your IP is not whitelisted." |
| `40209` | "Too many simultaneous queries." |
| `40210` | "Insufficient Funds. Your account's balance is too low…" |
| `40400` | "Not found." |
| `40401` | "Task Not Found." |
| `40402` | "Invalid Path." |
| `40403` | "Results Expired." |
| `40501` | "Invalid Field." |
| `40502` | "POST Data Is Empty." |
| `40503` | "POST Data is Invalid." |
| `40506` | "Unknown Fields in POST Data." |
| `40601` | "Task Handed." |
| `40602` | "Task in Queue." |
| `50000` | "Internal Error." |
| `50001` | "Error While Checking the Balance." |
| `50100` | "Not Implemented." |
| `50301` | "3rd Party API Service Unavailable." |
| `50401` | "Internal Error – Timeout." |

HTTP-level (transport) codes: `401 Unauthorized`, `402 Payment Required`, `404 Not Found`, `500 Internal Server Error`.

> Read the **task-level** `status_code` even when the top-level is `20000` — a call can succeed at the envelope level while individual tasks fail (e.g. `40501 Invalid Field`).

## Pricing model

- Pay-as-you-go against a prepaid balance ($50 minimum top-up). Every response reports its `cost` in USD, with each task's slice in `tasks[].cost`.
- **Cheapest:** DataForSEO Labs (e.g. `keyword_overview`) — bulk keyword volume/metrics from DataForSEO's own index.
- **Pricier:** SERP `/advanced` and Live mode; Backlinks (≈ $0.02/request + $0.00003/row); sales-tier/clickstream data.
- Cost types in the catalog are `per_result` or `per_request`, broken out by function and priority.
- **Free balance check:** `GET https://api.dataforseo.com/v3/appendix/user_data` — returns `cost: 0`. Key fields: `money.balance` (funds left), `money.total` (total deposited), `money.limits`/`money.statistics` (spending caps & breakdown), `rates.limits`/`rates.statistics` (call allowances per day/minute and current counts), `price` (per-API cost catalog), plus `login`, `timezone`, and subscription expiry dates.

## Common shared parameters

`location_code` (integer), `location_name` (string), `language_code` (ISO 639-1, e.g. `en`), `language_name` (e.g. `English`), `device`, `os`, `depth`, `limit`, `offset`, `filters`, `order_by`, plus `tag`, `postback_url`, `pingback_url`.

## Location / language lookup endpoints

- Labs (one combined endpoint): `GET /v3/dataforseo_labs/locations_and_languages` — returns `location_code`, `location_name`, `language_code`, `language_name`, `available_sources` (google/bing/amazon).
- Per-engine SERP: `/v3/serp/google/locations/`, `/v3/serp/bing/locations/`, `/v3/serp/youtube/locations/`.
- Keywords Data (Google Ads): `/v3/keywords_data/google_ads/locations/`.
- (Russia and Belarus locations are no longer supported.)

## Common location codes

| Country | location_code | language_code |
|---|---|---|
| United States | 2840 | en |
| Italy | 2380 | it |
| United Kingdom | 2826 | en |
| Germany | 2276 | de |
| France | 2250 | fr |

## Sample curl (Labs keyword_overview, live)

```bash
curl -s -u "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" \
  -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live" \
  -H "Content-Type: application/json" \
  -d '[{"keywords":["ricambi auto"],"location_code":2380,"language_code":"it"}]'
```

## Operational note — corporate proxy / self-signed SSL

On a corporate network the egress proxy presents a **self-signed certificate** that Python's `urllib`/`requests` reject (TLS verification failure → `CERTIFICATE_VERIFY_FAILED`). **Use `curl`** for DataForSEO calls in that environment — curl negotiates the proxy cleanly where the Python stacks break. Network calls in a sandboxed agent run need `dangerouslyDisableSandbox`. This is an environment-specific caveat, not a DataForSEO API requirement.

> Docs:
> - https://github.com/dataforseo/mcp-server-typescript
> - https://docs.dataforseo.com/v3/auth/
> - https://docs.dataforseo.com/v3/
> - https://docs.dataforseo.com/v3/appendix-errors/
> - https://docs.dataforseo.com/v3/appendix-sandbox/
> - https://docs.dataforseo.com/v3/appendix/user_data/
> - https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/
> - https://dataforseo.com/pricing
