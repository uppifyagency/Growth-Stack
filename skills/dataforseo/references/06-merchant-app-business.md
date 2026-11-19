# DataForSEO — Merchant API, App Data API & Business Data API

> Verbatim-grade reference distilled from docs.dataforseo.com (fetched June 2026). Read [01-mcp-and-conventions.md](01-mcp-and-conventions.md) first. **These are "sales-tier" datasets** — priced per call/per result, generally pricier than SERP, and **none are exposed through the MCP server** — reach them via curl/REST. Many are task-based (`task_post` → `task_get`).

# Merchant API

> Ecommerce product, price, and seller data from **Amazon** and **Google Shopping**. Amazon endpoints support **Live (`/live/advanced`)** mode (instant, no task polling) as well as task-based; Google Shopping endpoints are **task-based only**.
>
> **Location codes:** US `2840`, IT `2380`, UK `2826`, DE `2276`, FR `2250`. **Amazon requires a full locale for language** (e.g. `en_US`, `it_IT`) — not the short `en`/`it`. Google Shopping accepts the short language code (`en`).

### Amazon Products
- **REST:** `POST /v3/merchant/amazon/products/live/advanced` (Live; also task-based via `/task_post` + `/task_get/advanced/$id`).
- **MCP tool:** REST/curl only.
- **Purpose:** Returns the Amazon search-results listing (SERP) for a keyword — organic + sponsored products, including ASINs, prices, ratings, and the sales-velocity proxy `bought_past_month`.
- **Key request fields:**
  - `keyword` (string) — search query, up to 700 chars. **Required.**
  - `location_code` (integer) — e.g. `2380` (Italy). **Required** (or `location_name`/`location_coordinate`).
  - `language_code` (string) — full locale, e.g. `it_IT`. **Required** (or `language_name`).
  - `se_domain` (string) — override marketplace, e.g. `amazon.it` (auto-selected from location if omitted).
  - `depth` (integer) — results to return; default 100, max 700.
  - `max_crawl_pages` (integer) — pages to crawl, max 7.
  - `department` (string) — Amazon department filter.
  - `search_param` (string) — extra URL params (price/sort).
  - `price_min` / `price_max` (integer) — price filters.
  - `sort_by` (string) — `relevance`, `price_low_to_high`, `price_high_to_low`, etc.
  - `tag` (string) — user identifier, max 255 chars.
- **Key response fields:** `result[].items[]` with `type` (`amazon_serp`/`amazon_paid`), `rank_group`, `rank_absolute`, `title`, `url`, `image_url`, `data_asin` (the ASIN), `price_from` (float), `price_to` (float), `currency`, **`bought_past_month` (integer — units bought in the last month; strongest sales-velocity proxy in the dataset)**, `is_amazon_choice` (bool), `is_best_seller` (bool), nested `rating` object `{value (float), votes_count (integer), rating_max (integer), rating_type ("Max5"|"Percents"|"CustomMax")}`, and `delivery_info`/`delivery_price`. Top-level result also has `se_results_count`, `items_count`, `check_url`, `datetime`.
- **Cost:** Per task; one charge per SERP of up to 100 results, additional charge per extra 100 of `depth`. Sales-tier pricing.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"tergicristalli auto","location_code":2380,"language_code":"it_IT","depth":100}]' \
  https://api.dataforseo.com/v3/merchant/amazon/products/live/advanced
```

### Amazon ASIN
- **REST:** `POST /v3/merchant/amazon/asin/live/advanced` (Live; also task-based).
- **MCP tool:** REST/curl only.
- **Purpose:** Detailed product page data for a single ASIN — full title, price range, rating, variations/modifications, and product detail items.
- **Key request fields:**
  - `asin` (string) — Amazon Standard Identification Number. **Required.**
  - `location_code` (integer) — **Required** (or `location_name`/`location_coordinate`).
  - `language_code` (string) — full locale e.g. `it_IT`. **Required** (or `language_name`).
  - `se_domain` (string) — marketplace override.
  - `tag` (string) — max 255 chars.
- **Key response fields:** `result[].asin`, `result[].product_asins[]` (ASINs of all product modifications/variants), `result[].price_from`, `result[].price_to`, `result[].rating` (object), `result[].items[]` (product information blocks — description, specs, etc.).
- **Cost:** Per task (per ASIN). Sales-tier pricing.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"asin":"B085RFFC9Q","location_code":2380,"language_code":"it_IT"}]' \
  https://api.dataforseo.com/v3/merchant/amazon/asin/live/advanced
```

