# seo-2026-sota

## C-028 S1. GEO content plan (prompt-targets and BoFu topics)
- ask: "What should I publish to get recommended by ChatGPT/Perplexity?"
- inputs: product, ICP, existing landing pages, competitors, which LLMs your customers use.
- data: an LLM (Claude in the source); optional AI search volume and LLM mentions (DF8).
- upstream: positioning (DCR C1)
- downstream: feeds S2, S8, S12.
- depth: full

### steps
1. First filter: GEO pays off if the product needs an informed decision (SaaS, B2B, consulting, education, complex products), not volume ecommerce on short queries. [chapters/ch01-geo-fondamenti-fiducia-bofu.md]
2. Map customers → models → channels (ChatGPT, Claude, Gemini/AIO, Perplexity). [chapters/ch05-ottimizzare-per-modello.md, patterns.md]
3. Extract your landing pages; ask Claude for listicles, comparisons and alternatives pages, with 3 **prompt-targets** each. [chapters/ch02-geo-playbook-6-step.md]
4. Filter by ICP down to 5–10 ideas; generate a brief per idea. [chapters/ch02-geo-playbook-6-step.md]
5. Assign each idea one of the **4 BoFu formats**: vertical listicle, "X vs Y", choice guide with decision matrix, "[Competitor] alternatives". [chapters/ch01-geo-fondamenti-fiducia-bofu.md]
6. Keep informational hubs only for topical authority (Pivot ToFu→BoFu). [patterns.md]
### criteria
- Plan states why GEO fits this product (informed-decision test). [chapters/ch01-geo-fondamenti-fiducia-bofu.md]
- 5–10 ideas, each in one of the 4 BoFu formats. [chapters/ch02-geo-playbook-6-step.md, chapters/ch01-geo-fondamenti-fiducia-bofu.md]
- Each idea has 3 prompt-targets written as conversational questions, not Google keywords. [chapters/ch02-geo-playbook-6-step.md, chapters/ch01-geo-fondamenti-fiducia-bofu.md]
- Each idea names the model(s) it targets. [chapters/ch05-ottimizzare-per-modello.md]

## C-029 S2. BoFu GEO page (listicle, X vs Y, choice guide, alternatives)
- ask: "Write a '[Competitor] alternatives' page that LLMs will cite."
- inputs: S1 brief, first-hand test data, author credentials, client names (as text), primary sources.
- data: GSC, IndexNow key, schema validators; curl for the crawlability check.
- upstream: S1, S6
- downstream: feeds S8 (one video per listicle), S12.
- depth: full

