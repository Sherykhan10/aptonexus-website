import { PageHero } from "@/components/sections/sections";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacy",
  "Information about this website’s contact features and data handling, with contact details for privacy questions.",
  "/privacy",
);
export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        label="WEBSITE INFORMATION"
        title="Privacy"
        description="A clear starting point for understanding the information you share through this website."
      />
      <article className="section container legal">
        <p className="legal-note">
          Draft for business and legal review. This notice describes the current
          website implementation and must be confirmed before public launch. It
          has not been reviewed by a lawyer.
        </p>
        <h2>Information you choose to share</h2>
        <p>
          You can contact {site.name} through email or WhatsApp. Information you
          send through those channels may include your name, contact details,
          and project requirements. Share only what is needed to start a
          conversation.
        </p>
        <h2>The project inquiry tool</h2>
        <p>
          The inquiry tool prepares an email draft using your device’s email
          application. It does not submit your entries to a website backend or
          store them in browser storage. You decide whether to send the draft.
        </p>
        <h2>External services</h2>
        <p>
          Email, WhatsApp, and linked project sources operate under their own
          terms and privacy practices. Following an external link or sending a
          message moves your interaction to that service.
        </p>
        <h2>Website operation</h2>
        <p>
          This implementation does not include analytics scripts, advertising
          trackers, or a marketing cookie system. Hosting providers may process
          technical request information to deliver and protect the website.
          Provider details and retention practices need to be confirmed for the
          final hosting environment.
        </p>
        <h2>Business handling of inquiries</h2>
        <p>
          The business must confirm the retention period, service providers,
          access practices, and process for responding to data requests before
          this notice is finalized. No certification or jurisdiction-specific
          compliance guarantee is made here.
        </p>
        <h2>Questions</h2>
        <p>
          For privacy questions, email{" "}
          <a href={`mailto:${site.contact.email.address}`}>
            {site.contact.email.address}
          </a>
          .
        </p>
      </article>
    </main>
  );
}