### Amazon Sellers
- **REST:** `POST /v3/merchant/amazon/sellers/live/advanced` (Live; also task-based).
- **MCP tool:** REST/curl only.
- **Purpose:** Returns the list of sellers (buying options) offering a given ASIN, with each seller's price, rating, and delivery terms.
- **Key request fields:**
  - `asin` (string) — e.g. `B085RFFC9Q`. **Required.**
  - `location_code` (integer) — **Required** (or `location_name`/`location_coordinate`).
  - `language_code` (string) — full locale e.g. `en_US`. **Required** (or `language_name`).
  - `se_domain` (string) — marketplace override.
  - `tag` (string) — max 255 chars.
- **Key response fields:** `result[].items[]` each with `seller_name`, `price` object (current/regular price, currency, discount), `rating` object (Max5 scale, votes), `delivery_info` object.
- **Cost:** Per task. Sales-tier pricing.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"asin":"B085RFFC9Q","location_code":2840,"language_code":"en_US"}]' \
  https://api.dataforseo.com/v3/merchant/amazon/sellers/live/advanced
```

### Amazon Reviews
- **REST:** `POST /v3/merchant/amazon/reviews/task_post` then `GET /v3/merchant/amazon/reviews/task_get/advanced/$id` (task-based only — **no Live mode**). NOTE: at time of research this endpoint is flagged "temporarily unavailable" in the docs; verify availability before relying on it.
- **MCP tool:** REST/curl only.
- **Purpose:** Product reviews for an ASIN — review text, rating, reviewer profile, publication date, verified-purchase flag, helpful votes, media.
- **Key request fields (task_post):** `asin` (string) **Required**; `location_code` (integer); `language_code` (string, e.g. `en_US`); `depth` (integer — number of reviews); `priority` (integer, 1 normal / 2 high); `postback_url`/`pingback_url`.
- **Key response fields (task_get items):** `review_text`, `title`, `rating` (Max5, value 1–5), `user_profile` (name, avatar, review count, location), `publication_date` (UTC), `verified` (bool, Verified Purchase), `helpful_votes` (integer), `images`/`videos`.
- **Cost:** Charged per **10 reviews** returned (e.g. `depth: 11` is billed as 20 reviews). Plus high-priority surcharge.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"asin":"B085RFFC9Q","language_code":"en_US","location_code":2840,"depth":20}]' \
  https://api.dataforseo.com/v3/merchant/amazon/reviews/task_post
```

> Note on "products-ASIN-by-keyword": there is **no** distinct endpoint by that name. To get the ASINs ranking for a keyword, use **Amazon Products** (above) — each `items[].data_asin` is the ASIN. The reverse (keywords-for-an-ASIN) lives in the separate *DataForSEO Labs Amazon API* (e.g. `dataforseo_labs/amazon/ranked_keywords/live`), outside this tier.

### Google Shopping Products
- **REST:** `POST /v3/merchant/google/products/task_post` then `GET /v3/merchant/google/products/task_get/advanced/$id` (task-based only). Status code `20100` = task created.
- **MCP tool:** REST/curl only.
- **Purpose:** Products found on Google Shopping for a query — title, price, seller, rating, reviews, related domain, rank.
- **Key request fields:** `keyword` (string, up to 700 chars) **Required**; `location_code` (integer) **Required** (or `location_name`); `language_code` (string, short code e.g. `en`) **Required** (or `language_name`); `price_min`/`price_max` (integer); `sort_by` (`review_score`/`price_low_to_high`/`price_high_to_low`); `depth` (integer, default 40, max 120); `se_domain`; `priority` (1/2); `tag`; `postback_url`/`pingback_url`.
- **Key response fields (task_get items):** product `title`, `price`, `seller`, `rating`, reviews count, `domain`, product rank.
- **Cost:** Per SERP of up to 40 results; additional charge for `depth` > 40; high-priority surcharge.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"wiper blades","location_code":2840,"language_code":"en","depth":40}]' \
  https://api.dataforseo.com/v3/merchant/google/products/task_post
