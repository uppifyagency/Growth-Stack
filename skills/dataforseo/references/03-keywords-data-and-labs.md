# DataForSEO — Keywords Data API & DataForSEO Labs API

> Verbatim-grade reference distilled from docs.dataforseo.com (fetched June 2026). Read [01-mcp-and-conventions.md](01-mcp-and-conventions.md) first. **Labs is the cheapest tier** — prefer it for keyword volume/metrics/competitive data over the Google Ads endpoints when you can.

# Keywords Data API

Base URL: `https://api.dataforseo.com` — HTTP Basic auth (`--user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD"`). POST bodies are a JSON **array** of task objects (UTF-8). Google Ads live endpoints are rate-limited to **12 requests/minute/account**; Trends endpoints allow up to 2000 calls/min (Google Trends has a global 500K/day cap across all users). Most Keywords Data endpoints also exist as task-based pairs (`/task_post` + `/task_get`); the `/live` mode returns results in one call. Location codes: US `2840`, IT `2380`, UK `2826`, DE `2276`, FR `2250`. Language codes: `"en"`, `"it"`.

### google_ads/search_volume

- **REST:** `POST /v3/keywords_data/google_ads/search_volume/live` (also task-based: `/task_post` + `/task_get`)
- **MCP tool:** `kw_data_google_ads_search_volume` (locations helper: `kw_data_google_ads_locations`)
- **Purpose:** Google Ads search volume, CPC, competition, and 12-month history for a list of keywords.
- **Key request fields:**
  - `keywords` (array) — **required**; up to 1,000 keywords; max 80 chars each, max 10 words per phrase.
  - `location_name` (string) / `location_code` (integer) — optional; geo target (omit for worldwide).
  - `location_coordinate` (string) — optional; "latitude,longitude".
  - `language_name` (string) / `language_code` (string) — optional.
  - `search_partners` (boolean) — optional; include Google search partner network; default `false`.
  - `date_from` (string `yyyy-mm-dd`) — optional; up to 4 years back; default past 12 months.
  - `date_to` (string `yyyy-mm-dd`) — optional; cannot exceed last month; default yesterday.
  - `include_adult_keywords` (boolean) — optional; default `false`.
  - `sort_by` (string) — optional; `relevance` | `search_volume` | `competition_index` | `low_top_of_page_bid` | `high_top_of_page_bid`.
  - `tag` (string) — optional; max 255 chars.
- **Key response fields:** `keyword`, `spell` (correction), `location_code`, `language_code`, `search_partners`, `search_volume` (int, monthly avg), `competition` (string `HIGH`/`MEDIUM`/`LOW`), `competition_index` (int 0–100), `cpc` (float, USD), `low_top_of_page_bid` (float), `high_top_of_page_bid` (float), `monthly_searches` (array of `{year, month, search_volume}`).
- **Cost:** Charged per request; price for 1 or 1000 keywords is the same. Historical data up to 4 years.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"location_code":2840,"language_code":"en","keywords":["seo tools","keyword research"]}]' https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live
  ```

### google_ads/keywords_for_keywords

- **REST:** `POST /v3/keywords_data/google_ads/keywords_for_keywords/live` (also task-based)
- **MCP tool:** (no dedicated MCP tool in the listed set; access via REST)
- **Purpose:** Expand seed keywords into relevant keyword suggestions with Google Ads metrics.
- **Key request fields:**
  - `keywords` (array) — **required**; max **20** seed keywords; 80 chars each.
  - `location_name`/`location_code`, `location_coordinate` — optional geo.
  - `language_name`/`language_code` — optional.
  - `search_partners` (boolean) — optional; default `false`.
  - `date_from` / `date_to` (string `yyyy-mm-dd`) — optional; up to 4 years back / cannot exceed yesterday.
  - `sort_by` (string) — optional; same enum as search_volume.
  - `include_adult_keywords` (boolean) — optional; default `false`.
  - `tag` (string) — optional.
- **Key response fields:** `keyword`, `search_volume` (int), `cpc` (float), `competition` (string `LOW`/`MEDIUM`/`HIGH`), `competition_index` (int 0–100), `low_top_of_page_bid`, `high_top_of_page_bid`, `monthly_searches` (array `{year, month, search_volume}`), `keyword_annotations` (object: concepts and concept_groups). Returns up to ~20,000 keyword suggestions.
- **Cost:** Charged per request regardless of result count.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"location_code":2380,"language_code":"it","keywords":["scarpe da corsa"]}]' https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live
  ```

### google_ads/keywords_for_site

- **REST:** `POST /v3/keywords_data/google_ads/keywords_for_site/live` (also task-based)
- **MCP tool:** (no dedicated MCP tool in the listed set; access via REST)
- **Purpose:** Keyword suggestions Google Ads associates with a domain or page, with full ad metrics.
- **Key request fields:**
  - `target` (string) — **required**; domain or page URL.
  - `target_type` (string) — optional; `site` (entire domain) or `page` (specific URL); default `page`.
  - `location_name`/`location_code`, `location_coordinate` — optional geo.
  - `language_name`/`language_code` — optional.
  - `search_partners` (boolean) — optional; default `false`.
  - `date_from`/`date_to` (string `yyyy-mm-dd`) — optional.
  - `include_adult_keywords` (boolean) — optional; default `false`.
  - `sort_by` (string) — optional; same enum as search_volume.
  - `tag` (string) — optional.
