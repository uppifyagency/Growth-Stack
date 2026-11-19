# dataforseo

## C-052 DF1. Keyword shortlist (volume, difficulty, intent, CPC, trend)
- ask: "Find 30 keywords for [topic] in Italy with volumes and difficulty."
- inputs: seed keyword(s), market, own domain strength.
- data: Labs (cheapest tier) `SKILL.md`.
- upstream: C1
- downstream: feeds C4, N12, S9.
- depth: full

### steps
1. Expand seeds: `dataforseo_labs_google_keyword_ideas` (`POST /v3/dataforseo_labs/google/keyword_ideas/live`), `..._keyword_suggestions`, `..._related_keywords` (depth 0–4). [references/03-keywords-data-and-labs.md]
2. Enrich: `dataforseo_labs_google_keyword_overview` → `search_volume`, `cpc`, `competition`, `monthly_searches` (free 12-month trend), `keyword_difficulty`, `main_intent`. [references/03-keywords-data-and-labs.md, SKILL.md]
3. Fill gaps: `dataforseo_labs_bulk_keyword_difficulty`, `dataforseo_labs_search_intent` (label + probability). [references/03-keywords-data-and-labs.md]
4. Optional planner data: `kw_data_google_ads_search_volume` (competition_index, bids). [references/03-keywords-data-and-labs.md]
5. Flag patterns: low KD + high CPC = buyers present, cheap to rank; first quarter ≈0 then spike = new keyword. [SKILL.md]
### criteria
- Each row: keyword, volume, KD, intent, CPC, trend direction. [references/03-keywords-data-and-labs.md]
- Source endpoint named per column. [SKILL.md]

## C-053 DF2. SERP snapshot (with AI Overview and People Also Ask)
- ask: "Show me what ranks for [keyword] right now."
- inputs: keyword, market, device.
- data: SERP tier.
- upstream: DF1
- downstream: feeds C4 (intent, outline), N7 (paid ads), S2/S13.
- depth: full

### steps
1. `serp_organic_live_advanced` (`POST /v3/serp/google/organic/live/advanced`) with `depth`, `device`, `load_async_ai_overview`, `people_also_ask_click_depth`. [references/02-serp-and-ai-optimization.md]
2. Read `item_types` and `items` (organic, paid, featured_snippet, people_also_ask, local_pack…) with `rank_group`, `url`, `domain`, `title`. [references/02-serp-and-ai-optimization.md]
3. Optional history: `dataforseo_labs_google_historical_serp` (monthly snapshots, rank changes). [references/03-keywords-data-and-labs.md]
4. Bing/Yahoo variants by path. [references/02-serp-and-ai-optimization.md]
### criteria
- Top-3 result types listed (intent check). [references/02-serp-and-ai-optimization.md]
- PAA questions and AI Overview presence recorded when requested. [references/02-serp-and-ai-optimization.md]
- Cost note: search operators cost ×5; AIO/rectangles add-ons. [references/02-serp-and-ai-optimization.md]

## C-054 DF3. Competitor discovery and keyword gap
- ask: "Who are my organic competitors and what do they rank for that I don't?"
- inputs: own domain, market, optional keyword set.
- data: Labs.
- upstream: none
- downstream: feeds S1 (alternatives/X vs Y targets), C4.
- depth: full

### steps
1. `dataforseo_labs_google_competitors_domain` (intersections, etv per competitor). [references/03-keywords-data-and-labs.md]
2. For a keyword set: `dataforseo_labs_google_serp_competitors` (avg position, visibility). [references/03-keywords-data-and-labs.md]
3. Gap: `dataforseo_labs_google_domain_intersection` (two domains) and `dataforseo_labs_google_ranked_keywords` on the competitor. [references/03-keywords-data-and-labs.md]
4. Page-level: `dataforseo_labs_google_page_intersection`, `dataforseo_labs_google_relevant_pages`. [references/03-keywords-data-and-labs.md]
### criteria
- Each gap keyword has volume, competitor position, own position (or none). [references/03-keywords-data-and-labs.md]

