# DataForSEO — Full Endpoint Catalog (every `/v3` path)

> Generated verbatim from the official OpenAPI 3.0 spec `dataforseo/OpenApiDocumentation/openapi_specification.yaml` (fetched June 2026). This is the **authoritative complete enumeration** — every endpoint DataForSEO exposes, parsed programmatically from the spec, not hand-listed.

**Total: 437 endpoints** across 12 tiers. Each line is `METHOD /v3/path — operationId`. For full request parameters, response fields, costs and curl examples on the most-used endpoints, open the linked reference file. Endpoints here without a dedicated write-up follow the same conventions (see [01-mcp-and-conventions.md](01-mcp-and-conventions.md)): JSON-array body, HTTP Basic auth, `/live` vs `task_post`→`tasks_ready`→`task_get` flow, `/advanced` vs `/regular` vs `/html` variants.

> **Spec vs. reality (read this).** The OpenAPI spec is the authoritative *floor*, not always 100% of every live variant. Known nuances confirmed against production / docs: (1) `merchant/amazon/products|asin|sellers` appear here as task-based (`task_post`/`tasks_ready`), but a **`live/advanced`** variant is confirmed working in production (returns `bought_past_month`); treat live variants as available even when only the task form is listed. (2) `business_data/social_media` exposes **Pinterest and Reddit** (`reddit/live`) — there is no Facebook endpoint. (3) AI Optimization LLM Responses exist for **ChatGPT, Claude, Gemini, Perplexity**, and LLM Scraper for **ChatGPT and Gemini** — swap the provider path segment. When in doubt, the live truth is `GET /v3/serp/endpoints` and `GET /v3/keywords_data/endpoints` (per-tier endpoint listings the API itself returns).

## Endpoints per tier

| Tier | Endpoints | Detailed reference |
|---|---:|---|
| SERP API | 128 | 02-serp-and-ai-optimization.md |
| AI Optimization API | 36 | 02-serp-and-ai-optimization.md |
| Keywords Data API | 56 | 03-keywords-data-and-labs.md |
| DataForSEO Labs API | 47 | 03-keywords-data-and-labs.md |
| Backlinks API | 24 | 04-backlinks-and-domain-analytics.md |
| Domain Analytics API | 14 | 04-backlinks-and-domain-analytics.md |
| OnPage API | 28 | 05-onpage-and-content-analysis.md |
| Content Analysis API | 11 | 05-onpage-and-content-analysis.md |
| Merchant API | 19 | 06-merchant-app-business.md |
| App Data API | 29 | 06-merchant-app-business.md |
| Business Data API | 41 | 06-merchant-app-business.md |
| Appendix | 4 | 01-mcp-and-conventions.md |
| **TOTAL** | **437** | |


## SERP API — 128 endpoints

Google + Bing + YouTube + Yahoo + Baidu + Seznam + Naver. Google alone spans organic, AI Mode, Maps, Local Finder, News, Events, Images, Search-by-image, Jobs, Autocomplete, Dataset Search/Info, Ads (advertisers/search), and Finance.  
Detailed params: [02-*.md](.) — see the reference file for this tier.

