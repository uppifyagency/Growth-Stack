# DataForSEO — OnPage API & Content Analysis API

> Verbatim-grade reference distilled from docs.dataforseo.com (fetched June 2026). Read [01-mcp-and-conventions.md](01-mcp-and-conventions.md) first. Only 6 endpoints across these two tiers have MCP tools (`on_page_instant_pages`, `on_page_content_parsing`, `on_page_lighthouse`; `content_analysis_search`, `content_analysis_summary`, `content_analysis_phrase_trends`) — the rest are REST/curl only.

# OnPage API

The OnPage API analyzes on-page SEO factors for web pages. It operates in two distinct ways:

- **`instant_pages` (Live)** — Send one URL, get the full on-page analysis back synchronously in the same response. No task queue, no polling. Best for ad-hoc, single-page audits.
- **Task-based crawl** — A three-step asynchronous workflow that crawls an entire site (up to `max_crawl_pages`) and stores results for retrieval through many specialized data endpoints:
  1. **`task_post`** — Submit `target` + `max_crawl_pages` (+ optional flags). Returns a task `id` (UUID). You are charged here, per page actually crawled.
  2. **Poll `summary/$id`** — A GET that reports `crawl_progress` (`in_progress` / `finished`) plus `crawl_status` (`max_crawl_pages`, `pages_in_queue`, `pages_crawled`) and aggregate site metrics. Results can be fetched gradually as pages are processed.
  3. **Fetch detail endpoints** — `pages`, `resources`, `links`, `duplicate_tags`, `duplicate_content`, `redirect_chains`, `non_indexable`, `waterfall`, `keyword_density`, `microdata`, `page_screenshot`, `raw_html`. These read already-crawled data and are **free** for ~30 days (raw_html: 7 days).

**Cost model:** the crawl is billed by the **actual number of pages crawled** (overpayment refunded if fewer pages are crawled than `max_crawl_pages`). Optional parameters that add cost: `load_resources`, `enable_javascript`, `enable_browser_rendering`, `custom_js`, `calculate_keyword_density`. Some features must be enabled at `task_post` time to make a downstream endpoint usable: `calculate_keyword_density` → `keyword_density`; `validate_micromarkup` → `microdata`; `store_raw_html` → `raw_html`; `enable_content_parsing` → `content_parsing`.

**Lighthouse** runs Google Lighthouse audits and has both **live** and **task** modes (independent of the crawl workflow).

Shared: Base URL `https://api.dataforseo.com`; HTTP Basic auth; POST bodies are a JSON **array** of task objects (`[{...}]`). Limits (OnPage): up to 2,000 API calls/min, up to 20–100 tasks/request depending on endpoint, max 30 simultaneous requests.

### instant_pages

- **REST:** `POST /v3/on_page/instant_pages` — Live (immediate, single URL).
- **MCP tool:** `on_page_instant_pages`
- **Purpose:** Full on-page SEO analysis of one URL returned synchronously — no task/poll cycle.
- **Key request fields:**
  - `url` (string) — **required**; absolute target URL; results returned for this URL only.
  - `custom_user_agent` (string) — UA string (default `Mozilla/5.0 (compatible; RSiteAuditor)`).
  - `browser_preset` (string) — `desktop` | `mobile` | `tablet`.
  - `browser_screen_width` / `browser_screen_height` (integer, 240–9999) — requires JS/rendering enabled.
  - `browser_screen_scale_factor` (float, 0.5–3) — requires JS/rendering enabled.
  - `store_raw_html` (boolean) — store HTML for the Raw HTML endpoint (default false).
  - `accept_language` (string) — Accept-Language header.
  - `load_resources` (boolean) — load images/CSS/JS (default false; **adds cost**).
  - `enable_javascript` (boolean) — execute page scripts (default false; **adds cost**).
  - `enable_browser_rendering` (boolean) — emulate browser to measure Core Web Vitals; auto-enables JS + load_resources (default false; **adds cost**).
  - `disable_cookie_popup` (boolean) — default false.
  - `return_despite_timeout` (boolean) — return data even on timeout (default false).
  - `enable_xhr` (boolean) — allow XHR; requires `enable_javascript` (default false).
  - `custom_js` (string) — JS to execute (700 ms max; **adds cost**).
  - `validate_micromarkup` (boolean) — validate structured data (default false).
  - `check_spell` (boolean) — Hunspell spellcheck (default false).
  - `checks_threshold` (array) — override default check thresholds (integer values).
  - `switch_pool` (boolean) — use additional proxy pools.
  - `ip_pool_for_scan` (string) — `us` | `de`.
