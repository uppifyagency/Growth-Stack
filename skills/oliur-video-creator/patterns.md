# Patterns & Techniques — Video Creator Course (Oliur)

## The End-to-End Creation Pipeline
**When to use**: every video.
**How**: Idea → Script → Scene & Lighting → Camera Setup → Shoot A-Roll → Shoot B-Roll → Edit (cut + color + audio) → Package (thumbnail + title) → Upload → Monetise. Pre-production (script, title) feeds shooting; editing the A-roll reveals the B-roll shot list.
**Trade-offs**: linear, but stages are tunable to your niche (storytelling channels weight scripting more).

## The Notion Kanban Idea System
**When**: continuously, to kill "what do I make next" friction.
**How**: three columns — Ideas / In Progress / Uploaded; dump every idea (even random ones); move cards as you produce. Template also holds title ideas, thumbnail variants, sponsor info, post-upload checklist, description, and the script.
**Trade-offs**: built for YouTube; customise for other platforms.

## The 3-Part Script (read-to-camera formatting)
**When**: writing any video.
**How**: Intro → Main → Outro; one sentence per line; H3 headings per topic; **bold** the to-camera lines (read the rest off the iPad). Write "as if talking to a friend."
**Trade-offs**: full script vs. bullets is a per-video choice; bullets often yield more natural delivery.

## The Manual Camera Baseline
**When**: shooting on a mirrorless (Sony a7 IV reference).
**How**: 4K, Manual, 24fps, S-Log3 (PP8), 4:2:2 10-bit @ 100Mbps, shutter ≈2× fps, lowest aperture, base ISO 800, WB custom 5600K to match lights. Shoot B-roll at 60fps / shutter 125.
**Trade-offs**: S-Log requires grading; manual requires controlling the light.

## The Clean-Scene-Into-a-Corner Method
**When**: any A-roll without a long room.
**How**: tidy/coordinated background, nothing behind the head, shoot into a corner for depth; kill natural light (blinds + door); head in the top third.
**Trade-offs**: front-loads work — you can't fix a bad scene in post.

## The Three-Light A-Roll / Two-Light B-Roll
**When**: lighting a talking head vs. a product.
**How (A-roll)**: key light close to face (grid + dome) + two accents behind (one warm, one bluish) for separation. **How (B-roll)**: one key opposite the camera + one tube/accent light; kill the rest for a moody, product-lit look.

## The B-Roll-After-Edit System
**When**: making review/product videos.
**How**: edit the A-roll first, list the shots it needs, then shoot B-roll to that list. Shoot at ~70mm (depth/cinematic), in layered scenes (accessories for foreground/background), with smooth pans + handheld (active stabilization, camera to chest, sway body). Replicate shots you admire from film/TV.

## The Compound-Clip Grade-Once Workflow
**When**: editing A-roll in Final Cut Pro.
**How**: wrap A-roll in a compound clip; inside it, level audio to -6 to -12 dB (dual mono) and apply the saved preset stack (Color Wheels + Hue/Sat Curves + Color Curves + Custom LUT ~25%); push highlights so face brightness reads 60–75 on the Luma waveform. Every main-timeline cut inherits it.
**Trade-offs**: setup once saves grading every clip.

## The Invisible-Cut (B-Roll over the Edit)
**When**: hiding mistakes/cuts and faking seamless to-camera delivery.
**How**: lay B-roll over two A-roll clips / over the cut; read script off the iPad and cover it with B-roll. Cut tight (just before talking) and rejoin at the next good take with no gap.

## The One-Tap Slow-Mo
**When**: conforming 60fps B-roll to a 24/30fps timeline.
**How**: bind **Automatic Speed** to a key (F5); FCP computes the slowdown (e.g. 40% or 50%) automatically. Mute the clip, drag the LUT/grade bundle, nudge highlights.

## The Lens-by-Scenario Selection
**When**: buying or choosing a lens.
**How**: answer the 5 questions (budget, content, aperture, prime/zoom, travel). One-lens starter = Tamron 28–75 / Sigma 28–70 f/2.8 (≈90% of shots). Intimate A-roll = 24mm f/1.4. Tight spaces = 17–28. Macro = 90mm (often unnecessary). Far/portraits = 70–200. Shoot faces at 50–100mm to avoid warping. Avoid variable-aperture zooms for video.

## The Audio-First Stack
**When**: any video; spend here before camera.
**How**: get the mic close + treat the room (carpet, panels). Default: DJI Mic (wireless, onboard recording, phone-compatible). Step up to XLR + pencil mic (studio) or dynamic podcast mic (close, room-rejecting). Avoid the on-camera mic.
**Trade-offs**: XLR-into-camera = no syncing but pricier; DJI onboard recording requires syncing but is most versatile.

## The iPhone Budget Workflow
**When**: starting out / shooting cheaply.
**How**: 4K 30 (or 24) fps, HDR off, grid on, Preserve Settings on, 1× for A-roll; same scene/light/top-third rules + softbox; DJI Mic into the phone. B-roll: mix 1×/2×/3×, 60fps, slow to 50%, lock AE/AF + pull exposure. Edit identically; LUT ~30%.

## Let-Sponsors-Come-to-You Monetisation
**When**: monetising a growing channel.
**How**: build audience + catalog + clear niche + clean persona + easy contact; inbound sponsors give you negotiating leverage ("everything is a negotiation"). Price ~$1,500 / 100k subs for a 60s integration; diversify into digital/physical products, affiliates, client work to build an owned email list.
**Trade-offs**: nothing converts until the audience exists.

## The Grade-Before-LUT Stack (Apple Log bonus)
**When**: grading Apple Log (or any LUT) footage in FCP.
**How**: reset Apple's auto-LUT (Extended → Camera LUT: None) to recover the flat profile; add the Custom LUT; reorder Color Wheels *above* the LUT so corrections precede it; tweak highlights/shadows/saturation.