```
POST  /v3/serp/id_list — IdList
POST  /v3/serp/errors — Errors
POST  /v3/serp/screenshot — Screenshot
POST  /v3/serp/ai_summary — AiSummary
GET   /v3/serp/google/locations — GoogleLocationsCountry
GET   /v3/serp/google/languages — GoogleLanguages
POST  /v3/serp/google/organic/task_post — GoogleOrganicTaskPost
GET   /v3/serp/google/organic/tasks_ready — GoogleOrganicTasksReady
GET   /v3/serp/tasks_ready — TasksReady
GET   /v3/serp/google/organic/tasks_fixed — GoogleOrganicTaskGetHtml
POST  /v3/serp/google/organic/live/regular — GoogleOrganicLiveRegular
POST  /v3/serp/google/organic/live/advanced — GoogleOrganicLiveAdvanced
POST  /v3/serp/google/organic/live/html — GoogleOrganicLiveHtml
GET   /v3/serp/google/ai_mode/languages — GoogleAiModeLanguages
POST  /v3/serp/google/ai_mode/task_post — GoogleAiModeTaskPost
GET   /v3/serp/google/ai_mode/tasks_ready — GoogleAiModeTasksReady
GET   /v3/serp/google/ai_mode/tasks_fixed — GoogleAiModeTaskGetHtml
POST  /v3/serp/google/ai_mode/live/advanced — GoogleAiModeLiveAdvanced
POST  /v3/serp/google/ai_mode/live/html — GoogleAiModeLiveHtml
POST  /v3/serp/google/maps/task_post — GoogleMapsTaskPost
GET   /v3/serp/google/maps/tasks_ready — GoogleMapsTasksReady
GET   /v3/serp/google/maps/tasks_fixed — GoogleMapsTaskGetAdvanced
POST  /v3/serp/google/maps/live/advanced — GoogleMapsLiveAdvanced
POST  /v3/serp/google/local_finder/task_post — GoogleLocalFinderTaskPost
GET   /v3/serp/google/local_finder/tasks_ready — GoogleLocalFinderTasksReady
GET   /v3/serp/google/local_finder/tasks_fixed — GoogleLocalFinderTaskGetHtml
POST  /v3/serp/google/local_finder/live/advanced — GoogleLocalFinderLiveAdvanced
POST  /v3/serp/google/local_finder/live/html — GoogleLocalFinderLiveHtml
POST  /v3/serp/google/news/task_post — GoogleNewsTaskPost
GET   /v3/serp/google/news/tasks_ready — GoogleNewsTasksReady
GET   /v3/serp/google/news/tasks_fixed — GoogleNewsTaskGetHtml
POST  /v3/serp/google/news/live/advanced — GoogleNewsLiveAdvanced
POST  /v3/serp/google/news/live/html — GoogleNewsLiveHtml
POST  /v3/serp/google/events/task_post — GoogleEventsTaskPost
GET   /v3/serp/google/events/tasks_ready — GoogleEventsTasksReady
GET   /v3/serp/google/events/tasks_fixed — GoogleEventsTaskGetAdvanced
POST  /v3/serp/google/events/live/advanced — GoogleEventsLiveAdvanced
POST  /v3/serp/google/images/task_post — GoogleImagesTaskPost
GET   /v3/serp/google/images/tasks_ready — GoogleImagesTasksReady
GET   /v3/serp/google/images/tasks_fixed — GoogleImagesTaskGetHtml
POST  /v3/serp/google/images/live/advanced — GoogleImagesLiveAdvanced
POST  /v3/serp/google/images/live/html — GoogleImagesLiveHtml
POST  /v3/serp/google/search_by_image/task_post — GoogleSearchByImageTaskPost
GET   /v3/serp/google/search_by_image/tasks_ready — GoogleSearchByImageTasksReady
GET   /v3/serp/google/search_by_image/tasks_fixed — GoogleSearchByImageTaskGetAdvanced
POST  /v3/serp/google/jobs/task_post — GoogleJobsTaskPost
GET   /v3/serp/google/jobs/tasks_ready — GoogleJobsTasksReady
GET   /v3/serp/google/jobs/tasks_fixed — GoogleJobsTaskGetHtml
POST  /v3/serp/google/autocomplete/task_post — GoogleAutocompleteTaskPost
GET   /v3/serp/google/autocomplete/tasks_ready — GoogleAutocompleteTasksReady
GET   /v3/serp/google/autocomplete/tasks_fixed — GoogleAutocompleteTaskGetAdvanced
POST  /v3/serp/google/autocomplete/live/advanced — GoogleAutocompleteLiveAdvanced
POST  /v3/serp/google/dataset_search/task_post — GoogleDatasetSearchTaskPost
GET   /v3/serp/google/dataset_search/tasks_ready — GoogleDatasetSearchTasksReady
GET   /v3/serp/google/dataset_search/tasks_fixed — GoogleDatasetSearchTaskGetAdvanced
POST  /v3/serp/google/dataset_search/live/advanced — GoogleDatasetSearchLiveAdvanced
POST  /v3/serp/google/dataset_info/task_post — GoogleDatasetInfoTaskPost
GET   /v3/serp/google/dataset_info/tasks_ready — GoogleDatasetInfoTasksReady
GET   /v3/serp/google/dataset_info/tasks_fixed — GoogleDatasetInfoTaskGetAdvanced
POST  /v3/serp/google/dataset_info/live/advanced — GoogleDatasetInfoLiveAdvanced
GET   /v3/serp/google/ads_advertisers/locations — GoogleAdsAdvertisersLocations
POST  /v3/serp/google/ads_advertisers/task_post — GoogleAdsAdvertisersTaskPost
GET   /v3/serp/google/ads_advertisers/tasks_ready — GoogleAdsAdvertisersTaskGetAdvanced
GET   /v3/serp/google/ads_search/locations — GoogleAdsSearchLocations
POST  /v3/serp/google/ads_search/task_post — GoogleAdsSearchTaskPost
GET   /v3/serp/google/ads_search/tasks_ready — GoogleAdsSearchTaskGetAdvanced
GET   /v3/serp/bing/locations — BingLocationsCountry
GET   /v3/serp/bing/languages — BingLanguages
POST  /v3/serp/bing/organic/task_post — BingOrganicTaskPost
GET   /v3/serp/bing/organic/tasks_ready — BingOrganicTasksReady
GET   /v3/serp/bing/organic/tasks_fixed — BingOrganicTaskGetHtml
POST  /v3/serp/bing/organic/live/regular — BingOrganicLiveRegular
POST  /v3/serp/bing/organic/live/advanced — BingOrganicLiveAdvanced
POST  /v3/serp/bing/organic/live/html — BingOrganicLiveHtml
GET   /v3/serp/youtube/locations — YoutubeLocationsCountry
GET   /v3/serp/youtube/languages — YoutubeLanguages
POST  /v3/serp/youtube/video_info/task_post — YoutubeVideoInfoTaskPost
GET   /v3/serp/youtube/video_info/tasks_ready — YoutubeVideoInfoTasksReady
GET   /v3/serp/youtube/video_info/tasks_fixed — YoutubeVideoInfoTaskGetAdvanced
POST  /v3/serp/youtube/video_info/live/advanced — YoutubeVideoInfoLiveAdvanced
POST  /v3/serp/youtube/organic/task_post — YoutubeOrganicTaskPost
GET   /v3/serp/youtube/organic/tasks_ready — YoutubeOrganicTasksReady
GET   /v3/serp/youtube/organic/tasks_fixed — YoutubeOrganicTaskGetAdvanced
POST  /v3/serp/youtube/organic/live/advanced — YoutubeOrganicLiveAdvanced
POST  /v3/serp/youtube/video_subtitles/task_post — YoutubeVideoSubtitlesTaskPost
GET   /v3/serp/youtube/video_subtitles/tasks_ready — YoutubeVideoSubtitlesTasksReady
GET   /v3/serp/youtube/video_subtitles/tasks_fixed — YoutubeVideoSubtitlesTaskGetAdvanced
POST  /v3/serp/youtube/video_subtitles/live/advanced — YoutubeVideoSubtitlesLiveAdvanced
POST  /v3/serp/youtube/video_comments/task_post — YoutubeVideoCommentsTaskPost
GET   /v3/serp/youtube/video_comments/tasks_ready — YoutubeVideoCommentsTasksReady
GET   /v3/serp/youtube/video_comments/tasks_fixed — YoutubeVideoCommentsTaskGetAdvanced
POST  /v3/serp/youtube/video_comments/live/advanced — YoutubeVideoCommentsLiveAdvanced
GET   /v3/serp/yahoo/locations — YahooLocationsCountry
GET   /v3/serp/yahoo/languages — YahooLanguages
POST  /v3/serp/yahoo/organic/task_post — YahooOrganicTaskPost
GET   /v3/serp/yahoo/organic/tasks_ready — YahooOrganicTasksReady
GET   /v3/serp/yahoo/organic/tasks_fixed — YahooOrganicTaskGetHtml
POST  /v3/serp/yahoo/organic/live/regular — YahooOrganicLiveRegular
POST  /v3/serp/yahoo/organic/live/advanced — YahooOrganicLiveAdvanced
POST  /v3/serp/yahoo/organic/live/html — YahooOrganicLiveHtml
GET   /v3/serp/baidu/locations — BaiduLocationsCountry
GET   /v3/serp/baidu/languages — BaiduLanguages
POST  /v3/serp/baidu/organic/task_post — BaiduOrganicTaskPost
GET   /v3/serp/baidu/organic/tasks_ready — BaiduOrganicTasksReady
GET   /v3/serp/baidu/organic/tasks_fixed — BaiduOrganicTaskGetHtml
POST  /v3/serp/naver/organic/task_post — NaverOrganicTaskPost
GET   /v3/serp/naver/organic/tasks_ready — NaverOrganicTasksReady
GET   /v3/serp/naver/organic/tasks_fixed — NaverOrganicTaskGetHtml
GET   /v3/serp/seznam/locations — SeznamLocationsCountry
GET   /v3/serp/seznam/languages — SeznamLanguages
POST  /v3/serp/seznam/organic/task_post — SeznamOrganicTaskPost
GET   /v3/serp/seznam/organic/tasks_ready — SeznamOrganicTasksReady
GET   /v3/serp/seznam/organic/tasks_fixed — SeznamOrganicTaskGetHtml
POST  /v3/serp/google/finance_explore/task_post — GoogleFinanceExploreTaskPost
GET   /v3/serp/google/finance_explore/tasks_ready — GoogleFinanceExploreTaskGetHtml
POST  /v3/serp/google/finance_explore/live/advanced — GoogleFinanceExploreLiveAdvanced
POST  /v3/serp/google/finance_explore/live/html — GoogleFinanceExploreLiveHtml
POST  /v3/serp/google/finance_markets/task_post — GoogleFinanceMarketsTaskPost
GET   /v3/serp/google/finance_markets/tasks_ready — GoogleFinanceMarketsTaskGetHtml
POST  /v3/serp/google/finance_markets/live/advanced — GoogleFinanceMarketsLiveAdvanced
POST  /v3/serp/google/finance_markets/live/html — GoogleFinanceMarketsLiveHtml
POST  /v3/serp/google/finance_quote/task_post — GoogleFinanceQuoteTaskPost
GET   /v3/serp/google/finance_quote/tasks_ready — GoogleFinanceQuoteTaskGetHtml
POST  /v3/serp/google/finance_quote/live/advanced — GoogleFinanceQuoteLiveAdvanced
POST  /v3/serp/google/finance_quote/live/html — GoogleFinanceQuoteLiveHtml
POST  /v3/serp/google/finance_ticker_search/task_post — GoogleFinanceTickerSearchTaskPost
GET   /v3/serp/google/finance_ticker_search/tasks_ready — GoogleFinanceTickerSearchTaskGetAdvanced
POST  /v3/serp/google/finance_ticker_search/live/advanced — GoogleFinanceTickerSearchLiveAdvanced
```