```

### Google Shopping Sellers / Product Info
- **Sellers — REST:** `POST /v3/merchant/google/sellers/task_post` → `task_get/advanced/$id`. Lists sellers/offers for a Google Shopping product. Key fields: `product_id` (string) **Required** (or `data_docid`/`gid`); `location_code` **Required** (or name/coordinate); `language_code` **Required** (or name); `depth` (default 10, max 200); `get_shops_on_google` (boolean — include "Buy on Google" sellers; **doubles cost**); `priority` (1/2); `tag`. Returns seller name/domain, price, shipment details, special offers, seller ratings.
- **Product Info — REST:** `POST /v3/merchant/google/product_info/task_post` → `task_get/advanced/$id`. Full product detail page (specifications inside `product_info` — **there is no separate `product_spec` endpoint**). Key fields: `product_id` **Required** (or `data_docid`/`gid`); `location_code`/`language_code` **Required**; `priority` (1/2); `tag`. Returns specifications, `title`, pricing, seller info, ratings, description, images.
- **MCP tool:** REST/curl only.
- **Cost:** Per task; high-priority surcharge; `get_shops_on_google` doubles the sellers cost.
- **Example (sellers):**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"product_id":"1234567890","location_code":2840,"language_code":"en"}]' \
  https://api.dataforseo.com/v3/merchant/google/sellers/task_post
```

> Docs: https://docs.dataforseo.com/v3/merchant-api-overview/ · https://docs.dataforseo.com/v3/merchant/amazon/products/live/advanced/ · https://docs.dataforseo.com/v3/merchant/amazon/asin/live/advanced/ · https://docs.dataforseo.com/v3/merchant/amazon/sellers/live/advanced/ · https://docs.dataforseo.com/v3/merchant-google-products-task_post/ · https://docs.dataforseo.com/v3/merchant-google-sellers-task_post/ · https://docs.dataforseo.com/v3/merchant-google-product_info-task_post/

# App Data API

> App-store data from **Google Play** and **Apple App Store**: keyword search rankings, app detail pages, review streams, and (US-only) bulk listing search. Most endpoints are **task-based** (`task_post` + `task_get/advanced/$id`); the `app_listings/search` endpoint is **Live**. **MCP: REST/curl only.**
>
> **Identifiers:** Google Play `app_id` is the alphanumeric package name (e.g. `com.whatsapp`); Apple `app_id` is the numeric id from the store URL (e.g. `835599320`). Apple and Google paths are symmetric — replace `/google/` with `/apple/`.

### Google Play / Apple — App Searches
- **REST:** `POST /v3/app_data/google/app_searches/task_post` → `task_get/advanced/$id` (Apple: `/v3/app_data/apple/app_searches/task_post`).
- **MCP tool:** REST/curl only.
- **Purpose:** Apps ranking on the store for a keyword (ASO/keyword research) — title, app id, developer, rating, price, rank.
- **Key request fields:** `keyword` (string, up to 700 chars) **Required**; `location_code` (integer) **Required** (or `location_name`); `language_code` (string, e.g. `en`); `depth` (integer, 1–200, default 30); `priority` (1/2); `tag`; `postback_url`/`pingback_url`, `postback_data` (`advanced`/`html`, required if `postback_url` set).
- **Key response fields (task_get items):** app `title`, app id, developer name, `rating`, `price`, rank position.
- **Cost:** Charged per **30 results**; `depth` > 30 incurs additional charges; high-priority surcharge.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"meditation","location_code":2840,"language_code":"en","depth":30}]' \
  https://api.dataforseo.com/v3/app_data/google/app_searches/task_post
```

### Google Play / Apple — App Info
- **REST:** `POST /v3/app_data/google/app_info/task_post` → `task_get/advanced/$id` (Apple: `/v3/app_data/apple/app_info/task_post`).
- **MCP tool:** REST/curl only.
- **Purpose:** Detail page for a single app — title, developer, rating, downloads/installs, price, description, screenshots, version.
- **Key request fields:** `app_id` (string — package name for Google, numeric id for Apple) **Required**; `location_code` (integer) **Required** (or `location_name`); `language_code` (string) **Required** (or `language_name`); `priority` (1/2); `tag`; `postback_url`/`pingback_url`, `postback_data`.
- **Key response fields (task_get):** app `title`, `developer`, `rating`, downloads/installs, `price`, `description`, screenshots/images, version.
- **Cost:** Per task; high-priority surcharge.
- **Example (Apple, numeric `app_id`):**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"app_id":"835599320","location_code":2840,"language_code":"en"}]' \
  https://api.dataforseo.com/v3/app_data/apple/app_info/task_post
```