- **Key response fields:** per result item — `resource_type` (`html`/`broken`/`redirect`/`script`/`image`/`stylesheet`), `status_code`, `url`, `location`, `size`, `encoded_size`, `total_transfer_size`, `fetch_time`, `cache_control` (`cachable`, `ttl`), `onpage_score` (0–100), `total_dom_size`, `meta` (`title`, `description`, `charset`, `canonical`, `internal_links_count`, `external_links_count`, `images_count`, `scripts_count`, `cumulative_layout_shift`, …), `content` (readability indexes, `plain_text_word_count`, `*_to_content_consistency`), `page_timing` (`time_to_interactive`, `dom_complete`, `largest_contentful_paint`, `first_input_delay`, `waiting_time`/TTFB, `duration_time`, …), `checks` (60+ boolean SEO flags, e.g. `no_h1_tag`, `title_too_long`, `is_https`, `has_render_blocking_resources`, `seo_friendly_url`), `social_media_tags`, `custom_js_response`.
- **Cost:** charged per request (see Pricing page); extra for load_resources / JS / browser_rendering / custom_js.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"url":"https://example.com/page","enable_browser_rendering":true,"check_spell":true,"validate_micromarkup":true}]' \
  https://api.dataforseo.com/v3/on_page/instant_pages
```

### task_post

- **REST:** `POST /v3/on_page/task_post` — Task (asynchronous; submits a site crawl).
- **MCP tool:** REST only.
- **Purpose:** Queue a website crawl; returns a task `id` used by all task-based detail endpoints. This is the billed step.
- **Key request fields:**
  - `target` (string) — **required**; domain name without `https://` or `www.`.
  - `max_crawl_pages` (integer) — **required**; number of pages to crawl.
  - `start_url` (string) — first URL to crawl (absolute).
  - `enable_javascript` (boolean) — **adds cost**.
  - `enable_browser_rendering` (boolean) — for Core Web Vitals; requires `enable_javascript` + `load_resources`.
  - `custom_js` (string) — max 2000 chars, 700 ms execution limit; **adds cost**.
  - `load_resources` (boolean) — **adds cost**.
  - `calculate_keyword_density` (boolean) — enables the `keyword_density` endpoint; **adds cost**.
  - `enable_content_parsing` (boolean) — enables the `content_parsing` endpoint.
  - `store_raw_html` (boolean) — enables the `raw_html` endpoint.
  - `validate_micromarkup` (boolean) — enables the `microdata` endpoint.
  - `checks_threshold` (object) — custom check threshold values.
  - `pingback_url` (string) — webhook called on completion (supports `$id` / `$tag` macros).
  - `tag` (string) — user identifier, max 255 chars.
- **Key response fields:** `tasks[].id` (UUID), `tasks[].status_code`, `tasks[].cost`, `tasks[].data` (echo of request).
- **Cost:** per page crawled; overpayment refunded if fewer pages are crawled. Up to 100 tasks per POST.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"target":"example.com","max_crawl_pages":100,"enable_content_parsing":true,"store_raw_html":true,"tag":"crawl-001"}]' \
  https://api.dataforseo.com/v3/on_page/task_post
```

### summary

- **REST:** `GET /v3/on_page/summary/$id` — Live (poll progress; task id in path).
- **MCP tool:** REST only.
- **Purpose:** Report crawl progress and aggregate site-wide metrics; poll until `crawl_progress` = `finished`.
- **Key request fields:** none beyond `$id` (the task UUID) in the path.
- **Key response fields:** `crawl_progress` (`in_progress`/`finished`), `crawl_status` (`max_crawl_pages`, `pages_in_queue`, `pages_crawled`), `domain_info` (`name`, `cms`, `server`, `extended_crawl_status`), `page_metrics` (`onpage_score`, `non_indexable`, `checks` — site-wide counts of duplicates / missing elements / errors / links).
- **Cost:** **free** (you are charged only at `task_post`).
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" \
  https://api.dataforseo.com/v3/on_page/summary/07131248-1535-0216-1000-17384017ad04
```

