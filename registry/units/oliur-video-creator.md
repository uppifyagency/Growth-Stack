# oliur-video-creator

## D-030 1. Video script in read-to-camera format
- ask: "Write my review video script formatted so I can read it to camera."
- inputs: the video idea and topic blocks (e.g. screen, battery, camera), plus title ideas.
- data: Notion.
- upstream: none
- downstream: feeds the A-roll shoot (2) and the B-roll list (3).
- depth: full

### steps
1. Capture the idea on a Notion Kanban (Ideas → In Progress → Uploaded). [chapters/ch02-scripting-preproduction.md]
2. Create the video page with sections for title ideas, thumbnail variations, sponsor info, post-upload checklist, description, and script. [chapters/ch02-scripting-preproduction.md]
3. Structure the script as Intro → Main → Outro. [chapters/ch02-scripting-preproduction.md]
4. In Main, use one sentence per line and an H3 heading per topic block. [chapters/ch02-scripting-preproduction.md]
5. Bold the to-camera lines. The rest is read off the iPad and covered by B-roll. [chapters/ch02-scripting-preproduction.md, chapters/ch04-editing-thumbnails-titles.md]
6. Write conversationally, "as if talking to a friend". Choose full script, bullets, or a mix per video. [chapters/ch02-scripting-preproduction.md]
### criteria
- It has Intro, Main and Outro sections. [chapters/ch02-scripting-preproduction.md]
- Main has one sentence per line. [chapters/ch02-scripting-preproduction.md]
- Each topic block has an H3 heading. [chapters/ch02-scripting-preproduction.md]
- At least one line is bolded as to-camera. [chapters/ch02-scripting-preproduction.md]
- There is no essay-style or formal register. [chapters/ch02-scripting-preproduction.md]
- The template sections (titles, thumbnails, sponsor, checklist, description) exist. [chapters/ch02-scripting-preproduction.md]

## D-031 2. A-roll shoot setup
- ask: "Set up my talking-head shot: scene, lights and camera settings."
- inputs: the camera (Sony mirrorless or iPhone), lenses, lights, room, and mic.
- data: camera menus.
- upstream: script (1), gear kit (6)
- downstream: footage for the edit (4).
- depth: full

### steps
1. Build a frictionless, always-ready space. [chapters/ch03-camera-shooting.md]
2. Clean the scene before recording: a tidy, colour-coordinated background with nothing behind the head. Shoot into a corner and kill natural light. [chapters/ch03-camera-shooting.md, chapters/ch06-iphone-workflow.md]
3. Light with 3 lights: a key close to the face (grid + dome) plus warm and bluish accents behind. On iPhone, a softbox key. [chapters/ch03-camera-shooting.md, chapters/ch06-iphone-workflow.md]
4. Frame with the head in the top third. [chapters/ch03-camera-shooting.md]
5. Camera on Sony: 4K, Manual, 24fps, S-Log3, 4:2:2 10-bit 100Mbps, shutter ≈2× fps, lowest aperture, base ISO, WB 5600K matched to the lights. On iPhone: 4K 30/24, HDR off, grid on, Preserve Settings on, 1× lens. [chapters/ch03-camera-shooting.md, chapters/ch06-iphone-workflow.md]
6. Audio: a close mic (DJI Mic default) and a treated room, never the on-camera mic. [chapters/ch05-gear-lenses-audio.md]
### criteria
- The shutter value is ~2× the frame rate. [chapters/ch03-camera-shooting.md]
- WB matches the light's Kelvin. [chapters/ch03-camera-shooting.md]
- ISO is at base. [chapters/ch03-camera-shooting.md]
- On iPhone, HDR Video is OFF. [chapters/ch06-iphone-workflow.md]
- The head is in the top third, not centred. [chapters/ch03-camera-shooting.md]
- Natural light is excluded (blinds and door). [chapters/ch03-camera-shooting.md]
- The mic is off-camera and close. [chapters/ch05-gear-lenses-audio.md]
- Nothing sits directly behind the head. [chapters/ch03-camera-shooting.md]