### steps
1. Confirm critical content is in the first HTML response, not built by client-side JS (**first-response rule**). [chapters/ch02-geo-playbook-6-step.md]
2. **Heading-as-question**: each H2/H3 is a real question; the first sentence below is a self-contained 1–2 line answer (≤100 chars for Gemini); detail below. [chapters/ch02-geo-playbook-6-step.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md, patterns.md]
3. Declare originality ("we tested 12 tools for 6 weeks") and add a "How we tested" section. [chapters/ch02-geo-playbook-6-step.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
4. Add E-E-A-T for LLMs: author bio with photo/credentials/sameAs, client logos as **text**, result numbers in body, verifiable primary sources. [chapters/ch02-geo-playbook-6-step.md, patterns.md]
5. For choice guides, include an explicit decision matrix (criteria, tables, use cases). [chapters/ch01-geo-fondamenti-fiducia-bofu.md]
6. Schema: Article + Author + Organization + FAQPage; ItemList for listicles; validate (S5). [chapters/ch02-geo-playbook-6-step.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
7. Title 50–60 chars, keyword left, key info in first 50; meta 150–160 chars. [cheatsheet.md, chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
8. Publish → Search Console URL Inspection "Request indexing" + IndexNow for Bing/Perplexity/Copilot. [chapters/ch02-geo-playbook-6-step.md, patterns.md]
### criteria
- Every H2/H3 is phrased as a question. [chapters/ch02-geo-playbook-6-step.md]
- First sentence under each heading answers it alone in 1–2 lines. [chapters/ch02-geo-playbook-6-step.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- Page states test method/duration or first-hand data. [chapters/ch02-geo-playbook-6-step.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- Client logos/names appear as text. [chapters/ch02-geo-playbook-6-step.md, chapters/ch03-geo-distribuzione-off-site.md]
- Author named with credentials and sameAs links. [patterns.md]
- Structured data validates with no errors. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- Page does not self-rank #1 without evidence (site reputation abuse risk). [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]

## C-030 S3. Technical SEO audit
- ask: "Audit my site's technical SEO."
- inputs: domain, GSC access, CMS/rendering stack, key templates.
- data: GSC, CrUX/PageSpeed Insights, Rich Results Test, Schema Markup Validator, curl; optional crawl data (DF7).
- upstream: DF7
- downstream: feeds S4, S5, S10.
- depth: full

### steps
1. Indexation: `site:` operator; if missing check Googlebot access, 200 OK, robots.txt, meta noindex, valid HTML, declared language. [chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md]
2. AI crawlability: JS off (AI Eyes) or `curl -s URL | grep -c '</p>'`; <70% content or <5 paragraphs → prerender (SSR/SSG/Islands). [chapters/ch02-geo-playbook-6-step.md, patterns.md]
3. Rendering strategy per section (SSR/SSG/CSR/ISR/Islands); no hash routing; no content behind "load more". [chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md]
4. Blocking: never Disallow + noindex together; noindex first, Disallow after deindexing; X-Robots-Tag for non-HTML. [chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md, cheatsheet.md]
5. Canonicals: self-referencing on every page; signal strength 301 > rel=canonical > hreflang > sitemap > internal links; check Google's chosen canonical in GSC. [chapters/ch09-architettura-url-directory-canonical.md, patterns.md]
6. URLs: <75 chars, hyphens, lowercase ASCII, ≤2 params, no dates on evergreen; sitemap ≤50,000 URLs/50MB. [chapters/ch09-architettura-url-directory-canonical.md, chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md, cheatsheet.md]
7. Titles/meta per S13; images (alt, width/height, LCP image never lazy). [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
8. CWV from CrUX (S4), schema validation (S5), hreflang rules (bidirectional, self-ref, ISO codes, x-default, absolute URLs). [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
9. Intrusive interstitials on mobile; Lighthouse SEO audits (tap targets ≥48px, descriptive link text, etc.). [chapters/ch10-contenuti-utili-link.md, chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md]
10. Report grouped by the **5 areas** of an SEO program (crawl/index, IA, content/topical authority, SERP appearance, measurement). [chapters/ch07-seo-fondamenti-come-funziona-google.md]
### criteria
- Every finding names the URL/template, the rule broken, and the tool that showed it (GSC URL Inspection, PSI/CrUX, Rich Results Test). [chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- No recommendation combines Disallow + noindex. [chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md]
- CWV reported as p75 over 28 days of field data, not lab only. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md, chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md]
- Each fix lists expected time to effect (timing table). [chapters/ch07-seo-fondamenti-come-funziona-google.md]
- Changes sequenced one at a time. [chapters/ch07-seo-fondamenti-come-funziona-google.md]

## C-031 S4. Core Web Vitals remediation plan
- ask: "My site fails Core Web Vitals, what do I fix?"
- inputs: CrUX data per URL/origin, Lighthouse runs, templates.
- data: CrUX API/History API/BigQuery (`materialized.*`), PSI, Lighthouse.
- upstream: S3
- downstream: feeds S11 monitoring.
- depth: full

### steps
1. Check each metric at p75 over 28 days: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md, cheatsheet.md]
2. LCP: diagnose by its 4 sub-phases (TTFB, resource load delay, resource load duration, element render delay); fix with preload + `fetchpriority="high"`, AVIF/WebP, CDN, TTFB, inline critical CSS ≤14KB. [chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
3. INP: break tasks ≤50ms, code splitting, Web Workers, limit third parties, debounce 150–300ms. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md, patterns.md]
4. CLS: width/height on media, reserved space for ads/widgets, `font-display: swap` + `size-adjust`. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
5. Add Lighthouse CI as a PR gate with budgets; run audits several times to reduce variance. [patterns.md]
6. Re-measure after 4–8 weeks (CrUX rolling window). [chapters/ch07-seo-fondamenti-come-funziona-google.md]
### criteria
- Each fix maps to a failing metric and a named sub-phase or cause. [chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md]
- LCP image is not lazy-loaded. [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
- Pass defined as 75% of visits "Good" on all three. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- Measurement date set ≥4 weeks after deploy. [chapters/ch07-seo-fondamenti-come-funziona-google.md]

## C-032 S5. Structured data pack
- ask: "Add schema markup to my blog/product pages."
- inputs: page types, author and organization data.
- data: validators, GSC.
- upstream: S6
- downstream: part of S2, S3.
- depth: full

### steps
1. Use JSON-LD. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
2. Pick types: Article/BlogPosting + Author (Person + sameAs) + Organization; FAQPage; ItemList for listicles; VideoObject for video pages. [chapters/ch02-geo-playbook-6-step.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md, chapters/ch03-geo-distribuzione-off-site.md]
3. Validate locally (schema-dts + AJV) → Schema Markup Validator → Rich Results Test as a staging gate. [patterns.md]
4. After changes, check GSC "Rich results" report. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
### criteria
- Valid in both Schema Markup Validator and Rich Results Test. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- Author is a Person with sameAs. [patterns.md]
- FAQPage kept for AI Mode, without expecting FAQ rich results (removed May 2026). [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]

## C-033 S6. E-E-A-T trust package (author and evidence)
- ask: "Make my content look trustworthy to Google and LLMs."
- inputs: authors, credentials, LinkedIn/ORCID, original photos, test methodology, client list, results.
- data: none external.
- upstream: none
- downstream: feeds S2, S5.
- depth: full

### steps
1. Author pages with bio, photo, LinkedIn/ORCID; Schema Person + sameAs. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md, patterns.md]
2. Complete Organization schema. [patterns.md]
3. Original photos and a "How we tested" / methodology section (especially YMYL). [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
4. Client logos as text; result numbers in body; citations of primary sources. [chapters/ch02-geo-playbook-6-step.md, patterns.md]
### criteria
- Every advice page names an author with credentials. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- A methodology/testing section exists on review/comparison pages. [chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- No trust signal exists only as an image. [patterns.md]

## C-034 S7. Off-site GEO distribution plan
- ask: "Where should we be mentioned so AI assistants recommend us?"
- inputs: S1 model map, weekly hours available (5–10h in source), B2B or B2C.
- data: LLM queries; optional DF8, DF12.
- upstream: S1
- downstream: feeds S8, S12.
- depth: full

### steps
1. Allocate by model: ChatGPT → Wikipedia + G2/Capterra; Claude → technical docs, GitHub, papers; Gemini/AIO → YouTube + schema + recency; Perplexity → Reddit. [chapters/ch05-ottimizzare-per-modello.md, cheatsheet.md]
2. G2 + Capterra (+ Trustpilot for the 3× effect) setup: free profiles, complete categories/description/screenshots/integrations, one-shot review campaign, quarterly update; target 20–30 reviews, 4.3+. [chapters/ch03-geo-distribuzione-off-site.md, patterns.md]
3. Reddit: participation not editorial; real-karma account with disclosure ("I work at X"). [chapters/ch03-geo-distribuzione-off-site.md]
4. Republish on Medium/LinkedIn: canonical on your blog, wait 1–2 weeks, republish with rel=canonical. [chapters/ch03-geo-distribuzione-off-site.md, patterns.md]
5. Digital PR: ask ChatGPT for the top 10 articles reviewing your category, pitch each writer with data. [chapters/ch03-geo-distribuzione-off-site.md]
6. Prioritize the **80/20** assets: 3–5 BoFu listicles, G2+Capterra, 3–5 long-form YouTube videos, 2–3 subreddits, Article+Author+Organization schema. [chapters/ch06-geo-topical-authority-blackhat-8020.md, cheatsheet.md]
### criteria
- Each channel is justified by a target model. [chapters/ch05-ottimizzare-per-modello.md]
- No black-hat tactic: no review farm, no astroturfing, no aggressive Wikipedia editing. [chapters/ch06-geo-topical-authority-blackhat-8020.md]
- Reddit activity includes disclosure. [chapters/ch03-geo-distribuzione-off-site.md]
- Republished copies point canonical to the original. [chapters/ch03-geo-distribuzione-off-site.md]

## C-035 S8. YouTube GEO video package
- ask: "Turn my listicle into a YouTube video that gets cited in AI Overviews."
- inputs: a BoFu listicle (S2).
- data: optional YouTube SERP (DF11).
- upstream: S2
- downstream: feeds S12.
- depth: full

### steps
1. One video per BoFu listicle (slideshow + voice-over is enough). [chapters/ch03-geo-distribuzione-off-site.md]
2. Title = exact commercial query ("Best [category] tools 2026: tested 12, here are the 5 worth your time"). [chapters/ch03-geo-distribuzione-off-site.md]
3. Long-form, sweet spot 10–20 minutes. [chapters/ch03-geo-distribuzione-off-site.md]
4. Publish the transcript on your site. [chapters/ch03-geo-distribuzione-off-site.md, chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
5. VideoObject schema on the embedding page. [chapters/ch03-geo-distribuzione-off-site.md]
6. Rich description + chapter markers mirroring the listicle. [chapters/ch03-geo-distribuzione-off-site.md]
### criteria
- Title contains the commercial query. [chapters/ch03-geo-distribuzione-off-site.md]
- Duration ≥10 min. [chapters/ch03-geo-distribuzione-off-site.md]
- Transcript published on site. [chapters/ch03-geo-distribuzione-off-site.md]
- VideoObject validates. [chapters/ch03-geo-distribuzione-off-site.md, chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md]
- Chapters match listicle sections. [chapters/ch03-geo-distribuzione-off-site.md]

## C-036 S9. Topic cluster and internal-link matrix
- ask: "Plan a content cluster for [vertical] and fix our internal links."
- inputs: URL + title export from CMS, target vertical.
- data: CMS export; an LLM.
- upstream: S1/DCR C4 topics
- downstream: strengthens S2.
- depth: full

### steps
1. Design hub & spoke: pillar → spoke → sub-spoke in topical directories; for GEO keep it narrower and deeper. [chapters/ch09-architettura-url-directory-canonical.md, chapters/ch06-geo-topical-authority-blackhat-8020.md, patterns.md]
2. Export URLs + titles; ask Claude for a link matrix (source, destination, anchor, context sentence; 50–200 links). [chapters/ch06-geo-topical-authority-blackhat-8020.md, patterns.md]
3. Review anchors for over-optimization; implement (Link Whisper/Yoast or manually). [patterns.md]
### criteria
- Every spoke links to its pillar. [chapters/ch09-architettura-url-directory-canonical.md]
- Every matrix row has source, destination, anchor, context sentence. [chapters/ch06-geo-topical-authority-blackhat-8020.md]
- Anchors are descriptive, never "click here". [chapters/ch10-contenuti-utili-link.md]

## C-037 S10. Organic traffic drop diagnosis
- ask: "Our organic traffic dropped, why?"
- inputs: GSC, GA4, deploy log, Trends.
- data: GSC, GA4, Search Status Dashboard, Google Trends; optional DF4.
- upstream: S11
- downstream: feeds S3/S4 fixes.
- depth: full

### steps
1. Source of the drop (search type, country, device; general or concentrated). [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
2. Timing coincidences (Core Update, sitemap, deploy, CDN) cross-checked with Search Status Dashboard. [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
3. Technical (dropped pages, 5xx, robots.txt, live test). [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
4. Algorithmic (gradual = Core Update, sudden = technical/manual). [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
5. Manual action. [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
6. Seasonality (Google Trends). [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
7. Competition. [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
### criteria
- Search Status Dashboard checked before any diagnosis. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
- Each of the 7 steps has a recorded finding. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
- Recommends one change at a time. [patterns.md, chapters/ch07-seo-fondamenti-come-funziona-google.md]

## C-038 S11. SEO measurement and weekly report (GSC + GA4 + Trends)
- ask: "Set up an SEO report that shows business impact."
- inputs: GSC (DNS TXT verification), GA4, conversion events.
- data: GSC, GA4, Trends, BigQuery; optional DF4, DF8, DF9.
- upstream: none
- downstream: feeds S10, S12.
- depth: full

### steps
1. Link GSC ↔ GA4; define GA4 conversion events. [chapters/ch14-search-console-monitoraggio-triangolazione.md, patterns.md]
2. Review the 5 GSC reports on cadence: Performance weekly, Page indexing after deploys/monthly, Page experience every 2 weeks, Rich results after schema changes, Manual actions/Security via email alerts. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
3. Context with Google Trends (5 years) to separate growth from seasonality. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
4. BigQuery export for anomalous CTR, branded/non-branded, decay. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
5. GEO tracking from 4 sources: GA4 source/medium, GSC, an AI-visibility tracker, weekly manual tests; optional `udm=14` GA4 event for AI Mode clicks. [chapters/ch02-geo-playbook-6-step.md, chapters/ch14-search-console-monitoraggio-triangolazione.md]
### criteria
- Report includes at least one conversion metric. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
- Growth is shown against Trends context. [chapters/ch14-search-console-monitoraggio-triangolazione.md]
- Manual-action email alerts enabled. [chapters/ch14-search-console-monitoraggio-triangolazione.md]

## C-039 S12. GEO weekly citation audit (iteration cycle)
- ask: "Check whether AI assistants cite us and what to update this week."
- inputs: prompt-targets (S1), competitor list.
- data: LLM access or DF8 (LLM scraper/responses/mentions).
- upstream: S1, DF8
- downstream: feeds S2 updates.
- depth: full

### steps
1. Mon: run prompt-targets on ChatGPT/Claude/Perplexity/Gemini; record if, where, and from which source you are cited. [chapters/ch02-geo-playbook-6-step.md]
2. Tue–Wed: for prompts where you are absent, analyze who is cited and why (more data, examples, better schema, Reddit/G2/YouTube presence). [chapters/ch02-geo-playbook-6-step.md]
3. Thu: update 1–2 pages (often add data/FAQ/table). [chapters/ch02-geo-playbook-6-step.md]
4. Fri: publish/republish, notify via Search Console + IndexNow, update the dashboard. [chapters/ch02-geo-playbook-6-step.md]
### criteria
- Log covers every prompt-target on all four assistants. [chapters/ch02-geo-playbook-6-step.md]
- Each gap names the cited competitor and the reason. [chapters/ch02-geo-playbook-6-step.md]
- Each week ships 1–2 page updates. [chapters/ch02-geo-playbook-6-step.md]

## C-040 S13. Title and meta description set
- ask: "Write titles and meta descriptions for these pages."
- inputs: page, primary query, USP/price/availability for products.
- data: GSC queries per page.
- upstream: page content
- downstream: part of S2, S3.
- depth: full

### steps
1. Title: unique, keyword left, key info in first 50 chars, ~50–60 chars (pixel truncation ~580px). [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md, cheatsheet.md]
2. Meta: 150–160 chars, unique, adds info (not a title copy), natural CTA; for products price/availability/USP. [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
3. Structure each section (H2/H3 + short summary) to work as a dynamic snippet. [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
### criteria
- Title ≤60 chars, not "Home", not duplicated, matches H1. [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
- Meta 150–160 chars, unique per page. [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md]
- No keyword stuffing. [chapters/ch11-aspetto-serp-title-snippet-immagini-video.md, chapters/ch12-promozione-miti-seo.md]

## C-041 S14. Link-earning / digital PR plan
- ask: "How do we earn links without buying them?"
- inputs: proprietary data, tools, experts.
- data: optional DF6, DF10.
- upstream: none
- downstream: feeds S7.
- depth: partial

### steps
1. Choose from legitimate tactics: original research with own data, linkable resources (tools, calculators, glossaries, live dashboards), guest posts on edited publications, HARO/Qwoted/Featured, podcasts/conferences, offline promotion. [chapters/ch12-promozione-miti-seo.md]
2. Pitch individual writers with data, found via the "top 10 articles" ChatGPT query. [chapters/ch03-geo-distribuzione-off-site.md]
### criteria
- No bought links, PBNs, mass group posting or bot engagement. [chapters/ch12-promozione-miti-seo.md]
- Each asset is data- or tool-based, not opinion. [chapters/ch12-promozione-miti-seo.md]