- **Key response fields:** `keyword`, `search_volume`, `cpc`, `competition` (LOW/MEDIUM/HIGH), `competition_index` (0–100), `low_top_of_page_bid`, `high_top_of_page_bid`, `monthly_searches` (array `{year, month, search_volume}`), `keyword_annotations`. Up to ~2,000 suggestions per request.
- **Cost:** Charged per request regardless of result count.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"dataforseo.com","target_type":"site","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_site/live
  ```

### google/ad_traffic_by_keywords

- **REST:** `POST /v3/keywords_data/google/ad_traffic_by_keywords/live` (also task-based). Note path segment is `google` (not `google_ads`).
- **MCP tool:** (no dedicated MCP tool in the listed set; access via REST)
- **Purpose:** Forecast Google Ads impressions, clicks, CPC and cost for keywords at a given bid and match type.
- **Key request fields:**
  - `keywords` (array) — **required**; max **2,500** keywords; 80 chars each, max 10 words per phrase.
  - `bid` (float) — **required**; max custom bid (USD) used for the placement estimate.
  - `match` (string) — **required**; `exact` | `broad` | `phrase`.
  - `location_name`/`location_code` — optional geo.
  - `language_name`/`language_code` — **required** (one of the two).
  - `date_from` / `date_to` (string `yyyy-mm-dd`) — optional date range for the forecast.
  - `date_interval` (string) — optional aggregation interval (e.g. monthly).
  - `search_partners` (boolean) — optional.
  - `sort_by` (string) — optional.
  - `tag` (string) — optional.
- **Key response fields:** `keyword`, `ad_position_min` (float), `ad_position_average` (float), `cpc_min` (float), `cpc_average` (float), `daily_impressions_average` (float), `daily_clicks_average` (float), `daily_cost_average` (float). (Monthly breakdown returned per the date range.)
- **Cost:** Charged per request regardless of keyword count.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"location_code":2840,"language_code":"en","bid":2.5,"match":"exact","keywords":["running shoes"]}]' https://api.dataforseo.com/v3/keywords_data/google/ad_traffic_by_keywords/live
  ```

### google_trends/explore

- **REST:** `POST /v3/keywords_data/google_trends/explore/live` (also task-based: `/task_post` + `/task_get`)
- **MCP tool:** `kw_data_google_trends_explore` (categories helper: `kw_data_google_trends_categories`)
- **Purpose:** Google Trends "Explore" popularity (relative index 0–100), plus geo map and related topics/queries.
- **Key request fields:**
  - `keywords` (array) — **required**; max **5** keywords; 1–100 chars each.
  - `location_name` (string) / `location_code` (integer) — optional; omit for worldwide.
  - `language_name`/`language_code` — optional; default English/`en`.
  - `type` (string) — optional; `web` | `news` | `youtube` | `images` | `froogle`; default `web`.
  - `category_code` (integer) — optional; default `0` (all categories).
  - `date_from` (string `yyyy-mm-dd`) — optional; web from 2004-01-01, other types from 2008-01-01.
  - `date_to` (string `yyyy-mm-dd`) — optional; default today.
  - `time_range` (string) — optional preset: `past_hour`, `past_4_hours`, `past_day`, `past_7_days`, `past_30_days`, `past_90_days`, `past_12_months`, `past_5_years`, `2004_present`/`2008_present`.
  - `item_types` (array) — optional; `google_trends_graph` | `google_trends_map` | `google_trends_topics_list` | `google_trends_queries_list`; default `["google_trends_graph"]`.
  - `tag` (string) — optional.
- **Key response fields:** `items[]` keyed by `type`:
  - `google_trends_graph`: `data[]` of `{date_from, date_to, timestamp, missing_data, values[]}` + `averages[]` (one per keyword).
  - `google_trends_map`: per-geo `{geo_id, geo_name, values[], max_value_index}`.
  - `google_trends_topics_list` / `google_trends_queries_list`: `top[]` and `rising[]` arrays.
