# DataForSEO — SERP API & AI Optimization API

> Verbatim-grade reference distilled from docs.dataforseo.com (fetched June 2026). Read [01-mcp-and-conventions.md](01-mcp-and-conventions.md) first for auth, the request envelope, and `/live` vs task-based semantics.

# SERP API

The SERP API returns search-engine results pages parsed into structured items. Base URL `https://api.dataforseo.com`, HTTP Basic auth. Google/Bing/Yahoo Organic support both `/live` (regular | advanced | html) and task-based (`/task_post` + `/tasks_ready` + `/task_get`) modes; `/live/advanced` returns full parsed data immediately at higher cost. YouTube endpoints below are documented in `/live/advanced` mode (task-based variants also exist). Common `location_code`: US 2840, IT 2380, UK 2826, DE 2276, FR 2250. `language_code`: "en", "it".

### Google Organic — Live Advanced

- **REST:** `POST /v3/serp/google/organic/live/advanced` — Live mode. Also available: `/v3/serp/google/organic/live/{regular|html}`, and task-based `/v3/serp/google/organic/task_post` + `/task_get/{advanced|regular|html}`.
- **MCP tool:** `serp_organic_live_advanced`
- **Purpose:** Real-time, fully parsed Google organic SERP for a keyword/location/language.
- **Key request fields:**
  - `keyword` (string) — search query, max 700 chars. **Required.**
  - `location_code` (integer) — location identifier. **Required** unless `location_name` or `location_coordinate` is set.
  - `language_code` (string) — language code (e.g. "en", "it").
  - `depth` (integer) — number of results (default 10, max 200).
  - `device` (string) — `desktop` or `mobile`.
  - `os` (string) — operating system (windows/macos for desktop; android/ios for mobile).
  - `target` (string) — domain/URL filter with wildcard support.
  - `load_async_ai_overview` (boolean) — fetch async AI Overview items (+$0.002/task).
  - `calculate_rectangles` (boolean) — pixel positions (+$0.002/task).
  - `people_also_ask_click_depth` (integer) — expand PAA (+$0.00015 per click).
  - `tag` (string) — user-defined task id, max 255 chars.
- **Key response fields:**
  - `keyword` — decoded query; `check_url` — direct SERP URL; `datetime` — UTC timestamp.
  - `se_results_count` — total results in SERP; `items_count` — returned count.
  - `spell` — search-engine autocorrection object.
  - `item_types` — array of SERP element types present.
  - `items` — array of parsed elements: `organic`, `paid`, `featured_snippet`, `answer_box`, `people_also_ask`, `local_pack`, `carousel`, and 20+ other types (each with `rank_group`, `rank_absolute`, `title`, `url`, `domain`, `description`).
- **Cost:** Charged per request; extra charges when depth > 10 returns more results; keywords using search operators (`site:`, `filetype:`, etc.) cost ×5; `load_async_ai_overview`/`calculate_rectangles` +$0.002 each; `people_also_ask_click_depth` +$0.00015/click.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"buy running shoes","location_code":2840,"language_code":"en","depth":20}]' https://api.dataforseo.com/v3/serp/google/organic/live/advanced
  ```

### Bing Organic — Live Advanced

- **REST:** `POST /v3/serp/bing/organic/live/advanced` — Live mode (top 100 results). Task-based `/v3/serp/bing/organic/task_post` + `/task_get/advanced` also available.
- **MCP tool:** (covered by generic SERP organic; use the Bing path directly)
- **Purpose:** Real-time parsed Bing organic SERP.
- **Key request fields:**
  - `keyword` (string) — query, max 700 chars; encode special chars (`%`, `+`). **Required.**
  - `location_code` (integer) — **Required** unless `location_name`/`location_coordinate` set.
  - `language_code` (string) — **Required** unless `language_name` set.
  - `depth` (integer) — results count (default 10, max 200).
  - `device` (string) — `desktop` | `mobile`.
  - `os` (string) — operating system.
  - `calculate_rectangles` (boolean) — +$0.002/request.
  - `target` (string) — domain/URL filter, wildcards supported.
- **Key response fields:** `keyword`, `check_url`, `datetime`, `se_results_count`, `items_count`, `items` (objects: `organic`, `paid`, `answer_box`, `featured_snippet`, `local_pack`, `hotels_pack`, `images`, `shopping`, `jobs`, `carousel`, `events`, `related_searches`).
- **Cost:** Charged per request; cost scales with `depth`; `calculate_rectangles` +$0.002.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"crm software","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/serp/bing/organic/live/advanced
  ```

