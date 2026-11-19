# Chapter 7: Retargeting + Live Chat

## Core Idea
Two backend additions to the VSL landing page. **Live chat is a major lever** — nearly as important as the VSL — because in-market buyers want to talk *now*, and you can save deals on the spot. **Retargeting is a backend optimization** — worth doing once the basics work, not before. Both also build re-marketable audiences.

## Frameworks Introduced
- **Live Chat via ManyChat** (the high-value add):
  - Connect a Facebook page to **ManyChat** → Growth Tools → Customer Chat → install the JS snippet on the page (Carrd embed, **hidden** style, in the **head** tag).
  - Set a greeting ("Hey, Daniel here. Let me know if you have any questions."), show everywhere, open the chat window on first view.
  - Get messages on your phone via the **Facebook Business Suite** app; reply (incl. video) in real time.
  - When to use: on every landing page, always. In-market buyers shopping *this instant* convert far higher when they can talk immediately.
- **Retargeting via Facebook Pixel** (the backend optimization):
  - Facebook Business Manager → Events Manager → connect data source → **Pixel** → embed the pixel code in the page **head** (Carrd embed, hidden style).
  - Build a **custom audience** of all website visitors (e.g., last 30 days); run ads to them. Budget can be ~$1/day for a few hundred visitors/month.
  - **Story/selfie ad** is the preferred creative — a casual "hey, saw you on my site, just following up" face-to-camera Instagram/Facebook Story. Use **manual placements**, not automatic (automatic only pays off at high traffic volume).

## Key Concepts
- **iOS 14.5 tracking gap** — Apple devices block much pixel tracking, so the page-view/lead pixel under-reports. Fix with the **Conversions API**: a **Zapier** zap that fires a Facebook **lead** event whenever a Calendly booking is created (server-side, unblockable). Optimize ads for the lead event.
- **Exclusion audience** — a second Zapier step adds every booker's email to a "call scheduled" custom audience; **exclude** it from the retargeting ad set so booked prospects stop seeing ads.
- **Message-based retargeting** — anyone who messages your page via ManyChat becomes a custom audience you can retarget *and* re-message anytime (you now own the conversation).

## Mental Models
- **Live chat saves deals at the moment of intent** — "I cannot tell you how many times I've saved a deal solely from having the live chat."
- **Retargeting is a cheap top-up, not a driver** — it "helps a little"; don't prioritize it over the VSL and live chat.

## Anti-patterns
- Building retargeting before the VSL + live chat exist (wrong order).
- Trusting raw pixel lead data on iOS without the Conversions API.
- Automatic placements at low traffic; forgetting to exclude already-booked leads.

## Key Takeaways
1. Add ManyChat live chat to every page — it's a primary lever, not an extra.
2. Pixel + Conversions-API-via-Zapier gives accurate, unblockable lead tracking.
3. Build visitor, message, and exclusion audiences; retarget with cheap Story ads.

## Connects To
- **Ch 1**: live chat is named the co-lever with the VSL; retargeting the backend.
- **Ch 6 (Landing Pages)**: pixel + chat snippets embed in this page's head.
- **Ch 5 (Filming)**: YouTube-view retargeting (Google Ads) complements pixel retargeting.
