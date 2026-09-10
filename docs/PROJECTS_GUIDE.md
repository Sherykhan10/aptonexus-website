# Projects guide

`content/projects.ts` is the source of truth. The three current records are supplied demonstrations, not verified client engagements. Read `PROJECT_DETAILS.md` before modifying their claims.

## Record contract
Required: `slug`, `title`, `category`, `shortDescription`, `featured`, and `status` (`draft`, `published`, `archived`). Optional: `description`, `challenge`, `solution`, `workflow`, `technologies`, `cover`, `images` (source and alt), `video`, `captions` (reviewed English WebVTT), `externalUrl`, and `metrics` (label, value, evidence source). Client fields are absent because relationships are not verified.

## Rendering
- `/work` lists all published records. The homepage lists published and featured records.
- `/work/[slug]` generates static pages from published records. Missing/draft/archived slugs return the branded not-found page.
- Collections can be empty or contain any number of projects. On /work the first listing item has a wider editorial treatment; later items flow into the grid. On the homepage, SelectedWorkCarousel shows roughly two to three covers on desktop and one on mobile, with native scroll snap, arrows, a counter, and keyboard navigation.
- Workflows, screenshots, videos, technology labels, and metrics render only when populated. Empty metrics never create a metrics section.
- The next-project link wraps through published projects and is hidden for a single-project collection.
- Metadata comes from each record, including its own cover for social sharing. Missing covers omit project social images.

## Current asset mapping
| Slug | Public folder |
| --- | --- |
| `invoice-processing-automation` | `/projects/invoice-processing/` |
| `linkedin-automation-agent` | `/projects/linkedin-automation/` |
| `ai-voice-agent` | `/projects/voice-agent/` |

Each folder includes a cover, supporting WebP screenshots, and edited MP4. Paths are explicit in data, never inferred from slugs. Video uses its cover as poster and loads after the visitor opens it. Playback is user controlled. LinkedIn references are optional source links, not runtime playback dependencies. Never substitute original private recordings for the prepared derivatives.

## Add a project
1. Add a unique, stable URL-safe slug and verified content. Start as `draft` until publication is approved.
2. Put only approved, optimized media in `public/projects/`. Supply descriptive image alt text. Provide reviewed captions matching the edited video and a written workflow.
3. Set `status: "published"`; set `featured: true` for homepage inclusion. Rebuild to generate its route and sitemap entry.
4. Add metrics only with verified context and a public-safe evidence source. Keep confidential evidence out of the repository.
5. Run lint/build and check the route, links, metadata, image fallback, video controls, and mobile layout.

To archive, set `status: "archived"` and `featured: false`, then rebuild. Decide whether a formerly public URL should deliberately return 404 or receive a redirect. Do not remove referenced assets prematurely.

Reviewed speech captions for the current demonstrations remain pending. The implemented `captions` field is ready; written workflows are available now and must not be described as full audio transcripts.

Optional workflowSummary is an array of verified short stages. It renders as a wrapping ordered list on project cards and detail introductions; omit it when a concise, accurate summary is unavailable.

## Homepage carousel
SelectedWork filters status === published and featured === true, preserving content order. Adding Project 4, 5, or any later record needs no layout changes. Zero records render the existing empty message; one record leaves both arrows disabled. Covers link to /work/[slug], with a title link and View Project action. The counter follows the nearest leading card as visitors swipe, scroll, or use the controls. Left/Right/Home/End work when the track itself is focused, preserving ordinary key behavior inside project links. Full demos are not mounted or preloaded in this carousel. Optional missing covers use MediaImage's existing fallback; absent workflowSummary creates no empty list.