- **Cost:** Charged per request (max 5 keywords). Rate: limit errors over 250 live tasks/min; global 500K/day across all Trends endpoints.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["bitcoin","ethereum"],"location_code":2840,"type":"web","time_range":"past_12_months","item_types":["google_trends_graph"]}]' https://api.dataforseo.com/v3/keywords_data/google_trends/explore/live
  ```

### dataforseo_trends/explore

- **REST:** `POST /v3/keywords_data/dataforseo_trends/explore/live` (live only)
- **MCP tool:** `kw_data_dfs_trends_explore`
- **Purpose:** DataForSEO's own Google-Trends-style popularity index (0–100) from its clickstream data — no Google rate cap.
- **Key request fields:**
  - `keywords` (array) — **required**; max **5** keywords.
  - `location_name` (string) / `location_code` (integer) — optional.
  - `type` (string) — optional; `web` | `news` | `ecommerce`; default `web`.
  - `date_from`/`date_to` (string `yyyy-mm-dd`) — optional; web data from 2004-01-01.
  - `time_range` (string) — optional preset: `past_4_hours`, `past_day`, `past_7_days`, `past_30_days`, `past_90_days`, `past_12_months`, `past_5_years`.
  - `tag` (string) — optional.
- **Key response fields:** `items[].type` = `dataforseo_trends_graph`; `items[].data[]` of `{date_from, date_to, timestamp, values[]}` where each value is a relative popularity rate 0–100; `items[].averages` (avg over the range, per keyword); `items[].keywords`.
- **Cost:** Charged per request (max 5 keywords). Up to 2000 calls/min.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["autoricambi","ricambi auto"],"location_code":2380,"time_range":"past_12_months"}]' https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/explore/live
  ```

### dataforseo_trends/subregion_interests

- **REST:** `POST /v3/keywords_data/dataforseo_trends/subregion_interests/live` (live only)
- **MCP tool:** `kw_data_dfs_trends_subregion_interests`
- **Purpose:** Geographic (region/subregion) breakdown of keyword interest.
- **Key request fields:**
  - `keywords` (array) — **required**; max **5** keywords.
  - `location_name` (string) / `location_code` (integer) — optional; country-level returns its subregions.
  - `type` (string) — optional; `web` | `news` | `ecommerce`; default `web`.
  - `date_from`/`date_to` (string `yyyy-mm-dd`) — optional; web from 2004-01-01.
  - `time_range` (string) — optional preset (same set as explore).
  - `tag` (string) — optional.
- **Key response fields:** `items[].type` = `subregion_interests`; `items[].interests[]` per keyword with `keyword` and `values[]` of `{geo_id, geo_name, value}` (value 0–100); `items[].interests_comparison` (null for single keyword; otherwise `items[]` per-location and `absolute_items[]` across all locations).
- **Cost:** Charged per request (max 5 keywords). Up to 2000 calls/min.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["pizza"],"location_code":2380,"time_range":"past_12_months"}]' https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/subregion_interests/live
  ```

### dataforseo_trends/demography

- **REST:** `POST /v3/keywords_data/dataforseo_trends/demography/live` (live only)
- **MCP tool:** `kw_data_dfs_trends_demography`
- **Purpose:** Age and gender breakdown of keyword interest.
- **Key request fields:**
  - `keywords` (array) — **required**; max **5** keywords (avoid special/UTF symbols).
  - `location_name` (string) / `location_code` (integer) — optional (mutually exclusive).
  - `type` (string) — optional; `web` (default) | `news` | `ecommerce`.
  - `date_from`/`date_to` (string `yyyy-mm-dd`) — optional.
  - `time_range` (string) — optional preset (same set as explore).
  - `tag` (string) — optional.
- **Key response fields:** `items[].type` = `demography`; `items[].demography.age[]` (ranges `18-24`, `25-34`, `35-44`, `45-54`, `55-64` with popularity values), `items[].demography.gender[]` (`female`, `male` with values); `items[].demography_comparison` when multiple keywords. Values normalized so the highest = 100.
- **Cost:** Charged per request (max 5 keywords).
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["gaming laptop"],"location_code":2840,"time_range":"past_12_months"}]' https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/demography/live
  ```

> Docs: https://docs.dataforseo.com/v3/keywords_data-google_ads-search_volume-live/ · https://docs.dataforseo.com/v3/keywords_data-google_ads-keywords_for_keywords-live/ · https://docs.dataforseo.com/v3/keywords_data-google_ads-keywords_for_site-live/ · https://docs.dataforseo.com/v3/keywords-data-google-ad-traffic-by-keywords-live/ · https://docs.dataforseo.com/v3/keywords_data-google-trends-explore-live/ · https://docs.dataforseo.com/v3/keywords_data-dataforseo_trends-explore-live/ · https://docs.dataforseo.com/v3/keywords_data-dataforseo_trends-subregion_interests-live/ · https://docs.dataforseo.com/v3/keywords_data-dataforseo_trends-demography-live/

# DataForSEO Labs API

Base URL: `https://api.dataforseo.com` — HTTP Basic auth. Bodies are a JSON **array** of task objects. Labs endpoints are **`/live` only** (no task-based pairs). High throughput: up to 2000 calls/min, max 30 simultaneous requests. `include_clickstream_data: true` **doubles the cost** on every endpoint that supports it. `filters` accept up to 8 conditions with operators `regex`, `not_regex`, `<`, `<=`, `>`, `>=`, `=`, `<>`, `in`, `not_in`, `match`, `ilike`, `like`; `order_by` accepts up to 3 rules like `["keyword_data.keyword_info.search_volume,desc"]`. Keyword difficulty is an integer 0–100. Use `offset_token` for pagination beyond 10,000 results where supported. Position-distribution objects use the buckets `pos_1`, `pos_2_3`, `pos_4_10`, `pos_11_20`, `pos_21_30`, `pos_31_40`, `pos_41_50`, `pos_51_60`, `pos_61_70`, `pos_71_80`, `pos_81_90`, `pos_91_100`.

