# Inventory E: business and scale skills

Slice: `hormozi-scaling`, `gray-founder-os`, `butcher-productize`, `gretta-start-scale`.
Source root: `.claude/skills/<skill>/`. Every step and criterion cites the chapter file it comes from. Claims come only from `SKILL.md`, `patterns.md`, `cheatsheet.md` and `chapters/` of each skill.

Deliverable IDs (HS, GF, BP, GS) are used in `upstream` / `downstream` for cross-reference.

Inclusion rule: a deliverable is listed only when the source prescribes a procedure for it. Topics the source mentions without a procedure are listed at the end of each section under "Mentioned, no procedure".

---

## hormozi-scaling

Spine: diagnose stage by headcount, then do that stage's single graduation move (`chapters/ch01-scaling-system.md`, `chapters/ch02-ten-stages-overview.md`). Most deliverables below are stage-specific.

### HS1. Stage and constraint diagnosis
- **name**: Stage and constraint diagnosis (by headcount, per function)
- **ask**: "We have 12 full-time people: which stage are we in and what is the one thing to fix?"
- **inputs**: full-time headcount, founder's current role, current state of each of the 8 functions.
- **steps**:
  1. Count full-time headcount and map it to the stage band (0 / 1 / 1+freelancers / 1–4 / 5–9 / 10–19 / 20–49 / 50–99 / 100–249 / 250–500). `chapters/ch02-ten-stages-overview.md`
  2. Confirm the band with the founder's role (Researcher → Chairman). `chapters/ch02-ten-stages-overview.md`
  3. Describe the stage with the per-stage template: headcount, role, leadership layers, number of companies, constraint per function, graduation action, bottom line. `chapters/ch01-scaling-system.md`
  4. Read the stage chapter's constraint for each of the 8 functions (Product, Marketing, Sales, Customer Service, IT, Recruiting, HR, Finance). `chapters/ch01-scaling-system.md` plus the stage chapter (ch03 to ch12)
  5. State the single bottom-line graduation move for the stage. `chapters/ch02-ten-stages-overview.md`
  6. Flag skipped earlier-stage steps as weak links to shore up. `chapters/ch01-scaling-system.md`
  7. Scope the plan to this stage plus or minus one; drop work from other stages. `chapters/ch01-scaling-system.md`
- **criteria**:
  - Names exactly one stage, and its headcount band matches the stated headcount. `chapters/ch02-ten-stages-overview.md`
  - Names the founder role that matches the stage. `chapters/ch02-ten-stages-overview.md`
  - Lists a constraint for all 8 functions, using the 8 function names. `chapters/ch01-scaling-system.md`
  - States exactly one graduation move, and it matches the stage table. `chapters/ch02-ten-stages-overview.md`
  - Recommended actions belong to this stage or one adjacent stage only. `chapters/ch01-scaling-system.md`
  - Lists skipped prior-stage steps as weak links (or says none). `chapters/ch01-scaling-system.md`
- **data**: headcount; nothing external.
- **upstream / downstream**: none / feeds every other HS deliverable (picks which one to run).
- **depth**: full

### HS2. Free offer and first-proof plan (Stage 0)
- **name**: Free offer and proof-gathering plan
- **ask**: "I have zero customers. Design a free offer and a plan to get my first 10 testimonials."
- **inputs**: the skill or service, B2C or B2B, the founder's warm network.
- **steps**:
  1. Pick the free mechanism: software, media, service (knowledge or time), or physical goods. `chapters/ch03-stage0-improvise.md`
  2. Shape it as reveal-a-problem (e.g. an assessment), free trial, or free first step of a multi-step process. `chapters/ch03-stage0-improvise.md`
  3. Apply the rule of thumb: B2C, do things everyone hates doing; B2B, do what businesses are worse at than you. `chapters/ch03-stage0-improvise.md`
  4. Promote via the Core Four, starting with warm outreach to everyone who already knows you. `chapters/ch03-stage0-improvise.md`
  5. Service free customers as if paying, aiming for the 4 R's (Review, Refer, Retain, Resell). `chapters/ch03-stage0-improvise.md`
  6. Collect 10+ testimonials before selling. `chapters/ch04-stage1-monetize.md`
  7. Admin: form an LLC/S-corp, open a business bank account. `chapters/ch03-stage0-improvise.md`
- **criteria**:
  - Names one mechanism from the four listed. `chapters/ch03-stage0-improvise.md`
  - Names one of the three shapes (reveal problem, free trial, free first step). `chapters/ch03-stage0-improvise.md`
  - First channel is warm outreach. `chapters/ch03-stage0-improvise.md`
  - Has a step that asks each free customer for each of the 4 R's. `chapters/ch03-stage0-improvise.md`
  - Sets a target of at least 10 testimonials before the first paid sale. `chapters/ch04-stage1-monetize.md`
  - Objective is stated as learning, not revenue. `chapters/ch03-stage0-improvise.md`
- **data**: contact list of warm network.
- **upstream / downstream**: HS1 / HS3, HS7.
- **depth**: full

### HS3. First paid offer and price ladder (Stage 1)
- **name**: V1 offer, proof-led pitch and +20% price ladder
- **ask**: "Turn my free customers into my first paid sales: fix the offer, write the pitch, set the prices."
- **inputs**: the free offer, testimonials collected, the customer's goal.
- **steps**:
  1. Score the offer on the Value Equation and remove hidden costs (effort, sacrifice, risk, delay) to reach a sellable V1. `chapters/ch04-stage1-monetize.md`
  2. Use "what would it take?" and the Magic Question (price and timeframe stated first, prospect paints the ideal state) to work back into features. `chapters/ch04-stage1-monetize.md`
  3. Order proof by the proof continuum (in-person over virtual, others-say over you-say, numbers over none, etc.) and lead the pitch with it. `chapters/ch04-stage1-monetize.md`
  4. Use the free-to-paid script: limited spots, discount in exchange for use and a review. `patterns.md` (First Sale), `chapters/ch04-stage1-monetize.md`
  5. Raise price 20% every 5 sales: free, 80% off, 60%, 40%, 20%, full, then keep climbing. `chapters/ch04-stage1-monetize.md`
  6. Set up at least 2 payment methods and run a real dollar through. `chapters/ch04-stage1-monetize.md`
- **criteria**:
  - Lists each hidden cost found and the change that removes it. `chapters/ch04-stage1-monetize.md`
  - Value Equation terms (dream outcome, likelihood, time delay, effort) are each addressed. `chapters/ch04-stage1-monetize.md`
  - Pitch opens with proof, not promise; proof items are newer, specific, from others. `chapters/ch04-stage1-monetize.md`
  - Price ladder has steps of 5 sales and +20% increments. `chapters/ch04-stage1-monetize.md`
  - Names at least 2 payment methods. `chapters/ch04-stage1-monetize.md`
  - No generic, old, text-only testimonials used as lead proof. `chapters/ch04-stage1-monetize.md`
- **data**: testimonials; payment processor accounts.
- **upstream / downstream**: HS2 / HS4, HS5.
- **depth**: full (offer design depth lives in `hormozi-offers`)

### HS4. Rule of 100 daily advertising plan (Stage 2)
- **name**: Rule of 100 daily lead plan
- **ask**: "My leads come in feast-famine. Give me a daily advertising routine."
- **inputs**: current channel(s), time and budget available.
- **steps**:
  1. Pick one Core Four channel (warm, cold, content, paid). `patterns.md` (Consistent Lead Flow)
  2. Define the primary action and its 100 unit: 100 dials, 100 outreaches, 100 texts/emails, ~100 min content, or ~100 min / $100 ads. `chapters/ch05-stage2-advertise.md`
  3. Schedule it every day, with no stop when busy. `chapters/ch05-stage2-advertise.md`
- **criteria**:
  - Exactly one primary channel named. `patterns.md`
  - Daily quantity matches the Rule of 100 unit for that channel. `chapters/ch05-stage2-advertise.md`
  - Runs every day, including days with full capacity. `chapters/ch05-stage2-advertise.md`
- **data**: none.
- **upstream / downstream**: HS3 / HS5, HS6 (first hires to absorb volume).
- **depth**: partial (channel tactics are in `hormozi-leads`)

### HS5. CLOSER sales call script
- **name**: CLOSER sales script (with Three-Pillar Pitch; CLO/AAA for two-step)
- **ask**: "Write my sales call script."
- **inputs**: offer, typical prospect problem, the 3 keys to the result, common objections.
- **steps**:
  1. Clarify why they came. `chapters/ch05-stage2-advertise.md`
  2. Label them with the problem / plan. `chapters/ch05-stage2-advertise.md`
  3. Overview past pains with the loop "what else have you tried, how did it work, what did you like / not like". `patterns.md` (CLOSER)
  4. Sell with the Three-Pillar Pitch: 3 keys, one-line claim plus an analogy each, 2–3 minutes. `chapters/ch05-stage2-advertise.md`
  5. Explain away concerns: time, stall, money, preference, authority. `cheatsheet.md`, `patterns.md`
  6. Reinforce the decision. `chapters/ch05-stage2-advertise.md`
  7. If two-step: setter runs only CLO; closer uses AAA (Acknowledge, Ask/Answer loop). `chapters/ch05-stage2-advertise.md`
- **criteria**:
  - Has all six CLOSER sections in order. `chapters/ch05-stage2-advertise.md`
  - Pitch has exactly 3 pillars, each with a claim and an analogy. `chapters/ch05-stage2-advertise.md`
  - Pitch section is sized to 2–3 minutes, not a monologue. `chapters/ch05-stage2-advertise.md`, `patterns.md`
  - Objection section covers time, stall, money, preference, authority. `cheatsheet.md`
  - Sells the outcome ("the vacation"), not the process ("the flight"). `chapters/ch05-stage2-advertise.md`
  - Two-step version: setter script contains no pitch. `chapters/ch05-stage2-advertise.md`
- **data**: none.
- **upstream / downstream**: HS3 / HS8 (sales KPIs), HS12 (Game Tape uses call recordings).
- **depth**: full

### HS6. Upset-customer response script (HERE / Angry Boat)
- **name**: HERE escalation script
- **ask**: "Give my support team a script for angry customers."
- **inputs**: typical complaint types, resolution options available.
- **steps**:
  1. Hear them out fully, short acknowledgments only. `chapters/ch05-stage2-advertise.md`
  2. Empathize and escalate past their upset (get in the Angry Boat). `chapters/ch05-stage2-advertise.md`
  3. Apologize, owning the impact. `patterns.md` (HERE)
  4. Resolve with them by offering options. `chapters/ch05-stage2-advertise.md`
