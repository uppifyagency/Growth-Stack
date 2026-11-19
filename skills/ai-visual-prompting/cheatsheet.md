# Cheatsheet — AI Visual Prompting

## Prompt skeleton (fill in order)
`[Subject] [Action/Pose] in [Environment], [Lighting], [Style/Medium], [Camera specs], [Technical params] --no [negatives]`

## 9-layer completeness check
Subject → Action → Setting → Materials → Composition/Framing → Lighting → Style → Color/Mood → Camera/Lens

## 6 principles
Specific · Strong keywords · Structured · Earlier = weighted · Iterate · Step-by-step

## 7-step build
Vision → Core elements → Technical specs → Mood → Negatives → Review → Test & iterate

## Parameters
| Param | Effect |
|---|---|
| `--ar 16:9 / 1:1 / 4:5` | aspect ratio |
| `--s 100` | stylize (low = realistic, high = stylized) |
| `--c 20` | chaos / variation |
| `--q 2` | quality / detail |
| `--seed N` | lock for consistency |
| `--style raw` | literal adherence |
| `--no X` | exclude X |

## Troubleshooting
| Symptom | Fix |
|---|---|
| Distorted faces | `--no deformed features, distorted face` |
| Poor composition | `well-composed, professional photography, balanced composition` |
| Unwanted elements | `--no text, watermarks, signatures` |
| Low detail | `highly detailed, intricate, 4K, 8K, hyperrealistic` |
| Wrong style | name a specific artist/medium |

## Negative-prompt starter
`--no distorted anatomy, text overlays, logos, watermarks, lowres artifacts`

## Aspect ratio → resolution seen in packs
1:1 → 1024x1024 · 16:9 → 1792x1024 · 4:5 vertical → 1080x1350

## Realism multipliers
photorealistic · hyperrealistic · 8k · sharp focus · detailed texture · cinematic lighting · DSLR photo · shot on [camera/lens] · **analog imperfections** (lens scratches, dust, grain, light leaks, RGB fringing)

## Lighting quick-pick
golden/magic hour · blue hour · harsh noon · soft window light · disposable flash · colored gels · backlit silhouette · volumetric rays · Rembrandt / butterfly / split

## Lens quick-pick
16mm fisheye · 24mm wide · 50mm normal · 85mm portrait · 100mm macro · tilt-shift · anamorphic

## Action freeze mechanisms
rear-curtain sync flash · fast flash · slow shutter + panning (~1/40s)

## Sora (video)
Define 5: framing/lens · lighting · **motion behavior** · texture cues · background.
Rule: **locked camera + one slow mover**. Companion = still verbatim + 1–2 controlled motions. Image→video: keep palette/lighting/styling; name what moves & how; set timing; imply sound via environment.