## C-055 DF4. Domain visibility and traffic report
- ask: "Estimate organic traffic for us and 5 competitors, and its trend."
- inputs: domains, market.
- data: Labs.
- upstream: none
- downstream: feeds S10 (competition step), S11.
- depth: full

### steps
1. `dataforseo_labs_bulk_traffic_estimation` (etv, count per domain). [references/03-keywords-data-and-labs.md]
2. `dataforseo_labs_google_domain_rank_overview` (position buckets, is_new/is_lost). [references/03-keywords-data-and-labs.md]
3. `dataforseo_labs_google_historical_rank_overview` (monthly etv). [references/03-keywords-data-and-labs.md]
4. Optional: `..._subdomains`, `..._relevant_pages`. [references/03-keywords-data-and-labs.md]
### criteria
- Traffic labelled as estimated (`etv`). [references/03-keywords-data-and-labs.md]
- Same market codes for all domains. [SKILL.md]

## C-056 DF5. Backlink profile
- ask: "Audit our backlink profile."
- inputs: domain or page.
- data: Backlinks tier (pricier).
- upstream: none
- downstream: feeds C6. Note: DataForSEO `rank` is its own metric; `seo-2026-sota` ch12 says third-party "Domain Authority" is not used by Google.
- depth: full

### steps
1. `backlinks_summary` (`POST /v3/backlinks/summary/live`): rank, backlinks, referring_domains, spam score, attribute/platform breakdowns. [references/04-backlinks-and-domain-analytics.md]
2. `backlinks_referring_domains`, `backlinks_anchors`. [references/04-backlinks-and-domain-analytics.md]
3. Only if needed: `backlinks_backlinks` with `mode: one_per_domain` and filters (e.g. dofollow). [references/04-backlinks-and-domain-analytics.md]
4. Trend: `backlinks_timeseries_summary`, `backlinks_timeseries_new_lost_summary`; spam: `backlinks_bulk_spam_score`. [references/04-backlinks-and-domain-analytics.md]
### criteria
- Summary/bulk used before row-priced list pulls (cost scales with rows). [references/04-backlinks-and-domain-analytics.md]
- Dofollow vs nofollow split reported. [references/04-backlinks-and-domain-analytics.md]

## C-057 DF6. Link-gap prospect list
- ask: "Which sites link to my competitors but not to me?"
- inputs: own domain, 2+ competitor domains.
- data: Backlinks tier.
- upstream: DF5
- downstream: feeds C6, S14 outreach.
- depth: full

### steps
1. `backlinks_domain_intersection` (`intersection_mode` all/partial). [references/04-backlinks-and-domain-analytics.md]
2. Page level: `backlinks_page_intersection`. [references/04-backlinks-and-domain-analytics.md]
3. Find more competitors: `backlinks_competitors` (shared referrers). [references/04-backlinks-and-domain-analytics.md]
### criteria
- Each prospect lists which competitors it links to and its rank. [references/04-backlinks-and-domain-analytics.md]
- Own domain excluded. [references/04-backlinks-and-domain-analytics.md]

## C-058 DF7. On-page and technical audit dataset
- ask: "Crawl my site and give me the technical issues."
- inputs: domain, page budget, need for JS/CWV.
- data: OnPage tier.
- upstream: none
- downstream: feeds S3, S4.
- depth: full

### steps
1. Single URL: `on_page_instant_pages` (`POST /v3/on_page/instant_pages`) → `onpage_score`, `meta`, `page_timing`, 60+ `checks`. [references/05-onpage-and-content-analysis.md]
2. Site: `POST /v3/on_page/task_post` (set `validate_micromarkup`, `store_raw_html`, `enable_content_parsing`, `calculate_keyword_density` at post time) → poll `summary/$id` → `pages`, `duplicate_tags`, `duplicate_content`, `redirect_chains`, `non_indexable`, `microdata`, `links` (REST only). [references/05-onpage-and-content-analysis.md]
3. `on_page_lighthouse` (`/v3/on_page/lighthouse/live/json`, `for_mobile`, categories). [references/05-onpage-and-content-analysis.md]
### criteria
- Needed flags set at `task_post` (downstream endpoints depend on them). [references/05-onpage-and-content-analysis.md]
- `max_crawl_pages` stated (billing is per page crawled). [references/05-onpage-and-content-analysis.md]
- Lighthouse numbers labelled lab data, not CrUX field data. [../seo-2026-sota/chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md]

