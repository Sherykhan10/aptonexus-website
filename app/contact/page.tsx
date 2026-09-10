import { PageHero } from "@/components/sections/sections";
import { ContactGrid } from "@/components/contact/contact-grid";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Start a Project",
  "Talk to AptoNexus about AI agents, workflow automation, custom software, or integrations. Start a conversation by WhatsApp or email.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        label="LET’S TALK"
        title={"A better workflow\nstarts with a conversation."}
        description="Bring the idea, the bottleneck, or the question. Tell us what you’re trying to automate, build, or improve."
      />
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <ContactGrid />
      </section>
    </main>
  );
}
