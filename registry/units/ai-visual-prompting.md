# ai-visual-prompting

## D-037 1. Photoreal still prompt
- ask: "Write me an image prompt for X."
- inputs: the vision (subject, use, mood), the target model, and the aspect ratio.
- data: an image model (Midjourney, DALL·E, Stable Diffusion or ChatGPT image).
- upstream: optional style anchors (4)
- downstream: iteration (6), Sora companion (5).
- depth: full

### steps
1. Define the vision. [chapters/ch01-prompt-anatomy.md]
2. Fill the skeleton in order: `[Subject] [Action] in [Environment], [Lighting], [Style], [Camera], [Technical] --no [negatives]`. Front-load the highest-priority element. [chapters/ch01-prompt-anatomy.md]
3. Pull 1-3 keywords per layer from the banks (one technical + one evocative). [chapters/ch02-element-keyword-library.md]
4. Add mood (colour, emotion). [chapters/ch01-prompt-anatomy.md]
5. Add negatives. [chapters/ch01-prompt-anatomy.md]
6. Audit against the 9 layers and fill any empty slot. Add the analog imperfection layer if the target is realism. [chapters/ch01-prompt-anatomy.md, chapters/ch02-element-keyword-library.md]
7. Add parameters (`--ar`, `--s`, `--style raw`, `--seed`). [chapters/ch03-parameters-iteration-troubleshooting.md]
### criteria
- The subject appears in the first clause. [chapters/ch01-prompt-anatomy.md]
- Lighting, Style and Camera layers are present. [chapters/ch01-prompt-anatomy.md]
- All 9 layers are addressed, or the gaps are intentional. [chapters/ch01-prompt-anatomy.md]
- The prompt has no vague adjective without a concrete term. [chapters/ch01-prompt-anatomy.md]
- A `--no` block ends the prompt. [chapters/ch01-prompt-anatomy.md]
- An aspect ratio is set. [chapters/ch03-parameters-iteration-troubleshooting.md]
- The parameter syntax matches the target platform. Scope. [SKILL.md]

## D-038 2. Master Prompt + variation series
- ask: "Create a consistent set of images for my brand or series."
- inputs: the category (product, lifestyle, portrait, fashion, sports, pets), the brand or campaign, the target audience, and the number of shots.
- data: an image model.
- upstream: style anchors (4)
- downstream: Sora companions (5).
- depth: full

### steps
1. Write the Master Prompt: subject + a range of camera/lens + a range of lighting + physical-detail emphasis + background guidance + target mood. [chapters/ch05-photoreal-photography-recipes.md]
2. Derive each shot by fixing one option per layer. [chapters/ch05-photoreal-photography-recipes.md]
3. Vary by swapping one lever (subject, lighting, lens, styling), not by rewriting. [chapters/ch05-photoreal-photography-recipes.md]
4. For action shots, state the freeze mechanism (rear-curtain sync or panning ~1/40s). [chapters/ch06-adventure-fashion-portraiture-recipes.md]
5. Add props and (fictional) brand styling for campaign polish. Keep the brand text short. [chapters/ch06-adventure-fashion-portraiture-recipes.md, patterns.md]
6. Lock the seed for consistency across the set. [chapters/ch03-parameters-iteration-troubleshooting.md]
### criteria
- The Master Prompt contains ranges for lens and lighting. [chapters/ch05-photoreal-photography-recipes.md]
- Each variant differs from the Master in named levers only. [chapters/ch05-photoreal-photography-recipes.md]
- Every action/motion shot names a freeze mechanism. [chapters/ch06-adventure-fashion-portraiture-recipes.md]
- The hero subject is not outnumbered by props. [chapters/ch05-photoreal-photography-recipes.md]
- The same seed or anchor is used across the set. [chapters/ch03-parameters-iteration-troubleshooting.md, chapters/ch04-gpt-as-prompt-director.md]

## D-039 3. Product ad / flat-lay prompt
- ask: "Write an ad image prompt for my product with the tagline on it."
- inputs: the product (material, colour, logo), the brand style, the tagline text, and the target audience.
- data: an image model.
- upstream: none
- downstream: social posts and ads.
- depth: full

### steps
1. Start from the product Master Prompt. [chapters/ch05-photoreal-photography-recipes.md]
2. Shoot top-down, with the product placed diagonally on a named textured surface. [chapters/ch05-photoreal-photography-recipes.md, patterns.md]
3. Add complementary props. [chapters/ch05-photoreal-photography-recipes.md]
4. Use crisp studio lighting with gels, a 50mm lens and creamy bokeh. [chapters/ch05-photoreal-photography-recipes.md]
5. Specify the on-image text layout (top line, bottom line, font style). [chapters/ch05-photoreal-photography-recipes.md]
6. Name the campaign and target audience. [chapters/ch05-photoreal-photography-recipes.md]
### criteria
- The surface material is named. [chapters/ch05-photoreal-photography-recipes.md]
- Product placement and angle are stated. [chapters/ch05-photoreal-photography-recipes.md]
- Lighting and lens are stated. [chapters/ch05-photoreal-photography-recipes.md]
- The on-image text is quoted verbatim and kept short. [chapters/ch05-photoreal-photography-recipes.md, patterns.md]
- The target audience is named. [chapters/ch05-photoreal-photography-recipes.md]
- The prop count leaves the product as the hero. [patterns.md]

