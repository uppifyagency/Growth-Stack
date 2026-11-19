# DataForSEO — Backlinks API & Domain Analytics API

> Verbatim-grade reference distilled from docs.dataforseo.com (fetched June 2026). Read [01-mcp-and-conventions.md](01-mcp-and-conventions.md) first. **Backlinks is a pricier tier** — cost scales with rows; prefer `summary` and the `bulk_*` endpoints over full `backlinks` pulls when you only need aggregates.

# Backlinks API

Base URL `https://api.dataforseo.com` — HTTP Basic auth (`--user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD"`). All endpoints below are `POST .../live` and accept a JSON array of task objects. The core parameter is `target` (a domain/subdomain without `https://`/`www.`, or a page as an absolute URL). Backlinks pricing is charged per request; for list endpoints the cost scales with rows returned (`limit`). Data filtering and sorting (`filters`, `order_by`, `backlinks_filters`) are free. Historical index reaches back to 2019-01-30.

Common request fields shared by most list endpoints: `limit` (int, default 100, max 1000), `offset` (int, default 0), `internal_list_limit` (int, default 10, max 1000 — caps elements inside `referring_links_*` arrays), `backlinks_status_type` (string: `all`/`live`/`lost`, default `live`), `filters` (array, max 8, operators `=`,`<>`,`in`,`not_in`,`like`,`not_like`,`ilike`,`not_ilike`,`regex`,`not_regex`,`match`,`not_match`), `order_by` (array, max 3 rules, e.g. `["backlinks,desc"]`), `backlinks_filters` (array — pre-filters the underlying backlink set, e.g. `[["dofollow","=",true]]`), `include_subdomains` (bool, default true), `include_indirect_links` (bool, default true), `exclude_internal_backlinks` (bool, default true), `rank_scale` (string: `one_hundred`/`one_thousand`, default `one_thousand`), `tag` (string, max 255 chars).

### summary
**REST:** `POST /v3/backlinks/summary/live`
**MCP tool:** `backlinks_summary`
**Purpose:** Overview of the full backlink profile for a domain, subdomain, or page in a single response.
**Key request fields:**
- `target` (string) — domain/subdomain/page. **Required.**
- `include_subdomains` (bool) — include subdomains (default true).
- `include_indirect_links` (bool) — include redirects/canonicals (default true).
- `exclude_internal_backlinks` (bool) — exclude links from own subdomains (default true).
- `internal_list_limit` (int) — cap internal arrays (default 10, max 1000).
- `backlinks_status_type` (string) — `all`/`live`/`lost` (default `live`).
- `backlinks_filters` (array) — filter the underlying backlinks.
- `rank_scale` (string) — `one_hundred`/`one_thousand` (default `one_thousand`).
- `tag` (string) — task identifier (max 255).
**Key response fields:** `target`, `first_seen`, `lost_date`, `rank`, `backlinks`, `backlinks_spam_score`, `crawled_pages`, `info` (object: server, cms, ip, country, target spam score), `internal_links_count`, `external_links_count`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_domains_nofollow`, `referring_main_domains`, `referring_main_domains_nofollow`, `referring_ips`, `referring_subnets`, `referring_pages`, `referring_pages_nofollow`, `referring_links_tld` (obj), `referring_links_types` (obj: anchor/image/link/meta/canonical/alternate/redirect), `referring_links_attributes` (obj: nofollow/noopener/noreferrer/external/ugc/sponsored), `referring_links_platform_types` (obj: cms/blogs/ecommerce/message-boards/wikis/news/organization), `referring_links_semantic_locations` (obj), `referring_links_countries` (obj: ISO codes).
**Cost:** Charged per request (one row); example response showed ~$0.02 USD.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","internal_list_limit":10,"backlinks_status_type":"live","include_subdomains":true}]' \
  https://api.dataforseo.com/v3/backlinks/summary/live
```

