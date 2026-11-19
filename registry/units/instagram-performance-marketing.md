# instagram-performance-marketing

## B-014 I1. Meta conversion campaign build sheet (sterile launch)
- ask: "Set up my Meta/Instagram conversion campaign."
- inputs: desired action (purchase, lead, install), Pixel/dataset, page, budget, special ad category.
- data: Meta Ads Manager, Pixel.
- upstream: I2, I3, I4, landing page (I5 or F4).
- downstream: I7, I10.
- depth: full

### steps
1. Name the literal action; pick the matching objective (Sales, Engagement + lead forms, App Installs). [chapters/ch04-campaign-objectives.md]
2. Build manually; Advantage Campaign Budget OFF; A/B Test OFF; one ad set. [chapters/ch11-ad-settings.md]
3. Conversion location (usually Website), Pixel dataset + event, Performance Goal = Maximize Number of Conversions, Cost per Result Goal blank. [chapters/ch11-ad-settings.md]
4. Dynamic Creative OFF, Browser Add-ons blank, dynamic Languages off. [chapters/ch11-ad-settings.md]
5. Manual placements, Audience Network unchecked. [chapters/ch11-ad-settings.md]
6. Schedule to peak hours; CTA verb matching the action. [chapters/ch11-ad-settings.md]
### criteria
- Objective matches the stated action (not Traffic for purchases). [chapters/ch04-campaign-objectives.md]
- Exactly one ad set. [chapters/ch11-ad-settings.md]
- Advantage Campaign Budget, A/B Test, Dynamic Creative all OFF. [chapters/ch11-ad-settings.md]
- Audience Network excluded. [chapters/ch11-ad-settings.md]
- Cost per Result Goal blank. [chapters/ch11-ad-settings.md]
- CTA verb matches the action. [chapters/ch11-ad-settings.md]
- Schedule is not 24/7. [chapters/ch11-ad-settings.md]

## B-015 I2. Audience and GEO targeting plan (algorithm data stack)
- ask: "Build my audiences and geo targeting to lower CPM/CPA."
- inputs: customer list (CSV fields), best-customer segment, whether location matters to fulfillment, markets/languages.
- data: customer CSV, Meta Audience Manager, third-party search-intent feed (paid).
- upstream: customer list (E10 can supply).
- downstream: I1, I8.
- depth: full