### pages

- **REST:** `POST /v3/on_page/pages` — Task results (reads crawled data).
- **MCP tool:** REST only.
- **Purpose:** Return crawled pages with their on-page metrics and checks.
- **Key request fields:** `id` (string) **required**; `limit` (int, default 100, max 1000); `offset` (int, default 0, max 2,000,000); `filters` (array, max 8; operators `regex`, `not_regex`, `<`, `<=`, `>`, `>=`, `=`, `<>`, `in`, `not_in`, `like`, `not_like`); `order_by` (array, max 3, `"field,asc"`/`"field,desc"`); `search_after_token` (string, for >20,000 items); `tag` (string).
- **Key response fields:** per page — `resource_type`, `meta` (title/description/canonical/link & asset counts), `page_timing` (TTI, LCP, FID, TTFB, …), `onpage_score`, `checks` (boolean SEO flags).
- **Cost:** **free**; results retrievable for 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07131248-1535-0216-1000-17384017ad04","limit":100,"filters":[["meta.external_links_count","<=",50]],"order_by":["meta.external_links_count,desc"]}]' \
  https://api.dataforseo.com/v3/on_page/pages
```

### resources

- **REST:** `POST /v3/on_page/resources` — Task results.
- **MCP tool:** REST only.
- **Purpose:** Return discovered resources (images, scripts, stylesheets, broken) with sizes, caching and checks.
- **Key request fields:** `id` **required**; `url` (resources of a specific page); `limit` (default 100, max 1000); `offset` (default 0, max 2,000,000); `filters` (max 8, with `and`/`or`); `order_by` (max 3); `relevant_pages_filters` (array — filter by page characteristics); `search_after_token`; `tag`.
- **Key response fields:** `resource_type` (`script`/`image`/`stylesheet`/`broken`), `status_code`, `location`, `url`, `size`, `encoded_size`, `total_transfer_size`, `fetch_time`, `fetch_timing` (`duration`, `start`, `end`), `cache_control` (`cachable`, `ttl`), `checks`, `content_encoding`, `media_type`, `accept_type`, `server`, `last_modified` (`header`/`sitemap`/`meta_tag`), `meta` (for images: alt, title, dimensions).
- **Cost:** **free**; 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","filters":[["resource_type","=","image"],"and",["size",">",100000]],"order_by":["size,desc"],"limit":10}]' \
  https://api.dataforseo.com/v3/on_page/resources
```

### links

- **REST:** `POST /v3/on_page/links` — Task results.
- **MCP tool:** REST only.
- **Purpose:** Return internal/external links discovered during the crawl.
- **Key request fields:** `id` **required**; `page_from` (relative URL — links from a page); `page_to` (relative URL — internal links to a page); `limit` (default 100, max 1000); `offset` (default 0, max 2,000,000); `filters` (max 8); `search_after_token`; `tag`.
- **Key response fields:** `type` (`anchor`/`image`/`canonical`/`meta`/`alternate`/`redirect`/`link`), `domain_from`, `domain_to`, `page_from`, `page_to`, `link_from`, `link_to` (absolute), `dofollow` (bool), `page_from_scheme`, `page_to_scheme`, `direction` (`internal`/`external`), `is_broken`, `is_link_relation_conflict`, `link_attribute`, `text`, `image_alt`, `image_src`, `page_to_status_code`.
- **Cost:** **free**; 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","limit":100,"filters":[["direction","=","external"]]}]' \
  https://api.dataforseo.com/v3/on_page/links
```

### duplicate_tags

- **REST:** `POST /v3/on_page/duplicate_tags` — Task results.
- **MCP tool:** REST only.
- **Purpose:** Group pages that share an identical title or meta description.
- **Key request fields:** `id` **required**; `type` (string) **required** — `duplicate_title` | `duplicate_description`; `accumulator` (string — filter by a specific duplicated value); `limit` (default 100, max 1000); `offset` (default 0, max 2,000,000); `tag`.
- **Key response fields:** `crawl_progress`, `total_pages_count`, `items_count`; per group: `accumulator` (the duplicated value), `total_count` (occurrences), `pages` (array of pages with `url`, `status_code`, `meta`, `onpage_score`).
- **Cost:** **free**; 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","type":"duplicate_description","limit":10}]' \
  https://api.dataforseo.com/v3/on_page/duplicate_tags
```

