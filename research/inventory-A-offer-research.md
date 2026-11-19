# Inventory A: offer and research books

Deliverable inventory for the `growth` plugin, slice A (5 books). Every step and criterion comes from the book skill files under `.claude/skills/<book>/`. Chapter paths are relative to each book folder. Where a step comes from a non-chapter file it says so (`patterns.md`, `cheatsheet.md`, `runbook.md`).

Depth key: `full` = the book gives a complete procedure; `partial` = pieces only, a playbook must combine them with another book.

---

## hormozi-offers ($100M Offers, Alex Hormozi)

Book-level order (ch14): pick market, price premium, engineer value, build offer (5 steps), Trim & Stack, enhance (scarcity, urgency, bonuses, guarantees, naming). Each enhancement below assumes the core offer exists.

### Market selection scorecard (Starving Crowd)
- **ask**: "Score these 3 niches and tell me which market to build an offer for."
- **inputs**: candidate markets or niches, what the operator is good at, price range they need to charge.
- **steps**:
  1. Place each candidate inside one of the three durable markets: Health, Wealth, Relationships (`chapters/ch03-starving-crowd.md`).
  2. Score each against the 4 indicators: Massive Pain, Purchasing Power, Easy to Target, Growing (`chapters/ch03-starving-crowd.md`).
  3. Rate market as great / normal / bad; drop any bad (shrinking) market (`chapters/ch03-starving-crowd.md`, Order of Importance table).
  4. Niche down to a specific, findable, funded, growing subgroup (`chapters/ch03-starving-crowd.md`, riches-in-niches table).
  5. Commit to one niche; no niche-hopping (`chapters/ch03-starving-crowd.md`).
- **criteria**:
  - Each candidate has an explicit verdict on all 4 indicators (`chapters/ch03-starving-crowd.md`).
  - No candidate rated "bad"/shrinking is recommended (`chapters/ch03-starving-crowd.md`).
  - Purchasing Power is checked separately from Pain (the resume-for-unemployed anti-pattern) (`chapters/ch03-starving-crowd.md`).
  - "Easy to Target" names concrete channels (associations, lists, groups) (`chapters/ch03-starving-crowd.md`).
  - The chosen market is a sub-niche, not a broad category (`chapters/ch03-starving-crowd.md`).
  - Exactly one market is chosen at the end (`chapters/ch03-starving-crowd.md`).
- **data**: market size/growth evidence, list of targeting channels. The book gives no data source.
- **upstream**: none. **downstream**: Grand Slam Offer build, MAGIC name (avatar).
- **depth**: full (method), but growth/targeting evidence must come from another book (e.g. gtm-internet-pipes).

### Value Equation audit
- **ask**: "Run my offer through the Value Equation and tell me where it's weak."
- **inputs**: the current offer or delivery vehicle, the dream outcome, what is expected of the customer, time to result.
- **steps**:
  1. Name all four drivers explicitly: Dream Outcome, Perceived Likelihood, Time Delay, Effort & Sacrifice (`chapters/ch05-value-equation.md`).
  2. Score each driver 0/1 to compare against an alternative vehicle with the same dream outcome (`chapters/ch05-value-equation.md`, Binary Value Scoring).
  3. Anchor the Dream Outcome to status, framed from others' viewpoint (`chapters/ch05-value-equation.md`).
  4. Add likelihood via proof, track record, guarantees (`chapters/ch05-value-equation.md`).
  5. Spend most effort on the denominator: fast early wins, less effort (`chapters/ch05-value-equation.md`).
  6. Make each improvement visible in how the offer is communicated (`chapters/ch05-value-equation.md`).
- **criteria**:
  - All four drivers are named, none merged (`chapters/ch05-value-equation.md`).
  - Dream Outcome is stated in status terms (`chapters/ch05-value-equation.md`).
  - At least one proof element backs Perceived Likelihood (`chapters/ch05-value-equation.md`).
  - At least one concrete change shortens time to a first result (`chapters/ch05-value-equation.md`).
  - At least one concrete change reduces customer effort (`chapters/ch05-value-equation.md`).
  - Recommendations weight the denominator more than the numerator (`chapters/ch05-value-equation.md`).
- **data**: none beyond operator knowledge; proof assets if they exist.
- **upstream**: market chosen. **downstream**: Grand Slam Offer build (drivers are the problem buckets), bonus stack.
- **depth**: full.

### Grand Slam Offer core (Problems, Solutions, Delivery Vehicles, Trim & Stack)
- **ask**: "Build me a Grand Slam Offer for [avatar] who wants [outcome]."
- **inputs**: chosen market/avatar, dream outcome, what the business can deliver, cost of each delivery mode.
- **steps**:
  1. State the Dream Outcome as big result plus short time delay (`chapters/ch07-offer-problems-solutions.md`).
  2. List every problem the customer hits before/during/after, walking their timeline, prompted by the 4 value drivers; aim for dozens (`chapters/ch07-offer-problems-solutions.md`).
  3. Reverse each problem into "How to ___ without ___" and name it (`chapters/ch07-offer-problems-solutions.md`).
  4. Brainstorm every delivery vehicle per solution using the cheat codes (1-1/group/1-many, DIY/DWY/DFY, medium, format, response speed, 10x and 1/10th test) (`chapters/ch08-offer-trim-and-stack.md`).
  5. Trim: cut high-cost/low-value first, then low-cost/low-value (`chapters/ch08-offer-trim-and-stack.md`).
  6. Stack the survivors into one bundle: problem, solution wording, bundle name, vehicles, $ value each (`patterns.md`, `chapters/ch08-offer-trim-and-stack.md`).
- **criteria**:
  - Dream Outcome includes a time frame (`chapters/ch07-offer-problems-solutions.md`).
  - Problem list covers before, during and after use (`chapters/ch07-offer-problems-solutions.md`).
  - Every problem in the list maps to a solution; none left unaddressed (`chapters/ch07-offer-problems-solutions.md`, `chapters/ch08-offer-trim-and-stack.md`).
  - Every solution is phrased as "How to ___" (`chapters/ch07-offer-problems-solutions.md`).
  - Each kept item is in a high-value quadrant of the value/cost grid; no high-cost/low-value item remains (`chapters/ch08-offer-trim-and-stack.md`).
  - Each stacked item carries a $ value, and the total dwarfs the price (`chapters/ch08-offer-trim-and-stack.md`).
  - At least one one-to-many vehicle is in the stack (`chapters/ch08-offer-trim-and-stack.md`).
- **data**: fulfillment cost per vehicle (operator).
- **upstream**: market scorecard, Value Equation audit. **downstream**: bonus stack, guarantee, scarcity/urgency, MAGIC name, full offer document.
- **depth**: full.

### Premium price decision
- **ask**: "Should I raise my price, and to what?"
- **inputs**: current price, stacked value, competitor prices, delivery track record.
- **steps**:
  1. Do not price off competitors' average (`chapters/ch04-charge-what-its-worth.md`).
  2. Raise value first, then raise price into the VALUE minus PRICE gap (`chapters/ch04-charge-what-its-worth.md`).
  3. Price high enough to signal a category of one and to "sting" (`chapters/ch04-charge-what-its-worth.md`).
  4. Plan reinvestment of margin into delivery (`patterns.md`, Virtuous Cycle).
- **criteria**:
  - Price is justified by stated value, not by competitor average (`chapters/ch04-charge-what-its-worth.md`).
  - Stated value exceeds the price (`chapters/ch04-charge-what-its-worth.md`).
  - No discount is used (`chapters/ch04-charge-what-its-worth.md`).
  - Delivery evidence supports the premium (`chapters/ch04-charge-what-its-worth.md`).