### backlinks
**REST:** `POST /v3/backlinks/backlinks/live` — `mode`: `as_is` / `one_per_domain` / `one_per_anchor`
**MCP tool:** `backlinks_backlinks`
**Purpose:** Returns the list of individual backlinks pointing to the target.
**Key request fields:**
- `target` (string) — domain/subdomain/page. **Required.**
- `mode` (string) — grouping `as_is`/`one_per_domain`/`one_per_anchor` (default `as_is`).
- `custom_mode` (object) — `{field, value}` grouping; `field` ∈ anchor, domain_from, domain_from_country, tld_from, page_from_encoding, page_from_language, item_type, page_from_status_code, semantic_location; `value` 1–1000.
- `filters` (array) — up to 8 conditions.
- `order_by` (array) — max 3 rules.
- `offset` (int) — skip N; max 20,000 (beyond that use `search_after_token`).
- `search_after_token` (string) — pagination token past 20,000.
- `limit` (int) — default 100, max 1000.
- `backlinks_status_type` (string) — `all`/`live`/`lost` (default `live`).
- `include_subdomains`, `include_indirect_links`, `exclude_internal_backlinks` (bool, default true).
- `rank_scale` (string), `tag` (string).
**Key response fields (per backlink item):** `type` (`backlink`), `domain_from`, `url_from`, `url_from_https` (bool), `domain_to`, `url_to`, `url_to_status_code`, `tld_from`, `is_new`, `is_lost`, `backlink_spam_score`, `rank`, `page_from_rank`, `domain_from_rank`, `domain_from_platform_type`, `domain_from_is_ip` (bool), `domain_from_country`, `anchor`, `text_pre`, `text_post`, `dofollow` (bool), `original` (bool), `alt`, `image_url`, `links_count`, `group_count`, `is_broken` (bool), `first_seen`, `prev_seen`, `last_seen` (UTC `yyyy-mm-dd hh:mm:ss +00:00`), `item_type` (anchor/image/meta/canonical/alternate/redirect), `attributes` (array), `page_from_status_code`, `semantic_location`, `is_indirect_link` (bool), `indirect_link_path`.
**Cost:** Charged per request; cost scales per backlink (row) returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","mode":"as_is","limit":100,"backlinks_status_type":"live","filters":[["dofollow","=",true]],"order_by":["rank,desc"]}]' \
  https://api.dataforseo.com/v3/backlinks/backlinks/live
```

### anchors
**REST:** `POST /v3/backlinks/anchors/live`
**MCP tool:** `backlinks_anchors`
**Purpose:** Anchor texts used to link to the target, each with aggregated backlink metrics.
**Key request fields:** `target` (string, **required**); `limit` (int, default 100, max 1000); `offset` (int); `internal_list_limit` (int, default 10, max 1000); `backlinks_status_type` (string, default `live`); `filters` (array, max 8); `order_by` (array, max 3); `backlinks_filters` (array); `include_subdomains`, `include_indirect_links`, `exclude_internal_backlinks` (bool, default true); `rank_scale` (string); `tag` (string).
**Key response fields (per anchor):** `anchor`, `rank` (rank passed via this anchor), `backlinks`, `first_seen`, `lost_date`, `backlinks_spam_score`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_domains_nofollow`, `referring_main_domains`, `referring_main_domains_nofollow`, `referring_ips`, `referring_subnets`, `referring_pages`, `referring_pages_nofollow`, `referring_links_tld` (obj), `referring_links_types` (obj), `referring_links_attributes` (obj), `referring_links_platform_types` (obj), `referring_links_semantic_locations` (obj), `referring_links_countries` (obj).
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","limit":100,"backlinks_status_type":"live","order_by":["backlinks,desc"]}]' \
  https://api.dataforseo.com/v3/backlinks/anchors/live
```

### referring_domains
**REST:** `POST /v3/backlinks/referring_domains/live`
**MCP tool:** `backlinks_referring_domains`
**Purpose:** Domains/subdomains that link to the target, with per-domain backlink metrics.
**Key request fields:** `target` (string, **required**); `limit`, `offset`, `internal_list_limit`, `backlinks_status_type`, `filters`, `order_by`, `backlinks_filters`, `include_subdomains`, `include_indirect_links`, `exclude_internal_backlinks`, `rank_scale`, `tag` (as common).
**Key response fields (per referring domain):** `domain`, `rank`, `backlinks`, `first_seen`, `lost_date`, `backlinks_spam_score`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_domains_nofollow`, `referring_main_domains`, `referring_ips`, `referring_subnets`, `referring_pages`, `referring_pages_nofollow`, `referring_links_tld` (obj), `referring_links_types` (obj), `referring_links_attributes` (obj), `referring_links_platform_types` (obj), `referring_links_semantic_locations` (obj), `referring_links_countries` (obj).
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","limit":100,"backlinks_status_type":"live","order_by":["rank,desc"]}]' \
  https://api.dataforseo.com/v3/backlinks/referring_domains/live