## Keyword research

### keyword_overview

- **REST:** `POST /v3/dataforseo_labs/google/keyword_overview/live`
- **MCP tool:** `dataforseo_labs_google_keyword_overview`
- **Purpose:** Full snapshot (volume, CPC, competition, difficulty, intent, SERP/backlink data) for a known list of keywords. **This is the workhorse endpoint for demand validation — `keyword_info.monthly_searches` gives a 12+ month trend for free.**
- **Key request fields:**
  - `keywords` (array) — **required**; up to **700** keywords; max 80 chars, max 10 words each.
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `include_serp_info` (boolean) — optional; default `false`.
  - `include_clickstream_data` (boolean) — optional; **doubles cost**; default `false`.
  - `tag` (string) — optional; max 255 chars.
- **Key response fields:** `items[].keyword`; `keyword_info.{search_volume, cpc, competition, competition_level (LOW/MEDIUM/HIGH), monthly_searches[] (12+ months, free), search_volume_trend (monthly/quarterly/yearly %), low_top_of_page_bid, high_top_of_page_bid, categories[]}`; `keyword_properties.{keyword_difficulty (0–100), detected_language, is_another_language, core_keyword}`; `search_intent_info.{main_intent (informational/navigational/commercial/transactional), foreign_intent[]}`; `avg_backlinks_info` (backlinks, referring domains/pages, rank); `serp_info` (if requested); `clickstream_keyword_info`, `keyword_info_normalized_with_bing`, `keyword_info_normalized_with_clickstream` (if clickstream enabled).
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["iphone","macbook"],"location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live
  ```

### keyword_ideas

- **REST:** `POST /v3/dataforseo_labs/google/keyword_ideas/live`
- **MCP tool:** `dataforseo_labs_google_keyword_ideas`
- **Purpose:** Keywords in the **same category** as the seed keywords (broad ideation from multiple seeds).
- **Key request fields:**
  - `keywords` (array) — **required**; up to **200** seed keywords (lowercased).
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — optional.
  - `closely_variants` (boolean) — optional; `true` = phrase-match, `false` = broad-match; default `false`.
  - `ignore_synonyms` (boolean) — optional; default `false`.
  - `include_serp_info` (boolean) — optional; default `false`.
  - `include_clickstream_data` (boolean) — optional; **doubles cost**; default `false`.
  - `limit` (integer) — optional; default 700, max 1000.
  - `offset` (integer) — optional; default 0 (for <10k results).
  - `offset_token` (string) — optional; for >10k results.
  - `filters` (array), `order_by` (array, default `["relevance,desc"]`), `tag` (string) — optional.
- **Key response fields:** `se_type`, `seed_keywords[]`, `total_count`, `items_count`, `offset`, `offset_token`, `items[].{keyword, keyword_info, keyword_properties, search_intent_info}`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["coffee maker"],"location_code":2840,"language_code":"en","limit":100}]' https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live
  ```

### keyword_suggestions

- **REST:** `POST /v3/dataforseo_labs/google/keyword_suggestions/live`
- **MCP tool:** `dataforseo_labs_google_keyword_suggestions`
- **Purpose:** Long-tail keywords that **include the single seed keyword** (search-term + words before/after).
- **Key request fields:**
  - `keyword` (string, singular) — **required**; lowercased.
  - `location_name`/`location_code` — optional (omit for all locations).
  - `language_name`/`language_code` — optional.
  - `include_seed_keyword` (boolean) — optional; adds seed data in `seed_keyword_data`.
  - `include_serp_info` (boolean) — optional.
  - `include_clickstream_data` (boolean) — optional; **doubles cost**.
  - `exact_match` (boolean) — optional; return exact phrase with words before/after.
  - `ignore_synonyms` (boolean) — optional; only core keywords.
  - `filters` (array), `order_by` (array, default `["keyword_info.search_volume,desc"]`) — optional.
  - `limit` (integer) — optional; default 100, max 1000. `offset` (integer), `offset_token` (string), `tag` (string) — optional.
- **Key response fields:** `seed_keyword`, `location_code`, `language_code`, `total_count`, `items_count`, `offset_token`, `items[].{keyword, keyword_info, keyword_properties, search_intent_info, serp_info, avg_backlinks_info}`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"espresso machine","location_code":2840,"language_code":"en","limit":100}]' https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live
  ```

### related_keywords

- **REST:** `POST /v3/dataforseo_labs/google/related_keywords/live`
- **MCP tool:** `dataforseo_labs_google_related_keywords`
- **Purpose:** Keywords from Google's "searches related to" block, expanded by depth.
- **Key request fields:**
  - `keyword` (string) — **required**; lowercased.
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `depth` (integer) — optional; default 1; range 0–4. Max keywords per depth: 0→seed only, 1→8, 2→72, 3→584, 4→4680.
  - `include_seed_keyword` (boolean), `include_serp_info` (boolean), `include_clickstream_data` (boolean, **doubles cost**), `ignore_synonyms` (boolean), `replace_with_core_keyword` (boolean) — all optional, default `false`.
  - `filters` (array), `order_by` (array, e.g. `["keyword_data.keyword_info.search_volume,desc"]`) — optional.
  - `limit` (integer) — optional; default 100, max 1000. `offset` (integer), `tag` (string) — optional.
- **Key response fields:** `seed_keyword`, `total_count`, `items[].{keyword_data (full keyword metrics), depth, related_keywords[] (list of associated queries)}`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"running shoes","location_code":2840,"language_code":"en","depth":2}]' https://api.dataforseo.com/v3/dataforseo_labs/google/related_keywords/live
  ```