- **data**: competitor prices (only to avoid anchoring on them).
- **upstream**: Grand Slam Offer core. **downstream**: full offer document.
- **depth**: partial (principles and a decision rule, no method to set a number).

### Bonus stack
- **ask**: "Turn my offer into a named, priced bonus stack."
- **inputs**: stacked deliverables, known objections, possible partner products.
- **steps**:
  1. Break the trimmed bundle into discrete bonuses (`chapters/ch11-enhance-bonuses.md`).
  2. For each, write the Bonus Bullets: benefit name; how it relates to their issue, what it is, how it was made, how it improves life; proof; mental image; price tag with justification (`chapters/ch11-enhance-bonuses.md`).
  3. Tie each bonus to a specific objection or the next problem (`chapters/ch11-enhance-bonuses.md`).
  4. Prefer tools/checklists/templates over extra trainings (`chapters/ch11-enhance-bonuses.md`).
  5. Optionally source partner bonuses and negotiate group discount plus commission (`chapters/ch11-enhance-bonuses.md`).
  6. Add scarcity or urgency to the bonuses (`chapters/ch11-enhance-bonuses.md`).
- **criteria**:
  - Every bonus has a name with a benefit in it (`chapters/ch11-enhance-bonuses.md`).
  - Every bonus has a price tag and a justification (`chapters/ch11-enhance-bonuses.md`).
  - Every bonus names the objection or next problem it removes (`chapters/ch11-enhance-bonuses.md`).
  - Every bonus has a proof element (`chapters/ch11-enhance-bonuses.md`).
  - Total bonus value exceeds the core offer value (`chapters/ch11-enhance-bonuses.md`).
  - Core price is not discounted (`chapters/ch11-enhance-bonuses.md`).
  - For 1-1 selling, the script asks for the sale before revealing bonuses (`chapters/ch11-enhance-bonuses.md`).
- **data**: none; partner list optional.
- **upstream**: Grand Slam Offer core. **downstream**: full offer document, sales page copy (other books).
- **depth**: full.

### Guarantee
- **ask**: "Write me a guarantee for this offer."
- **inputs**: offer, ticket size, fulfillment cost, the actions that drive success, refund history if any.
- **steps**:
  1. Pick the type by business: unconditional (low-ticket B2C), conditional (high-ticket/B2B), anti-guarantee, implied/performance (`chapters/ch12-enhance-guarantees.md`).
  2. Write it as "If you don't get X in Y time, we will Z" (`chapters/ch12-enhance-guarantees.md`).
  3. For conditional: tie conditions to success actions and make Z better than money back (`chapters/ch12-enhance-guarantees.md`).
  4. Run the guarantee math on expected sales and refunds (`chapters/ch12-enhance-guarantees.md`).
  5. Optionally stack guarantees; name it vividly (`chapters/ch12-enhance-guarantees.md`).
- **criteria**:
  - Statement contains a specific result X, a time Y and a consequence Z (`chapters/ch12-enhance-guarantees.md`).
  - Type matches ticket and fulfillment cost (no unconditional on high-cost fulfillment) (`chapters/ch12-enhance-guarantees.md`).
  - Conditional terms are success-driving actions, not arbitrary hurdles (`chapters/ch12-enhance-guarantees.md`).
  - Anti-guarantee includes a reason-why (`chapters/ch12-enhance-guarantees.md`).
  - Implied guarantee rests on a measurable outcome (`chapters/ch12-enhance-guarantees.md`).
  - Guarantee has a name other than "30 Day Money Back" (`chapters/ch12-enhance-guarantees.md`).
  - Net-sales math is shown (`chapters/ch12-enhance-guarantees.md`).
- **data**: baseline conversion and refund rate (operator).
- **upstream**: Grand Slam Offer core. **downstream**: full offer document.
- **depth**: full.

### Scarcity and urgency plan
- **ask**: "Add real scarcity and urgency to my offer."
- **inputs**: true capacity, sales cadence, product type (physical/service), seasonal calendar.
- **steps**:
  1. Pick scarcity type: limited seats, limited bonuses, never again; for services pick Total Business Cap, Growth-Rate Cap or Cohort Cap (`chapters/ch09-enhance-scarcity.md`).
  2. Set the cap below what can be sold; plan to announce sellouts (`chapters/ch09-enhance-scarcity.md`).
  3. Pick at least one urgency type: rolling cohorts, rolling seasonal, pricing/bonus deadline, exploding opportunity (`chapters/ch10-enhance-urgency.md`).
  4. Attach urgency to promo/price/bonus, not the service, when the service is year-round (`chapters/ch10-enhance-urgency.md`).
  5. Display real dates; plan price-increase announcements (`chapters/ch10-enhance-urgency.md`).
- **criteria**:
  - Every cap and deadline is real and honoured (`chapters/ch09-enhance-scarcity.md`, `chapters/ch10-enhance-urgency.md`).
  - Cap is set below expected demand (`chapters/ch09-enhance-scarcity.md`).
  - Plan includes announcing the sellout (`chapters/ch09-enhance-scarcity.md`).
  - At least one named urgency type with a concrete date or cadence (`chapters/ch10-enhance-urgency.md`).
  - Year-round services use promo/bonus urgency, not a fake service deadline (`chapters/ch10-enhance-urgency.md`).
- **data**: capacity numbers (operator).
- **upstream**: Grand Slam Offer core, bonus stack. **downstream**: full offer document, MAGIC name (reason-why).
- **depth**: full.

### Offer name (MAGIC) and test slate
- **ask**: "Name my offer" / "Give me 5 names to test."
- **inputs**: avatar, dream outcome, time to result, promo reason, container concept.
- **steps**:
  1. Draft components: Magnetic reason-why, Avatar, Goal, Interval, Container word (`chapters/ch13-enhance-naming.md`).
  2. Write several names using 3 to 5 components in any order (`chapters/ch13-enhance-naming.md`).
  3. Check compliance: no quantified claim plus duration on regulated platforms (`chapters/ch13-enhance-naming.md`).
  4. Pick 2 to 3 to test; keep the winner as control (`chapters/ch13-enhance-naming.md`).
  5. Apply MAGIC to each bonus/stack item too (`chapters/ch13-enhance-naming.md`).
- **criteria**:
  - Each name uses 3 to 5 MAGIC components (`chapters/ch13-enhance-naming.md`).
  - Avatar is specific (hyper-local for local businesses) (`chapters/ch13-enhance-naming.md`).
  - Goal is a tangible dream outcome (`chapters/ch13-enhance-naming.md`).
  - No name pairs a quantified money claim with a duration (`chapters/ch13-enhance-naming.md`).
  - At least 2 names are delivered for testing (`chapters/ch13-enhance-naming.md`).
- **data**: ad platform for testing (optional).
- **upstream**: market scorecard (avatar), Grand Slam Offer core (goal). **downstream**: ads and landing page copy (other books), fatigue refresh.
- **depth**: full.

### Offer fatigue refresh plan
- **ask**: "My offer stopped converting, what do I change?"
- **inputs**: current offer, current creative/copy/name, how long it has run.
- **steps**:
  1. Change in order from lightest: creative, body copy, headline/wrapper (rename), seasonality, duration, enhancer, monetization (`chapters/ch13-enhance-naming.md`).
  2. Exhaust each level before the next (`chapters/ch13-enhance-naming.md`).
  3. Keep the core offer unchanged when renaming (`chapters/ch13-enhance-naming.md`).