```

### referring_networks
**REST:** `POST /v3/backlinks/referring_networks/live` — `network_address_type`: `ip` / `subnet`
**MCP tool:** `backlinks_referring_networks`
**Purpose:** Referring IPs or subnetworks pointing to the target, with aggregated metrics per network.
**Key request fields:** `target` (string, **required**); `network_address_type` (string: `ip` or `subnet`, default `ip`); `limit` (default 100, max 1000); `offset`; `internal_list_limit` (default 10, max 1000); `backlinks_status_type` (default `live`); `filters`; `order_by`; `backlinks_filters`; `include_subdomains`, `include_indirect_links`, `exclude_internal_backlinks` (default true); `rank_scale`; `tag`.
**Key response fields (per network):** `type` (`backlinks_referring_network`), `network_address` (IP or subnet), `rank`, `backlinks`, `first_seen`, `lost_date`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_pages`, `referring_pages_nofollow`, `referring_links_tld` (obj), `referring_links_types` (obj), `referring_links_attributes` (obj), `referring_links_platform_types` (obj), `referring_links_semantic_locations` (obj), `referring_links_countries` (obj).
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","network_address_type":"subnet","limit":100,"backlinks_status_type":"live"}]' \
  https://api.dataforseo.com/v3/backlinks/referring_networks/live
```

### domain_pages
**REST:** `POST /v3/backlinks/domain_pages/live`
**MCP tool:** `backlinks_domain_pages`
**Purpose:** Pages of the target domain that have backlinks, ranked with per-page metrics.
**Key request fields:** `target` (string, **required** — domain/subdomain); `limit`, `offset`, `internal_list_limit`, `backlinks_status_type`, `filters`, `order_by`, `backlinks_filters`, `include_subdomains`, `exclude_internal_backlinks`, `rank_scale`, `tag` (as common; note: no `include_indirect_links` documented here).
**Key response fields (per page):** `type` (`backlinks_domain_page`), `domain`, `page` (full URL), `meta` (object incl. `title`), `rank`, `backlinks`, `first_seen`, `lost_date`, `backlinks_spam_score`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_main_domains`, `referring_pages`, `referring_links_tld` (obj), `referring_links_types` (obj), `referring_links_attributes` (obj).
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","limit":100,"backlinks_status_type":"live","order_by":["backlinks,desc"]}]' \
  https://api.dataforseo.com/v3/backlinks/domain_pages/live
```

### domain_pages_summary
**REST:** `POST /v3/backlinks/domain_pages_summary/live`
**MCP tool:** `backlinks_domain_pages_summary`
**Purpose:** Summary backlink metrics for all pages of the target (aggregated page-level profile).
**Key request fields:** `target` (string, **required**); `limit`, `offset`, `internal_list_limit`, `backlinks_status_type`, `filters`, `order_by`, `backlinks_filters`, `include_subdomains`, `include_indirect_links`, `exclude_internal_backlinks`, `rank_scale`, `tag` (as common).
**Key response fields (per item):** `url`, `rank`, `backlinks`, `first_seen`, `lost_date`, `backlinks_spam_score`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_main_domains`, `referring_pages`, `referring_links_tld` (obj), `referring_links_types` (obj), `referring_links_attributes` (obj), `referring_links_platform_types` (obj), `referring_links_countries` (obj).
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","limit":100,"backlinks_status_type":"live"}]' \
  https://api.dataforseo.com/v3/backlinks/domain_pages_summary/live
```

### domain_intersection
**REST:** `POST /v3/backlinks/domain_intersection/live` — `intersection_mode`: `all` / `partial`
**MCP tool:** `backlinks_domain_intersection`
**Purpose:** Domains that link to two or more specified targets (link-gap / common-referrer analysis).
**Key request fields:**
- `targets` (object) — numbered string keys `1`–`20`, e.g. `{"1":"domain1.com","2":"domain2.com"}`. **Required.**
- `exclude_targets` (array) — up to 10 domains/pages to exclude (returns referrers of `targets` but not of these).
- `filters` (array, max 8), `order_by` (array, max 3, e.g. `["1.backlinks,desc"]`).
- `offset` (int), `limit` (int, default 100, max 1000).
- `internal_list_limit` (int, default 10, max 1000).
- `backlinks_status_type` (string, default `live`), `backlinks_filters` (array).
- `include_subdomains`, `include_indirect_links`, `exclude_internal_backlinks` (bool, default true).
- `intersection_mode` (string) — `all` (all backlinks) or `partial` (intersecting only); default `all`.
- `rank_scale` (string), `tag` (string).
**Key response fields:** wrapper `total_count`, `items_count`, `items`; each item carries a `domain_intersection` object keyed by the target numbers (`"1"`, `"2"`, …), each holding `type` (`backlinks_domain_intersection`), `target`, `rank`, `backlinks`, `first_seen`, `lost_date`, `backlinks_spam_score`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_main_domains`, `referring_ips`, `referring_subnets`, `referring_pages`, `referring_links_*` objects. `summary.intersections_count` = number of domains linking to all targets.
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":{"1":"apple.com","2":"samsung.com"},"intersection_mode":"all","limit":100,"backlinks_status_type":"live"}]' \
  https://api.dataforseo.com/v3/backlinks/domain_intersection/live
