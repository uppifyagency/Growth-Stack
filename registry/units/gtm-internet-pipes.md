# gtm-internet-pipes

## A-035 Idea list (Generation)
- ask: "Generate business ideas in [area] from real data."
- inputs: area or starting point, geography.
- data: Reddit/Subreddit Stats, HN, Google Trends, Jungle Scout, patent and legislation trackers.
- upstream: none.
- downstream: demand validation.
- depth: full

### steps
1. Declare scope and run plan (G0). [runbook.md]
2. Run generation methods: Exploration, Affirmation, Location, Variation, Authorization, Regulation. [chapters/ch06-generation-station.md, chapters/ch07-exploration-station.md, chapters/ch08-affirmation-station.md, chapters/ch09-location-station.md, chapters/ch10-variation-station.md]
3. Derive seeds from data; tag own hunches `[hunch · Survey-tier]` and keep them a minority (G1). [runbook.md]
4. Log everything uncritically in the Idea Log. [chapters/ch06-generation-station.md, chapters/ch03-appreciation-station.md]
### criteria
- Every idea names its generation method and data source (G1). [runbook.md]
- Hunches are tagged and are a minority (G1). [runbook.md]
- No ideas filtered out at this stage. [chapters/ch06-generation-station.md]
- Scope line is present (G0). [runbook.md]

## A-036 Demand validation report
- ask: "Is there real demand for [idea]?"
- inputs: idea list, market/geo.
- data: search volume (Keywords Everywhere/DataForSEO), Google Trends, Jungle Scout/AppMagic/Koala, Reddit.
- upstream: idea list.
- downstream: competitor matrix.
- depth: full

### steps
1. Attempt Sales tier first (Amazon/Jungle Scout, app revenue, store data) (G2). [runbook.md, chapters/ch11-validation-station.md]
2. Pull Search tier (volumes, Trends). [chapters/ch11-validation-station.md]
3. Triangulate across several mega-platforms. [chapters/ch11-validation-station.md]
4. Look for disconfirming evidence; record invalidated ideas. [chapters/ch11-validation-station.md]
5. Confirm each trend with 2 independent sources; disclose granularity; add confidence tag (G3). [runbook.md]
### criteria
- Headline names the highest tier actually reached (G2). [runbook.md]
- Every claim has 2 independent sources (G3). [runbook.md]
- Each finding has a High/Med/Low confidence tag (G3). [runbook.md]
- Data granularity caveat is stated (G3). [runbook.md]
- Invalidated ideas are listed, not hidden. [chapters/ch11-validation-station.md]
- Search-only results are not called a validated market (G2). [runbook.md]

## A-037 Competitor evaluation matrix (3 x 8)
- ask: "Analyse the competitors in [space]."
- inputs: validated idea, competitor names.
- data: BuiltWith, SimilarWeb, FB Ad Library, Jungle Scout/Koala/AppMagic, Owletter, SparkToro, reviews.
- upstream: demand validation.
- downstream: review gap list, differentiation brief, positioning alternatives (Dunford).
- depth: full

### steps
1. Pick 3 or more competitors, direct and indirect (Answer the Public X-vs-Y) (G4). [runbook.md, chapters/ch12-evaluation-station.md]
2. Answer the 8 questions per competitor: build, priorities, pricing, traffic, competitors, metrics, messaging, reputation. [chapters/ch12-evaluation-station.md]
3. Mark each cell answered/inferred/blocked; substitute and label blocked tools (G4). [runbook.md]
4. Flag long-running ads as winners. [chapters/ch12-evaluation-station.md]
5. Note search-without-sales caveats. [chapters/ch12-evaluation-station.md]
### criteria
- At least 3 competitors (G4). [runbook.md]
- All 8 questions have a cell per competitor (G4). [chapters/ch12-evaluation-station.md, runbook.md]
- Every cell has a status (G4). [runbook.md]
- Each answer names the tool or substitute used (G4). [chapters/ch12-evaluation-station.md, runbook.md]
- Reputation uses 2 to 3 star reviews. [chapters/ch12-evaluation-station.md]

## A-038 Review gap list (2 to 3 star mine)
- ask: "What do customers hate about the leading products?"
- inputs: competitor products, review sources.
- data: Amazon/app store/G2-type reviews, Reddit.
- upstream: competitor matrix.
- downstream: differentiation brief, Hormozi problems list, Dunford unique attributes.
- depth: full

### steps
1. Skip 5 and 1 star reviews. [chapters/ch12-evaluation-station.md]
2. Read 2 to 3 star reviews for "wanted to love it, but". [chapters/ch12-evaluation-station.md]
3. Add solution requests from communities (Gummy Search). [chapters/ch13-differentiation-station.md]
4. Cluster gaps; require 3 data points per wedge (G4). [runbook.md]
### criteria
- Only 2 to 3 star reviews used as primary source. [chapters/ch12-evaluation-station.md]
- Each gap has quoted evidence. [chapters/ch12-evaluation-station.md]
- Gaps with fewer than 3 data points are labelled hypotheses (G4). [runbook.md]

## A-039 Differentiation brief (axis and audience lingo)
- ask: "How should we stand out in [space]?"
- inputs: review gap list, target audience.
- data: Reddit/community tools, reviews, search data.
- upstream: review gap list.
- downstream: positioning (Dunford), offer (Hormozi), copy.
- depth: full