- **criteria**:
  - Proposed change starts at the lightest untried level (`chapters/ch13-enhance-naming.md`).
  - Pricing/monetization is not touched while lighter levels remain (`chapters/ch13-enhance-naming.md`).
  - Fatigue is not declared after a single exposure (`chapters/ch13-enhance-naming.md`).
- **data**: campaign performance data.
- **upstream**: MAGIC name, live campaign. **downstream**: none.
- **depth**: full (short).

### Grand Slam Offer document (end-to-end assembly)
- **ask**: "Write the complete offer document for my business."
- **inputs**: all of the above.
- **steps**:
  1. Refuse commodity/price competition (`chapters/ch14-your-first-100k.md`).
  2. Pick a Starving Crowd (`chapters/ch14-your-first-100k.md`, `chapters/ch03-starving-crowd.md`).
  3. Set a premium price (`chapters/ch04-charge-what-its-worth.md`).
  4. Engineer value with the four drivers (`chapters/ch05-value-equation.md`).
  5. Build offer: dream outcome, problems, solutions, vehicles (`chapters/ch07-offer-problems-solutions.md`).
  6. Trim & Stack (`chapters/ch08-offer-trim-and-stack.md`).
  7. Enhance: scarcity, urgency, bonuses, guarantee, name (`chapters/ch09`..`ch13`).
- **criteria**:
  - Every section of the 7-step pipeline is present (`chapters/ch14-your-first-100k.md`).
  - The offer is not described as cheaper than competitors (`chapters/ch02-commodity-problem.md`, `chapters/ch04-charge-what-its-worth.md`).
  - Stack value exceeds price (`chapters/ch08-offer-trim-and-stack.md`).
  - Guarantee follows X/Y/Z (`chapters/ch12-enhance-guarantees.md`).
  - Name follows MAGIC (`chapters/ch13-enhance-naming.md`).
  - Lead generation is flagged as a separate next step (`chapters/ch14-your-first-100k.md`).
- **data**: as per components.
- **upstream**: every Hormozi deliverable above. **downstream**: lead gen (hormozi-leads), copy, sales scripts.
- **depth**: full.

Not included (topic only, no procedure): Commodity problem diagnosis (ch02), divergent-thinking Brick exercise (ch06, a warm-up for step 2 of the offer build).

---

## dunford-positioning (Obviously Awesome, April Dunford)

The 10-step process (`patterns.md`) is one chain; Steps 4 to 8 produce the canvas columns. Each step can be asked for separately but each assumes the previous one.

### Best-fit customer list (Step 1)
- **ask**: "Who are our best-fit customers and why do they love us?"
- **inputs**: customer list with purchase speed, retention, referral and reference behaviour.
- **steps**:
  1. Shortlist customers who understood quickly, bought fast, became fans, refer and act as references (`chapters/ch04-step1-customers-who-love-you.md`).
  2. Survey or study only these ecstatic customers, not the average (`chapters/ch04-step1-customers-who-love-you.md`).
  3. Extract the pattern of why they bought (`chapters/ch04-step1-customers-who-love-you.md`).
  4. If too few happy customers exist, keep positioning loose (fishing-net) (`chapters/ch04-step1-customers-who-love-you.md`).
- **criteria**:
  - List is filtered to ecstatic customers only (`chapters/ch04-step1-customers-who-love-you.md`).
  - Each listed customer meets the best-fit traits (bought quickly, loves it, refers) (`chapters/ch04-step1-customers-who-love-you.md`).
  - The artifact states whether there are enough fans to see a pattern (`chapters/ch04-step1-customers-who-love-you.md`).
  - Positioning target is customers, not investors (`chapters/ch04-step1-customers-who-love-you.md`).
- **data**: CRM/customer data, customer survey or interviews.
- **upstream**: none. **downstream**: competitive alternatives, who cares a lot.
- **depth**: partial (how to select; the book gives no interview technique; pair with fitzpatrick-mom-test).

### Positioning workshop plan (Steps 2 and 3)
- **ask**: "Plan our positioning workshop."
- **inputs**: org chart, business leader, product history.
- **steps**:
  1. Name the business leader as owner (`chapters/ch05-step2-positioning-team.md`).
  2. Invite 1 to 2 senior people per function (marketing, sales, CS, product), 3 to 12 total (`chapters/ch05-step2-positioning-team.md`).
  3. Book an outside facilitator (`chapters/ch05-step2-positioning-team.md`).
  4. First hour: align vocabulary on positioning and its components (`chapters/ch06-step3-vocabulary-and-baggage.md`).
  5. Name positioning baggage and where history leaks into current positioning; agree to suspend old opinions (`chapters/ch06-step3-vocabulary-and-baggage.md`).
- **criteria**:
  - Business leader (not marketing) owns it (`chapters/ch05-step2-positioning-team.md`).
  - Product/dev is in the room (`chapters/ch05-step2-positioning-team.md`).
  - Team size is between 3 and 12 (`chapters/ch05-step2-positioning-team.md`).
  - Agenda has a vocabulary-alignment block before the work (`chapters/ch06-step3-vocabulary-and-baggage.md`).
  - Agenda has an explicit baggage step (`chapters/ch06-step3-vocabulary-and-baggage.md`).
- **data**: none.
- **upstream**: best-fit customer list. **downstream**: Steps 4 to 10.
- **depth**: full (for a team setting; for a solo founder it collapses to step 5).

### Competitive alternatives list (Step 4)
- **ask**: "What do we really compete against?"
- **inputs**: best-fit customer list; their answers to "what would you do if we didn't exist?"
- **steps**:
  1. Ask (or infer for) best-fit customers: what would you do if we didn't exist (`chapters/ch07-step4-competitive-alternatives.md`).
  2. Include non-product alternatives: spreadsheet, intern, do nothing (`chapters/ch07-step4-competitive-alternatives.md`).
  3. Drop competitors with near-zero mindshare (`chapters/ch07-step4-competitive-alternatives.md`).
  4. Rank most to least common (`chapters/ch07-step4-competitive-alternatives.md`).
  5. Group into 2 to 5 clusters (`chapters/ch07-step4-competitive-alternatives.md`).
- **criteria**:
  - Alternatives come from best-fit customers' view, not the team's worries (`chapters/ch07-step4-competitive-alternatives.md`).
  - At least one non-product alternative is considered (`chapters/ch07-step4-competitive-alternatives.md`).
  - List is ranked by frequency (`chapters/ch07-step4-competitive-alternatives.md`).
  - Alternatives are grouped into 2 to 5 groups (`chapters/ch07-step4-competitive-alternatives.md`).
- **data**: customer interviews or sales loss/win notes.
- **upstream**: best-fit customer list. **downstream**: unique attributes.
- **depth**: full.

### Unique attributes and value themes (Steps 5 and 6)
- **ask**: "What makes us different and why does it matter?"
- **inputs**: competitive alternatives list, product capabilities, delivery/business model, proof assets.
- **steps**:
  1. List every attribute alternatives lack: features, delivery, business model, expertise, partnerships; include negative-seeming ones (`chapters/ch08-step5-unique-attributes.md`).
  2. Focus on consideration attributes over retention ones (`chapters/ch08-step5-unique-attributes.md`).
  3. Attach proof to each (third-party, data, quote) (`chapters/ch08-step5-unique-attributes.md`).
  4. Translate each: feature, benefit, value tied to a customer goal; apply the "so what?" test (`chapters/ch09-step6-map-to-value.md`).
  5. Cluster from the customer's view into 1 to 4 value themes (`chapters/ch09-step6-map-to-value.md`).
