# Chapter 6: Creating Landing Pages

## Core Idea
The landing page is a single continuous scroll built around the VSL — no menus, no navigation, no design contest. For agency/high-ticket offers, content beats aesthetics. Choose the builder by offer type: **Carrd** ($19/yr) for high-ticket service pages, **ClickFunnels / Kajabi** for low-price productized services with checkout. The proven page order mirrors the prospect's question flow.

## Frameworks Introduced
- **The Landing-Page Section Order** (the old agency page, the canonical layout): **Headline → VSL embed → Client interview (recorded Zoom) → Campaign results (images/stats) → How it works → Disqualification → Call scheduling (Calendly embed)**. Use it: top-to-bottom, one column, no distractions.
- **Builder-by-offer-type decision**:
  - **Carrd** — high-ticket / complex / non-productized service. Cheap, dead simple, pure white or black background, words + embeds only.
  - **ClickFunnels or Kajabi** — low-priced productized subscriptions (e.g., $300/mo, content services). Easy Stripe/checkout integration; looks far better with less work.
  - **Webflow** — when you genuinely need a "pretty" site (e.g., software companies). Different use case.
- **Disqualification section** — explicitly state who this *isn't* for, to keep garbage calls out of the calendar.

## Key Concepts
- **One continuous stream** — prospects think in a single scroll; nav menus and clutter break it. "Plain white/black background, just words."
- **Build steps in Carrd** — start from a blank/simple template, set background pure white, embed the YouTube VSL (Share → Embed → copy code → Carrd embed element, inline style), add text headers + image blocks for results, embed Calendly (Share → Add to website → inline) for booking, then publish to a custom domain via DNS **A records** (host `@`) + a **CNAME** (host `www`); propagation can take up to an hour.
- **Pay-now vs. call booking** — productized/cheap: integrate Stripe checkout directly (or use ClickFunnels) for instant purchase. High-ticket/complex: call scheduling only (a pay-now path produces unqualified buyers you must refund).

## Mental Models
- **Content > design** — what you *say* converts; unless you're a design agency, polish is a distraction.
- **Match the tool to the price point** — cheap-and-simple (Carrd) for high-ticket calls; checkout-native (ClickFunnels) for low-ticket subscriptions.

## Anti-patterns
- Navigation menus, multi-page sites, visual clutter on a sales page — "garbage."
- Treating the page as a design contest instead of a script delivery vehicle.
- Pay-now checkout on a complex high-ticket offer that needs qualification.

## Key Takeaways
1. One scroll, headline → VSL → proof → how-it-works → disqualify → book.
2. Carrd for high-ticket; ClickFunnels/Kajabi for productized checkout.
3. Recommended copy foundations: *Great Leads* (Michael Masterson), plus Brunson, Gary Halbert, Dan Kennedy, Joseph Sugarman, David Ogilvy, Claude Hopkins.

## Connects To
- **Ch 5 (Filming)**: produces the embedded VSL.
- **Ch 7 (Retargeting + Live Chat)**: pixel and chat widgets get embedded on this same page.
- **Ch 2**: pricing-display decision drives pay-now vs. booking.