## AI Optimization API — 36 endpoints

AI keyword data, LLM Mentions, and LLM Responses/Scraper across ChatGPT, Claude, Gemini, Perplexity.  
Detailed params: [02-*.md](.) — see the reference file for this tier.

```
GET   /v3/ai_optimization/chat_gpt/llm_scraper/locations — ChatGptLlmScraperLocationsCountry
GET   /v3/ai_optimization/chat_gpt/llm_scraper/languages — ChatGptLlmScraperLanguages
POST  /v3/ai_optimization/chat_gpt/llm_scraper/task_post — ChatGptLlmScraperTaskPost
GET   /v3/ai_optimization/chat_gpt/llm_scraper/tasks_ready — ChatGptLlmScraperTaskGetHtml
POST  /v3/ai_optimization/chat_gpt/llm_scraper/live/advanced — ChatGptLlmScraperLiveAdvanced
POST  /v3/ai_optimization/chat_gpt/llm_scraper/live/html — ChatGptLlmScraperLiveHtml
GET   /v3/ai_optimization/llm_mentions/locations_and_languages — LlmMentionsLocationsAndLanguages
GET   /v3/ai_optimization/llm_mentions/available_filters — LlmMentionsAvailableFilters
POST  /v3/ai_optimization/llm_mentions/search/live — LlmMentionsSearchLive
POST  /v3/ai_optimization/llm_mentions/top_pages/live — LlmMentionsTopPagesLive
POST  /v3/ai_optimization/llm_mentions/top_domains/live — LlmMentionsTopDomainsLive
POST  /v3/ai_optimization/llm_mentions/aggregated_metrics/live — LlmMentionsAggregatedMetricsLive
POST  /v3/ai_optimization/llm_mentions/cross_aggregated_metrics/live — LlmMentionsCrossAggregatedMetricsLive
GET   /v3/ai_optimization/chat_gpt/llm_responses/models — ChatGptLlmResponsesModels
POST  /v3/ai_optimization/chat_gpt/llm_responses/live — ChatGptLlmResponsesLive
POST  /v3/ai_optimization/chat_gpt/llm_responses/task_post — ChatGptLlmResponsesTaskPost
GET   /v3/ai_optimization/chat_gpt/llm_responses/tasks_ready — ChatGptLlmResponsesTaskGet
GET   /v3/ai_optimization/claude/llm_responses/models — ClaudeLlmResponsesModels
POST  /v3/ai_optimization/claude/llm_responses/live — ClaudeLlmResponsesLive
POST  /v3/ai_optimization/claude/llm_responses/task_post — ClaudeLlmResponsesTaskPost
GET   /v3/ai_optimization/claude/llm_responses/tasks_ready — ClaudeLlmResponsesTaskGet
GET   /v3/ai_optimization/gemini/llm_responses/models — GeminiLlmResponsesModels
POST  /v3/ai_optimization/gemini/llm_responses/task_post — GeminiLlmResponsesTaskPost
GET   /v3/ai_optimization/gemini/llm_responses/tasks_ready — GeminiLlmResponsesTaskGet
POST  /v3/ai_optimization/gemini/llm_responses/live — GeminiLlmResponsesLive
GET   /v3/ai_optimization/gemini/llm_scraper/locations — GeminiLlmScraperLocations
GET   /v3/ai_optimization/gemini/llm_scraper/languages — GeminiLlmScraperLanguages
POST  /v3/ai_optimization/gemini/llm_scraper/task_post — GeminiLlmScraperTaskPost
GET   /v3/ai_optimization/gemini/llm_scraper/tasks_ready — GeminiLlmScraperTaskGetHtml
POST  /v3/ai_optimization/gemini/llm_scraper/live/advanced — GeminiLlmScraperLiveAdvanced
POST  /v3/ai_optimization/gemini/llm_scraper/live/html — GeminiLlmScraperLiveHtml
GET   /v3/ai_optimization/perplexity/llm_responses/models — PerplexityLlmResponsesModels
POST  /v3/ai_optimization/perplexity/llm_responses/live — PerplexityLlmResponsesLive
GET   /v3/ai_optimization/ai_keyword_data/available_filters — AiKeywordDataAvailableFilters
GET   /v3/ai_optimization/ai_keyword_data/locations_and_languages — AiKeywordDataLocationsAndLanguages
POST  /v3/ai_optimization/ai_keyword_data/keywords_search_volume/live — AiKeywordDataKeywordsSearchVolumeLive
```