- **criteria**:
  - Four steps in H, E, A, R order. `cheatsheet.md`
  - Resolution offers options rather than one imposed fix. `chapters/ch05-stage2-advertise.md`
  - No step tells the rep to back down or avoid the conversation. `chapters/ch05-stage2-advertise.md`
- **data**: none.
- **upstream / downstream**: none / HS7.
- **depth**: full (short)

### HS7. Testimonial interview script (Epiphany Bridge)
- **name**: Epiphany Bridge testimonial script
- **ask**: "Write the interview questions to get a strong video testimonial."
- **inputs**: a happy customer and their measurable result.
- **steps**:
  1. Internal struggle: rock-bottom feelings. `chapters/ch05-stage2-advertise.md`
  2. External struggle: objective metrics (weight, size, revenue). `chapters/ch05-stage2-advertise.md`
  3. Skepticism: concerns before buying. `chapters/ch05-stage2-advertise.md`
  4. Why they did it anyway (why us, why now). `chapters/ch05-stage2-advertise.md`
  5. Internal and external victory. `chapters/ch05-stage2-advertise.md`
- **criteria**:
  - All five beats present in order. `chapters/ch05-stage2-advertise.md`
  - External struggle and victory carry numbers. `chapters/ch05-stage2-advertise.md`
  - Leads with pain, not with the solution. `patterns.md` (Epiphany Bridge)
- **data**: customer access.
- **upstream / downstream**: HS2 / HS3 (proof for pitch).
- **depth**: full

### HS8. Sales KPI tracker and basic pipeline
- **name**: Manual sales pipeline and KPI sheet
- **ask**: "Set up a spreadsheet to track my sales funnel."
- **inputs**: how leads enter, schedule, show and convert today.
- **steps**:
  1. Define the basic pipeline: how people come in, schedule, show, convert. `chapters/ch06-stage3-stabilize.md`
  2. Decide basic buyer qualifications. `chapters/ch06-stage3-stabilize.md`
  3. Track on a spreadsheet, not a CRM: contact rate, schedule rate, show rate, offer rate, close rate, cash collected. `chapters/ch07-stage4-prioritize.md`
  4. Watch speed-to-contact. `chapters/ch07-stage4-prioritize.md`
- **criteria**:
  - Contains all six KPIs by name. `chapters/ch07-stage4-prioritize.md`
  - Pipeline stages run in-come, schedule, show, convert. `chapters/ch06-stage3-stabilize.md`
  - Lists buyer qualifications. `chapters/ch06-stage3-stabilize.md`
  - Is a spreadsheet, not a CRM purchase (at Stage 3–4). `chapters/ch07-stage4-prioritize.md`
- **data**: lead and sales records.
- **upstream / downstream**: HS5 / HS9, HS10.
- **depth**: full

### HS9. RICE priority list
- **name**: RICE-ranked fix list
- **ask**: "I can't fix everything. Rank what to fix first."
- **inputs**: candidate fixes / customer complaints.
- **steps**:
  1. List candidate items (start from customer complaints). `chapters/ch06-stage3-stabilize.md`
  2. Score each on Reach, Impact, Confidence, Expense. `chapters/ch06-stage3-stabilize.md`
  3. Rank by Reach × Impact × Confidence ÷ Expense. `patterns.md` (RICE)
  4. Do high-impact / low-investment first; when in doubt, fix the most frequent complaint. `chapters/ch06-stage3-stabilize.md`
- **criteria**:
  - Every item has all four scores. `chapters/ch06-stage3-stabilize.md`
  - Order matches the computed score. `patterns.md`
  - Top item is high-impact and low-expense, or the most-complained-about issue. `chapters/ch06-stage3-stabilize.md`
- **data**: complaint log.
- **upstream / downstream**: HS1 / any fix project.
- **depth**: full (score scales are not defined by the source)

### HS10. Niche-down V2 plan (Stage 4)
- **name**: Niche-down plan: V2 product, qualification and friction
- **ask**: "We sell to everyone. Help us niche down."
- **inputs**: current customer types, best customer, lead volume and quality.
- **steps**:
  1. Pick one (best) customer avatar. `chapters/ch07-stage4-prioritize.md`
  2. Specialize the product into a V2 priced for that avatar. `chapters/ch07-stage4-prioritize.md`
  3. Raise lead volume with better free content on the existing channel (not a second channel). `chapters/ch07-stage4-prioritize.md`
  4. Add qualification and friction so volume self-selects. `chapters/ch07-stage4-prioritize.md`
  5. Track sales KPIs manually (HS8). `chapters/ch07-stage4-prioritize.md`
- **criteria**:
  - Names exactly one avatar. `chapters/ch07-stage4-prioritize.md`
  - V2 has a price set for that avatar. `chapters/ch07-stage4-prioritize.md`
  - No new channel or new customer type is added. `chapters/ch07-stage4-prioritize.md`
  - Lists the qualification and friction points added. `chapters/ch07-stage4-prioritize.md`
- **data**: customer list with revenue per type.
- **upstream / downstream**: HS1, HS8 / HS11.
- **depth**: partial (how to choose the avatar is not specified; pair with positioning/persona books)

### HS11. Second premium product plan (Stage 5)
- **name**: Product #2 and LTV:CAC plan
- **ask**: "Customers have nothing else to buy from us. Plan our second product."
- **inputs**: CS insight on what customers want next, current LTV and CAC.
- **steps**:
  1. Connect CS to Product: mine customer success for the next need. `chapters/ch08-stage5-productize.md`
  2. Build a second premium product for existing customers. `chapters/ch08-stage5-productize.md`
  3. Give customers an ascension path. `chapters/ch08-stage5-productize.md`
  4. With higher LTV, afford higher CAC: lead scoring, attribution, CRO process. `chapters/ch08-stage5-productize.md`
  5. Install NPS, CSAT, refund rate. `chapters/ch08-stage5-productize.md`
- **criteria**:
  - Product #2 idea is sourced from CS data, cited. `chapters/ch08-stage5-productize.md`
  - Product #2 is priced above / premium to product #1 and sold to existing customers. `chapters/ch08-stage5-productize.md`
  - States expected LTV change. `chapters/ch08-stage5-productize.md`
  - Names NPS, CSAT and refund rate as metrics. `chapters/ch08-stage5-productize.md`
- **data**: LTV, CAC, CS notes.
- **upstream / downstream**: HS10 / HS13.
- **depth**: partial (no LTV:CAC formula or target ratio given; offer design is in `hormozi-offers`)

### HS12. Weekly Game Tape review (Five A's)
- **name**: Game Tape meeting agenda
- **ask**: "Set up a weekly cross-team call review."
- **inputs**: recorded sales calls; heads of sales, product, marketing, CS.
- **steps**:
  1. Arrange a weekly 60–90 min call across sales, product, marketing, CS. `chapters/ch08-stage5-productize.md`
  2. Assemble: head of sales pulls the tape. `chapters/ch08-stage5-productize.md`
  3. Assess: each department says what it can take from the call. `chapters/ch08-stage5-productize.md`
  4. Analyze: each picks the one thing it will do. `chapters/ch08-stage5-productize.md`
  5. Act: commit within 7 days, by next Game Tape. `chapters/ch08-stage5-productize.md`
- **criteria**:
  - All four departments attend. `chapters/ch08-stage5-productize.md`
  - Duration 60–90 min, weekly. `chapters/ch08-stage5-productize.md`
  - Each department leaves with exactly one action and a 7-day deadline. `chapters/ch08-stage5-productize.md`
- **data**: call recordings.
- **upstream / downstream**: HS5 / HS11.
- **depth**: full

### HS13. Churn reduction plan (Five M's + cohorts)
- **name**: Activation and churn plan
- **ask**: "Churn is rising. Build a plan to cut it."
- **inputs**: customer journey milestones, retention data by customer.
- **steps**:
  1. Map the journey from onboarding to ongoing delivery. `chapters/ch09-stage6-optimize.md`
  2. Measure each step. `chapters/ch09-stage6-optimize.md`
  3. Make a hypothesis on activation points (behaviors that make customers stick). `chapters/ch09-stage6-optimize.md`
  4. Monitor results and iterate. `chapters/ch09-stage6-optimize.md`
  5. Segment customers by cohort and activation point; attack churn per type. `chapters/ch09-stage6-optimize.md`
- **criteria**:
  - Journey map lists milestones with a metric per step. `chapters/ch09-stage6-optimize.md`
  - States at least one named activation behavior as a hypothesis. `chapters/ch09-stage6-optimize.md`
  - Churn is reported per cohort, not only in aggregate. `chapters/ch09-stage6-optimize.md`
- **data**: retention/cohort data.
- **upstream / downstream**: HS11 / HS14.
- **depth**: full

### HS14. Second acquisition channel funding plan (Stage 7)
- **name**: Referral + nurture padding, then channel #2
- **ask**: "We rely on one channel. Plan how to fund a second."
- **inputs**: current channel, referral process, lead scores.
- **steps**:
  1. Strengthen the referral process with Fast Cash Fridays: mini promotional cycles, not always-on. `chapters/ch10-stage7-categorize.md`
  2. Segment lead nurture by lead score. `chapters/ch10-stage7-categorize.md`
  3. Use the surplus to fund the most-similar new channel. `chapters/ch10-stage7-categorize.md`
  4. Move CS from reactive to proactive: journey communications per milestone, renewals and ascensions. `chapters/ch10-stage7-categorize.md`
- **criteria**:
  - Referral pushes are time-boxed cycles. `chapters/ch10-stage7-categorize.md`
  - Nurture segments are defined by lead score. `chapters/ch10-stage7-categorize.md`
  - Channel #2 is funded from referral/nurture surplus, not new risk. `chapters/ch10-stage7-categorize.md`
  - Channel #2 is the most similar to the current channel. `chapters/ch10-stage7-categorize.md`
- **data**: lead scores, referral numbers.
- **upstream / downstream**: HS13 / none in slice.
- **depth**: partial ("there's a whole process for picking the next channel" is referenced but not given)