## C-059 DF8. AI-visibility check
- ask: "Does ChatGPT mention us for [prompt]? Which domains does it cite?"
- inputs: prompt-targets/keywords, brand domain, competitor domains.
- data: AI Optimization tier (most expensive) `SKILL.md`.
- upstream: S1 prompt-targets
- downstream: feeds S12, S7.
- depth: full

### steps
1. Scrape answers: `ai_optimization_chat_gpt_scraper` (`POST /v3/ai_optimization/chat_gpt/llm_scraper/live/advanced`, US/English only) → `markdown`, `sources`, `search_results`. [references/02-serp-and-ai-optimization.md]
2. Query models directly: `ai_optimization_llm_response` (`/v3/ai_optimization/<provider>/llm_responses/live`, providers chat_gpt, claude, gemini, perplexity) → text + citation annotations. [references/02-serp-and-ai-optimization.md]
3. Mentions: `ai_opt_llm_ment_search`, `ai_opt_llm_ment_top_domains`, `ai_opt_llm_ment_top_pages`, `ai_opt_llm_ment_agg_metrics` (platform `chat_gpt` or `google`). [references/02-serp-and-ai-optimization.md]
4. Brand vs competitors: `ai_opt_llm_ment_cross_agg_metrics` with aggregation keys. [references/02-serp-and-ai-optimization.md]
5. Demand: `ai_optimization_keyword_data_search_volume` (`ai_search_volume`, 12-month). [references/02-serp-and-ai-optimization.md]
### criteria
- Each prompt row records: mentioned yes/no, position/context, cited sources. [references/02-serp-and-ai-optimization.md]
- Platform and provider named per row. [references/02-serp-and-ai-optimization.md]
- Scraper results flagged as US/English. [references/02-serp-and-ai-optimization.md]

## C-060 DF9. Demand and seasonality report
- ask: "Is interest in [topic] growing, and when does it peak?"
- inputs: keywords, market.
- data: Keywords Data + Labs.
- upstream: none
- downstream: feeds C1 (market growing), S11 (Trends context), S10 (seasonality).
- depth: full

### steps
1. `dataforseo_labs_google_keyword_overview.monthly_searches` and `dataforseo_labs_google_historical_keyword_data`. [references/03-keywords-data-and-labs.md]
2. `kw_data_google_trends_explore` (`/v3/keywords_data/google_trends/explore/live`). [references/03-keywords-data-and-labs.md]
3. `kw_data_dfs_trends_explore`, `kw_data_dfs_trends_subregion_interests`, `kw_data_dfs_trends_demography`. [references/03-keywords-data-and-labs.md]
### criteria
- Trend values labelled relative (0–100) vs absolute volume. [references/03-keywords-data-and-labs.md]

## C-061 DF10. Brand citation and sentiment report
- ask: "Where is our brand mentioned online and how positively?"
- inputs: brand keyword.
- data: Content Analysis.
- upstream: none
- downstream: feeds C6 (unlinked mentions), S14.
- depth: full

### steps
1. `content_analysis_summary` → total, top_domains, connotation types, sentiment. [references/05-onpage-and-content-analysis.md]
2. `content_analysis_search` for individual citations; `content_analysis_phrase_trends` over time. [references/05-onpage-and-content-analysis.md]
3. Optional REST: `sentiment_analysis`; social share counts via `business_data/social_media/{pinterest,reddit}/live`. [references/05-onpage-and-content-analysis.md, references/06-merchant-app-business.md]
### criteria
- Positive/negative/neutral counts reported with threshold used. [references/05-onpage-and-content-analysis.md]

