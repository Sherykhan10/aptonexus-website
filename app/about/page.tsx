import {
  PageHero,
  Principles,
  CTASection,
} from "@/components/sections/sections";
import { BrandFilm } from "@/components/sections/brand-film";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "An AI automation and custom software company connecting intelligence with execution for businesses in the US, UK, and beyond.",
  "/about",
);
export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        label="ABOUT APTONEXUS"
        title={"Technology should move\nyour business forward."}
        description="We bring AI automation and software engineering together to build systems around the way businesses actually work."
      />
      <section className="section container about-intro">
        <h2>
          Intelligence,
          <br />
          put to work.
        </h2>
        <div>
          <p>
            {site.name} is an {site.business}. We build AI agents, workflow
            automations, AI-powered applications, and custom integrations.
          </p>
          <p>
            Our primary markets are the {site.markets.primary.join(" and ")},
            with work also focused on other English-speaking markets.
          </p>
          <p>
            We start with the operational problem. The right solution might be a
            focused automation, an agent connected to existing tools, or a
            complete custom application.
          </p>
        </div>
      </section>
      <BrandFilm />
      <Principles />
      <CTASection />
    </main>
  );
}
