# advanced-email-marketing

## B-037 E1. Email marketing strategy plan (3 pilastri, OKR)
- ask: "Fammi il piano strategico di email marketing automation per il prossimo trimestre."
- inputs: business model (lead gen or e-commerce), CRM/GA data, competitors, customer survey.
- data: CRM, Google Analytics, Answer The Public, Ubersuggest, SEMRush, Similarweb, Google Trends (book's named tools).
- upstream: none.
- downstream: E2-E16.
- depth: full

### steps
1. Analisi in 4 areas: internal, demand, competition, trends. [chapters/ch01-strategia-fondamenti.md]
2. Obiettivi: max 3, quarterly, measurable. [chapters/ch01-strategia-fondamenti.md]
3. Risultati chiave: max 3 per objective. [chapters/ch01-strategia-fondamenti.md]
4. Tattiche anchored to the customer journey; map journey and pick first triggers from the 8. [chapters/ch01-strategia-fondamenti.md, chapters/ch05-customer-journey-trigger.md]
5. KPI (leading) vs key results (lagging). [chapters/ch01-strategia-fondamenti.md]
6. Action list (who, what, by when); execution centered on tests. [chapters/ch01-strategia-fondamenti.md]
### criteria
- At most 3 objectives, each with at most 3 key results. [chapters/ch01-strategia-fondamenti.md]
- All 4 analysis areas covered. [chapters/ch01-strategia-fondamenti.md]
- KPIs labelled leading vs lagging. [chapters/ch01-strategia-fondamenti.md]
- Action list has owner and date per item. [chapters/ch01-strategia-fondamenti.md]
- Strategy is written before a platform choice. [chapters/ch01-strategia-fondamenti.md]
- Each tactic names its trigger (of the 8). [chapters/ch05-customer-journey-trigger.md]

## B-038 E2. Automation workflow spec (grammatica del workflow)
- ask: "Specifica il workflow per [flusso] prima di costruirlo."
- inputs: flow goal, data fields available, segment size.
- data: ESP/CRM.
- upstream: E1.
- downstream: E3-E8.
- depth: full

### steps
1. Obiettivo + KPI, and who to EXCLUDE. [chapters/ch06-grammatica-workflow-flussi.md]
2. Segmento, checked to be large enough. [chapters/ch06-grammatica-workflow-flussi.md]
3. Trigger / enrollment with AND/OR/NOT. [chapters/ch06-grammatica-workflow-flussi.md]
4. Delay per step. [chapters/ch06-grammatica-workflow-flussi.md]
5. If/then branches. [chapters/ch06-grammatica-workflow-flussi.md]
6. Tempo: always-on or windowed; single or repeat entry. [chapters/ch06-grammatica-workflow-flussi.md]
7. Pre-launch checklist (sandbox trigger test, Smart Sending, UTM, mobile, Sunset downstream). [cheatsheet.md]
### criteria
- All 6 elements filled. [chapters/ch06-grammatica-workflow-flussi.md]
- An exclusion rule exists. [chapters/ch06-grammatica-workflow-flussi.md]
- Segment size estimated. [chapters/ch06-grammatica-workflow-flussi.md]
- Overlap with other flows/newsletters handled (Smart Sending or excluded segment). [chapters/ch06-grammatica-workflow-flussi.md]
- Re-entry rule stated. [chapters/ch06-grammatica-workflow-flussi.md]

## B-039 E3. Welcome series (onboarding)
- ask: "Scrivi la welcome series per i nuovi iscritti."
- inputs: acquisition channels, welcome incentive, brand story, founder voice.
- data: ESP.
- upstream: E2, E14.
- downstream: E13 (newsletter after onboarding).
- depth: full

### steps
1. One entry flow per acquisition channel. [chapters/ch02-acquisizione-lead.md, chapters/ch05-customer-journey-trigger.md]
2. 4-7 emails; Soap Opera Sequence (each ends with a spoiler). [patterns.md, chapters/ch06-grammatica-workflow-flussi.md]
3. A plain-text personal email from the founder. [patterns.md, chapters/ch09-framework-automation.md]
4. E-commerce variant: discount, reminder at 4h, last chance at 8h, then 7 emails every 3 days. [chapters/ch09-framework-automation.md]
5. Exclude onboarding contacts from regular newsletters; tag "Automation Completata" at end. [chapters/ch06-grammatica-workflow-flussi.md, patterns.md]
### criteria
- 4-7 emails. [patterns.md]
- Every email except the last ends with a teaser for the next. [chapters/ch06-grammatica-workflow-flussi.md]
- At least one plain-text founder email. [patterns.md]
- Newsletter exclusion during onboarding stated. [chapters/ch06-grammatica-workflow-flussi.md]
- Each email has subject + preview text. [chapters/ch04-email-perfetta.md]
- Static coupon only if high-volume generic welcome; otherwise dynamic. [chapters/ch09-framework-automation.md]

## B-040 E4. Lead-gen drip campaign (nurturing)
- ask: "Crea la drip campaign per portare i lead a prenotare una call."
- inputs: service, objections blocking purchase, CRM scoring, sales capacity.
- data: ESP + CRM.
- upstream: E2, E9.
- downstream: sales call (L1, F4).
- depth: full

### steps
1. 4-7 emails over 10-15 days (case: 7 in 12 days). [chapters/ch09-framework-automation.md]
2. Email #1 immediate value. [patterns.md]
3. Email #2 plain-text from founder/CEO, on day 2 in business hours. [chapters/ch09-framework-automation.md, patterns.md]
4. Alternate HTML and plain-text; SOS storytelling. [patterns.md, chapters/ch06-grammatica-workflow-flussi.md]
5. Funneling: after N emails continue only to openers. [chapters/ch09-framework-automation.md]
6. At end: score and tag (e.g. "Prospects"), create sales task. [chapters/ch09-framework-automation.md]
### criteria
- 4-7 emails within ~2 weeks. [chapters/ch09-framework-automation.md]
- Email #2 is plain text from a named person. [chapters/ch09-framework-automation.md]
- Ends with a CRM action (tag/score/task). [chapters/ch09-framework-automation.md]
- A funneling condition is defined. [chapters/ch09-framework-automation.md]
- Each email removes a purchase blocker or adds value. [chapters/ch09-framework-automation.md]

## B-041 E5. Cart and browse abandonment flows
- ask: "Imposta il recupero carrello e browse abandonment."
- inputs: e-commerce platform events, margin for discount, tracking consent status.
- data: e-commerce + ESP integration (e.g. Shopify events), countdown tool.
- upstream: E2, E15.
- downstream: E6; I8 (ad retargeting of the same people).
- depth: full

### steps
1. Browse abandonment: 1-2 emails ~2h after product view, showing the product; check behavioral tracking consent. [chapters/ch09-framework-automation.md, patterns.md]
2. Abandoned cart email #1 at ~1h: reminder, no discount. [chapters/ch09-framework-automation.md, patterns.md]
3. Email #2 at ~24h: deadline or discount via dynamic unique coupon. [chapters/ch09-framework-automation.md]
4. Rarely continue beyond 7 days. [chapters/ch09-framework-automation.md]
### criteria
- Cart flow has at most 2 emails. [patterns.md]
- Email #1 contains no discount. [patterns.md]
- Any coupon is unique per contact with expiry. [chapters/ch09-framework-automation.md]
- Browse email shows the viewed product. [patterns.md]
- Consent for behavioral tracking addressed. [chapters/ch05-customer-journey-trigger.md]

## B-042 E6. Post-purchase and replenishment flow
- ask: "Crea il flusso post-acquisto e replenishment."
- inputs: product usage cycle, review platform, cross-sell catalog, new vs repeat customer flag.
- data: e-commerce order data, CDP.
- upstream: E2.
- downstream: E7, E10.
- depth: full

### steps
1. Separate flows for new vs repeat customers. [chapters/ch09-framework-automation.md]
2. Sequence: confirmation/thanks, how-to, review request, coupon or up/cross-sell. [patterns.md, chapters/ch09-framework-automation.md]
3. Replenishment at ~80% of product cycle (80 days on 90-day product); use Expected Date Of Next Order. [chapters/ch09-framework-automation.md, chapters/ch05-customer-journey-trigger.md]
4. Up & cross-sell by bundle, travel size, category/brand. [chapters/ch09-framework-automation.md]
5. Optional: thank-you coupons by purchase-count cluster (3+: 10%; 2: 15%/30d; 1: 20%/30d; 0: 50%/24h). [chapters/ch09-framework-automation.md]
### criteria
- New and repeat customers get different flows. [chapters/ch09-framework-automation.md]
- Review request is a separate email after delivery (5-10 days per). [cheatsheet.md]
- Replenishment send time computed from the product cycle. [chapters/ch09-framework-automation.md]
- Coupons dynamic and unique. [chapters/ch09-framework-automation.md]

## B-043 E7. Winback and sunset flow
- ask: "Recupera i clienti inattivi e pulisci la lista."
- inputs: purchase cadence history, inactivity thresholds, send frequency, ESP pricing.
- data: CDP/RFM, ESP engagement data.
- upstream: E10.
- downstream: E16.
- depth: full

### steps
1. Set inactivity threshold from own purchase history. [patterns.md]
2. Winback: 2 emails (e.g. day 120 and +15 days), the second as last chance. [chapters/ch09-framework-automation.md]
3. Prioritize At Risk and Can't Lose Them clusters. [cheatsheet.md, chapters/ch07-segmentazione.md]
4. Non-openers go to Sunset: one "are you still here?" email with a confirm link. [patterns.md]
5. Archive non-responders. [chapters/ch09-framework-automation.md]
6. Sync a "Bentornato/a" ad for the same people. [chapters/ch10-ai-advertising.md]
### criteria
- Winback is exactly 2 emails with stated days. [chapters/ch09-framework-automation.md]
- Threshold is justified by own cadence, not drastic. [chapters/ch09-framework-automation.md]
- Sunset includes an interest-confirm action. [patterns.md]
- Final state for non-responders is archived. [chapters/ch09-framework-automation.md]

## B-044 E8. Date flow (birthday with Bait & Hook)
- ask: "Crea un flusso compleanno, ma non ho le date."
- inputs: which date matters (birthday, anniversary, renewal), incentive, form tool.
- data: ESP, form tool (book names Typeform), countdown tool.
- upstream: E2.
- downstream: none.
- depth: full

### steps
1. Bait & Hook: email promising an exclusive benefit for entering the date, link to a form that updates the profile. [chapters/ch09-framework-automation.md]
2. Trigger N days before (pre-event) or on the day. [chapters/ch09-framework-automation.md]
3. Offer beyond discount (gift box, bonus, samples). [chapters/ch05-customer-journey-trigger.md]
4. Post-event email (review, survey, last opportunity). [chapters/ch09-framework-automation.md]
### criteria
- Data-collection email states the benefit. [chapters/ch09-framework-automation.md]
- Form writes to a contact attribute used as the trigger. [chapters/ch09-framework-automation.md]
- Has a pre or on-day email and a post-event email. [chapters/ch09-framework-automation.md]
- Coupon dynamic + countdown. [chapters/ch04-email-perfetta.md]

## B-045 E9. Lead scoring model (CRM)
- ask: "Definisci lo scoring dei lead nel CRM."
- inputs: tracked actions, sales stages, B2B attributes.
- data: CRM, ESP, site tracking.
- upstream: E15.
- downstream: E4, I6.
- depth: full

### steps
1. Assign points: open 5, click 15, site visit 20, workflow completed 20, call/meet 50, quote 100. [chapters/ch07-segmentazione.md]
2. Thresholds: >100 Prospects, 50-100 Qualified, 20-50 Warm, <20 New/Cold. [chapters/ch07-segmentazione.md]
3. Add custom attributes (source, service requested, firmographics). [chapters/ch07-segmentazione.md]
4. Map three sources: email, CRM, website/app. [chapters/ch07-segmentazione.md]
5. Schedule periodic recalibration. [chapters/ch07-segmentazione.md]
### criteria
- Every scored action has a point value. [chapters/ch07-segmentazione.md]
- Four named thresholds. [chapters/ch07-segmentazione.md]
- Each threshold triggers an action (e.g. sales task for Prospects). [chapters/ch09-framework-automation.md]
- Review cadence stated. [chapters/ch07-segmentazione.md]

## B-046 E10. RFM segmentation map (e-commerce)
- ask: "Segmenta i miei clienti con RFM e dimmi cosa mandare a ciascuno."
- inputs: order history (date, count, amount), AOV, brands/categories.
- data: CDP / order export (book names Conversific as analysis tool).
- upstream: E15.
- downstream: E7, E16, I2 (lookalike seed).
- depth: full

### steps
1. Start phase: basic segments (customer/non, single/repeat, high/low spend, recent/old). [chapters/ch07-segmentazione.md]
2. Growth phase: RFM into the 11 clusters. [chapters/ch07-segmentazione.md]
3. Choose only clusters useful to the business. [chapters/ch07-segmentazione.md]
4. Add dimensions: Brand, Category, Product, Context, AOV; advanced segments (Deal Hunter, VIP, Window Shopper...). [chapters/ch07-segmentazione.md]
5. Assign an action per cluster. [cheatsheet.md]
### criteria
- Each used cluster has an R/F/M definition and an action. [cheatsheet.md]
- Not all 11 forced in; selection justified. [chapters/ch07-segmentazione.md]
- Clusters wired to a flow (e.g. At Risk to winback). [chapters/ch09-framework-automation.md]
- Recalibration cadence stated. [chapters/ch07-segmentazione.md]

## B-047 E11. Single campaign email (email perfetta)
- ask: "Scrivi questa email promozionale / newsletter."
- inputs: purpose of the email, segment attributes, sender, offer.
- data: ESP; optional Nexweave, Mailtimer.io.
- upstream: E10/E9 for segments.
- downstream: E13.
- depth: full

### steps
1. Define the "why" of the communication; write the subject with the idea. [chapters/ch04-email-perfetta.md]
2. Dynamic content: name where useful, IF/ELSE blocks by attribute, countdown for scarcity. [chapters/ch04-email-perfetta.md]
3. Subject + preview: pick subject types and angles; sender name (personal vs company). [chapters/ch04-email-perfetta.md, chapters/ch03-setup-deliverability-gdpr.md]
4. Template size S/M/L or plain text. [chapters/ch03-setup-deliverability-gdpr.md]
5. Send timing: regularity, Send Time Optimization, Smart Sending. [chapters/ch04-email-perfetta.md]
6. A/B test (subject first) on a sample, winner to rest. [chapters/ch04-email-perfetta.md]
### criteria
- Has subject, preview text and sender name. [chapters/ch04-email-perfetta.md]
- At least 2 subject variants with named type/angle. [chapters/ch04-email-perfetta.md]
- Name personalization not in every element. [chapters/ch04-email-perfetta.md]
- Template size (S/M/L) declared. [chapters/ch03-setup-deliverability-gdpr.md]
- UTM-tagged links. [cheatsheet.md]

## B-048 E12. Platform setup, deliverability and GDPR checklist
- ask: "Cosa devo sistemare prima di iniziare a inviare?"
- inputs: domain DNS access, forms in use, consent records, list structure.
- data: DNS, ESP, forms.
- upstream: none.
- downstream: all email flows.
- depth: full

### steps
1. Verify sender and authenticate domain via DNS. [chapters/ch03-setup-deliverability-gdpr.md]
2. Define senders (personal vs company/departments). [chapters/ch03-setup-deliverability-gdpr.md]
3. Build S/M/L templates, seasonal skins, a plain-text variant. [chapters/ch03-setup-deliverability-gdpr.md]
4. Organize few lists + attributes/tags. [chapters/ch03-setup-deliverability-gdpr.md]
5. Customize system pages; unsubscribe with a plan B. [chapters/ch03-setup-deliverability-gdpr.md]
6. GDPR: separate optional marketing checkbox, double opt-in, data minimization, consent saved; soft-spam rules. [chapters/ch03-setup-deliverability-gdpr.md]
### criteria
- Domain authentication confirmed. [chapters/ch03-setup-deliverability-gdpr.md]
- Marketing checkbox separate and not mandatory. [chapters/ch03-setup-deliverability-gdpr.md]
- Newsletter form asks only name + email. [chapters/ch03-setup-deliverability-gdpr.md]
- Consent storage stated. [chapters/ch03-setup-deliverability-gdpr.md]
- Unsubscribe offers reduced frequency or topics. [chapters/ch03-setup-deliverability-gdpr.md]
- No purchased lists. [chapters/ch02-acquisizione-lead.md]

## B-049 E13. Newsletter program
- ask: "Imposta la newsletter in modo che la gente si iscriva e la apra."
- inputs: content sources, send cadence, evergreen archive.
- data: ESP.
- upstream: E3.
- downstream: E7.
- depth: partial

### steps
1. Give the newsletter a name + dedicated landing; test named vs generic CTA. [chapters/ch06-grammatica-workflow-flussi.md]
2. Editorial mix: news, promo, education, events, brand story, surveys. [chapters/ch06-grammatica-workflow-flussi.md]
3. Regular send schedule. [chapters/ch04-email-perfetta.md]
4. Recycle evergreen issues to new subscribers via automation. [chapters/ch06-grammatica-workflow-flussi.md]
5. Funneling: after N sends, continue only to openers. [chapters/ch09-framework-automation.md]
### criteria
- Newsletter has a proper name. [chapters/ch06-grammatica-workflow-flussi.md]
- Calendar is not only promotional. [chapters/ch06-grammatica-workflow-flussi.md]
- Evergreen recycle automation defined. [chapters/ch06-grammatica-workflow-flussi.md]
- Fixed cadence stated. [chapters/ch04-email-perfetta.md]

## B-050 E14. List acquisition plan (forms and pop-ups)
- ask: "Come raccolgo iscritti di qualità?"
- inputs: offer, incentive options, acquisition channels, quality vs volume preference.
- data: site form tool, ESP.
- upstream: lead magnet (H1).
- downstream: E3.
- depth: partial

### steps
1. Choose position on quality vs quantity (detailed landing with price vs curiosity landing), often a mix. [chapters/ch02-acquisizione-lead.md]
2. Incentive coherent with brand (discount, free shipping, bundle, early access). [chapters/ch02-acquisizione-lead.md]
3. Non-intrusive top bar / pop-up / flyout with one explicit profiling question. [chapters/ch02-acquisizione-lead.md]
4. Map each acquisition channel to its own onboarding flow. [chapters/ch02-acquisizione-lead.md]
### criteria
- States the quality/quantity choice. [chapters/ch02-acquisizione-lead.md]
- Form includes one profiling field. [chapters/ch02-acquisizione-lead.md]
- Each channel names its entry flow. [chapters/ch02-acquisizione-lead.md]
- No bought lists. [chapters/ch02-acquisizione-lead.md]

## B-051 E15. Tracking setup plan
- ask: "Come traccio le email e il comportamento sul sito?"
- inputs: ESP, GA4 property, Tag Manager, site stack.
- data: GA4, GTM, ESP.
- upstream: none.
- downstream: E5, E9, E10.
- depth: partial

### steps
1. Install the ESP tracking code on the site. [chapters/ch08-tracciamento-dati.md]
2. UTM parameters + API to build GA4 segments. [chapters/ch08-tracciamento-dati.md]
3. Consider server-side GA4 tracking. [chapters/ch08-tracciamento-dati.md]
4. Define few KPIs and journey touchpoints. [chapters/ch08-tracciamento-dati.md]
### criteria
- All three configurations addressed. [chapters/ch08-tracciamento-dati.md]
- UTM convention documented. [chapters/ch08-tracciamento-dati.md]
- KPIs map to touchpoints, not only final conversion. [chapters/ch08-tracciamento-dati.md]

## B-052 E16. Email-to-ads audience sync (remarketing, lookalike, exclusion)
- ask: "Usa i miei segmenti email per le campagne Meta/Google."
- inputs: RFM/score segments, ad accounts, active flows.
- data: Meta and Google ad accounts, ESP/CDP exports.
- upstream: E10, E9.
- downstream: I2, I8.
- depth: partial

### steps
1. Export segments (non-openers, clicked-not-bought, RFM clusters) as Custom Audiences. [chapters/ch10-ai-advertising.md]
2. Seed lookalikes from Champions / high-LTV only. [chapters/ch10-ai-advertising.md]
3. Customer Match on Google. [chapters/ch10-ai-advertising.md]
4. Exclude active customers from cold acquisition. [chapters/ch10-ai-advertising.md]
5. Full-funnel sync: ad message matches the email flow the person is in. [chapters/ch10-ai-advertising.md]
6. Server-side + CAPI / Enhanced Conversions. [chapters/ch10-ai-advertising.md]
### criteria
- Lookalike seed is a top cluster, not the whole list. [chapters/ch10-ai-advertising.md]
- Exclusion audience defined for acquisition campaigns. [chapters/ch10-ai-advertising.md]
- Each remarketing audience names its paired email flow and message. [chapters/ch10-ai-advertising.md]
