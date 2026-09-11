# AptoNexus project guidance

Foundation only at initialization. Inspect existing code and the docs before modifying it. Build the real website only when requested with approved assets.

## Business facts
- Brand: AptoNexus; AI automation and custom software company / agency.
- Primary markets: United States and United Kingdom. Secondary: other English-speaking countries.
- Email: contact@aptonexus.com. WhatsApp number and display label are authoritative in `content/site.ts` under `site.contact.whatsapp`; do not duplicate them in components or guidance.
- Current contact methods: WhatsApp and email. Calendar booking is not enabled. Keep future Calendly, Cal.com or other providers configurable without redesigning pages.
- AI Agents & Chatbots: custom 24/7 agents trained on business knowledge for inquiries, lead qualification, support, text/voice interactions and related actions.
- Workflow Automation: end-to-end tool connections reducing repetitive manual work and operational bottlenecks.
- AI-Powered Web & Mobile Apps: full-stack applications with AI designed into the product.
- Custom Integrations: AI, APIs, webhooks and automation pipelines for CRMs, ERPs, inboxes, proprietary apps and existing systems.

## Permanent rules
- Never fabricate clients, testimonials, case-study metrics, business results, awards or certifications.
- Before writing project claims or case studies, consult `docs/PROJECT_DETAILS.md` and project data; never invent missing results.
- Never expose secrets or API keys. Public content files and public assets must never contain secrets.
- Keep business content data-driven in `content/site.ts` and `content/services.ts`; React components must read these sources instead of duplicating facts.
- Keep projects data-driven in `content/projects.ts`. Support zero or any number of projects and future additions without page redesigns.
- Preserve responsive behavior, accessibility, SEO and performance.
- Run `npm run lint` and `npm run build` after meaningful changes; fix failures.
- Update documentation when architecture materially changes. Do not make unnecessary framework migrations or add unnecessary libraries.
- Use US English. Follow `docs/BRAND_GUIDE.md` and `docs/CONTENT_GUIDE.md`.

## Maintenance entry points
Read `docs/PROJECT_CONTEXT.md`, `docs/ARCHITECTURE.md`, `docs/PROJECTS_GUIDE.md` and `docs/HOW_TO_UPDATE.md`. Runtime business configuration is authoritative; synchronize documented facts when they change.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
