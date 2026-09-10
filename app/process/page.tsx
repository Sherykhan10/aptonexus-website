import {
  PageHero,
  ProcessSection,
  CTASection,
} from "@/components/sections/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our Process",
  "From discovery and system design to development, testing, integration, and refinement. How AptoNexus approaches AI and software projects.",
  "/process",
);
export default function ProcessPage() {
  return (
    <main id="main">
      <PageHero
        label="HOW WE WORK"
        title={"Understand the business.\nThen build the system."}
        description="A clear process keeps the work focused on what matters: the workflow, the people using it, and the result it needs to deliver."
      />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
