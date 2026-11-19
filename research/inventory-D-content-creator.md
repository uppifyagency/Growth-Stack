# Inventory D: content-creator skills

Slice: `welsh-linkedin`, `welsh-idea-audience`, `ali-abdaal-youtuber`, `oliur-video-creator`, `ai-visual-prompting`.
Source root: `.claude/skills/<skill>/`. Every step and criterion cites the file it comes from. `SKILL.md`, `patterns.md` and `cheatsheet.md` were read in full for each skill, and every chapter file was read too.

Conventions: `chapters/chNN-...` paths are relative to the skill folder. "depth: partial" means the source gives the principle or the components, but a playbook would need another book (or the user's own material) to complete the procedure.

---

## welsh-linkedin

Spine: `Niche → Character → Profile → Tribe → Content → Algorithm/Consistency` (`SKILL.md`, `chapters/ch01-course-introduction.md`). Platform tactics are ~2019-2020 LinkedIn (`SKILL.md` Scope & Limits).

### 1. Niche and character brief

- **name**: LinkedIn niche and character brief
- **ask**: "Help me pick my LinkedIn niche and write my backstory, voice traits and topics."
- **inputs**: the user's role and level, who sits below, beside and above them, what they sell or want (job, consulting, stage), and their true career story.
- **steps**:
  1. State the goal the following must serve (promotion, job, consulting, stage). Source: `chapters/ch01-course-introduction.md`.
  2. Pick one of the four niche types (Downward, Lateral, Dual, Upward) by goal. Default to Downward. Source: `chapters/ch02-laying-the-foundation.md`.
  3. Narrow the niche past the comfortable point (for example "sales managers targeting salespeople in financial services", not "sales"). Source: `chapters/ch02-laying-the-foundation.md`.
  4. Write a true backstory at elevator-pitch length. Source: `chapters/ch02-laying-the-foundation.md`.
  5. Define 2-4 personality traits that mirror real life. Source: `chapters/ch02-laying-the-foundation.md`.
  6. Pick 3-5 focused topics aligned to the niche. Source: `chapters/ch02-laying-the-foundation.md`.
  7. Write the voice-fit test ("does this post meet ≥1 of my traits?") as the gate for future posts. Source: `chapters/ch02-laying-the-foundation.md`.
- **criteria**:
  - Exactly one niche type is named, with its stated con acknowledged. Source: `chapters/ch02-laying-the-foundation.md`.
  - The niche names a specific role or level and an industry or segment, not a bare function. Source: `chapters/ch02-laying-the-foundation.md`.
  - If Upward is chosen, a hard-to-replicate skill is named. Source: `chapters/ch02-laying-the-foundation.md`.
  - The backstory fits elevator-pitch length and contains no invented events (the user confirms). Source: `chapters/ch02-laying-the-foundation.md`.
  - There are 2-4 traits and 3-5 topics, and every topic maps to the niche. Source: `chapters/ch02-laying-the-foundation.md`.
- **data**: none.
- **upstream / downstream**: none upstream / feeds profile rewrite (2), story post (3), weekly batch (4).
- **depth**: full

### 2. LinkedIn profile as sales page

- **name**: LinkedIn profile rewrite
- **ask**: "Rewrite my LinkedIn profile so it sells me to my niche."
- **inputs**: the niche and character brief, the current profile, and the links to host.
- **steps**:
  1. Finish the profile before any tribe-building or posting. Source: `chapters/ch03-your-linkedin-profile.md`.
  2. Render backstory, traits and topics into the headline, banner, About and Featured sections. Source: `chapters/ch03-your-linkedin-profile.md`.
  3. Write each element as conversion copy aimed at a relevant viewer deciding whether to connect or follow, not as a résumé. Source: `chapters/ch03-your-linkedin-profile.md`.
  4. Host outbound links in the About section, so posts can say "first link in my profile". Sources: `chapters/ch03-your-linkedin-profile.md`, `chapters/ch06-posting-algorithm-consistency.md`.
  5. Use profile views as the scoreboard. Source: `chapters/ch03-your-linkedin-profile.md`.
- **criteria**:
  - A stranger can tell from the profile who it serves. Source: `chapters/ch03-your-linkedin-profile.md`.
  - The profile is not a job-history dump. Source: `chapters/ch03-your-linkedin-profile.md`.
  - The About section hosts the links the user wants traffic sent to. Source: `chapters/ch03-your-linkedin-profile.md`.
  - The backstory, traits and topics from the brief all appear somewhere in the profile. Source: `chapters/ch03-your-linkedin-profile.md`.
- **data**: the current profile and the profile-view dashboard.
- **upstream / downstream**: niche and character brief (1) / the destination of tribe and content traffic (3-6).
- **depth**: partial. `SKILL.md` Scope says the element-by-element templates were not in the transcript. The welsh-idea-audience Profile Funnel (`chapters/ch07-the-profile-funnel.md`) supplies the per-element procedure.

### 3. Story post

- **name**: Viral-ready LinkedIn story post
- **ask**: "Turn this experience into a LinkedIn story post."
- **inputs**: a true experience or opinion, the character brief (traits, topics), and the post type (text, or image/video).
- **steps**:
  1. Check the idea against the focused topics and the voice-fit test. Sources: `chapters/ch02-laying-the-foundation.md`, `chapters/ch05-creating-content.md`.
  2. Shape it to the 5 viral traits: Inspirational, Believable, Authentic, Relatable, Polarizing. Source: `chapters/ch05-creating-content.md`.
  3. Write the hook as 3 short lines with blank lines between, so it lands on line 5 for text or about line 3 for image/video. Source: `chapters/ch05-creating-content.md`.
  4. Format the body as White Space + Wave: a blank line between every line, and sentence lengths that rise and fall. Source: `chapters/ch05-creating-content.md`.
  5. Pick the Feel: polarizing (~60-70% agree), or an authentic story of overcoming adversity. Source: `chapters/ch05-creating-content.md`.
  6. Finish for the algorithm: no outbound link in the body, ≤3 relevant hashtags, and a closing question as the CTA. Source: `chapters/ch06-posting-algorithm-consistency.md`.
- **criteria**:
  - The hook sits on the last visible line (line 5 for text, ~line 3 for image/video). Source: `chapters/ch05-creating-content.md`.
  - Every line is separated by a blank line, with no paragraph of more than one sentence. Source: `chapters/ch05-creating-content.md`.
  - Sentence lengths visibly alternate long and short. Source: `chapters/ch05-creating-content.md`.
  - The post takes a position some readers would disagree with (not vanilla), or it tells an overcoming-adversity arc. Source: `chapters/ch05-creating-content.md`.
  - There is no URL in the post body. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  - There are 0-3 hashtags, all relevant to the niche. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  - The post ends with a question or a CTA. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  - The post matches at least one of the stated traits. Source: `chapters/ch02-laying-the-foundation.md`.
- **data**: none.
- **upstream / downstream**: character brief (1), idea backlog (7) / feeds the weekly batch (4).
- **depth**: full

### 4. Weekly content batch

- **name**: Weekly LinkedIn batch (3-5 scheduled posts)
- **ask**: "Write and schedule my LinkedIn posts for next week."
- **inputs**: the idea backlog, the character brief, the user's best posting time (or a plan to test it), and a scheduling tool.
- **steps**:
  1. Pull ideas from the week's captured backlog. Sources: `chapters/ch05-creating-content.md`, `chapters/ch06-posting-algorithm-consistency.md`.
  2. Assign formats to weekdays from the menu: story, checklist + action steps, clickbait + strong CTA, recognition listicle, topical/newsworthy, vulnerability/mistakes, free resource. Source: `chapters/ch05-creating-content.md`.
  3. Write 3-5 posts in one 2-hour block. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  4. Apply the 10 algorithm tips to each post. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  5. Schedule Mon-Fri in Buffer or Hootsuite at the tested best time. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  6. Commit to a 30-consecutive-day run, then monitor and adjust times. Source: `chapters/ch06-posting-algorithm-consistency.md`.
- **criteria**:
  - The batch has 3-5 posts. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  - At least 2 different formats from the menu are used, so the posts are not all stories. Source: `chapters/ch05-creating-content.md`.
  - No post links out in the body. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  - Each post has ≤3 relevant hashtags and ends with a CTA or question. Source: `chapters/ch06-posting-algorithm-consistency.md`.
  - Every post sits on one of the 3-5 focused topics (no topic-hopping). Source: `chapters/ch06-posting-algorithm-consistency.md`.
  - Each post has a scheduled weekday and time. Source: `chapters/ch06-posting-algorithm-consistency.md`.
- **data**: a scheduling tool (Buffer/Hootsuite) and post engagement analytics.
- **upstream / downstream**: idea backlog (7), story post (3), character brief (1) / feeds tribe growth (5, 6).
- **depth**: full

### 5. Industry-titan connection plan

- **name**: Industry-titan outreach sequence
- **ask**: "Plan how I get on the radar of the 5-10 biggest voices in my niche."
- **inputs**: the niche, and candidate creators with ~20K+ followers.
- **steps**:
  1. List 5-10 titans. Source: `chapters/ch04-building-your-tribe.md`.
  2. Rule: stay out of their inbox. Source: `chapters/ch04-building-your-tribe.md`.
  3. Leave 10+ meaningful comments with specific takeaways on their posts over 2-3 weeks. Source: `chapters/ch04-building-your-tribe.md`.
  4. Publish a Solo Recognition Post that credits one titan's post and says how it helped. Source: `chapters/ch04-building-your-tribe.md`.
  5. After they react, send a custom connection request that references the relationship. Source: `chapters/ch04-building-your-tribe.md`.
- **criteria**:
  - The list has 5-10 names, each with ≥20K followers. Source: `chapters/ch04-building-your-tribe.md`.
  - The plan contains no DM or cold ask before the request. Source: `chapters/ch04-building-your-tribe.md`.
  - The comment drafts are specific (none read "great job", "100%" or a bare emoji). Source: `chapters/ch04-building-your-tribe.md`.
  - The Recognition Post credits exactly one person and does not mass-tag. Source: `chapters/ch04-building-your-tribe.md`.
  - The connection request is personalized and references the prior interaction. Source: `chapters/ch04-building-your-tribe.md`.
- **data**: LinkedIn (titans' follower counts and posts).
- **upstream / downstream**: niche brief (1), profile (2) / the Recognition Post enters the weekly batch (4).
- **depth**: full

### 6. Daily tribe-building routine

- **name**: Connection sweep and audience-boosting routine
- **ask**: "Give me a daily routine to grow relevant connections on LinkedIn."
- **inputs**: the niche, target cities and companies, and peers' profiles.
- **steps**:
  1. Run the 8 connection sources: colleagues, Career Advice, "More suggestions", Groups, profile viewers (added within ~30 min), similar profiles, Advanced Search, and the 2X Simple Ask. Source: `chapters/ch04-building-your-tribe.md`.
  2. Switch the feed to Recent to be the first comment on big posts. Source: `chapters/ch04-building-your-tribe.md`.
  3. Leave 5 thoughtful comments a day, each ending with a question, tagging one relevant person where it fits. Source: `chapters/ch04-building-your-tribe.md`.
  4. Like and reply to every interaction on your own posts. Source: `chapters/ch04-building-your-tribe.md`.
- **criteria**:
  - The routine covers all 8 sources, or names which ones are skipped and why. Source: `chapters/ch04-building-your-tribe.md`.
  - Any 2X Simple Ask post tags exactly two people. Source: `chapters/ch04-building-your-tribe.md`.
  - The daily quota is 5 comments, and each sample comment ends in a question. Source: `chapters/ch04-building-your-tribe.md`.
  - No step mass-tags 15-30 people. Source: `chapters/ch04-building-your-tribe.md`.
- **data**: LinkedIn (profile-view list, Advanced Search).
- **upstream / downstream**: profile (2) / grows reach for (3, 4).
- **depth**: full

### 7. Idea capture backlog

- **name**: 5-source idea capture system
- **ask**: "Set me up so I never run out of LinkedIn post ideas."
- **inputs**: the focused topics and the tools the user uses.
- **steps**:
  1. Experience: a notes-app folder for daily work lessons. Source: `chapters/ch05-creating-content.md`.
  2. Save articles you read (Pocket). Source: `chapters/ch05-creating-content.md`.
  3. Discover new sources (Feedly RSS). Source: `chapters/ch05-creating-content.md`.
  4. Use a blog idea generator to seed long-form posts, then split them into micro-posts. Source: `chapters/ch05-creating-content.md`.
  5. Keep a curated niche Twitter feed, screenshot good ideas, annotate them and file them to a Drive content folder. Source: `chapters/ch05-creating-content.md`.
- **criteria**:
  - Each of the 5 sources has a named place where captures land. Source: `chapters/ch05-creating-content.md`.
  - The feed sources are limited to the niche. Source: `chapters/ch05-creating-content.md`.
  - The backlog is a single folder that the weekly batch draws from. Source: `chapters/ch06-posting-algorithm-consistency.md`.
- **data**: Pocket, Feedly, HubSpot generator, Twitter. These tools are dated (`SKILL.md` Scope).
- **upstream / downstream**: character brief (1) / feeds (3, 4).
- **depth**: full (the procedure is complete, but the named tools need current equivalents).

---

## welsh-idea-audience

Spine: `Idea → Audience → Proof → Product` (IAPP). The worksheets, demos and granular automation tutorials are not in the source (`SKILL.md` Scope & Limits).

### 1. Niche of One idea sheet

- **name**: Niche of One idea sheet
- **ask**: "Find me a niche I can own by combining my skills and interests."
- **inputs**: the user's skills (the source references a ~100-skill worksheet it does not reproduce) and genuine interests.
- **steps**:
  1. Reject product-led ideation, and "solve your own problem" unless distribution already exists. Source: `chapters/ch02-how-to-ideate.md`.
  2. Brainstorm skills and interests. Source: `chapters/ch02-how-to-ideate.md`.
  3. Write 3-5 skill × interest combinations, each with a hyper-specific unique idea (content format plus cadence). Sources: `chapters/ch02-how-to-ideate.md`, `chapters/ch03-niche-of-one.md`.
  4. For each combination, add at least one freelance service and one 1:1 service extension. Source: `chapters/ch03-niche-of-one.md`.
  5. Note the product path (Skill × Interest → Idea → Service → Product). Source: `chapters/ch03-niche-of-one.md`.
- **criteria**:
  - There are 3-5 rows, each with skill, interest and idea filled in. Source: `chapters/ch03-niche-of-one.md`.
  - Each idea names a concrete output and cadence (for example "weekly rap-song breakdowns"), not a topic. Source: `chapters/ch03-niche-of-one.md`.
  - The uniqueness comes from the pairing: no row is a single crowded input on its own. Source: `chapters/ch03-niche-of-one.md`.
  - Each row has ≥1 freelance and ≥1 1:1 service extension. Source: `chapters/ch03-niche-of-one.md`.
- **data**: none (the skills worksheet is missing from the source).
- **upstream / downstream**: none / feeds the story (2), Content Matrix (5), service business (8).
- **depth**: full

### 2. Background + Transformation story

- **name**: Origin story talk track
- **ask**: "Write my origin story I can tell on podcasts and in my About section."
- **inputs**: the user's true struggles (inward and outward), the pivot decision, results, and mistakes.
- **steps**:
  1. List inward struggles (internal states) and outward struggles (visible events) from before the transformation. Source: `chapters/ch04-the-background.md`.
  2. End the background at the moment you found the solution. Source: `chapters/ch04-the-background.md`.
  3. Pinpoint the change as an intersection of critical milestones. Source: `chapters/ch05-the-transformation.md`.
  4. Write the 5-step arc: struggling → in a position to change → what you did (what worked and what didn't) → results → how others can follow while avoiding your mistakes. Source: `chapters/ch05-the-transformation.md`.
  5. Add strong, authentic opinions. Source: `chapters/ch05-the-transformation.md`.
  6. Memorize it as one talk track and reuse it verbatim. Source: `chapters/ch05-the-transformation.md`.
- **criteria**:
  - At least one inward and one outward struggle are present. Source: `chapters/ch04-the-background.md`.
  - All 5 arc steps appear in order. Source: `chapters/ch05-the-transformation.md`.
  - At least one mistake or thing that didn't work is admitted (not a frictionless success). Source: `chapters/ch05-the-transformation.md`.
  - It ends on helping others, not on bragging. Source: `chapters/ch05-the-transformation.md`.
  - It does not stay in victim mode: the struggle is balanced with progress. Source: `chapters/ch04-the-background.md`.
  - It contains at least one opinion that is not vanilla. Source: `chapters/ch05-the-transformation.md`.
- **data**: none.
- **upstream / downstream**: Niche of One (1) / feeds the profile About (4) and Content Matrix core concepts (5).
- **depth**: full

### 3. Moneyball audience plan

- **name**: Get-on-base audience growth plan
- **ask**: "Plan how I grow an audience that buys, not just likes."
- **inputs**: the niche, the candidate platforms, and the creators the audience follows.
- **steps**:
  1. Pick one platform to master first. Source: `chapters/ch06-play-moneyball.md`.
  2. Set a daily relevant-content cadence (Welsh: 1×/day LinkedIn, 2×/day Twitter). Source: `chapters/ch06-play-moneyball.md`.
  3. Build the social ecosystem with two questions: adjacent voices (same audience, different solution) and contrarian voices (same audience, different perspective). Source: `chapters/ch06-play-moneyball.md`.
  4. Set up notifications. On LinkedIn, bookmark activity pages and log each person's posting time. Source: `chapters/ch06-play-moneyball.md`.
  5. Siphon audience through first thoughtful comments. Source: `chapters/ch06-play-moneyball.md`.
  6. Use tools (SparkToro) to find the podcasts, channels and newsletters the audience consumes. Source: `chapters/ch06-play-moneyball.md`.
- **criteria**:
  - Exactly one primary platform is named. Source: `chapters/ch06-play-moneyball.md`.
  - The ecosystem list has both adjacent and contrarian entries. Source: `chapters/ch06-play-moneyball.md`.
  - Each LinkedIn ecosystem entry has an activity-page URL and a posting time. Source: `chapters/ch06-play-moneyball.md`.
  - The plan has no engagement-bait or virality goal. Source: `chapters/ch06-play-moneyball.md`.
- **data**: the platform itself and SparkToro (or an equivalent).
- **upstream / downstream**: Niche of One (1) / sends visitors to the profile (4).
- **depth**: full

### 4. Profile Funnel rewrite

- **name**: Profile Funnel (LinkedIn/Twitter profile)
- **ask**: "Audit and rewrite my profile so visitors follow me."
- **inputs**: the niche, the offer, social proof, and the website or email page URL.
- **steps**:
  1. Banner: what you do and who you help, readable in <2 seconds. Source: `chapters/ch07-the-profile-funnel.md`.
  2. Tagline: who you help · what you help them do · how. Source: `chapters/ch07-the-profile-funnel.md`.
  3. Headshot: clean and professional. Source: `chapters/ch07-the-profile-funnel.md`.
  4. About: crisp, cohesive, expands on the offer, with social proof. Source: `chapters/ch07-the-profile-funnel.md`.
  5. Featured (LinkedIn): website leading to email capture. Source: `chapters/ch07-the-profile-funnel.md`.
  6. Pinned tweet (Twitter): both popular and informative. Source: `chapters/ch07-the-profile-funnel.md`.
  7. Check that all elements tell one message. Source: `chapters/ch07-the-profile-funnel.md`.
- **criteria**:
  - The banner text alone names the audience or the outcome. Source: `chapters/ch07-the-profile-funnel.md`.
  - The tagline contains a who, a what and a how. Source: `chapters/ch07-the-profile-funnel.md`.
  - The About section includes at least one proof item (numbers, clients, results). Source: `chapters/ch07-the-profile-funnel.md`.
  - Featured links to the website or subscriber page. Source: `chapters/ch07-the-profile-funnel.md`.
  - The banner, tagline and About make the same claim. Source: `chapters/ch07-the-profile-funnel.md`.
  - The jargon matches the audience. Source: `chapters/ch07-the-profile-funnel.md`.
- **data**: the current profile and a pinned-post candidate with engagement numbers.
- **upstream / downstream**: story (2), capture page (6) / the landing spot for (3, 5).
- **depth**: full

### 5. Content Matrix + post batch

- **name**: Content Matrix and on-strategy posts
- **ask**: "Build my content matrix and give me 15 posts from it."
- **inputs**: the mantra (or the material to derive one), the pillars, the user's strong opinions, and the single outcome wanted.
- **steps**:
  1. Write the Mantra (the single highest-level rallying statement). Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  2. Add the Taglines under it. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  3. Define the Pillars by asking "what must go well to succeed at the mantra?". Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  4. Assign a Core Concept (a strong opinion) to each pillar. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  5. List the Structures (motivational, observation, listicle…). Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  6. Mint posts as core concept × structure. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  7. Gut-check each post on Outcome, Focus, Structure and Opinions. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  8. Apply the Scroll Test: line 1 hits hard and line 2 makes the reader crave more. Images are anti-stock, and video is short. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
- **criteria**:
  - All 5 matrix layers are filled. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  - Every pillar has a core concept phrased as an opinion someone could disagree with. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  - Every post traces to one concept × one structure. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  - Every post drives the same single specific outcome (sniper). Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  - The batch uses ≥2 structures, with no single structure repeated across the whole batch. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  - The first sentence of each post is a standalone hook. Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
  - The batch has no manufactured "wild takes" (divisive, mean or political). Source: `chapters/ch08-rapid-relevant-content-scroll-test.md`.
- **data**: engagement data to "double down on what works" (optional).
- **upstream / downstream**: story (2), Niche of One (1) / feeds the Content Web (7), the Moneyball cadence (3), and the launch priming (11).
- **depth**: full

### 6. Email capture landing page

- **name**: Email capture page (above-the-fold copy)
- **ask**: "Write my newsletter signup page."
- **inputs**: what the subscriber gets, social proof (subscriber or case count), and the desired feeling and action.
- **steps**:
  1. Answer the three design questions: what should they feel, what should they do, and why. Source: `chapters/ch09-the-art-of-the-capture.md`.
  2. Outline the page: primary statement → secondary header → social proof → CTA. Source: `chapters/ch09-the-art-of-the-capture.md`.
  3. Write a bold primary statement of exactly what they get. Source: `chapters/ch09-the-art-of-the-capture.md`.
  4. Write a secondary header with the how, often with proof. Source: `chapters/ch09-the-art-of-the-capture.md`.
  5. Add one obvious CTA, then cut to the minimum viable information. Source: `chapters/ch09-the-art-of-the-capture.md`.
- **criteria**:
  - The offer is understandable in ≤3 seconds above the fold. Source: `chapters/ch09-the-art-of-the-capture.md`.
  - The page has exactly one CTA. Source: `chapters/ch09-the-art-of-the-capture.md`.
  - It shows a social-proof number. Source: `chapters/ch09-the-art-of-the-capture.md`.
  - It uses no stock imagery. Source: `chapters/ch09-the-art-of-the-capture.md`.
  - Every element has a stated reason. Source: `chapters/ch09-the-art-of-the-capture.md`.
- **data**: a page builder (Carrd is named in ch11) and an email tool.
- **upstream / downstream**: none strictly / the destination of the profile (4) and Content Web (7), and the list used at launch (11).
- **depth**: full

### 7. Content Web distribution map

- **name**: Multi-platform distribution map
- **ask**: "Map where to repost my content and how to adapt it per platform."
- **inputs**: a mastered primary platform, one long-form piece, the places the audience hangs out, and the subscriber page.
- **steps**:
  1. Confirm one platform is already mastered. Source: `chapters/ch10-the-distribution-network.md`.
  2. List every place the audience hangs out. Source: `chapters/ch10-the-distribution-network.md`.
  3. Assign each place a format and CTA: long-form with a polite ask (Twitter, Reddit, Indie Hackers), visual snippets with a subtle CTA (Slack and FB groups), or a direct link (HN and similar). Source: `chapters/ch10-the-distribution-network.md`.
  4. Route with the three boxes. Red goes snippet → thread. Yellow goes long-form → subscriber page. Green is a LinkedIn post routed through Featured. Source: `chapters/ch10-the-distribution-network.md`.
  5. Build a labeled bookmark folder of the rules. Source: `chapters/ch10-the-distribution-network.md`.
- **criteria**:
  - Every platform row has a format and a CTA type. Source: `chapters/ch10-the-distribution-network.md`.
  - All routes end at one subscriber page. Source: `chapters/ch10-the-distribution-network.md`.
  - No LinkedIn post contains an in-post link. Source: `chapters/ch10-the-distribution-network.md`.
  - No aggressive ask goes into Slack or FB groups. Source: `chapters/ch10-the-distribution-network.md`.
- **data**: platform lists and community rules.
- **upstream / downstream**: capture page (6), Content Matrix (5) / the engine blitzed in the launch (11).
- **depth**: full

### 8. MVP service business setup

- **name**: MVP service business (7 components + qualification + automation map)
- **ask**: "Set up my freelance or consulting service so clients can find, qualify, book and pay."
- **inputs**: the service from the Niche of One, the price, an aspirational hourly rate, and the tool budget.
- **steps**:
  1. Choose the level: L1 low cost and learn, L2 industry average, L3 high-price micro-niche. Source: `chapters/ch11-mvp-service-business.md`.
  2. Stand up the 7 components: website, service description, FAQs, inquiry form, booking, rate sheet, payments. Source: `chapters/ch11-mvp-service-business.md`.
  3. Disclose pricing up front. Write an 18-20 question FAQ and a questionnaire with 2 required checkboxes (understands minimum pricing; is the decision-maker). Source: `chapters/ch11-mvp-service-business.md`.
  4. Write 6-8 discovery-call questions, and record calls into a CRM. Source: `chapters/ch11-mvp-service-business.md`.
  5. Apply the automation rule (task value below the aspirational rate, or >10-15 min/day of routine work) to list what to automate. Source: `chapters/ch11-mvp-service-business.md`.
  6. Map the pipeline: form → CRM → qualify/disqualify emails → call → pricing email → hidden payments page → recurring charge → auto folder/agenda. Source: `chapters/ch11-mvp-service-business.md`.
- **criteria**:
  - All 7 components are present. Source: `chapters/ch11-mvp-service-business.md`.
  - The price is visible before booking. Source: `chapters/ch11-mvp-service-business.md`.
  - The inquiry form has both disqualifying checkboxes. Source: `chapters/ch11-mvp-service-business.md`.
  - Payment is collected before work. Source: `chapters/ch11-mvp-service-business.md`.
  - The discovery script has 6-8 questions. Source: `chapters/ch11-mvp-service-business.md`.
  - Each automated step names its trigger and tool. Source: `chapters/ch11-mvp-service-business.md`.
- **data**: Carrd, Airtable, Stripe, Zapier, Calendly, Slack, Drive.
- **upstream / downstream**: Niche of One (1), distribution (3, 7) / feeds F.I.T.I (9), and call notes seed the product (10).
- **depth**: partial. The components and pipeline are listed, but the copy templates and the step-by-step automation build are deliberately omitted (`SKILL.md` Scope). A playbook would combine this with a services or offer book.

### 9. F.I.T.I rate-raise plan

- **name**: F.I.T.I plan (feedback → iteration → testimonials → price increase)
- **ask**: "Help me niche down my service and raise my rates."
- **inputs**: current clients, the price, what the user enjoys or dreads, and the existing testimonials.
- **steps**:
  1. Feedback: ask clients where they get the most value and what they want more of, log it in the CRM, and log what energizes or drains you. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  2. Iteration: find the crossroad of love × need, then cut or delegate the rest. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  3. Revisit the profile, capture page and content for the narrower niche. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  4. Testimonials: ask at moments of gratitude or results, and guide clients to name a specific result. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  5. Increase: raise prices as demand rises (double price / half win-rate is acceptable), and push low-value clients to products. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
- **criteria**:
  - The feedback questions include both "most value" and "want more of". Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - A love × need list exists with items marked keep or cut. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - The testimonial request asks for a specific result. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - A new price and its trigger are stated. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - A destination for lower-value clients is named. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
- **data**: the CRM and win-rate history.
- **upstream / downstream**: service business (8) / feeds the profile/content refresh (4, 5) and the product (10).
- **depth**: full

### 10. Digital product MVP build

- **name**: Time-boxed digital product (Move Fast & Cheap)
- **ask**: "Outline and plan my first small course or e-book in two weeks."
- **inputs**: one specific problem the user knows cold, the buyers' recurring asks (from calls), and buyer income.
- **steps**:
  1. Narrow to one specific problem and time-box it (2 weeks for a first product). Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  2. Outline sections → chapters aligned to 1-2 outcomes, and split the work into daily tasks. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  3. Pass 1: brain-dump onto slides. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  4. Pass 2: move the spoken words to notes and put bullet summaries on the slides. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  5. Pass 3: add media. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  6. Pass 4: add resources, checklists and links. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  7. Get feedback from honest people throughout. Ship low-production, with a short name and a Canva/Fiverr cover. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
- **criteria**:
  - The topic is a single narrow problem (for example "order a drink at a Spanish restaurant", not "Spanish"). Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - The outline states 1-2 outcomes, and every chapter maps to one. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - There is a deadline ≤2 weeks out. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - Feedback checkpoints are scheduled before completion. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
  - The price is set against buyer income. Source: `chapters/ch12-fiti-move-fast-cheap.md`.
- **data**: Google Sheets, a slides tool, Loom/Zoom.
- **upstream / downstream**: service learnings (8, 9) / built inside the launch (11).
- **depth**: full

### 11. 14-day pre-sell launch plan

- **name**: 14-day pre-sell launch calendar
- **ask**: "Give me a day-by-day plan to pre-sell and launch my product."
- **inputs**: the product outline, the email list, the distribution network, Gumroad (or equivalent), and the pre-sell and launch prices.
- **steps**:
  1. Day 1: finish the landing page and artwork, test the buy button, set the pre-sell discount (e.g. $99 → $149), write the email and social copy, then announce through distribution and email. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  2. Days 2-9: run the Four-Pass build (P1 days 2-3, P2 days 4-5, P3 days 6-7, P4 days 8-9), with a behind-the-scenes teaser on day 8. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  3. Day 10: send it to trusted reviewers. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  4. Days 11-12: record screencasts and send a short write-up to distribution and email. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  5. Day 13: request and post testimonials, and run a full buyer-flow check. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  6. Day 14: blitz social, distribution and email, share testimonials, and say it's the last day for the discount. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  7. Post-launch: keep collecting testimonials and raise the price. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
- **criteria**:
  - Every day 1-14 has an entry. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  - Day 1 contains the announcement and a dated incentive with both prices. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  - A day-8 teaser exists. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  - A buyer-flow test is scheduled before day 14. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  - Day 14 hits all three channels (social, distribution, email). Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  - The post-launch price increase is stated. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
  - It is a pre-sell, not a surprise launch. Source: `chapters/ch13-launch-gumroad-whats-next.md`.
- **data**: Gumroad (pre-order, versions, workflows), the email list, the distribution channels.
- **upstream / downstream**: product outline (10), capture page/list (6), Content Web (7) / feeds testimonials into the next F.I.T.I cycle (9).
- **depth**: full

---

## ali-abdaal-youtuber

Gate stated in the source: packaging, retention and repurposing work only matters once the user ships one good video a week (`chapters/ch03-crack-the-algorithm.md`, `chapters/ch05-build-your-empire.md`).

### 1. Channel niche + ideal viewer brief

- **name**: YouTube niche statement, avatar and value proposition
- **ask**: "Help me define my YouTube niche and who it's for."
- **inputs**: the user's strengths, interests and familiar groups, what they wish they'd known 3/5/10 years ago, and their goal on the blow-up ↔ enjoy spectrum.
- **steps**:
  1. Run timed two-minute brain-dumps for Level 1 (who am I, what do I want), in writer mode, aiming for quantity. Source: `chapters/ch02-conceive-your-ideas.md`.
  2. Level 2: build the Ideal Viewer Avatar (named; wants, blockers, stakes, transformation, fears, top-3 frustrations, beliefs). With no audience yet, use yourself 3-5 years younger. Source: `chapters/ch02-conceive-your-ideas.md`.
  3. Compress to the Niche Formula: "I make videos about [topic] for [people]". Source: `chapters/ch02-conceive-your-ideas.md`.
  4. Gut-check with the Niche Checklist: a painful, urgent problem, actively being solved, with few perceived options (painkiller over vitamin). Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  5. Pick an angle from the MILES unfair advantages. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  6. Write the explicit and implicit value propositions, adding the "how". Source: `chapters/ch02-conceive-your-ideas.md`.
  7. Set the commitment: 20-40-50 videos before judging. Source: `chapters/ch09-office-hours-qa.md`.
- **criteria**:
  - The niche fits "videos about [topic] for [people]". Source: `chapters/ch02-conceive-your-ideas.md`.
  - The avatar has a name and answers all 9 avatar questions. Source: `chapters/ch02-conceive-your-ideas.md`.
  - The niche is defined by a who + need, not a subject alone. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  - The problem passes all 3 checklist items. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  - The explicit value prop includes a "how" (not generic life-coach wording). Source: `chapters/ch02-conceive-your-ideas.md`.
  - An implicit value prop is written. Source: `chapters/ch02-conceive-your-ideas.md`.
  - A video-count threshold is stated. Source: `chapters/ch09-office-hours-qa.md`.
- **data**: none (optional: viewer comments once posting).
- **upstream / downstream**: none / feeds titles (2), scripts (3), branding (5).
- **depth**: full

### 2. Packaging set (titles + thumbnail brief)

- **name**: Title and thumbnail set for one video
- **ask**: "Give me 20 titles and a thumbnail concept for this video idea."
- **inputs**: the video idea, the avatar, the channel vibe and colour palette, and whether the video targets browse or search.
- **steps**:
  1. Decide browse or search before titling (default to browse for growth). Source: `chapters/ch03-crack-the-algorithm.md`.
  2. Brainstorm ≥20 titles in ~10 minutes. Source: `chapters/ch03-crack-the-algorithm.md`.
  3. Filter by the 5 rules: sell the result, intrigue not agreement, don't describe, optimize for humans, A/B test (pro only). Source: `chapters/ch03-crack-the-algorithm.md`.
  4. Pick a title you'd click. If none qualifies, don't make the video. Source: `chapters/ch03-crack-the-algorithm.md`.
  5. Brief the thumbnail early: a real photo (manual, wide aperture, ~1/200), heavily edited at small size, matched to the vibe, with emotion only if it fits. Sources: `chapters/ch03-crack-the-algorithm.md`, `patterns.md`.
  6. Make the title and thumbnail tell one story with no duplicated text, in the channel palette. Source: `chapters/ch09-office-hours-qa.md`.
- **criteria**:
  - There are ≥20 distinct title options. Source: `chapters/ch03-crack-the-algorithm.md`.
  - The chosen title names a result, not the process or method. Source: `chapters/ch03-crack-the-algorithm.md`.
  - The chosen title raises a question rather than stating the answer. Source: `chapters/ch03-crack-the-algorithm.md`.
  - The title is not a content description ("10 tips for…"). Source: `chapters/ch03-crack-the-algorithm.md`.
  - The title style matches the declared intent (browse: emotional/intriguing; search: specific/question-answering). Source: `chapters/ch03-crack-the-algorithm.md`.
  - The thumbnail brief specifies a shot photo, not a screen-grab. Source: `chapters/ch03-crack-the-algorithm.md`.
  - The thumbnail text does not repeat the title text. Source: `chapters/ch09-office-hours-qa.md`.
  - The video delivers the promise (no true clickbait), checked against the script. Source: `chapters/ch03-crack-the-algorithm.md`.
- **data**: optional TubeBuddy (A/B), thumbsup.tv (preview), and the channel's past CTR.
- **upstream / downstream**: niche brief (1) / gates the script (3); thumbnail photo needs the gear/setup (9).
- **depth**: full

### 3. Video script (HIVES + Tell-Title-Tension)

- **name**: Video script or talking-point outline
- **ask**: "Write the script for my video on X."
- **inputs**: the chosen title and promise, the avatar, the content points, and the channel type (camera talker vs expert/presentational).
- **steps**:
  1. Structure with HIVES: Hook · Introduction (who you are + value prop) · Value · End-screen Sales pitch. Source: `chapters/ch04-keep-them-watching-retention.md`.
  2. Hook for the first 10-30s: a question, a surprising fact, a transformation, a tip, B-roll with music, or a flash-forward. Source: `chapters/ch03-crack-the-algorithm.md`.
  3. Write the intro with Tell, Title, Tension in ≤50 words: reference the title in the first two sentences, stack stats, and end on a question disguised as a statement. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  4. Default to bullet talking points for camera talkers. Use a full script only for expert/presentational channels. Sources: `chapters/ch04-keep-them-watching-retention.md`, `chapters/ch11-bonus-speaking-notion-copyright.md`.
  5. Edit with C.L.E.A.R.: rhythm, linked sentences, no confusion, specific details, no consulting words. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  6. Mark a pattern interrupt (B-roll, zoom, sound) roughly every 10 seconds. Source: `chapters/ch04-keep-them-watching-retention.md`.
- **criteria**:
  - All four HIVES sections are present and labelled. Source: `chapters/ch04-keep-them-watching-retention.md`.
  - The title is referenced within the first two sentences. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  - The intro is ≤50 words and ends on an open tension. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  - The hook uses one of the 6 named recipes. Source: `chapters/ch03-crack-the-algorithm.md`.
  - The answer to the title's question is not given in the hook. Source: `patterns.md`.
  - The script contains none of the consulting words (synergy, disruptive, empower). Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  - Sentence lengths vary (no long staccato runs). Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  - The script ends with an end-screen pitch. Source: `chapters/ch04-keep-them-watching-retention.md`.
- **data**: none (optional: the retention graph of past videos).
- **upstream / downstream**: packaging (2) / feeds filming, repurposing (6) and the story segment (4).
- **depth**: full

### 4. Personal story segment

- **name**: Five-Second-Moment story
- **ask**: "Turn this experience into a story for my video."
- **inputs**: a Homework-for-Life log or a remembered moment of change.
- **steps**:
  1. Keep a daily Homework for Life (one line on the most story-worthy moment of the day). Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  2. Find the five-second moment of transformation or realization, and make it the ending. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  3. Write the beginning as its opposite. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  4. Tell the middle in distinct scenes, each with a location. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  5. Begin with forward movement, and package the story as a broad, emotive topic. Sources: `chapters/ch08-guest-workshops-writing-speaking.md`, `chapters/ch07-guest-workshops-growth-niching.md`.
- **criteria**:
  - A single moment of change is identifiable. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  - The opening state is the opposite of the ending state. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  - Every scene names a location. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
  - It is not a report of events without change. Source: `chapters/ch08-guest-workshops-writing-speaking.md`.
- **data**: none.
- **upstream / downstream**: none / slots into the script (3).
- **depth**: full

### 5. Channel branding audit

- **name**: A.B.C.D.E. + Values/Rituals/Icons brand audit
- **ask**: "Audit my channel's branding and tell me what makes it memorable."
- **inputs**: 3+ existing videos, the set, the music, the delivery, and the editing style.
- **steps**:
  1. Score Aesthetic (set, lamps, plants, blur, colour, music). Source: `chapters/ch04-keep-them-watching-retention.md`.
  2. Define 3-4 Values to weave in implicitly. Source: `chapters/ch04-keep-them-watching-retention.md`.
  3. Pick Rituals (opener, closer, phrases). Source: `chapters/ch04-keep-them-watching-retention.md`.
  4. Pick Icons (objects, quotes, sounds). Source: `chapters/ch04-keep-them-watching-retention.md`.
  5. Fix Confidence and Delivery: pitch down, smile, volume 5 → 7, pauses. Sources: `chapters/ch04-keep-them-watching-retention.md`, `chapters/ch11-bonus-speaking-notion-copyright.md`.
  6. Set the Editing rules: tight cuts, 10-second interrupts, B-roll, zooms, sound design. Source: `chapters/ch04-keep-them-watching-retention.md`.
  7. Place the channel on the Camera Talker ↔ Editing Jedi spectrum. Source: `chapters/ch04-keep-them-watching-retention.md`.
- **criteria**:
  - All 5 letters are addressed. Source: `chapters/ch04-keep-them-watching-retention.md`.
  - No value is stated explicitly ("my core values are…"). Source: `chapters/ch04-keep-them-watching-retention.md`.
  - At least one recurring opener or closer is named. Source: `chapters/ch04-keep-them-watching-retention.md`.
  - At least one icon is named. Source: `chapters/ch04-keep-them-watching-retention.md`.
  - The audit says "the channel", not "my channel". Source: `chapters/ch04-keep-them-watching-retention.md`.
- **data**: the user's videos.
- **upstream / downstream**: niche (1) / informs scripts (3), packaging vibe (2), editor mood board (7).
- **depth**: full

### 6. Repurposing plan

- **name**: Artery-method repurposing plan
- **ask**: "Turn my weekly video into content for other platforms."
- **inputs**: a published long-form video (with transcript), the user's level (1-4), and the target platforms.
- **steps**:
  1. Check the 4 Levels of Being a YouTuber. If not shipping one good video a week, stop. Source: `chapters/ch05-build-your-empire.md`.
  2. Choose levels from the 9 Levels menu. Beginners do L1 (thread) and L2 (Shorts) only. Source: `chapters/ch05-build-your-empire.md`.
  3. Write the Twitter thread (~10 min). Source: `chapters/ch05-build-your-empire.md`.
  4. Cut Shorts: a vertical cut, a slightly different thumbnail, ending with "for more… linked below". Source: `chapters/ch05-build-your-empire.md`.
  5. For higher levels: butcher listicles into one clip per point, and find fire moments (30-60s). Sources: `chapters/ch05-build-your-empire.md`, `chapters/ch07-guest-workshops-growth-niching.md`.
  6. Make titled, subtitled clips in square and portrait from one template. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  7. Publish the micro content ~1 minute after the pillar. Funnel public platforms toward the email list. Source: `chapters/ch05-build-your-empire.md`.
- **criteria**:
  - The user's level is stated, and the chosen repurposing levels match it. Source: `chapters/ch05-build-your-empire.md`.
  - Every clip has a title and subtitles. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  - Each Short ends with a pointer to the long video. Source: `chapters/ch05-build-your-empire.md`.
  - Every derivative traces to the one pillar video. Source: `chapters/ch05-build-your-empire.md`.
  - At least one path leads to an owned channel (email list or content upgrade). Sources: `chapters/ch05-build-your-empire.md`, `chapters/ch07-guest-workshops-growth-niching.md`.
- **data**: the video file and transcript, and the platform accounts.
- **upstream / downstream**: script/video (3) / feeds the email list and monetisation (8).
- **depth**: full

### 7. Editor hiring brief

- **name**: Video editor audition brief
- **ask**: "Help me hire a freelance video editor."
- **inputs**: ≥5 published videos, reference channels, and a budget.
- **steps**:
  1. Start after ~5 videos. Source: `chapters/ch05-build-your-empire.md`.
  2. Post one project on Fiverr, Upwork or People Per Hour, and accept ~10 freelancers ($5-10/hr) as a paid audition. Source: `chapters/ch05-build-your-empire.md`.
  3. Pay per hour, with no fixed revision caps. Source: `chapters/ch05-build-your-empire.md`.
  4. Give a mood board of reference channels. Source: `chapters/ch05-build-your-empire.md`.
  5. Give relentless feedback, keep the best, and scale freelancer → part-time → full-time. The A-cut is the gateway. Source: `chapters/ch05-build-your-empire.md`.
- **criteria**:
  - The brief uses the same raw footage for all auditions. Source: `chapters/ch05-build-your-empire.md`.
  - ~10 candidates are planned. Source: `chapters/ch05-build-your-empire.md`.
  - It is hourly, with no revision cap. Source: `chapters/ch05-build-your-empire.md`.
  - A mood board with named channels is attached. Source: `chapters/ch05-build-your-empire.md`.
  - A feedback loop is specified. Source: `chapters/ch05-build-your-empire.md`.
- **data**: freelance marketplaces.
- **upstream / downstream**: branding audit (5) / frees time for (6, 8).
- **depth**: full

### 8. Monetisation plan

- **name**: Channel revenue model and monetisation stack
- **ask**: "Model how much my channel could earn and what to sell."
- **inputs**: average views, niche, video length, audience geography and wallet, subscriber count, and the products used on camera.
- **steps**:
  1. Check YPP eligibility (1,000 subs + 4,000 watch hours in 12 months), and turn ads on. Source: `chapters/ch06-monetise-your-empire.md`.
  2. Model AdSense as (views ÷ 1,000) × RPM, not CPM. Source: `chapters/ch06-monetise-your-empire.md`.
  3. List the levers: niche, watch time (length), geography. Source: `chapters/ch06-monetise-your-empire.md`.
  4. Set affiliate links in the upload defaults with disclosure. For products used without a program, cold-email the founder to create one or bump the rate. Source: `chapters/ch06-monetise-your-empire.md`.
  5. Defer sponsors until ~20k subs / 100 videos. Sponsor rate ≈ $15 per 1,000 views on the last-10 average. Source: `chapters/ch06-monetise-your-empire.md`.
  6. Match the personal product to the audience's wallet (Skillshare / $150-500 course / coaching), with jab-jab-jab before the right hook. Source: `chapters/ch06-monetise-your-empire.md`.
- **criteria**:
  - The model uses RPM, and the formula is shown. Source: `chapters/ch06-monetise-your-empire.md`.
  - ≥2 revenue pillars are planned (no single-stream dependence). Source: `chapters/ch06-monetise-your-empire.md`.
  - Sponsors are not pursued below the stated threshold. Source: `chapters/ch06-monetise-your-empire.md`.
  - The product price model matches the stated audience wallet. Source: `chapters/ch06-monetise-your-empire.md`.
  - An affiliate disclosure line is present. Source: `chapters/ch06-monetise-your-empire.md`.
  - The email list is named as the base of the funnel. Source: `chapters/ch06-monetise-your-empire.md`.
- **data**: YouTube Analytics (RPM, views, geography, watch time) and affiliate programs.
- **upstream / downstream**: niche (1), audience/email (6) / downstream to a product-launch playbook (welsh-idea-audience 10-11).
- **depth**: full (the personal-product build itself is partial here and lives in another book).

### 9. Gear and setup plan

- **name**: Audio-first studio setup and buy list
- **ask**: "What gear should I buy and how do I set up my room for YouTube?"
- **inputs**: budget, room size, and position on the hobbyist ↔ business spectrum.
- **steps**:
  1. Locate the user on the hobbyist → business spectrum. Hobbyists use a phone. Source: `chapters/ch10-gear-and-setup.md`.
  2. Audio first: reach Level 2 (shotgun mic off-camera on a stand, a hand's-breadth from the face, with a $10 extension). Source: `chapters/ch10-gear-and-setup.md`.
  3. Lighting next: one big soft key light at 45° and slightly above, softened by a softbox or a bounce off a white wall. Close the curtains. Sources: `chapters/ch10-gear-and-setup.md`, `chapters/ch09-office-hours-qa.md`.
  4. Camera and lens last, at the budget/mid tier. Use a wide aperture and maximize background distance. Source: `chapters/ch10-gear-and-setup.md`.
  5. Minimize workflow friction (mains adapter, flip screen, auto white balance). Shoot slightly dark. Source: `chapters/ch10-gear-and-setup.md`.
- **criteria**:
  - The buy order is audio → lighting → camera. Source: `chapters/ch10-gear-and-setup.md`.
  - The mic is off-camera and close to the face (Level ≥2). Source: `chapters/ch10-gear-and-setup.md`.
  - The plan has exactly one key light at ~45°, with no ring light and no three-point setup. Source: `chapters/ch10-gear-and-setup.md`.
  - No lavalier unless roaming is required. Source: `chapters/ch10-gear-and-setup.md`.
  - Each item is at the budget or mid tier, or a reason is given for going higher. Source: `chapters/ch10-gear-and-setup.md`.
  - The subject is not flat against a wall. Source: `chapters/ch10-gear-and-setup.md`.
- **data**: current prices (the gear models date fast, per `SKILL.md` Scope).
- **upstream / downstream**: none / enables the thumbnail photo (2) and filming.
- **depth**: full

### 10. Publishing cadence system

- **name**: Weekly upload operating system
- **ask**: "Help me actually post one video every week."
- **inputs**: available hours, a preferred day, and a potential accountability partner.
- **steps**:
  1. Commit to one video a week as the non-negotiable. Source: `chapters/ch01-youtube-foundations.md`.
  2. Fix a self-imposed publish slot (e.g. every Tuesday). Source: `chapters/ch09-office-hours-qa.md`.
  3. Pair with an accountability partner or group, built around concrete commitments. Source: `chapters/ch09-office-hours-qa.md`.
  4. Batch-film on one recurring day at a sustainable rate, prep B-roll in the same pass, and bank a buffer. Source: `chapters/ch09-office-hours-qa.md`.
  5. Track the pipeline in Notion pages + databases (≤2 layers), using a database template for the video brief (title, thumbnail, hook, intro, conclusion). Source: `chapters/ch11-bonus-speaking-notion-copyright.md`.
  6. Measure getting better at talking, filming and editing, not views, until the 20-40-50 threshold. Source: `chapters/ch09-office-hours-qa.md`.
- **criteria**:
  - A specific weekday publish slot is named. Source: `chapters/ch09-office-hours-qa.md`.
  - A batch day and a buffer target are named. Source: `chapters/ch09-office-hours-qa.md`.
  - An accountability check-in has a concrete commitment format. Source: `chapters/ch09-office-hours-qa.md`.
  - The brief template has the title/thumbnail/hook/intro/conclusion fields. Source: `chapters/ch11-bonus-speaking-notion-copyright.md`.
  - The Notion setup is ≤2 layers deep. Source: `chapters/ch11-bonus-speaking-notion-copyright.md`.
- **data**: Notion (or an equivalent).
- **upstream / downstream**: niche (1) / the container for (2, 3).
- **depth**: full

### 11. Community design brief

- **name**: Paid community design (5 P's)
- **ask**: "Design a paid community for my audience."
- **inputs**: audience size and engagement, and the candidate platforms.
- **steps**:
  1. Pact: the give/get co-creation deal. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  2. People: who, and which relationships (1:1, masterminds, peer/mentor, live/async). Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  3. Platform: owned vs non-owned. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  4. Promotion: where members hang out, ambassadors, referrals. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  5. Profit: who pays, how, recurring or one-off. Choose perks whose workload does not scale with members. Sources: `chapters/ch07-guest-workshops-growth-niching.md`, `chapters/ch09-office-hours-qa.md`.
- **criteria**:
  - All 5 P's are filled. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  - The Pact states what members contribute, not only what they receive. Source: `chapters/ch07-guest-workshops-growth-niching.md`.
  - No perk scales per-member workload without a cap. Source: `chapters/ch09-office-hours-qa.md`.
- **data**: none.
- **upstream / downstream**: audience and email (6) / monetisation (8).
- **depth**: partial. It is a single guest-workshop summary, and the pricing and onboarding detail would need another book.

---

## oliur-video-creator

Pipeline: `Idea → Script → Scene & Lighting → Camera → A-Roll → B-Roll → Edit → Package → Upload → Monetise` (`chapters/ch01-intro-foundations.md`). It is tuned for tech/product review channels (`chapters/ch01-intro-foundations.md`).

### 1. Video script in read-to-camera format

- **name**: Notion video page with a 3-part script
- **ask**: "Write my review video script formatted so I can read it to camera."
- **inputs**: the video idea and topic blocks (e.g. screen, battery, camera), plus title ideas.
- **steps**:
  1. Capture the idea on a Notion Kanban (Ideas → In Progress → Uploaded). Source: `chapters/ch02-scripting-preproduction.md`.
  2. Create the video page with sections for title ideas, thumbnail variations, sponsor info, post-upload checklist, description, and script. Source: `chapters/ch02-scripting-preproduction.md`.
  3. Structure the script as Intro → Main → Outro. Source: `chapters/ch02-scripting-preproduction.md`.
  4. In Main, use one sentence per line and an H3 heading per topic block. Source: `chapters/ch02-scripting-preproduction.md`.
  5. Bold the to-camera lines. The rest is read off the iPad and covered by B-roll. Sources: `chapters/ch02-scripting-preproduction.md`, `chapters/ch04-editing-thumbnails-titles.md`.
  6. Write conversationally, "as if talking to a friend". Choose full script, bullets, or a mix per video. Source: `chapters/ch02-scripting-preproduction.md`.
- **criteria**:
  - It has Intro, Main and Outro sections. Source: `chapters/ch02-scripting-preproduction.md`.
  - Main has one sentence per line. Source: `chapters/ch02-scripting-preproduction.md`.
  - Each topic block has an H3 heading. Source: `chapters/ch02-scripting-preproduction.md`.
  - At least one line is bolded as to-camera. Source: `chapters/ch02-scripting-preproduction.md`.
  - There is no essay-style or formal register. Source: `chapters/ch02-scripting-preproduction.md`.
  - The template sections (titles, thumbnails, sponsor, checklist, description) exist. Source: `chapters/ch02-scripting-preproduction.md`.
- **data**: Notion.
- **upstream / downstream**: none / feeds the A-roll shoot (2) and the B-roll list (3).
- **depth**: full (for review formats; the source says storytelling channels need more weight on scripting).

### 2. A-roll shoot setup

- **name**: A-roll scene, lighting and camera settings sheet
- **ask**: "Set up my talking-head shot: scene, lights and camera settings."
- **inputs**: the camera (Sony mirrorless or iPhone), lenses, lights, room, and mic.
- **steps**:
  1. Build a frictionless, always-ready space. Source: `chapters/ch03-camera-shooting.md`.
  2. Clean the scene before recording: a tidy, colour-coordinated background with nothing behind the head. Shoot into a corner and kill natural light. Sources: `chapters/ch03-camera-shooting.md`, `chapters/ch06-iphone-workflow.md`.
  3. Light with 3 lights: a key close to the face (grid + dome) plus warm and bluish accents behind. On iPhone, a softbox key. Sources: `chapters/ch03-camera-shooting.md`, `chapters/ch06-iphone-workflow.md`.
  4. Frame with the head in the top third. Source: `chapters/ch03-camera-shooting.md`.
  5. Camera on Sony: 4K, Manual, 24fps, S-Log3, 4:2:2 10-bit 100Mbps, shutter ≈2× fps, lowest aperture, base ISO, WB 5600K matched to the lights. On iPhone: 4K 30/24, HDR off, grid on, Preserve Settings on, 1× lens. Sources: `chapters/ch03-camera-shooting.md`, `chapters/ch06-iphone-workflow.md`.
  6. Audio: a close mic (DJI Mic default) and a treated room, never the on-camera mic. Source: `chapters/ch05-gear-lenses-audio.md`.
- **criteria**:
  - The shutter value is ~2× the frame rate. Source: `chapters/ch03-camera-shooting.md`.
  - WB matches the light's Kelvin. Source: `chapters/ch03-camera-shooting.md`.
  - ISO is at base. Source: `chapters/ch03-camera-shooting.md`.
  - On iPhone, HDR Video is OFF. Source: `chapters/ch06-iphone-workflow.md`.
  - The head is in the top third, not centred. Source: `chapters/ch03-camera-shooting.md`.
  - Natural light is excluded (blinds and door). Source: `chapters/ch03-camera-shooting.md`.
  - The mic is off-camera and close. Source: `chapters/ch05-gear-lenses-audio.md`.
  - Nothing sits directly behind the head. Source: `chapters/ch03-camera-shooting.md`.
- **data**: camera menus.
- **upstream / downstream**: script (1), gear kit (6) / footage for the edit (4).
- **depth**: full

### 3. B-roll shot list

- **name**: B-roll shot list from the A-roll edit
- **ask**: "Make me a B-roll shot list for this product video."
- **inputs**: the edited A-roll (or the script with to-camera vs read lines), the product, and accessories.
- **steps**:
  1. Edit the A-roll first, then list the shots it needs. Source: `chapters/ch03-camera-shooting.md`.
  2. Mark every cut and every read-off-iPad section as a B-roll cover point. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  3. Set the camera to 60fps, shutter ~125, ~70mm. On iPhone, mix 1×/2×/3× at 60fps and lock AE/AF, pulling exposure down. Sources: `chapters/ch03-camera-shooting.md`, `chapters/ch06-iphone-workflow.md`.
  4. Build the scene in layers (desk mat, books, headphones), lit with 2 lights (key opposite the camera + tube). Source: `chapters/ch03-camera-shooting.md`.
  5. Plan the coverage moves: tripod pans, handheld (camera to chest, sway), close-ups, a reflection-reveal. Source: `chapters/ch03-camera-shooting.md`.
  6. Replicate shots admired from film or TV. Wipe the product with microfiber before each shot. Source: `chapters/ch03-camera-shooting.md`.
- **criteria**:
  - Every A-roll cut or read section maps to ≥1 shot. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  - Each shot has a frame rate (60fps) and a focal length or lens. Sources: `chapters/ch03-camera-shooting.md`, `chapters/ch06-iphone-workflow.md`.
  - Each shot names a move (pan, handheld, close-up, reveal). Source: `chapters/ch03-camera-shooting.md`.
  - The scene lists foreground and background props. Source: `chapters/ch03-camera-shooting.md`.
  - The lighting is 2 lights. Source: `chapters/ch03-camera-shooting.md`.
- **data**: the A-roll edit.
- **upstream / downstream**: A-roll (2) / the edit (4).
- **depth**: full

### 4. Edit and grade checklist

- **name**: Final Cut edit + grade + export checklist
- **ask**: "Give me an editing checklist for this video in Final Cut."
- **inputs**: A-roll and B-roll footage (S-Log/Apple Log/iPhone), a LUT, and music.
- **steps**:
  1. Create folders for A-Roll, B-Roll, cache, and render. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  2. Wrap the A-roll in a compound clip, and level the audio to -6 to -12 dB (dual mono) inside it. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  3. Apply the preset stack (Color Wheels + Hue/Sat Curves + Color Curves + Custom LUT ~25%, ~30% for iPhone). Push highlights so the face reads 60-75 on the Luma waveform. Sources: `chapters/ch04-editing-thumbnails-titles.md`, `chapters/ch06-iphone-workflow.md`.
  4. For Apple Log: set Camera LUT to None, add the Custom LUT, and put Color Wheels above it. Source: `chapters/ch07-monetisation-bonus.md`.
  5. Cut tight with no gaps, and lay B-roll over the cuts. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  6. Slow 60fps B-roll with Automatic Speed (F5) and mute it. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  7. Monitor on wired headphones, and export H.264. Source: `chapters/ch04-editing-thumbnails-titles.md`.
- **criteria**:
  - Dialogue peaks fall between -6 and -12 dB. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  - Face luma is 60-75. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  - The LUT opacity is ~25% (~30% for iPhone). Sources: `chapters/ch04-editing-thumbnails-titles.md`, `chapters/ch06-iphone-workflow.md`.
  - Color Wheels sit above the LUT in the stack. Source: `chapters/ch07-monetisation-bonus.md`.
  - No visible jump cut is left uncovered. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  - The export is H.264. Source: `chapters/ch04-editing-thumbnails-titles.md`.
- **data**: Final Cut Pro and a LUT file (the premium LUTs are not in the source).
- **upstream / downstream**: A-roll and B-roll (2, 3) / packaging (5), upload.
- **depth**: full

### 5. Packaging (title + thumbnail)

- **name**: Review-video title and thumbnail
- **ask**: "Give me a title and thumbnail for my review."
- **inputs**: the video content and the channel's existing thumbnail style.
- **steps**:
  1. Think of the title early, in pre-production. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  2. Write a title that is engaging and accurate, not clickbait. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  3. Make the thumbnail simple, using a clean product shot or screen-grab for reviews. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  4. Borrow a style, then make it consistent and your own. Source: `chapters/ch04-editing-thumbnails-titles.md`.
- **criteria**:
  - Every claim in the title is delivered in the video. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  - The thumbnail matches the channel's recurring style. Source: `chapters/ch04-editing-thumbnails-titles.md`.
  - The thumbnail is not a wholesale copy of another creator's. Source: `chapters/ch04-editing-thumbnails-titles.md`.
- **data**: none.
- **upstream / downstream**: script (1), edit (4) / upload.
- **depth**: partial. It gives principles without a generation procedure. Ali's packaging set (ali-abdaal-youtuber 2) has the procedure.

### 6. Gear kit recommendation

- **name**: Lens and audio buy list
- **ask**: "Which lens and mic should I buy for my videos?"
- **inputs**: budget, content type, the aperture/blur wanted, prime vs zoom, travel needs, and the room.
- **steps**:
  1. Answer the 5 lens questions: budget, content, aperture, prime vs zoom, travel. Source: `chapters/ch05-gear-lenses-audio.md`.
  2. Map them to the lens-by-scenario table (28-75/28-70 f/2.8 as the one-lens starter; 24mm f/1.4 for intimate A-roll; 17-28 for tight spaces; 70-200 for far subjects). Source: `chapters/ch05-gear-lenses-audio.md`.
  3. Reject variable-aperture zooms and unneeded macro or G Master glass. Source: `chapters/ch05-gear-lenses-audio.md`.
  4. Pick audio: DJI Mic by default, or step up to XLR + pencil mic or a dynamic podcast mic. Treat the room. Source: `chapters/ch05-gear-lenses-audio.md`.
  5. Prioritize scene, light and audio over the camera body. Source: `chapters/ch01-intro-foundations.md`.
- **criteria**:
  - All 5 questions are answered. Source: `chapters/ch05-gear-lenses-audio.md`.
  - No variable-aperture zoom is recommended. Source: `chapters/ch05-gear-lenses-audio.md`.
  - Face shots use 50-100mm, or the warping trade-off is stated. Source: `chapters/ch05-gear-lenses-audio.md`.
  - The audio item comes before any camera upgrade. Source: `chapters/ch01-intro-foundations.md`.
  - The plan includes a room-treatment step. Source: `chapters/ch05-gear-lenses-audio.md`.
- **data**: current prices and specs.
- **upstream / downstream**: none / A-roll (2), B-roll (3).
- **depth**: full

### 7. Sponsorship readiness + rate card

- **name**: Sponsor-readiness check and integration rate card
- **ask**: "Am I ready for sponsors, and what should I charge?"
- **inputs**: subscribers, catalog size, niche, persona, contact method, and audience wealth.
- **steps**:
  1. Check the 5 prerequisites: grown audience, catalog, clear niche, clean persona, easy contact. Source: `chapters/ch07-monetisation-bonus.md`.
  2. Let sponsors come to you rather than chasing them. Source: `chapters/ch07-monetisation-bonus.md`.
  3. Price a 60s integration at ~$1,500 per 100k subs, adjusted up for a richer niche. Source: `chapters/ch07-monetisation-bonus.md`.
  4. Negotiate everything, and compare rates with similar-sized creators. Source: `chapters/ch07-monetisation-bonus.md`.
  5. Diversify into digital and physical products, affiliates, and client work to build an owned list. Source: `chapters/ch07-monetisation-bonus.md`.
- **criteria**:
  - All 5 prerequisites are marked yes/no. Source: `chapters/ch07-monetisation-bonus.md`.
  - The rate shows the per-100k-subs calculation. Source: `chapters/ch07-monetisation-bonus.md`.
  - Contact is reachable from the profile. Source: `chapters/ch07-monetisation-bonus.md`.
  - ≥1 non-sponsor stream is planned. Source: `chapters/ch07-monetisation-bonus.md`.
- **data**: channel analytics.
- **upstream / downstream**: catalog of videos / monetisation (overlaps ali-abdaal-youtuber 8).
- **depth**: full

---

## ai-visual-prompting

Prompt craft only. It does not render. Parameter syntax is Midjourney-style and must be adapted per platform (`SKILL.md` Scope & Limits).

### 1. Photoreal still prompt

- **name**: Single layered image prompt
- **ask**: "Write me an image prompt for X."
- **inputs**: the vision (subject, use, mood), the target model, and the aspect ratio.
- **steps**:
  1. Define the vision. Source: `chapters/ch01-prompt-anatomy.md`.
  2. Fill the skeleton in order: `[Subject] [Action] in [Environment], [Lighting], [Style], [Camera], [Technical] --no [negatives]`. Front-load the highest-priority element. Source: `chapters/ch01-prompt-anatomy.md`.
  3. Pull 1-3 keywords per layer from the banks (one technical + one evocative). Source: `chapters/ch02-element-keyword-library.md`.
  4. Add mood (colour, emotion). Source: `chapters/ch01-prompt-anatomy.md`.
  5. Add negatives. Source: `chapters/ch01-prompt-anatomy.md`.
  6. Audit against the 9 layers and fill any empty slot. Add the analog imperfection layer if the target is realism. Sources: `chapters/ch01-prompt-anatomy.md`, `chapters/ch02-element-keyword-library.md`.
  7. Add parameters (`--ar`, `--s`, `--style raw`, `--seed`). Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
- **criteria**:
  - The subject appears in the first clause. Source: `chapters/ch01-prompt-anatomy.md`.
  - Lighting, Style and Camera layers are present. Source: `chapters/ch01-prompt-anatomy.md`.
  - All 9 layers are addressed, or the gaps are intentional. Source: `chapters/ch01-prompt-anatomy.md`.
  - The prompt has no vague adjective without a concrete term. Source: `chapters/ch01-prompt-anatomy.md`.
  - A `--no` block ends the prompt. Source: `chapters/ch01-prompt-anatomy.md`.
  - An aspect ratio is set. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  - The parameter syntax matches the target platform. Source: `SKILL.md` Scope.
- **data**: an image model (Midjourney, DALL·E, Stable Diffusion or ChatGPT image).
- **upstream / downstream**: optional style anchors (4) / iteration (6), Sora companion (5).
- **depth**: full

### 2. Master Prompt + variation series

- **name**: Category Master Prompt with a variant set
- **ask**: "Create a consistent set of images for my brand or series."
- **inputs**: the category (product, lifestyle, portrait, fashion, sports, pets), the brand or campaign, the target audience, and the number of shots.
- **steps**:
  1. Write the Master Prompt: subject + a range of camera/lens + a range of lighting + physical-detail emphasis + background guidance + target mood. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  2. Derive each shot by fixing one option per layer. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  3. Vary by swapping one lever (subject, lighting, lens, styling), not by rewriting. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  4. For action shots, state the freeze mechanism (rear-curtain sync or panning ~1/40s). Source: `chapters/ch06-adventure-fashion-portraiture-recipes.md`.
  5. Add props and (fictional) brand styling for campaign polish. Keep the brand text short. Sources: `chapters/ch06-adventure-fashion-portraiture-recipes.md`, `patterns.md`.
  6. Lock the seed for consistency across the set. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
- **criteria**:
  - The Master Prompt contains ranges for lens and lighting. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  - Each variant differs from the Master in named levers only. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  - Every action/motion shot names a freeze mechanism. Source: `chapters/ch06-adventure-fashion-portraiture-recipes.md`.
  - The hero subject is not outnumbered by props. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  - The same seed or anchor is used across the set. Sources: `chapters/ch03-parameters-iteration-troubleshooting.md`, `chapters/ch04-gpt-as-prompt-director.md`.
- **data**: an image model.
- **upstream / downstream**: style anchors (4) / Sora companions (5).
- **depth**: full

### 3. Product ad / flat-lay prompt

- **name**: Product flat-lay ad image prompt
- **ask**: "Write an ad image prompt for my product with the tagline on it."
- **inputs**: the product (material, colour, logo), the brand style, the tagline text, and the target audience.
- **steps**:
  1. Start from the product Master Prompt. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  2. Shoot top-down, with the product placed diagonally on a named textured surface. Sources: `chapters/ch05-photoreal-photography-recipes.md`, `patterns.md`.
  3. Add complementary props. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  4. Use crisp studio lighting with gels, a 50mm lens and creamy bokeh. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  5. Specify the on-image text layout (top line, bottom line, font style). Source: `chapters/ch05-photoreal-photography-recipes.md`.
  6. Name the campaign and target audience. Source: `chapters/ch05-photoreal-photography-recipes.md`.
- **criteria**:
  - The surface material is named. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  - Product placement and angle are stated. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  - Lighting and lens are stated. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  - The on-image text is quoted verbatim and kept short. Sources: `chapters/ch05-photoreal-photography-recipes.md`, `patterns.md`.
  - The target audience is named. Source: `chapters/ch05-photoreal-photography-recipes.md`.
  - The prop count leaves the product as the hero. Source: `patterns.md`.
- **data**: an image model.
- **upstream / downstream**: none / social posts and ads.
- **depth**: full

### 4. GPT prompt-director system prompt

- **name**: Reusable style system prompt with anchors
- **ask**: "Set up a GPT prompt that writes on-brand image prompts for me."
- **inputs**: the brand look (tone, lens, light, materials) and the target image model.
- **steps**:
  1. Define the style once in a system prompt (tone, lens, light setup, materials). Source: `chapters/ch04-gpt-as-prompt-director.md`.
  2. Write reusable prompt anchors. Source: `chapters/ch04-gpt-as-prompt-director.md`.
  3. Instruct GPT to build in parts: subject → setting → mood → lens, each in its own paragraph. Source: `chapters/ch04-gpt-as-prompt-director.md`.
  4. Instruct GPT to return 5 variants with exactly one element changed. Source: `chapters/ch04-gpt-as-prompt-director.md`.
  5. Require explicit `--no` constraints at the end. Source: `chapters/ch04-gpt-as-prompt-director.md`.
- **criteria**:
  - The system prompt names tone, lens, light and materials. Source: `chapters/ch04-gpt-as-prompt-director.md`.
  - ≥1 anchor is defined verbatim. Source: `chapters/ch04-gpt-as-prompt-director.md`.
  - The variant instruction says one element only. Source: `chapters/ch04-gpt-as-prompt-director.md`.
  - The output spec ends with `--no`. Source: `chapters/ch04-gpt-as-prompt-director.md`.
  - It asks GPT for prompts, not images. Source: `chapters/ch04-gpt-as-prompt-director.md`.
- **data**: an LLM and an image model.
- **upstream / downstream**: none / feeds (1, 2, 5).
- **depth**: full

### 5. Sora companion / video prompt set

- **name**: Still-to-video companion prompts
- **ask**: "Turn this image prompt into a Sora video prompt."
- **inputs**: a finished still prompt, and the single motion wanted.
- **steps**:
  1. Keep the still's subject, styling and lighting verbatim. Sources: `chapters/ch07-sora-video-prompting.md`, `chapters/ch06-adventure-fashion-portraiture-recipes.md`.
  2. Define the 5 elements: framing/lens, lighting, motion behavior, texture cues, background. Source: `chapters/ch07-sora-video-prompting.md`.
  3. Lock the camera, or state the movement (static, slow tracking). Source: `chapters/ch07-sora-video-prompting.md`.
  4. Add 1-2 slow, controlled motions, naming what moves and how. Source: `chapters/ch07-sora-video-prompting.md`.
  5. Add subtle atmospheric motion and set the timing. Source: `chapters/ch07-sora-video-prompting.md`.
  6. Imply sound through the environment. Source: `chapters/ch07-sora-video-prompting.md`.
- **criteria**:
  - The styling, palette and lighting text is unchanged from the still. Source: `chapters/ch07-sora-video-prompting.md`.
  - ≤2 moving elements, each with a named manner. Source: `chapters/ch07-sora-video-prompting.md`.
  - The camera behavior is stated. Source: `chapters/ch07-sora-video-prompting.md`.
  - All 5 Sora elements are present. Source: `chapters/ch07-sora-video-prompting.md`.
  - A timing or pacing word is present. Source: `chapters/ch07-sora-video-prompting.md`.
  - An environmental sound cue is present. Source: `chapters/ch07-sora-video-prompting.md`.
- **data**: Sora (or a video model).
- **upstream / downstream**: still prompt (1, 2) / video assets.
- **depth**: full

### 6. Iteration and troubleshooting log

- **name**: One-variable iteration log
- **ask**: "This image came out wrong, help me fix the prompt."
- **inputs**: the prompt, the output, the symptom, and the seed.
- **steps**:
  1. Fix the seed. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  2. Map the symptom to its fix (distorted faces, poor composition, unwanted elements, low detail, wrong style). Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  3. Change exactly one keyword or parameter, regenerate, compare, and keep or revert. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  4. Try moving the key descriptor to the start. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  5. Document the prompts that worked for reuse. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
- **criteria**:
  - Each log row changes exactly one variable. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  - The seed is recorded and held constant. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  - Each row has a keep/revert decision. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
  - The final prompt is saved. Source: `chapters/ch03-parameters-iteration-troubleshooting.md`.
- **data**: an image model with seed support.
- **upstream / downstream**: still prompt (1) / the reusable prompt library.
- **depth**: full

---

## Cross-skill overlaps within this slice

- The **profile** is covered twice. welsh-linkedin 2 has the principle only (partial), and welsh-idea-audience 4 gives the per-element procedure. One playbook should use WIA's scan order with WL's "build before posting" gate.
- The **origin story** is covered twice. welsh-linkedin 1 has a backstory at elevator-pitch length, welsh-idea-audience 2 has the 5-step arc, and ali-abdaal-youtuber 4 has the Five-Second Moment. These are three story procedures with different shapes.
- **Video packaging and scripts** are covered by both video skills. Ali (2, 3) and Oliur (5, 1) overlap, and they conflict: Ali says shoot a real photo and "intrigue, if you deliver", while Oliur says a clean screen-grab is fine for reviews and "never clickbait". Ali uses HIVES with bullets by default; Oliur uses Intro/Main/Outro with bolded to-camera lines.
- **Gear advice** conflicts. Ali (9) says one key light and no lavalier or three-point setup. Oliur (2, 6) uses a 3-light A-roll and lists lavalier for interviews. Sponsor pricing also differs: Ali gives ~$15 per 1k views, Oliur gives ~$1,500 per 100k subs.
- **Chains**: Ali's repurposing (6) feeds WIA's Content Web (7) and capture page (6). Ali's monetisation (8) points to WIA's product build and 14-day launch (10, 11). ai-visual-prompting 3 can supply the anti-stock images that the WIA Scroll Test asks for.