### HS15. Product pruning plan (improve by deletion, Stage 8)
- **name**: Feature pruning and cross-sell plan
- **ask**: "Our product is bloated. What do we cut?"
- **inputs**: feature list, customer survey access.
- **steps**:
  1. Survey customers on what they truly value. `chapters/ch11-stage8-specialize.md`
  2. Prune what they don't value. `chapters/ch11-stage8-specialize.md`
  3. Turn pruned pieces into cross-sells / add-ons. `chapters/ch11-stage8-specialize.md`
  4. Blend product journeys into one customer journey with cross-recommendations. `chapters/ch11-stage8-specialize.md`
- **criteria**:
  - Each cut traces to survey data. `chapters/ch11-stage8-specialize.md`
  - Each cut is marked removed or converted to an add-on. `chapters/ch11-stage8-specialize.md`
  - One blended journey replaces conflicting per-product journeys. `chapters/ch11-stage8-specialize.md`
- **data**: customer survey.
- **upstream / downstream**: HS11 / none.
- **depth**: partial

### HS16. Big-bet and Prep-for-Sale checklist (Stage 9)
- **name**: Cash cow / rising star decision and Prep for Sale
- **ask**: "Our core is maxed. Plan the next big bet and get the company ready to fund it."
- **inputs**: divisions, financials, capital structure.
- **steps**:
  1. Protect the cash cow; do not tinker with it. `chapters/ch12-stage9-capitalize.md`
  2. Find the rising star 1–3 years out: buy (M&A) or build (R&D). `chapters/ch12-stage9-capitalize.md`
  3. Prep for Sale: Quality of Earnings, investment banker talks, capital-structure and entity audit, legal review, consider hedging. `chapters/ch12-stage9-capitalize.md`
  4. Strategic workforce planning: capacity, skill gaps, redundancies, backfill churn. `chapters/ch12-stage9-capitalize.md`
- **criteria**:
  - Names the cash cow and states no changes to it. `chapters/ch12-stage9-capitalize.md`
  - Rising star is labelled M&A or R&D with a 1–3 year horizon. `chapters/ch12-stage9-capitalize.md`
  - Prep list includes Quality of Earnings, banker review, capital-structure audit, legal review. `chapters/ch12-stage9-capitalize.md`
  - Workforce plan quantifies monthly backfill from churn. `chapters/ch12-stage9-capitalize.md`
- **data**: audited financials, headcount churn.
- **upstream / downstream**: HS1 / none.
- **depth**: partial

**Mentioned, no procedure**: org chart / leadership layers (only described per stage, `chapters/ch02-ten-stages-overview.md`); job description and interview process (named, `chapters/ch06-stage3-stabilize.md`, `chapters/ch07-stage4-prioritize.md`); employee handbook, termination policy, comp plan, ATS, HRIS; budget/forecast, P&L, departmental spend controls; ad assembly line (`chapters/ch09-stage6-optimize.md`); onboarding (`chapters/ch06-stage3-stabilize.md`); IRS 20-point contractor test (named, not listed).

---

## gray-founder-os

Spine: Calling (ch02) → Vision Board (ch03) → Content Playbook (ch04) → People/Product/Process (ch05). Audience: creator / solopreneur online business.

### GF1. Ikigai and profitable niche statement
- **name**: Ikigai map and Profitable Niche of One
- **ask**: "Help me find a niche I can own and monetize."
- **inputs**: founder's skills, interests, values.
- **steps**:
  1. Journal 2–3 bullets per circle: love, world needs, paid for, good at. `chapters/ch02-operating-system-calling.md`
  2. Revisit over several days; circle recurring words; the overlap is the Ikigai. `chapters/ch02-operating-system-calling.md`
  3. Apply Skills + Interests + Monetization Strategy to state the niche. `chapters/ch02-operating-system-calling.md`
  4. Name the category to own, or invent one (Category King). `chapters/ch02-operating-system-calling.md`
  5. Stack 1–2+ monetization models from the monetization bank. `chapters/ch02-operating-system-calling.md`
  6. Write values that filter opportunities (no to 90%, "hell yes" only). `chapters/ch02-operating-system-calling.md`
- **criteria**:
  - All four circles have 2–3 bullets. `chapters/ch02-operating-system-calling.md`
  - Niche statement names a skill, an interest and a monetization model. `chapters/ch02-operating-system-calling.md`
  - Names one category (existing or invented) to lead. `chapters/ch02-operating-system-calling.md`
  - Monetization models are picked from the listed bank. `chapters/ch02-operating-system-calling.md`
  - Values are written and usable as a yes/no filter. `chapters/ch02-operating-system-calling.md`
- **data**: none.
- **upstream / downstream**: none / GF2, GF4.
- **depth**: full

### GF2. Founder OS Vision Board
- **name**: Vision Board (10 / 3 / 1 year, 90-day, opportunities)
- **ask**: "Build my one-page vision board with goals back to 90 days."
- **inputs**: niche, values, mission, current metrics.
- **steps**:
  1. Write company values. `chapters/ch03-vision-niche.md`
  2. Write niche / vision / mission. `chapters/ch03-vision-niche.md`
  3. Write the marketing system: target market, UVP, unique/proven process, guarantee. `chapters/ch03-vision-niche.md`
  4. State the 10-year dream, then back into 3-year, 1-year, 90-day goals. `chapters/ch03-vision-niche.md`
  5. Break opportunities out across People / Product / Process. `chapters/ch03-vision-niche.md`
  6. Make every goal SMART (a number and a date). `chapters/ch03-vision-niche.md`
  7. Print it and keep it visible; revisit every 90 days. `chapters/ch03-vision-niche.md`, `patterns.md`
- **criteria**:
  - Has all five sections (values, niche/vision/mission, marketing system, horizons, opportunities). `chapters/ch03-vision-niche.md`
  - Marketing system has all four items. `chapters/ch03-vision-niche.md`
  - Each horizon goal has a number and a date. `chapters/ch03-vision-niche.md`
  - 90-day goals ladder to the 1-year goals. `chapters/ch03-vision-niche.md`
  - Opportunities are grouped under People, Product, Process. `chapters/ch03-vision-niche.md`
  - No subjective goals ("be amazing"). `chapters/ch03-vision-niche.md`
- **data**: current metrics for baselines.
- **upstream / downstream**: GF1 / GF3, GF4, GF6.
- **depth**: full

### GF3. Monthly Personal Board Meeting sheet
- **name**: Monthly board meeting goals and review
- **ask**: "Set up my monthly goals and month-end review."
- **inputs**: Vision Board 90-day plan, Ikigai.
- **steps**:
  1. Month start: set ~5 personal and ~5 business 30-day SMART goals that ladder to the 90-day plan. `chapters/ch03-vision-niche.md`
  2. Keep the Ikigai at the top. `chapters/ch03-vision-niche.md`
  3. Month end: what went well, what didn't, what I learned. `chapters/ch03-vision-niche.md`
  4. Quarterly review every 90 days. `patterns.md` (Monthly Personal Board Meeting)
- **criteria**:
  - About 5 personal and 5 business goals. `chapters/ch03-vision-niche.md`
  - Each goal is SMART and maps to a 90-day goal. `chapters/ch03-vision-niche.md`
  - Review has the three questions. `chapters/ch03-vision-niche.md`
- **data**: none.
- **upstream / downstream**: GF2 / none.
- **depth**: full

### GF4. Two-page Content Playbook
- **name**: Content Playbook (strategy page + funnel page)
- **ask**: "Write my content playbook."
- **inputs**: mission/vision/niche, target market, platforms.
- **steps**:
  1. Page 1: company, mission, vision, niche, target market. `chapters/ch04-grow-community.md`
  2. Define 3–5 brand values, distinct from personal values. `chapters/ch04-grow-community.md`
  3. Pick 4 content categories and 3 formats. `chapters/ch04-grow-community.md`
  4. Define content franchises (recurring, fixed cadence). `chapters/ch04-grow-community.md`
  5. List curation sources, best-in-class examples, creator inspo, tech stack. `chapters/ch04-grow-community.md`
  6. Page 2: Rented (social) → Owned (newsletter) → Monetized (customers) funnel. `chapters/ch04-grow-community.md`
  7. Pick 2 platforms first; plan the domino repurposing order. `chapters/ch04-grow-community.md`
  8. Prune underperforming categories/formats after ~30–60 days of data. `patterns.md`, `chapters/ch04-grow-community.md`
- **criteria**:
  - Exactly 4 categories and 3 formats. `chapters/ch04-grow-community.md`
  - 3–5 brand values, not copied from personal values. `chapters/ch04-grow-community.md`
  - At least one franchise with a stated day/cadence. `chapters/ch04-grow-community.md`
  - Funnel page names a rented channel, an owned asset (newsletter/email) and a monetized offer. `chapters/ch04-grow-community.md`
  - Names exactly 2 starting platforms. `chapters/ch04-grow-community.md`
  - Lists a tech stack. `chapters/ch04-grow-community.md`
- **data**: platform analytics (for later pruning).
- **upstream / downstream**: GF1, GF2 / GF5, GF8.
- **depth**: full

### GF5. Hook-engineered post (curate and remix)
- **name**: Post / thread / email draft with engineered hook
- **ask**: "Write a post on X with a scroll-stopping hook."
- **inputs**: content category, saved reference posts, brand voice.
- **steps**:
  1. Curate content that stopped your scroll (bookmarks, saves, collections, TWEMEX). `chapters/ch04-grow-community.md`
  2. Study the hook pattern; remix into your voice, never copy. `patterns.md` (Hook Engineering)
  3. Write the first sentence so its only job is to earn the second. `chapters/ch04-grow-community.md`
  4. Target at least one emotion on the dial (LOL, WTF, aww, NSFW, aha, yay, "finally"). `chapters/ch04-grow-community.md`
  5. Check the 4 E's and the ~50/50 edutainment balance. `chapters/ch04-grow-community.md`
- **criteria**:
  - Names the emotion targeted. `chapters/ch04-grow-community.md`
  - First line creates a reason to read line two. `chapters/ch04-grow-community.md`
  - Mix of educational and entertaining content is roughly even. `chapters/ch04-grow-community.md`
  - Cites the reference it remixes and differs from it. `patterns.md`
- **data**: saved reference content.
- **upstream / downstream**: GF4 / content queue (30–60 days, `chapters/ch04-grow-community.md`).
- **depth**: partial (copy craft is thin; pair with a copywriting book)