## D-032 3. B-roll shot list
- ask: "Make me a B-roll shot list for this product video."
- inputs: the edited A-roll (or the script with to-camera vs read lines), the product, and accessories.
- data: the A-roll edit.
- upstream: A-roll (2)
- downstream: the edit (4).
- depth: full

### steps
1. Edit the A-roll first, then list the shots it needs. [chapters/ch03-camera-shooting.md]
2. Mark every cut and every read-off-iPad section as a B-roll cover point. [chapters/ch04-editing-thumbnails-titles.md]
3. Set the camera to 60fps, shutter ~125, ~70mm. On iPhone, mix 1×/2×/3× at 60fps and lock AE/AF, pulling exposure down. [chapters/ch03-camera-shooting.md, chapters/ch06-iphone-workflow.md]
4. Build the scene in layers (desk mat, books, headphones), lit with 2 lights (key opposite the camera + tube). [chapters/ch03-camera-shooting.md]
5. Plan the coverage moves: tripod pans, handheld (camera to chest, sway), close-ups, a reflection-reveal. [chapters/ch03-camera-shooting.md]
6. Replicate shots admired from film or TV. Wipe the product with microfiber before each shot. [chapters/ch03-camera-shooting.md]
### criteria
- Every A-roll cut or read section maps to ≥1 shot. [chapters/ch04-editing-thumbnails-titles.md]
- Each shot has a frame rate (60fps) and a focal length or lens. [chapters/ch03-camera-shooting.md, chapters/ch06-iphone-workflow.md]
- Each shot names a move (pan, handheld, close-up, reveal). [chapters/ch03-camera-shooting.md]
- The scene lists foreground and background props. [chapters/ch03-camera-shooting.md]
- The lighting is 2 lights. [chapters/ch03-camera-shooting.md]

## D-033 4. Edit and grade checklist
- ask: "Give me an editing checklist for this video in Final Cut."
- inputs: A-roll and B-roll footage (S-Log/Apple Log/iPhone), a LUT, and music.
- data: Final Cut Pro and a LUT file (the premium LUTs are not in the source).
- upstream: A-roll and B-roll (2, 3)
- downstream: packaging (5), upload.
- depth: full

### steps
1. Create folders for A-Roll, B-Roll, cache, and render. [chapters/ch04-editing-thumbnails-titles.md]
2. Wrap the A-roll in a compound clip, and level the audio to -6 to -12 dB (dual mono) inside it. [chapters/ch04-editing-thumbnails-titles.md]
3. Apply the preset stack (Color Wheels + Hue/Sat Curves + Color Curves + Custom LUT ~25%, ~30% for iPhone). Push highlights so the face reads 60-75 on the Luma waveform. [chapters/ch04-editing-thumbnails-titles.md, chapters/ch06-iphone-workflow.md]
4. For Apple Log: set Camera LUT to None, add the Custom LUT, and put Color Wheels above it. [chapters/ch07-monetisation-bonus.md]
5. Cut tight with no gaps, and lay B-roll over the cuts. [chapters/ch04-editing-thumbnails-titles.md]
6. Slow 60fps B-roll with Automatic Speed (F5) and mute it. [chapters/ch04-editing-thumbnails-titles.md]
7. Monitor on wired headphones, and export H.264. [chapters/ch04-editing-thumbnails-titles.md]
### criteria
- Dialogue peaks fall between -6 and -12 dB. [chapters/ch04-editing-thumbnails-titles.md]
- Face luma is 60-75. [chapters/ch04-editing-thumbnails-titles.md]
- The LUT opacity is ~25% (~30% for iPhone). [chapters/ch04-editing-thumbnails-titles.md, chapters/ch06-iphone-workflow.md]
- Color Wheels sit above the LUT in the stack. [chapters/ch07-monetisation-bonus.md]
- No visible jump cut is left uncovered. [chapters/ch04-editing-thumbnails-titles.md]
- The export is H.264. [chapters/ch04-editing-thumbnails-titles.md]

