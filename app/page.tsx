import { Hero } from "@/components/sections/hero";
import {
  Capabilities,
  ServicesSection,
  Outcomes,
  ProcessSection,
  FAQ,
  CTASection,
} from "@/components/sections/sections";
import { WorkflowDiagram } from "@/components/sections/workflow-diagram";
import { SelectedWork } from "@/components/sections/selected-work";
import { IndustriesGrid } from "@/components/sections/industries-grid";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Capabilities />
      <ServicesSection />
      <WorkflowDiagram />
      <SelectedWork />
      <Outcomes />
      <ProcessSection />
      <IndustriesGrid />
      <FAQ />
      <CTASection />
    </main>
  );
}