### GF6. Hiring kit (Role Scorecard, JD, interview bank)
- **name**: Role Scorecard + Job Description + interview questions
- **ask**: "I need to hire a marketing lead. Build the scorecard, JD and interview."
- **inputs**: role, mission, measurable outcomes, company traction.
- **steps**:
  1. Scorecard: role, mission, measurable outcomes, competencies. `chapters/ch05-scale-business.md`
  2. Tag each competency easy / harder / very hard to change; do not hire missing the very-hard ones. `chapters/ch05-scale-business.md`
  3. JD: mission, problem, solution, traction, role overview, 30/60/90-day expectations, who should apply, team; mimic billion-dollar careers pages. `chapters/ch05-scale-business.md`
  4. Interview from the question bank (motivates/frustrates, storyteller, CEO ambition, great vs good, book, Thiel question). `chapters/ch05-scale-business.md`
  5. Require mission and culture fit. `chapters/ch05-scale-business.md`
- **criteria**:
  - Outcomes are measurable. `chapters/ch05-scale-business.md`
  - Every competency carries a changeability tag. `chapters/ch05-scale-business.md`
  - JD contains all 8 listed sections, including 30/60/90-day expectations. `chapters/ch05-scale-business.md`
  - Interview includes "what separates a great from a good [role]?". `chapters/ch05-scale-business.md`
  - Has an explicit mission/culture fit check. `chapters/ch05-scale-business.md`
- **data**: none.
- **upstream / downstream**: GF2 (People opportunities) / GF9 (wiki onboarding).
- **depth**: full

### GF7. Sean Ellis PMF survey and copy mining
- **name**: PMF survey + client health survey
- **ask**: "Do we have product-market fit? Build the survey and read the results."
- **inputs**: customer list (≥ ~8–10 customers).
- **steps**:
  1. Ask "How would you feel if you could no longer use [product]?". `chapters/ch05-scale-business.md`
  2. Add main-benefit question and "how likely to recommend" (client health survey, Typeform). `chapters/ch05-scale-business.md`
  3. Score: ≥60% "very disappointed" = strong PMF; ~20% = keep refining. `chapters/ch05-scale-business.md`
  4. Mine verbatim benefit language for landing-page and email copy. `chapters/ch05-scale-business.md`
- **criteria**:
  - Uses the exact Sean Ellis question. `chapters/ch05-scale-business.md`
  - Reports % "very disappointed" against the 60% threshold. `chapters/ch05-scale-business.md`
  - Includes a recommend score. `chapters/ch05-scale-business.md`
  - Quotes customer language verbatim for copy. `chapters/ch05-scale-business.md`
- **data**: customer survey responses.
- **upstream / downstream**: a live product / copy work.
- **depth**: full

### GF8. Revenue Matrix
- **name**: Platform → newsletter → product revenue matrix
- **ask**: "Map how each social platform drives people to my newsletter and product."
- **inputs**: platforms, newsletter, products.
- **steps**:
  1. For each platform, define the route to newsletter then product. `chapters/ch05-scale-business.md`
  2. Use featured links, first-comment links, lead magnets, testimonials, high-purchase-intent content. `chapters/ch05-scale-business.md`
  3. Add a referral loop (aim ~3 referrals per customer). `chapters/ch05-scale-business.md`
- **criteria**:
  - Every platform has a defined path to the newsletter. `chapters/ch05-scale-business.md`
  - Each path uses at least one of the listed mechanisms. `chapters/ch05-scale-business.md`
- **data**: platform analytics.
- **upstream / downstream**: GF4 / none.
- **depth**: partial

### GF9. Company Wiki / systems documentation
- **name**: Company Wiki (Notion) and onboarding read-through
- **ask**: "Start documenting our processes so new hires can onboard."
- **inputs**: recurring tasks.
- **steps**:
  1. Apply Automate, Eliminate, Delegate to each recurring task (delegate what someone can do 80% as well). `chapters/ch05-scale-business.md`
  2. Document repeatable work in Notion, ~a couple of systems per week. `chapters/ch05-scale-business.md`
  3. New hires read it line by line in month one. `chapters/ch05-scale-business.md`
- **criteria**:
  - Each task is tagged automate, eliminate or delegate. `chapters/ch05-scale-business.md`
  - Onboarding plan requires a line-by-line read in month one. `chapters/ch05-scale-business.md`
- **data**: none.
- **upstream / downstream**: GF6 / none.
- **depth**: partial (no doc template)

### GF10. Value-first outreach plan and Personal Board of Advisors
- **name**: Give-give-get outreach engine
- **ask**: "Build a list of people I should know and a way to reach them."
- **inputs**: vision, target mentors/partners.
- **steps**:
  1. List the mentors / advisors you need (Personal Board of Advisors). `chapters/ch03-vision-niche.md`
  2. For each, give value first (Loom audit, doc, product feedback). `chapters/ch05-scale-business.md`
  3. Then ask for a short call. `patterns.md` (Value-First Outreach)
  4. Template the messages (TextExpander, text replacement, Yesware). `chapters/ch05-scale-business.md`
  5. Run ~1/day, up to ~50/day at scale. `chapters/ch05-scale-business.md`
- **criteria**:
  - Each contact has a specific value item before any ask. `chapters/ch05-scale-business.md`
  - Value is customized to the person. `patterns.md`
  - Daily volume target stated. `chapters/ch05-scale-business.md`
- **data**: contact research.
- **upstream / downstream**: GF2 / none.
- **depth**: full

**Mentioned, no procedure for a business deliverable**: Daily operating rhythm (9 tasks the night before, ~4 h flow; personal routine, `chapters/ch05-scale-business.md`); 60-Day Content Challenge templates (referenced only, `chapters/ch04-grow-community.md`); coaching.

---

## butcher-productize

Short guide (~33 pages, per `SKILL.md`). The 3 steps are ordered and non-skippable (`chapters/ch02-three-steps-to-productizing.md`). Light on tactics; most deliverables are partial.

### BP1. Uniqueness audit (productization seed)
- **name**: Uniqueness audit
- **ask**: "I run a service business. What should I productize?"
- **inputs**: full list of tasks in the current workflow.
- **steps**:
  1. List every task in the workflow. `chapters/ch01-design-intern-to-1m.md`
  2. Mark those you are good at AND enjoy. `chapters/ch01-design-intern-to-1m.md`
  3. Pick the single highest-leverage one; niche to it and drop the rest. `patterns.md` (Uniqueness Audit), `chapters/ch01-design-intern-to-1m.md`
  4. Ask which part could be built once and sold many times. `chapters/ch01-design-intern-to-1m.md`
- **criteria**:
  - Task list is complete for the workflow (every task, not a sample). `chapters/ch01-design-intern-to-1m.md`
  - Exactly one task selected. `chapters/ch01-design-intern-to-1m.md`
  - Selected task is marked both good-at and enjoy. `chapters/ch01-design-intern-to-1m.md`
  - Lists the services to drop. `patterns.md`
- **data**: none.
- **upstream / downstream**: none / BP2, BP3.
- **depth**: full

### BP2. Productized service systems kit (Step 2)
- **name**: Productized service definition and systems kit
- **ask**: "Turn my one service into a repeatable offer with templates and an intake form."
- **inputs**: the niched service, past client emails and process.
- **steps**:
  1. Niche the offer to one thing and write copy that makes clients self-select. `chapters/ch02-three-steps-to-productizing.md`
  2. Templatize onboarding, feedback and follow-up emails. `chapters/ch02-three-steps-to-productizing.md`
  3. Document the process; it onboards clients and markets professionalism. `chapters/ch02-three-steps-to-productizing.md`
  4. Build an intake form for standard client info. `chapters/ch02-three-steps-to-productizing.md`
  5. Add forms/videos as onboarding leverage. `chapters/ch02-three-steps-to-productizing.md`
- **criteria**:
  - Offer copy names one thing only. `chapters/ch02-three-steps-to-productizing.md`
  - Has the three email templates (onboarding, feedback, follow-up). `chapters/ch02-three-steps-to-productizing.md`
  - Has a written process doc. `chapters/ch02-three-steps-to-productizing.md`
  - Has an intake form that replaces a call or long email. `chapters/ch02-three-steps-to-productizing.md`
- **data**: past client communications.
- **upstream / downstream**: BP1 / BP3.
- **depth**: partial (lists the components; no pricing, scope or template content)

### BP3. Productization roadmap and product-format choice (Step 3)
- **name**: Productization readiness check and product format pick
- **ask**: "Am I ready to build a product, and which format: book, course, template or software?"
- **inputs**: skill, reps done, systems in place, customer feedback.
- **steps**:
  1. Check: capped by hours in the day? `cheatsheet.md` (decision tree)
  2. Check reps (iterations + proof of work); if not, keep repping and publishing. `cheatsheet.md`, `chapters/ch02-three-steps-to-productizing.md`
  3. Check repeating work is systematized (BP2); if not, do that first. `cheatsheet.md`
  4. Pick the lightest format that solves the problem without you: short book, course, template, software. `patterns.md` (Productize), `chapters/ch02-three-steps-to-productizing.md`
  5. Let customer feedback choose what to systematize and productize next (skill → service → systematized service → product). `chapters/ch03-learning-and-building-in-public.md`, `chapters/ch04-scale-your-skills.md`
  6. Plan distribution through an audience (BP5). `cheatsheet.md`
- **criteria**:
  - Steps 1 and 2 are confirmed done before Step 3 is planned. `chapters/ch02-three-steps-to-productizing.md`
  - Format choice is justified by its "best when" condition. `chapters/ch02-three-steps-to-productizing.md`
  - Cites customer feedback as the reason for the product. `chapters/ch04-scale-your-skills.md`
- **data**: customer feedback.
- **upstream / downstream**: BP1, BP2 / BP5.
- **depth**: partial (format choice only; no build, pricing or launch procedure)

### BP4. Niche / brand topic selection
- **name**: Niche topic pick (3 prompts)
- **ask**: "What should I build my brand around?"
- **inputs**: friends to ask, interests, sent-mail history.
- **steps**:
  1. Ask close friends what you'd be great at writing about. `chapters/ch03-learning-and-building-in-public.md`
  2. Brain-dump interests; circle the 1–3 with the most energy. `chapters/ch03-learning-and-building-in-public.md`
  3. Review sent emails for questions you keep answering. `chapters/ch03-learning-and-building-in-public.md`
  4. Pick one lane (pivot allowed later). `chapters/ch03-learning-and-building-in-public.md`