```

### page_intersection
**REST:** `POST /v3/backlinks/page_intersection/live` — `intersection_mode`: `all` / `partial`
**MCP tool:** `backlinks_page_intersection`
**Purpose:** Referring pages that link to two or more specified targets (page-level intersection of backlinks).
**Key request fields:**
- `targets` (object) — numbered keys `1`–`20`, e.g. `{"1":"football.com","2":"fifa.com"}`. **Required.**
- `exclude_targets` (array) — up to 10 to exclude.
- `limit` (int, default 100, max 1000), `offset` (int).
- `internal_list_limit` (int, default 10, max 1000 — caps `attributes` and `domain_from_platform_type` arrays).
- `backlinks_status_type` (string, default `live`).
- `include_subdomains`, `include_indirect_links`, `exclude_internal_backlinks` (bool, default true).
- `filters` (array, max 8), `order_by` (array, max 3).
- `intersection_mode` (string: `all`/`partial`, default `all`), `rank_scale` (string), `tag` (string).
**Key response fields:** items carry a `page_intersection` object with `domain_from`, `url_from`, `url_from_https`, `domain_to`, `url_to`, `url_to_https`, `url_to_status_code`, `tld_from`, `domain_from_rank`, `page_from_rank`, `is_new`, `is_lost`, `backlink_spam_score`, `anchor`, `text_pre`, `text_post`, `dofollow`, `original`, `item_type`, `first_seen`, `prev_seen`, `last_seen`, `is_broken`, `is_indirect_link`, `indirect_link_path`, `links_count`, `group_count`; plus `summary.intersections_count`.
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":{"1":"football.com","2":"fifa.com"},"intersection_mode":"all","limit":100}]' \
  https://api.dataforseo.com/v3/backlinks/page_intersection/live
```

### competitors
**REST:** `POST /v3/backlinks/competitors/live`
**MCP tool:** `backlinks_competitors`
**Purpose:** Domains with a backlink profile most similar to the target (competitor discovery by shared referrers).
**Key request fields:**
- `target` (string) — domain/subdomain/page. **Required.**
- `limit` (int, default 100, max 1000), `offset` (int).
- `filters` (array, max 8), `order_by` (array, max 3).
- `main_domain` (bool) — only main domains (default true).
- `exclude_large_domains` (bool) — omit large domains like google.com/amazon.com (default true).
- `exclude_internal_backlinks` (bool, default true).
- `rank_scale` (string), `tag` (string).
**Key response fields (per competitor):** `type` (`backlinks_competitors`), `target` (competitor domain), `rank`, `intersections` (number of shared/common referring domains with the target). Result also surfaces aggregate backlink/referring-domain context for ranking.
**Cost:** Charged per request; scales with rows returned.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","limit":100,"main_domain":true,"exclude_large_domains":true}]' \
  https://api.dataforseo.com/v3/backlinks/competitors/live
```

### timeseries_summary
**REST:** `POST /v3/backlinks/timeseries_summary/live`
**MCP tool:** `backlinks_timeseries_summary`
**Purpose:** Historical backlink-profile snapshots over time, grouped by interval.
**Key request fields:**
- `target` (string) — domain (no `https://`/`www.`). **Required.**
- `date_from` (string) — `yyyy-mm-dd`, minimum `2019-01-30`.
- `date_to` (string) — `yyyy-mm-dd`, defaults to today.
- `group_range` (string) — `day`/`week`/`month`/`year`, default `month`.
- `include_subdomains` (bool, default true).
- `rank_scale` (string), `tag` (string).
**Key response fields (per item):** `date`, `rank`, `backlinks`, `backlinks_nofollow`, `referring_pages`, `referring_pages_nofollow`, `referring_domains`, `referring_domains_nofollow`, `referring_main_domains`, `referring_main_domains_nofollow`, `referring_ips`, `referring_subnets`.
**Cost:** Charged per request.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","date_from":"2023-01-01","date_to":"2023-12-31","group_range":"month"}]' \
  https://api.dataforseo.com/v3/backlinks/timeseries_summary/live
