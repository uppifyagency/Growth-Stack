# Chapter 1: Prompt Anatomy — The Layered Blueprint

## Core Idea
A strong image prompt is not a sentence — it is a blueprint assembled in a fixed order, where every layer is intentional and earlier words carry more weight.

## Frameworks Introduced
- **Recommended General Prompt Structure**: the canonical skeleton —
  `[Subject Description] [Action/Pose] in [Environment/Setting], [Lighting Conditions], [Style/Medium], [Camera Specifications], [Technical Parameters] --no [negative prompts]`
  - When to use: every photoreal still prompt, as the default scaffold.
  - How: fill each slot left-to-right; never skip Lighting, Style, or Camera.
- **The 9-Layer Element Stack**: the full set of describable layers —
  1. Subject & Core Concept · 2. Action & Interaction · 3. Setting & Environment · 4. Materials & Textures · 5. Composition & Framing · 6. Lighting · 7. Style & Artistic Medium · 8. Color Palette & Mood · 9. Technical Camera/Lens Effects.
  - When to use: as a completeness checklist — scan the 9 layers, fill any that are missing.
- **GPT Ordering Shorthand**: `Subject → Action → Setting → Materials → Light → Mood → Camera → Style`, with constraints added as negatives at the end. Treat the prompt like a blueprint: every part must be intentional.

## Key Concepts
- **Keyword Weighting**: words appearing earlier have more influence; lead with what matters most.
- **Master Prompt**: a foundational paragraph defining a category's general creative direction, reused across specific variations.
- **Specificity**: detail reduces the AI's guesswork — vague in, generic out.
- **Negative prompt**: an explicit exclusion appended last (`--no text, watermarks`).

## Mental Models
- **Prompt as blueprint, not request** — every clause is a build instruction, not a wish.
- **Front-load the signal** — put the highest-priority descriptor first because position = weight.
- **Layer, then audit** — write the stack, then walk the 9 layers to find the empty slot.

## The 6 Core Principles
1. Specificity is Key · 2. Use Strong Descriptive Keywords · 3. Structure Matters (Subject > Action > Setting > Style > Technical) · 4. Keyword Weighting (earlier = stronger) · 5. Iteration is Necessary · 6. Think Step-by-Step.

## The 7-Step Build Process
1. Define your vision (what exactly to create) · 2. Plan core elements (subject, action, environment, style) · 3. Add technical specs (camera, lighting, effects) · 4. Incorporate mood & feeling (color, emotion, atmosphere) · 5. Add negative prompts · 6. Review for completeness (all 9 layers covered) · 7. Test and iterate.

## Anti-patterns
- **Vague prompts**: "a cool photo of a car" → generic output. Replace every adjective with a concrete, technical one.
- **Skipping Camera/Lighting layers**: leaves the model to guess the look; output drifts off-style.
- **Burying the subject mid-paragraph**: weak subjects lose to earlier descriptors.

## Key Takeaways
1. Use the fixed skeleton every time; fill it in order.
2. The 9-layer stack is your completeness checklist.
3. Position is weight — lead with what matters.
4. Build in 7 steps; negatives are step 5, not an afterthought.

## Connects To
- **Ch 2**: the keyword banks that fill each of the 9 layers.
- **Ch 3**: parameters and negative-prompt mechanics that close the skeleton.
- **Ch 4**: using GPT to assemble the blueprint for you.