### Yahoo Organic — Live Advanced

- **REST:** `POST /v3/serp/yahoo/organic/live/advanced` — Live mode. Task-based `task_post`/`task_get` also available.
- **MCP tool:** (use the Yahoo path directly)
- **Purpose:** Real-time parsed Yahoo organic SERP.
- **Key request fields:**
  - `keyword` (string) — query, max 700 chars. **Required.**
  - `location_name` | `location_code` | `location_coordinate` (string/integer/string) — one **Required** (`location_coordinate` = "latitude,longitude,radius").
  - `language_name` | `language_code` — one **Required.**
  - `device` (string) — `desktop` | `mobile` (default desktop).
  - `os` (string) — OS (windows/macos or android/ios).
  - `se_domain` (string) — custom search-engine domain.
  - `depth` (integer) — results (default 6, max 200).
  - `max_crawl_pages` (integer) — pages to crawl (default 1, max 100).
  - `target` (string) — target domain/subdomain/page filter.
  - `search_param` (string) — extra query params.
  - `stop_crawl_on_match` (array) — target objects that halt crawling.
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `keyword`, `check_url`, `datetime`, `se_results_count`, `items_count`, `items` (organic, paid, images, video, shopping, featured_snippet, top_stories, related_searches).
- **Cost:** Charged per request; see pricing page.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"best laptops 2026","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/serp/yahoo/organic/live/advanced
  ```

### YouTube Organic — Live Advanced

- **REST:** `POST /v3/serp/youtube/organic/live/advanced` — Live mode. Task-based `/v3/serp/youtube/organic/task_post` + `/task_get/advanced` also available.
- **MCP tool:** `serp_youtube_organic_live_advanced`
- **Purpose:** Real-time parsed YouTube search results (videos, channels, playlists) for a keyword.
- **Key request fields:**
  - `keyword` (string) — query, max 700 chars. **Required.**
  - `location_code` | `location_name` — one **Required.**
  - `language_code` | `language_name` — one **Required.**
  - `device` (string) — `desktop` | `mobile` (default desktop).
  - `os` (string) — windows/macos (desktop) or android/ios (mobile).
  - `block_depth` (integer) — number of result blocks (default 20, max 200).
  - `search_param` (string) — additional search query parameters.
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `keyword`, `se_domain`, `location_code`, `language_code`, `check_url`, `datetime`, `item_types` (`youtube_video`, `youtube_channel`, `youtube_playlist`, `youtube_video_paid`), `items` (video/channel/playlist objects with titles, URLs, IDs, thumbnails, view counts, publication dates).
- **Cost:** Charged per request; `block_depth` > 20 may incur additional charges.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"claude code tutorial","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/serp/youtube/organic/live/advanced
  ```

### YouTube Video Info — Live Advanced