```

### timeseries_new_lost_summary
**REST:** `POST /v3/backlinks/timeseries_new_lost_summary/live`
**MCP tool:** `backlinks_timeseries_new_lost_summary`
**Purpose:** Counts of new and lost backlinks / referring domains over time, grouped by interval.
**Key request fields:**
- `target` (string) — domain. **Required.**
- `date_from` (string) — `yyyy-mm-dd`, minimum `2019-01-30`.
- `date_to` (string) — `yyyy-mm-dd`, defaults to today.
- `group_range` (string) — `day`/`week`/`month`/`year`, default `month`.
- `include_subdomains` (bool, default true).
- `tag` (string).
**Key response fields (per item):** `date`, `new_backlinks`, `lost_backlinks`, `new_referring_domains`, `lost_referring_domains`, `new_referring_main_domains`, `lost_referring_main_domains`.
**Cost:** Charged per request.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com","date_from":"2023-01-01","group_range":"month"}]' \
  https://api.dataforseo.com/v3/backlinks/timeseries_new_lost_summary/live
```

### bulk_ranks
**REST:** `POST /v3/backlinks/bulk_ranks/live`
**MCP tool:** `backlinks_bulk_ranks`
**Purpose:** Rank score for up to 1000 targets in one call.
**Key request fields:** `targets` (array of up to 1000 domains/subdomains/pages; domains without `https://`/`www.`, pages as absolute URLs) **required**; `rank_scale` (string: `one_hundred`/`one_thousand`, default `one_thousand`); `tag` (string).
**Key response fields (per item):** `target`, `rank` (PageRank-like score on chosen scale).
**Cost:** Charged per request; scales with number of targets.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":["forbes.com","https://www.apple.com/iphone/"],"rank_scale":"one_thousand"}]' \
  https://api.dataforseo.com/v3/backlinks/bulk_ranks/live
```

### bulk_backlinks
**REST:** `POST /v3/backlinks/bulk_backlinks/live`
**MCP tool:** `backlinks_bulk_backlinks`
**Purpose:** Total live backlink count for up to 1000 targets.
**Key request fields:** `targets` (array, up to 1000) **required**; `tag` (string).
**Key response fields (per item):** `target`, `backlinks` (count of live backlinks).
**Cost:** Charged per request; scales with number of targets (example ~$0.02 for one task).
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":["forbes.com","apple.com"]}]' \
  https://api.dataforseo.com/v3/backlinks/bulk_backlinks/live
```

### bulk_spam_score
**REST:** `POST /v3/backlinks/bulk_spam_score/live`
**MCP tool:** `backlinks_bulk_spam_score`
**Purpose:** Backlink spam score for up to 1000 targets.
**Key request fields:** `targets` (array, up to 1000) **required**; `tag` (string).
**Key response fields (per item):** `type` (`backlinks_bulk_spam_score`), `target`, `spam_score` (0–100).
**Cost:** Charged per request; scales with number of targets.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":["forbes.com","apple.com"]}]' \
  https://api.dataforseo.com/v3/backlinks/bulk_spam_score/live
```

### bulk_referring_domains
**REST:** `POST /v3/backlinks/bulk_referring_domains/live`
**MCP tool:** `backlinks_bulk_referring_domains`
**Purpose:** Referring-domain counts for up to 1000 targets.
**Key request fields:** `targets` (array, up to 1000) **required**; `tag` (string).
**Key response fields (per item):** `target`, `referring_domains`, `referring_domains_nofollow`, `referring_main_domains`, `referring_main_domains_nofollow`.
**Cost:** Charged per request; scales with number of targets.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":["forbes.com","apple.com"]}]' \
  https://api.dataforseo.com/v3/backlinks/bulk_referring_domains/live
```

### bulk_new_lost_backlinks
**REST:** `POST /v3/backlinks/bulk_new_lost_backlinks/live`
**MCP tool:** `backlinks_bulk_new_lost_backlinks`
**Purpose:** New and lost backlink counts since a date, for up to 1000 targets.
**Key request fields:** `targets` (array, up to 1000) **required**; `date_from` (string `yyyy-mm-dd`; default 30 days ago; minimum 365 days back); `tag` (string).
**Key response fields (per item):** `target`, `new_backlinks` (appeared after `date_from`), `lost_backlinks` (present before, absent after).
**Cost:** Charged per request; scales with number of targets.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":["forbes.com","apple.com"],"date_from":"2024-01-01"}]' \
  https://api.dataforseo.com/v3/backlinks/bulk_new_lost_backlinks/live
