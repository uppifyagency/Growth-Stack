# Chapter 4: GPT as Visual Prompt Director

## Core Idea
GPT does not generate images — it generates *prompts*. Used as a logic layer between raw intent and visual execution, it writes the kind of layered, modular prompt a professional would, with far more control than a raw image-UI allows.

## Frameworks Introduced
- **GPT-as-Prompt-Engine**: treat GPT as a translator between imagination and structure. Feed it a loose intent; get back a fully layered prompt ready to paste into Midjourney/DALL·E/Stable Diffusion/Sora.
  - When to use: when you have a vibe but not the vocabulary, or need many controlled variants fast.
  - Why it works: GPT follows instructions literally and is highly steerable — so a blueprint-style request yields a blueprint-style prompt.

## The 5 Techniques
1. **Define Your Style Once** — put tone, lens, light setup, and materials in a system prompt; GPT reapplies them across changing subjects (brand/series consistency).
2. **Use Prompt Anchors** — reusable fragments you drop into any prompt, e.g.
   - `in golden hour lighting, with soft ambient fog and volumetric shadows`
   - `rendered in photorealistic editorial fashion style, with clean framing and analog imperfections`
3. **Generate Variants on Demand** — ask for five prompt variations with **only one element changed** (lighting, lens, subject emotion, composition) to explore methodically.
4. **Use Step-by-Step Generation** — "Let's build the prompt in parts. First describe only the subject. Then the setting. Then mood. Then lens. Each in a new paragraph."
5. **Add Negative Constraints Explicitly** — GPT handles `--no` well: `--no distorted anatomy, --no text overlays, --no logos, --no watermarks, --no lowres artifacts`.

## Worked Example — same subject, two styles
**Input:** "I want a dreamy portrait of a teenage boy in a forest, something nostalgic and cinematic."
**GPT output:** *A cinematic editorial portrait of a teenage boy with disheveled hair, leaning against a moss-covered tree in a foggy forest. His gaze is distant, with soft morning light filtering through the canopy. The atmosphere is damp and quiet, with mist curling through the trees. Styled in retro corduroy and a faded denim jacket. Captured with a 50mm lens at f/2.8 for shallow depth of field and slight motion blur from falling leaves. Add fine film grain, soft bloom, and pastel-toned shadows. Vertical format, 1080x1350.*

**Input (refine):** "Make it feel more digital, like Y2K or vaporwave."
**GPT output:** *A stylized digital portrait of a teenage boy lit by glitchy CRT monitor light in a dense vaporwave forest. Electric pink and turquoise reflections ripple across his windbreaker, old-school window overlays float faintly. Trees are low-poly, PS1-era. Captured with artificial depth blur, scanlines, and VHS distortion. Vertical layout, pastel fog, 1:1 aspect ratio.*

## Mental Models
- **GPT as visual director** — you supply intent + constraints; it supplies precise, modular language.
- **Anchors over re-typing** — name a look once, reuse the fragment everywhere.
- **Modularize to compare** — one-element-changed variants make the design space legible.

## Anti-patterns
- **Asking GPT for an image** — it shapes prompt vocabulary, it doesn't render.
- **Vague intent with no constraints** — literal GPT needs explicit structure to be useful.

## Key Takeaways
1. Use GPT to author prompts, not pictures.
2. Lock your style in a system prompt; vary subjects freely.
3. Build prompts in parts; request 5 single-variable variants.
4. Always end with explicit `--no` constraints.

## Connects To
- **Ch 1**: GPT fills the same 9-layer skeleton.
- **Ch 3**: GPT generates the one-variable iteration set.
- **Ch 7**: same anchors carry from still prompt into Sora companion prompt.