### steps
1. Mine audience language and needs: Gummy Search, GigaBrain, Answer the Public. [chapters/ch13-differentiation-station.md]
2. Localize community sources outside the US; rate confidence (G5). [runbook.md]
3. Record the audience's own terms, with search curves where possible. [chapters/ch13-differentiation-station.md]
4. Pick one axis (design, speed, cost, variety) matching what the audience values. [chapters/ch13-differentiation-station.md]
### criteria
- Exactly one axis chosen. [chapters/ch13-differentiation-station.md]
- Axis is justified by audience evidence, not by copying a famous company. [chapters/ch13-differentiation-station.md]
- Brief lists the audience's exact terms. [chapters/ch13-differentiation-station.md]
- Community source confidence is stated (G5). [runbook.md]
- Wedge rests on 3 or more data points (G4). [runbook.md]

## A-040 Audience and community research (tool-chain)
- ask: "Research this community / audience for me."
- inputs: a starting point (subreddit, keyword, product).
- data: Reddit tools, Answer the Public, keyword tool.
- upstream: none.
- downstream: idea list, differentiation brief, Mom Test segment.
- depth: full

### steps
1. Size and growth: Subreddit Stats / Gummy Search. [chapters/ch05-preparation-station.md, patterns.md]
2. Problems and language: Gummy Search, GigaBrain. [patterns.md]
3. Adjacent communities: anvaka "say it". [chapters/ch05-preparation-station.md]
4. Real questions: Answer the Public / Also Asked. [chapters/ch05-preparation-station.md]
5. Demand and datasets: Keywords Everywhere, Trends, Dataset Search. [chapters/ch05-preparation-station.md]
6. Visualize the finding. [chapters/ch05-preparation-station.md]
### criteria
- Each step names the tool and result. [patterns.md]
- Size and growth are numbers with source. [chapters/ch05-preparation-station.md]
- Adjacent communities are listed. [chapters/ch05-preparation-station.md]
- Community signal is localized or flagged as US proxy (G5). [runbook.md]

## A-041 Trend timing report (seasonality and geo)
- ask: "When and where does demand for [term] peak?"
- inputs: term or product.
- data: Google Trends, WikiPulse, eRank.
- upstream: idea list.
- downstream: urgency/seasonal promos (Hormozi ch10), campaign calendar.
- depth: full

### steps
1. Google Trends over time; find spikes. [chapters/ch10-variation-station.md]
2. Confirm with WikiPulse and eRank. [chapters/ch10-variation-station.md]
3. Trace what the spike links to (e.g. aspirational self). [chapters/ch10-variation-station.md]
4. Trends subregion view: concentration vs empty regions. [chapters/ch09-location-station.md]
5. Check cross-border signals (gastrodiplomacy, foreign rankings). [chapters/ch09-location-station.md]
### criteria
- Spike date is precise, not a month blob. [chapters/ch10-variation-station.md]
- Seasonality confirmed on 2 or more sources (G3). [chapters/ch10-variation-station.md, runbook.md]
- Motivation behind the spike is stated. [chapters/ch10-variation-station.md]
- Concentration regions and white-space regions are both listed. [chapters/ch09-location-station.md]

## A-042 GTM investigation report with coverage ledger
- ask: "Run the full Internet Pipes process on [topic]."
- inputs: topic, geo, scope level.
- data: as per stations.
- upstream: none (wraps all).
- downstream: positioning, offer.
- depth: full

### steps
1. Declare scope: Recon, Standard or Full E2E, with run plan (G0). [runbook.md]
2. Generation (G1). [runbook.md, chapters/ch06-generation-station.md]
3. Validation with hierarchy and two sources (G2, G3). [runbook.md, chapters/ch11-validation-station.md]
4. Evaluation 3 x 8 (G4). [runbook.md, chapters/ch12-evaluation-station.md]
5. Differentiation, localized (G5). [runbook.md, chapters/ch13-differentiation-station.md]
6. Fill the ledger per station: EXECUTED/PARTIAL/BLOCKED/SKIPPED with artifact (G6). [runbook.md]
7. Run the pre-flight checklist and honesty gate. [runbook.md]
### criteria
- Scope level stated at top (G0). [runbook.md]
- Ledger present, every in-scope station has a status and evidence (G6). [runbook.md]
- EXECUTED only with a concrete artifact (G6). [runbook.md]
- Words "complete/E2E/all stations/done" absent unless all EXECUTED (G6). [runbook.md]
- Headline leads with highest tier reached (G2). [runbook.md]
- No confident claim rests on one source (G3). [runbook.md]

## A-043 Data visualization of a finding
- ask: "Make a chart that tells this story."
- inputs: a dataset from the research.
- data: dataset; Flourish.
- upstream: any research deliverable.
- downstream: content.
- depth: partial

### steps
1. Trace data to source. [chapters/ch05-preparation-station.md, chapters/ch14-visualization-station.md]
2. Build with Flourish or similar. [chapters/ch14-visualization-station.md]
3. Encode uncertainty (ranges, caveats, "directional") (G3). [runbook.md]
### criteria
- The chart can be traced to its underlying data source. [chapters/ch14-visualization-station.md]
- Uncertainty encoded (G3). [runbook.md]