- **REST:** `POST /v3/serp/youtube/video_info/live/advanced` — Live mode (task-based variant also available).
- **MCP tool:** `serp_youtube_video_info_live_advanced`
- **Purpose:** Full metadata for a single YouTube video by its `video_id`.
- **Key request fields:**
  - `video_id` (string) — video ID from the URL or a `youtube_video` item. **Required.**
  - `location_code` | `location_name` — one **Required.**
  - `language_code` | `language_name` — one **Required.**
  - `device` (string) — only value `desktop`.
  - `os` (string) — windows | macos (default windows).
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `video_id`, `title`, `views_count`, `likes_count`, `comments_count`, `channel_name`, `channel_subscribers_count`, `duration_time_seconds`, `streaming_quality` (array of available qualities), `keywords` (video tags).
- **Cost:** Charged per request (example shows $0.006 USD/request).
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"video_id":"dQw4w9WgXcQ","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/serp/youtube/video_info/live/advanced
  ```

### YouTube Video Comments — Live Advanced

- **REST:** `POST /v3/serp/youtube/video_comments/live/advanced` — Live mode (task-based variant also available).
- **MCP tool:** `serp_youtube_video_comments_live_advanced`
- **Purpose:** Parsed comments for a YouTube video.
- **Key request fields:**
  - `video_id` (string) — video ID from URL or search results. **Required.**
  - `location_code` | `location_name` — one **Required.**
  - `language_code` | `language_name` — one **Required.**
  - `device` (string) — only value `desktop`.
  - `os` (string) — windows | macos (default windows).
  - `depth` (integer) — results to retrieve (default 20, max 200).
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `video_id`, `title`, `comments_count` (total on video), `items_count`, `items` (per comment: `author_name`, `author_url`, `author_thumbnail`, `text`, `publication_date`, `timestamp`, `likes_count`, `reply_count`, `rank_group`, `rank_absolute`).
- **Cost:** $0.002 USD per request; `depth` > 20 may incur additional charges.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"video_id":"dQw4w9WgXcQ","location_code":2840,"language_code":"en","depth":40}]' https://api.dataforseo.com/v3/serp/youtube/video_comments/live/advanced
  ```

### YouTube Video Subtitles — Live Advanced

- **REST:** `POST /v3/serp/youtube/video_subtitles/live/advanced` — Live mode (task-based variant also available).
- **MCP tool:** `serp_youtube_video_subtitles_live_advanced`
- **Purpose:** Subtitle/caption segments for a YouTube video, with optional translation.
- **Key request fields:**
  - `video_id` (string) — video ID from URL or YouTube Organic results. **Required.**
  - `location_code` | `location_name` — one **Required.**
  - `language_code` | `language_name` — one **Required.**
  - `device` (string) — desktop only.
  - `os` (string) — windows | macos (default windows).
  - `subtitles_language` (string) — original text language code.
  - `subtitles_translate_language` (string) — target translation language code.
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `status_code` (20000 = success), `cost`, `subtitles_count` (total segments), `unsupported_language` (boolean), `items` (subtitle entries with text, timing, duration).
- **Cost:** Charged per request; see pricing page.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"video_id":"dQw4w9WgXcQ","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/serp/youtube/video_subtitles/live/advanced
  ```

### SERP Locations (Google / YouTube)

- **REST:** `GET /v3/serp/google/locations` and `GET /v3/serp/youtube/locations` — also `/v3/serp/{se}/locations/{country}` to filter by ISO country code. (General pattern: `GET /v3/serp/{se}/locations`.)
- **MCP tool:** `serp_locations` (Google), `serp_youtube_locations` (YouTube)
- **Purpose:** Retrieve supported `location_code` values for the given search engine.
- **Key request fields:** `country` (string, optional) — ISO country code path segment to filter (e.g. "us").
- **Key response fields:** per result: `location_code` (integer), `location_name` (string), `location_code_parent` (integer), `country_iso_code` (string), `location_type` (string).
- **Cost:** No charge.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" https://api.dataforseo.com/v3/serp/google/locations
  ```

> Docs: https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/ · https://docs.dataforseo.com/v3/serp/bing/organic/live/advanced/ · https://docs.dataforseo.com/v3/serp/yahoo/organic/live/advanced/ · https://docs.dataforseo.com/v3/serp-youtube-organic-live-advanced/ · https://docs.dataforseo.com/v3/serp/youtube/video_info/live/advanced/ · https://docs.dataforseo.com/v3/serp/youtube/video_comments/live/advanced/ · https://docs.dataforseo.com/v3/serp/youtube/video_subtitles/live/advanced/ · https://docs.dataforseo.com/v3/serp/google/locations/

# AI Optimization API

