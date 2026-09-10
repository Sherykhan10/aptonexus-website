# Website V2 refinement review

## Scope and preservation

This refinement continues the existing website on `feature/full-website-build`. It preserves the approved headline, real project records and verified workflow summaries, existing contact configuration, and How We Work content. No dependencies were added and no project results or client claims were invented.

## Completed implementation

- The navbar and footer use a trimmed transparent brand mark with a text wordmark. Home is available in desktop and mobile navigation.
- Desktop and laptop hero media uses a complete cropped frame with soft edges instead of a hard overlay across the robot's arms. Mobile media is an absolute layer within the hero, with copy and controls sharing the same composition.
- Watch Brand Film opens the existing accessible dialog. A smaller, separately labeled control pauses or resumes the silent hero loop. The standalone homepage film was removed; About retains the film with a full-frame poster.
- Selected Work uses project covers, native scroll snapping, arrows, a counter, keyboard navigation, and links to project pages. It does not autoplay project videos. Published/featured filtering and existing empty-state handling remain data-driven.
- What We Build uses four premium service cards populated from the real services. Intelligence in Motion retains its selectable stages and pause control, with focus and visual polish.
- From Friction to Flow presents five problem/system-response pairs. How We Work remains intact. Eight configurable industry examples describe potential applications rather than past client engagements.
- A global floating WhatsApp action reads the existing enabled contact configuration. Alternating dark and light sections improve homepage rhythm.

## Assets and performance

Approved source media remains intact. The desktop loop derivative is 1,248,210 bytes; the mobile derivative is 372,333 bytes at 624 x 432 and 24 fps. Matching posters support static fallback. The transparent mark is 30,189 bytes. Only one responsive loop source is mounted. Reduced-motion and Save-Data preferences prevent automatic background video mounting; full films mount only while their dialog is open.

## Review evidence

The resumed refinement included desktop, laptop, tablet, and phone reviews from 320px to 1600px. Hero framing and mobile media cleanup were iterated during those checks. The final desktop framing was reviewed at 1280px and the cleaned mobile asset at 390px. No persistent horizontal page overflow was observed.

Interaction checks covered mobile navigation and Home, film dialog opening and Escape/focus restoration, background pause/resume, carousel arrows/counter and Home/End keys, a project-page link, workflow selection and pause, and the configured WhatsApp URL. The About poster was visually reviewed without stretching or clipping the full-frame composition. No WhatsApp message was sent.

Reduced-motion and Save-Data code paths were reviewed in source. Runtime preference emulation, physical-device testing, Safari testing, and field performance measurements were not performed. These checks are distinct from the desktop browser responsive review.

Maintenance guidance is updated in ARCHITECTURE.md, BRAND_GUIDE.md, HOW_TO_UPDATE.md, and PROJECTS_GUIDE.md. Earlier implementation/review documents remain historical records; their public-launch dependencies still apply.

## Final validation

- `npm run lint`: passed with zero warnings.
- `npm run build`: passed, including TypeScript and all 15 generated static pages.
- Production HTTP check: all 13 expected page/metadata routes returned 200, both missing-route checks returned 404, and all 29 public assets returned 200.
- A fresh production browser attachment timed out after the final interruption. The visual/interaction evidence above comes from the preceding resumed review; the final production verification was HTTP-based.
- Changes remain local on the requested branch. No commit or push was performed.

## Approved surface-system polish — September 8, 2026

The approved V2 structures are preserved. Shared primary, secondary, and card neutrals now use #EDF0E7, #E5EADF, and #F4F6F0 across the homepage, Services, Work and all project routes, Process, About, Contact, Privacy, and Terms. Supporting light panels read the same tokens. The capability block uses a static 48px secondary-to-primary blend; FAQ has a full-width secondary wrapper around its unchanged grid and disclosures. Dark section boundaries use faint tinted one-pixel rules.

The capability intro's generic section class previously won the desktop cascade, applying 88px on both sides. A more specific selector now applies 32px above and 28px below on desktop, 28px/24px on tablet, and 24px on phones. The four links remain, with 18px strip padding and a minimum 44px link height.

WhatsApp changed only in the central runtime configuration; its default message is unchanged. Stale duplicated contact numbers in guidance now refer to that configuration. Browser checks verified the new URL in the floating action, footer, Contact page, Start a Project launcher, and mobile navigation. No message was sent.

All requested widths (1440, 1280, 1024, 768, 430, 390, 375) retained four capability links with no horizontal page overflow. Primary route checks confirmed the shared background and updated contact URLs. Ink, muted, and dark accent text meet AA on the three light surfaces, with a minimum measured contrast of 4.88:1. Process metadata now uses the muted token. Final lint passed with zero warnings; final build passed TypeScript and all 15 static pages. No commit or push was performed.

## Final cohesive palette and contact verification — September 8, 2026

This final pass supersedes the preliminary surface colors above. The shared system uses black #080B08, dark #0D120D, soft graphite #141A14, deep sage #CBD3C5, sage #DDE3D8, soft sage #E8ECE4, and light cards #F0F3ED. Text uses #101510 and #F5F7F2. Selected Work now has a full-width surface wrapper; existing project content and carousel behavior are preserved. Static 56px edge gradients and faint one-pixel rules soften section boundaries; dark edges mix 8% deep sage into their own surface. No animation, blur, media overlay, or additional section height was introduced.

The stale contact-check assertion now reads the central site configuration. Old-number remnants were found in that local check script and generated Next.js development/cache files, which were cleared and regenerated. A final search of source, documentation, local checks, and generated output found no old-number matches. Runtime checks confirmed the configured URL on every major page, plus the Contact page, footer, floating action, mobile navigation, and Start a Project dialog. The configured message is unchanged; no external message was sent.

Final homepage overflow checks passed at 1600, 1440, 1366, 1280, 1024, 820, 768, 430, 390, 375, and 320px. Desktop section boundaries, narrow mobile hero, mobile carousel advancement, and mobile contact dialog were visually reviewed. All major page routes retained the shared sage background and correct WhatsApp URL. Ink, muted, and dark accent text on all four light surfaces meet AA, with a minimum computed ratio of 4.88:1. This is browser responsive testing, not physical-device or comprehensive assistive-technology certification.

Final npm run lint and npm run build both passed without warnings or errors; the build generated all 15 static pages. Existing reduced-motion and media behavior were preserved. No commit or push was performed.