## Keywords Data API — 56 endpoints

Google Ads, Bing Ads, Google Trends, DataForSEO Trends, Clickstream Data.  
Detailed params: [03-*.md](.) — see the reference file for this tier.

```
POST  /v3/keywords_data/id_list — KeywordsDataIdList
POST  /v3/keywords_data/errors — KeywordsDataErrors
GET   /v3/keywords_data/google_ads/status — GoogleAdsStatus
GET   /v3/keywords_data/google_ads/locations — GoogleAdsLocationsCountry
GET   /v3/keywords_data/google_ads/languages — GoogleAdsLanguages
POST  /v3/keywords_data/google_ads/search_volume/task_post — GoogleAdsSearchVolumeTaskPost
GET   /v3/keywords_data/google_ads/search_volume/tasks_ready — GoogleAdsSearchVolumeTaskGet
POST  /v3/keywords_data/google_ads/search_volume/live — GoogleAdsSearchVolumeLive
POST  /v3/keywords_data/google_ads/keywords_for_site/task_post — GoogleAdsKeywordsForSiteTaskPost
GET   /v3/keywords_data/google_ads/keywords_for_site/tasks_ready — GoogleAdsKeywordsForSiteTaskGet
POST  /v3/keywords_data/google_ads/keywords_for_site/live — GoogleAdsKeywordsForSiteLive
POST  /v3/keywords_data/google_ads/keywords_for_keywords/task_post — GoogleAdsKeywordsForKeywordsTaskPost
GET   /v3/keywords_data/google_ads/keywords_for_keywords/tasks_ready — GoogleAdsKeywordsForKeywordsTaskGet
POST  /v3/keywords_data/google_ads/keywords_for_keywords/live — GoogleAdsKeywordsForKeywordsLive
POST  /v3/keywords_data/google_ads/ad_traffic_by_keywords/task_post — GoogleAdsAdTrafficByKeywordsTaskPost
GET   /v3/keywords_data/google_ads/ad_traffic_by_keywords/tasks_ready — GoogleAdsAdTrafficByKeywordsTaskGet
POST  /v3/keywords_data/google_ads/ad_traffic_by_keywords/live — GoogleAdsAdTrafficByKeywordsLive
GET   /v3/keywords_data/google_trends/locations — GoogleTrendsLocationsCountry
GET   /v3/keywords_data/google_trends/languages — GoogleTrendsLanguages
GET   /v3/keywords_data/google_trends/categories — GoogleTrendsCategories
POST  /v3/keywords_data/google_trends/explore/task_post — GoogleTrendsExploreTaskPost
GET   /v3/keywords_data/google_trends/explore/tasks_ready — GoogleTrendsExploreTaskGet
POST  /v3/keywords_data/google_trends/explore/live — GoogleTrendsExploreLive
GET   /v3/keywords_data/dataforseo_trends/locations — DataforseoTrendsLocationsCountry
POST  /v3/keywords_data/dataforseo_trends/explore/live — DataforseoTrendsExploreLive
POST  /v3/keywords_data/dataforseo_trends/subregion_interests/live — DataforseoTrendsSubregionInterestsLive
POST  /v3/keywords_data/dataforseo_trends/demography/live — DataforseoTrendsDemographyLive
POST  /v3/keywords_data/dataforseo_trends/merged_data/live — DataforseoTrendsMergedDataLive
GET   /v3/keywords_data/bing/locations — KeywordsDataBingLocations
GET   /v3/keywords_data/bing/languages — KeywordsDataBingLanguages
POST  /v3/keywords_data/bing/search_volume/task_post — BingSearchVolumeTaskPost
GET   /v3/keywords_data/bing/search_volume/tasks_ready — BingSearchVolumeTaskGet
POST  /v3/keywords_data/bing/search_volume/live — BingSearchVolumeLive
GET   /v3/keywords_data/bing/audience_estimation/job_functions — BingAudienceEstimationJobFunctions
GET   /v3/keywords_data/bing/audience_estimation/industries — BingAudienceEstimationIndustries
POST  /v3/keywords_data/bing/audience_estimation/task_post — BingAudienceEstimationTaskPost
GET   /v3/keywords_data/bing/audience_estimation/tasks_ready — BingAudienceEstimationTaskGet
POST  /v3/keywords_data/bing/audience_estimation/live — BingAudienceEstimationLive
POST  /v3/keywords_data/bing/keywords_for_site/task_post — BingKeywordsForSiteTaskPost
GET   /v3/keywords_data/bing/keywords_for_site/tasks_ready — BingKeywordsForSiteTaskGet
POST  /v3/keywords_data/bing/keywords_for_site/live — BingKeywordsForSiteLive
POST  /v3/keywords_data/bing/keywords_for_keywords/task_post — BingKeywordsForKeywordsTaskPost
GET   /v3/keywords_data/bing/keywords_for_keywords/tasks_ready — BingKeywordsForKeywordsTaskGet
POST  /v3/keywords_data/bing/keywords_for_keywords/live — BingKeywordsForKeywordsLive
GET   /v3/keywords_data/bing/keyword_performance/locations_and_languages — BingKeywordPerformanceLocationsAndLanguages
POST  /v3/keywords_data/bing/keyword_performance/task_post — BingKeywordPerformanceTaskPost
GET   /v3/keywords_data/bing/keyword_performance/tasks_ready — BingKeywordPerformanceTaskGet
POST  /v3/keywords_data/bing/keyword_performance/live — BingKeywordPerformanceLive
GET   /v3/keywords_data/bing/search_volume_history/locations_and_languages — BingSearchVolumeHistoryLocationsAndLanguages
POST  /v3/keywords_data/bing/search_volume_history/task_post — BingSearchVolumeHistoryTaskPost
GET   /v3/keywords_data/bing/search_volume_history/tasks_ready — BingSearchVolumeHistoryTaskGet
POST  /v3/keywords_data/bing/search_volume_history/live — BingSearchVolumeHistoryLive
GET   /v3/keywords_data/clickstream_data/locations_and_languages — ClickstreamDataLocationsAndLanguages
POST  /v3/keywords_data/clickstream_data/dataforseo_search_volume/live — ClickstreamDataDataforseoSearchVolumeLive
POST  /v3/keywords_data/clickstream_data/global_search_volume/live — ClickstreamDataGlobalSearchVolumeLive
POST  /v3/keywords_data/clickstream_data/bulk_search_volume/live — ClickstreamDataBulkSearchVolumeLive
```

