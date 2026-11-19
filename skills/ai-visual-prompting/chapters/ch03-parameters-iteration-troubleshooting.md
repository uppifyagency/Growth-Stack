# Chapter 3: Parameters, Iteration & Troubleshooting

## Core Idea
Once the prompt text is right, platform parameters and a disciplined one-variable iteration loop control the rest — and most "bad outputs" map to a known fix.

## Frameworks Introduced
- **Parameter Controls** (Midjourney-style; adapt per platform):
  - `--ar 16:9 | 1:1 | 4:5` — aspect ratio
  - `--s 100` — stylization (lower = more photorealistic, higher = more stylized); a.k.a. `--stylize`
  - `--c 20` — chaos/variation (higher = more varied interpretations)
  - `--q 2` — quality/detail (higher = slower)
  - `--seed 123456` — fix the seed to keep consistency across iterations
  - `--style raw` — reduce the model's artistic interpretation, hew to the prompt
  - `--no <thing>` — negative prompt / exclusion
- **One-Variable Iteration Loop**: change exactly one element per generation so you can attribute the effect.
  - When to use: every refinement pass after the first draft.
  - How: change one keyword → regenerate → compare → keep or revert.

## Variation Strategies
- Change just one element at a time to isolate its impact.
- Try moving key descriptors to the **start** of the prompt (position = weight).
- Experiment with adding or removing technical terms.
- Test different artistic styles against the same core content.
- Use **seed values** to hold composition steady while changing details.

## Troubleshooting (symptom → fix)
| Symptom | Fix |
|---|---|
| Distorted faces | `--no deformed features, distorted face` |
| Poor composition | add `well-composed`, `professional photography`, `balanced composition` |
| Unwanted elements | negative-prompt them: `text`, `watermarks`, `signatures` |
| Low detail | add `highly detailed`, `intricate`, `4K`, `8K`, `hyperrealistic` |
| Wrong style | be more specific; reference a named artist or medium |

## Negative Prompt Patterns
- Default starter: `--no distorted anatomy, text overlays, logos, watermarks, lowres artifacts`
- Faces: `--no deformed features, distorted face`
- Clean plate: `--no text, --no humans`

## Mental Models
- **Attribution requires isolation** — if you change three things and it improves, you learned nothing reusable.
- **Seed = control variable** — lock it to study everything else; unlock it to explore.
- **Stylize is a dial, not a switch** — push toward 0 for product/realism, up for concept art.

## Anti-patterns
- **Shotgunning many changes per iteration**: improvements aren't reproducible.
- **Treating the first result as final**: prompting is an experimental loop, not a one-shot.

## Key Takeaways
1. Memorize the 6 parameters; they cover 90% of control.
2. One variable per iteration — always.
3. Keep a reusable negative-prompt block on hand.
4. Document prompts that work for future reuse.

## Connects To
- **Ch 1**: the skeleton these parameters terminate.
- **Ch 4**: GPT can generate the one-variable variants for you.
- **cheatsheet.md**: parameter + troubleshooting tables condensed.