- **criteria**:
  - All three prompts answered. `chapters/ch03-learning-and-building-in-public.md`
  - Ends with one niche, not a generalist list. `chapters/ch03-learning-and-building-in-public.md`
- **data**: sent email.
- **upstream / downstream**: none / BP5.
- **depth**: full (short)

### BP5. Publishing routine and front-door content map
- **name**: Build-in-public publishing plan
- **ask**: "Give me a publishing routine that builds an audience for my product."
- **inputs**: niche, deep assets (products, curriculums).
- **steps**:
  1. Set a fixed publishing slot (e.g. 1 h/week). `patterns.md` (Publish-as-You-Learn)
  2. Keep a content calendar; decide topics in advance. `chapters/ch02-three-steps-to-productizing.md`
  3. Build deep assets first; use short posts as front doors that point to them. `chapters/ch03-learning-and-building-in-public.md`
  4. Engage with everyone who engages. `chapters/ch02-three-steps-to-productizing.md`
  5. Experiment across forms and platforms; double down on what works. `chapters/ch03-learning-and-building-in-public.md`
- **criteria**:
  - Fixed time slot stated. `patterns.md`
  - Topics planned ahead in a calendar. `chapters/ch02-three-steps-to-productizing.md`
  - Each short post links to a named deep asset. `chapters/ch03-learning-and-building-in-public.md`
  - Includes a reply-to-engagers step. `chapters/ch02-three-steps-to-productizing.md`
- **data**: platform analytics.
- **upstream / downstream**: BP4, BP3 / none.
- **depth**: partial

### BP6. Deliberate practice plan
- **name**: Skill rep plan (deliberate practice + permissionless mentors)
- **ask**: "Plan how I get much better at [skill] fast."
- **inputs**: target skill.
- **steps**:
  1. Set a specific goal. `chapters/ch02-three-steps-to-productizing.md`
  2. Plan purposeful, non-habitual reps; count iterations, not hours. `chapters/ch02-three-steps-to-productizing.md`
  3. Target specific weaknesses. `chapters/ch02-three-steps-to-productizing.md`
  4. Build a feedback system. `chapters/ch02-three-steps-to-productizing.md`
  5. List permissionless mentors who publish freely, and a community learning the same skill. `chapters/ch03-learning-and-building-in-public.md`
  6. Publish the reps as proof of work. `chapters/ch02-three-steps-to-productizing.md`
- **criteria**:
  - Has all four deliberate-practice ingredients. `chapters/ch02-three-steps-to-productizing.md`
  - Progress is counted in iterations. `chapters/ch02-three-steps-to-productizing.md`
  - Names at least one mentor and one community. `chapters/ch03-learning-and-building-in-public.md`
- **data**: none.
- **upstream / downstream**: none / BP3 (reps are a prerequisite).
- **depth**: full (personal skill plan, not a growth deliverable in the strict sense)

**Mentioned, no procedure**: pricing of a productized service, product launch, sales.

---

## gretta-start-scale

Course arc: Idea → Customer & Validation → Brand & Store → Develop → Profitable → Audience → Waitlist → Influencers → Launch & Ops → Iterate (`cheatsheet.md`). E-commerce / DTC physical products. Richest procedures in the slice.

### GS1. P.S.S.P. idea shortlist
- **name**: Problem-first idea shortlist (P.S.S.P. + screening)
- **ask**: "Help me come up with a product idea and pick the best three."
- **inputs**: problems the founder has experienced, niche interest.
- **steps**:
  1. List five broad problems (scratch your own itch). `chapters/ch01-finding-idea-ideation-differentiation.md`
  2. For each: Problem, Stat, Solution (often the polar opposite), Product. `chapters/ch01-finding-idea-ideation-differentiation.md`
  3. Screen each: market (size search), demand/trend (Google Trends, worldwide, 5-year), e-commerce viability (light, not fragile, not regulated). `chapters/ch01-finding-idea-ideation-differentiation.md`
  4. Rank and cut to three. `chapters/ch01-finding-idea-ideation-differentiation.md`
  5. Triangulate: cross-check instinct with data. `chapters/ch01-finding-idea-ideation-differentiation.md`
- **criteria**:
  - Starts with five problems, not products. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - Every idea has all four P.S.S.P. fields, with a numeric stat. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - Every idea has a yes/no on market, demand and shippability. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - Ends with exactly three ideas. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - No heavy, fragile or regulated product kept for a first launch. `chapters/ch01-finding-idea-ideation-differentiation.md`
- **data**: Google search, Google Trends, optionally TikTok Creative Center.
- **upstream / downstream**: none / GS2, GS3.
- **depth**: full

### GS2. UVP by changing one dimension
- **name**: Unique Value Proposition (Design / Function / Price / Time)
- **ask**: "How do I differentiate this product without reinventing it?"
- **inputs**: the chosen product, competitor reviews.
- **steps**:
  1. Read 2–3 star reviews of existing products; list the most common complaints. `chapters/ch01-finding-idea-ideation-differentiation.md`
  2. Choose one dimension: Design (personalisation, materials), Function (fix a pain point, hybridize), Price (accessible DTC or luxury), Time (limited edition, drops). `chapters/ch01-finding-idea-ideation-differentiation.md`
  3. Write the UVP as one clear, compelling message of why you're different and worth buying. `chapters/ch01-finding-idea-ideation-differentiation.md`
- **criteria**:
  - Exactly one dimension changed and named. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - Function changes trace to a complaint from 2–3 star reviews. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - UVP is a single sentence. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - Does not compete on luxury price without capital/brand. `chapters/ch01-finding-idea-ideation-differentiation.md`
  - Time-based scarcity is real, not faked. `chapters/ch07-audience-conversion-waitlist.md`
- **data**: marketplace reviews.
- **upstream / downstream**: GS1 / GS4, GS6.
- **depth**: full

### GS3. Customer personas (2–3)
- **name**: Customer Persona Canvas set
- **ask**: "Build customer personas for my product."
- **inputs**: market research, any customer or audience data.
- **steps**:
  1. Write each persona first as a narrative story. `chapters/ch02-finding-idea-customer-validation.md`
  2. Fill demographics (age, gender, job, marital status) and psychographics (interests, habits, attitudes, emotions, preferences). `chapters/ch02-finding-idea-customer-validation.md`
  3. Add name, picture, goals, pain points, 15-second elevator pitch. `chapters/ch02-finding-idea-customer-validation.md`
  4. Build 2–3, either transitional (by age) or oppositional. `chapters/ch02-finding-idea-customer-validation.md`
  5. Optional: use AI with a role prompt and your own data, have it ask you questions; never treat output as final. `chapters/ch02-finding-idea-customer-validation.md`
  6. Note each segment's FAQs and key messaging. `chapters/ch02-finding-idea-customer-validation.md`
- **criteria**:
  - 2 or 3 personas. `chapters/ch02-finding-idea-customer-validation.md`
  - Each has demographics and psychographics, name, goals, pains, elevator pitch. `chapters/ch02-finding-idea-customer-validation.md`
  - Set is labelled transitional or oppositional. `chapters/ch02-finding-idea-customer-validation.md`
  - Does not define the market as "everyone". `chapters/ch02-finding-idea-customer-validation.md`
- **data**: research data.
- **upstream / downstream**: GS1 / GS4, GS5, GS6, GS14, GS19.
- **depth**: full

### GS4. Lean Canvas
- **name**: Lean Canvas (one page)
- **ask**: "Put my business on a Lean Canvas."
- **inputs**: idea, UVP, personas, cost and price guesses.
- **steps**:
  1. Fill the 10 blocks: Problem, Existing Alternatives, Solution, Key Metrics, UVP, Unfair Advantage, Channels, Customer Segments, Cost Structure, Revenue Streams. `chapters/ch02-finding-idea-customer-validation.md`
  2. Instrument key metrics: visitors → checkout → buyers. `chapters/ch02-finding-idea-customer-validation.md`
  3. Skip Unfair Advantage if stuck. `chapters/ch02-finding-idea-customer-validation.md`
- **criteria**:
  - All blocks filled (Unfair Advantage may be blank). `chapters/ch02-finding-idea-customer-validation.md`
  - Readable by someone who isn't the founder. `chapters/ch02-finding-idea-customer-validation.md`
  - Key metrics include the visitor → checkout → buyer funnel. `chapters/ch02-finding-idea-customer-validation.md`
- **data**: none.
- **upstream / downstream**: GS2, GS3 / GS5, GS7.
- **depth**: full

### GS5. 20-person validation interviews
- **name**: Validation script and results summary
- **ask**: "Write a validation script and tell me how to read the answers."
- **inputs**: personas, product concept (render or mock-up).
- **steps**:
  1. Recruit ~20 people who fit the personas. `chapters/ch02-finding-idea-customer-validation.md`
  2. Ask: would you purchase? would you recommend? if not, why not? one thing to change? other feedback? `chapters/ch02-finding-idea-customer-validation.md`
  3. Prefer in person and filmed (expression and tone). `chapters/ch02-finding-idea-customer-validation.md`, `chapters/ch10a-bonus-cro-scaling-people-process.md`
  4. Run desk research in parallel (Google, hashtags). `chapters/ch02-finding-idea-customer-validation.md`
  5. Majority yes = proceed; otherwise iterate the idea/UVP. `chapters/ch02-finding-idea-customer-validation.md`
- **criteria**:
  - Sample is ~20 and persona-matched. `chapters/ch02-finding-idea-customer-validation.md`
  - Uses the five scripted questions. `chapters/ch02-finding-idea-customer-validation.md`
  - Reports yes count against majority. `chapters/ch02-finding-idea-customer-validation.md`
  - Done before any spend on physical product. `chapters/ch02-finding-idea-customer-validation.md`
- **data**: interviewees.
- **upstream / downstream**: GS3, GS4 / GS10, GS14.
- **depth**: full

