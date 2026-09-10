# Prepared media inventory

Sizes use decimal MB (1,000,000 bytes). Generated September 6, 2026. See `PROJECT_DETAILS.md` for evidence and edit decisions.

| Public path | Size | Dimensions | Duration / streams |
| --- | ---: | --- | --- |
| `/brand/aptonexus-logo.png` | 0.432 MB | 1254 × 1254 | Still image |
| `/brand/aptonexus-logo.webp` | 0.030 MB | 1254 × 1254 | Still image |
| `/media/aptonexus-brand-film.mp4` | 14.682 MB | 1280 × 720 | 67.60s; h264; aac |
| `/media/aptonexus-brand-film.webm` | 16.663 MB | 1280 × 720 | 67.60s; vp9; opus |
| `/media/aptonexus-film-poster.webp` | 0.070 MB | 1280 × 720 | Still image |
| `/media/aptonexus-hero-loop.mp4` | 1.564 MB | 1280 × 720 | 8.00s; h264; silent |
| `/media/aptonexus-hero-loop.webm` | 1.885 MB | 1280 × 720 | 8.00s; vp9; silent |
| `/projects/invoice-processing/cover.webp` | 0.037 MB | 1138 × 506 | Still image |
| `/projects/invoice-processing/demo.mp4` | 4.758 MB | 1138 × 506 | 150.20s; h264; aac |
| `/projects/invoice-processing/email-confirmation.webp` | 0.027 MB | 1138 × 506 | Still image |
| `/projects/invoice-processing/invoice-register.webp` | 0.041 MB | 1138 × 506 | Still image |
| `/projects/invoice-processing/invoice-upload.webp` | 0.026 MB | 1138 × 506 | Still image |
| `/projects/linkedin-automation/cover.webp` | 0.043 MB | 1138 × 506 | Still image |
| `/projects/linkedin-automation/demo.mp4` | 7.616 MB | 1138 × 506 | 173.43s; h264; aac |
| `/projects/linkedin-automation/generation-workflow.webp` | 0.041 MB | 1138 × 506 | Still image |
| `/projects/linkedin-automation/published-post.webp` | 0.063 MB | 1138 × 506 | Still image |
| `/projects/linkedin-automation/request-form.webp` | 0.025 MB | 1138 × 506 | Still image |
| `/projects/voice-agent/appointment-api.webp` | 0.029 MB | 1138 × 506 | Still image |
| `/projects/voice-agent/appointment-portal.webp` | 0.026 MB | 1138 × 506 | Still image |
| `/projects/voice-agent/cancellation.webp` | 0.054 MB | 1138 × 506 | Still image |
| `/projects/voice-agent/cover.webp` | 0.054 MB | 1138 × 506 | Still image |
| `/projects/voice-agent/demo.mp4` | 5.530 MB | 1138 × 506 | 178.00s; h264; aac |

All referenced media paths exist. Every image was decoded and every delivery video was fully decoded without FFmpeg errors. MP4 files use faststart. Hero variants have no audio stream. Project and full-film variants retain audio. No source/master video is in public assets.

The full website now consumes these derivatives. `/og.png` (1200 × 630 PNG, approximately 0.85 MB) was added as the branded social card. Reviewed speech-caption files remain pending; the player accepts a future WebVTT track. Current implementation verification is documented in `IMPLEMENTATION_REVIEW.md`.