## DataForSEO Labs API — 47 endpoints

Cheapest tier. Google keyword + domain research, plus Labs for Google Play, App Store and Amazon.  
Detailed params: [03-*.md](.) — see the reference file for this tier.

```
POST  /v3/dataforseo_labs/id_list — DataforseoLabsIdList
GET   /v3/dataforseo_labs/status — Status
POST  /v3/dataforseo_labs/errors — DataforseoLabsErrors
GET   /v3/dataforseo_labs/available_filters — AvailableFilters
GET   /v3/dataforseo_labs/locations_and_languages — LocationsAndLanguages
GET   /v3/dataforseo_labs/categories — Categories
GET   /v3/dataforseo_labs/google/available_history — GoogleAvailableHistory
POST  /v3/dataforseo_labs/google/keywords_for_site/live — GoogleKeywordsForSiteLive
POST  /v3/dataforseo_labs/google/related_keywords/live — GoogleRelatedKeywordsLive
POST  /v3/dataforseo_labs/google/keyword_suggestions/live — GoogleKeywordSuggestionsLive
POST  /v3/dataforseo_labs/google/keyword_ideas/live — GoogleKeywordIdeasLive
POST  /v3/dataforseo_labs/google/bulk_keyword_difficulty/live — GoogleBulkKeywordDifficultyLive
POST  /v3/dataforseo_labs/google/search_intent/live — GoogleSearchIntentLive
GET   /v3/dataforseo_labs/google/categories_for_keywords/languages — GoogleCategoriesForKeywordsLanguages
POST  /v3/dataforseo_labs/google/categories_for_domain/live — GoogleCategoriesForDomainLive
POST  /v3/dataforseo_labs/google/categories_for_keywords/live — GoogleCategoriesForKeywordsLive
POST  /v3/dataforseo_labs/google/keywords_for_categories/live — GoogleKeywordsForCategoriesLive
POST  /v3/dataforseo_labs/google/domain_metrics_by_categories/live — GoogleDomainMetricsByCategoriesLive
POST  /v3/dataforseo_labs/google/top_searches/live — GoogleTopSearchesLive
POST  /v3/dataforseo_labs/google/ranked_keywords/live — GoogleRankedKeywordsLive
POST  /v3/dataforseo_labs/google/serp_competitors/live — GoogleSerpCompetitorsLive
POST  /v3/dataforseo_labs/google/competitors_domain/live — GoogleCompetitorsDomainLive
POST  /v3/dataforseo_labs/google/domain_intersection/live — GoogleDomainIntersectionLive
POST  /v3/dataforseo_labs/google/subdomains/live — GoogleSubdomainsLive
POST  /v3/dataforseo_labs/google/relevant_pages/live — GoogleRelevantPagesLive
POST  /v3/dataforseo_labs/google/domain_rank_overview/live — GoogleDomainRankOverviewLive
POST  /v3/dataforseo_labs/google/historical_serps/live — GoogleHistoricalSerpsLive
POST  /v3/dataforseo_labs/google/historical_rank_overview/live — GoogleHistoricalRankOverviewLive
POST  /v3/dataforseo_labs/google/page_intersection/live — GooglePageIntersectionLive
POST  /v3/dataforseo_labs/google/bulk_traffic_estimation/live — GoogleBulkTrafficEstimationLive
POST  /v3/dataforseo_labs/google/historical_bulk_traffic_estimation/live — GoogleHistoricalBulkTrafficEstimationLive
POST  /v3/dataforseo_labs/google/historical_keyword_data/live — GoogleHistoricalKeywordDataLive
POST  /v3/dataforseo_labs/google/keyword_overview/live — GoogleKeywordOverviewLive
POST  /v3/dataforseo_labs/amazon/bulk_search_volume/live — AmazonBulkSearchVolumeLive
POST  /v3/dataforseo_labs/amazon/related_keywords/live — AmazonRelatedKeywordsLive
POST  /v3/dataforseo_labs/amazon/ranked_keywords/live — AmazonRankedKeywordsLive
POST  /v3/dataforseo_labs/amazon/product_rank_overview/live — AmazonProductRankOverviewLive
POST  /v3/dataforseo_labs/amazon/product_competitors/live — AmazonProductCompetitorsLive
POST  /v3/dataforseo_labs/amazon/product_keyword_intersections/live — AmazonProductKeywordIntersectionsLive
POST  /v3/dataforseo_labs/google/bulk_app_metrics/live — GoogleBulkAppMetricsLive
POST  /v3/dataforseo_labs/google/keywords_for_app/live — GoogleKeywordsForAppLive
POST  /v3/dataforseo_labs/google/app_competitors/live — GoogleAppCompetitorsLive
POST  /v3/dataforseo_labs/google/app_intersection/live — GoogleAppIntersectionLive
POST  /v3/dataforseo_labs/apple/bulk_app_metrics/live — AppleBulkAppMetricsLive
POST  /v3/dataforseo_labs/apple/keywords_for_app/live — AppleKeywordsForAppLive
POST  /v3/dataforseo_labs/apple/app_competitors/live — AppleAppCompetitorsLive
POST  /v3/dataforseo_labs/apple/app_intersection/live — AppleAppIntersectionLive
```