The AI Optimization API covers LLM response scraping, AI-specific keyword volume, raw LLM prompting, and LLM Mentions analytics. Base URL `https://api.dataforseo.com`, HTTP Basic auth. JSON POST bodies are UTF-8 arrays; one task per Live call. Live LLM calls: up to 2000 API calls/min, max 30 concurrent live tasks per account per platform, up to 120s execution time. ChatGPT Scraper data is available for United States / English only. Default location_code 2840 (US), default language_code "en", default platform "google" across LLM Mentions endpoints.

**Multiple LLM providers (per the OpenAPI spec, June 2026).** The endpoints documented below use ChatGPT, but the same shapes exist for other providers — swap the provider path segment:
- **LLM Responses** (`/v3/ai_optimization/<provider>/llm_responses/live` + `/models`): `chat_gpt`, `claude`, `gemini`, `perplexity`.
- **LLM Scraper** (`/v3/ai_optimization/<provider>/llm_scraper/live/{advanced,html}` + `/locations` + `/languages`): `chat_gpt`, `gemini`.
- **LLM Mentions** and **AI Keyword Data** are provider-agnostic (the `platform` field selects the engine).

### ChatGPT LLM Scraper — Live Advanced

- **REST:** `POST /v3/ai_optimization/chat_gpt/llm_scraper/live/advanced` — Live mode. Also: `/v3/ai_optimization/chat_gpt/llm_scraper/live/html`; task-based `/task_post` + `/tasks_ready` + `/task_get/{advanced|html}`.
- **MCP tool:** `ai_optimization_chat_gpt_scraper`
- **Purpose:** Scrape ChatGPT search-mode results (with sources and web results) for a keyword.
- **Key request fields:**
  - `keyword` (string) — query, up to 2000 chars, URL-encode special chars. **Required.**
  - `location_name` | `location_code` — one **Required** (e.g. 2840).
  - `language_name` | `language_code` — one **Required** (e.g. "en").
  - `force_web_search` (boolean) — force the model to access current web info (default false).
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `keyword` (decoded), `model` (e.g. "gpt-4o"), `markdown` (response in markdown), `search_results` (web results retrieved), `sources` (sources cited in the answer), `items` (result elements: text, tables, images, products, local businesses), `check_url`.
- **Cost:** Varies by location/language; see pricing page. Execution up to 120s.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keyword":"best project management tools","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/live/advanced
  ```

### ChatGPT LLM Scraper — Locations

- **REST:** `GET /v3/ai_optimization/chat_gpt/llm_scraper/locations`
- **MCP tool:** `ai_optimization_chat_gpt_scraper_locations`
- **Purpose:** List supported locations for the ChatGPT scraper (currently US / English).
- **Key request fields:** none.
- **Key response fields:** per result `location_code`, `location_name`, `country_iso_code`, `location_type`.
- **Cost:** No charge.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/locations
  ```

### AI Keyword Data — Search Volume (Live)

- **REST:** `POST /v3/ai_optimization/ai_keyword_data/keywords_search_volume/live` — Live mode.
- **MCP tool:** `ai_optimization_keyword_data_search_volume`
- **Purpose:** AI search volume (and 12-month trend) for keywords as queried inside LLMs.
- **Key request fields:**
  - `keywords` (array) — up to 1000 keywords, max 250 chars each, lowercased. **Required.**
  - `location_name` | `location_code` — one **Required** (e.g. 2840).
  - `language_name` | `language_code` — one **Required** (e.g. "en").
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** per keyword: `keyword`, `ai_search_volume` (current AI search volume rate), `ai_monthly_searches` (array of previous 12 months: year, month, volume), `location_code`, `language_code`.
- **Cost:** Charged per request; see pricing page.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"keywords":["ai seo","generative engine optimization"],"location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/keywords_search_volume/live
  ```

### AI Keyword Data — Locations and Languages

- **REST:** `GET /v3/ai_optimization/ai_keyword_data/locations_and_languages`
- **MCP tool:** `ai_opt_kw_data_loc_and_lang`
- **Purpose:** Supported locations/languages for AI Keyword Data.
- **Key request fields:** none.
- **Key response fields:** per result `location_code`, `location_name`, `available_languages` (array of `language_name`, `language_code` ISO 639-1).
- **Cost:** No charge.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
  ```

