---
name: ai-visual-prompting
description: "Knowledge base from four AI image & Sora video prompt packs (Prompting Guideline Pack; Cats/Lifestyle/Product v4; AI Sora Vol.2 by ohneis.studio; Advanced Prompt Pack v7). Use when crafting prompts for Midjourney, DALL·E, Stable Diffusion, ChatGPT image, or Sora — prompt structure, keyword banks, parameters, photoreal recipes, fashion/sports/portraiture, and image-to-video integration."
allowed-tools:
  - Read
  - Grep
argument-hint: [topic, e.g. "prompt structure", "sora", "flat lay", "fisheye", or chapter number]
---

# AI Visual Prompting — Image & Sora Video Prompt Packs
**Sources**: Prompting Guideline Pack · Cats/Lifestyle/Product v4 · AI Sora Prompt Vol.2 (ohneis.studio) · Advanced Prompt Pack v7 | **Pages**: ~35 | **Chapters**: 7 | **Generated**: 2026-06-13

## How to Use This Skill
- **Without arguments** — load the core frameworks below for reference.
- **With a topic** — ask about `prompt structure`, `parameters`, `sora`, `flat lay`, `fisheye`, `rear-curtain sync`, `gpt prompts`; I find and read the relevant chapter.
- **With a chapter** — ask for `ch05`; I load that file.
- **Browse** — ask "what chapters do you have?" for the full index.

When you ask about a topic not in Core Frameworks below, I read the relevant chapter file before answering.

---

## Core Frameworks & Mental Models

**The Layered Blueprint (universal still skeleton).** A prompt is a build order, not a sentence:
`[Subject] [Action/Pose] in [Environment], [Lighting], [Style/Medium], [Camera specs], [Technical params] --no [negatives]`
Earlier words carry more weight — **front-load the signal**.

**The 9-Layer Stack (completeness checklist).** Subject → Action → Setting → Materials → Composition/Framing → Lighting → Style → Color/Mood → Camera/Lens. Write the prompt, then walk the 9 layers and fill any empty slot. (Ch 1–2)

**6 Core Principles.** Specificity is key · strong descriptive keywords · structure matters · keyword weighting (earlier = stronger) · iteration is necessary · think step-by-step. (Ch 1)

**7-Step Build.** Vision → core elements → technical specs → mood → negatives → review → test & iterate. Negatives are step 5, not an afterthought. (Ch 1)

**Master Prompt + Variations.** Each photo category starts from a Master Prompt (general direction with *ranges* of lens/lighting), then specific shots fix one option per layer. Adapt by swapping subject, lighting, lens, or styling — not by rewriting. (Ch 5–6)

**The Analog Imperfection Layer** — the single most reused realism multiplier: lens dirt, scratches, dust, film grain, light leaks, RGB fringing, soft bloom. Add whenever output looks too clean. (Ch 2, Ch 5)

**Signature looks.** Fisheye editorial portrait (extreme distortion + close subject) · flat-lay product (top-down, props, 50mm bokeh, on-image text) · motion-blur-vs-sharp-focus contrast with a stated freeze mechanism (rear-curtain sync flash / slow-shutter panning ~1/40s). (Ch 5–6)

**Parameters dial the look.** `--ar` ratio · `--s` stylize (low=real, high=stylized) · `--c` chaos · `--q` quality · `--seed` lock for consistency · `--style raw` literal · `--no` exclude. **One-variable iteration**: change exactly one thing per generation so the effect is attributable. (Ch 3)

**GPT as Prompt Director.** GPT writes prompts, not images. Define your style once (system prompt), reuse prompt anchors, request 5 single-variable variants, build step-by-step, end with explicit `--no` constraints. (Ch 4)

**Sora = restraint.** Lock the camera, isolate the background, let ONE element move slowly ("only his hand flexes once"; one droplet elongating). Define 5: framing/lens · lighting · motion behavior · texture cues · background. A **companion prompt** = a finished still kept verbatim + 1–2 controlled motions; keep palette/lighting/styling, name what moves & how, imply sound via environment. (Ch 7)

---

## Chapter Index

| # | Title | Key Frameworks |
|---|-------|----------------|
| [ch01](chapters/ch01-prompt-anatomy.md) | Prompt Anatomy — The Layered Blueprint | skeleton, 9-layer stack, 6 principles, 7-step build |
| [ch02](chapters/ch02-element-keyword-library.md) | The Element Keyword Library | per-layer keyword banks, realism baseline |
| [ch03](chapters/ch03-parameters-iteration-troubleshooting.md) | Parameters, Iteration & Troubleshooting | `--ar/--s/--c/--q/--seed/--no`, one-variable loop, fixes |
| [ch04](chapters/ch04-gpt-as-prompt-director.md) | GPT as Visual Prompt Director | prompt engine, anchors, 5 techniques |
| [ch05](chapters/ch05-photoreal-photography-recipes.md) | Photoreal Recipes — Cats, Product, Lifestyle | Master Prompts, fisheye, flat lay, analog layer |
| [ch06](chapters/ch06-adventure-fashion-portraiture-recipes.md) | Adventure, Fashion & Portraiture (Sora companions) | peak action, rear-curtain sync, branded styling |
| [ch07](chapters/ch07-sora-video-prompting.md) | Sora Video Prompting & Image→Video | cinematic restraint, 5-element structure, 6 integration rules |

## Topic Index
- **Analog imperfections / realism** → ch02, ch05
- **Aspect ratio / resolution** → ch03, cheatsheet
- **Branded styling** → ch06, patterns
- **Camera & lens effects** → ch02, ch05
- **Cats / animal prompts** → ch05, ch07
- **Fashion editorial** → ch06
- **Fisheye** → ch05, patterns
- **Flat lay / product** → ch05, patterns
- **GPT prompt generation** → ch04
- **Keyword banks** → ch02
- **Lighting** → ch02, ch05, ch06
- **Master Prompt pattern** → ch05, ch06
- **Motion blur / freeze (rear-curtain sync, panning)** → ch06, patterns
- **Negative prompts** → ch01, ch03
- **Parameters (`--ar/--s/--c/--q/--seed`)** → ch03
- **Portraiture / emotional** → ch06
- **Prompt structure / skeleton** → ch01
- **Sora / video / companion prompt** → ch06, ch07
- **Sports / adventure** → ch06
- **Troubleshooting** → ch03, cheatsheet

## Supporting Files
- [glossary.md](glossary.md) — key terms with definitions
- [patterns.md](patterns.md) — reusable prompting techniques
- [cheatsheet.md](cheatsheet.md) — one-page quick reference

---

## Scope & Limits
This skill covers the four prompt packs only: AI image/video prompt *craft* (structure, keywords, parameters, recipes, Sora). It does not generate images or video itself, and parameter syntax (`--s`, `--ar`, etc.) is Midjourney-style — adapt to your actual platform (DALL·E, Stable Diffusion, ChatGPT image, Sora). For current model-specific features, check each tool's own docs.
