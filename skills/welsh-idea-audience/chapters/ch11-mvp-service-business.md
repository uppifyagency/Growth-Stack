# Chapter 11: Building an MVP Service Business (+ Service Automation & Behind the Scenes)

## Core Idea
With distribution built, stand up a minimum-viable service business — trading time for money — using cheap no-code tools. Goals: make it easy for clients to work with you, serve them well, learn their common challenges, and implement solutions (those learnings become future products). Then automate ruthlessly, because manual time is "the killer of all solopreneurs."

## Frameworks Introduced
- **The Three Levels of a Service Business** (move through in order if new):
  1. **Level 1** — very low cost, goal = learn, collect feedback, get testimonials.
  2. **Level 2** — refine the niche, raise prices to industry-average / best-practice.
  3. **Level 3** — high prices, serve only the exact-right customers; send everyone else to information products.
- **The 7 Components of a Basic Service Business**: (1) simple website, (2) clear description of services, (3) FAQs to help clients decide, (4) inquiry submission form, (5) appointment booking system, (6) rate sheet, (7) payment processing (collect before work).
- **The Automation Decision Rules**: set an aspirational rate (e.g. $100/hr) — if a recurring task takes an hour but doesn't add $100 of value, **delegate or automate** (prefer automate, it's easier to set up). Also: anything routine taking >10-15 min of manual work daily → automate if possible.
- **Welsh's No-Code Stack**: Carrd (website, ~$18-37/yr), Calendly (scheduling), Stripe (service payments), Gumroad (product payments), Shield (LinkedIn analytics), Google Drive (docs), Slack (self-notifications), Airtable (CRM), Zapier (the glue between systems).

## Key Concepts
- **Qualify/disqualify before they cost you time** — disclose pricing up front, use a robust 18-20 question FAQ, then a questionnaire with two required check-boxes (they understand minimum pricing; they're the decision-maker). Welsh would rather people disqualify themselves than burn 30 minutes.
- **The automation pipeline** (before → after): manually emailing pricing, creating Stripe invoices, building CRM records, making Drive folders, dragging in agenda docs, and chasing 30-day payments took **35-45 min** per client. Automated, it's **~4 min**: Airtable form auto-populates the pipeline + Slack alert → move the stage to trigger qualify/disqualify emails → discovery call → "send pricing trigger" email with a link to a **hidden payments page** → Stripe subscription auto-charges every 30 days → Zapier auto-creates the Drive folder, copies the 1:1 agenda template, and emails the client everything.
- **Record discovery calls + store notes** — 6-8 pre-written questions, notes in Airtable CRM; recurring patterns ("20 prospects in a row wanted X") become the seed of digital products.
- **Hidden payments page** — a private URL (not linked publicly) sent only to qualified customers, with Stripe subscription buttons (Carrd integrates with Stripe via product price IDs).

## Mental Models
- **Time is the killer** — every manual minute is a tax on a solopreneur; automate or delegate above your aspirational rate.
- **The funnel is the filter** — pricing, FAQ, and questionnaire pre-filter so only fits reach your calendar.
- **Service learnings = product inventory** — store everything; the service business is R&D for the product business.

## Anti-patterns
- **Manual client ops at scale** — invoicing, folder creation, payment chasing by hand is the 35-45 min trap.
- **Free discovery calls with unqualified leads** — ~50% were wrong-fit before qualification filters.
- **Not recording/storing call notes** — you lose the product signal.
- **Over-engineering automations as a tutorial** — the goal is *better use of time*, not complex Zaps for their own sake.

## Key Takeaways
1. Move Level 1 → 2 → 3; start cheap to learn and collect testimonials.
2. Stand up the 7 components with cheap no-code tools (Carrd + Airtable + Stripe + Zapier).
3. Qualify/disqualify before booking; disclose pricing up front.
4. Automate anything recurring above your aspirational rate; store every learning for products.

## Connects To
- **Ch 3 (A Niche of One, Part 2)**: the service ideas this chapter operationalizes.
- **Ch 12 (F.I.T.I)**: how to move *up* the three levels and raise prices.
- **Ch 13 (Building in Gumroad)**: where stored service learnings become products.