### duplicate_content

- **REST:** `POST /v3/on_page/duplicate_content` — Task results.
- **MCP tool:** REST only.
- **Purpose:** Find pages with content similar to a given URL (SimHash-based).
- **Key request fields:** `id` **required**; `url` (string) **required** — the page to compare against; `similarity` (int 0–10, default 6 — threshold); `limit` (default 100, max 1000); `offset` (default 0, max 2,000,000); `tag`.
- **Key response fields:** `total_count`, `items_count`; `pages` (array of similar pages, each with a `similarity` score 0–10 plus page metadata, meta tags, metrics, `onpage_score`).
- **Cost:** **free**; 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","url":"https://example.com/page","similarity":6,"limit":10}]' \
  https://api.dataforseo.com/v3/on_page/duplicate_content
```

### redirect_chains

- **REST:** `POST /v3/on_page/redirect_chains` — Task results.
- **MCP tool:** REST only.
- **Purpose:** Return redirect chains found during the crawl, flagging loops.
- **Key request fields:** `id` **required**; `url` (filter to a page); `limit` (default 100, max 1000); `offset` (default 0, max 2,000,000); `filters` (by `is_redirect_loop`; operators `regex`, `not_regex`, `=`, `<>`); `tag`.
- **Key response fields:** `crawl_progress`; per item: `is_redirect_loop` (bool); `chain` (array of redirect hops, each: `type`, `domain_from`, `domain_to`, `page_from`, `page_to`, `link_from`, `link_to`, `dofollow`, `page_from_scheme`, `page_to_scheme`, `direction`, `is_broken`, `is_link_relation_conflict`).
- **Cost:** **free**; 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","limit":10}]' \
  https://api.dataforseo.com/v3/on_page/redirect_chains
```

### non_indexable

- **REST:** `POST /v3/on_page/non_indexable` — Task results.
- **MCP tool:** REST only.
- **Purpose:** List pages that search engines cannot index, with the reason.
- **Key request fields:** `id` **required**; `limit` (default 100, max 1000); `offset` (default 0, max 2,000,000); `filters` (max 8; operators `=`, `<>`, `like`, `regex`, …); `tag`.
- **Key response fields:** `crawl_progress`, `total_items_count`; per item: `url`, `reason` (`robots_txt` | `meta_tag` | `http_header` | `attribute` | `too_many_redirects`).
- **Cost:** **free**; 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","filters":[["reason","=","robots_txt"]],"limit":10}]' \
  https://api.dataforseo.com/v3/on_page/non_indexable
```

### waterfall

- **REST:** `POST /v3/on_page/waterfall` — Task results.
- **MCP tool:** REST only.
- **Purpose:** Return detailed load-timing (waterfall) data for a specific page and its resources.
- **Key request fields:** `id` **required**; `url` (string) **required** — the page to profile; `tag`.
- **Key response fields:** page-level — `time_to_interactive`, `dom_complete`, `connection_time`, `time_to_secure_connection`, `waiting_time` (TTFB), `download_time`, `duration_time`; per resource — `duration_time`, `fetch_start`, `fetch_end`, `resource_type`, `url`, `is_render_blocking`.
- **Cost:** **free**; 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"08101204-0696-0216-0000-644a7b21a48a","url":"https://example.com/page"}]' \
  https://api.dataforseo.com/v3/on_page/waterfall
```

### keyword_density

- **REST:** `POST /v3/on_page/keyword_density` — Task results. **Requires `calculate_keyword_density: true` at `task_post`.**
- **MCP tool:** REST only.
- **Purpose:** Return keyword density (frequency and ratio) for the page or whole site.
- **Key request fields:** `id` **required**; `keyword_length` (integer) **required** — words per phrase: 1, 2, 3, 4, or 5; `url` (single page; omit for whole site); `limit` (default 100, max 1000); `filters` (max 8); `order_by` (max 3); `tag`.
- **Key response fields:** per item — `keyword`, `frequency` (occurrence count), `density` (frequency ÷ total keywords).
- **Cost:** **free** to read; the density calculation itself adds cost at `task_post`. 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","keyword_length":2,"limit":50,"order_by":["density,desc"]}]' \
  https://api.dataforseo.com/v3/on_page/keyword_density