## C-062 DF11. YouTube SERP and video research
- ask: "What videos rank for [query] on YouTube?"
- inputs: query, market.
- data: SERP tier.
- upstream: none
- downstream: feeds S8.
- depth: full

### steps
1. `serp_youtube_organic_live_advanced`. [references/02-serp-and-ai-optimization.md]
2. `serp_youtube_video_info_live_advanced`, `..._video_subtitles_...`, `..._video_comments_...`. [references/02-serp-and-ai-optimization.md]
### criteria
- Duration and title recorded for each top video. [references/02-serp-and-ai-optimization.md]

## C-063 DF12. Review and reputation dataset
- ask: "Pull our and competitors' reviews (Google, Trustpilot, apps)."
- inputs: business names/domains/place ids/app ids.
- data: Business/App/Merchant tiers (per-result pricing).
- upstream: none
- downstream: feeds S7 (G2/Capterra/Trustpilot targets 20–30 reviews, 4.3+), L3 (prospect vocabulary).
- depth: partial

### steps
1. Google Business: `business_data/google/my_business_info/live`, `google/reviews/task_post`. [references/06-merchant-app-business.md]
2. Trustpilot: `trustpilot/search`, `trustpilot/reviews`; Tripadvisor search/reviews. [references/06-merchant-app-business.md]
3. Apps: `app_data/{google,apple}/app_reviews`; Amazon: `merchant/amazon/reviews` (flagged temporarily unavailable in R6). [references/06-merchant-app-business.md]
### criteria
- Rating and review count per profile. [references/06-merchant-app-business.md]

## C-064 DF13. Marketplace demand snapshot (Amazon / Google Shopping)
- ask: "How much is [product type] selling on Amazon?"
- inputs: keyword, locale (`it_IT`, `en_US`).
- data: Merchant tier (REST only).
- upstream: none
- downstream: feeds N5 (field set benchmarking), C10.
- depth: full

### steps
1. `POST /v3/merchant/amazon/products/live/advanced` → `bought_past_month`, prices, ASINs. [references/06-merchant-app-business.md, references/00-full-endpoint-catalog.md]
2. `merchant/amazon/asin`, `sellers`; Google Shopping `merchant/google/products/task_post`. [references/06-merchant-app-business.md]
### criteria
- Full locale used for marketplace endpoints. [SKILL.md]

## C-065 DF14. Local business list / market sizing
- ask: "List all [category] businesses in [city]."
- inputs: category, geo.
- data: Business Data (REST only).
- upstream: none
- downstream: prospect lists for N2.
- depth: full

### steps
1. `POST /v3/business_data/business_listings/search/live`; `categories_aggregation` for counts. [references/06-merchant-app-business.md]
### criteria
- filters and geo stated. [references/06-merchant-app-business.md]

## C-066 DF15. Paid-search keyword economics
- ask: "What would Google Ads cost for these keywords?"
- inputs: keywords, market.
- data: Keywords Data.
- upstream: none
- downstream: feeds N7.
- depth: full

### steps
1. `kw_data_google_ads_search_volume` → cpc, `low/high_top_of_page_bid`. [references/03-keywords-data-and-labs.md]
2. `POST /v3/keywords_data/google/ad_traffic_by_keywords/live` → impressions, clicks, cost estimates (REST). [references/03-keywords-data-and-labs.md]
3. Paid items in DF2 for competitor ad copy. [references/02-serp-and-ai-optimization.md]
### criteria
- Bid, forecast and estimated-traffic fields are reported as forecasts at a given bid, not as measured traffic. [references/03-keywords-data-and-labs.md]

## C-067 DF16. Tech stack and WHOIS lookup
- ask: "What CMS/tools does competitor X use?"
- inputs:
- data:
- upstream: none
- downstream: context for S3 (rendering stack), S1.
- depth: full

### steps
1. `domain_analytics_technologies_domain_technologies`, `domain_analytics_whois_overview`. [references/04-backlinks-and-domain-analytics.md]
### criteria
- domain without scheme/www. [references/04-backlinks-and-domain-analytics.md]
