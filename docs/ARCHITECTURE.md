# Architecture

## Stack and routes
Next.js App Router, React, strict TypeScript, Tailwind CSS, and Motion. The existing dependency versions and lockfile are preserved. TypeScript 6.0.3 and ESLint 9 remain pinned for tooling compatibility. No runtime dependencies were added for the full website.

Implemented routes: `/`, `/services`, `/work`, `/work/[slug]`, `/process`, `/about`, `/contact`, `/privacy`, `/terms`, plus a branded not-found page, `/sitemap.xml`, and `/robots.txt`. Pages are Server Components and prerendered; client boundaries cover navigation, dialogs, media fallbacks, the inquiry composer, workflow selection, and Motion reveals.

## Ownership
- `content/site.ts`: identity, primary markets, contact flags, media references, canonical origin, default SEO.
- `content/services.ts`: service records consumed by sections, navigation links, inquiry options, and structured data.
- `content/projects.ts`: published/featured project records, optional media, workflows, technologies, captions, and evidence-backed metrics.
- `content/pages.ts`: navigation, homepage positioning, friction/response pairs, process, principles, FAQ, illustrative workflow.
- `content/industries.ts`: potential sectors and example workflows, never a client list.
- `components/layout/`: sticky responsive navigation and footer.
- `components/sections/`: page composition and reusable narrative sections.
- `components/projects/`: editorial project cards.
- `components/contact/`: contact launcher/options and local email-draft composer.
- `components/media/`: poster-first video dialog, constrained-data/reduced-motion hero, image fallback.
- `components/ui/`: native dialog wrapper, icons, Motion reveals.
- `lib/contact.ts`: enabled-channel links; `lib/metadata.ts`: route metadata.

## Contact
Start-a-project anchors use `data-contact-trigger` and retain `/contact` as a functional fallback. One shared launcher intercepts ordinary clicks to open a native modal dialog. The dialog traps focus, restores focus, closes on Escape/backdrop, and locks background scrolling. Email and WhatsApp use the centralized configuration. `data-contact-channel` attributes provide future analytics hooks; no tracking is installed.

The contact inquiry form only opens a percent-encoded `mailto:` draft. It has no submission endpoint and does not persist input. The visitor reviews and sends the email in their own app. Calendar links appear automatically in all shared contact options when a valid enabled configuration is provided. No calendar SDK, backend form, or analytics provider is installed.

## Projects and media
Listings filter published records; the homepage additionally filters featured records. Layouts support an empty collection and arbitrary collection sizes. `/work/[slug]` generates static params from published records only; missing, draft, and archived projects return not-found. Optional media, technology, metrics, and next-project sections are conditional. No client or measured-results fields are invented.

Only approved public derivatives are referenced. Full videos mount only after the visitor opens their modal and require explicit playback. Closing unmounts the video. Project pages also provide written workflows and screenshot descriptions. The hero uses the silent optimized MP4, an image poster, a pause control, and reduced-motion/Save-Data detection. CSS handles connector signals and hover effects; Motion handles restrained service reveals. Signals have a pause control.

## Design and SEO
`app/globals.css` owns the shared tokens, layout, responsive behavior, focus styles, and motion preferences. See `BRAND_GUIDE.md`. Responsive layouts replace the horizontal workflow with vertical selectable stages, stack project cards, and use a modal mobile navigation drawer.

`site.url` is the intended canonical origin (`https://aptonexus.com`); confirm it at deployment. Metadata includes canonical URLs, Open Graph/X cards, a 1200x630 `/og.png`, and individual project titles/descriptions/covers. Organization, WebSite, and Service JSON-LD contains only established business facts. Sitemap includes only published projects.

## Development and verification
Run `npm run dev` for local review, `npm run lint`, `npm run typecheck`, and `npm run build` for verification. `npm start` serves the production build. `next.config.ts` disables generated agent-rule edits so Next.js does not modify the project's persistent guidance; developer indicators are also hidden for clean previews. No deployment, commit, or push is part of this implementation.

Public-launch dependencies: reviewed speech captions/transcripts, approved legal notices and entity details, confirmed hosting/canonical origin, and field performance measurement. See `IMPLEMENTATION_REVIEW.md`. Private recordings and temporary media tools stay outside public assets and Git.

The responsive hero rules are consolidated at the end of globals.css. Hero media is an absolute depth layer at every size. At 1100px and above it sits beside the copy with a complete, softly feathered frame; below 1100px the smaller mobile derivative emerges behind the lower copy. Project workflow summaries use the shared WorkflowSummary component and optional project data. See V2_REFINEMENT_REVIEW.md for the current implementation.

## V2 homepage and shared controls
The homepage alternates a dark hero, light capability strip, dark service cards on paper, dark workflow, paper Selected Work, tinted dark friction/response rows, paper process, dark industries, light FAQ, and dark conversion/footer. Principles and the standalone film remain on About instead of repeating on the homepage.

SelectedWork retains the full Work listing and passes featured published data into SelectedWorkCarousel on the homepage. This client component uses native horizontal scroll snapping, previous/next buttons, a live counter, and Left/Right/Home/End keys while the track is focused. It renders cover images and verified workflow summaries only; full project videos remain on project routes. Empty collections show the existing empty state. There is no carousel library or automatic advance.

BrandMark reads site.brand.mark for the transparent navbar/footer icon; the wordmark is interface text. WhatsAppFloatingAction is mounted once in the root layout and reads the existing contactOptions helper. It respects the enabled flag and configured message, uses a brand glyph, and has a safe-area-aware fixed position. Native dialogs occupy the browser top layer above it.

VideoPlayer has a compact hero trigger and the existing large poster trigger. Each instance uses unique dialog/description IDs. The native Dialog owns focus containment, Escape, focus restoration, and scroll locking. The full film is mounted only while open. HeroMedia separately controls the silent background loop, selects one source after checking viewport/reduced-motion/Save-Data, and falls back to its matching poster. The static image is hidden while the video is mounted to prevent ghosting under the edge mask.

Shared surface aliases in globals.css provide the final graphite/smoky-sage palette across routes. SelectedWork and FAQ use full-width surface wrappers around their existing containers. Static 56px boundary gradients and one-pixel tinted rules provide transitions without layout height or animation; see BRAND_GUIDE.md for exact tokens and V2_REFINEMENT_REVIEW.md for validation.

## Soft futuristic visual experiment
See `SOFT_FUTURISTIC_EXPERIMENT.md` for the active local palette, hero asset mapping, V2 backup, and review notes. Shared CSS surface tokens align all routes; hero media uses new silent desktop and square mobile derivatives. Interaction architecture is unchanged. Local `.cache` tools and backups are excluded from ESLint.
