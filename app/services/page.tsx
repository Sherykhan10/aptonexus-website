import {
  PageHero,
  ServicesSection,
  CTASection,
} from "@/components/sections/sections";
import { WorkflowDiagram } from "@/components/sections/workflow-diagram";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "AI & Software Services",
  "Custom AI agents, workflow automation, AI-powered web and mobile applications, and integrations built around your business.",
  "/services",
);
export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        label="OUR CAPABILITIES"
        title={"Intelligence is useful.\nExecution is everything."}
        description="From the first customer interaction to the systems behind your operations. Build the right combination of AI, automation, and custom software."
      />
      <ServicesSection full />
      <WorkflowDiagram />
      <CTASection />
    </main>
  );
}