- **criteria**:
  - Attributes are features/capabilities, not claims like "great service" (`chapters/ch08-step5-unique-attributes.md`).
  - Each attribute is unique relative to the listed alternatives (`chapters/ch07-step4-competitive-alternatives.md`, `chapters/ch08-step5-unique-attributes.md`).
  - Each value statement ends at a customer goal, not at a benefit (`chapters/ch09-step6-map-to-value.md`).
  - Each value theme has proof (`chapters/ch08-step5-unique-attributes.md`, `chapters/ch09-step6-map-to-value.md`).
  - There are 1 to 4 themes (`chapters/ch09-step6-map-to-value.md`).
- **data**: proof (reviews, analyst notes, customer quotes, metrics).
- **upstream**: competitive alternatives. **downstream**: who cares a lot, canvas, sales story.
- **depth**: full.

### Target segment definition (Step 7, who cares a lot)
- **ask**: "Who should we target first?"
- **inputs**: value themes, best-fit customer traits, near-term sales target.
- **steps**:
  1. For each value theme ask "who cares and why?" (`chapters/ch10-step7-who-cares-a-lot.md`).
  2. Write an actionable segment: identifiable characteristics that make them care, beyond demographics (`chapters/ch10-step7-who-cares-a-lot.md`).
  3. Check it is big enough for goals and has specific unmet needs (`chapters/ch10-step7-who-cares-a-lot.md`).
  4. Narrow as far as the near-term sales target allows (`chapters/ch10-step7-who-cares-a-lot.md`).
- **criteria**:
  - Segment is defined by observable characteristics tied to the value, not demographics only (`chapters/ch10-step7-who-cares-a-lot.md`).
  - Size is checked against the business goal (`chapters/ch10-step7-who-cares-a-lot.md`).
  - A shared unmet need is named (`chapters/ch10-step7-who-cares-a-lot.md`).
  - Each segment trait links to a value theme (`chapters/ch10-step7-who-cares-a-lot.md`).
- **data**: customer/market data to size the segment.
- **upstream**: value themes. **downstream**: market category, canvas.
- **depth**: full.

### Market category and positioning style decision (Step 8)
- **ask**: "What category should we position in, and how do we win it?"
- **inputs**: value themes, target segment, competitive landscape, funding.
- **steps**:
  1. Generate candidate frames: abductive reasoning, adjacent growing markets, customer suggestions (cautiously) (`chapters/ch11-step8-market-frame-and-styles.md`).
  2. Pick the frame that makes value obvious to the segment (`chapters/ch11-step8-market-frame-and-styles.md`).
  3. Choose a style: Head to Head, Big Fish Small Pond, Create a New Game, by leader status and resources (`chapters/ch11-step8-market-frame-and-styles.md`, `cheatsheet.md`).
  4. For Big Fish, check subsegment is identifiable, big enough, with an unmet need (`chapters/ch11-step8-market-frame-and-styles.md`).
  5. For New Game, state the "why now" (`chapters/ch11-step8-market-frame-and-styles.md`).
- **criteria**:
  - Category choice is justified by making value obvious, not by being hot (`chapters/ch11-step8-market-frame-and-styles.md`).
  - Exactly one style is named (`chapters/ch11-step8-market-frame-and-styles.md`).
  - Head to Head is only chosen if the company leads or no leader exists (`chapters/ch11-step8-market-frame-and-styles.md`).
  - Big Fish choice passes the 3 subsegment checks (`chapters/ch11-step8-market-frame-and-styles.md`).
  - New Game choice includes a "why now" and resources (`chapters/ch11-step8-market-frame-and-styles.md`).
- **data**: category landscape (which categories exist, their leaders).
- **upstream**: target segment. **downstream**: trend layer, canvas, pricing.
- **depth**: full.

### Trend layer check (Step 9)
- **ask**: "Should we tie our positioning to [trend]?"
- **inputs**: chosen category, candidate trend.
- **steps**:
  1. Declare category first (`chapters/ch12-step9-layer-on-a-trend.md`).
  2. Test the trend against Solution x Market x Trend Venn (`chapters/ch12-step9-layer-on-a-trend.md`).
  3. Drop it if it lands in "cool but confusing" or "hype" zones (`chapters/ch12-step9-layer-on-a-trend.md`).
- **criteria**:
  - Trend links to the product and to the market (`chapters/ch12-step9-layer-on-a-trend.md`).
  - Trend does not replace the category (`chapters/ch12-step9-layer-on-a-trend.md`).
  - "No trend" is an allowed outcome (`chapters/ch12-step9-layer-on-a-trend.md`).
- **data**: trend evidence (none prescribed; gtm-internet-pipes fills this).
- **upstream**: market category. **downstream**: canvas.
- **depth**: partial (a test, no way to find trends).

### Positioning canvas and positioning document (Step 10)
- **ask**: "Write our positioning canvas."
- **inputs**: outputs of Steps 4 to 9.
- **steps**:
  1. Product name and one-liner (`chapters/ch13-step10-capture-positioning.md`).
  2. Market category and subcategory (`chapters/ch13-step10-capture-positioning.md`).
  3. Four aligned columns: alternatives, unique attributes, value, who cares a lot (`chapters/ch13-step10-capture-positioning.md`).
  4. Write the longer document: each component in detail and how they interact (`chapters/ch13-step10-capture-positioning.md`).
- **criteria**:
  - All four columns plus category are filled (`chapters/ch13-step10-capture-positioning.md`).
  - Each attribute traces to an alternative and each value to an attribute (`chapters/ch13-step10-capture-positioning.md`).
  - No FOR/IS A/WHICH positioning statement used as the artifact (`chapters/ch03-five-plus-one-components.md`, `chapters/ch13-step10-capture-positioning.md`).
  - Value column has proof (`chapters/ch09-step6-map-to-value.md`).
  - Both canvas and document exist (`chapters/ch13-step10-capture-positioning.md`).
- **data**: none beyond upstream.
- **upstream**: Steps 4 to 9. **downstream**: sales story, messaging, pricing, roadmap.
- **depth**: full.

### Sales story
- **ask**: "Turn our positioning into a sales story / pitch skeleton."
- **inputs**: positioning canvas.
- **steps**:
  1. Define the problem (`chapters/ch14-putting-positioning-into-play.md`).
  2. How customers solve it today and where that falls short (`chapters/ch14-putting-positioning-into-play.md`).
  3. The "perfect world" ideal-solution features (`chapters/ch14-putting-positioning-into-play.md`).
  4. Introduce product plus market category (`chapters/ch14-putting-positioning-into-play.md`).
  5. Value themes, each with proof, objection handling, case study (`chapters/ch14-putting-positioning-into-play.md`).
  6. Call to action (`chapters/ch14-putting-positioning-into-play.md`).
- **criteria**:
  - All 6 arc parts present, in order (`chapters/ch14-putting-positioning-into-play.md`).
  - "Solved today" matches the canvas alternatives (`chapters/ch14-putting-positioning-into-play.md`, `chapters/ch13-step10-capture-positioning.md`).
  - Each value theme has proof (`chapters/ch14-putting-positioning-into-play.md`).
  - Product is named with its category (`chapters/ch14-putting-positioning-into-play.md`).
  - Ends with a specific CTA (`chapters/ch14-putting-positioning-into-play.md`).
- **data**: case studies, proof.
- **upstream**: canvas. **downstream**: messaging document, sales deck, landing page.
- **depth**: full.

