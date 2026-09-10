# How to update

Read `../AGENTS.md`, `ARCHITECTURE.md`, and the relevant content/evidence guides first. The full website is implemented. Routine business updates should change data rather than duplicate facts in React components. Run lint and build after meaningful changes.

| Task | Entry point |
| --- | --- |
| Add a project | Add a verified record to `content/projects.ts`; published records automatically appear at `/work/[slug]` and in Work. See `PROJECTS_GUIDE.md`. |
| Feature a project | Set `featured: true` on a published record. The homepage carousel iterates every eligible record in source order; no component edits or fixed project count are required. |
| Add/change a service | Update `content/services.ts`. Service sections, footer links, inquiry options, and schema read this collection. |
| Change email | Edit `site.contact.email`; shared contact links and the draft composer use it. Synchronize documented facts. |
| Change WhatsApp | Edit `number`, `displayNumber`, and `message` in `site.contact.whatsapp`. `lib/contact.ts` encodes the URL. The global floating action reads the same helper; set enabled to false to remove WhatsApp everywhere. |
| Enable booking | Set `calendar: { enabled: true, provider: "calendly", url: "https://your-verified-booking-url" }`. `cal.com` and `other` are also supported. A third option appears automatically in the dialog, mobile navigation, contact page, and footer. No SDK is needed for a link. |
| Disable booking | Restore `{ enabled: false, provider: null, url: null }`. |
| Change hero copy | Edit `home` in `content/pages.ts`; hero composition is in `components/sections/hero.tsx`. |
| Replace hero/film | Replace approved public derivatives and update `site.brand.heroLoop` / `site.brand.film`. Keep posters, user-controlled sound, and reduced-motion fallback. |
| Add reviewed captions | Add the edited video's English WebVTT path as `project.captions`. The shared player automatically renders a captions track. Caption timings must match the edited derivative, not the private original. |
| Change logo | Replace approved assets in `public/brand/` and update `site.brand`. Set site.brand.mark to the tightly trimmed transparent PNG (currently /brand/aptonexus-mark.png). BrandMark shares the asset across the navbar/footer; keep the wordmark as interface text. Never redraw an unapproved identity. |
| Change colors/type | Update tokens and typography in `app/globals.css`; synchronize `BRAND_GUIDE.md` and check both light and dark contrast. |
| Add/change an industry | Edit `content/industries.ts` (title, icon, text). The grid adapts to the collection; frame entries as potential workflows, never verified clients. |
| Change friction/response pairs | Edit `frictionToFlow` in `content/pages.ts`. |
| Change navigation/FAQ/process | Edit `content/pages.ts`. |
| Change SEO/domain | Edit `site.url`, `site.seo`, and route metadata. Confirm canonicals, sitemap, robots, schema, and social images before deployment. |
| Change social card | Replace `public/og.png` with an approved 1200x630 image; root metadata uses it. Project pages use their own covers. |
| Add analytics | Use `data-contact-channel` and `data-contact-trigger` hooks. Select a provider explicitly, document privacy/consent behavior, and keep secrets server-side. |
| Add real testimonials/client logos | Obtain evidence and publication permission first, then add a structured content collection. None is currently asserted. |
| Finalize legal pages | Replace draft language in `/privacy` and `/terms` after business/legal review. Confirm entity details, hosting, retention, and applicable requirements. |

## Local review
`npm run dev` starts the local preview. `npm run lint` and `npm run build` are required. Review mobile navigation, dialog focus/Escape, service anchors, project pages, media, enabled contact channels, and reduced-motion behavior after relevant changes. Keep changes local until the user authorizes source-control and deployment actions.

## V2 media and featured work
HeroMedia selects site.brand.heroLoop.mobile/mobilePoster below 1100px and mp4/poster above it. Keep both derivatives silent, short, and matched to their poster. Use the final hero art-direction rules in globals.css for composition changes. The mobile MP4 is 624x432 at 24 fps, derived from the approved loop with the small residual embedded wordmark removed from the upper-left background. The desktop derivative is 1040x720. Review the entire loop, including the widest hand gestures, after replacement.

The compact Watch Brand Film trigger and About poster both use VideoPlayer; modal accessibility is centralized in components/ui/dialog.tsx. site.brand.film.poster points to the dedicated 16:9 About frame. Do not restore the standalone film section to the homepage.

A new featured project needs a real cover, concise description, and verified optional workflowSummary in content/projects.ts. Homepage videos are intentionally absent. To review a video, use its project detail route. Homepage service cards use each service's outcome and capabilities fields; full service descriptions remain unchanged.
