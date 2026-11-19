# Chapter 7: Sora Video Prompting & Image→Video Integration

## Core Idea
Sora prompts aren't busier image prompts — they are restrained ones. The craft is a locked, deliberate camera plus *minimal, hyper-controlled* motion that turns a still into living cinema without breaking its composition.

## Frameworks Introduced
- **Sora Variation Structure** — each Sora prompt defines five things:
  1. Framing and lens choice · 2. Lighting style · 3. Motion behavior (or lack of motion) · 4. Texture and realism cues · 5. Background and environmental design.
  - When to use: authoring any Sora clip from scratch.
- **Sora Master Prompt (motion study):** *Create a slow-motion, surrealist image sequence centered on a single subject. The camera remains locked or deliberately composed, using specific lens choices (macro, 24mm, 50mm) to define subject–environment relationship. Movement is minimal, hyper-controlled, or frozen mid-air. Lighting is studio-quality — precision, shadows, soft sculptural highlights. Background is isolated, graphic, or void-like. Emphasize physical detail (fur, bone structure, reflections, ripples). Color grading minimalistic, nostalgic, or stark. Result: cinematic, strange, emotionally restrained.*

## The Cinematic-Restraint Principle
The signature move across these Sora prompts is *almost no motion*: "no motion except a barely noticeable glint," "only his right hand slowly flexes once," "rhythmic, hypnotic tail flow in an otherwise frozen world." Lock the camera, isolate the background, let ONE element move slowly. Restraint reads as high-concept; busy motion reads as cheap.

## Four Motion Archetypes (from the dog series)
- **Thorn Macro** — locked 100mm macro, everything still except one droplet slowly elongating to the verge of detachment.
- **Greyhound Royalty** — B&W studio portrait, motion = a single light glint off rhinestones; prominent film grain.
- **Airborne Dachshund** — 24mm low wide/fisheye, subject frozen mid-air, no motion blur, dreamlike crispness.
- **Dalmatian Graphic Loop** — 50mm hip-level crop, pop-graphic red, only the tail sways in smooth fluid motion.

## Still→Video: the 6 Integration Rules (from v7)
1. **Maintain Visual Consistency** — reuse the still's color palette, lighting quality, styling.
2. **Define Motion Elements** — name *which* elements move (fabric, hair, background) and *how* (slowly, dramatically, subtly).
3. **Consider Camera Movement** — state static / slow tracking / dynamic.
4. **Add Atmospheric Motion** — subtle environmental life (dust, fabric ripple, light shift).
5. **Establish Timing** — slow contemplative vs. quick dynamic pacing.
6. **Audio Implications** — Sora makes no sound, but suggest the ambient environment (windy, calm, urban) to visually imply it.

## The Companion-Prompt Method
Take a finished still prompt → keep subject, styling, lighting verbatim → add exactly one or two slow, controlled motions. Example: a still of a tearful woman becomes a clip where "a slow-moving tear glistens as it rolls down, a second phone receiver rocks slowly, a few tissues flutter from a breeze."

## Mental Models
- **Locked camera, single mover** — the default Sora composition.
- **Continuity over novelty** — the video should look like the still, breathing.
- **Motion as punctuation** — one deliberate movement says more than constant action.

## Anti-patterns
- Adding many simultaneous motions → chaotic, off-concept.
- Changing styling/lighting between still and clip → visible discontinuity.
- Motion blur where the look calls for "crisp and dreamlike."

## Key Takeaways
1. Define all five Sora elements; motion behavior is one of them.
2. Lock the camera; let one element move slowly.
3. Build clips as companions to stills — same look, minimal added motion.
4. Imply sound through described environment.

## Connects To
- **Ch 1**: the still skeleton the companion extends.
- **Ch 6**: every v7 still ships with a Sora companion.
- **Ch 4**: GPT can author still + companion as a matched pair.
