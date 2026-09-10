# Project details and evidence

Reviewed on September 6, 2026. These are supplied project demonstrations, not verified client case studies. `content/projects.ts` is the runtime source of truth. All three records are published/featured to make them eligible for future Work listings, as requested; project UI and reusable `/work/[slug]` routes are now implemented. Evidence limitations below remain authoritative.

## Evidence standard

Review used timestamped frames across the complete recordings at two-second intervals, with full-resolution inspection of key screens and visible embedded captions. Audio is preserved in delivery videos but was not independently transcribed or audited. Claims below concern what the screens demonstrate; spoken promises and interface estimates are not measured results. LinkedIn source pages could not be fetched during preparation. Their supplied URLs are stored as references, never runtime media dependencies.

No client relationship, production deployment, revenue, ROI, time savings, extraction accuracy, engagement improvement, awards, certifications, or testimonials are established. Business names, people, amounts, dates, and records inside the demonstrations must not be presented as clients or business results. No project metrics are populated.

## AI Invoice Processing Automation

- Category: Workflow Automation. Slug: `invoice-processing-automation`.
- Visible demonstration: n8n workflow overview; a Google Drive PDF upload; execution through extraction, logging, and notification nodes; a Google Sheets invoice register; and an invoice confirmation message in Gmail.
- Proposed description: An n8n demonstration connecting incoming PDF invoices in Google Drive to structured invoice extraction, a Google Sheets register, and Gmail receipt confirmation.
- Known workflow: Watch Invoice Folder (fileCreated) → Download Invoice → Extract PDF Text → Extract Invoice Fields with an AI model → Append Invoice Row → Generate Email Body → Send Confirmation Email.
- Identifiable technologies: n8n, Google Drive, Google Sheets, Gmail, OpenAI. A model node is labeled `gpt-5-mini`; this identifies the displayed configuration, not an independently verified model invocation. Avoid locking marketing copy to this model version.
- Useful source moments: 42s intake folder, 66s expanded workflow, 106s completed node path, 108s spreadsheet, 149s confirmation email.
- Local media: `/projects/invoice-processing/cover.webp` (106s), `invoice-upload.webp` (42s), `invoice-register.webp` (108s), `email-confirmation.webp` (149s), and `demo.mp4`.
- Delivery edit: retains source 0–124s and 144–170.201s, omitting inbox browsing and navigation. Browser chrome and Windows taskbar are cropped out. Audio is retained across the edit.
- Eventual page recommendation: show the local demo on user request with controls and the cover as poster. Accompany it with the written workflow. No autoplay with sound.
- LinkedIn source: https://www.linkedin.com/posts/sherykhan10_automation-n8n-artificialintelligence-activity-7498395079804416000-DOtB/
- Missing: actual deployment context, error/retry handling, duplicate prevention, supported PDF layouts, scanned-PDF/OCR behavior, validation rules, throughput, and verified accuracy.
- Do not claim: payment execution, ERP/accounting integration, universal invoice support, compliance, production reliability, or quantified savings. A single visible run and UI timing are not a benchmark.

## AI LinkedIn Automation Agent

- Category: AI Agents / Workflow Automation. Slug: `linkedin-automation-agent`.
- Visible demonstration: n8n's LinkedIn Posting Agent, a request form with topic and target audience, the running generation pipeline, successful workflow notification, and a LinkedIn post with copy and an image.
- Proposed description: A form-driven n8n agent that generates LinkedIn post copy and an image, then publishes the result.
- Known workflow: Post Request Form → Generate Post Copy (Copy Model plus `tavily_search`) → Create Image Prompt (Prompt Model) → Generate Image → Standardize Output → Publish to LinkedIn.
- Identifiable technologies: n8n, OpenAI nodes, Tavily search tool, LinkedIn. Exact model versions and image-generation settings are not established. A DeepSeek browser tab alone does not verify use of DeepSeek in the workflow.
- Useful source moments: 5s node overview, 65s completed form, 108s execution path, 110s success, 140–154s resulting LinkedIn post.
- Local media: `/projects/linkedin-automation/cover.webp` (110s), `request-form.webp` (65s), `generation-workflow.webp` (108s), `published-post.webp` (145s), and `demo.mp4`.
- Delivery edit: full recording, with browser chrome and Windows taskbar cropped out; original audio retained.
- Eventual page recommendation: show the local demo with controls and poster. The locally stored footage demonstrates the workflow without requiring a LinkedIn login.
- LinkedIn source: https://www.linkedin.com/posts/sherykhan10_watch-how-i-built-an-ai-agent-that-automatically-activity-7496585544383037440-3ttH
- Missing: approval process, scheduling, credential scope, retry handling, guardrails, ongoing deployment, source verification, and measured performance.
- Do not claim: automated outreach, messaging, prospect scraping, lead qualification, engagement/revenue gains, unattended scheduled posting, or factual accuracy of generated content. Only form-triggered publishing is shown.

## AI Voice Agent