```

### microdata

- **REST:** `POST /v3/on_page/microdata` — Task results. **Requires `validate_micromarkup: true` at `task_post`.**
- **MCP tool:** REST only.
- **Purpose:** Return structured-data (microdata / JSON-LD) validation results for a page.
- **Key request fields:** `id` **required**; `url` (string) **required** — resource URL from the Pages response; `tag`.
- **Key response fields:** `test_summary` (counts of fatal / error / warning / info); `items` (detected markup structures); per item: `type` (e.g. `json_ld`), `inspection_info` (`types`, `fields`, `test_results`), `fields` (names, values, error-level test results).
- **Cost:** **free**; 30 days. (Validation must be enabled at `task_post`.)
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"02241700-1535-0216-0000-034137259bc1","url":"https://example.com/apis"}]' \
  https://api.dataforseo.com/v3/on_page/microdata
```

### page_screenshot

- **REST:** `POST /v3/on_page/page_screenshot` — Live (captures on demand).
- **MCP tool:** REST only.
- **Purpose:** Capture a screenshot of a page; returns a CDN URL to the image.
- **Key request fields:** `url` (string) **required** — absolute URL; `full_page_screenshot` (boolean, default true — full page vs viewport); `browser_preset` (`desktop`/`mobile`/`tablet`); `browser_screen_width` / `browser_screen_height` (240–9999); `accept_language`; `custom_user_agent`; `disable_cookie_popup`; `ip_pool_for_scan` (`us`/`de`).
- **Key response fields:** `image` (URL to screenshot on DataForSEO CDN), `error_message` (null on success; e.g. "Screenshot is empty" on 404/invalid), `crawl_progress`.
- **Cost:** **charged per request** (per-task `cost` field, e.g. ~$0.004) — unlike the other read endpoints.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"url":"https://example.com/apis"}]' \
  https://api.dataforseo.com/v3/on_page/page_screenshot
```

### raw_html

- **REST:** `POST /v3/on_page/raw_html` — Task results. **Requires `store_raw_html: true` at `task_post`** (or used with an `instant_pages` request that stored HTML).
- **MCP tool:** REST only.
- **Purpose:** Return the stored full HTML of a crawled page.
- **Key request fields:** `id` (string) **required**; `url` (string) **required** — absolute page URL (optional when sourced from Instant Pages).
- **Key response fields:** `html` (complete page HTML), `crawl_progress`, `crawl_status` (`max_crawl_pages`, `pages_in_queue`, `pages_crawled`).
- **Cost:** **free**; results retained for **7 days**.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"id":"07281559-0695-0216-0000-c269be8b7592","url":"https://example.com/apis"}]' \
  https://api.dataforseo.com/v3/on_page/raw_html
```

### content_parsing

- **REST:** `POST /v3/on_page/content_parsing` — Live. **Requires `enable_content_parsing: true` at `task_post`** (the `id` comes from that task).
- **MCP tool:** `on_page_content_parsing`
- **Purpose:** Return structured, parsed page content (header/footer/topics/offers/ratings/comments/contacts), optionally as Markdown.
- **Key request fields:** `url` (string) **required** — page to parse; `id` (string) **required** — task id from a Task POST run with `enable_content_parsing: true`; `markdown_view` (boolean, default false — return content as Markdown).
- **Key response fields:** per `content_parsing_element`: `type`, `fetch_time`, `status_code`, `page_content` (`header`, `footer`, `main_topic`, `secondary_topic`, `ratings`, `offers`, `comments`, `contacts`), `page_as_markdown` (when requested). Content sections expose `primary_content`, `secondary_content`, `table_content`; content items expose `text`, `url`, `urls` (with `anchor_text`).
- **Cost:** **free**; results retrievable for 30 days.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"url":"https://dataforseo.com/blog/some-post","id":"11161551-1535-0216-0000-500b3f307f92","markdown_view":true}]' \
  https://api.dataforseo.com/v3/on_page/content_parsing
