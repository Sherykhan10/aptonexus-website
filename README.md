# AptoNexus Website

The full AptoNexus AI automation and custom software website, implemented on the existing Next.js foundation. The design combines the approved cinematic robot footage with light editorial sections, an interactive workflow, and real project demonstrations.

## Stack
Next.js App Router, React, strict TypeScript, Tailwind CSS, Motion, npm, and ESLint. Existing package versions and lockfile are preserved. No environment variables or external accounts are needed for the current website.

## Local development
Requires Node.js 20.9+ and npm (Node.js 24 is used for validation).

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. To validate and serve the production build:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Pages
Home, Services, Work, reusable `/work/[slug]` project pages, Process, About, Contact, Privacy, Terms, and a branded 404. Sitemap and robots routes are included.

Email and WhatsApp are enabled. Start a Project opens a shared accessible dialog. The optional inquiry tool prepares an email draft; it does not submit messages to a backend. Calendar remains disabled but is supported through configuration without a page redesign.

## Maintenance
- [Persistent instructions](AGENTS.md)
- [How to update](docs/HOW_TO_UPDATE.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Business context](docs/PROJECT_CONTEXT.md)
- [Brand guide](docs/BRAND_GUIDE.md)
- [Content guide](docs/CONTENT_GUIDE.md)
- [Projects guide](docs/PROJECTS_GUIDE.md)
- [Project evidence](docs/PROJECT_DETAILS.md)
- [Media inventory](docs/MEDIA_INVENTORY.md)
- [Implementation review and remaining launch items](docs/IMPLEMENTATION_REVIEW.md)

Business configuration lives in `content/site.ts`, services in `content/services.ts`, project evidence-backed records in `content/projects.ts`, and shared narrative content in `content/pages.ts`. Use only approved public media derivatives. Never fabricate client results or expose secrets.

The current task leaves all changes local for review. No commit, push, or deployment has been performed. Legal notices are explicitly drafts; reviewed media captions and final production hosting/performance verification remain launch requirements.
