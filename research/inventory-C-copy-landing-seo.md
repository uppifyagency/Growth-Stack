# Inventory C: copy, landing pages, SEO/GEO, content, DataForSEO

Slice: `neville-copywriting`, `drew-sucks-framework`, `shleyner-landing-pages`, `seo-2026-sota`, `doing-content-right`, `dataforseo`.
Source root: `.claude/skills/<skill>/`. Every step and criterion cites the file it comes from. Read-only research, written 2026-11-19.

**Citation key (per skill).** `S` = `SKILL.md`, `P` = `patterns.md`, `C` = `cheatsheet.md`, `chNN` = `chapters/chNN-*.md` (full filename listed at the top of each section). For `dataforseo`, `R0`..`R6` = `references/0N-*.md`.

**Conventions.** `upstream` / `downstream` name deliverables in this file by id (e.g. `N4`, `L2`, `DF1`). Cross-skill links are inferences for the plugin design, not claims made by the books. `depth: partial` means a playbook needs another source to finish the artifact.

---

## neville-copywriting

Files: ch01 `ch01-mentality-of-a-copywriter.md`, ch02 `ch02-core-writing-techniques.md`, ch03 `ch03-headlines-and-quick-copy.md`, ch04 `ch04-cold-sales-emails.md`, ch05 `ch05-sales-pages-ecommerce.md`, ch06 `ch06-content-marketing-writing.md`, ch07 `ch07-email-writing-autoresponders.md`, ch08 `ch08-ads-website-images.md`, ch09 `ch09-becoming-a-copywriter-clients.md`, ch10 `ch10-building-selling-courses.md`, ch11 `ch11-best-blog-post-bootcamp.md`.

Shared input across most Neville deliverables: a **Bob** profile (one composite buyer from real calls/emails/data: age, routine, fears, discretionary income, what they want to learn) `P` `ch03`.

### N1. Headline and subject-line set
- **ask**: "Give me 10 headline options for this page" / "Write subject lines for this email."
- **inputs**: product, Bob, the main benefit to the reader, channel (page headline vs email subject).
- **steps**:
  1. Write one decent headline that sells what the product does for *them*, not the product `ch03`.
  2. Rewrite it through the **CBI** lenses: Competitive, Benefit-driven (stat or testimonial), Inspirational ("you can too") `ch03` `P`.
  3. Mine **socially-proven headlines**: search the product keyword on Reddit/Quora/Digg/Twitter sorted by top, plus Google "searches related to"; adapt to your angle `ch03` `P` `C`.
  4. Use the **"Overheard on the Street"** trick: list lines that would make a passer-by say "WHAT?", fuse one with the product `ch03`.
  5. For email subjects: shorten, lowercase, casual, front-load meaning for mobile truncation `ch03` `C`.
  6. For a sales page, brainstorm many (the source says ~100) and pick the best; headline + subhead must carry the whole gist `ch05`.
  7. Test; never ship one winning formula forever `ch03` `P`.
- **criteria**:
  - [ ] Every option is about the reader's outcome, none names the company/product as subject `ch03`.
  - [ ] Options cover all three CBI lenses `ch03`.
  - [ ] No clickbait ("Re:", "hey…", "you won't believe…"), and each is relevant to the body `ch03` `C`.
  - [ ] Email subjects: short, lowercase, no coupon and no "Welcome to [App]" `ch03` `C`.
  - [ ] Each hits at least one trigger: new, novel, unique, helpful `ch03` `C`.
  - [ ] Page version: headline + subhead together state the whole gist `ch05`.
- **data**: optional upvoted titles from social sites and Google related searches; none required.
- **upstream / downstream**: Bob → feeds N3, N4, N7, N12 (revamp step 2), L2.
- **depth**: full.

### N2. Cold sales email
- **ask**: "Write a cold email to [prospect] to book a call."
- **inputs**: recipient name/company/title, one quantified benefit for them, the single ask, whether you have a "value-bomb" to give.
- **steps**:
  1. Research the recipient (company, title, LinkedIn) to personalize; never "to whom it may concern" `ch04`.
  2. Apply the **give-or-keep-it-short** gate: real value to give → give it; nothing → one or two sentences with the direct ask `ch04` `P`.
  3. Lead with one quantified benefit to them ("$24k/year saved"), ideally backed by a custom proof artifact built from public info `ch04` `P`.
  4. Structure on the **Cold Email Outline**: intro → what it does for them → what happens if they get it → when can we talk `ch04` `C`.
  5. If you are the product, put "what I'll do for you" first and demote credentials to bullets `ch04`.
  6. End with exactly one bolded ask `ch04`.
  7. Cut every sentence that does not advance the ask (worked examples cut 60–80%) `ch04` `P`.
- **criteria**:
  - [ ] Uses the recipient's real name `ch04`.
  - [ ] No company history (founding year, city, "we have been…") `ch04`.
  - [ ] Contains a quantified benefit to the reader, or the whole email is ≤2 sentences `ch04`.
  - [ ] Exactly one ask, bolded; no second link or option `ch04`.
  - [ ] Four outline blocks present in order (when not using the 2-sentence form) `ch04`.
  - [ ] No benefit restated twice `ch04`.
- **data**: recipient research (public profile, company info).
- **upstream / downstream**: Bob, offer → feeds the reply/call; reused in N13.
- **depth**: full.

### N3. Single sales email or short letter (AIDA)
- **ask**: "Write an email that sells X" / "Draft a one-page letter for this offer."
- **inputs**: Bob, the one action, 3–7 facts/benefits, ROI math and emotional payoff.
- **steps**:
  1. Decide the single action first and write the CTA before the rest `ch07`.
  2. Write 4–5 subject lines and a one-line "purpose of email" `P`.
  3. Type bold labels A/I/D/A and write one sentence under each: Attention (headline/question/name), Interest (3–7 facts), Desire (logical ROI + emotional status/relief/fear), Action (one instruction) `P` `S`.
  4. Expand each, then delete the labels; every line's job is to get the next read, fueled by a story or education (**Slippery Slide**) `P` `ch03`.
  5. For newsletters and deal emails, keep ~70% useful content, 30% pitch (**70/30**) `ch06` `P`.
  6. Format pass: bullets, bold, ~500px column, captions, a **BFB** CTA, a bolded P.S. `P` `ch03`.
  7. Cut any line that fails "Does it add to the message?" or bores you `S` `ch03`.
- **criteria**:
  - [ ] Exactly one CTA/link `ch03` `P`.
  - [ ] Interest section lists no more than ~7 facts `P`.
  - [ ] Desire contains both a number (ROI) and an emotional payoff `P`.
  - [ ] Opens on the reader's problem, not the founder story `P` (Reader-First Rewrite).
  - [ ] Bolded P.S. present `ch03`.
  - [ ] Plain/minimal look, not "newslettery" graphics `ch07`.
  - [ ] Written with "I"/"you" to one person `ch03`.
- **data**: none.
- **upstream / downstream**: Bob, N1 → reused inside N8 and N10.
- **depth**: full.