### search_intent

- **REST:** `POST /v3/dataforseo_labs/google/search_intent/live`
- **MCP tool:** `dataforseo_labs_search_intent`
- **Purpose:** ML-classified search intent for keywords (no location needed — language only).
- **Key request fields:**
  - `keywords` (array) — **required**; max **1,000** keywords (lowercased).
  - `language_name`/`language_code` — **required** (one of the two). *(No location parameter.)*
  - `tag` (string) — optional; max 255 chars.
- **Key response fields:** `items[].keyword`; `items[].keyword_intent.{label (informational/navigational/commercial/transactional), probability (0–1)}`; `items[].secondary_keyword_intents[]` (alternative intents with probabilities).
- **Cost:** Charged per request. Max 1,000 keywords/request.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["buy iphone 15","what is seo"],"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/search_intent/live
  ```

### bulk_keyword_difficulty

- **REST:** `POST /v3/dataforseo_labs/google/bulk_keyword_difficulty/live`
- **MCP tool:** `dataforseo_labs_bulk_keyword_difficulty`
- **Purpose:** Keyword difficulty (0–100) for many keywords in one call.
- **Key request fields:**
  - `keywords` (array) — **required**; max **1,000** keywords (lowercased).
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `tag` (string) — optional.
- **Key response fields:** `items[].keyword`; `items[].keyword_difficulty` (integer 0–100, logarithmic; relative chance of ranking in top-10 organic).
- **Cost:** Charged per request. Max 1,000 keywords/request.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["seo","keyword research","backlinks"],"location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/bulk_keyword_difficulty/live
  ```

### historical_keyword_data

- **REST:** `POST /v3/dataforseo_labs/google/historical_keyword_data/live`
- **MCP tool:** `dataforseo_labs_google_historical_keyword_data`
- **Purpose:** Month-by-month history of `keyword_info` metrics for keywords (data since Aug 2021).
- **Key request fields:**
  - `keywords` (array) — **required**; max **700** keywords; 80 chars, max 10 words each.
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `tag` (string) — optional.
- **Key response fields:** `items[].keyword`; `items[].history[]` of `{year, month, keyword_info{search_volume, cpc, competition, competition_level, monthly_searches[], low_top_of_page_bid, high_top_of_page_bid, categories[], search_volume_trend}}`.
- **Cost:** Charged per request. Data available since August 2021.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["black friday"],"location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/historical_keyword_data/live
  ```

## Domain analysis

### ranked_keywords

- **REST:** `POST /v3/dataforseo_labs/google/ranked_keywords/live`
- **MCP tool:** `dataforseo_labs_google_ranked_keywords`
- **Purpose:** All keywords a domain/subdomain/URL ranks for, with SERP position and traffic.
- **Key request fields:**
  - `target` (string) — **required**; domain/subdomain (no `https://`) or full page URL.
  - `location_name`/`location_code`, `language_name`/`language_code` — optional.
  - `ignore_synonyms` (boolean) — optional; default `false`.
  - `include_clickstream_data` (boolean) — optional; **doubles cost**.
  - `item_types` (array) — optional; `["organic","paid","featured_snippet","local_pack","ai_overview_reference"]`; default `["organic","paid"]`.
  - `load_rank_absolute` (boolean) — optional; adds rank_absolute / `metrics_absolute`; default `false`.
  - `historical_serp_mode` (string) — optional; `live` | `lost` | `all`; default `live`.
  - `limit` (integer) — optional; default 100, max 1000. `offset` (integer), `filters` (array), `order_by` (array), `tag` (string) — optional.
- **Key response fields:** `target`, `total_count`, `items_count`; `metrics` per type (`organic`/`paid`/...) with `pos_1`…`pos_91_100`, `etv`, `count`, `estimated_paid_traffic_cost`, `is_new`/`is_up`/`is_down`/`is_lost`; `items[].keyword_data`; `items[].ranked_serp_element.serp_item.{rank_group, rank_absolute, position, etv, estimated_paid_traffic_cost}`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"dataforseo.com","location_code":2840,"language_code":"en","limit":100}]' https://api.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live
  ```

### competitors_domain

- **REST:** `POST /v3/dataforseo_labs/google/competitors_domain/live`
- **MCP tool:** `dataforseo_labs_google_competitors_domain`
- **Purpose:** Organic/paid competitors of a domain, ranked by shared keywords and visibility.
- **Key request fields:**
  - `target` (string) — **required**; domain (no `https://`/`www.`).
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `item_types` (array) — optional; default `["organic","paid"]`.
  - `include_clickstream_data` (boolean) — optional; **doubles cost**.
  - `max_rank_group` (integer) — optional; extract competitors from top N results; default 100.
  - `exclude_top_domains` (boolean) — optional; drop Wikipedia/Amazon/Google etc.; default `false`.
  - `exclude_domains` (array, max 1000), `intersecting_domains` (array, max 20), `ignore_synonyms` (boolean) — optional.
  - `filters` (array), `order_by` (array), `limit` (default 100, max 1000), `offset`, `tag` — optional.