## Backlinks API — 24 endpoints

Backlink profiles, anchors, referring domains/networks, intersections, timeseries, bulk_*.  
Detailed params: [04-*.md](.) — see the reference file for this tier.

```
POST  /v3/backlinks/id_list — BacklinksIdList
POST  /v3/backlinks/errors — BacklinksErrors
GET   /v3/backlinks/available_filters — BacklinksAvailableFilters
GET   /v3/backlinks/index — Index
POST  /v3/backlinks/summary/live — SummaryLive
POST  /v3/backlinks/history/live — HistoryLive
POST  /v3/backlinks/backlinks/live — BacklinksLive
POST  /v3/backlinks/anchors/live — AnchorsLive
POST  /v3/backlinks/domain_pages/live — DomainPagesLive
POST  /v3/backlinks/domain_pages_summary/live — DomainPagesSummaryLive
POST  /v3/backlinks/referring_domains/live — ReferringDomainsLive
POST  /v3/backlinks/referring_networks/live — ReferringNetworksLive
POST  /v3/backlinks/competitors/live — CompetitorsLive
POST  /v3/backlinks/domain_intersection/live — DomainIntersectionLive
POST  /v3/backlinks/page_intersection/live — PageIntersectionLive
POST  /v3/backlinks/timeseries_summary/live — TimeseriesSummaryLive
POST  /v3/backlinks/timeseries_new_lost_summary/live — TimeseriesNewLostSummaryLive
POST  /v3/backlinks/bulk_ranks/live — BulkRanksLive
POST  /v3/backlinks/bulk_backlinks/live — BulkBacklinksLive
POST  /v3/backlinks/bulk_spam_score/live — BulkSpamScoreLive
POST  /v3/backlinks/bulk_referring_domains/live — BulkReferringDomainsLive
POST  /v3/backlinks/bulk_new_lost_backlinks/live — BulkNewLostBacklinksLive
POST  /v3/backlinks/bulk_new_lost_referring_domains/live — BulkNewLostReferringDomainsLive
POST  /v3/backlinks/bulk_pages_summary/live — BulkPagesSummaryLive
```

## Domain Analytics API — 14 endpoints

Technologies detection and WHOIS.  
Detailed params: [04-*.md](.) — see the reference file for this tier.

```
POST  /v3/domain_analytics/id_list — DomainAnalyticsIdList
POST  /v3/domain_analytics/errors — DomainAnalyticsErrors
GET   /v3/domain_analytics/technologies/available_filters — TechnologiesAvailableFilters
GET   /v3/domain_analytics/technologies/locations — TechnologiesLocations
GET   /v3/domain_analytics/technologies/languages — TechnologiesLanguages
GET   /v3/domain_analytics/technologies/technologies — TechnologiesTechnologies
POST  /v3/domain_analytics/technologies/aggregation_technologies/live — TechnologiesAggregationTechnologiesLive
POST  /v3/domain_analytics/technologies/technologies_summary/live — TechnologiesTechnologiesSummaryLive
POST  /v3/domain_analytics/technologies/technology_stats/live — TechnologiesTechnologyStatsLive
POST  /v3/domain_analytics/technologies/domains_by_technology/live — TechnologiesDomainsByTechnologyLive
POST  /v3/domain_analytics/technologies/domains_by_html_terms/live — TechnologiesDomainsByHtmlTermsLive
POST  /v3/domain_analytics/technologies/domain_technologies/live — TechnologiesDomainTechnologiesLive
GET   /v3/domain_analytics/whois/available_filters — WhoisAvailableFilters
POST  /v3/domain_analytics/whois/overview/live — WhoisOverviewLive
```

## OnPage API — 28 endpoints

instant_pages, the task-based site crawl + all read endpoints, and Lighthouse.  
Detailed params: [05-*.md](.) — see the reference file for this tier.