### GS6. Minimum Viable Brand (Brand Pyramid + positioning)
- **name**: MVB brand pyramid
- **ask**: "Define my brand."
- **inputs**: personas, UVP, P.S.S.P.
- **steps**:
  1. Target audience (from personas). `chapters/ch03-branding-store-setup.md`
  2. Benefits (rational brand features). `chapters/ch03-branding-store-setup.md`
  3. Values / Reasons To Believe (emotional). `chapters/ch03-branding-store-setup.md`
  4. Aphorism / brand value proposition. `chapters/ch03-branding-store-setup.md`
  5. Vision beyond the bottom line. `chapters/ch03-branding-store-setup.md`
  6. Personality: one core plus two sub archetypes (Millward Brown). `chapters/ch03-branding-store-setup.md`
  7. Positioning: the one word to own in the customer's mind. `chapters/ch03-branding-store-setup.md`
- **criteria**:
  - All six pyramid levels filled. `chapters/ch03-branding-store-setup.md`
  - Personality is exactly 1 core + 2 sub archetypes. `chapters/ch03-branding-store-setup.md`
  - Names a single positioning word. `chapters/ch03-branding-store-setup.md`
  - Fits on a page (minimum viable, not a full strategy). `chapters/ch03-branding-store-setup.md`
  - Early on, persona is a subset of the founder's own voice. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **data**: none.
- **upstream / downstream**: GS3, GS2 / GS7, GS8, GS15, GS18.
- **depth**: full

### GS7. Brand name shortlist
- **name**: Name-storming shortlist
- **ask**: "Give me brand name options."
- **inputs**: P.S.S.P., Lean Canvas, brand pyramid.
- **steps**:
  1. 5-minute word dump of ≥15 words from P.S.S.P., Lean Canvas, pyramid. `chapters/ch03-branding-store-setup.md`
  2. Take 5–10 favorites through a thesaurus. `chapters/ch03-branding-store-setup.md`
  3. Produce 3–5 candidates; classify each (literal, descriptive, associative/suggestive, coined). `chapters/ch03-branding-store-setup.md`
  4. Check domain and trademark availability. `chapters/ch03-branding-store-setup.md`, `chapters/ch05-making-product-profitable.md`
- **criteria**:
  - 3–5 candidates. `chapters/ch03-branding-store-setup.md`
  - Each is labelled with its category; associative/suggestive preferred. `chapters/ch03-branding-store-setup.md`
  - No literal/generic name without owned domain and trademark. `chapters/ch03-branding-store-setup.md`
  - Availability checked for each. `chapters/ch03-branding-store-setup.md`
- **data**: domain registrar, trademark search (USPTO TESS in US).
- **upstream / downstream**: GS6 / GS9, GS13.
- **depth**: full

### GS8. Brand kit and designer briefs (brand + product render + packaging)
- **name**: Design brief set
- **ask**: "Write the brief for my designer (logo, product render, packaging)."
- **inputs**: brand pyramid, product features, materials, shipping constraints.
- **steps**:
  1. Brand kit: colourways tied to values, typography, logo (stylized name is enough). `chapters/ch03-branding-store-setup.md`
  2. Give mockups and mood boards (often 2 directions); separate competitors from Brand Spo. `chapters/ch03-branding-store-setup.md`
  3. Product render brief, 3 keys: features (non-negotiables), materials, product framework (light, high perceived value, easy to ship). `chapters/ch04-developing-planning-product.md`
  4. Require original working files. `chapters/ch04-developing-planning-product.md`
  5. Packaging: unboxing, shipping cost, shape, perceived value, fragility. `chapters/ch04-developing-planning-product.md`
- **criteria**:
  - Colors justified by brand values. `chapters/ch03-branding-store-setup.md`
  - Product brief covers all 3 keys. `chapters/ch04-developing-planning-product.md`
  - Packaging brief addresses all 5 considerations. `chapters/ch04-developing-planning-product.md`
  - Contract/brief states ownership of working files. `chapters/ch04-developing-planning-product.md`
- **data**: designer (Upwork, ~$250–$500 for a render).
- **upstream / downstream**: GS6 / GS10, GS18.
- **depth**: partial (brief content, no design procedure)

### GS9. Shopify store setup checklist
- **name**: Store setup checklist
- **ask**: "Set up my Shopify store, step by step."
- **inputs**: brand name, policies, payment region.
- **steps**:
  1. Choose platform (Shopify default for beginners); store name/URL cannot change. `chapters/ch03-branding-store-setup.md`
  2. Set currency and units; enable Shopify Payments and PayPal. `chapters/ch03-branding-store-setup.md`
  3. Pick a free theme. `chapters/ch03-branding-store-setup.md`
  4. Add shipping, returns, terms, privacy, FAQ, contact pages. `chapters/ch03-branding-store-setup.md`
  5. Connect sales channels; add a reviews app. `chapters/ch03-branding-store-setup.md`
  6. Add one BNPL provider and free shipping baked into price. `chapters/ch09-launch-operations.md`
- **criteria**:
  - PayPal enabled alongside card. `chapters/ch03-branding-store-setup.md`, `chapters/ch09-launch-operations.md`
  - Free theme, no developer hired. `chapters/ch03-branding-store-setup.md`
  - All legal/policy pages present. `chapters/ch03-branding-store-setup.md`
  - Exactly one BNPL provider. `chapters/ch09-launch-operations.md`
- **data**: Shopify account.
- **upstream / downstream**: GS7 / GS19, GS24.
- **depth**: full

### GS10. Supplier shortlist and first message
- **name**: Alibaba supplier shortlist + leverage message + spec sheet
- **ask**: "Find manufacturers for my product and write the first message."
- **inputs**: validated product, render/prototype, spec.
- **steps**:
  1. Prototype and first run locally; go global only after validation. `chapters/ch04-developing-planning-product.md`
  2. Search Alibaba for Manufacturers, not Products. `chapters/ch04-developing-planning-product.md`
  3. Shortlist 5 on the 6 criteria: Verified, Trade Assurance, ISO + BSCI, 5+ years and revenue, relevance, transparency. `chapters/ch04-developing-planning-product.md`
  4. Write the leverage-building message: who you are and selling avenue, specific facts from their page, QC/machinery question, long-term partnership, factory visit. `chapters/ch04-developing-planning-product.md`
  5. Attach a one-page spec sheet. `chapters/ch04-developing-planning-product.md`
  6. Funnel 5 → 3 sampled → 1; judge on sample quality, sample price, communication. `chapters/ch04-developing-planning-product.md`
- **criteria**:
  - Exactly 5 shortlisted, each scored on all 6 criteria. `chapters/ch04-developing-planning-product.md`
  - Message does not open with price or MOQ. `chapters/ch04-developing-planning-product.md`
  - Message cites at least one specific fact about the supplier. `chapters/ch04-developing-planning-product.md`
  - Mentions long-term partnership and a factory visit. `chapters/ch04-developing-planning-product.md`
  - Spec sheet is attached. `chapters/ch04-developing-planning-product.md`
  - Single one-stop supplier, not parts from many. `chapters/ch04-developing-planning-product.md`
- **data**: Alibaba listings; supplier quotes.
- **upstream / downstream**: GS5, GS8 / GS11, GS12.
- **depth**: full

### GS11. Pricing and margin sheet
- **name**: COGS, price and gross margin sheet
- **ask**: "Price my product and check my margin."
- **inputs**: supplier quotes, shipping, fees, competitor prices.
- **steps**:
  1. List COGS: production, freight, pick and pack, storage, transaction and bank fees, software, staff, design/renders, inspections, legal, samples. `chapters/ch05-making-product-profitable.md`
  2. Set price ≥ 2.5× per-unit cost. `chapters/ch05-making-product-profitable.md`
  3. Compute gross margin = (Revenue − COGS) ÷ Revenue; target 30–60%, never < 30%. `chapters/ch05-making-product-profitable.md`
  4. Bake shipping into price for free shipping. `chapters/ch09-launch-operations.md`
  5. Apply psychological pricing: ≤3 value-tiered variants, bigger pack cheaper per unit, whole numbers, offer priced in. `chapters/ch05-making-product-profitable.md`
  6. If undercut: cut production cost (not materials), bundle low with high margin, or raise price. `chapters/ch05-making-product-profitable.md`
- **criteria**:
  - Every COGS line is present or marked n/a. `chapters/ch05-making-product-profitable.md`
  - Price / unit cost ≥ 2.5. `chapters/ch05-making-product-profitable.md`
  - Gross margin computed and between 30% and 60%. `chapters/ch05-making-product-profitable.md`
  - At most 3 variants; larger pack has lower per-unit price. `chapters/ch05-making-product-profitable.md`
  - No launch discount built in as the default. `chapters/ch09-launch-operations.md`
- **data**: supplier quotes, carrier rates, processor fees.
- **upstream / downstream**: GS10 / GS12, GS22.
- **depth**: full

### GS12. First order and inspection plan
- **name**: MOQ order, inspection and contract checklist
- **ask**: "Plan my first stock order and quality inspection."
- **inputs**: supplier, MOQ, product spec.
- **steps**:
  1. Order at MOQ; keep it small. `chapters/ch05-making-product-profitable.md`
  2. Get a basic manufacturing contract with a warranty clause. `chapters/ch05-making-product-profitable.md`
  3. Write inspection instructions in simple, descriptive English. `chapters/ch05-making-product-profitable.md`
  4. Inspect at the source before shipping (DIY or third-party sampling ~20%). `chapters/ch05-making-product-profitable.md`
  5. Accept 2–5% defects as normal; inspect every new order or ~every 3 months. `chapters/ch05-making-product-profitable.md`
  6. Inspect packaging too (typos, spec misses). `chapters/ch04-developing-planning-product.md`
- **criteria**:
  - Order quantity equals MOQ. `chapters/ch05-making-product-profitable.md`
  - Contract has a manufacturer warranty. `chapters/ch05-making-product-profitable.md`
  - Inspection instructions exist and are concrete. `chapters/ch05-making-product-profitable.md`
  - Inspection happens before goods ship. `chapters/ch05-making-product-profitable.md`
  - Defect threshold stated (2–5%). `chapters/ch05-making-product-profitable.md`
- **data**: supplier contract, inspector quote.
- **upstream / downstream**: GS10, GS11 / GS22.
- **depth**: full

### GS13. Trademark plan
- **name**: Trademark and IP decision
- **ask**: "What should I trademark or patent?"
- **inputs**: brand name, product category.
- **steps**:
  1. Search the trademark register for the class. `chapters/ch05-making-product-profitable.md`
  2. Trademark one thing: the brand name. `chapters/ch05-making-product-profitable.md`
  3. Skip patents unless a proprietary scientific formula. `chapters/ch05-making-product-profitable.md`
