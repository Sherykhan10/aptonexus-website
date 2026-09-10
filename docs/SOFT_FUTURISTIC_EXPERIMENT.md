# Soft futuristic experiment

This is a local visual experiment on `codex/soft-futuristic-experiment`. No commit, push, or deployment is part of this task.

## V2 preservation
The pre-experiment tracked and nonignored untracked files were copied byte-for-byte to `.cache/v2-exact-backup` before implementation. This includes the uncommitted V2 components and public media. The backup is ignored by Git. Old public media remains in place. Restore source files from that snapshot to recover V2; do not use a Git reset because the approved V2 included uncommitted work.

## Visual system
Soft Futuristic AI × Enterprise Trust: main #F1F4EF, soft #E7ECE4, card #F7F9F5, graphite #0A0D0A / #121712, text #101410, muted #5C665C. Existing lime #C5F12B remains for buttons; #455C18 is the readable light-surface accent. Transparent original mark is retained with a dark interface wordmark.

Hero is an absolute full-width video plane with left-side readability blending. Tablet and phone use a square crop with top/bottom feathering, below the copy as an integrated depth layer. Face and headline do not overlap. Small phones require scrolling to see the complete figure and motion controls.

Homepage rhythm: luminous hero → sage capabilities → soft service cards → graphite Intelligence in Motion → light Selected Work → dark Friction to Flow → light process → deep sage industries → sage FAQ → dark CTA/footer. Shared page-hero and surface tokens align Services, Work, Process, About and Contact without changing information architecture.

## Media
Source: Robot_speaking_and_gesturing_1080p_202609081414.mp4, retained in Downloads outside Git. Eight seconds, 1920×1080, H.264 at 24 fps, stereo AAC. Robot is right-aligned with clean left negative space; hand gestures stay within the desktop frame. The mobile crop removes empty left space without changing the character. The original closing pose differs from the opening pose; silent derivatives use a 0.4-second tail-to-head dissolve to soften the reset (not a mathematically seamless animation).

`soft-hero-desktop.mp4` is 1440×810; `soft-hero-mobile.mp4` is 640×640. Both are H.264/yuv420p with fast-start metadata and no audio stream. Posters use the open gesture at 2 seconds. Source speech has not been editorially transcribed or approved; no new speech action is introduced. Existing Watch Brand Film remains user-controlled and the About brand film is unchanged.

Existing HeroMedia retains muted autoplay, inline loop, pause/resume, preload none, reduced-motion and Save-Data poster fallback. Only the selected size mounts. No added runtime packages or remote fonts. Core Web Vitals require production measurement; local checks do not establish field scores.

## Review
Screenshots and viewport checks: `.cache/soft-previews`. Widths: 1600, 1440, 1366, 1280, 1024, 820, 768, 430, 390, 375, 320. No horizontal overflow in the first full pass; all mounted background videos were muted and selected the expected derivative. Final visual checks and lint/build results are reported in the task response.

ESLint now excludes `.cache/**` so local media tooling, backup source trees, and preview scripts are not linted as application source.

Final validation: `npm run lint` passed; `npm run build` passed with all 15 static pages generated. All five aligned inner routes returned 200 without horizontal overflow. Reduced motion mounted zero hero videos and showed the poster; pause, modal opening and Escape closing passed. Final derivatives: desktop 535,356 bytes; mobile 294,037 bytes; posters 28,378 / 18,052 bytes. Production preview: http://127.0.0.1:3000.
