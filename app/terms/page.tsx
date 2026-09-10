import { PageHero } from "@/components/sections/sections";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Terms",
  "Website information, project demonstration context, and the distinction between website content and an agreed project scope.",
  "/terms",
);
export default function TermsPage() {
  return (
    <main id="main">
      <PageHero
        label="WEBSITE INFORMATION"
        title="Terms"
        description="Context for using this website and exploring the work presented here."
      />
      <article className="section container legal">
        <p className="legal-note">
          Draft for business and legal review. These terms have not been
          reviewed by a lawyer and require final approval before public launch.
        </p>
        <h2>About this website</h2>
        <p>
          This website introduces {site.name}’s AI automation and custom
          software services. Content is provided to help you understand the
          capabilities and begin a project conversation.
        </p>
        <h2>Project demonstrations</h2>
        <p>
          Projects show recorded workflows and visible functionality. They do
          not establish client relationships, production deployments, or
          measured results. Examples do not guarantee the same behavior or
          outcomes in a different business environment.
        </p>
        <h2>Project scope</h2>
        <p>
          Contacting us does not create a services agreement. Deliverables,
          responsibilities, timelines, fees, ownership, support, and any
          project-specific requirements should be set out in a separate written
          agreement.
        </p>
        <h2>Website materials and external links</h2>
        <p>
          Brand and demonstration materials are presented for viewing on this
          website. Contact us before reusing them. External services and linked
          sources have their own terms, and their availability may change.
        </p>
        <h2>Final terms</h2>
        <p>
          The business must confirm its legal entity details and obtain
          appropriate advice on any provisions governing liability, disputes,
          intellectual property, and applicable law. This draft does not
          substitute for that review.
        </p>
        <h2>Contact</h2>
        <p>
          Questions can be sent to{" "}
          <a href={`mailto:${site.contact.email.address}`}>
            {site.contact.email.address}
          </a>
          .
        </p>
      </article>
    </main>
  );
}