```
POST  /v3/on_page/id_list — OnPageIdList
POST  /v3/on_page/errors — OnPageErrors
POST  /v3/on_page/force_stop — ForceStop
GET   /v3/on_page/available_filters — OnPageAvailableFilters
POST  /v3/on_page/task_post — TaskPost
GET   /v3/on_page/tasks_ready — Summary
POST  /v3/on_page/pages — Pages
POST  /v3/on_page/pages_by_resource — PagesByResource
POST  /v3/on_page/resources — Resources
POST  /v3/on_page/duplicate_tags — DuplicateTags
POST  /v3/on_page/duplicate_content — DuplicateContent
POST  /v3/on_page/links — Links
POST  /v3/on_page/redirect_chains — RedirectChains
POST  /v3/on_page/non_indexable — NonIndexable
POST  /v3/on_page/waterfall — Waterfall
POST  /v3/on_page/keyword_density — KeywordDensity
POST  /v3/on_page/microdata — Microdata
POST  /v3/on_page/raw_html — RawHtml
POST  /v3/on_page/page_screenshot — PageScreenshot
POST  /v3/on_page/content_parsing — ContentParsing
POST  /v3/on_page/content_parsing/live — ContentParsingLive
POST  /v3/on_page/instant_pages — InstantPages
GET   /v3/on_page/lighthouse/languages — LighthouseLanguages
GET   /v3/on_page/lighthouse/audits — LighthouseAudits
GET   /v3/on_page/lighthouse/versions — LighthouseVersions
POST  /v3/on_page/lighthouse/task_post — LighthouseTaskPost
GET   /v3/on_page/lighthouse/tasks_ready — LighthouseTaskGetJson
POST  /v3/on_page/lighthouse/live/json — LighthouseLiveJson
```

## Content Analysis API — 11 endpoints

Web citation mining: search, summary, sentiment, trends, ratings.  
Detailed params: [05-*.md](.) — see the reference file for this tier.

```
POST  /v3/content_analysis/id_list — ContentAnalysisIdList
GET   /v3/content_analysis/available_filters — ContentAnalysisAvailableFilters
GET   /v3/content_analysis/locations — Locations
GET   /v3/content_analysis/languages — Languages
GET   /v3/content_analysis/categories — ContentAnalysisCategories
POST  /v3/content_analysis/search/live — SearchLive
POST  /v3/content_analysis/summary/live — ContentAnalysisSummaryLive
POST  /v3/content_analysis/sentiment_analysis/live — SentimentAnalysisLive
POST  /v3/content_analysis/rating_distribution/live — RatingDistributionLive
POST  /v3/content_analysis/phrase_trends/live — PhraseTrendsLive
POST  /v3/content_analysis/category_trends/live — CategoryTrendsLive
```

## Merchant API — 19 endpoints

Amazon (products/asin/sellers/reviews) and Google Shopping (products/sellers/product_info).  
Detailed params: [06-*.md](.) — see the reference file for this tier.

```
POST  /v3/merchant/id_list — MerchantIdList
POST  /v3/merchant/errors — MerchantErrors
GET   /v3/merchant/google/languages — MerchantGoogleLanguages
GET   /v3/merchant/google/locations — MerchantGoogleLocationsCountry
POST  /v3/merchant/google/products/task_post — GoogleProductsTaskPost
GET   /v3/merchant/google/products/tasks_ready — GoogleProductsTasksReady
GET   /v3/merchant/tasks_ready — GoogleProductsTaskGetHtml
POST  /v3/merchant/google/sellers/task_post — GoogleSellersTaskPost
GET   /v3/merchant/google/sellers/tasks_ready — GoogleSellersTaskGetAdvanced
POST  /v3/merchant/google/product_info/task_post — GoogleProductInfoTaskPost
GET   /v3/merchant/google/product_info/tasks_ready — GoogleSellersAdUrl
GET   /v3/merchant/amazon/locations — AmazonLocationsCountry
GET   /v3/merchant/amazon/languages — AmazonLanguages
POST  /v3/merchant/amazon/products/task_post — AmazonProductsTaskPost
GET   /v3/merchant/amazon/products/tasks_ready — AmazonProductsTaskGetHtml
POST  /v3/merchant/amazon/asin/task_post — AmazonAsinTaskPost
GET   /v3/merchant/amazon/asin/tasks_ready — AmazonAsinTaskGetHtml
POST  /v3/merchant/amazon/sellers/task_post — AmazonSellersTaskPost
GET   /v3/merchant/amazon/sellers/tasks_ready — AmazonSellersTaskGetHtml
```

## App Data API — 29 endpoints

Google Play and Apple App Store: searches, info, reviews, listings.  
Detailed params: [06-*.md](.) — see the reference file for this tier.

```
POST  /v3/app_data/id_list — AppDataIdList
POST  /v3/app_data/errors — AppDataErrors
GET   /v3/app_data/google/categories — GoogleCategories
GET   /v3/app_data/google/locations — AppDataGoogleLocationsCountry
GET   /v3/app_data/google/languages — AppDataGoogleLanguages
POST  /v3/app_data/google/app_searches/task_post — GoogleAppSearchesTaskPost
GET   /v3/app_data/google/app_searches/tasks_ready — GoogleAppSearchesTasksReady
GET   /v3/app_data/tasks_ready — GoogleAppSearchesTaskGetHtml
POST  /v3/app_data/google/app_list/task_post — GoogleAppListTaskPost
GET   /v3/app_data/google/app_list/tasks_ready — GoogleAppListTaskGetHtml
POST  /v3/app_data/google/app_info/task_post — GoogleAppInfoTaskPost
GET   /v3/app_data/google/app_info/tasks_ready — GoogleAppInfoTaskGetHtml
POST  /v3/app_data/google/app_reviews/task_post — GoogleAppReviewsTaskPost
GET   /v3/app_data/google/app_reviews/tasks_ready — GoogleAppReviewsTaskGetHtml
GET   /v3/app_data/google/app_listings/categories — GoogleAppListingsCategories
POST  /v3/app_data/google/app_listings/search/live — GoogleAppListingsSearchLive
GET   /v3/app_data/apple/categories — AppleCategories
GET   /v3/app_data/apple/locations — AppleLocations
GET   /v3/app_data/apple/languages — AppleLanguages
POST  /v3/app_data/apple/app_searches/task_post — AppleAppSearchesTaskPost
GET   /v3/app_data/apple/app_searches/tasks_ready — AppleAppSearchesTaskGetAdvanced
POST  /v3/app_data/apple/app_info/task_post — AppleAppInfoTaskPost
GET   /v3/app_data/apple/app_info/tasks_ready — AppleAppInfoTaskGetAdvanced
POST  /v3/app_data/apple/app_list/task_post — AppleAppListTaskPost
GET   /v3/app_data/apple/app_list/tasks_ready — AppleAppListTaskGetAdvanced
POST  /v3/app_data/apple/app_reviews/task_post — AppleAppReviewsTaskPost
GET   /v3/app_data/apple/app_reviews/tasks_ready — AppleAppReviewsTaskGetAdvanced
GET   /v3/app_data/apple/app_listings/categories — AppleAppListingsCategories
POST  /v3/app_data/apple/app_listings/search/live — AppleAppListingsSearchLive
```