```

### bulk_new_lost_referring_domains
**REST:** `POST /v3/backlinks/bulk_new_lost_referring_domains/live`
**MCP tool:** `backlinks_bulk_new_lost_referring_domains`
**Purpose:** New and lost referring-domain counts since a date, for up to 1000 targets.
**Key request fields:** `targets` (array, up to 1000) **required**; `date_from` (string `yyyy-mm-dd`; default one month ago; minimum one year back); `tag` (string).
**Key response fields (per item):** `target`, `new_referring_domains`, `lost_referring_domains`, `new_referring_main_domains`, `lost_referring_main_domains`.
**Cost:** Charged per request; scales with number of targets. Historical window spans 365 days.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":["forbes.com","apple.com"],"date_from":"2024-01-01"}]' \
  https://api.dataforseo.com/v3/backlinks/bulk_new_lost_referring_domains/live
```

### bulk_pages_summary
**REST:** `POST /v3/backlinks/bulk_pages_summary/live`
**MCP tool:** `backlinks_bulk_pages_summary`
**Purpose:** Summary backlink metrics for up to 1000 target pages/domains in one call.
**Key request fields:** `targets` (array, up to 1000 items; limited to 100 distinct domains) **required**; `include_subdomains` (bool, default true); `rank_scale` (string, default `one_thousand`); `tag` (string).
**Key response fields (per item):** `type` (`backlinks_page_summary`), `url`, `rank`, `main_domain_rank`, `backlinks`, `first_seen`, `lost_date`, `backlinks_spam_score`, `broken_backlinks`, `broken_pages`, `referring_domains`, `referring_domains_nofollow`, `referring_main_domains`, `referring_main_domains_nofollow`, `referring_ips`, `referring_subnets`, `referring_pages`, `referring_pages_nofollow`, `referring_links_tld` (obj), `referring_links_types` (obj), `referring_links_attributes` (obj), `referring_links_platform_types` (obj), `referring_links_semantic_locations` (obj), `referring_links_countries` (obj).
**Cost:** Charged per request; scales with number of targets.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"targets":["https://forbes.com/","https://apple.com/iphone/"],"rank_scale":"one_thousand"}]' \
  https://api.dataforseo.com/v3/backlinks/bulk_pages_summary/live
```

### available_filters
**REST:** `GET /v3/backlinks/available_filters` (no `/live`, no request body)
**MCP tool:** `backlinks_available_filters`
**Purpose:** Returns the full list of filterable fields and `order_by` fields available for each Backlinks endpoint.
**Key request fields:** none (GET).
**Key response fields:** `tasks` array with per-endpoint filter definitions; filter pattern is `[field, operator, value]`, up to 8 combined with `and`/`or`.
**Cost:** Free — DataForSEO does not charge for filtering/sorting metadata.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" \
  https://api.dataforseo.com/v3/backlinks/available_filters
```

> Docs: https://docs.dataforseo.com/v3/backlinks-summary-live/ · https://docs.dataforseo.com/v3/backlinks-backlinks-live/ · https://docs.dataforseo.com/v3/backlinks-anchors-live/ · https://docs.dataforseo.com/v3/backlinks-referring_domains-live/ · https://docs.dataforseo.com/v3/backlinks/referring_networks/live/ · https://docs.dataforseo.com/v3/backlinks/domain_pages/live/ · https://docs.dataforseo.com/v3/backlinks/domain_intersection/live/ · https://docs.dataforseo.com/v3/backlinks/page_intersection/live/ · https://docs.dataforseo.com/v3/backlinks/competitors/live/ · https://docs.dataforseo.com/v3/backlinks/bulk_ranks/live/ · https://docs.dataforseo.com/v3/backlinks-filters/

# Domain Analytics API

Base URL `https://api.dataforseo.com` — HTTP Basic auth. Both the Technologies and Whois components support only the Live method (no separate POST/GET task flow). Rate limits: up to 2000 API calls/min and max 30 simultaneous Live requests. `location_code` reference: US 2840, IT 2380, UK 2826, DE 2276, FR 2250.

## Technologies