- **criteria**:
  - Names the class searched. `chapters/ch05-making-product-profitable.md`
  - Only the brand name filed; no taglines. `chapters/ch05-making-product-profitable.md`
  - Patent decision justified. `chapters/ch05-making-product-profitable.md`
- **data**: trademark database, lawyer.
- **upstream / downstream**: GS7 / none.
- **depth**: partial (legal advice required)

### GS14. Content system (3 C's, territories, weighting)
- **name**: Social content plan
- **ask**: "Build my content plan for Instagram/TikTok before launch."
- **inputs**: personas, brand pyramid, account insights.
- **steps**:
  1. Pick 3–5 content territories, including Products & Promotions and Celebrating Your Community. `chapters/ch06-audience-community-content.md`
  2. Plan value-adding Content with relevant CTAs. `chapters/ch06-audience-community-content.md`
  3. Plan Collaboration: shout-out-for-shout-out, paid niche-account shout-outs, influencer giveaways. `chapters/ch06-audience-community-content.md`
  4. Post daily (Consistency). `chapters/ch06-audience-community-content.md`
  5. Mix BGC, UGC (incentivized), IGC; curate legally with credit. `chapters/ch06-audience-community-content.md`
  6. Find Top Performing Content (~20%+ more engagement) and weight the calendar toward it. `chapters/ch06-audience-community-content.md`
- **criteria**:
  - 3–5 territories including the two universal ones. `chapters/ch06-audience-community-content.md`
  - Daily cadence. `chapters/ch06-audience-community-content.md`
  - All three content types appear. `chapters/ch06-audience-community-content.md`
  - Has at least one collaboration tactic. `chapters/ch06-audience-community-content.md`
  - Calendar is not mostly sales content. `chapters/ch06-audience-community-content.md`
  - Curated posts carry credit. `chapters/ch06-audience-community-content.md`
- **data**: platform insights.
- **upstream / downstream**: GS3, GS6 / GS15, GS16, GS19.
- **depth**: full

### GS15. Content funnel map
- **name**: Awareness → Evaluation → Purchase content map
- **ask**: "People visit but don't buy. Map content to the buyer journey."
- **inputs**: content inventory, offer.
- **steps**:
  1. Awareness (cold): problem/brand content: posts, blogs, giveaways, ebooks, educational video. `chapters/ch06-audience-community-content.md`
  2. Evaluation (warm): social proof plus product content: reviews, UGC, press, waitlist size, demos, FAQs. `chapters/ch06-audience-community-content.md`
  3. Purchase (hot): psychology plus an offer: free shipping/returns, guarantee, gift, first-order discount. `chapters/ch06-audience-community-content.md`
  4. Apply Reciprocity, Social Proof, Scarcity (never faked). `chapters/ch07-audience-conversion-waitlist.md`
- **criteria**:
  - Every stage has at least one content item. `chapters/ch06-audience-community-content.md`
  - Evaluation stage includes social proof. `chapters/ch06-audience-community-content.md`
  - Purchase stage includes a named offer. `chapters/ch06-audience-community-content.md`
  - Any scarcity claim is backed by real limits. `chapters/ch07-audience-conversion-waitlist.md`
- **data**: none.
- **upstream / downstream**: GS14 / GS18, GS24.
- **depth**: full

### GS16. Tag-to-win giveaway plan
- **name**: Giveaway campaign
- **ask**: "Plan a giveaway to grow my Instagram before launch."
- **inputs**: product, partner accounts.
- **steps**:
  1. Clear CTA: follow + tag one friend per comment. `chapters/ch07-audience-conversion-waitlist.md`
  2. Give away two of one attainable product, candid photo. `chapters/ch07-audience-conversion-waitlist.md`
  3. Time-limit it. `chapters/ch07-audience-conversion-waitlist.md`
  4. Co-host with a higher-reach niche account, influencer or non-competing brand. `chapters/ch07-audience-conversion-waitlist.md`
  5. Second-chance draw plus consolation discount. `chapters/ch07-audience-conversion-waitlist.md`
- **criteria**:
  - Entry needs one tag, not five. `chapters/ch07-audience-conversion-waitlist.md`
  - Exactly two prizes, attainable. `chapters/ch07-audience-conversion-waitlist.md`
  - Has an end date. `chapters/ch07-audience-conversion-waitlist.md`
  - Names a co-host. `chapters/ch07-audience-conversion-waitlist.md`
  - Has a consolation offer. `chapters/ch07-audience-conversion-waitlist.md`
- **data**: partner accounts.
- **upstream / downstream**: GS14 / GS18.
- **depth**: full

### GS17. Post-purchase micro-moments plan
- **name**: Post-purchase sharing and review plan
- **ask**: "How do I turn buyers into repeat customers and reviewers?"
- **inputs**: packaging, email tool, hashtag.
- **steps**:
  1. Right after purchase: share prompt. `chapters/ch07-audience-conversion-waitlist.md`
  2. Unboxing: packaging plus insert card or email CTA. `chapters/ch07-audience-conversion-waitlist.md`
  3. Product in action: branded hashtag with incentive. `chapters/ch07-audience-conversion-waitlist.md`
  4. Results: before/afters, video testimonials, with consent. `chapters/ch07-audience-conversion-waitlist.md`
  5. Review requests ~3–5 days after delivery. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **criteria**:
  - All four moments have a defined trigger and incentive. `chapters/ch07-audience-conversion-waitlist.md`
  - Consent step for resharing. `patterns.md` (Post-Purchase Micro-Moments)
  - Review email timing stated. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **data**: email/review apps.
- **upstream / downstream**: GS8 (packaging) / GS14 (UGC).
- **depth**: full

### GS18. Waitlist landing page
- **name**: Pre-launch waitlist page
- **ask**: "Write my waitlist landing page."
- **inputs**: brand pyramid benefits, render, any testimonial.
- **steps**:
  1. Headline (attention, anticipation). `chapters/ch07-audience-conversion-waitlist.md`
  2. Subhead: what it is and who it's for. `chapters/ch07-audience-conversion-waitlist.md`
  3. Hero image: prototype or render in use. `chapters/ch07-audience-conversion-waitlist.md`
  4. Benefits copy from the pyramid. `chapters/ch07-audience-conversion-waitlist.md`
  5. Social proof (even a pre-launch testimonial). `chapters/ch07-audience-conversion-waitlist.md`
  6. Clickable signup CTA. `chapters/ch07-audience-conversion-waitlist.md`
  7. Scarcity: countdown or "be the first". `chapters/ch07-audience-conversion-waitlist.md`
  8. Set target ≥100 signups; route data to a sheet. `chapters/ch07-audience-conversion-waitlist.md`
- **criteria**:
  - All 7 components present. `chapters/ch07-audience-conversion-waitlist.md`
  - Subhead states product and audience in one line. `chapters/ch07-audience-conversion-waitlist.md`
  - CTA explicitly asks for signup (clarity over cleverness). `chapters/ch07-audience-conversion-waitlist.md`
  - Benefits, not features. `chapters/ch07-audience-conversion-waitlist.md`
  - Signup target ≥100 stated. `chapters/ch07-audience-conversion-waitlist.md`
  - Signup is tied to a specific product where possible. `chapters/ch10b-bonus-founder-case-studies-1m-day.md`
- **data**: landing page builder.
- **upstream / downstream**: GS6, GS8 / GS22.
- **depth**: full

### GS19. Influencer campaign plan
- **name**: Goal-first influencer campaign plan
- **ask**: "Plan an influencer campaign for my launch."
- **inputs**: goal, budget, personas, highest-CLV demographic.
- **steps**:
  1. Pick the goal from the 4 C's (Conversions, Community, Content, Conversation); it sets campaign type. `chapters/ch08-influencer-marketing-blueprint.md`
  2. Select on Reach × Relevancy × Relationship and the 7 selection questions. `chapters/ch08-influencer-marketing-blueprint.md`
  3. Run audience analysis (Insights audience tab, or last 20+ engagers). `chapters/ch08-influencer-marketing-blueprint.md`
  4. Mix macro and micro by goal. `chapters/ch08-influencer-marketing-blueprint.md`
  5. Find via the 4 strategies (ideal influencer + clusters, customer follows, other companies, platform search). `chapters/ch08-influencer-marketing-blueprint.md`
  6. Brief and negotiate deliverables vs compensation; give creative freedom. `chapters/ch08-influencer-marketing-blueprint.md`
  7. Plan the 3-month compounding cadence: test, apply, re-collaborate with top performers. `chapters/ch08-influencer-marketing-blueprint.md`
  8. Set the target return before launch; track with codes/UTM. `chapters/ch08-influencer-marketing-blueprint.md`
- **criteria**:
  - Exactly one primary C named, with matching campaign type. `chapters/ch08-influencer-marketing-blueprint.md`
  - Each influencer has an audience-match note, not only follower count. `chapters/ch08-influencer-marketing-blueprint.md`
  - Macro/micro split justified by goal. `chapters/ch08-influencer-marketing-blueprint.md`
  - Return target and tracking method set before sending. `chapters/ch08-influencer-marketing-blueprint.md`
  - Plan spans about 3 months, not a one-off batch of ~10. `chapters/ch08-influencer-marketing-blueprint.md`
  - Brief gives guidance, no scripted caption. `chapters/ch08-influencer-marketing-blueprint.md`
- **data**: influencer insights, rates, discount codes/UTM.
- **upstream / downstream**: GS3, GS14 / GS20, GS21.
- **depth**: full

### GS20. Influencer outreach message
- **name**: Personalized influencer outreach email/DM
- **ask**: "Write the outreach message to this influencer."
- **inputs**: influencer research, campaign details, compensation.
- **steps**:
  1. Short subject / first line that sparks interest. `chapters/ch08-influencer-marketing-blueprint.md`
  2. Personal: compliment specifics from research. `chapters/ch08-influencer-marketing-blueprint.md`
  3. Give a why: why them, why a fit. `chapters/ch08-influencer-marketing-blueprint.md`
  4. Introduce the brand and how it's different, no competitor names. `chapters/ch08-influencer-marketing-blueprint.md`
  5. State campaign details, transparent compensation, expectations. `chapters/ch08-influencer-marketing-blueprint.md`
  6. Clear next-step CTA; follow up by DM. `chapters/ch08-influencer-marketing-blueprint.md`