### ChatGPT LLM Responses (Live)

- **REST:** `POST /v3/ai_optimization/chat_gpt/llm_responses/live` — Live mode. Task-based `/task_post` + `/tasks_ready` + `/task_get` also available.
- **MCP tool:** `ai_optimization_llm_response`
- **Purpose:** Send a prompt to a specific ChatGPT model and get the structured response (optionally with web search).
- **Key request fields:**
  - `user_prompt` (string) — prompt to the model, max 500 chars. **Required.**
  - `model_name` (string) — model identifier (latest version auto-selected from a basic name). **Required.**
  - `max_output_tokens` (integer) — response length (16–4096; min 1024 for reasoning models).
  - `temperature` (float) — randomness (0–2, default 0.94; unsupported on reasoning models).
  - `top_p` (float) — diversity (0–1, default 0.92; cannot combine with `temperature`).
  - `web_search` (boolean) — enable web access (model dependent).
  - `force_web_search` (boolean) — mandate web search (requires `web_search`).
  - `web_search_country_iso_code` (string) — geo for web search (unsupported on o3-mini, o1-pro, o1).
  - `web_search_city` (string) — city-level web-search location.
  - `system_message` (string) — behavioral instructions, max 500 chars.
  - `message_chain` (array) — conversation history, max 10 role/message objects.
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `status_code` (20000 = success), `cost`, `result[].model_name` (actual version used), `result[].input_tokens`, `result[].output_tokens`, `result[].reasoning_tokens`, `result[].web_search` (whether used), `result[].items[].message.sections[].text` (response content), `result[].items[].message.sections[].annotations` (web citations: title, url).
- **Cost:** Varies by model and token usage; see pricing page. Limits: 2000 calls/min, 30 concurrent live tasks/platform, ≤120s/task, one task per call.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"user_prompt":"What is generative engine optimization?","model_name":"gpt-4o","web_search":true}]' https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/live
  ```

### LLM Responses — Models

- **REST:** `GET /v3/ai_optimization/chat_gpt/llm_responses/models`
- **MCP tool:** `ai_optimization_llm_models`
- **Purpose:** List available ChatGPT models and their capabilities (~33 models incl. o4-mini, o3-mini, o1, gpt-5 variants, gpt-4o variants, gpt-3.5-turbo-1106).
- **Key request fields:** none.
- **Key response fields:** per model `model_name`, `reasoning` (bool), `web_search_supported` (bool), `task_post_supported` (bool — standard POST/GET retrieval support).
- **Cost:** Free (0 USD).
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/models
  ```

### LLM Mentions — Search (Live)

- **REST:** `POST /v3/ai_optimization/llm_mentions/search/live` — Live mode.
- **MCP tool:** `ai_opt_llm_ment_search`
- **Purpose:** Detailed, structured mentions data for target keywords/domains, with mention counts and quoted links from AI responses.
- **Key request fields:**
  - `target` (array of objects) — target entities, up to 10, each a `domain` or `keyword`. **Required.**
  - `location_name` | `location_code` (string/integer) — default 2840 (US).
  - `language_name` | `language_code` (string) — default "en".
  - `platform` (string) — `chat_gpt` | `google` (default `google`).
  - `filters` (array) — filter expressions; operators `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match`; max 8 filters (e.g. `["ai_search_volume",">","1000"]`).
  - `order_by` (array) — sorting rules (asc/desc), max 3.
  - `limit` (integer) — max objects, default 100, max 1000.
  - `offset` (integer) — default 0, max 9000.
  - `search_after_token` (string) — pagination token beyond 20,000 results.
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `status_code`, `status_message`, `result[0].items` (mentions: `question`, `answer`, `sources`, `ai_search_volume`, `monthly_searches`), `search_after_token`.
- **Cost:** See pricing page (LLM Mentions). Limits: up to 2000 calls/min, 30 concurrent.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":[{"domain":"dataforseo.com"}],"platform":"chat_gpt","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/ai_optimization/llm_mentions/search/live
  ```

### LLM Mentions — Top Domains (Live)

- **REST:** `POST /v3/ai_optimization/llm_mentions/top_domains/live` — Live mode.
- **MCP tool:** `ai_opt_llm_ment_top_domains`
- **Purpose:** Aggregated mention metrics grouped by the most frequently mentioned domains.
- **Key request fields:**
  - `target` (array of objects) — up to 10 domain/keyword entities. **Required.**
  - `location_name` | `location_code` — default 2840.
  - `language_name` | `language_code` — default "en".
  - `platform` (string) — `chat_gpt` | `google` (default `google`).
  - `links_scope` (string) — `sources` | `search_results` (default `sources`).
  - `initial_dataset_filters` (array) — pre-aggregation filters, max 8.
  - `items_list_limit` (integer) — results in items array, 1–10 (default 5).
  - `internal_list_limit` (integer) — internal array elements, 1–10 (default 5).
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `total` (aggregated metrics across all domains), `items` (per-domain results), `mentions`, `ai_search_volume`, `sources_domain`, `search_results_domain`, `brand_entities_title`, `brand_entities_category`.
- **Cost:** See pricing page (LLM Mentions).
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":[{"keyword":"ai seo tools"}],"platform":"chat_gpt","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/ai_optimization/llm_mentions/top_domains/live
  ```