### Messaging master document
- **ask**: "Create our master messaging doc."
- **inputs**: sales story.
- **steps**:
  1. Build messaging after the sales story (`chapters/ch14-putting-positioning-into-play.md`).
  2. Keep one master baseline all copy derives from (`chapters/ch14-putting-positioning-into-play.md`).
  3. Do not write it live in a group (`chapters/ch14-putting-positioning-into-play.md`).
- **criteria**:
  - Derives from the sales story (`chapters/ch14-putting-positioning-into-play.md`).
  - Is a single source document (`chapters/ch14-putting-positioning-into-play.md`).
- **data**: none.
- **upstream**: sales story. **downstream**: all copy.
- **depth**: partial (no copy method; pair with a copywriting book).

### Positioning re-check
- **ask**: "Has our positioning gone stale?"
- **inputs**: canvas, recent market events.
- **steps**:
  1. Check triggers: new credible competitor, regulation, economic shift, enabling tech, buyer attitudes (`chapters/ch14-putting-positioning-into-play.md`).
  2. Re-ask whether best-fit customers' alternatives shifted; if yes restart at Step 4 (`chapters/ch14-putting-positioning-into-play.md`, `patterns.md`).
- **criteria**:
  - Each trigger is checked (`chapters/ch14-putting-positioning-into-play.md`).
  - Repositioning is recommended only if customer perceptions changed (`chapters/ch14-putting-positioning-into-play.md`).
- **data**: market news, customer interviews.
- **upstream**: canvas. **downstream**: canvas (revision).
- **depth**: partial.

---

## christensen-jobs (Competing Against Luck, Christensen et al.)

### Job opportunity list (job hunting)
- **ask**: "Find jobs-to-be-done opportunities in [space]."
- **inputs**: the space or product, access to customers or observation sources.
- **steps**:
  1. Look at a job close to home (own life) (`chapters/ch04-job-hunting.md`).
  2. Look for nonconsumption: who hires nothing (`chapters/ch04-job-hunting.md`).
  3. Look for workarounds and compensating behaviours (`chapters/ch04-job-hunting.md`).
  4. Look for negative jobs ("I don't want to ___") (`chapters/ch04-job-hunting.md`).
  5. Look for unusual/off-label uses of the product (`chapters/ch04-job-hunting.md`).
  6. Record observed behaviour, not stated preference (`chapters/ch04-job-hunting.md`).
- **criteria**:
  - All 5 hunting grounds are covered or marked empty (`chapters/ch04-job-hunting.md`).
  - Each opportunity cites an observed behaviour, not a survey opinion (`chapters/ch04-job-hunting.md`).
  - Each opportunity names a struggle or a workaround (`chapters/ch04-job-hunting.md`).
- **data**: observation, interviews, usage data.
- **upstream**: none. **downstream**: job statement.
- **depth**: full.

### Job statement
- **ask**: "Write the job to be done for our customers."
- **inputs**: circumstance and struggle evidence from job hunting or interviews.
- **steps**:
  1. Write "When [circumstance], help me [progress], so I can [deeper aim]" (`chapters/ch02-progress-not-products.md`, `cheatsheet.md`).
  2. Name functional, social and emotional dimensions (`chapters/ch02-progress-not-products.md`).
  3. Use verbs and nouns, no adjectives/adverbs (`chapters/ch10-final-observations.md`).
  4. Check level of abstraction: broad enough to see competition, narrow enough to design (`chapters/ch02-progress-not-products.md`, `chapters/ch10-final-observations.md`).
  5. List the competing set incl. nonconsumption (`chapters/ch02-progress-not-products.md`).
- **criteria**:
  - Statement names a circumstance, not a demographic (`chapters/ch02-progress-not-products.md`).
  - Progress is a verb (`chapters/ch02-progress-not-products.md`).
  - All three dimensions are present (`chapters/ch02-progress-not-products.md`).
  - No adjectives/adverbs define the job (`chapters/ch10-final-observations.md`).
  - Is not a need, product category or one-time event (`chapters/ch02-progress-not-products.md`, `cheatsheet.md`).
  - Competing set includes at least one non-product option (`chapters/ch02-progress-not-products.md`).
- **data**: customer interviews/observation.
- **upstream**: job opportunity list or switch interviews. **downstream**: forces map, job spec, positioning (alternatives).
- **depth**: full.

### Switch storyboard (struggle timeline)
- **ask**: "Reconstruct how customers decided to buy/switch."
- **inputs**: recent buyers to interview.
- **steps**:
  1. Rebuild the timeline: first thought, passive looking, active looking, deciding, Big Hire, Little Hires (`chapters/ch05-hear-what-customers-dont-say.md`).
  2. Pinpoint the struggling moment and triggering event (`chapters/ch05-hear-what-customers-dont-say.md`).
  3. Identify what was fired (`chapters/ch05-hear-what-customers-dont-say.md`).
  4. Capture emotions, not attribute rankings (`chapters/ch05-hear-what-customers-dont-say.md`).
- **criteria**:
  - Each storyboard has all timeline stages (`chapters/ch05-hear-what-customers-dont-say.md`).
  - Struggling moment is named with its trigger (`chapters/ch05-hear-what-customers-dont-say.md`).
  - The fired solution is named (`chapters/ch05-hear-what-customers-dont-say.md`).
  - No feature ranking used as evidence (`chapters/ch05-hear-what-customers-dont-say.md`).
- **data**: customer interviews.
- **upstream**: none. **downstream**: forces map, job statement.
- **depth**: partial (structure given, no question script; pair with fitzpatrick-mom-test).

### Forces of Progress map
- **ask**: "Why aren't people switching to us?"
- **inputs**: switch storyboards or interview notes.
- **steps**:
  1. Map Push of the situation (`chapters/ch05-hear-what-customers-dont-say.md`).
  2. Map Pull of the new solution (`chapters/ch05-hear-what-customers-dont-say.md`).
  3. Map Habits of the present (`chapters/ch05-hear-what-customers-dont-say.md`).
  4. Map Anxiety: of choosing and of using (`chapters/ch05-hear-what-customers-dont-say.md`).
  5. Find the binding constraint and act on it, often reducing anxiety/habit (`patterns.md`, `chapters/ch05-hear-what-customers-dont-say.md`).
- **criteria**:
  - All four forces are filled (`chapters/ch05-hear-what-customers-dont-say.md`).
  - Anxiety is split into choosing and using (`chapters/ch05-hear-what-customers-dont-say.md`).
  - A binding constraint is named (`patterns.md`).
  - At least one action targets habit or anxiety, not only pull (`chapters/ch05-hear-what-customers-dont-say.md`).
- **data**: interviews.
- **upstream**: switch storyboard. **downstream**: job spec, offer obstacles (Hormozi problem list), guarantees.
- **depth**: full.

### Job spec and product résumé
- **ask**: "Turn this job into a product/experience spec."
- **inputs**: job statement, forces map.
- **steps**:
  1. Write the spec: functional/social/emotional dimensions, trade-offs, competing set, obstacles and anxieties (`chapters/ch06-building-your-resume.md`).
  2. Design the résumé answering each spec line (`chapters/ch06-building-your-resume.md`).
  3. Treat obstacle and anxiety removal as line items (`chapters/ch06-building-your-resume.md`).
  4. Design experiences across discover, buy, onboard, use, help, upgrade (`chapters/ch06-building-your-resume.md`).