## D-034 5. Packaging (title + thumbnail)
- ask: "Give me a title and thumbnail for my review."
- inputs: the video content and the channel's existing thumbnail style.
- data: none.
- upstream: script (1), edit (4)
- downstream: upload.
- depth: partial

### steps
1. Think of the title early, in pre-production. [chapters/ch04-editing-thumbnails-titles.md]
2. Write a title that is engaging and accurate, not clickbait. [chapters/ch04-editing-thumbnails-titles.md]
3. Make the thumbnail simple, using a clean product shot or screen-grab for reviews. [chapters/ch04-editing-thumbnails-titles.md]
4. Borrow a style, then make it consistent and your own. [chapters/ch04-editing-thumbnails-titles.md]
### criteria
- Every claim in the title is delivered in the video. [chapters/ch04-editing-thumbnails-titles.md]
- The thumbnail matches the channel's recurring style. [chapters/ch04-editing-thumbnails-titles.md]
- The thumbnail is not a wholesale copy of another creator's. [chapters/ch04-editing-thumbnails-titles.md]

## D-035 6. Gear kit recommendation
- ask: "Which lens and mic should I buy for my videos?"
- inputs: budget, content type, the aperture/blur wanted, prime vs zoom, travel needs, and the room.
- data: current prices and specs.
- upstream: none
- downstream: A-roll (2), B-roll (3).
- depth: full

### steps
1. Answer the 5 lens questions: budget, content, aperture, prime vs zoom, travel. [chapters/ch05-gear-lenses-audio.md]
2. Map them to the lens-by-scenario table (28-75/28-70 f/2.8 as the one-lens starter; 24mm f/1.4 for intimate A-roll; 17-28 for tight spaces; 70-200 for far subjects). [chapters/ch05-gear-lenses-audio.md]
3. Reject variable-aperture zooms and unneeded macro or G Master glass. [chapters/ch05-gear-lenses-audio.md]
4. Pick audio: DJI Mic by default, or step up to XLR + pencil mic or a dynamic podcast mic. Treat the room. [chapters/ch05-gear-lenses-audio.md]
5. Prioritize scene, light and audio over the camera body. [chapters/ch01-intro-foundations.md]
### criteria
- All 5 questions are answered. [chapters/ch05-gear-lenses-audio.md]
- No variable-aperture zoom is recommended. [chapters/ch05-gear-lenses-audio.md]
- Face shots use 50-100mm, or the warping trade-off is stated. [chapters/ch05-gear-lenses-audio.md]
- The audio item comes before any camera upgrade. [chapters/ch01-intro-foundations.md]
- The plan includes a room-treatment step. [chapters/ch05-gear-lenses-audio.md]

## D-036 7. Sponsorship readiness + rate card
- ask: "Am I ready for sponsors, and what should I charge?"
- inputs: subscribers, catalog size, niche, persona, contact method, and audience wealth.
- data: channel analytics.
- upstream: catalog of videos
- downstream: monetisation (overlaps ali-abdaal-youtuber 8).
- depth: full

### steps
1. Check the 5 prerequisites: grown audience, catalog, clear niche, clean persona, easy contact. [chapters/ch07-monetisation-bonus.md]
2. Let sponsors come to you rather than chasing them. [chapters/ch07-monetisation-bonus.md]
3. Price a 60s integration at ~$1,500 per 100k subs, adjusted up for a richer niche. [chapters/ch07-monetisation-bonus.md]
4. Negotiate everything, and compare rates with similar-sized creators. [chapters/ch07-monetisation-bonus.md]
5. Diversify into digital and physical products, affiliates, and client work to build an owned list. [chapters/ch07-monetisation-bonus.md]
### criteria
- All 5 prerequisites are marked yes/no. [chapters/ch07-monetisation-bonus.md]
- The rate shows the per-100k-subs calculation. [chapters/ch07-monetisation-bonus.md]
- Contact is reachable from the profile. [chapters/ch07-monetisation-bonus.md]
- ≥1 non-sponsor stream is planned. [chapters/ch07-monetisation-bonus.md]
