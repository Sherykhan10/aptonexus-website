# Brand guide

Design concept: **Cinematic AI × Enterprise Trust**. A near-black cinematic robot hero leads into sage-neutral editorial sections, a dark interactive workflow, real project media, a deliberate process, and a direct contact invitation.

The supplied transparent mark is tightly trimmed and optimized in `public/brand/aptonexus-mark.png`. BrandMark displays it without a background in the navbar and footer, alongside a clean text wordmark. The previous full raster remains archived in public/brand for existing references. Neither mark is redrawn or recolored. The hero and brand-film sections use the approved robot film derivatives. `/og.png` is a 1200x630 social card created from those visual references, not a replacement logo.

## Interface tokens
Colors are visually derived from the supplied white/black/lime identity, not a claim of an official Pantone specification.

| Token | Value | Use |
| --- | --- | --- |
| Black | `#080b08` | Hero, film, CTA, footer |
| Graphite | `#141a14` | Soft dark surfaces |
| Surface | `#1c211b` | Technical panels |
| Light primary / Paper | `#e8ece4` | Main light sections |
| Light secondary | `#dde3d8` | Capability strip, FAQ, supporting panels |
| Light card | `#f0f3ed` | Light cards and form fields |
| Light text | `#f5f7f2` | Text on dark surfaces |
| Ink | `#101510` | Body text |
| Muted | `#4b5548` | Secondary text on light |
| Lime | `#c5f12b` | Primary CTA backgrounds, dark-surface emphasis, active paths |
| Lime ink | `#455c18` | Light-surface accent text and focus outlines |
| Lime bright | `#dcff4f` | CTA hover |
| Lime soft | `#edf5d5` | Reserved light accent |
| Line | `#bdc7b6` | Light section rules |

Typography uses a local system sans stack (Arial/Helvetica/sans-serif), restrained weights, fluid display sizes, and readable line lengths. This avoids remote font requests and font-related layout shifts. Main copy is generally 16px or close to it, with secondary labels smaller. Headlines use tight spacing; body copy uses generous line-height.

Section width is capped at 1320px. Desktop gutters are 56px, tablet 32px, mobile 20px. Homepage sections use approximately 58–88px vertical spacing. Corners stay modest (4–12px); editorial dividers carry more of the structure than cards.

Motion: short CTA/arrow responses, subtle project-image scale, service reveals using Motion, a restrained hero entrance, and optional workflow signals. Hero motion and workflow signals have pause controls. Reduced-motion CSS disables transitions/signals; the hero stays on its poster. No scroll-jacking, sound autoplay, parallax, neon pulsing bubble, or invented dashboards.

Preserve keyboard access, visible focus, responsive target sizes, and dark/light contrast. Do not introduce purple AI gradients, fake proof, stock business portraits, or generic robot artwork.

V2 responsive art direction: the hero uses an integrated absolute media layer below 1100px; phone layout starts at 760px. At 380px and below the header uses logo and menu, with the project CTA in the drawer. Small-screen reveals use a brief opacity change without translation. The previous RESPONSIVE_POLISH_REVIEW.md is historical; see V2_REFINEMENT_REVIEW.md for current review coverage.

V2 rhythm uses substantial dark capability cards, a graphite friction-to-flow section, and a dark industry grid to break up paper sections. Industry copy describes possible workflows without implying client relationships. The primary hero media action is Watch Brand Film; the separate 44px pause/resume button stays quieter. About uses a dedicated uncropped 16:9 frame from the approved brand film, stored at public/media/aptonexus-about-poster.webp.

Final surface polish uses sage-deep #CBD3C5, sage #DDE3D8, sage-soft #E8ECE4, and card-light #F0F3ED. Main editorial pages use sage-soft; the capability block, Selected Work, and FAQ use sage; contact cards and fields use card-light. Dark surfaces are #080B08, #0D120D, and #141A14. Existing light-token names remain aliases to the new surface tokens.

Static 56px tonal fades and faint borders soften section edges without extra layout height, blur, or animation. Dark edge fades mix 8% sage-deep into the section's own dark tone. Capability intro spacing remains 32px/28px on desktop, 28px/24px on tablet, and 24px on phones. The approved component layouts are unchanged.

Ink #101510, muted #4B5548, and accent ink #455C18 meet WCAG AA on all four sage/card surfaces, including the deepest edge tone; the minimum ratio is 4.88:1. Electric lime remains the dark-surface accent.
## Active local experiment
The current experimental branch uses the soft futuristic palette and new hero derivatives described in `SOFT_FUTURISTIC_EXPERIMENT.md`. The V2 descriptions above remain the historical approved baseline. The About film, project data, contact configuration and interaction architecture are preserved.