## D-040 4. GPT prompt-director system prompt
- ask: "Set up a GPT prompt that writes on-brand image prompts for me."
- inputs: the brand look (tone, lens, light, materials) and the target image model.
- data: an LLM and an image model.
- upstream: none
- downstream: feeds (1, 2, 5).
- depth: full

### steps
1. Define the style once in a system prompt (tone, lens, light setup, materials). [chapters/ch04-gpt-as-prompt-director.md]
2. Write reusable prompt anchors. [chapters/ch04-gpt-as-prompt-director.md]
3. Instruct GPT to build in parts: subject → setting → mood → lens, each in its own paragraph. [chapters/ch04-gpt-as-prompt-director.md]
4. Instruct GPT to return 5 variants with exactly one element changed. [chapters/ch04-gpt-as-prompt-director.md]
5. Require explicit `--no` constraints at the end. [chapters/ch04-gpt-as-prompt-director.md]
### criteria
- The system prompt names tone, lens, light and materials. [chapters/ch04-gpt-as-prompt-director.md]
- ≥1 anchor is defined verbatim. [chapters/ch04-gpt-as-prompt-director.md]
- The variant instruction says one element only. [chapters/ch04-gpt-as-prompt-director.md]
- The output spec ends with `--no`. [chapters/ch04-gpt-as-prompt-director.md]
- It asks GPT for prompts, not images. [chapters/ch04-gpt-as-prompt-director.md]

## D-041 5. Sora companion / video prompt set
- ask: "Turn this image prompt into a Sora video prompt."
- inputs: a finished still prompt, and the single motion wanted.
- data: Sora (or a video model).
- upstream: still prompt (1, 2)
- downstream: video assets.
- depth: full

### steps
1. Keep the still's subject, styling and lighting verbatim. [chapters/ch07-sora-video-prompting.md, chapters/ch06-adventure-fashion-portraiture-recipes.md]
2. Define the 5 elements: framing/lens, lighting, motion behavior, texture cues, background. [chapters/ch07-sora-video-prompting.md]
3. Lock the camera, or state the movement (static, slow tracking). [chapters/ch07-sora-video-prompting.md]
4. Add 1-2 slow, controlled motions, naming what moves and how. [chapters/ch07-sora-video-prompting.md]
5. Add subtle atmospheric motion and set the timing. [chapters/ch07-sora-video-prompting.md]
6. Imply sound through the environment. [chapters/ch07-sora-video-prompting.md]
### criteria
- The styling, palette and lighting text is unchanged from the still. [chapters/ch07-sora-video-prompting.md]
- ≤2 moving elements, each with a named manner. [chapters/ch07-sora-video-prompting.md]
- The camera behavior is stated. [chapters/ch07-sora-video-prompting.md]
- All 5 Sora elements are present. [chapters/ch07-sora-video-prompting.md]
- A timing or pacing word is present. [chapters/ch07-sora-video-prompting.md]
- An environmental sound cue is present. [chapters/ch07-sora-video-prompting.md]

## D-042 6. Iteration and troubleshooting log
- ask: "This image came out wrong, help me fix the prompt."
- inputs: the prompt, the output, the symptom, and the seed.
- data: an image model with seed support.
- upstream: still prompt (1)
- downstream: the reusable prompt library.
- depth: full

### steps
1. Fix the seed. [chapters/ch03-parameters-iteration-troubleshooting.md]
2. Map the symptom to its fix (distorted faces, poor composition, unwanted elements, low detail, wrong style). [chapters/ch03-parameters-iteration-troubleshooting.md]
3. Change exactly one keyword or parameter, regenerate, compare, and keep or revert. [chapters/ch03-parameters-iteration-troubleshooting.md]
4. Try moving the key descriptor to the start. [chapters/ch03-parameters-iteration-troubleshooting.md]
5. Document the prompts that worked for reuse. [chapters/ch03-parameters-iteration-troubleshooting.md]
### criteria
- Each log row changes exactly one variable. [chapters/ch03-parameters-iteration-troubleshooting.md]
- The seed is recorded and held constant. [chapters/ch03-parameters-iteration-troubleshooting.md]
- Each row has a keep/revert decision. [chapters/ch03-parameters-iteration-troubleshooting.md]
- The final prompt is saved. [chapters/ch03-parameters-iteration-troubleshooting.md]