### Google Play / Apple — App Reviews
- **REST:** `POST /v3/app_data/google/app_reviews/task_post` → `task_get/advanced/$id` (Apple: `/v3/app_data/apple/app_reviews/task_post`).
- **MCP tool:** REST/curl only.
- **Purpose:** User reviews for an app — review text, rating, reviewer profile, date.
- **Key request fields:** `app_id` (string) **Required**; `location_code` (integer) **Required**; `language_code` (string) **Required**; `depth` (integer, default 150, max 100000); `sort_by` (`most_relevant` default / `newest`); `rating` (integer 1–5 filter); `priority` (1/2); `tag`.
- **Key response fields (task_get items):** review text, rating, user profile, date.
- **Cost:** Charged per **150 reviews**; larger depths billed in multiples of 150; high-priority surcharge.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"app_id":"com.whatsapp","location_code":2840,"language_code":"en","depth":150,"sort_by":"newest"}]' \
  https://api.dataforseo.com/v3/app_data/google/app_reviews/task_post
```

### Google Play / Apple — App Listings (Search)
- **REST:** `POST /v3/app_data/google/app_listings/search/live` (**Live**, not task-based; Apple: `/v3/app_data/apple/app_listings/search/live`).
- **MCP tool:** REST/curl only.
- **Purpose:** Query DataForSEO's pre-collected app database by title/description/category with filters and sorting — bulk app discovery. **Data currently available only for the United States (location 2840).**
- **Key request fields:** `title` (string, ≤200 chars); `description` (string, ≤200 chars); `categories` (array, up to 10); `filters` (array, up to 8 rules); `order_by` (array); `limit` (integer, default 100, max 1000); `offset` (integer; use `offset_token` for >10,000 results); `tag`. (No keyword/location/language fields — US-only database query.)
- **Key response fields (items):** `app_id`, `title`, `url`, `icon`, `rating` (`value`/`type`/`votes_count`/`rating_max`), `reviews_count`, `price` (`current`/`currency`/`is_free`), `installs_count`, `main_category`, `developer`/`developer_id`/`developer_url`/`developer_website`, `version`, `released_date`, `last_update_date`, `update_notes`, `images`, `similar_apps`, `more_apps_by_developer`.
- **Cost:** Charged per request. Sales-tier pricing.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"categories":["GAME_PUZZLE"],"limit":100,"order_by":["installs_count,desc"]}]' \
  https://api.dataforseo.com/v3/app_data/google/app_listings/search/live
```

> Docs: https://docs.dataforseo.com/v3/app_data-overview/ · https://docs.dataforseo.com/v3/app_data-google-app_searches-task_post/ · https://docs.dataforseo.com/v3/app_data-google-app_info-task_post/ · https://docs.dataforseo.com/v3/app_data-google-app_reviews-task_post/ · https://docs.dataforseo.com/v3/app_data-google-app_listings-search-live/ · https://docs.dataforseo.com/v3/app_data-apple-app_info-task_post/

# Business Data API

> Business-entity, reputation, and local-listing data: **Google** (My Business / GBP, Hotels, reviews, Q&A), **Business Listings** (DataForSEO's own places database), **Social Media** (Pinterest only), **Trustpilot**, and **Tripadvisor**. Mode varies per endpoint. **MCP: REST/curl only.**

### Google — My Business Info
- **REST:** `POST /v3/business_data/google/my_business_info/live` (**Live**; also task-based).
- **MCP tool:** REST/curl only.
- **Purpose:** Google Business Profile (formerly GMB) data for a single business — contact info, hours, rating, category, attributes, identifiers.
- **Key request fields:** `keyword` (string — business name; supports `cid:`/`place_id:` prefixes; up to 700 chars) **Required**; `location_code` (integer) **Required** (or `location_name`/`location_coordinate`); `language_code` (string, e.g. `en`) **Required** (or `language_name`); `priority` (1/2); `tag`.
- **Key response fields:** `title`, `address`/`address_info`, `phone`, `url`, `domain`, identifiers `cid`/`place_id`/`feature_id`, `rating.value`, `rating.votes_count`, `rating_distribution` (1–5 breakdown), `category`/`category_ids`, `work_time.work_hours.timetable`, `attributes`, `main_image`/`logo`, `is_claimed`, `people_also_search`, `services`.
- **Cost:** Per task. Sales-tier pricing.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"The Last Bookstore","location_code":2840,"language_code":"en"}]' \
  https://api.dataforseo.com/v3/business_data/google/my_business_info/live