```

### lighthouse (live + task)

- **REST (live):** `POST /v3/on_page/lighthouse/live/json` — synchronous, immediate results.
- **REST (task):** `POST /v3/on_page/lighthouse/task_post` → poll `GET /v3/on_page/lighthouse/tasks_ready` → `GET /v3/on_page/lighthouse/task_get/json/$id` (also `…/task_get/full/$id`).
- **Helper (free, GET):** `/v3/on_page/lighthouse/languages` (supported languages), `/v3/on_page/lighthouse/audits` (list of audit titles you may pass in `audits`).
- **MCP tool:** `on_page_lighthouse`
- **Purpose:** Run a Google Lighthouse audit (performance, accessibility, best practices, SEO) on a URL.
- **Key request fields (live & task_post):**
  - `url` (string) — **required**; absolute URL with `http://`/`https://`.
  - `for_mobile` (boolean) — mobile emulation (default false).
  - `categories` (array) — `seo`, `performance`, `best_practices`, `accessibility`.
  - `audits` (array) — specific audit titles (from the `audits` helper endpoint).
  - `version` (string) — Lighthouse version.
  - `language_name` (string) / `language_code` (string) — default English / `en`.
  - `custom_user_agent` (string, max 254 chars).
  - `browser_screen_width` / `browser_screen_height` (integer, 240–9999); `browser_screen_scale_factor` (float, 0.5–3).
  - `browser_network_throttling_method` (string) — `simulate` | `devtools` | `provided`.
  - `browser_cpu_throttling_multiplier` (float, 1–4) — required if method = `devtools`.
  - `browser_network_throttling` (string) — required if method = `devtools`; `no_throttling` | `fast_4g` | `slow_4g` | `regular_3g` | `pc`.
  - `tag` (string, max 255); `pingback_url` / `postback_url` (task mode only).
- **Key response fields:** `lighthouseVersion`, `finalUrl`, `fetchTime`, `categories` (per-category scores: performance / accessibility / best-practices / seo), `audits` (individual audit results with scores and metrics).
- **Cost:** charged per request (live) / per task (task mode); `languages` and `audits` helpers are **free**.
- **Example (live):**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"url":"https://dataforseo.com","for_mobile":true,"categories":["performance","seo"],"tag":"lh-001"}]' \
  https://api.dataforseo.com/v3/on_page/lighthouse/live/json
```

> Docs: https://docs.dataforseo.com/v3/on_page/overview/ · https://docs.dataforseo.com/v3/on_page/instant_pages/ · https://docs.dataforseo.com/v3/on_page/content_parsing/ · https://docs.dataforseo.com/v3/on_page/task_post/ · https://docs.dataforseo.com/v3/on_page/summary/ · https://docs.dataforseo.com/v3/on_page/pages/ · https://docs.dataforseo.com/v3/on_page/resources/ · https://docs.dataforseo.com/v3/on_page/links/ · https://docs.dataforseo.com/v3/on_page/duplicate_tags/ · https://docs.dataforseo.com/v3/on_page/duplicate_content/ · https://docs.dataforseo.com/v3/on_page/redirect_chains/ · https://docs.dataforseo.com/v3/on_page/non_indexable/ · https://docs.dataforseo.com/v3/on_page/waterfall/ · https://docs.dataforseo.com/v3/on_page/keyword_density/ · https://docs.dataforseo.com/v3/on_page/microdata/ · https://docs.dataforseo.com/v3/on_page/page_screenshot/ · https://docs.dataforseo.com/v3/on_page/raw_html/ · https://docs.dataforseo.com/v3/on_page/lighthouse/overview/

# Content Analysis API

The Content Analysis API mines DataForSEO's database of web **citations** (mentions of a keyword/brand across pages) and returns aggregated signals: prominence/rank, sentiment polarity (positive/negative/neutral), emotional connotations (anger, happiness, love, sadness, share, fun), ratings, page/text categories, and geographic/language distribution. All analytical endpoints are **Live** (instant; no POST/GET task queue). Filtering and sorting are free of charge.

Shared: Base URL `https://api.dataforseo.com`; HTTP Basic auth; POST bodies are a JSON **array** `[{...}]`. Up to 2,000 API calls/min (id_list: 10/min). Common optional fields across the analytical endpoints: `internal_list_limit` (int, default 1, max 20 — caps elements inside arrays like `top_domains`), `positive_connotation_threshold` / `sentiments_connotation_threshold` (float 0–1, default 0.4), `rank_scale` (`one_hundred` | `one_thousand`, default `one_thousand`), `initial_dataset_filters` (array, max 8 — pre-filter the dataset before aggregation), `search_mode` (`as_is` | `one_per_domain`, default `as_is`), `page_type` (array: `ecommerce`, `news`, `blogs`, `message-boards`, `organization`), `tag` (max 255 chars).