### LLM Mentions — Top Pages (Live)

- **REST:** `POST /v3/ai_optimization/llm_mentions/top_pages/live` — Live mode.
- **MCP tool:** `ai_opt_llm_ment_top_pages`
- **Purpose:** Aggregated mention metrics grouped by the top mentioned pages for a keyword or domain.
- **Key request fields:**
  - `target` (array of objects) — up to 10 domain/keyword entities. **Required.**
  - `location_code` | `location_name` — default 2840.
  - `language_code` | `language_name` — default "en".
  - `platform` (string) — `chat_gpt` | `google` (default `google`).
  - `links_scope` (string) — `sources` | `search_results` (default `sources`).
  - `initial_dataset_filters` (array) — pre-aggregation filters, max 8.
  - `items_list_limit` (integer) — 1–10 (default 5).
  - `internal_list_limit` (integer) — 1–10 (default 5).
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `total` (aggregated by location/language/platform), `items` (per-page results), `mentions`, `ai_search_volume`, `sources_domain`, `search_results_domain`.
- **Cost:** Per-task (example shows $0.101 USD).
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":[{"domain":"dataforseo.com"}],"platform":"chat_gpt","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/ai_optimization/llm_mentions/top_pages/live
  ```

### LLM Mentions — Aggregated Metrics (Live)

- **REST:** `POST /v3/ai_optimization/llm_mentions/aggregated_metrics/live` — Live mode.
- **MCP tool:** `ai_opt_llm_ment_agg_metrics`
- **Purpose:** Consolidated overview of key mention metrics across dimensions (location, language, AI platform, source domains).
- **Key request fields:**
  - `target` (array of objects) — up to 10 domain/keyword entities. **Required.**
  - `domain` (string) — target domain (no https://, no www.), max 63 chars. **Conditional** (if no keyword).
  - `keyword` (string) — target keyword, max 250 chars. **Conditional** (if no domain).
  - `search_filter` (string) — `include` | `exclude` (default `include`).
  - `search_scope` (array) — `any`, `sources`, `search_results`, `question`, `answer`, `brand_entities`, `fan_out_queries`.
  - `match_type` (string) — `word_match` | `partial_match` (default `word_match`).
  - `location_code` (integer) — default 2840.
  - `language_code` (string) — default "en".
  - `platform` (string) — `chat_gpt` | `google` (default `google`).
  - `initial_dataset_filters` (array) — pre-aggregation filters, max 8.
  - `internal_list_limit` (integer) — 1–20 (default 10).
  - `tag` (string) — task id, max 255 chars.
- **Key response fields:** `mentions` (total mentions count), `ai_search_volume`, `sources_domain` (top cited source domains), `search_results_domain`, `brand_entities_title`, `brand_entities_category`.
- **Cost:** Per-task (example shows $0.101 USD).
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"target":[{"keyword":"generative engine optimization"}],"platform":"chat_gpt","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/ai_optimization/llm_mentions/aggregated_metrics/live
  ```