```

### Google — Reviews
- **REST:** `POST /v3/business_data/google/reviews/task_post` → `task_get/$id` (task-based only).
- **MCP tool:** REST/curl only.
- **Purpose:** Reviews for a Google business entity — text, rating, reviewer, date.
- **Key request fields:** `keyword` (string — business name) **Required** (or `cid` or `place_id`); `cid`/`place_id` (string, direct identifiers); `location_code` (integer) **Required** (or `location_name`/`location_coordinate`); `language_code` (string) **Required**; `depth` (integer, default 10, max 4490); `sort_by` (`newest`/`highest_rating`/`lowest_rating`/`relevant`); `priority` (1/2); `tag`.
- **Key response fields (task_get items):** review text, rating, reviewer profile, date.
- **Cost:** Charged per **10 reviews** (`depth: 11` billed as 20); high-priority surcharge.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"keyword":"The Last Bookstore","location_code":2840,"language_code":"en","depth":20,"sort_by":"newest"}]' \
  https://api.dataforseo.com/v3/business_data/google/reviews/task_post
```

### Google — My Business Updates / Questions & Answers / Hotels
- **My Business Updates — REST:** `POST /v3/business_data/google/my_business_updates/task_post` → `task_get/$id` (task-based only). Posts/updates (offers, news, events). Key: `keyword` (with `cid:`/`place_id:` prefixes) **Required**, `location_code`/`language_code` **Required**, `depth` (multiples of 10, max 4490). Returns `text`, `datetime`, `images`, `links`.
- **Questions and Answers — REST:** `POST /v3/business_data/google/questions_and_answers/task_post` → `task_get/$id` (task-based; **Live** also supported). The Q&A section of a GBP. Key: `keyword` **Required**, `location_code`/`language_code` **Required**, `depth` (default 20, max 700). Returns questions + up to 5 answers each.
- **Hotel Searches — REST:** `POST /v3/business_data/google/hotel_searches/task_post` → `task_get/$id` (task-based; **Live** also available). Google Hotels results for a location + stay dates. Key: `keyword` (optional), `location_code`/`language_code` **Required**, `check_in`/`check_out` (`yyyy-mm-dd`). Billed per 18 organic results.
- **Hotel Info — REST:** `POST /v3/business_data/google/hotel_info/task_post` → `task_get/advanced/$id` (task-based; **Live/advanced** also available). Detailed listing for one hotel (price options, amenities, rating).
- **MCP tool:** REST/curl only. **Cost:** per task; high-priority surcharge.

### Business Listings — Search
- **REST:** `POST /v3/business_data/business_listings/search/live` (**Live**).
- **MCP tool:** REST/curl only.
- **Purpose:** Query DataForSEO's own database of Google Maps/places listings by category, name, description, and geo-radius, with filters and sorting — bulk local-business discovery without per-query SERP fetches.
- **Key request fields:** `categories` (array, up to 10); `description` (string, ≤200); `title` (string, ≤200); `is_claimed` (boolean — verified-on-Maps filter); `location_coordinate` (string — `lat,lng,radius`, radius in km 1–100000); `filters` (array, up to 8; operators `>`,`<`,`=`,`<>`,`in`,`like`,`regex`, …); `order_by` (array, up to 3 rules); `limit` (integer, default 100, max 1000); `offset` (integer; `offset_token` for >10,000 results).
- **Key response fields (items):** `title`, `address`/`address_info`, `rating` (value/votes/type), `category`/`category_ids`, `phone`, `url`/`domain`, identifiers `cid`/`feature_id`/`place_id`, `work_time`, `is_claimed`.
- **Cost:** Charged per request. Sales-tier pricing.
- **Example (car repair shops near Reggio Emilia, 50km radius):**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"categories":["car_repair"],"location_coordinate":"44.6989,10.6297,50","limit":100,"order_by":["rating.value,desc"]}]' \
  https://api.dataforseo.com/v3/business_data/business_listings/search/live