- **criteria**:
  - Contains at least one specific detail about the influencer. `chapters/ch08-influencer-marketing-blueprint.md`
  - States compensation; does not offer "exposure". `chapters/ch08-influencer-marketing-blueprint.md`
  - No competitor named. `chapters/ch08-influencer-marketing-blueprint.md`
  - No creative control demands. `chapters/ch08-influencer-marketing-blueprint.md`
  - Ends with one next step. `chapters/ch08-influencer-marketing-blueprint.md`
  - Target hasn't promoted a direct competitor in ~60 days. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **data**: influencer profile.
- **upstream / downstream**: GS19 / GS21.
- **depth**: full

### GS21. Influencer asset leverage and ROI report
- **name**: Post-campaign leverage and ROI review
- **ask**: "The campaign ran. How do we reuse the content and judge ROI?"
- **inputs**: campaign results, usage rights.
- **steps**:
  1. Measure against the pre-set goal: awareness (reach, mentions), content (pieces × quality), followers, sales (codes/links). `chapters/ch08-influencer-marketing-blueprint.md`
  2. Add cost per engagement and site data. `chapters/ch08-influencer-marketing-blueprint.md`
  3. With permission: repost, boost, use IGC in paid ads, build retargeting, use on pages and email. `chapters/ch08-influencer-marketing-blueprint.md`
  4. Re-collaborate with top performers. `chapters/ch08-influencer-marketing-blueprint.md`
- **criteria**:
  - Metric matches the goal chosen in GS19. `chapters/ch08-influencer-marketing-blueprint.md`
  - Judged cumulatively, not per post. `chapters/ch08-influencer-marketing-blueprint.md`
  - Usage rights confirmed before reuse. `chapters/ch08-influencer-marketing-blueprint.md`
  - Names who to re-collaborate with. `chapters/ch08-influencer-marketing-blueprint.md`
- **data**: campaign analytics.
- **upstream / downstream**: GS19, GS20 / GS19 (next cycle).
- **depth**: full

### GS22. 3-phase launch plan
- **name**: Launch plan (plan, pre-launch, launch)
- **ask**: "Plan my product launch."
- **inputs**: waitlist size, stock, influencer pipeline, offer options.
- **steps**:
  1. Plan: Monday launch date, dates for every task, pre-mortem, "why buy now" offer (newness default), marketing plan. `chapters/ch09-launch-operations.md`
  2. Pre-launch (~8 weeks): hype, waitlist growth, influencer sneak peeks, stock and store ready. `chapters/ch09-launch-operations.md`
  3. Email the waitlist weekly from ~2–3 weeks out, then 2–3× in the final week. `chapters/ch09-launch-operations.md`
  4. Launch: test everything (dummy purchase, receipt, pop-ups, browsers, mobile). `chapters/ch09-launch-operations.md`
  5. Email + post at the exact time with one CTA to shop. `chapters/ch09-launch-operations.md`
  6. Keep support open; keep momentum with closing-soon scarcity. `chapters/ch09-launch-operations.md`
- **criteria**:
  - Launch date is a Monday. `chapters/ch09-launch-operations.md`
  - Has a pre-mortem list with fixes. `chapters/ch09-launch-operations.md`
  - States the "why buy now" answer. `chapters/ch09-launch-operations.md`
  - Email cadence matches weekly then 2–3× final week. `chapters/ch09-launch-operations.md`
  - Launch-day message has one CTA. `chapters/ch09-launch-operations.md`
  - Includes a test checklist. `chapters/ch09-launch-operations.md`
  - Waitlist ≥100 before launch. `chapters/ch07-audience-conversion-waitlist.md`
- **data**: stock counts, email tool.
- **upstream / downstream**: GS18, GS12, GS19 / GS23, GS25.
- **depth**: full

### GS23. Stock management sheet
- **name**: Stock and reorder tracker
- **ask**: "Help me avoid stockouts."
- **inputs**: stock on hand, sales history, supplier lead time.
- **steps**:
  1. Track stock on hand, average sales (daily/weekly/monthly), lead time. `chapters/ch09-launch-operations.md`
  2. Set reorder triggers. `chapters/ch09-launch-operations.md`
  3. Stock take weekly (Mondays) early, monthly later. `chapters/ch09-launch-operations.md`
  4. Start small; do not over-order to "get ahead". `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **criteria**:
  - All three numbers present. `chapters/ch09-launch-operations.md`
  - Reorder trigger defined. `chapters/ch09-launch-operations.md`
  - Stock-take cadence stated. `chapters/ch09-launch-operations.md`
- **data**: sales and inventory data.
- **upstream / downstream**: GS12 / none.
- **depth**: partial (no reorder formula)

### GS24. Store CRO audit
- **name**: Home page, product page and cart conversion audit
- **ask**: "Audit my store for conversion."
- **inputs**: live store URL.
- **steps**:
  1. Home page order: lifestyle hero + UVP, top ~3 featured products, 3 RTB icons, social proof, social feed/blog; brand story moved to About. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  2. Product pages: white backgrounds, info tabs, reviews. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  3. Cart: meaningful upsells/bundles, shipping calculator, multi-currency. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  4. Fast incentivized pop-up, FOMO app, notify-me option. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  5. Reduce variants to cut analysis paralysis. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  6. Check free shipping, PayPal, one BNPL. `chapters/ch09-launch-operations.md`
- **criteria**:
  - Home page follows the 5-block order. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - RTBs are exactly 3 icons with title + one line. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - Pop-up offers a concrete discount. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - Bundle saving is meaningful, not token. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - Long brand copy is off the home page. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **data**: store access, analytics.
- **upstream / downstream**: GS9, GS15 / none.
- **depth**: full

### GS25. Customer support setup and feedback loop
- **name**: Founder-run support and reiteration log
- **ask**: "Set up customer support and a feedback loop to improve the product."
- **inputs**: support email, FAQ candidates, customer list.
- **steps**:
  1. Founder runs support; support@ address and 24–48 h auto-responder. `chapters/ch09-launch-operations.md`
  2. Build saved replies and an FAQ page. `chapters/ch09-launch-operations.md`
  3. Log complaints, returns and issues in a running sheet. `chapters/ch09-launch-operations.md`
  4. Send a short, incentivized satisfaction survey within ~a month: NPS and "one thing you'd change?". `chapters/ch09-launch-operations.md`
  5. Iterate only from real feedback; help desk at ~$10K/mo; hire at ~6 figures ("when it hurts"). `chapters/ch09-launch-operations.md`
- **criteria**:
  - Response-time promise stated. `chapters/ch09-launch-operations.md`
  - Survey includes NPS and one-change question. `chapters/ch09-launch-operations.md`
  - Each product change cites a logged complaint or survey result. `chapters/ch09-launch-operations.md`
  - Outsourcing threshold stated. `chapters/ch09-launch-operations.md`
- **data**: survey tool, support inbox.
- **upstream / downstream**: GS22 / GS26.
- **depth**: full

### GS26. SOP and Entrepreneurship Scorecard delegation map
- **name**: SOP set + task scorecard
- **ask**: "I'm the bottleneck. Write SOPs and tell me what to delegate."
- **inputs**: list of recurring tasks.
- **steps**:
  1. Any task done more than once gets an SOP (step-by-step instructions). `chapters/ch10a-bonus-cro-scaling-people-process.md`
  2. Structure SOPs as one-off items then ongoing items (example: Instagram-management SOP). `chapters/ch10a-bonus-cro-scaling-people-process.md`
  3. Bucket tasks at $1,000 / $100 / $5 per hour. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  4. Founder keeps $1,000/h tasks; delegate the rest by role and wage. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **criteria**:
  - Every recurring task has an SOP. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - SOPs separate one-off from ongoing items. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - Every task carries a $ tier and an owner. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - No $5/h task left with the founder. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **data**: none.
- **upstream / downstream**: GS25 / none.
- **depth**: full

### GS27. Co-founder vs GM decision
- **name**: Co-founder / GM structure decision
- **ask**: "Should I take a co-founder or promote a GM?"
- **inputs**: founder's skills, candidates, equity appetite.
- **steps**:
  1. Solo-found if you cover marketing and ops; else add a complementary skill set. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  2. Frame: 100% of $5–10M vs 50% of $100M. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  3. Exclude romantic partners and close friends; prefer proven work relationships. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  4. Prefer GM with vesting equity (ESOP); sign a shareholders agreement up front. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **criteria**:
  - Skill gap stated. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - Candidate is not a partner or close friend. `chapters/ch10a-bonus-cro-scaling-people-process.md`
  - Shareholders agreement or vesting schedule included. `chapters/ch10a-bonus-cro-scaling-people-process.md`
- **data**: legal counsel.
- **upstream / downstream**: none / none.
- **depth**: partial

### GS28. Monthly scarcity drop ritual
- **name**: Recurring drop with locked store and launch email
- **ask**: "Set up a monthly limited drop like The Fifth."
- **inputs**: waitlist, product, store.
- **steps**:
  1. Sell only in a fixed window; outside it the main CTA is email capture. `chapters/ch10b-bonus-founder-case-studies-1m-day.md`
  2. Password-lock the store at drop time; email the password ~24 h before. `chapters/ch10b-bonus-founder-case-studies-1m-day.md`
  3. Send the "24 hours to go" email: VIP access, password in bold, global times, set an alarm. `chapters/ch10b-bonus-founder-case-studies-1m-day.md`
  4. Feed the waitlist with influencers and a giveaway the month before. `chapters/ch10b-bonus-founder-case-studies-1m-day.md`
- **criteria**:
  - Window dates fixed and stated. `chapters/ch10b-bonus-founder-case-studies-1m-day.md`
  - Email has password, times and alarm prompt. `chapters/ch10b-bonus-founder-case-studies-1m-day.md`
  - Scarcity is real (stock and window). `chapters/ch07-audience-conversion-waitlist.md`
- **data**: email tool, store lock.
- **upstream / downstream**: GS18, GS19 / none.
- **depth**: partial (case study, not a taught procedure)

**Mentioned, no procedure**: shipping and 3PL setup (rules only, `chapters/ch04-developing-planning-product.md`); dropshipping and supplier diversification (case study, `chapters/ch10b-bonus-founder-case-studies-1m-day.md`); AI tool lists; pre-orders (Q&A tip, `chapters/ch10a-bonus-cro-scaling-people-process.md`).