- **Key response fields:** `target`, `total_count`, `items_count`; `items[].{domain, avg_position, sum_position, intersections, full_domain_metrics, metrics}`. Each metric object (`organic`/`paid`/`local_pack`/`featured_snippet`) has `count`, `etv`, `estimated_paid_traffic_cost`, `pos_1`…`pos_91_100`, `is_new`/`is_up`/`is_down`/`is_lost`, and (with clickstream) `clickstream_etv`, `clickstream_gender_distribution`, `clickstream_age_distribution`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"dataforseo.com","location_code":2840,"language_code":"en","limit":50}]' https://api.dataforseo.com/v3/dataforseo_labs/google/competitors_domain/live
  ```

### domain_intersection

- **REST:** `POST /v3/dataforseo_labs/google/domain_intersection/live`
- **MCP tool:** `dataforseo_labs_google_domain_intersection`
- **Purpose:** Keywords for which **two domains both rank** (or where one ranks and the other doesn't).
- **Key request fields:**
  - `target1` (string) — **required**; first domain. `target2` (string) — **required**; second domain.
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `intersections` (boolean) — optional; `true` (default) returns keywords where both rank; `false` returns target1's keywords missing for target2.
  - `item_types` (array) — optional; organic/paid/featured_snippet/local_pack.
  - `include_serp_info` (boolean), `include_clickstream_data` (boolean, **doubles cost**) — optional.
  - `limit` (1–1000, default 100), `offset`, `filters` (array), `order_by` (array, default search_volume desc), `tag` — optional.
- **Key response fields:** `target1`, `target2`, `total_count`, `items_count`; `items[].{keyword_data, first_domain_serp_element, second_domain_serp_element}` (each SERP element: type, rank_absolute, domain, title, url, description, etv, backlinks_info, rank_info).
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target1":"ahrefs.com","target2":"semrush.com","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/domain_intersection/live
  ```

### domain_rank_overview

- **REST:** `POST /v3/dataforseo_labs/google/domain_rank_overview/live`
- **MCP tool:** `dataforseo_labs_google_domain_rank_overview`
- **Purpose:** Aggregate organic + paid ranking/traffic metrics for a domain.
- **Key request fields:**
  - `target` (string) — **required**; domain (no `https://`/`www.`).
  - `location_name`/`location_code`, `language_name`/`language_code` — optional.
  - `ignore_synonyms` (boolean) — optional; default `false`.
  - `limit` (default 100, max 1000), `offset`, `tag` — optional.
- **Key response fields:** `items[].metrics.organic` and `.paid`, each with `pos_1`…`pos_91_100`, `etv`, `count`, `estimated_paid_traffic_cost`, `is_new`/`is_up`/`is_down`/`is_lost`.
- **Cost:** Charged per request.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"dataforseo.com","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/domain_rank_overview/live
  ```

### relevant_pages

- **REST:** `POST /v3/dataforseo_labs/google/relevant_pages/live`
- **MCP tool:** `dataforseo_labs_google_relevant_pages`
- **Purpose:** Top-performing pages of a domain by organic/paid metrics.
- **Key request fields:**
  - `target` (string) — **required**; domain (no `https://`/`www.`).
  - `location_name`/`location_code`, `language_name`/`language_code` — optional.
  - `item_types` (array) — optional; default `["organic","paid"]`.
  - `historical_serp_mode` (string) — optional; `live`/`lost`/`all`; default `live`.
  - `ignore_synonyms` (boolean), `include_clickstream_data` (boolean, **doubles cost**) — optional.
  - `filters` (array), `order_by` (array, default `["metrics.organic.count,desc"]`), `limit` (default 100, max 1000), `offset`, `tag` — optional.
- **Key response fields:** `items[].page_address`; `items[].metrics.{organic,paid,featured_snippet,local_pack}` with `pos_1`…`pos_91_100`, `etv`, `count`, `estimated_paid_traffic_cost`, `is_new`/`is_up`/`is_down`/`is_lost`, and (clickstream) `clickstream_etv`, `clickstream_gender_distribution`, `clickstream_age_distribution`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"dataforseo.com","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/relevant_pages/live
  ```

### subdomains

- **REST:** `POST /v3/dataforseo_labs/google/subdomains/live`
- **MCP tool:** `dataforseo_labs_google_subdomains`
- **Purpose:** Subdomains of a target domain with their ranking/traffic metrics.
- **Key request fields:**
  - `target` (string) — **required**; domain (no `https://`/`www.`).
  - `location_name`/`location_code`, `language_name`/`language_code` — optional.
  - `item_types` (array) — optional; default organic & paid.
  - `include_clickstream_data` (boolean) — optional; **doubles cost**.
  - `filters` (array), `order_by` (array, e.g. `["metrics.organic.etv,desc"]`), `limit` (default 100, max 1000), `offset`, `tag` — optional.