- **criteria**:
  - Spec has all 4 parts (`chapters/ch06-building-your-resume.md`).
  - Every spec line has a résumé answer (`chapters/ch06-building-your-resume.md`).
  - Each anxiety from the forces map has a removal line (`chapters/ch06-building-your-resume.md`, `chapters/ch05-hear-what-customers-dont-say.md`).
  - Purchase and use experiences are specified, not just features (`chapters/ch06-building-your-resume.md`).
- **data**: none beyond upstream.
- **upstream**: job statement, forces map. **downstream**: offer build, positioning, purpose brand.
- **depth**: full.

### Big Hire / Little Hire audit
- **ask**: "Are customers actually using what they bought?"
- **inputs**: purchase and usage data.
- **steps**:
  1. Separate purchase from repeated use (`chapters/ch05-hear-what-customers-dont-say.md`).
  2. Flag bought-but-unused cohorts (`patterns.md`).
  3. Fix the experience, not the sale (`patterns.md`).
- **criteria**:
  - Big and Little Hire are measured separately (`chapters/ch05-hear-what-customers-dont-say.md`).
  - Recommendations target use experience (`patterns.md`).
- **data**: post-purchase usage data.
- **upstream**: job statement. **downstream**: job spec revision.
- **depth**: partial.

### Job-progress metrics audit
- **ask**: "Are our metrics measuring the customer's job?"
- **inputs**: current dashboard/KPIs, growth initiatives.
- **steps**:
  1. For each metric ask: customer's progress or internal activity (`chapters/ch08-keeping-your-eye-on-the-job.md`).
  2. Test each growth initiative for surface growth (`chapters/ch08-keeping-your-eye-on-the-job.md`).
  3. Seek disconfirming evidence against conforming data (`chapters/ch08-keeping-your-eye-on-the-job.md`, `patterns.md`).
  4. Replace proxies with job-progress measures (`chapters/ch09-jobs-focused-organization.md`).
- **criteria**:
  - Every metric is classified (`chapters/ch08-keeping-your-eye-on-the-job.md`).
  - At least one passive/qualitative job data source is funded (`patterns.md`).
  - Each growth initiative has a surface-growth verdict (`chapters/ch08-keeping-your-eye-on-the-job.md`).
- **data**: KPI list.
- **upstream**: job statement. **downstream**: none (internal).
- **depth**: partial (diagnostic questions, no metric design method).

Not included (topic only): purpose brand (ch06, principle with no procedure), integrating processes around the job (ch07, principle plus one question), jobs-focused organization (ch09).

---

## fitzpatrick-mom-test (The Mom Test, Rob Fitzpatrick)

### Customer segment (who-where pair)
- **ask**: "Who exactly should I talk to first, and where are they?"
- **inputs**: broad segment idea, problem hypothesis.
- **steps**:
  1. Within the broad segment ask who wants it most (`chapters/ch07-choosing-your-customers.md`).
  2. Ask why (problem/goal) and who else shares it (`chapters/ch07-choosing-your-customers.md`).
  3. Ask what they already do (workaround) (`chapters/ch07-choosing-your-customers.md`).
  4. Ask where to find them; repeat slicing until where is known (`chapters/ch07-choosing-your-customers.md`).
  5. Pick a start segment by profitable, reachable, rewarding (`chapters/ch07-choosing-your-customers.md`).
- **criteria**:
  - Segment states a who and a where (`chapters/ch07-choosing-your-customers.md`).
  - Segment is narrower than a generic label like "students" (`chapters/ch07-choosing-your-customers.md`).
  - Workaround behaviour is named (`chapters/ch07-choosing-your-customers.md`).
  - Choice is justified on profitable/reachable/rewarding (`chapters/ch07-choosing-your-customers.md`).
  - Missed segments/stakeholders are considered (`chapters/ch07-choosing-your-customers.md`).
- **data**: none (desk research optional).
- **upstream**: none. **downstream**: learning plan, outreach message.
- **depth**: full.

### Learning plan (big 3 questions and risk triage)
- **ask**: "What do I need to learn from these conversations?"
- **inputs**: business idea, segment.
- **steps**:
  1. Classify the main risk as product or market (`chapters/ch03-asking-important-questions.md`).
  2. Run the thought experiments: "if this failed, why?" and "what must be true to succeed?" (`chapters/ch03-asking-important-questions.md`, `chapters/ch08-running-the-process.md`).
  3. Write the 3 big questions for this conversation type, including one scary one (`chapters/ch03-asking-important-questions.md`).
  4. Decide the ideal next step/commitment and write best guesses (`patterns.md`, `chapters/ch08-running-the-process.md`).
  5. Do desk research first (`patterns.md`).
- **criteria**:
  - Risk type is stated (`chapters/ch03-asking-important-questions.md`).
  - Exactly 3 big questions (`chapters/ch03-asking-important-questions.md`).
  - At least one question could kill the business (`chapters/ch03-asking-important-questions.md`).
  - The boring-but-fatal "elephant" (e.g. can they pay) is covered (`chapters/ch03-asking-important-questions.md`).
  - Target commitment is defined in advance (`chapters/ch08-running-the-process.md`).
- **data**: desk research.
- **upstream**: segment. **downstream**: interview script.
- **depth**: full.

### Customer interview script
- **ask**: "Write me a Mom Test interview script."
- **inputs**: learning plan, segment.
- **steps**:
  1. Open on their life, not the idea (`chapters/ch01-the-mom-test.md`).
  2. Ask about specific past events ("talk me through the last time") (`chapters/ch01-the-mom-test.md`, `patterns.md`).
  3. Use the good-question repertoire: why bother, implications, what else tried, how dealing now, where money comes from (`patterns.md`, `cheatsheet.md`).
  4. Start broad; zoom only on strong signal (`chapters/ch03-asking-important-questions.md`).
  5. Prepare deflect/anchor/dig recovery lines (`chapters/ch02-avoiding-bad-data.md`).
  6. Close with "who else should I talk to?" and a commitment ask if product is shown (`patterns.md`, `chapters/ch05-commitment-and-advancement.md`).
- **criteria**:
  - No question mentions the idea before the learning section ends (`chapters/ch01-the-mom-test.md`).
  - No future/hypothetical questions ("would you", "how much would you pay") (`chapters/ch01-the-mom-test.md`).
  - Every question asks about past specifics or current behaviour (`chapters/ch01-the-mom-test.md`).
  - Each of the 3 big questions is covered (`chapters/ch03-asking-important-questions.md`).
  - Recovery lines exist for compliments, fluff and feature requests (`chapters/ch02-avoiding-bad-data.md`).
  - Ends with a referral ask (`patterns.md`).
- **data**: live conversations.
- **upstream**: learning plan. **downstream**: conversation notes.
- **depth**: full.

### Meeting request message (Vision/Framing/Weakness/Pedestal/Ask)
- **ask**: "Write the cold/warm message to get a customer conversation."
- **inputs**: segment, problem area, stage, why this person.
- **steps**:
  1. Vision: half-sentence on the problem, no idea (`chapters/ch06-finding-conversations.md`).
  2. Framing: stage, nothing to sell (`chapters/ch06-finding-conversations.md`).
  3. Weakness: the specific gap (`chapters/ch06-finding-conversations.md`).
  4. Pedestal: why this person can help (`chapters/ch06-finding-conversations.md`).
  5. Ask for help (`chapters/ch06-finding-conversations.md`).
  6. Prefer warm intros or bring-them-to-you channels when possible (`chapters/ch06-finding-conversations.md`).