```

### Business Listings — Categories Aggregation / Available Filters
- **Categories Aggregation — REST:** `POST /v3/business_data/business_listings/categories_aggregation/live` (**Live**). Aggregated stats over the listings database — counts by category, country, attribute, review topic (market sizing). Key: same query fields as `search` plus `initial_dataset_filters` (≤8 pre-aggregation filters), `internal_list_limit` (default 10). Returns `total_count`, `top_categories`, `top_countries`, `websites_count`, `top_attributes`, `top_place_topics`.
- **Available Filters — REST:** `GET /v3/business_data/business_listings/available_filters` (**free**). Lists filterable fields for both `search` and `categories_aggregation`, e.g. `address_info.city`, `address_info.region`, `address_info.country_code`, `cid`, `place_id`, `phone`, `domain`, `rating.value`, `rating.votes_count`, `rating_distribution.1`–`.5`, `work_time.work_hours.current_status`, `last_updated_time`, `total_photos`.
- **MCP tool:** REST/curl only.

### Social Media — Pinterest & Reddit
- **REST:** `POST /v3/business_data/social_media/pinterest/live` and `POST /v3/business_data/social_media/reddit/live` (both **Live**).
- **MCP tool:** REST/curl only.
- **Purpose:** Social syndication counts — how many times each given page URL has been saved/shared on the platform (Pinterest pins; Reddit shares).
- **Key request fields:** `targets` (array, up to 10 absolute page URLs) **Required** (charged per URL); `tag` (string ≤255).
- **Key response fields (per target):** `page_url`, a per-platform count (`pins_count` for Pinterest; `reddit_shares` for Reddit), `type`.
- **Cost:** Charged per URL in `targets`. Sales-tier pricing.
- **Example:**
```bash
curl -s --user "$DATAFORSEO_USERNAME:$DATAFORSEO_PASSWORD" -H "Content-Type: application/json" \
  -X POST -d '[{"targets":["https://example.com/page"]}]' \
  https://api.dataforseo.com/v3/business_data/social_media/pinterest/live
```
> The Social Media API currently exposes **Pinterest and Reddit only** (per the OpenAPI spec, June 2026). There is **no Facebook** endpoint — do not call `social_media/facebook/...`.

### Trustpilot & Tripadvisor (reputation)
- **Trustpilot Search — REST:** `POST /v3/business_data/trustpilot/search/task_post` → `task_get/$id` (task-based). Find Trustpilot profiles by category/company name. Key: `keyword` **Required**, `depth` (default 10, max 140). Returns `domain`, `rating`, `reviews_count`. Billed per 10 results.
- **Trustpilot Reviews — REST:** `POST /v3/business_data/trustpilot/reviews/task_post` → `task_get/$id` (task-based). Key: `domain` (Trustpilot domain) **Required**, `depth` (default 20, max 200), `sort_by` (`relevance`/`recency`). Billed per 20 reviews.
- **Tripadvisor Search — REST:** `POST /v3/business_data/tripadvisor/search/task_post` → `task_get/$id` (task-based). Find hotels/restaurants/attractions. Key: `keyword` **Required**, `location_code` **Required**, `depth` (default 30, max 210, multiples of 30). Billed per 30 results.
- **Tripadvisor Reviews — REST:** `POST /v3/business_data/tripadvisor/reviews/task_post` → `task_get/$id` (task-based). Key: `url_path` **Required** (or `keyword`), `location_code` (conditional), `language_code` (optional, extra charge), `depth` (default 10, max 4490), `sort_by` (`most_recent`/`detailed_reviews`). Billed per 10 reviews.
- **MCP tool:** REST/curl only. **Cost:** per-result increments as noted; high-priority surcharge.

> Docs: https://docs.dataforseo.com/v3/business_data-overview/ · https://docs.dataforseo.com/v3/business_data-google-my_business_info-live/ · https://docs.dataforseo.com/v3/business_data-google-reviews-task_post/ · https://docs.dataforseo.com/v3/business_data-google-questions_and_answers-task_post/ · https://docs.dataforseo.com/v3/business_data-google-hotel_searches-task_post/ · https://docs.dataforseo.com/v3/business_data-business_listings-search-live/ · https://docs.dataforseo.com/v3/business_data-business_listings-categories_aggregation-live/ · https://docs.dataforseo.com/v3/business_data-social_media-pinterest-live/ · https://docs.dataforseo.com/v3/business_data-trustpilot-search-task_post/ · https://docs.dataforseo.com/v3/business_data-tripadvisor-search-task_post/