### LLM Mentions — Cross Aggregated Metrics (Live)

- **REST:** `POST /v3/ai_optimization/llm_mentions/cross_aggregated_metrics/live` — Live mode.
- **MCP tool:** `ai_opt_llm_ment_cross_agg_metrics`
- **Purpose:** Consolidated mention metrics for multiple target domains/keywords simultaneously, grouped by an aggregation key.
- **Key request fields:**
  - `targets` (array) — target sets with aggregation keys; specify 2–10 sets. **Required.**
  - `aggregation_key` (string) — grouping key, max 250 chars. **Required.**
  - `target` (array) — up to 10 domain/keyword entities. **Required.**
  - `keyword` (string) — target keyword, max 250 chars. **Conditional** (if no domain).
  - `domain` (string) — target domain, max 63 chars. **Conditional** (if no keyword).
  - `location_code` (integer) — default 2840.
  - `language_code` (string) — default "en".
  - `platform` (string) — `chat_gpt` | `google` (default `google`).
  - `initial_dataset_filters` (array) — pre-aggregation filters, max 8.
  - `internal_list_limit` (integer) — 1–10 (default 5).
- **Key response fields:** `status_code`, `result` (aggregated metrics), `total` (summary object), `items` (results grouped by aggregation key), `mentions`, `ai_search_volume`, `sources_domain`.
- **Cost:** Per-task (example shows $0.101 USD).
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" -X POST -d '[{"targets":[{"aggregation_key":"brandA","target":[{"domain":"branda.com"}]},{"aggregation_key":"brandB","target":[{"domain":"brandb.com"}]}],"platform":"chat_gpt","location_code":2840,"language_code":"en"}]' https://api.dataforseo.com/v3/ai_optimization/llm_mentions/cross_aggregated_metrics/live
  ```

### LLM Mentions — Locations and Languages

- **REST:** `GET /v3/ai_optimization/llm_mentions/locations_and_languages`
- **MCP tool:** `ai_opt_llm_ment_loc_and_lang`
- **Purpose:** Supported locations/languages (and platforms) for LLM Mentions.
- **Key request fields:** none.
- **Key response fields:** per result `location_code`, `location_name`, `available_languages` (array of `language_name`, `language_code`, `available_platforms`, `responses_count`).
- **Cost:** No charge.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
  ```

### LLM Mentions — Available Filters

- **REST:** `GET /v3/ai_optimization/llm_mentions/available_filters`
- **MCP tool:** `ai_optimization_llm_mentions_filters`
- **Purpose:** List the filterable fields usable in the `filters`/`initial_dataset_filters` parameters of the LLM Mentions endpoints.
- **Key request fields:** none.
- **Key response fields (filterable fields):** `platform` (str), `location_code` (num), `language_code` (str), `ai_search_volume` (num), `first_response_at` (time), `last_response_at` (time), `model_name` (str).
- **Cost:** No charge.
- **Example:**
  ```bash
  curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" https://api.dataforseo.com/v3/ai_optimization/llm_mentions/available_filters
  ```

> Docs: https://docs.dataforseo.com/v3/ai_optimization-chat_gpt-llm_scraper-live-advanced/ · https://docs.dataforseo.com/v3/ai_optimization/ai_keyword_data/keywords_search_volume/live/ · https://docs.dataforseo.com/v3/ai_optimization-chat_gpt-llm_responses-live/ · https://docs.dataforseo.com/v3/ai_optimization-llm_mentions-overview/ · https://docs.dataforseo.com/v3/ai_optimization-llm_mentions-search-live/ · https://docs.dataforseo.com/v3/ai_optimization-llm_mentions-top_domains-live/ · https://docs.dataforseo.com/v3/ai_optimization-llm_mentions-top_pages-live/ · https://docs.dataforseo.com/v3/ai_optimization-llm_mentions-aggregated_metrics-live/ · https://docs.dataforseo.com/v3/ai_optimization-llm_mentions-cross_aggregated_metrics-live/
