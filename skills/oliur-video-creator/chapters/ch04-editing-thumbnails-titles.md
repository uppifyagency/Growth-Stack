# Chapter 4: Editing, Thumbnails & Titles

## Core Idea
Editing is a fast, simple, repeatable workflow — organize files, cut the A-roll tight, hide cuts under B-roll, and apply a saved color/LUT preset rather than grading from scratch each time. Packaging (title + thumbnail) should be simple, consistent, representative — never clickbait.

## Frameworks Introduced
- **The file-system structure** — before editing, create folders: **A-Roll**, **B-Roll**, project/library, cache, rendered file. Keeping A-roll and B-roll separate makes clips findable.
- **The compound-clip workflow** (Final Cut Pro) — wrap the imported A-roll in a **compound clip** ("A-Roll"), then do color + audio corrections *inside* it once. Every cut on the main timeline inherits the correction, so you never grade clip-by-clip.
- **The audio level rule**: level dialogue to **between -6 and -12 dB** (raw clips often sit at -12 to -20). Use **dual mono**, disable the duplicate track, raise the level.
- **The color grade preset stack** — a saved bundle of: **Color Wheels + Hue/Saturation Curves + Color Curves + Custom LUT** ("Oliur O1"). Drag onto the clip; keep the LUT around **25%** strength. These only apply to flat S-Log footage.
- **The waveform brightness target** — read the **Luma waveform**: keep **skin/face brightness ~60–75** (background lights naturally sit high). Push **highlights** in color wheels to land the face just below 75 for the cinematic look.
- **The slow-mo shortcut** — assign **Automatic Speed** (Oliur uses **F5**) to conform 60fps clips to a 24fps timeline automatically (drops to ~40%), instead of calculating manually.
- **The seamless B-roll cut** — lay B-roll **over two A-roll clips / over the cut** so the cut is invisible; viewers can't tell when you were reading the script vs. talking to camera.

## Key Concepts
- **The magic of editing**: most "talking to camera" is actually reading off the iPad; B-roll over those sections sells it as seamless. Messing up lines is normal — cut and rejoin tightly, no gap.
- **Cut tight**: cut just before you start talking; rejoin right at the next good take for clean, engaging pacing.
- **Wired headphones only**: never edit on Bluetooth/AirPods — latency makes music sync wrong.
- **Export**: File → Share → Export File, **H.264**, video+audio.
- **Title = engaging but accurate**: representative of the content, never clickbait; titling early gives the video a framework.
- **Thumbnail = simple + consistent**: for product reviews, a clean screen-grab/product shot beats busy designs; a consistent style makes your videos recognizable in the subscription feed.

## Mental Models
- Treat color as a **preset you tweak**, not a fresh grade — drag the bundle, nudge highlights/shadows, done.
- Think of B-roll as **cut-concealer**: it both illustrates and hides edits.
- Editing speed **compounds** with reps + shortcuts — full reviews eventually take 1–2 hours.

## Anti-patterns
- **Grading every clip individually**: skip the compound clip and you redo work endlessly.
- **Bluetooth headphones for editing**: hidden latency wrecks sync.
- **Clickbait titles**: erodes trust and misrepresents the video.
- **Over-the-top editing**: Oliur keeps it deliberately simple — A-roll, B-roll, music.
- **Copying another creator's thumbnail wholesale**: borrow, then add your own consistent style.

## Key Takeaways
1. Organize files (A-roll/B-roll/cache) before importing.
2. Use a compound clip so one color/audio pass applies everywhere.
3. Level dialogue to -6 to -12 dB; grade with a saved Color Wheels + Curves + LUT preset (~25% LUT); face brightness ~60–75 on the Luma waveform.
4. Bind Automatic Speed to a key (F5) for one-tap slow-mo; lay B-roll over cuts to hide them.
5. Titles: accurate + engaging, not clickbait. Thumbnails: simple + a consistent, recognizable style.

## Connects To
- **Ch 3 (Shooting)**: S-Log/60fps footage is what this grade and slow-mo workflow expects.
- **Ch 7 (Bonus LUTs)**: the Apple Log LUT tutorial reuses this color-wheels-before-LUT ordering.
- **Ch 2 (Scripting)**: title/thumbnail ideas originate in the Notion template.