- **criteria**:
  - All 5 elements present (`chapters/ch06-finding-conversations.md`).
  - Idea/product is not mentioned (`chapters/ch06-finding-conversations.md`).
  - No "can I interview you" / "quick coffee" / "your opinion" framing (`chapters/ch06-finding-conversations.md`).
  - Pedestal is specific to the recipient (`chapters/ch06-finding-conversations.md`).
- **data**: contact list.
- **upstream**: segment. **downstream**: interview.
- **depth**: full.

### Commitment and next-step plan
- **ask**: "How do I close this meeting with a real next step?"
- **inputs**: stage of the relationship, product shown or not.
- **steps**:
  1. Define the next step in a currency: time, reputation, cash (`chapters/ch05-commitment-and-advancement.md`).
  2. If a trial is too cheap, raise its cost (`chapters/ch05-commitment-and-advancement.md`).
  3. Ask; treat rejection as a clear result (`chapters/ch05-commitment-and-advancement.md`).
  4. Classify outcome as success/fail, flag zombie leads (`chapters/ch05-commitment-and-advancement.md`).
  5. Spot earlyvangelists: have problem, know it, have budget, built a workaround (`chapters/ch05-commitment-and-advancement.md`).
- **criteria**:
  - Each meeting has a named ask in a currency (`chapters/ch05-commitment-and-advancement.md`).
  - Compliments are not counted as commitment (`chapters/ch05-commitment-and-advancement.md`).
  - Each lead is marked advanced or not (`chapters/ch05-commitment-and-advancement.md`).
  - Earlyvangelist criteria are applied (`chapters/ch05-commitment-and-advancement.md`).
- **data**: meeting outcomes.
- **upstream**: interview. **downstream**: offer/pre-sale (Hormozi), pipeline.
- **depth**: full.

### Conversation notes and team review
- **ask**: "Turn these interview notes into learnings" / "Review our customer conversations."
- **inputs**: raw notes or transcripts.
- **steps**:
  1. Tag notes with the signal symbols (pain, goal, obstacle, workaround, money, follow-up, emotions) (`chapters/ch08-running-the-process.md`).
  2. Keep exact quotes (`chapters/ch08-running-the-process.md`).
  3. Store sortable and permanent (`chapters/ch08-running-the-process.md`).
  4. Review with the team: update beliefs and the next 3 questions (`chapters/ch08-running-the-process.md`).
  5. Audit for going-through-the-motions symptoms (`chapters/ch08-running-the-process.md`, `cheatsheet.md`).
- **criteria**:
  - Every learning has an exact quote (`chapters/ch08-running-the-process.md`).
  - Symbols are applied (`chapters/ch08-running-the-process.md`).
  - Compliments and fluff are separated from facts (`chapters/ch02-avoiding-bad-data.md`).
  - Output states updated beliefs and next 3 questions (`chapters/ch08-running-the-process.md`).
  - States whether feedback is consistent; inconsistent means segment too broad (`chapters/ch07-choosing-your-customers.md`).
  - States whether new info is still appearing (stop rule) (`chapters/ch06-finding-conversations.md`).
- **data**: notes/transcripts.
- **upstream**: interviews. **downstream**: job statement, positioning, offer problems list.
- **depth**: full.

Not included as separate: "keeping it casual" (ch04) is a constraint folded into the script and outreach.

---

## gtm-internet-pipes (Internet Pipes, Steph Smith)

The runbook (`runbook.md`) adds guardrails G0 to G6 that apply to every deliverable here: scope contract, Generation before Validation, Sales>Search>Survey, two-source rule, 3x8 evaluation, localized community, coverage ledger. The `agent-reach` data layer in `patterns.md`/`cheatsheet.md` is a skill-author addition, not course content.

### Idea list (Generation)
- **ask**: "Generate business ideas in [area] from real data."
- **inputs**: area or starting point, geography.
- **steps**:
  1. Declare scope and run plan (`runbook.md` G0).
  2. Run generation methods: Exploration, Affirmation, Location, Variation, Authorization, Regulation (`chapters/ch06-generation-station.md`, `chapters/ch07`..`ch10`).
  3. Derive seeds from data; tag own hunches `[hunch · Survey-tier]` and keep them a minority (`runbook.md` G1).
  4. Log everything uncritically in the Idea Log (`chapters/ch06-generation-station.md`, `chapters/ch03-appreciation-station.md`).
- **criteria**:
  - Every idea names its generation method and data source (`runbook.md` G1).
  - Hunches are tagged and are a minority (`runbook.md` G1).
  - No ideas filtered out at this stage (`chapters/ch06-generation-station.md`).
  - Scope line is present (`runbook.md` G0).
- **data**: Reddit/Subreddit Stats, HN, Google Trends, Jungle Scout, patent and legislation trackers.
- **upstream**: none. **downstream**: demand validation.
- **depth**: full.

### Demand validation report
- **ask**: "Is there real demand for [idea]?"
- **inputs**: idea list, market/geo.
- **steps**:
  1. Attempt Sales tier first (Amazon/Jungle Scout, app revenue, store data) (`runbook.md` G2, `chapters/ch11-validation-station.md`).
  2. Pull Search tier (volumes, Trends) (`chapters/ch11-validation-station.md`).
  3. Triangulate across several mega-platforms (`chapters/ch11-validation-station.md`).
  4. Look for disconfirming evidence; record invalidated ideas (`chapters/ch11-validation-station.md`).
  5. Confirm each trend with 2 independent sources; disclose granularity; add confidence tag (`runbook.md` G3).
- **criteria**:
  - Headline names the highest tier actually reached (`runbook.md` G2).
  - Every claim has 2 independent sources (`runbook.md` G3).
  - Each finding has a High/Med/Low confidence tag (`runbook.md` G3).
  - Data granularity caveat is stated (`runbook.md` G3).
  - Invalidated ideas are listed, not hidden (`chapters/ch11-validation-station.md`).
  - Search-only results are not called a validated market (`runbook.md` G2).
- **data**: search volume (Keywords Everywhere/DataForSEO), Google Trends, Jungle Scout/AppMagic/Koala, Reddit.
- **upstream**: idea list. **downstream**: competitor matrix.
- **depth**: full.

### Competitor evaluation matrix (3 x 8)
- **ask**: "Analyse the competitors in [space]."
- **inputs**: validated idea, competitor names.
- **steps**:
  1. Pick 3 or more competitors, direct and indirect (Answer the Public X-vs-Y) (`runbook.md` G4, `chapters/ch12-evaluation-station.md`).
  2. Answer the 8 questions per competitor: build, priorities, pricing, traffic, competitors, metrics, messaging, reputation (`chapters/ch12-evaluation-station.md`).
  3. Mark each cell answered/inferred/blocked; substitute and label blocked tools (`runbook.md` G4).
  4. Flag long-running ads as winners (`chapters/ch12-evaluation-station.md`).
  5. Note search-without-sales caveats (`chapters/ch12-evaluation-station.md`).
- **criteria**:
  - At least 3 competitors (`runbook.md` G4).
  - All 8 questions have a cell per competitor (`chapters/ch12-evaluation-station.md`, `runbook.md` G4).
  - Every cell has a status (`runbook.md` G4).
  - Each answer names the tool or substitute used (`chapters/ch12-evaluation-station.md`, `runbook.md` G4).
  - Reputation uses 2 to 3 star reviews (`chapters/ch12-evaluation-station.md`).
- **data**: BuiltWith, SimilarWeb, FB Ad Library, Jungle Scout/Koala/AppMagic, Owletter, SparkToro, reviews.
- **upstream**: demand validation. **downstream**: review gap list, differentiation brief, positioning alternatives (Dunford).
- **depth**: full.