### search

- **REST:** `POST /v3/content_analysis/search/live` — Live.
- **MCP tool:** `content_analysis_search`
- **Purpose:** Find individual citations of a keyword with full per-citation detail; supports filtering, sorting, pagination.
- **Key request fields:** `keyword` (string) **required** — UTF-8, lowercased; `keyword_fields` (object — restrict match to fields: `title`, `main_title`, `previous_title`, `snippet`); `page_type` (array); `search_mode` (`as_is` | `one_per_domain`, default `as_is`); `limit` (default 100, max 1000); `offset` (default 0); `offset_token` (pagination beyond 10,000 results); `filters` (max 8, logical operators); `order_by` (max 3, asc/desc); `rank_scale`; `tag`.
- **Key response fields:** `total_count`, `items_count`, `offset_token`; per item: `url`, `domain`, `domain_rank`, `url_rank`, `spam_score`, `score`, `page_category`, `page_types`, `ratings`, `social_metrics`, and `content_info` (`title`, `main_title`, `snippet`, `snippet_length`, `sentiment_connotations` {anger, happiness, love, sadness, share, fun}, `connotation_types` {positive, negative, neutral}, `rating`, `date_published`, `content_quality_score`).
- **Cost:** charged per request (see Pricing page).
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"logitech","keyword_fields":{"snippet":"logitech"},"page_type":["ecommerce","news"],"search_mode":"as_is","limit":10}]' \
  https://api.dataforseo.com/v3/content_analysis/search/live
```

### summary

- **REST:** `POST /v3/content_analysis/summary/live` — Live.
- **MCP tool:** `content_analysis_summary`
- **Purpose:** Aggregate overview of all citations for a keyword (totals, top domains, sentiment, categories, geography).
- **Key request fields:** `keyword` (string) **required**; `page_type` (array); `internal_list_limit` (default 1, max 20); `positive_connotation_threshold` (float 0–1, default 0.4); `sentiments_connotation_threshold` (float 0–1, default 0.4); `rank_scale`; `initial_dataset_filters` (array).
- **Key response fields:** `total_count`; `rank` (normalized sum of all citing URLs' ranks); `top_domains`; `sentiment_connotations` (anger, happiness, love, sadness, share, fun); `connotation_types` (positive, negative, neutral counts); `text_categories`; `page_categories`; `page_types`; `countries`; `languages`.
- **Cost:** charged per request (example ~$0.02003).
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"logitech","internal_list_limit":10}]' \
  https://api.dataforseo.com/v3/content_analysis/summary/live
```

### phrase_trends

- **REST:** `POST /v3/content_analysis/phrase_trends/live` — Live.
- **MCP tool:** `content_analysis_phrase_trends`
- **Purpose:** Citation statistics for a keyword over time, grouped by day/week/month.
- **Key request fields:** `keyword` (string) **required** — UTF-8 (escape with backslashes for an exact phrase); `date_from` (string `yyyy-mm-dd`) **required**; `date_to` (string, defaults to today); `date_group` (`day` | `week` | `month`, default `month`); `page_type` (array); `search_mode` (`as_is` | `one_per_domain`); `internal_list_limit` (default 1, max 20); `rank_scale`; `initial_dataset_filters` (array, max 8).
- **Key response fields:** array of per-period items: `date`, `total_count`, `rank`, `top_domains`, `sentiment_connotations`, `connotation_types`, `page_types`, `countries`, `languages`.
- **Cost:** charged per request.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"logitech","date_from":"2024-01-01","date_group":"month"}]' \
  https://api.dataforseo.com/v3/content_analysis/phrase_trends/live