- **Key response fields:** `items[].subdomain`; `items[].metrics.organic` and `.paid` (and optional `featured_snippet`/`local_pack`) with `count`, `etv`, `pos_1`…`pos_91_100`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"google.com","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/subdomains/live
  ```

### bulk_traffic_estimation

- **REST:** `POST /v3/dataforseo_labs/google/bulk_traffic_estimation/live`
- **MCP tool:** `dataforseo_labs_bulk_traffic_estimation`
- **Purpose:** Estimated traffic (ETV = CTR × search volume of ranked keywords) for many domains/pages at once.
- **Key request fields:**
  - `targets` (array) — **required**; max **1,000** domains/subdomains/pages (domains without protocol/www; pages as full URLs).
  - `location_name`/`location_code`, `language_name`/`language_code` — optional.
  - `item_types` (array) — optional; `organic`/`paid`/`featured_snippet`/`local_pack`; default `["organic","paid"]`.
  - `ignore_synonyms` (boolean) — optional; default `false`.
  - `tag` (string) — optional.
- **Key response fields:** `items[].target`; `items[].metrics.{organic,paid,featured_snippet,local_pack}` each with `etv` (float) and `count` (integer) (plus position buckets and `estimated_paid_traffic_cost`).
- **Cost:** Charged per request. Max 1,000 targets/request.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"targets":["dataforseo.com","ahrefs.com","semrush.com"],"location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/bulk_traffic_estimation/live
  ```

### keywords_for_site

- **REST:** `POST /v3/dataforseo_labs/google/keywords_for_site/live`
- **MCP tool:** `dataforseo_labs_google_keywords_for_site`
- **Purpose:** Keywords a domain is **relevant to / ranks for** (Labs database). Distinct from the Google Ads `keywords_for_site` (ad-planner suggestions).
- **Key request fields:**
  - `target` (string) — **required**; domain (no `https://`).
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — optional (defaults to most common in location).
  - `include_serp_info` (boolean), `include_subdomains` (boolean, default `true`), `include_clickstream_data` (boolean, **doubles cost**) — optional.
  - `limit` (default 100, max 1000), `offset`, `offset_token` (>10k results), `filters` (array), `order_by` (array, default `["relevance,desc"]`), `tag` — optional.
- **Key response fields:** `total_count`, `offset_token`; `items[].keyword`; `items[].keyword_info.{search_volume, competition, cpc, categories}`; `items[].keyword_properties.keyword_difficulty`; `items[].serp_info.se_results_count` (if requested).
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"dataforseo.com","location_code":2840,"language_code":"en","limit":100}]' https://api.dataforseo.com/v3/dataforseo_labs/google/keywords_for_site/live
  ```

### top_searches

- **REST:** `POST /v3/dataforseo_labs/google/top_searches/live`
- **MCP tool:** `dataforseo_labs_google_top_searches`
- **Purpose:** Browse **all keywords in the database** for a location/language, filtered by volume/CPC/difficulty etc. (no seed keyword).
- **Key request fields:**
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `include_serp_info` (boolean), `include_clickstream_data` (boolean, **doubles cost**), `ignore_synonyms` (boolean) — optional, default `false`.
  - `filters` (array), `order_by` (array), `limit` (default 1000, max 1000), `offset` (≤10000), `offset_token` (>10k), `tag` — optional.
- **Key response fields:** `total_count`, `items_count`, `offset_token`; `items[].{keyword, keyword_info, keyword_properties, search_intent_info}` (plus optional `clickstream_keyword_info`, `serp_info`).
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"location_code":2380,"language_code":"it","filters":[["keyword_info.search_volume",">",10000]],"order_by":["keyword_info.search_volume,desc"],"limit":100}]' https://api.dataforseo.com/v3/dataforseo_labs/google/top_searches/live
  ```

### page_intersection

