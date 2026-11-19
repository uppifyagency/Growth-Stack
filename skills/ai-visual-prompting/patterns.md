# Patterns — Reusable Prompting Techniques

## The Layered Blueprint
**When to use**: every photoreal still prompt.
**How**: fill the skeleton in order — `[Subject] [Action] in [Setting], [Lighting], [Style/Medium], [Camera], [Technical params] --no [negatives]`. Walk the 9-layer stack to find empty slots.
**Trade-offs**: more layers = more control but longer prompts; lead with the highest-priority layer (position = weight).

## Master Prompt + Variations
**When to use**: building a repeatable category/series.
**How**: write one Master Prompt (general direction with *ranges* of lens/lighting), then derive specific prompts by fixing one option per layer.
**Trade-offs**: consistency across a set vs. per-shot novelty.

## The Analog Imperfection Layer
**When to use**: any time AI output looks too clean/sterile.
**How**: append lens dirt, hairline scratches, floating dust, film grain, light leaks, RGB fringing, soft bloom.
**Trade-offs**: adds realism and "editorial" feel; overdone it muddies fine detail.

## Fisheye Editorial Portrait
**When to use**: surreal, intimate, humorous character shots.
**How**: extreme/super-exaggerated fisheye + very close subject + curved room edges + one blurred moving part.
**Trade-offs**: high impact, but distortion needs careful wording to land.

## Flat-Lay Product Shot
**When to use**: cosmetics/packaging/commercial.
**How**: top-down, product diagonally placed on a named textured surface (satin, marble), props around it, crisp studio light + gels, 50mm + creamy bokeh, optional on-image text layout.
**Trade-offs**: clean and premium; too many props lose the hero.

## Motion-Blur vs Sharp-Focus Contrast
**When to use**: action/sports where you want speed *and* detail.
**How**: blur the moving element (limbs, tire, dust), keep the hero detail crisp; specify the freeze mechanism — rear-curtain sync flash or slow shutter + panning (~1/40s).
**Trade-offs**: without a stated freeze mechanism the whole frame smears.

## Branded / Fictional-Brand Styling
**When to use**: turning a shot into an editorial campaign.
**How**: print a brand name on apparel/gear/packaging (e.g. "OHNEIS", "MILK"), add taglines and a campaign vibe + target audience.
**Trade-offs**: instant commercial polish; brand text may render imperfectly — keep it short.

## GPT Prompt Anchors
**When to use**: maintaining a look across many prompts.
**How**: define tone/lens/light/materials once (system prompt or saved fragment); reuse verbatim. Request five variants with one element changed.
**Trade-offs**: strong consistency; can feel formulaic if never refreshed.

## Sora Still-to-Motion (Companion Prompt)
**When to use**: animating a finished still.
**How**: keep subject, styling, lighting verbatim; lock the camera; add ONE or two slow, controlled motions; name what moves and how; imply ambient sound via environment.
**Trade-offs**: preserves continuity; multiple simultaneous motions break the concept.

## One-Variable Iteration
**When to use**: every refinement pass.
**How**: change exactly one keyword/parameter, fix the seed, regenerate, compare.
**Trade-offs**: slower than shotgunning changes, but the only way results are attributable and reusable.