### Review gap list (2 to 3 star mine)
- **ask**: "What do customers hate about the leading products?"
- **inputs**: competitor products, review sources.
- **steps**:
  1. Skip 5 and 1 star reviews (`chapters/ch12-evaluation-station.md`).
  2. Read 2 to 3 star reviews for "wanted to love it, but" (`chapters/ch12-evaluation-station.md`).
  3. Add solution requests from communities (Gummy Search) (`chapters/ch13-differentiation-station.md`).
  4. Cluster gaps; require 3 data points per wedge (`runbook.md` G4).
- **criteria**:
  - Only 2 to 3 star reviews used as primary source (`chapters/ch12-evaluation-station.md`).
  - Each gap has quoted evidence (`chapters/ch12-evaluation-station.md`).
  - Gaps with fewer than 3 data points are labelled hypotheses (`runbook.md` G4).
- **data**: Amazon/app store/G2-type reviews, Reddit.
- **upstream**: competitor matrix. **downstream**: differentiation brief, Hormozi problems list, Dunford unique attributes.
- **depth**: full.

### Differentiation brief (axis and audience lingo)
- **ask**: "How should we stand out in [space]?"
- **inputs**: review gap list, target audience.
- **steps**:
  1. Mine audience language and needs: Gummy Search, GigaBrain, Answer the Public (`chapters/ch13-differentiation-station.md`).
  2. Localize community sources outside the US; rate confidence (`runbook.md` G5).
  3. Record the audience's own terms, with search curves where possible (`chapters/ch13-differentiation-station.md`).
  4. Pick one axis (design, speed, cost, variety) matching what the audience values (`chapters/ch13-differentiation-station.md`).
- **criteria**:
  - Exactly one axis chosen (`chapters/ch13-differentiation-station.md`).
  - Axis is justified by audience evidence, not by copying a famous company (`chapters/ch13-differentiation-station.md`).
  - Brief lists the audience's exact terms (`chapters/ch13-differentiation-station.md`).
  - Community source confidence is stated (`runbook.md` G5).
  - Wedge rests on 3 or more data points (`runbook.md` G4).
- **data**: Reddit/community tools, reviews, search data.
- **upstream**: review gap list. **downstream**: positioning (Dunford), offer (Hormozi), copy.
- **depth**: full.

### Audience and community research (tool-chain)
- **ask**: "Research this community / audience for me."
- **inputs**: a starting point (subreddit, keyword, product).
- **steps**:
  1. Size and growth: Subreddit Stats / Gummy Search (`chapters/ch05-preparation-station.md`, `patterns.md`).
  2. Problems and language: Gummy Search, GigaBrain (`patterns.md`).
  3. Adjacent communities: anvaka "say it" (`chapters/ch05-preparation-station.md`).
  4. Real questions: Answer the Public / Also Asked (`chapters/ch05-preparation-station.md`).
  5. Demand and datasets: Keywords Everywhere, Trends, Dataset Search (`chapters/ch05-preparation-station.md`).
  6. Visualize the finding (`chapters/ch05-preparation-station.md`).
- **criteria**:
  - Each step names the tool and result (`patterns.md`).
  - Size and growth are numbers with source (`chapters/ch05-preparation-station.md`).
  - Adjacent communities are listed (`chapters/ch05-preparation-station.md`).
  - Community signal is localized or flagged as US proxy (`runbook.md` G5).
- **data**: Reddit tools, Answer the Public, keyword tool.
- **upstream**: none. **downstream**: idea list, differentiation brief, Mom Test segment.
- **depth**: full.

### Trend timing report (seasonality and geo)
- **ask**: "When and where does demand for [term] peak?"
- **inputs**: term or product.
- **steps**:
  1. Google Trends over time; find spikes (`chapters/ch10-variation-station.md`).
  2. Confirm with WikiPulse and eRank (`chapters/ch10-variation-station.md`).
  3. Trace what the spike links to (e.g. aspirational self) (`chapters/ch10-variation-station.md`).
  4. Trends subregion view: concentration vs empty regions (`chapters/ch09-location-station.md`).
  5. Check cross-border signals (gastrodiplomacy, foreign rankings) (`chapters/ch09-location-station.md`).
- **criteria**:
  - Spike date is precise, not a month blob (`chapters/ch10-variation-station.md`).
  - Seasonality confirmed on 2 or more sources (`chapters/ch10-variation-station.md`, `runbook.md` G3).
  - Motivation behind the spike is stated (`chapters/ch10-variation-station.md`).
  - Concentration regions and white-space regions are both listed (`chapters/ch09-location-station.md`).
- **data**: Google Trends, WikiPulse, eRank.
- **upstream**: idea list. **downstream**: urgency/seasonal promos (Hormozi ch10), campaign calendar.
- **depth**: full.

### GTM investigation report with coverage ledger
- **ask**: "Run the full Internet Pipes process on [topic]."
- **inputs**: topic, geo, scope level.
- **steps**:
  1. Declare scope: Recon, Standard or Full E2E, with run plan (`runbook.md` G0).
  2. Generation (`runbook.md` G1, `chapters/ch06-generation-station.md`).
  3. Validation with hierarchy and two sources (`runbook.md` G2, G3, `chapters/ch11-validation-station.md`).
  4. Evaluation 3 x 8 (`runbook.md` G4, `chapters/ch12-evaluation-station.md`).
  5. Differentiation, localized (`runbook.md` G5, `chapters/ch13-differentiation-station.md`).
  6. Fill the ledger per station: EXECUTED/PARTIAL/BLOCKED/SKIPPED with artifact (`runbook.md` G6).
  7. Run the pre-flight checklist and honesty gate (`runbook.md`).
- **criteria**:
  - Scope level stated at top (`runbook.md` G0).
  - Ledger present, every in-scope station has a status and evidence (`runbook.md` G6).
  - EXECUTED only with a concrete artifact (`runbook.md` G6).
  - Words "complete/E2E/all stations/done" absent unless all EXECUTED (`runbook.md` G6).
  - Headline leads with highest tier reached (`runbook.md` G2).
  - No confident claim rests on one source (`runbook.md` G3).
- **data**: as per stations.
- **upstream**: none (wraps all). **downstream**: positioning, offer.
- **depth**: full.

### Data visualization of a finding
- **ask**: "Make a chart that tells this story."
- **inputs**: a dataset from the research.
- **steps**:
  1. Trace data to source (`chapters/ch05-preparation-station.md`, `chapters/ch14-visualization-station.md`).
  2. Build with Flourish or similar (`chapters/ch14-visualization-station.md`).
  3. Encode uncertainty (ranges, caveats, "directional") (`runbook.md` G3).
- **criteria**:
  - Source cited (`chapters/ch14-visualization-station.md`).
  - Uncertainty encoded (`runbook.md` G3).
- **data**: dataset; Flourish.
- **upstream**: any research deliverable. **downstream**: content.
- **depth**: partial.

Not included (topic only): Preparation browser setup (ch05, setup not a deliverable), Recommendation content diet (ch15).

---

## Cross-book chain (observed in the files)

- Research to offer: fitzpatrick segment and interviews, christensen job statement and forces map, gtm-internet-pipes validation and review gaps feed dunford alternatives/attributes and hormozi problems list.
- `christensen-jobs/SKILL.md` names `fitzpatrick-mom-test` for interview craft and `dunford-positioning` for the competitive frame. `hormozi-offers/SKILL.md` names `hormozi-leads` as downstream.