## Business Data API — 41 endpoints

Google Business/Hotels, Business Listings, Trustpilot, Tripadvisor, Social Media.  
Detailed params: [06-*.md](.) — see the reference file for this tier.

```
POST  /v3/business_data/id_list — BusinessDataIdList
POST  /v3/business_data/errors — BusinessDataErrors
GET   /v3/business_data/business_listings/locations — BusinessListingsLocations
GET   /v3/business_data/business_listings/categories — BusinessListingsCategories
GET   /v3/business_data/business_listings/available_filters — BusinessListingsAvailableFilters
POST  /v3/business_data/business_listings/search/live — BusinessListingsSearchLive
POST  /v3/business_data/business_listings/categories_aggregation/live — BusinessListingsCategoriesAggregationLive
GET   /v3/business_data/google/locations — BusinessDataGoogleLocationsCountry
GET   /v3/business_data/google/languages — BusinessDataGoogleLanguages
POST  /v3/business_data/google/my_business_info/task_post — GoogleMyBusinessInfoTaskPost
GET   /v3/business_data/google/my_business_info/tasks_ready — GoogleMyBusinessInfoTasksReady
GET   /v3/business_data/tasks_ready — GoogleMyBusinessInfoTaskGet
POST  /v3/business_data/google/my_business_info/live — GoogleMyBusinessInfoLive
POST  /v3/business_data/google/my_business_updates/task_post — GoogleMyBusinessUpdatesTaskPost
GET   /v3/business_data/google/my_business_updates/tasks_ready — GoogleMyBusinessUpdatesTaskGet
POST  /v3/business_data/google/hotel_searches/task_post — GoogleHotelSearchesTaskPost
GET   /v3/business_data/google/hotel_searches/tasks_ready — GoogleHotelSearchesTaskGet
POST  /v3/business_data/google/hotel_searches/live — GoogleHotelSearchesLive
POST  /v3/business_data/google/hotel_info/task_post — GoogleHotelInfoTaskPost
GET   /v3/business_data/google/hotel_info/tasks_ready — GoogleHotelInfoTaskGetHtml
POST  /v3/business_data/google/hotel_info/live/advanced — GoogleHotelInfoLiveAdvanced
POST  /v3/business_data/google/hotel_info/live/html — GoogleHotelInfoLiveHtml
POST  /v3/business_data/google/reviews/task_post — GoogleReviewsTaskPost
GET   /v3/business_data/google/reviews/tasks_ready — GoogleReviewsTaskGet
POST  /v3/business_data/google/extended_reviews/task_post — GoogleExtendedReviewsTaskPost
GET   /v3/business_data/google/extended_reviews/tasks_ready — GoogleExtendedReviewsTaskGet
POST  /v3/business_data/google/questions_and_answers/task_post — GoogleQuestionsAndAnswersTaskPost
GET   /v3/business_data/google/questions_and_answers/tasks_ready — GoogleQuestionsAndAnswersTaskGet
POST  /v3/business_data/google/questions_and_answers/live — GoogleQuestionsAndAnswersLive
POST  /v3/business_data/trustpilot/search/task_post — TrustpilotSearchTaskPost
GET   /v3/business_data/trustpilot/search/tasks_ready — TrustpilotSearchTaskGet
POST  /v3/business_data/trustpilot/reviews/task_post — TrustpilotReviewsTaskPost
GET   /v3/business_data/trustpilot/reviews/tasks_ready — TrustpilotReviewsTaskGet
GET   /v3/business_data/tripadvisor/locations — TripadvisorLocationsCountry
GET   /v3/business_data/tripadvisor/languages — TripadvisorLanguages
POST  /v3/business_data/tripadvisor/search/task_post — TripadvisorSearchTaskPost
GET   /v3/business_data/tripadvisor/search/tasks_ready — TripadvisorSearchTaskGet
POST  /v3/business_data/tripadvisor/reviews/task_post — TripadvisorReviewsTaskPost
GET   /v3/business_data/tripadvisor/reviews/tasks_ready — TripadvisorReviewsTaskGet
POST  /v3/business_data/social_media/pinterest/live — SocialMediaPinterestLive
POST  /v3/business_data/social_media/reddit/live — SocialMediaRedditLive
```

## Appendix — 4 endpoints

Account/usage utilities (user_data balance check, errors, etc.).  
Detailed params: [01-*.md](.) — see the reference file for this tier.

```
GET   /v3/appendix/user_data — UserData
GET   /v3/appendix/errors — Errors
POST  /v3/appendix/webhook_resend — WebhookResend
GET   /v3/appendix/status — AppendixStatus
```

> Source: https://github.com/dataforseo/OpenApiDocumentation (openapi_specification.yaml) · per-module JSON specs: https://github.com/dataforseo/open-ai-actions