- **REST:** `POST /v3/dataforseo_labs/google/page_intersection/live`
- **MCP tool:** `dataforseo_labs_google_page_intersection`
- **Purpose:** Keywords for which a set of specific **pages** all rank (or rank while excluded pages don't).
- **Key request fields:**
  - `pages` (object) — **required**; up to 20 page URLs keyed by index, e.g. `{"1":"https://example.com/*"}` (wildcard `*` supported).
  - `exclude_pages` (array) — optional; up to 10 URLs; returns keywords in `pages` but not in `exclude_pages`.
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `item_types` (array, default `["organic","paid"]`), `include_subdomains` (boolean, default `true`), `intersection_mode` (string; `union`/`intersect`), `include_serp_info` (boolean), `include_clickstream_data` (boolean, **doubles cost**), `ignore_synonyms` (boolean) — optional.
  - `filters` (array), `order_by` (array), `limit` (1–1000, default 100), `offset`, `tag` — optional.
- **Key response fields:** `total_count`, `items_count`; `items[].keyword_data.{keyword, keyword_info{search_volume, cpc, competition, competition_level, categories, monthly_searches}}`; `items[].intersection_result` (per-URL SERP data keyed 1–20: `type`, `rank_absolute`, `title`, `url`, `etv`, `estimated_paid_traffic_cost`); `items[].serp_info` (if requested).
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"pages":{"1":"https://ahrefs.com/*","2":"https://semrush.com/*"},"location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/page_intersection/live
  ```

### serp_competitors

- **REST:** `POST /v3/dataforseo_labs/google/serp_competitors/live`
- **MCP tool:** `dataforseo_labs_google_serp_competitors`
- **Purpose:** Domains competing for a **set of keywords**, ranked by visibility across those SERPs.
- **Key request fields:**
  - `keywords` (array) — **required**; up to **200** keywords (lowercased).
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `include_subdomains` (boolean, default `true`), `item_types` (array, default `["organic","paid"]`) — optional.
  - `filters` (array), `order_by` (array, default `["rating,desc"]`), `limit` (default 100, max 1000), `offset`, `tag` — optional.
- **Key response fields:** `total_count`, `items_count`; `items[].{domain, avg_position, median_position, rating (sum of 100−position), etv, keywords_count, visibility, relevant_serp_items, keywords_positions}`.
- **Cost:** Charged per request.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["seo tools","rank tracker"],"location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/serp_competitors/live
  ```

### historical_serps

- **REST:** `POST /v3/dataforseo_labs/google/historical_serps/live` (note: path is `historical_serps`, plural)
- **MCP tool:** `dataforseo_labs_google_historical_serp`
- **Purpose:** Historical Google SERP snapshots for a keyword (rankings/featured elements over time).
- **Key request fields:**
  - `keyword` (string) — **required**; up to 700 chars (use `%25` for `%`, `%2B` for `+`).
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `date_from` (string `yyyy-mm-dd`) — optional; minimum 365 days before now.
  - `date_to` (string `yyyy-mm-dd`) — optional; default today.
  - `tag` (string) — optional.
- **Key response fields:** `keyword`, `location_code`, `language_code`; `items[]` (monthly snapshots) with `datetime` (`yyyy-mm-dd hh-mm-ss +00:00`), `se_results_count`, and nested `items[]` SERP elements: `type` (organic/paid/featured_snippet/...), `rank_group`, `rank_absolute`, `domain`, `url`, `title`, `rank_changes[]` (`previous_rank_absolute`, `is_new`, `is_up`, `is_down`).
- **Cost:** Charged per request. Historical window: 12 months.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"best seo tools","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/historical_serps/live
  ```

### historical_rank_overview

- **REST:** `POST /v3/dataforseo_labs/google/historical_rank_overview/live`
- **MCP tool:** `dataforseo_labs_google_historical_rank_overview`
- **Purpose:** Month-by-month domain ranking/traffic metrics over time.
- **Key request fields:**
  - `target` (string) — **required**; domain (no `https://`/`www.`).
  - `location_name`/`location_code` — **required** (one of the two).
  - `language_name`/`language_code` — **required** (one of the two).
  - `date_from` (string `yyyy-mm-dd`) — optional; minimum `2020-10-01`.
  - `date_to` (string `yyyy-mm-dd`) — optional; default today.
  - `correlate` (boolean) — optional; correlate with previous datasets; default `true`.
  - `ignore_synonyms` (boolean) — optional; default `false`.
  - `include_clickstream_data` (boolean) — optional; **doubles cost**.
  - `tag` (string) — optional.
- **Key response fields:** `items[].{year, month, metrics.organic, metrics.paid}` — each metric with `etv`, `count`, `pos_1`…`pos_91_100`, `estimated_paid_traffic_cost`.
- **Cost:** Charged per request; clickstream doubles it.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":"dataforseo.com","location_code":2840,"language_code":"en","date_from":"2023-01-01"}]' https://api.dataforseo.com/v3/dataforseo_labs/google/historical_rank_overview/live
  ```

### available_filters

- **REST:** `GET /v3/dataforseo_labs/available_filters` (GET, no POST body)
- **MCP tool:** `dataforseo_labs_available_filters`
- **Purpose:** Returns the full list of valid `filters` fields and `order_by` fields for every DataForSEO Labs endpoint — use it to build correct `filters`/`order_by` expressions.
- **Key request fields:** none (simple GET).
- **Key response fields:** a map of endpoint → available filter field names (with types) and available sort fields.
- **Cost:** Free / metadata endpoint.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" https://api.dataforseo.com/v3/dataforseo_labs/available_filters
  ```

> Docs: https://docs.dataforseo.com/v3/dataforseo_labs-google-keyword_overview-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-keyword_ideas-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-keyword_suggestions-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-related_keywords-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-search_intent-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-bulk_keyword_difficulty-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-ranked_keywords-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-competitors_domain-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-domain_intersection-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-google-bulk_traffic_estimation-live/ · https://docs.dataforseo.com/v3/dataforseo_labs-filters/
