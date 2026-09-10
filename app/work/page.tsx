import { CTASection } from "@/components/sections/sections";
import { SelectedWork } from "@/components/sections/selected-work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Selected Work",
  "Explore AptoNexus project demonstrations: invoice processing, LinkedIn automation, and a conversational voice appointment agent.",
  "/work",
);

export default function WorkPage() {
  return (
    <main id="main">
      <SelectedWork all />
      <CTASection />
    </main>
  );
}