### domain_technologies
**REST:** `POST /v3/domain_analytics/technologies/domain_technologies/live`
**MCP tool:** `domain_analytics_technologies_domain_technologies`
**Purpose:** Full technology profile and metadata for a single domain.
**Key request fields:**
- `target` (string) — domain name to analyze (results for that domain only). **Required.**
- `tag` (string) — user-defined identifier (max 255).
**Key response fields (per item):** `type` (`domain_technology_item`), `domain`, `title` (meta title), `description` (meta description), `meta_keywords` (array), `domain_rank` (backlink rank), `last_visited` (UTC), `country_iso_code`, `language_code`, `content_language_code`, `phone_numbers` (array), `emails` (array), `social_graph_urls` (array), `technologies` (object). The `technologies` object is a 3-level hierarchy **group → category → array of technology names** (e.g. group `web_development` → category `javascript_libraries` → `["jQuery", ...]`; other groups include `add_ons`, `servers`, `content`, `media`, `location`; categories include `programming_languages`, `cms`, `cdn`, `databases`, `wordpress_plugins`, `performance`, `maps`, etc.).
**Cost:** Charged per request.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"target":"forbes.com"}]' \
  https://api.dataforseo.com/v3/domain_analytics/technologies/domain_technologies/live
```

### technologies_summary
**REST:** `POST /v3/domain_analytics/technologies/technologies_summary/live` — `mode`: `as_is` / `entry`
**MCP tool:** (not in the supplied MCP list — call via REST)
**Purpose:** Number of domains using the specified technologies, broken down by country, language, and content language.
**Key request fields:** at least one of the following four is required — `technology_paths` (array of `{path:"$group_id.$category_id", name}`, max 10), `groups` (array of group IDs, max 10), `categories` (array of category IDs, max 10), `technologies` (array of technology names, max 10); also `keywords` (array, max 10 — terms in title/description/meta); `mode` (string: `as_is` exact or `entry` partial, default `as_is`); `filters` (array, max 8; fields `country_iso_code`, `language_code`, `content_language_code`, `domain_rank`, `last_visited`); `internal_list_limit` (int, default 10, range 1–10000); `tag` (string).
**Key response fields (per item):** `countries` (obj: country → domain count), `languages` (obj: language → count), `content_languages` (obj), `keywords` (obj: keyword → occurrence count).
**Cost:** Charged per request (per-call `cost` in response).
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"technologies":["WordPress"],"mode":"as_is","filters":[["country_iso_code","=","US"]]}]' \
  https://api.dataforseo.com/v3/domain_analytics/technologies/technologies_summary/live
```

### aggregation_technologies
**REST:** `POST /v3/domain_analytics/technologies/aggregation_technologies/live` — `mode`: `as_is` / `entry`
**MCP tool:** (not in the supplied MCP list — call via REST)
**Purpose:** Most popular technologies/groups/categories used alongside the specified technology, with domain counts.
**Key request fields:** at least one of `group` (string), `category` (string), `technology` (string), `keyword` (string, UTF-8) required; `mode` (string: `as_is` default / `entry`); `filters` (array, max 8); `order_by` (array; fields `groups_count`, `categories_count`, `technologies_count` with `asc`/`desc`); `internal_groups_list_limit` (int, default 5, max 10000); `internal_categories_list_limit` (int, default 5, max 10000); `internal_technologies_list_limit` (int, default 10, max 10000); `internal_list_limit` (int, overrides the three above, max 10000); `limit` (int, default 100, max 10000); `offset` (int, default 0, max 9999); `tag` (string).
**Key response fields (per item):** `type` (`aggregation_technologies_item`), `group`, `category`, `technology`, `groups_count`, `categories_count`, `technologies_count` (domains matching the parameters that use the indicated group/category/technology).
**Cost:** Charged per request.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"technology":"WordPress","mode":"as_is","limit":100,"order_by":["technologies_count,desc"]}]' \
  https://api.dataforseo.com/v3/domain_analytics/technologies/aggregation_technologies/live
```

### technology_stats
**REST:** `POST /v3/domain_analytics/technologies/technology_stats/live`
**MCP tool:** (not in the supplied MCP list — call via REST)
**Purpose:** Historical adoption stats (domains-using-it over time) for a single technology.
**Key request fields:** `technology` (string) — target technology, from the available technologies list. **Required.** `date_from` (string `yyyy-mm-dd`, minimum `2022-10-31`); `date_to` (string `yyyy-mm-dd`, default today); `tag` (string).
**Key response fields (per item):** `type` (`technology_stats_item`), `date`, `domains_count` (total domains using the technology), `countries` (obj: country → count), `languages` (obj: language → count), `domains_rank` (obj: backlink-rank range → count).
**Cost:** Charged per request.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"technology":"WordPress","date_from":"2023-01-01","date_to":"2023-12-31"}]' \
  https://api.dataforseo.com/v3/domain_analytics/technologies/technology_stats/live
```