```

### sentiment_analysis

- **REST:** `POST /v3/content_analysis/sentiment_analysis/live` — Live.
- **MCP tool:** REST only.
- **Purpose:** Sentiment breakdown of all citations for a keyword (polarity + emotional connotations).
- **Key request fields:** `keyword` (string) **required**; `page_type` (array); `positive_connotation_threshold` (float 0–1, default 0.4); `sentiments_connotation_threshold` (float 0–1, default 0.4); `internal_list_limit` (default 1, max 20); `rank_scale`; `initial_dataset_filters` (array); `keyword_fields` (object); `tag`.
- **Key response fields:** `sentiment_connotations` (anger, happiness, love, sadness, share, fun — with counts); `connotation_types` (positive, negative, neutral — with counts); `top_domains`; `text_categories`; `page_categories`; `page_types`; `countries`; `languages`.
- **Cost:** charged per request.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"logitech","internal_list_limit":1}]' \
  https://api.dataforseo.com/v3/content_analysis/sentiment_analysis/live
```

### rating_distribution

- **REST:** `POST /v3/content_analysis/rating_distribution/live` — Live.
- **MCP tool:** REST only.
- **Purpose:** Distribution of citations across content rating buckets for a keyword.
- **Key request fields:** `keyword` (string) **required**; `page_type` (array); `internal_list_limit` (default 1, max 20); `rank_scale`; `initial_dataset_filters` (array); `search_mode` (`as_is` | `one_per_domain`); `positive_connotation_threshold` (float 0–1, default 0.4).
- **Key response fields:** `result` array of rating buckets with `min` / `max` (rating range), and `metrics` (`total_count`, `rank`, `top_domains`, `connotation_types`, `page_types`, `countries`).
- **Cost:** charged per request.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"logitech","internal_list_limit":1}]' \
  https://api.dataforseo.com/v3/content_analysis/rating_distribution/live
```

### category_trends

- **REST:** `POST /v3/content_analysis/category_trends/live` — Live.
- **MCP tool:** REST only.
- **Purpose:** Citation trends over time for a whole content category (rather than a keyword).
- **Key request fields:** `category_code` (integer) **required** — target category (from the `categories` endpoint); `date_from` (string `yyyy-mm-dd`, min `2022-10-31`); `date_to` (string, defaults to today); `date_group` (`day` | `week` | `month`, default `month`); `page_type` (array); `search_mode` (`as_is` | `one_per_domain`); `internal_list_limit` (default 1, max 20); `rank_scale`; `initial_dataset_filters` (array, max 8); `tag`.
- **Key response fields:** per-period items: `total_count`, `rank`, `top_domains`, `sentiment_connotations`, `connotation_types`, `text_categories`, `page_categories`, `page_types`, `countries`, `languages`.
- **Cost:** charged per request.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"category_code":10994,"search_mode":"as_is","date_from":"2022-11-01","date_group":"month"}]' \
  https://api.dataforseo.com/v3/content_analysis/category_trends/live
```

### available_filters / id_list / categories (helpers)

- **`GET /v3/content_analysis/available_filters`** (free) — list of fields usable in `filters`/`initial_dataset_filters`/`order_by`. Filter structure `["field","operator",value]`, max 8 per request.
- **`POST /v3/content_analysis/id_list`** (free; 10 calls/min) — retrieve IDs of prior Content Analysis calls in a time window. Required: `datetime_from`, `datetime_to` (UTC strings); optional `limit` (default 1000, max 1000), `offset`, `sort` (`asc`/`desc`), `include_metadata` (bool).
- **`GET /v3/content_analysis/categories`** (free) — the category taxonomy (~3,180 hierarchical categories) whose `category_code` values feed `category_trends`; each item: `category_code`, `category_name`, `category_code_parent`.

> Docs: https://docs.dataforseo.com/v3/content_analysis/overview/ · https://docs.dataforseo.com/v3/content_analysis/search/live/ · https://docs.dataforseo.com/v3/content_analysis/summary/live/ · https://docs.dataforseo.com/v3/content_analysis/phrase_trends/live/ · https://docs.dataforseo.com/v3/content_analysis/sentiment_analysis/live/ · https://docs.dataforseo.com/v3/content_analysis/rating_distribution/live/ · https://docs.dataforseo.com/v3/content_analysis/category_trends/live/ · https://docs.dataforseo.com/v3/content_analysis/id_list/ · https://docs.dataforseo.com/v3/content_analysis/categories/