- Category: AI Agents / Voice AI. Slug: `ai-voice-agent`.
- Visible demonstration: a browser-based Vapi call and transcript collect appointment details, confirm scheduling, retrieve an appointment for a requested date, and confirm cancellation. API documentation shows a booked appointment response. A separate appointment portal exposes Schedule, View, and Cancel tabs. Source code imports FastAPI and SQLAlchemy; the terminal identifies Streamlit.
- Proposed description: A voice appointment-management demonstration using Vapi, a FastAPI backend, and a Streamlit portal, with scheduling, lookup, and cancellation interactions.
- Known workflow: start Vapi browser conversation → collect details → confirm a booking → inspect API appointment response → request a date's appointments → request cancellation → receive verbal/transcript confirmation. Portal UI is shown separately.
- Identifiable technologies: Vapi, Python, FastAPI, Streamlit, SQLAlchemy, and OpenAI (displayed model provider). SQLite is named in embedded captions and an appointments database file is visible, but its engine was not independently inspected. ngrok is visibly used as a development tunnel; it is not a production hosting guarantee. Vapi model presets display Soniox/OpenAI/Vapi selections; these UI labels do not establish measured latency or cost.
- Useful source moments: 70s booking confirmation, 100s API response, 144–164s lookup and cancellation conversation, 201s portal.
- Local media: `/projects/voice-agent/cover.webp` (70s), `cancellation.webp` (164s), `appointment-api.webp` (100s), `appointment-portal.webp` (201s), and `demo.mp4`.
- Delivery edit: ONLY source 10–78s, 90–178s, and 186–208s is retained (178 seconds total). Terminal scenes and taskbar previews are excluded because the source visibly exposes an authentication token. Browser chrome/taskbar are cropped out, and the Vapi account email area is masked in the dashboard footage and corresponding stills. Never substitute the raw video. Security follow-up identified the credential as an ngrok agent authtoken in the VS Code integrated terminal (the ngrok config add-authtoken command). It is clearly visible at the opening, around 81–82s, and again in the closing terminal scenes around 216–230s. Rotate/revoke that ngrok authtoken; its value is intentionally never documented. A scan of working text files, Git index, and reachable Git history found no credential-pattern matches. Raster comparison across every decoded public video frame and all public stills found no matching credential-bearing terminal line, with the source video serving as a positive control. This is a targeted media check and heuristic text scan, not a guarantee against every possible secret. No public asset required regeneration in this follow-up. Unredacted temporary review images were deleted; the original external video was not modified.
- Eventual page recommendation: use only this edited local demo with user-initiated audio and controls. Provide an accessible text account of the interaction; existing burned-in captions are not a complete accessible transcript.
- LinkedIn source: https://www.linkedin.com/posts/sherykhan10_aivoiceagent-aiautomation-voiceai-activity-7485568293001531392-5tZV
- Missing: real telephone integration, production deployment, authentication/access controls, data retention, consent handling, concurrency, supported languages, error handling, and measured reliability. The name displayed on the demo portal does not establish a hospital client relationship. Demo data provenance is not established.
- Do not claim: a real hospital deployment, medical advice, health-data compliance/certification, 24/7 production uptime, actual phone-network calls, validated pricing/latency, or a verified post-cancellation database state. Cancellation is confirmed by the agent on screen; the backend's post-cancellation record is not independently shown.

## Brand and shared media

The supplied 1280 × 1280 PNG is the canonical current logo: white mark and wordmark, lime swoosh and accent, black background, and AI AUTOMATION AGENCY tagline. `/brand/aptonexus-logo.png` preserves the full raster in an optimized PNG; `/brand/aptonexus-logo.webp` is an optimized full-resolution derivative. No icon is traced, no transparency is guessed, and no recoloring is applied. An original SVG may replace the raster later when supplied.

The master MOV is a 67.64-second container with 1920 × 1080, 60 fps HEVC video and AAC audio, approximately 98.95 MB. It shows an animated white robot gesturing on a black/lime stage with AptoNexus branding and a closing logo scene. This is brand artwork, not evidence of a physical robot product.

Delivery files in `/media/`: `aptonexus-brand-film.mp4` (H.264/AAC), `aptonexus-brand-film.webm` (VP9/Opus), `aptonexus-film-poster.webp` (source 8.5s), and `aptonexus-hero-loop.mp4` / `.webm` (silent). Videos use 1280 × 720 at 30 fps, with no color treatment or aspect distortion. The 8-second hero loop uses source 0–8.5s: forward motion from 0.5–8s followed by a 0.5-second dissolve from 8–8.5s into 0–0.5s, joining back to the start. It is an edited loop, not a claim that the master itself loops perfectly.

## Preparation and future use

Original files remain in the supplied external asset directory; none of the source videos were copied into Git. Temporary FFmpeg/FFprobe tools and conversion scripts live under ignored `.cache/`, outside `public/`. Unredacted review frames were deleted during the security follow-up. Do not publish or commit that directory. Web derivatives alone belong in public assets.

FFmpeg settings: H.264 CRF 23 / medium / yuv420p / AAC 80 kbps / faststart; VP9 CRF 33 / zero target bitrate / cpu-used 3 / Opus 64 kbps. Project recordings retain source resolution in the content area (1138 × 506 after cropping x=0, y=100); they are not upscaled. WebP stills use quality 88; logo WebP uses quality 92. Container metadata is stripped from delivery videos. No application dependencies were added for media processing.

Before building video UI, provide controls, poster/loading behavior, descriptive text, and reviewed captions/transcripts for spoken content. Honor reduced motion and constrained data preferences for the hero, and use a static poster where motion is disabled. Do not autoplay all project videos. Exact generated sizes and stream properties are recorded in `MEDIA_INVENTORY.md`.