### N4. Long-form sales page (Modified AIDA + T)
- **ask**: "Write a sales page for my course/service."
- **inputs**: product, price, how much the buyer already knows, testimonials, proof/case studies, exact buying steps.
- **steps**:
  1. Size the page to buyer knowledge and price (**Sugarman's rule**): known/cheap → buy button; unfamiliar/expensive → full sequence `ch05` `P`.
  2. Name the single goal (call/apply/buy) `P` (Work-Backwards).
  3. Write each block separately with the **Sales Page Outline Template**: headline(s) + subhead + image → Interest (easier than they think) → Desire (the new world) → Testimonial → product shot → comparison → exact how-to-buy → Action with light P.S. scarcity `ch05` `P`.
  4. Pair every feature with its benefit for first-time buyers `ch06`.
  5. Add show-don't-tell proof: varied case studies (big/medium/small), collective testimonials, a believable reason-why/mechanism `ch05` `P`.
  6. Stack the blocks verbatim into one page; put the CTA in every section and the buy block at the bottom `ch05`.
- **criteria**:
  - [ ] One goal; CTA repeats per section and closes at the bottom `ch05` `C`.
  - [ ] Testimonials shown as a mass, not one quote `ch05`.
  - [ ] Nothing below the checkout block; no mid-page checkout `ch05`.
  - [ ] No sliders/carousels, no clever labels, no buzzwords `ch05` `C`.
  - [ ] Explicit plain ask ("Order yours today" / "Apply") `ch05`.
  - [ ] Each feature has a stated benefit `ch06`.
  - [ ] Contains a reason-why the product works `ch05`.
  - [ ] Phone number captured when a call is the money step `C`.
- **data**: none.
- **upstream / downstream**: Bob, N1, testimonials → feeds N10 (copy reuse), N6 (review).
- **depth**: full.

### N5. eCommerce product page (Amazon field set)
- **ask**: "Write/audit the product page for SKU X."
- **inputs**: product specs, price, reviews, stock, shipping, box contents, compatible products, customer questions (support log).
- **steps**:
  1. Open a top Amazon page in the category and copy the field list `ch05`.
  2. Fill: name, price, reviews, stock-left, one-line summary `ch05` `P`.
  3. Full description: what it is, what it does, special features, why it is better `ch05`.
  4. The "boring" block: dimensions, weight, batteries/power, what's in the box, shipping weight/speed, complementary products `ch05` `C`.
  5. List every showroom/phone question and answer it on the page `ch05`.
  6. Use photo/video for what is visual; text only for what is not `ch05`.
  7. Put differentiator, "sciencey" mechanism and proof on this page as text, not baked into images `ch05`.
- **criteria**:
  - [ ] All Amazon fields present, or the missing one is one you genuinely cannot fill `ch05` `P`.
  - [ ] Boring block complete `ch05`.
  - [ ] No differentiator offloaded to "another page" `ch05`.
  - [ ] Key claims are live text, not inside images `ch05`.
  - [ ] Plain-English labels, no buzzwords `ch05`.
- **data**: support tickets/FAQ log (the source cites 80% of one company's calls being one unanswered spec) `ch05`.
- **upstream / downstream**: product data → is itself a landing page (feeds N6, L1 ideas).
- **depth**: full.

### N6. Page teardown / conversion review
- **ask**: "Review my landing page / homepage and tell me what to fix."
- **inputs**: page URL or copy, the page's intended goal, optional heat map, ad CTR and order data.
- **steps**:
  1. **Bleary-Eyes Read**: in ~5 seconds, is "what is this / what do I do" clear? Fix that first `ch08` `P`.
  2. Decide page type: landing page (one CTA, top and bottom) vs homepage (more breadth) `ch08`.
  3. Work backwards from the single goal: confirm the CTA repeats per section and closes `ch05` `P`.
  4. Strip buzzwords, clever labels, sliders/carousels, mid-page checkouts `P` `C`.
  5. Confusing offer → add a literal **1-2-3 how-it-works** block with an image `ch08`.
  6. With traffic: read the heat map, find the **deep-blue-of-death** zone, fix that section, leave warm pages alone `ch08`.
  7. High CTR + low orders → check ad scent, page headline, buried buy button `ch08` `C`.
  8. Copytest with the real audience and run the caveman skim test `P` (Test and De-Buzzword).
- **criteria** (on the review report):
  - [ ] States the page's one goal `P`.
  - [ ] Gives a pass/fail on the 5-second test `ch08`.
  - [ ] Every recommendation names the section it applies to `ch08`.
  - [ ] Recommends content/close fixes before layout redesign `P`.
  - [ ] Flags every buzzword/clever label found `ch05`.
- **data**: heat map (Crazy Egg) and live traffic optional; ad CTR/orders for the scent check.
- **upstream / downstream**: an existing page (N4, N5, L1) → feeds rewrite.
- **depth**: full.

### N7. Google search ad ("super ad")
- **ask**: "Write a Google Ads text ad for keyword X."
- **inputs**: target keyword, competitor ads on that SERP, your offer differentiators (price, guarantee, service area), landing page.
- **steps**:
  1. Read the competitor ads ranking for the keyword; list the priorities they all promise `ch08` `P`.
  2. Fuse every priority into one concise **super ad** `ch08`.
  3. Keep it to the point, no cleverness `ch08`.
  4. Word it for buyers only (price, "enroll today", same-day, service area) `ch08`.
  5. Differentiate on the offer, not the wording `P`.
  6. Match the landing-page headline to the ad promise (**ad scent**) `ch08`.
- **criteria**:
  - [ ] Covers every shared competitor priority `ch08`.
  - [ ] No puns or clever lines `ch08`.
  - [ ] At least one qualifier that repels tire-kickers `ch08`.
  - [ ] Landing headline repeats the ad's promise `ch08`.
  - [ ] Fits the text-only format (~270 chars in the source) `ch08`.
- **data**: live SERP paid results for the keyword (see DF2, DF15).
- **upstream / downstream**: DF2/DF15 → feeds landing page (N4, L1), ties to L8.
- **depth**: full.

### N8. Autoresponder (follow-up) sequence
- **ask**: "Write my welcome email sequence" / "Build a nurture sequence for new subscribers."
- **inputs**: list source, case studies, offer to hint at, whether the business is "boring" (needs an ethical bribe).
- **steps**:
  1. Plan the whole arc on one page so each email knows what tomorrow brings `ch07`.
  2. Decide on an **ethical bribe** (yes for boring/B2B, skip for an already-interesting blog) `ch07`.
  3. Write each email with the value inside it (**email AS the content**); fuel with case studies and **Subject + Life** ideas `ch07`.
  4. Schedule as follow-ups at 0, +1, +2, +3 days `ch07` `C`.
  5. Add the **whitelisting PS** ("reply and tell me your problems") in one of the first 3 emails; route overflow to a Google Form `ch07`.
  6. **Drop hints**: no offer link in emails 1–3, one in email 4, again around email 6 `ch07`.
  7. End each email on a **cliffhanger** naming the next email's payoff `ch07`.
  8. Optional demand test: "reply: I want it" PS `ch07`.
- **criteria**:
  - [ ] Plain text or minimal centered layout `ch07`.
  - [ ] No email is a bare notification ("check out my post") `ch07`.
  - [ ] Every email except the last ends with a cliffhanger `ch07`.
  - [ ] Whitelisting PS appears within emails 1–3 `ch07`.
  - [ ] Offer links appear in only a few emails and none in the first three `ch07`.
  - [ ] One action per email `ch03` `ch07`.
- **data**: ESP with interval scheduling.
- **upstream / downstream**: lead magnet/opt-in (DCR C8) → feeds sales (N4/N10); N9 converts into it.
- **depth**: full.

### N9. Constant Launch (evergreen launch sequence)
- **ask**: "Turn my launch emails into an evergreen sequence."
- **inputs**: the launch broadcast emails.
- **steps**:
  1. Collect every broadcast sent during the launch `ch07`.
  2. Strip the dates (or replace with merge fields) `ch07` `P`.
  3. Load them, in order, into a follow-up sequence so each new signup relives the launch `ch07`.
- **criteria**:
  - [ ] No hard calendar dates remain `ch07`.
  - [ ] Sequence is a follow-up (interval) sequence, not a broadcast `ch07`.
- **data**: ESP.
- **upstream / downstream**: launch broadcasts (N10) → feeds N8.
- **depth**: full (small).

### N10. 3-email promotion sequence (Black Friday formula)
- **ask**: "Write a 3-email sale sequence for my offer ending Friday."
- **inputs**: offer, discount, deadline, existing testimonials/reviews/numbers, list type (warm, cold, none).
- **steps**:
  1. Email 1 (~2 days before deadline): name the product, picture, a few features, discount, deadline, one CTA `ch10` `P`.
  2. Email 2 (**Cool Angle**): clip existing proof: testimonials, review screenshots, big numbers, backstory, or a price-tier table `ch10`.
  3. Email 3 (**close the door**): one or two sentences, deadline tonight, offer, CTA `ch10`.
  4. Too cheap to discount → run a **Reverse Black Friday** (price going up) `ch10`.
  5. No list → post the same 3-step structure to friends/family with "DM me"/"comment" as CTA `ch10`.
  6. Reuse the copy on sales page/blog; pre-load into the autoresponder; next year change the dates `ch10` `P`.
- **criteria**:
  - [ ] Email 1 has product name, picture, features, discount, deadline, one CTA `ch10`.
  - [ ] Email 2 proof is existing material, nothing invented `ch10`.
  - [ ] Email 3 is ≤2 sentences `ch10` `P`.
  - [ ] Same deadline in all three `ch10`.
  - [ ] Cold list version adds a polite one-liner `P`.
- **data**: none.
- **upstream / downstream**: N4 copy, testimonials → feeds N9.
- **depth**: full.

### N11. Blog post (Research → Write → Promote)
- **ask**: "Help me write a blog post about X."
- **inputs**: Idea File or topic, your credibility on it, the next action the post should drive.
- **steps**:
  1. Keep an **Idea File** with 4 buckets (topics I enjoy, things people ask me, interesting personal stories, possible articles); pick the one you are most excited to write `ch11`.
  2. **Credibility test**: credible → broad guide; not credible → specific "how I did it" `ch11` `P`.
  3. Pick one of the **6 article types** `ch11`.
  4. Write the **Skeleton Outline** (title + subheads); toss the idea if it reads weird `ch11`.
  5. Make each subhead specific; end each section with an **action step**; bundle all steps into a **cheat sheet** `ch11`.
  6. First draft bans: no SEO, no selling, no perfectionism; intro and conclusion last; one image per section `ch11`.
  7. End with one next action `ch06`; chop into social posts to promote `ch11`.
- **criteria**:
  - [ ] Every subhead is specific (not "Eat better") `ch11`.
  - [ ] Every section ends with a concrete action step `ch11`.
  - [ ] Cheat sheet contains all action steps `ch11`.
  - [ ] Broad "how to" framing only if author credibility is stated; otherwise "how I" `ch11`.
  - [ ] Exactly one CTA at the end `ch06`.
  - [ ] One image per section `ch11`.
- **data**: optional AlsoAsked / "people also ask" for topics `ch11` (see DF2).
- **upstream / downstream**: DCR C4 brief (if SEO-targeted) → feeds N12 later, social posts.
- **depth**: full.

### N12. Content revamp of an underperforming post (4-Step Content Revamp)
- **ask**: "This post is stuck on page 8, fix it."
- **inputs**: the post, its URL slug, the long-tail angle candidates.
- **steps**:
  1. **Create an angle** on an under-served long-tail sub-niche the big players ignore `ch06`.
  2. **Sex up the headline**: write four variants with the angle's keywords; keep the URL slug `ch06`.
  3. Make a grabbing image that fits the new angle `ch06`.
  4. Add **Blog Content Modules**: TOC/cheat sheet, custom score, custom map, gallery, cost table, calculator, generator, original data, shareable template, gated PDF, CTA `ch06` `P`.
  5. Pair features with benefits; end with one next action `ch06`.
- **criteria**:
  - [ ] Slug unchanged `ch06`.
  - [ ] Four headline variants produced `ch06`.
  - [ ] At least one proprietary module competitors cannot lift (score, original data, calculator, template) `ch06`.
  - [ ] Single CTA at the bottom `ch06`.
  - [ ] Angle targets a long-tail phrase, not the head term `ch06`.
- **data**: long-tail query data (DF1).
- **upstream / downstream**: existing post, DF1 → overlaps DCR C6.
- **depth**: full.

### N13. First-gig service offer (getting clients)
- **ask**: "Help me land my first freelance client."
- **inputs**: your technical skills, real-world skills, previously-paid experience.
- **steps**:
  1. Build the **Lazy Google Doc Portfolio** (technical skills, real-world skills, previous experience, optional testimonials, contact) `ch09` `P`.
  2. Write one concrete $100 offer with restricted scope ("for $100 you get this, this, this") `ch09` `P`.
  3. Add **Three-Pronged Pricing**: ~$500 mid, open-ended top `ch09` `S`.
  4. Post to personal Facebook/LinkedIn first; wait 24–48h; then Craigslist/Gumtree/Thumbtack `ch09` `P`.
  5. Flooded with leads → double the price, do not delete the post `ch09`.
  6. Cold email in 1–2 sentences, then call `ch09` `P`.
  7. Document before/after of every job `ch09`.
- **criteria**:
  - [ ] Portfolio is a shareable doc, not a built site `ch09`.
  - [ ] Offer lists exactly what the $100 includes `ch09`.
  - [ ] Three price tiers stated `ch09`.
  - [ ] Cold message ≤2 sentences `ch09`.
- **data**: none.
- **upstream / downstream**: none → feeds N2.
- **depth**: full (audience: freelancers, not product businesses).

---

## drew-sucks-framework

Files: ch01 `ch01-sucks-overview.md`, ch02 `ch02-specific.md`, ch03 `ch03-useful-unique.md`, ch04 `ch04-undeniable.md`, ch05 `ch05-clear.md`, ch06 `ch06-curious.md`, ch07 `ch07-conversational.md`, ch08 `ch08-kept-simple.md`, ch09 `ch09-structured.md`.

Note: this is a short e-book (~17 pages). It is an editing standard, not a set of artifact templates. Most deliverables here are passes applied to an artifact another book produces.

### D1. Piece brief (Rule of One)
- **ask**: "Before I write this post/email, help me focus it."
- **inputs**: audience, the problem you solve, your story, your numbers.
- **steps**:
  1. Pick exactly one **True Fan**, one problem, one solution, one story; resist adding more `ch02` `P`.
  2. State the payoff the reader gets, up front `ch03`.
  3. Choose a "How I" framing and an opening tidbit of your story `ch03` `P`.
  4. List the specific, non-round numbers you will use as proof `ch02`.
- **criteria**:
  - [ ] Exactly one of each: fan, problem, solution, story `ch02`.
  - [ ] Payoff is stated in plain words `ch03`.
  - [ ] Numbers are specific and non-round unless round is literally true `ch02`.
- **data**: your own tracked results.
- **upstream / downstream**: none → feeds D2 and any draft (N3, N11).
- **depth**: full (for the brief itself).

### D2. SUCKS edit pass (pre-publish audit and rewrite)
- **ask**: "Edit this draft so it reads well online" / "Run SUCKS on this."
- **inputs**: a finished draft.
- **steps**:
  1. Wait 24 hours; change screen and state before editing (laptop→phone) `ch05` `ch08`.
  2. **S**: check Rule of One; replace vague claims with specific numbers `ch02`.
  3. **U**: signal the usefulness; convert "How to" to "How I"; add proof (see D3) `ch03` `ch04`.
  4. **C**: line by line ask "What do I mean?" and say that instead; add curiosity triggers; ask "Would I say this in person?" `ch05` `ch06` `ch07`.
  5. **K**: Hemingway app, never above grade 4; small words over big; delete one third (**1/3rd Rule**) `ch08`.
  6. **S**: format for the skim: bullets, white space, short paragraphs, headings; vary sentence length; read aloud `ch09`.
- **criteria**:
  - [ ] Readability ≤ grade 4 (Hemingway) `ch08` `C`.
  - [ ] Final length ≤ ~2/3 of the draft `ch08`.
  - [ ] Every result claim carries a specific number `ch02`.
  - [ ] Every open loop is closed later in the piece `P` `ch06`.
  - [ ] Uses headings/bullets/short paragraphs `ch09`.
  - [ ] Mix of short and long sentences `ch09`.
  - [ ] Reader, not author, is the hero `ch03`.
- **data**: Hemingway app (named in source).
- **upstream / downstream**: any draft (N2–N12, L1, S2) → final copy.
- **depth**: full.

### D3. Proof section (Persuasion Proof Stack)
- **ask**: "Add proof to this page" / "Make this more believable."
- **inputs**: studies/stats/endorsements, your own results, customer results/testimonials/case studies.
- **steps**:
  1. Inventory the proof you have; start saving feedback, testimonials, case studies `ch04`.
  2. Layer 1, **Authority by Association**: studies, stats, endorsements `ch04`.
  3. Layer 2, **Your Results**: show what you are doing `ch04`.
  4. Layer 3, **Customer Results**: testimonials and case studies (strongest) `ch04`.
  5. Quantify each proof point; weave proof throughout, not only at the end `ch02` `ch04`.
- **criteria**:
  - [ ] High-stakes piece includes all three layers `ch04` `P`.
  - [ ] At least one customer result present `ch04`.
  - [ ] Proof appears in more than one place `ch04`.
- **data**: your proof archive.
- **upstream / downstream**: proof archive (L5) → feeds N4, L4.
- **depth**: partial (no placement or layout rules; combine with Shleyner L4).

### D4. Hook and opening set (4 Curiosity Triggers)
- **ask**: "Give me opening lines for this post."
- **inputs**: niche, what the reader wants, a Surprise Document of "didn't know" facts, a story.
- **steps**:
  1. Write openings that talk about what they want `ch06`.
  2. Write openings from what they didn't know (feed from the **Surprise Document**) `ch06`.
  3. Write an **open loop** to close later `ch06`.
  4. Write a story opening; optionally a "How I" tidbit `ch06` `ch03`.
- **criteria**:
  - [ ] Each opening uses at least one of the 4 triggers `ch06`.
  - [ ] Topic is on-niche `ch06`.
  - [ ] Any opened loop has a planned closing point `P`.
- **data**: Surprise Document (your own file).
- **upstream / downstream**: D1 → feeds N3, N11.
- **depth**: partial.

### D5. Unique mechanism (named framework)
- **ask**: "Turn my method into a named framework."
- **inputs**: an existing idea/method you use.
- **steps**:
  1. Take an old idea that solves an old problem `ch03`.
  2. Package it into your own branded, named system (SUCKS itself is the example) `ch03` `P`.
- **criteria**:
  - [ ] Has a name `ch03`.
  - [ ] Presented as a new solution to a known problem `ch03`.
- **data**: none.
- **upstream / downstream**: none → feeds L3 (Mechanisms filter), N4 (reason-why).
- **depth**: partial (thin: two-line procedure).

---

## shleyner-landing-pages

Files: ch01 `ch01-foundations-cdca.md`, ch02 `ch02-clarity-hero-congruence.md`, ch03 `ch03-desire-fascinations-rules.md`, ch04 `ch04-desire-process-18-filters.md`, ch05 `ch05-credibility.md`, ch06 `ch06-compelling-action.md`, ch07 `ch07-testing.md`.

Scope note `S`: the method targets landing pages that advertise content (paid or email-gated); the single worked example is a book page.

### L1. Transformational landing page (CDCA)
- **ask**: "Build a landing page for my course/ebook/webinar" / "Rewrite this page to double conversions."
- **inputs**: the content being sold (worth it), one real prospect ("person"), proof assets, the incentive, the current page (control) if any.
- **steps**:
  1. Confirm the content is "worthy of a transformational landing page" `ch01`.
  2. Run the personal interview and pick the **person** (L7) `ch02`.
  3. **Clarity**: write the 6-element Hero (L2) `ch02`.
  4. **Desire**: write the fascination wall (L3) `ch03` `ch04`.
  5. **Credibility**: logos, guarantee, statistics, testimonials (L4) `ch05`.
  6. **Action**: answer "Why now?" (L6) `ch06`.
  7. Build the page first, then derive the ads from the Hero (L8) `ch02` `P`.
  8. Test it as a big test against the control (L9) `ch07`.
- **criteria**:
  - [ ] Page has a section doing each CDCA job, in order `ch01` `C`.
  - [ ] One CTA per divider, in a color used nowhere else on the page `ch06`.
  - [ ] Proof shown high on the page `ch05`.
  - [ ] Conversion form has the fewest possible fields `ch06`.
  - [ ] Incentive is time- or supply-limited `ch06`.
  - [ ] If replacing a control: looks/reads nothing like it `ch01` `ch07`.
  - [ ] Clear, not clever: no exclamation-mark hype `ch02`.
- **data**: A/B testing and analytics (L9).
- **upstream / downstream**: L7 → composes L2–L6 → feeds L8, L9.
- **depth**: full.

### L2. Hero divider (above the fold)
- **ask**: "Write the hero section for this landing page."
- **inputs**: what the page advertises, the one big promise, the incentive, art concept.
- **steps**:
  1. **Primer**: say plainly what it is; end with a colon `ch02` `C`.
  2. **Headline**: one big, beautiful promise; clear, not clever `ch02`.
  3. **Subhead**: **Future Pacing** with "imagine / picture this / stop / start"; periods, not exclamation marks `ch02`.
  4. **Body**: answer "how?" in ~20–30 words `ch02` `C`.
  5. **CTA**: an incentive creating urgency (optional downsell) `ch02` `ch06`.
  6. **Art**: visualize what they get and reinforce the incentive `ch02`.
- **criteria**:
  - [ ] Six elements present in this order `ch02` `C`.
  - [ ] Primer ends with a colon `ch02`.
  - [ ] Headline is a single promise, no wordplay `ch02`.
  - [ ] Subhead uses a future-pacing trigger word and no "!" `ch02`.
  - [ ] Body is ~20–30 words and explains how `ch02`.
  - [ ] CTA states an incentive `ch02`.
- **data**: none.
- **upstream / downstream**: L7 → part of L1, source for L8; reused as the rewrite target in L9.
- **depth**: full (worked example in `C`).

### L3. Fascination wall
- **ask**: "Write the bullets that make people want this" / "Write fascinations for my course."
- **inputs**: the content itself (text, or transcripts of audio/video).
- **steps**:
  1. Transcribe audio/video; highlight every excerpt with valuable info + the benefit of knowing it (**find the nugget**, hunt benefits first) `ch04` `P`.
  2. Validate each nugget with an **If/Then** ("If you know X, then you get Y") `ch04`.
  3. **Tease the value and state the benefit** (allude, don't reveal) `ch04`.
  4. **Apply a filter** from the 18 (Mechanisms, Statement+Interest+Benefit, What, What never, Right?-Wrong, Why, When, Specific question, If-then, Quickest-easiest, Number, Big promise, How, Caution, Truth, Best, Surprising, Are you) `ch04` `C`.
  5. Write ~7× more than needed and pare down `ch03`.
  6. Create variance in layout (checkerboard) and filters `ch03`.
- **criteria**:
  - [ ] Each fascination is 1–3 sentences `ch03`.
  - [ ] Each promises a benefit and withholds the how `ch03`.
  - [ ] Each delivers on its promise in the content (not clickbait) `ch03`.
  - [ ] No "buy/purchase" (use "get"), no "learn/study" (use "discover") `ch03` `C`.
  - [ ] Simple words (≤2 syllables) except insider terms for expert audiences `ch03`.
  - [ ] Several different filters used; fear filters (#4, #14) not dominant `ch04` `P`.
  - [ ] Benefits are specific and backed by a specific or a credible source `ch03`.
- **data**: transcripts of the content.
- **upstream / downstream**: the content → part of L1; filters also generate headlines/subject lines (overlaps N1).
- **depth**: full.

### L4. Credibility section (confidence signals and testimonials)
- **ask**: "Add a trust section" / "How should I show proof on this page?"
- **inputs**: customer logos (with permission), guarantee terms, market-relative statistics, testimonials.
- **steps**:
  1. **Logos**: well-known customers willing to vouch, plus awards; place near the top ("show your proof first") `ch05`.
  2. **Guarantee**: transfer risk (paid: lifetime/100% money-back/60-day; free: unsubscribe anytime/one email a week/never share) `ch05`.
  3. **Statistics**: numbers substantial relative to your market (time on market, copies sold, reach) `ch05`.
  4. Choose **Whale** (one highly credible name) or **School** (wall of many customers); prefer School without a credible whale `ch05` `P`.
  5. Place proof near the claim it backs `ch05`.
- **criteria**:
  - [ ] Proof appears high on the page `ch05`.
  - [ ] A guarantee is stated in plain terms `ch05`.
  - [ ] Each statistic is large relative to competitors `ch05`.
  - [ ] Any standalone whale is a recognizably influential person `ch05`.
  - [ ] School wall has visible volume `ch05`.
- **data**: testimonial store/embed tool.
- **upstream / downstream**: L5, D3 → part of L1.
- **depth**: full.

### L5. Testimonial collection campaign
- **ask**: "I have no testimonials, help me get some."
- **inputs**: audience/list, an incentive to offer.
- **steps**:
  1. Set up a collection/embed tool for video + text (source uses Testimonial.to) `ch05` `P`.
  2. Email a clear, easy ask with an incentive (gift card, backlink, free content) `ch05`.
  3. Bake the ask into the content itself (at every intermission) so testimonials accrue `ch05`.
- **criteria**:
  - [ ] Ask offers an explicit incentive `ch05`.
  - [ ] Ask is one clear step `ch05`.
  - [ ] Collection point exists inside the content `ch05`.
- **data**: collection tool, email list.
- **upstream / downstream**: none → feeds L4, D3, N10 (cool angle).
- **depth**: full.

### L6. "Why now?" action block
- **ask**: "Make people act now instead of later."
- **inputs**: incentive options, form fields, guarantee, possible downsell.
- **steps**:
  1. **FOMO**: an economic incentive limited by time or supply (flash sale, % off, first-N bonuses) `ch06`.
  2. **Easy**: cut the form to the fewest lines `ch06`.
  3. **Nothing to lose**: guarantee; add a free **downsell** only if bounce is high `ch06` `P`.
  4. **Because you're asking**: one CTA per divider, anchored to the form, stand-out color `ch06`.
- **criteria**:
  - [ ] Incentive has a stated time or quantity limit `ch06`.
  - [ ] No form field beyond what conversion needs `ch06`.
  - [ ] Guarantee stated near the CTA `ch06`.
  - [ ] Every divider has a CTA `ch06`.
  - [ ] Downsell is absent at launch or justified by bounce data `ch06`.
- **data**: bounce rate for the downsell decision.
- **upstream / downstream**: part of L1; the incentive is the favorite small-test variable in L9.
- **depth**: full.

### L7. Prospect interview → "person" and hook
- **ask**: "Help me understand who I'm writing this page for."
- **inputs**: access to one real prospect.
- **steps**:
  1. Interview one real prospect with open-ended questions `ch02` `P`.
  2. **Mirror**: repeat their last words back as a question `ch02`.
  3. Record it instead of taking notes `ch02`.
  4. Mine the rawest, most honest line for the hook; write the page to that person, not a persona `ch02` `P`.
- **criteria**:
  - [ ] Based on a named real interviewee, not a composite persona `ch02`.
  - [ ] Hook line traces to a quote from the recording `P`.
- **data**: interview recording/transcript.
- **upstream / downstream**: none → feeds L1, L2, and L9's recovery loop.
- **depth**: partial (no question bank; pairs with a customer-interview book outside this slice).

### L8. Congruent ad from the Hero
- **ask**: "Write the Facebook/email ad that sends traffic to this page."
- **inputs**: the finished Hero (L2).
- **steps**:
  1. Build the landing page first `ch02` `P`.
  2. Derive ad copy, art and layout from the Hero; often screenshot the Hero into the post `ch02`.
  3. If space is tight, use the headline + part of the art `P`.
- **criteria**:
  - [ ] Ad headline matches the Hero headline `ch02`.
  - [ ] Ad art matches the Hero art `ch02`.
- **data**: none.
- **upstream / downstream**: L2 → traffic to L1. Same principle as Neville's ad scent (N7).
- **depth**: full (small).

### L9. Landing-page test plan (big test, then small tests)
- **ask**: "How should I test this new page against the old one?"
- **inputs**: control page, contender page, traffic volume, testing tool.
- **steps**:
  1. **Big test**: CDCA contender vs bare control `ch07`.
  2. Run to statistical significance (enough traffic) before calling it `ch07`.
  3. Win → promote the contender to control; run **small tests** cloning it with one variable changed (art, button color, downsell, incentive; incentive is the favorite) `ch07`.
  4. Lose → return to the person: right angle, problem, person? Rewrite only the Hero hook (headline, subhead, body) and retest `ch07`.
- **criteria**:
  - [ ] Control and contender named `ch07`.
  - [ ] Significance condition stated before launch `ch07`.
  - [ ] Each small test changes exactly one variable `ch07`.
  - [ ] Loss branch rewrites only the hook; content, fascinations and testimonials stay `ch07`.
- **data**: A/B tool, analytics, traffic.
- **upstream / downstream**: L1 → loops back to L2/L7.
- **depth**: full (no numeric significance threshold in the source).

---

## seo-2026-sota (source in Italian)

Files: ch01 `ch01-geo-fondamenti-fiducia-bofu.md`, ch02 `ch02-geo-playbook-6-step.md`, ch03 `ch03-geo-distribuzione-off-site.md`, ch04 `ch04-seo-vs-geo-overlap.md`, ch05 `ch05-ottimizzare-per-modello.md`, ch06 `ch06-geo-topical-authority-blackhat-8020.md`, ch07 `ch07-seo-fondamenti-come-funziona-google.md`, ch08 `ch08-far-trovare-indicizzazione-rendering-blocco.md`, ch09 `ch09-architettura-url-directory-canonical.md`, ch10 `ch10-contenuti-utili-link.md`, ch11 `ch11-aspetto-serp-title-snippet-immagini-video.md`, ch12 `ch12-promozione-miti-seo.md`, ch13 `ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md`, ch14 `ch14-search-console-monitoraggio-triangolazione.md`, ch16 `ch16-webdev-chrome-cwv-crux-lighthouse.md`.

Thesis `S`: "SEO doesn't die, it splits": classic SEO (Google) and GEO (generative engines) are two parallel programs with low overlap (8–12%) `ch04`. Numbers in this book are a May 2026 snapshot; the source says to re-validate before budget decisions `S` `ch01`.

### S1. GEO content plan (prompt-targets and BoFu topics)
- **ask**: "What should I publish to get recommended by ChatGPT/Perplexity?"
- **inputs**: product, ICP, existing landing pages, competitors, which LLMs your customers use.
- **steps**:
  1. First filter: GEO pays off if the product needs an informed decision (SaaS, B2B, consulting, education, complex products), not volume ecommerce on short queries `ch01`.
  2. Map customers → models → channels (ChatGPT, Claude, Gemini/AIO, Perplexity) `ch05` `P`.
  3. Extract your landing pages; ask Claude for listicles, comparisons and alternatives pages, with 3 **prompt-targets** each `ch02`.
  4. Filter by ICP down to 5–10 ideas; generate a brief per idea `ch02`.
  5. Assign each idea one of the **4 BoFu formats**: vertical listicle, "X vs Y", choice guide with decision matrix, "[Competitor] alternatives" `ch01`.
  6. Keep informational hubs only for topical authority `P` (Pivot ToFu→BoFu).
- **criteria**:
  - [ ] Plan states why GEO fits this product (informed-decision test) `ch01`.
  - [ ] 5–10 ideas, each in one of the 4 BoFu formats `ch02` `ch01`.
  - [ ] Each idea has 3 prompt-targets written as conversational questions, not Google keywords `ch02` `ch01`.
  - [ ] Each idea names the model(s) it targets `ch05`.
- **data**: an LLM (Claude in the source); optional AI search volume and LLM mentions (DF8).
- **upstream / downstream**: positioning (DCR C1) → feeds S2, S8, S12.
- **depth**: full.

### S2. BoFu GEO page (listicle, X vs Y, choice guide, alternatives)
- **ask**: "Write a '[Competitor] alternatives' page that LLMs will cite."
- **inputs**: S1 brief, first-hand test data, author credentials, client names (as text), primary sources.
- **steps**:
  1. Confirm critical content is in the first HTML response, not built by client-side JS (**first-response rule**) `ch02`.
  2. **Heading-as-question**: each H2/H3 is a real question; the first sentence below is a self-contained 1–2 line answer (≤100 chars for Gemini); detail below `ch02` `ch13` `P`.
  3. Declare originality ("we tested 12 tools for 6 weeks") and add a "How we tested" section `ch02` `ch13`.
  4. Add E-E-A-T for LLMs: author bio with photo/credentials/sameAs, client logos as **text**, result numbers in body, verifiable primary sources `ch02` `P`.
  5. For choice guides, include an explicit decision matrix (criteria, tables, use cases) `ch01`.
  6. Schema: Article + Author + Organization + FAQPage; ItemList for listicles; validate (S5) `ch02` `ch13`.
  7. Title 50–60 chars, keyword left, key info in first 50; meta 150–160 chars `C` `ch11`.
  8. Publish → Search Console URL Inspection "Request indexing" + IndexNow for Bing/Perplexity/Copilot `ch02` `P`.
- **criteria**:
  - [ ] Every H2/H3 is phrased as a question `ch02`.
  - [ ] First sentence under each heading answers it alone in 1–2 lines `ch02` `ch13`.
  - [ ] Page states test method/duration or first-hand data `ch02` `ch13`.
  - [ ] Client logos/names appear as text `ch02` `ch03`.
  - [ ] Author named with credentials and sameAs links `P`.
  - [ ] Structured data validates with no errors `ch13`.
  - [ ] Page does not self-rank #1 without evidence (site reputation abuse risk) `ch13`.
- **data**: GSC, IndexNow key, schema validators; curl for the crawlability check.
- **upstream / downstream**: S1, S6 → feeds S8 (one video per listicle), S12.
- **depth**: full.

### S3. Technical SEO audit
- **ask**: "Audit my site's technical SEO."
- **inputs**: domain, GSC access, CMS/rendering stack, key templates.
- **steps**:
  1. Indexation: `site:` operator; if missing check Googlebot access, 200 OK, robots.txt, meta noindex, valid HTML, declared language `ch08`.
  2. AI crawlability: JS off (AI Eyes) or `curl -s URL | grep -c '</p>'`; <70% content or <5 paragraphs → prerender (SSR/SSG/Islands) `ch02` `P`.
  3. Rendering strategy per section (SSR/SSG/CSR/ISR/Islands); no hash routing; no content behind "load more" `ch08`.
  4. Blocking: never Disallow + noindex together; noindex first, Disallow after deindexing; X-Robots-Tag for non-HTML `ch08` `C`.
  5. Canonicals: self-referencing on every page; signal strength 301 > rel=canonical > hreflang > sitemap > internal links; check Google's chosen canonical in GSC `ch09` `P`.
  6. URLs: <75 chars, hyphens, lowercase ASCII, ≤2 params, no dates on evergreen; sitemap ≤50,000 URLs/50MB `ch09` `ch08` `C`.
  7. Titles/meta per S13; images (alt, width/height, LCP image never lazy) `ch11`.
  8. CWV from CrUX (S4), schema validation (S5), hreflang rules (bidirectional, self-ref, ISO codes, x-default, absolute URLs) `ch13`.
  9. Intrusive interstitials on mobile `ch10`; Lighthouse SEO audits (tap targets ≥48px, descriptive link text, etc.) `ch16`.
  10. Report grouped by the **5 areas** of an SEO program (crawl/index, IA, content/topical authority, SERP appearance, measurement) `ch07`.
- **criteria**:
  - [ ] Every finding names the URL/template, the rule broken, and the tool that showed it (GSC URL Inspection, PSI/CrUX, Rich Results Test) `ch08` `ch13`.
  - [ ] No recommendation combines Disallow + noindex `ch08`.
  - [ ] CWV reported as p75 over 28 days of field data, not lab only `ch13` `ch16`.
  - [ ] Each fix lists expected time to effect (timing table) `ch07`.
  - [ ] Changes sequenced one at a time `ch07`.
- **data**: GSC, CrUX/PageSpeed Insights, Rich Results Test, Schema Markup Validator, curl; optional crawl data (DF7).
- **upstream / downstream**: DF7 → feeds S4, S5, S10.
- **depth**: full.

### S4. Core Web Vitals remediation plan
- **ask**: "My site fails Core Web Vitals, what do I fix?"
- **inputs**: CrUX data per URL/origin, Lighthouse runs, templates.
- **steps**:
  1. Check each metric at p75 over 28 days: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 `ch13` `C`.
  2. LCP: diagnose by its 4 sub-phases (TTFB, resource load delay, resource load duration, element render delay); fix with preload + `fetchpriority="high"`, AVIF/WebP, CDN, TTFB, inline critical CSS ≤14KB `ch16` `ch13`.
  3. INP: break tasks ≤50ms, code splitting, Web Workers, limit third parties, debounce 150–300ms `ch13` `P`.
  4. CLS: width/height on media, reserved space for ads/widgets, `font-display: swap` + `size-adjust` `ch13`.
  5. Add Lighthouse CI as a PR gate with budgets; run audits several times to reduce variance `P`.
  6. Re-measure after 4–8 weeks (CrUX rolling window) `ch07`.
- **criteria**:
  - [ ] Each fix maps to a failing metric and a named sub-phase or cause `ch16`.
  - [ ] LCP image is not lazy-loaded `ch11`.
  - [ ] Pass defined as 75% of visits "Good" on all three `ch13`.
  - [ ] Measurement date set ≥4 weeks after deploy `ch07`.
- **data**: CrUX API/History API/BigQuery (`materialized.*`), PSI, Lighthouse.
- **upstream / downstream**: S3 → feeds S11 monitoring.
- **depth**: full.

### S5. Structured data pack
- **ask**: "Add schema markup to my blog/product pages."
- **inputs**: page types, author and organization data.
- **steps**:
  1. Use JSON-LD `ch13`.
  2. Pick types: Article/BlogPosting + Author (Person + sameAs) + Organization; FAQPage; ItemList for listicles; VideoObject for video pages `ch02` `ch13` `ch03`.
  3. Validate locally (schema-dts + AJV) → Schema Markup Validator → Rich Results Test as a staging gate `P`.
  4. After changes, check GSC "Rich results" report `ch14`.
- **criteria**:
  - [ ] Valid in both Schema Markup Validator and Rich Results Test `ch13`.
  - [ ] Author is a Person with sameAs `P`.
  - [ ] FAQPage kept for AI Mode, without expecting FAQ rich results (removed May 2026) `ch13`.
- **data**: validators, GSC.
- **upstream / downstream**: S6 → part of S2, S3.
- **depth**: full.

### S6. E-E-A-T trust package (author and evidence)
- **ask**: "Make my content look trustworthy to Google and LLMs."
- **inputs**: authors, credentials, LinkedIn/ORCID, original photos, test methodology, client list, results.
- **steps**:
  1. Author pages with bio, photo, LinkedIn/ORCID; Schema Person + sameAs `ch13` `P`.
  2. Complete Organization schema `P`.
  3. Original photos and a "How we tested" / methodology section (especially YMYL) `ch13`.
  4. Client logos as text; result numbers in body; citations of primary sources `ch02` `P`.
- **criteria**:
  - [ ] Every advice page names an author with credentials `ch13`.
  - [ ] A methodology/testing section exists on review/comparison pages `ch13`.
  - [ ] No trust signal exists only as an image `P`.
- **data**: none external.
- **upstream / downstream**: none → feeds S2, S5.
- **depth**: full.

### S7. Off-site GEO distribution plan
- **ask**: "Where should we be mentioned so AI assistants recommend us?"
- **inputs**: S1 model map, weekly hours available (5–10h in source), B2B or B2C.
- **steps**:
  1. Allocate by model: ChatGPT → Wikipedia + G2/Capterra; Claude → technical docs, GitHub, papers; Gemini/AIO → YouTube + schema + recency; Perplexity → Reddit `ch05` `C`.
  2. G2 + Capterra (+ Trustpilot for the 3× effect) setup: free profiles, complete categories/description/screenshots/integrations, one-shot review campaign, quarterly update; target 20–30 reviews, 4.3+ `ch03` `P`.
  3. Reddit: participation not editorial; real-karma account with disclosure ("I work at X") `ch03`.
  4. Republish on Medium/LinkedIn: canonical on your blog, wait 1–2 weeks, republish with rel=canonical `ch03` `P`.
  5. Digital PR: ask ChatGPT for the top 10 articles reviewing your category, pitch each writer with data `ch03`.
  6. Prioritize the **80/20** assets: 3–5 BoFu listicles, G2+Capterra, 3–5 long-form YouTube videos, 2–3 subreddits, Article+Author+Organization schema `ch06` `C`.
- **criteria**:
  - [ ] Each channel is justified by a target model `ch05`.
  - [ ] No black-hat tactic: no review farm, no astroturfing, no aggressive Wikipedia editing `ch06`.
  - [ ] Reddit activity includes disclosure `ch03`.
  - [ ] Republished copies point canonical to the original `ch03`.
- **data**: LLM queries; optional DF8, DF12.
- **upstream / downstream**: S1 → feeds S8, S12.
- **depth**: full.

### S8. YouTube GEO video package
- **ask**: "Turn my listicle into a YouTube video that gets cited in AI Overviews."
- **inputs**: a BoFu listicle (S2).
- **steps**:
  1. One video per BoFu listicle (slideshow + voice-over is enough) `ch03`.
  2. Title = exact commercial query ("Best [category] tools 2026: tested 12, here are the 5 worth your time") `ch03`.
  3. Long-form, sweet spot 10–20 minutes `ch03`.
  4. Publish the transcript on your site `ch03` `ch11`.
  5. VideoObject schema on the embedding page `ch03`.
  6. Rich description + chapter markers mirroring the listicle `ch03`.
- **criteria**:
  - [ ] Title contains the commercial query `ch03`.
  - [ ] Duration ≥10 min `ch03`.
  - [ ] Transcript published on site `ch03`.
  - [ ] VideoObject validates `ch03` `ch13`.
  - [ ] Chapters match listicle sections `ch03`.
- **data**: optional YouTube SERP (DF11).
- **upstream / downstream**: S2 → feeds S12.
- **depth**: full.

### S9. Topic cluster and internal-link matrix
- **ask**: "Plan a content cluster for [vertical] and fix our internal links."
- **inputs**: URL + title export from CMS, target vertical.
- **steps**:
  1. Design hub & spoke: pillar → spoke → sub-spoke in topical directories; for GEO keep it narrower and deeper `ch09` `ch06` `P`.
  2. Export URLs + titles; ask Claude for a link matrix (source, destination, anchor, context sentence; 50–200 links) `ch06` `P`.
  3. Review anchors for over-optimization; implement (Link Whisper/Yoast or manually) `P`.
- **criteria**:
  - [ ] Every spoke links to its pillar `ch09`.
  - [ ] Every matrix row has source, destination, anchor, context sentence `ch06`.
  - [ ] Anchors are descriptive, never "click here" `ch10`.
- **data**: CMS export; an LLM.
- **upstream / downstream**: S1/DCR C4 topics → strengthens S2.
- **depth**: full.

### S10. Organic traffic drop diagnosis
- **ask**: "Our organic traffic dropped, why?"
- **inputs**: GSC, GA4, deploy log, Trends.
- **steps** (the 7-step procedure) `ch14` `P`:
  1. Source of the drop (search type, country, device; general or concentrated).
  2. Timing coincidences (Core Update, sitemap, deploy, CDN) cross-checked with Search Status Dashboard.
  3. Technical (dropped pages, 5xx, robots.txt, live test).
  4. Algorithmic (gradual = Core Update, sudden = technical/manual).
  5. Manual action.
  6. Seasonality (Google Trends).
  7. Competition.
- **criteria**:
  - [ ] Search Status Dashboard checked before any diagnosis `ch14`.
  - [ ] Each of the 7 steps has a recorded finding `ch14`.
  - [ ] Recommends one change at a time `P` `ch07`.
- **data**: GSC, GA4, Search Status Dashboard, Google Trends; optional DF4.
- **upstream / downstream**: S11 → feeds S3/S4 fixes.
- **depth**: full.

### S11. SEO measurement and weekly report (GSC + GA4 + Trends)
- **ask**: "Set up an SEO report that shows business impact."
- **inputs**: GSC (DNS TXT verification), GA4, conversion events.
- **steps**:
  1. Link GSC ↔ GA4; define GA4 conversion events `ch14` `P`.
  2. Review the 5 GSC reports on cadence: Performance weekly, Page indexing after deploys/monthly, Page experience every 2 weeks, Rich results after schema changes, Manual actions/Security via email alerts `ch14`.
  3. Context with Google Trends (5 years) to separate growth from seasonality `ch14`.
  4. BigQuery export for anomalous CTR, branded/non-branded, decay `ch14`.
  5. GEO tracking from 4 sources: GA4 source/medium, GSC, an AI-visibility tracker, weekly manual tests; optional `udm=14` GA4 event for AI Mode clicks `ch02` `ch14`.
- **criteria**:
  - [ ] Report includes at least one conversion metric `ch14`.
  - [ ] Growth is shown against Trends context `ch14`.
  - [ ] Manual-action email alerts enabled `ch14`.
- **data**: GSC, GA4, Trends, BigQuery; optional DF4, DF8, DF9.
- **upstream / downstream**: none → feeds S10, S12.
- **depth**: full.

### S12. GEO weekly citation audit (iteration cycle)
- **ask**: "Check whether AI assistants cite us and what to update this week."
- **inputs**: prompt-targets (S1), competitor list.
- **steps** (weekly cycle) `ch02`:
  1. Mon: run prompt-targets on ChatGPT/Claude/Perplexity/Gemini; record if, where, and from which source you are cited.
  2. Tue–Wed: for prompts where you are absent, analyze who is cited and why (more data, examples, better schema, Reddit/G2/YouTube presence).
  3. Thu: update 1–2 pages (often add data/FAQ/table).
  4. Fri: publish/republish, notify via Search Console + IndexNow, update the dashboard.
- **criteria**:
  - [ ] Log covers every prompt-target on all four assistants `ch02`.
  - [ ] Each gap names the cited competitor and the reason `ch02`.
  - [ ] Each week ships 1–2 page updates `ch02`.
- **data**: LLM access or DF8 (LLM scraper/responses/mentions).
- **upstream / downstream**: S1, DF8 → feeds S2 updates.
- **depth**: full.

### S13. Title and meta description set
- **ask**: "Write titles and meta descriptions for these pages."
- **inputs**: page, primary query, USP/price/availability for products.
- **steps**:
  1. Title: unique, keyword left, key info in first 50 chars, ~50–60 chars (pixel truncation ~580px) `ch11` `C`.
  2. Meta: 150–160 chars, unique, adds info (not a title copy), natural CTA; for products price/availability/USP `ch11`.
  3. Structure each section (H2/H3 + short summary) to work as a dynamic snippet `ch11`.
- **criteria**:
  - [ ] Title ≤60 chars, not "Home", not duplicated, matches H1 `ch11`.
  - [ ] Meta 150–160 chars, unique per page `ch11`.
  - [ ] No keyword stuffing `ch11` `ch12`.
- **data**: GSC queries per page.
- **upstream / downstream**: page content → part of S2, S3.
- **depth**: full.

### S14. Link-earning / digital PR plan
- **ask**: "How do we earn links without buying them?"
- **inputs**: proprietary data, tools, experts.
- **steps**:
  1. Choose from legitimate tactics: original research with own data, linkable resources (tools, calculators, glossaries, live dashboards), guest posts on edited publications, HARO/Qwoted/Featured, podcasts/conferences, offline promotion `ch12`.
  2. Pitch individual writers with data, found via the "top 10 articles" ChatGPT query `ch03`.
- **criteria**:
  - [ ] No bought links, PBNs, mass group posting or bot engagement `ch12`.
  - [ ] Each asset is data- or tool-based, not opinion `ch12`.
- **data**: optional DF6, DF10.
- **upstream / downstream**: none → feeds S7.
- **depth**: partial (a tactic list, no sequence or quality bar).

---

## doing-content-right

Files: ch01 `ch01-personal-monopoly.md`, ch02 `ch02-building-your-home.md`, ch03 `ch03-distribution.md`, ch04 `ch04-seo.md`, ch05 `ch05-monetization.md`, ch06 `ch06-extras.md`.

Caveat `S`: tactics and figures are 2020-era; verify specifics.

### C1. Positioning one-liner and niche validation (Personal Monopoly)
- **ask**: "Help me pick a niche for my newsletter/blog" / "Write my one-line value prop."
- **inputs**: your experience, skills, obsessions, closest competitors.
- **steps**:
  1. Find the **Personal Monopoly**: "What have you done that 95%+ haven't?", "5+ years you can transfer fast?", "What would you have loved 5 years ago?", "What do you think about in the shower?" `ch01`.
  2. Check the **Idea Ikigai**: interesting + doesn't exist in that form + your unique exposure `ch01`.
  3. **Saturation reframe**: is it "the new (if relevant)" or "the old, 1% better"? `ch01` `C`.
  4. Write the **"what for who"** one-liner: biggest pain + differentiator vs closest competitor + core audience `ch01` `P`.
  5. Run the **"most ___ blog I know"** test until one adjective surfaces `P` `ch01`.
  6. Validate: search volume + existing newsletters/blogs/communities + market growth `ch01` `P`.
  7. Define 100 true fans in granular detail; identify 3–5 distribution vectors `ch01`.
- **criteria**:
  - [ ] One-liner is one sentence containing pain, differentiator, audience `ch01`.
  - [ ] Names the specific vector of "better" (funnier, more researched…) `ch01`.
  - [ ] Validation shows evidence for all three checks `ch01`.
  - [ ] Lists 3–5 distribution vectors `ch01`.
  - [ ] Starts specific (narrow audience) `ch01` `P`.
- **data**: search volume (DF1/DF9), community discovery.
- **upstream / downstream**: none → feeds C2, C3, S1, and Bob (N-series).
- **depth**: full.

### C2. Publication charter (Unwritten Contract and stack)
- **ask**: "Set up my newsletter: values, format, tools, paid or free."
- **inputs**: C1, goals, budget.
- **steps**:
  1. **Core Values Exercise**: list everything you want, flag conflicts, reorder, circle non-negotiables, resolve conflicts, set guardrails `ch02` `P`.
  2. Decide **paid vs free** ("How much is my solution worth?"); paid only if a painkiller with a clear value prop `ch02` `C`.
  3. Pick the 6-part stack (domain, hosting, platform, ESP, modal software, analytics) in days, not weeks `ch02`.
  4. Set a threshold of excellence below which nothing ships `ch02`.
  5. Run a blog (discoverable) + newsletter (owned) together `ch01` `S`.
- **criteria**:
  - [ ] Non-negotiables written and tied to the value prop `ch02`.
  - [ ] Paid/free decision has a stated reason `ch02`.
  - [ ] All 6 stack components chosen `ch02`.
  - [ ] Both blog and newsletter planned `ch01`.
- **data**: none.
- **upstream / downstream**: C1 → feeds C3, C9.
- **depth**: full.

### C3. Distribution channel plan
- **ask**: "How do I get readers for my content?"
- **inputs**: C1 audience, time and budget.
- **steps**:
  1. Classify candidate channels with **Brick by Brick**: Bedrock, Viral, Social, Syndicate, Targeted, Paid `ch03` `S`.
  2. Score each on **CODES** (Cost, Ownership, Dependability, Effort, Scalability) `ch03`.
  3. **Explore**: 1–3 channels in 2–4 week cohorts; cut those without product-channel fit; exploit winners until 2–5 reliable channels `ch03`.
  4. Tier channels 0–3 (0 = no-brainers: SEO, referral program, newsletter) `ch03`.
  5. Under ~100 fans: do things that don't scale (1:1 outreach, reply to all, weak ties, build in the open) `ch03` `P`.
  6. Set SMART goals as inputs; avoid hollow metrics; aim for ~50:50 writing vs distribution effort `ch03`.
  7. Match copy to each platform's vibe (HN matter-of-fact; Reddit full content + soft CTA; no upvote begging) `ch03` `P`.
- **criteria**:
  - [ ] Every channel has a CODES score `ch03`.
  - [ ] At least one owned bedrock channel (newsletter) `ch03`.
  - [ ] No dependence on a viral channel `ch03` `S`.
  - [ ] Each test has a 2–4 week cohort window and a cut rule `ch03`.
  - [ ] Goals are input-based and SMART `ch03`.
- **data**: channel analytics; optional DF9 trends.
- **upstream / downstream**: C1, C2 → feeds C4, C8.
- **depth**: full.

### C4. SEO article keyword brief
- **ask**: "Pick a keyword and brief me for this article."
- **inputs**: the article idea, your domain's authority, keyword tools.
- **steps** (the source's 10-step workflow) `ch04`:
  1. Decide if the article is informational (only optimize those; leave inspirational pieces alone).
  2. Brainstorm: "What problem does this solve?" → "How would someone type it into Google?"; if nobody searches your product, target **Associated Problems**.
  3. Pick ONE primary keyword; validate intent by Googling it and reading the top-3 result types.
  4. Check volume (~200–5,000/month unless a big site).
  5. Check competitiveness (difficulty = DA + link profile of current rankers, Ahrefs).
  6. Build the outline from People Also Ask, related/"also rank for" keywords, and ranking articles.
  7. On-page: keyword in title/meta/slug/body, secondaries sprinkled, title ≤60, meta ≤160, length as long as the problem demands.
  8. Publish → GSC URL Inspection → Request Indexing; set canonical.
  9. Build links toward DA ~10 (C7); watch impressions in GSC.
  10. Re-optimize later (C6).
- **criteria**:
  - [ ] Exactly one primary keyword `ch04`.
  - [ ] Top-3 SERP results are the same content type as the planned article `ch04`.
  - [ ] Volume in ~200–5,000/mo or justified `ch04` `C`.
  - [ ] Difficulty compared to own domain strength `ch04`.
  - [ ] Keyword in title, meta, slug, body; title ≤60, meta ≤160 `ch04` `P`.
  - [ ] Outline cites PAA/ranking-article sources `ch04`.
- **data**: keyword volume, KD, SERP, PAA, GSC (DF1, DF2).
- **upstream / downstream**: C1, DF1, DF2 → feeds N11 drafting, S9.
- **depth**: full.

### C5. Content re-optimization plan
- **ask**: "Which old posts should I update for SEO?"
- **inputs**: article inventory, keyword data, GSC.
- **steps**:
  1. Bucket articles as informational vs inspirational `P` `ch03`.
  2. Re-target keywords on the informational ones `P`.
  3. Prioritize by volume `P`.
  4. Refresh for freshness; re-submit for indexing after major edits `P` `ch04`.
- **criteria**:
  - [ ] Every article tagged informational/inspirational `P`.
  - [ ] Each re-targeted article has one primary keyword with validated intent `ch04`.
- **data**: DF1, GSC.
- **upstream / downstream**: C4 → overlaps N12.
- **depth**: partial (no quality bar for the refreshed content; Neville's revamp supplies it).

### C6. Fresh-domain link-building plan ("Second Chances")
- **ask**: "My site is new, how do I get Google to start ranking it?"
- **inputs**: domain authority today, linkable assets, expertise.
- **steps**:
  1. Target ~30 follow links to cross DA ~10 so Google retests the content `ch04` `P`.
  2. Sources: linkable assets, interviews/HARO (10–30% hit rate), a free tool, unlinked mentions (Google Alerts/Mention), expired domains `ch04` `P`.
  3. Avoid nofollow and paid/bad links `ch04`.
- **criteria**:
  - [ ] Target count and DA goal stated `ch04`.
  - [ ] Only follow links counted toward the goal `ch04`.
  - [ ] No paid/toxic link sources `ch04`.
- **data**: backlink tool (DF5, DF6).
- **upstream / downstream**: none → supports C4.
- **depth**: partial (tactic list; outreach copy comes from elsewhere, e.g. N2).

### C7. Email capture system (modals, lead magnets, referrals)
- **ask**: "Get more of my blog readers onto my newsletter."
- **inputs**: traffic pages, a lead magnet, ESP/modal tool.
- **steps**:
  1. Mix capture types: event-triggered (exit), fixed, and landing-page modals `ch03` `P`.
  2. Modal copy: value-aligned, social proof, calm objections, no distractions; never generic "Sign up for my newsletter" `P` `ch03`.
  3. Per-article content upgrades as lead magnets `ch03`.
  4. Referral program with one-click sharing and tiered rewards; gate giveaways behind referrals `P` `ch03`.
  5. One action per page (no competing course + newsletter CTAs) `ch03`.
- **criteria**:
  - [ ] Modal copy names the reader's value, not the action label `ch03`.
  - [ ] Includes social proof `P`.
  - [ ] One CTA per page `ch03`.
- **data**: modal/ESP analytics.
- **upstream / downstream**: C2 → feeds N8.
- **depth**: partial (copy craft from N3/L3).

### C8. Monetization plan
- **ask**: "How should I make money from my audience?"
- **inputs**: audience size/engagement, how the audience trusts you, revenue target.
- **steps**:
  1. Map trust to method: opinion → affiliates; ability → course; entertainment → sponsored copy `ch05` `P`.
  2. Score candidate methods on **SWEAT** (Scalability, Work, Audience, Timeline) `ch05`.
  3. Back into the revenue target with several mixes ("many ways to the finish line") `ch05`.
  4. Diversify and test until one hits; prefer newsletter sponsorships over display ads `ch05`.
  5. Check each method against the contract (only promote what you use) `ch05`.
- **criteria**:
  - [ ] Each method has a SWEAT score `ch05`.
  - [ ] Lead method matches the stated trust type `ch05`.
  - [ ] Revenue target decomposed into at least two mixes `ch05`.
  - [ ] No affiliate product the author has not tried `ch05`.
- **data**: audience metrics.
- **upstream / downstream**: C2 → feeds C9, C10.
- **depth**: full.

### C9. Sponsorship rate card and Promote page
- **ask**: "How much should I charge newsletter sponsors?"
- **inputs**: subscribers, opens, clicks, audience value to advertisers.
- **steps**:
  1. Pick a performance metric you control that maps to advertiser goals (CPC closest; CPM/CPO middle; CPS furthest, avoid) `ch05`.
  2. Set a multiplier from engagement and how easily advertisers monetize your audience `ch05`.
  3. Calibrate with 5–10 sponsor conversations; adjust by fill rate `ch05`.
  4. Build a **Promote page** (media kit + direct pay links, e.g. Stripe Checkout) `ch05` `P`.
- **criteria**:
  - [ ] Price = metric × multiplier, both stated `ch05`.
  - [ ] Not priced on CPS `ch05`.
  - [ ] Promote page has a direct pay link `ch05`.
- **data**: ESP metrics.
- **upstream / downstream**: C8 → revenue.
- **depth**: full.

### C10. Digital product pre-sell and price ladder
- **ask**: "Should I build this ebook/course, and at what price?"
- **inputs**: product idea, audience.
- **steps**:
  1. **Painkiller test**: relieves a felt pain people will price, not "more of the same" `ch02` `C`.
  2. Pre-sell on Gumroad/PayPal before building `ch05` `P`.
  3. Price on perceived value, not effort; consider "duality" bundles (guide + live sessions) `ch05`.
  4. **Let the market decide**: start low, raise on a schedule (source: +$5 every 30 sales from $10) until conversion drops, then hold `ch05`.
- **criteria**:
  - [ ] Pain statement in one line `ch02`.
  - [ ] Pre-sales collected before build `ch05`.
  - [ ] Price-raise schedule and stop rule written `ch05`.
- **data**: sales/conversion data.
- **upstream / downstream**: C8 → feeds L1 (page), N10 (launch emails).
- **depth**: full.

---

## dataforseo (data source, not a book)

Files: R0 `00-full-endpoint-catalog.md`, R1 `01-mcp-and-conventions.md`, R2 `02-serp-and-ai-optimization.md`, R3 `03-keywords-data-and-labs.md`, R4 `04-backlinks-and-domain-analytics.md`, R5 `05-onpage-and-content-analysis.md`, R6 `06-merchant-app-business.md`.

**Access** `S` `R1`: MCP tools when connected (find via ToolSearch), otherwise REST with HTTP Basic auth; request body is always a JSON array; one task per `/live` call, up to 100 per task POST.

**Shared data-hygiene criteria** (apply to every DF deliverable):
- [ ] Balance checked first with free `GET /v3/appendix/user_data` `S` `R1`.
- [ ] `location_code` and `language_code` explicit (default US 2840/en; Italy 2380/it) `S`.
- [ ] Per-task `status_code` checked even when the envelope is 20000 `S` `R1`.
- [ ] Bulk / multi-keyword endpoints used instead of loops `S`.
- [ ] Output labels source "DataForSEO (live)" and reports `cost` from the response `S` `R1`.
- [ ] Request shape iterated on the sandbox host when new `S` `R1`.

### DF1. Keyword shortlist (volume, difficulty, intent, CPC, trend)
- **ask**: "Find 30 keywords for [topic] in Italy with volumes and difficulty."
- **inputs**: seed keyword(s), market, own domain strength.
- **steps**:
  1. Expand seeds: `dataforseo_labs_google_keyword_ideas` (`POST /v3/dataforseo_labs/google/keyword_ideas/live`), `..._keyword_suggestions`, `..._related_keywords` (depth 0–4) `R3`.
  2. Enrich: `dataforseo_labs_google_keyword_overview` → `search_volume`, `cpc`, `competition`, `monthly_searches` (free 12-month trend), `keyword_difficulty`, `main_intent` `R3` `S`.
  3. Fill gaps: `dataforseo_labs_bulk_keyword_difficulty`, `dataforseo_labs_search_intent` (label + probability) `R3`.
  4. Optional planner data: `kw_data_google_ads_search_volume` (competition_index, bids) `R3`.
  5. Flag patterns: low KD + high CPC = buyers present, cheap to rank; first quarter ≈0 then spike = new keyword `S`.
- **criteria**:
  - [ ] Each row: keyword, volume, KD, intent, CPC, trend direction `R3`.
  - [ ] Source endpoint named per column `S`.
- **data**: Labs (cheapest tier) `S`.
- **upstream / downstream**: C1 → feeds C4, N12, S9.

### DF2. SERP snapshot (with AI Overview and People Also Ask)
- **ask**: "Show me what ranks for [keyword] right now."
- **inputs**: keyword, market, device.
- **steps**:
  1. `serp_organic_live_advanced` (`POST /v3/serp/google/organic/live/advanced`) with `depth`, `device`, `load_async_ai_overview`, `people_also_ask_click_depth` `R2`.
  2. Read `item_types` and `items` (organic, paid, featured_snippet, people_also_ask, local_pack…) with `rank_group`, `url`, `domain`, `title` `R2`.
  3. Optional history: `dataforseo_labs_google_historical_serp` (monthly snapshots, rank changes) `R3`.
  4. Bing/Yahoo variants by path `R2`.
- **criteria**:
  - [ ] Top-3 result types listed (intent check) `R2`.
  - [ ] PAA questions and AI Overview presence recorded when requested `R2`.
  - [ ] Cost note: search operators cost ×5; AIO/rectangles add-ons `R2`.
- **data**: SERP tier.
- **upstream / downstream**: DF1 → feeds C4 (intent, outline), N7 (paid ads), S2/S13.

### DF3. Competitor discovery and keyword gap
- **ask**: "Who are my organic competitors and what do they rank for that I don't?"
- **inputs**: own domain, market, optional keyword set.
- **steps**:
  1. `dataforseo_labs_google_competitors_domain` (intersections, etv per competitor) `R3`.
  2. For a keyword set: `dataforseo_labs_google_serp_competitors` (avg position, visibility) `R3`.
  3. Gap: `dataforseo_labs_google_domain_intersection` (two domains) and `dataforseo_labs_google_ranked_keywords` on the competitor `R3`.
  4. Page-level: `dataforseo_labs_google_page_intersection`, `dataforseo_labs_google_relevant_pages` `R3`.
- **criteria**:
  - [ ] Each gap keyword has volume, competitor position, own position (or none) `R3`.
- **data**: Labs.
- **upstream / downstream**: none → feeds S1 (alternatives/X vs Y targets), C4.

### DF4. Domain visibility and traffic report
- **ask**: "Estimate organic traffic for us and 5 competitors, and its trend."
- **inputs**: domains, market.
- **steps**:
  1. `dataforseo_labs_bulk_traffic_estimation` (etv, count per domain) `R3`.
  2. `dataforseo_labs_google_domain_rank_overview` (position buckets, is_new/is_lost) `R3`.
  3. `dataforseo_labs_google_historical_rank_overview` (monthly etv) `R3`.
  4. Optional: `..._subdomains`, `..._relevant_pages` `R3`.
- **criteria**:
  - [ ] Traffic labelled as estimated (`etv`) `R3`.
  - [ ] Same market codes for all domains `S`.
- **data**: Labs.
- **upstream / downstream**: none → feeds S10 (competition step), S11.

### DF5. Backlink profile
- **ask**: "Audit our backlink profile."
- **inputs**: domain or page.
- **steps**:
  1. `backlinks_summary` (`POST /v3/backlinks/summary/live`): rank, backlinks, referring_domains, spam score, attribute/platform breakdowns `R4`.
  2. `backlinks_referring_domains`, `backlinks_anchors` `R4`.
  3. Only if needed: `backlinks_backlinks` with `mode: one_per_domain` and filters (e.g. dofollow) `R4`.
  4. Trend: `backlinks_timeseries_summary`, `backlinks_timeseries_new_lost_summary`; spam: `backlinks_bulk_spam_score` `R4`.
- **criteria**:
  - [ ] Summary/bulk used before row-priced list pulls (cost scales with rows) `R4`.
  - [ ] Dofollow vs nofollow split reported `R4`.
- **data**: Backlinks tier (pricier).
- **upstream / downstream**: none → feeds C6. Note: DataForSEO `rank` is its own metric; `seo-2026-sota` ch12 says third-party "Domain Authority" is not used by Google.

### DF6. Link-gap prospect list
- **ask**: "Which sites link to my competitors but not to me?"
- **inputs**: own domain, 2+ competitor domains.
- **steps**:
  1. `backlinks_domain_intersection` (`intersection_mode` all/partial) `R4`.
  2. Page level: `backlinks_page_intersection` `R4`.
  3. Find more competitors: `backlinks_competitors` (shared referrers) `R4`.
- **criteria**:
  - [ ] Each prospect lists which competitors it links to and its rank `R4`.
  - [ ] Own domain excluded `R4`.
- **data**: Backlinks tier.
- **upstream / downstream**: DF5 → feeds C6, S14 outreach.

### DF7. On-page and technical audit dataset
- **ask**: "Crawl my site and give me the technical issues."
- **inputs**: domain, page budget, need for JS/CWV.
- **steps**:
  1. Single URL: `on_page_instant_pages` (`POST /v3/on_page/instant_pages`) → `onpage_score`, `meta`, `page_timing`, 60+ `checks` `R5`.
  2. Site: `POST /v3/on_page/task_post` (set `validate_micromarkup`, `store_raw_html`, `enable_content_parsing`, `calculate_keyword_density` at post time) → poll `summary/$id` → `pages`, `duplicate_tags`, `duplicate_content`, `redirect_chains`, `non_indexable`, `microdata`, `links` (REST only) `R5`.
  3. `on_page_lighthouse` (`/v3/on_page/lighthouse/live/json`, `for_mobile`, categories) `R5`.
- **criteria**:
  - [ ] Needed flags set at `task_post` (downstream endpoints depend on them) `R5`.
  - [ ] `max_crawl_pages` stated (billing is per page crawled) `R5`.
  - [ ] Lighthouse numbers labelled lab data, not CrUX field data (`seo-2026-sota` ch16).
- **data**: OnPage tier.
- **upstream / downstream**: none → feeds S3, S4.

### DF8. AI-visibility check
- **ask**: "Does ChatGPT mention us for [prompt]? Which domains does it cite?"
- **inputs**: prompt-targets/keywords, brand domain, competitor domains.
- **steps**:
  1. Scrape answers: `ai_optimization_chat_gpt_scraper` (`POST /v3/ai_optimization/chat_gpt/llm_scraper/live/advanced`, US/English only) → `markdown`, `sources`, `search_results` `R2`.
  2. Query models directly: `ai_optimization_llm_response` (`/v3/ai_optimization/<provider>/llm_responses/live`, providers chat_gpt, claude, gemini, perplexity) → text + citation annotations `R2`.
  3. Mentions: `ai_opt_llm_ment_search`, `ai_opt_llm_ment_top_domains`, `ai_opt_llm_ment_top_pages`, `ai_opt_llm_ment_agg_metrics` (platform `chat_gpt` or `google`) `R2`.
  4. Brand vs competitors: `ai_opt_llm_ment_cross_agg_metrics` with aggregation keys `R2`.
  5. Demand: `ai_optimization_keyword_data_search_volume` (`ai_search_volume`, 12-month) `R2`.
- **criteria**:
  - [ ] Each prompt row records: mentioned yes/no, position/context, cited sources `R2`.
  - [ ] Platform and provider named per row `R2`.
  - [ ] Scraper results flagged as US/English `R2`.
- **data**: AI Optimization tier (most expensive) `S`.
- **upstream / downstream**: S1 prompt-targets → feeds S12, S7.

### DF9. Demand and seasonality report
- **ask**: "Is interest in [topic] growing, and when does it peak?"
- **inputs**: keywords, market.
- **steps**:
  1. `dataforseo_labs_google_keyword_overview.monthly_searches` and `dataforseo_labs_google_historical_keyword_data` `R3`.
  2. `kw_data_google_trends_explore` (`/v3/keywords_data/google_trends/explore/live`) `R3`.
  3. `kw_data_dfs_trends_explore`, `kw_data_dfs_trends_subregion_interests`, `kw_data_dfs_trends_demography` `R3`.
- **criteria**:
  - [ ] Trend values labelled relative (0–100) vs absolute volume `R3`.
- **data**: Keywords Data + Labs.
- **upstream / downstream**: none → feeds C1 (market growing), S11 (Trends context), S10 (seasonality).

### DF10. Brand citation and sentiment report
- **ask**: "Where is our brand mentioned online and how positively?"
- **inputs**: brand keyword.
- **steps**:
  1. `content_analysis_summary` → total, top_domains, connotation types, sentiment `R5`.
  2. `content_analysis_search` for individual citations; `content_analysis_phrase_trends` over time `R5`.
  3. Optional REST: `sentiment_analysis`; social share counts via `business_data/social_media/{pinterest,reddit}/live` `R5` `R6`.
- **criteria**:
  - [ ] Positive/negative/neutral counts reported with threshold used `R5`.
- **data**: Content Analysis.
- **upstream / downstream**: none → feeds C6 (unlinked mentions), S14.

### DF11. YouTube SERP and video research
- **ask**: "What videos rank for [query] on YouTube?"
- **inputs**: query, market.
- **steps**:
  1. `serp_youtube_organic_live_advanced` `R2`.
  2. `serp_youtube_video_info_live_advanced`, `..._video_subtitles_...`, `..._video_comments_...` `R2`.
- **criteria**:
  - [ ] Duration and title recorded for each top video `R2`.
- **data**: SERP tier.
- **upstream / downstream**: none → feeds S8.

### DF12. Review and reputation dataset
- **ask**: "Pull our and competitors' reviews (Google, Trustpilot, apps)."
- **inputs**: business names/domains/place ids/app ids.
- **steps** (all REST only, mostly task-based) `R6`:
  1. Google Business: `business_data/google/my_business_info/live`, `google/reviews/task_post`.
  2. Trustpilot: `trustpilot/search`, `trustpilot/reviews`; Tripadvisor search/reviews.
  3. Apps: `app_data/{google,apple}/app_reviews`; Amazon: `merchant/amazon/reviews` (flagged temporarily unavailable in R6).
- **criteria**:
  - [ ] Rating and review count per profile `R6`.
- **data**: Business/App/Merchant tiers (per-result pricing).
- **upstream / downstream**: none → feeds S7 (G2/Capterra/Trustpilot targets 20–30 reviews, 4.3+), L3 (prospect vocabulary).

### DF13. Marketplace demand snapshot (Amazon / Google Shopping)
- **ask**: "How much is [product type] selling on Amazon?"
- **inputs**: keyword, locale (`it_IT`, `en_US`).
- **steps**:
  1. `POST /v3/merchant/amazon/products/live/advanced` → `bought_past_month`, prices, ASINs `R6` `R0`.
  2. `merchant/amazon/asin`, `sellers`; Google Shopping `merchant/google/products/task_post` `R6`.
- **criteria**:
  - [ ] Full locale used for marketplace endpoints `S`.
- **data**: Merchant tier (REST only).
- **upstream / downstream**: none → feeds N5 (field set benchmarking), C10.

### DF14. Local business list / market sizing
- **ask**: "List all [category] businesses in [city]."
- **inputs**: category, geo.
- **steps**: `POST /v3/business_data/business_listings/search/live`; `categories_aggregation` for counts `R6`.
- **criteria**: [ ] filters and geo stated `R6`.
- **data**: Business Data (REST only).
- **upstream / downstream**: none → prospect lists for N2.

### DF15. Paid-search keyword economics
- **ask**: "What would Google Ads cost for these keywords?"
- **inputs**: keywords, market.
- **steps**:
  1. `kw_data_google_ads_search_volume` → cpc, `low/high_top_of_page_bid` `R3`.
  2. `POST /v3/keywords_data/google/ad_traffic_by_keywords/live` → impressions, clicks, cost estimates (REST) `R3`.
  3. Paid items in DF2 for competitor ad copy `R2`.
- **criteria**: [ ] bids and estimates labelled as estimates `R3`.
- **data**: Keywords Data.
- **upstream / downstream**: none → feeds N7.

### DF16. Tech stack and WHOIS lookup
- **ask**: "What CMS/tools does competitor X use?"
- **steps**: `domain_analytics_technologies_domain_technologies`, `domain_analytics_whois_overview` `R4`.
- **criteria**: [ ] domain without scheme/www `R4`.
- **upstream / downstream**: none → context for S3 (rendering stack), S1.

**depth (all DF items)**: `full` as data pulls (endpoint path, MCP tool or REST, params and response fields are documented in R1–R6), except DF12 `partial` (REST/task only; Amazon reviews flagged temporarily unavailable in R6). None is a finished marketing artifact on its own: each feeds a book deliverable named in its `downstream`.