### available_filters (Technologies)
**REST:** `GET /v3/domain_analytics/technologies/available_filters` (no request body)
**MCP tool:** `domain_analytics_technologies_available_filters`
**Purpose:** Returns the full list of filterable fields available across Domain Analytics Technologies endpoints.
**Key request fields:** none (GET).
**Key response fields:** filter fields incl. `domain_rank` (num), `last_visited` (time), `country_iso_code` (str), `language_code` (str), `content_language_code` (str), and `domain` (str, supported only in the Domains by HTML Terms endpoint). Operators — numeric: `<`,`<=`,`>`,`>=`,`=`,`<>`,`in`,`not_in`; string: `like`,`not_like`,`=`,`<>`,`regex`,`not_regex`; time: `<`,`>`. Up to 8 filters combined with `and`/`or`.
**Cost:** Free.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" \
  https://api.dataforseo.com/v3/domain_analytics/technologies/available_filters
```

## Whois

### overview
**REST:** `POST /v3/domain_analytics/whois/overview/live`
**MCP tool:** `domain_analytics_whois_overview`
**Purpose:** Whois records enriched with backlink stats and organic/paid search ranking & traffic data; the dataset is queried via `filters`/`order_by` (not a single `target`).
**Key request fields:**
- `limit` (int) — max returned domains (default 100, max 1000).
- `offset` (int) — results offset (default 0); use `offset_token` past 10,000 results.
- `offset_token` (string) — pagination token for large result sets.
- `filters` (array) — max 8 conditions; operators `regex`, `<`, `<=`, `>`, `>=`, `=`, `<>`, `in`, `not_in`, `like`, `not_like`.
- `order_by` (array) — max 3 rules, format `"field,asc"`/`"field,desc"`.
- `tag` (string) — identifier (max 255).
**Key response fields (per item):** `domain`, `created_datetime`, `changed_datetime`, `expiration_datetime`, `updated_datetime`, `first_seen`, `epp_status_codes` (array), `tld`, `registered` (bool), `registrar`, `metrics.organic` (object: `pos_1`, `pos_2_3`, `pos_4_10` … `pos_91_100`, `etv`, `count`, `estimated_paid_traffic_cost`), `metrics.paid` (object, same structure), `backlinks_info` (object: `referring_domains`, `referring_pages`, `dofollow`, `backlinks`, `time_update`).
**Cost:** Charged per request.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST \
  -d '[{"limit":100,"filters":[["tld","=","com"],"and",["metrics.organic.count",">",100]],"order_by":["metrics.organic.etv,desc"]}]' \
  https://api.dataforseo.com/v3/domain_analytics/whois/overview/live
```

### available_filters (Whois)
**REST:** `GET /v3/domain_analytics/whois/available_filters` (no request body)
**MCP tool:** `domain_analytics_whois_available_filters`
**Purpose:** Returns the full list of filterable fields for the Whois overview endpoint.
**Key request fields:** none (GET).
**Key response fields:** filterable fields under `overview` — `domain` (str), `tld` (str), `registrar` (str), `created_datetime`/`changed_datetime`/`expiration_datetime`/`updated_datetime` (time), `epp_status_codes` (array.str), `registered` (bool), `metrics.organic.pos_1` … `metrics.organic.pos_91_100`, `metrics.organic.etv`, `metrics.organic.count`, `metrics.organic.estimated_paid_traffic_cost` (num), and the matching `metrics.paid.*` set.
**Cost:** Free.
**Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" \
  https://api.dataforseo.com/v3/domain_analytics/whois/available_filters
```

> Docs: https://docs.dataforseo.com/v3/domain_analytics-overview/ · https://docs.dataforseo.com/v3/domain_analytics/technologies/domain_technologies/live/ · https://docs.dataforseo.com/v3/domain_analytics-technologies-technologies_summary-live/ · https://docs.dataforseo.com/v3/domain_analytics-technologies-aggregation_technologies-live/ · https://docs.dataforseo.com/v3/domain_analytics-technologies-technology_stats-live/ · https://docs.dataforseo.com/v3/domain_analytics-whois-overview-live/ · https://docs.dataforseo.com/v3/domain_analytics-whois-filters/