### steps
1. Upload customer list (First/Last Name, Email, Phone, City, State, Zip) as Custom Audience. [chapters/ch05-audience-targeting.md]
2. Seed from best customers, at least ~1,000, exclude converters. [chapters/ch14-lookalike-audiences.md]
3. Build 0-3% (or 1-10%) Lookalike; size by goal. [chapters/ch17-training-the-algorithm.md]
4. Expand geo to converting countries (author's 10-country set) when location is irrelevant; target English (All); localize per market. [chapters/ch06-geo-targeting.md]
5. Add Google Search Audience Feed and its Lookalike. [chapters/ch05-audience-targeting.md]
6. Layer manual interests and job titles; raise min age for decision makers. [chapters/ch11-ad-settings.md]
7. Add Pixel-based Lookalikes once tracking supports it. [chapters/ch17-training-the-algorithm.md]
### criteria
- Seed size stated and at least ~1,000. [chapters/ch14-lookalike-audiences.md]
- Lookalike % stated with the goal it serves. [chapters/ch14-lookalike-audiences.md]
- Converted customers excluded. [chapters/ch14-lookalike-audiences.md]
- Geo expansion justified by "location does not affect fulfillment". / [patterns.md, chapters/ch06-geo-targeting.md]
- Each non-English market has localized language/currency/imagery. [chapters/ch06-geo-targeting.md]
- Location intent type chosen (living in, recently in, traveling in, radius). [chapters/ch06-geo-targeting.md]

## B-016 I3. Video ad creative brief (AI/UGC)
- ask: "Brief/script the video ads for this campaign."
- inputs: audience psychographics and journey stage, typical customer look, value proposition.
- data: AI video tool (book names Captions.ai).
- upstream: I4 (copy), offer.
- downstream: I1, I8 (watch-time audiences).
- depth: full

### steps
1. Understand the audience beyond demographics; map journey stage and platform. [chapters/ch07-ad-creative.md]
2. Write magnetic headline and instant hook (visual/text). [chapters/ch07-ad-creative.md]
3. Plan visuals: mobile-first, captions, consistent branding. [chapters/ch07-ad-creative.md]
4. Produce 2-3 UGC-style variations testing gender/age/appearance matched to the customer. [chapters/ch07-ad-creative.md]
5. Benefit copy + compelling CTA; optional gradient + static text on bottom half. [chapters/ch07-ad-creative.md]
6. Plan retargeting from watchers and refresh cadence. [chapters/ch07-ad-creative.md]
### criteria
- 2-3 variants exist, each differing on avatar attributes. [chapters/ch07-ad-creative.md]
- Each video 17-60s, ideally under 30s. [chapters/ch07-ad-creative.md]
- Hook lands in the first seconds. [chapters/ch07-ad-creative.md]
- Copy states benefits, not features. [chapters/ch07-ad-creative.md]
- Captions present. [chapters/ch07-ad-creative.md]
- Any text overlay covers only the bottom half. [chapters/ch07-ad-creative.md]

## B-017 I4. Ad copy set (primary text, headline, description, CTA)
- ask: "Write the primary text, headline and description for my Meta ad."
- inputs: audience pains, dreams, fears, own language; UVP; objective; social proof.
- data: Meta targeting insights.
- upstream: none.
- downstream: I3, I1.
- depth: full

### steps
1. "First Date": list audience pains, dreams, fears in their words. [chapters/ch12-primary-text-headline-description.md]
2. Choose one specific emotion for the hook. [chapters/ch12-primary-text-headline-description.md]
3. Headline: under 25 characters, action verb, UVP, number or question. [chapters/ch12-primary-text-headline-description.md]
4. Description/body: benefits, reader as hero, short, jargon-free, social proof. [chapters/ch12-primary-text-headline-description.md]
5. CTA aligned to objective with honest urgency. [chapters/ch12-primary-text-headline-description.md]
6. Variants for A/B on CTR, conversion rate, CPA. [chapters/ch12-primary-text-headline-description.md]
### criteria
- Headline is 25 characters or fewer. [chapters/ch12-primary-text-headline-description.md]
- Headline starts with an action verb. [chapters/ch12-primary-text-headline-description.md]
- Body names one specific emotion. [chapters/ch12-primary-text-headline-description.md]
- Reader is the subject of benefit sentences. [chapters/ch12-primary-text-headline-description.md]
- Includes social proof. [chapters/ch12-primary-text-headline-description.md]
- CTA is not "Learn More" and matches the objective. [chapters/ch12-primary-text-headline-description.md]
- No fake urgency. [chapters/ch12-primary-text-headline-description.md]

## B-018 I5. Landing page audit / spec for ad traffic
- ask: "Audit my landing page for Meta traffic."
- inputs: page URL or draft, ad promise, traffic device split.
- data: page analytics, heatmap tool.
- upstream: I4.
- downstream: I1.
- depth: partial

### steps
1. Check the six elements (headline, CTA, persuasive copy, visuals, trust signals, seamless UX). [chapters/ch08-landing-page-optimization.md]
2. Apply design rules (mobile-first, above the fold, hierarchy, whitespace, speed). [chapters/ch08-landing-page-optimization.md]
3. Apply mobile tips (thumb-friendly, concise, vertical scroll). [chapters/ch08-landing-page-optimization.md]
4. Verify forms work in the in-app browser. [chapters/ch02-common-mistakes.md]
5. Set up test loop: A/B, heatmaps, conversion tracking. [chapters/ch08-landing-page-optimization.md]
### criteria
- Headline and CTA visible without scrolling on mobile. [chapters/ch08-landing-page-optimization.md]
- All six elements present. [chapters/ch08-landing-page-optimization.md]
- Headline matches the ad promise. [chapters/ch08-landing-page-optimization.md]
- Contains at least one trust signal. [chapters/ch08-landing-page-optimization.md]
- CTA button thumb-sized. [chapters/ch08-landing-page-optimization.md]

## B-019 I6. Post-click lead nurture automation map
- ask: "What happens after someone fills my lead form?"
- inputs: lead fields captured, segments, channels available, sales capacity.
- data: CRM / marketing automation tool.
- upstream: I1.
- downstream: sales.
- depth: partial

### steps
1. Capture and segment leads from ad interactions. [chapters/ch09-post-engagement-optimization.md]
2. Personalized content per segment. [chapters/ch09-post-engagement-optimization.md]
3. Behavioral triggers (visits, opens, downloads). [chapters/ch09-post-engagement-optimization.md]
4. Lead scoring to prioritize. [chapters/ch09-post-engagement-optimization.md]
5. Assign channel by urgency (email, SMS, social DM, chatbot); trigger instantly. [chapters/ch09-post-engagement-optimization.md, chapters/ch03-seven-pillars.md]
### criteria
- First touch fires immediately on form submit. [chapters/ch03-seven-pillars.md]
- At least two segments with different content. [chapters/ch09-post-engagement-optimization.md]
- Each message has a behavioral trigger. [chapters/ch09-post-engagement-optimization.md]
- A scoring rule exists. [chapters/ch09-post-engagement-optimization.md]

## B-020 I7. Launch budget and learning-phase plan (Accelerated Ad Spend)
- ask: "How do I budget the launch and when do I scale or kill?"
- inputs: target CPA, early CPM/CPA, conversion volume expected.
- data: ad account metrics (CPM, CPA, impressions, conversions).
- upstream: I1, H7 (target CPA).
- downstream: I10.
- depth: full

### steps
1. Launch ~$500/day per campaign to reach ~50 conversion events (aim 24-48h, max 7 days). [chapters/ch10-blowing-your-budget.md]
2. Accelerate only if early CPA is within 50-60% of target and CPM is low. [chapters/ch10-blowing-your-budget.md]
3. Freeze major edits during learning. [chapters/ch10-blowing-your-budget.md]
4. Kill after ~10,000 impressions without traction; test objective, conversion location, creative, audiences, interests, geo. [chapters/ch10-blowing-your-budget.md]
5. Test Objective x Conversion Location in parallel; keep lowest CPM/CPA. [chapters/ch17-training-the-algorithm.md]
6. Scale toward 1,000 conversion events. [chapters/ch17-training-the-algorithm.md]
### criteria
- States the 50-event target and time window. [chapters/ch10-blowing-your-budget.md]
- Has an explicit go/no-go rule tied to target CPA. [chapters/ch10-blowing-your-budget.md]
- Has a 10k-impression kill rule. [chapters/ch10-blowing-your-budget.md]
- Lists which elements to vary after a kill. [chapters/ch10-blowing-your-budget.md]
- States no major edits during learning. [chapters/ch10-blowing-your-budget.md]

## B-021 I8. Retargeting campaign plan
- ask: "Set up retargeting for visitors and cart abandoners."
- inputs: Pixel events, catalog (for Dynamic Ads), video view data, offers/coupons.
- data: Meta Pixel, product catalog, Custom Audiences.
- upstream: I1, I3.
- downstream: I10.
- depth: full

### steps
1. Segment: Website Visitors, Engaged Social Users (e.g. ~75% video watchers), Cart Abandoners, Lookalikes. [chapters/ch13-retargeting-audiences.md]
2. Message per segment; Dynamic Ads with the exact product for abandoners, often with coupon/free shipping. [chapters/ch13-retargeting-audiences.md]
3. Add honest scarcity/urgency overlays. [chapters/ch13-retargeting-audiences.md]
4. Cap frequency at 3-5/week. [chapters/ch13-retargeting-audiences.md]
5. Monitor CTR, conversion rate, CPC; A/B test; refresh creative. [chapters/ch13-retargeting-audiences.md]
### criteria
- Each segment has its own message. [chapters/ch13-retargeting-audiences.md]
- Cart abandoners get Dynamic Ads of viewed products. [chapters/ch13-retargeting-audiences.md]
- Frequency cap 3-5/week stated. [chapters/ch13-retargeting-audiences.md]
- Refresh cadence and fatigue metric stated. [chapters/ch13-retargeting-audiences.md]

## B-022 I9. Ad A/B test plan
- ask: "Plan an A/B test for my ads."
- inputs: objective, candidate variable, audience size, budget.
- data: Meta Ads Manager.
- upstream: I1.
- downstream: I10.
- depth: full

### steps
1. Select objective and goal metric. [chapters/ch15-ab-testing.md]
2. Pick one variable from the high-impact list (copy, visuals, CTA, audience, bid). [chapters/ch15-ab-testing.md]
3. Create variations differing only on it. [chapters/ch15-ab-testing.md]
4. Configure via Ads Manager "A/B Test"; run 7-14 days with adequate sample. [chapters/ch15-ab-testing.md]
5. Decide on significance; if inconclusive, redesign or enlarge sample. [chapters/ch15-ab-testing.md]
### criteria
- Exactly one variable differs. [chapters/ch15-ab-testing.md]
- Duration 7-14 days stated. [chapters/ch15-ab-testing.md]
- Winner metric is goal-aligned (CTR, cost per conversion, CVR, ROI). [chapters/ch15-ab-testing.md]
- Significance rule stated. [chapters/ch15-ab-testing.md]

## B-023 I10. Campaign diagnosis and optimization report
- ask: "My campaign is underperforming. What's wrong and what do I change?"
- inputs: campaign goal, Ads Manager data at campaign, ad set, ad level.
- data: Meta Ads Manager export.
- upstream: I1, I7.
- downstream: I9.
- depth: full

### steps
1. Set goal and its KPIs. [chapters/ch16-campaign-monitoring-optimization.md]
2. Read the dashboard top-down (campaign, ad set, ad). [chapters/ch16-campaign-monitoring-optimization.md]
3. Ask the 4 diagnostic questions (low CTR? high cost per conversion? right audience? device/placement?). [chapters/ch16-campaign-monitoring-optimization.md]
4. Tweak in order: audience, creative, budget/bidding, landing page; small changes. [chapters/ch16-campaign-monitoring-optimization.md]
5. Re-monitor and loop. [chapters/ch16-campaign-monitoring-optimization.md]
### criteria
- One goal and its KPIs named first. [chapters/ch16-campaign-monitoring-optimization.md]
- Each recommended change cites a diagnostic answer. [chapters/ch16-campaign-monitoring-optimization.md]
- Changes are incremental and mapped to one of the 4 levers. [chapters/ch16-campaign-monitoring-optimization.md]
- Bidding mode matches intent (CPC, CPM, Target CPA). [chapters/ch16-campaign-monitoring-optimization.md]
- Clicks-then-bounce attributed to landing page, not ad. [chapters/ch16-campaign-monitoring-optimization.md]
