import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { PageHero, CTASection } from "@/components/sections/sections";
import { MediaImage } from "@/components/media/media-image";
import { VideoPlayer } from "@/components/media/video-player";
import { Icon } from "@/components/ui/icon";
import { pageMetadata } from "@/lib/metadata";
import { WorkflowSummary } from "@/components/projects/workflow-summary";
const published = projects.filter((p) => p.status === "published");
export const dynamicParams = false;
export function generateStaticParams() {
  return published.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = published.find((p) => p.slug === slug);
  if (!p) notFound();
  return pageMetadata(
    p.title,
    p.shortDescription,
    `/work/${p.slug}`,
    p.cover ?? null,
  );
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = published.find((p) => p.slug === slug);
  if (!project) notFound();
  const next =
    published.length > 1
      ? published[(published.indexOf(project) + 1) % published.length]
      : undefined;
  return (
    <main id="main">
      <PageHero
        label={`${project.category} / PROJECT DEMONSTRATION`}
        title={project.title}
        description={project.shortDescription}
      />
      <section className="section container">
        <div className="project-detail-intro">
          <div>
            <p className="eyebrow">THE SYSTEM</p>
            <h2 className="mt-6">What it does.</h2>
            {!!project.technologies?.length && (
              <div className="project-tags">
                {project.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
          </div>
          <div>
            <p>{project.description ?? project.shortDescription}</p>
            <WorkflowSummary stages={project.workflowSummary} />
            {project.solution && <p className="mt-6">{project.solution}</p>}
          </div>
        </div>
        {!!project.workflow?.length && (
          <div className="project-workflow">
            <h2>The demonstrated workflow</h2>
            <ol>
              {project.workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        )}
        {(project.video || project.embedUrl) && (
          <div className="project-video">
            <h2>See the demonstration.</h2>
            {project.video && (
              <VideoPlayer
                src={project.video}
                poster={project.cover}
                captions={project.captions}
                title={project.title}
                description={project.description ?? project.shortDescription}
              />
            )}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              {!project.captions && (
                <p className="small muted mb-0">
                  The written workflow above describes the visible system
                  behavior. Full reviewed speech captions are not yet available.
                </p>
              )}
              {project.externalUrl && (
                <a
                  className="text-link inline-flex items-center gap-1.5"
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch demo on LinkedIn
                  <Icon name="diagonal" />
                </a>
              )}
            </div>
            {project.embedUrl && (
              <div className="project-embed-wrapper mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-heading text-lg font-bold mb-3">
                  Original LinkedIn Post & Demonstration
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Watch directly on LinkedIn:{" "}
                  <a
                    href={project.externalUrl ?? project.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandPurple font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>{project.externalUrl ?? "https://lnkd.in/p/dDYwRhKc"}</span>
                    <Icon name="diagonal" />
                  </a>
                </p>
                <div className="flex justify-center bg-slate-900/5 rounded-2xl p-4 sm:p-6 overflow-hidden">
                  <iframe
                    src={project.embedUrl}
                    height="560"
                    width="504"
                    frameBorder="0"
                    allowFullScreen
                    title={`${project.title} demonstration on LinkedIn`}
                    className="w-full max-w-126 rounded-xl shadow-md border border-slate-200"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {!!project.images?.length && (
          <div className="gallery">
            {project.images.map((img) => (
              <figure key={img.src}>
                <div className="gallery-image">
                  <MediaImage src={img.src} alt={img.alt} />
                </div>
                <figcaption>{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        )}
        {!!project.metrics?.length && (
          <div className="outcome-grid mt-12">
            {project.metrics.map((m) => (
              <article key={m.label}>
                <h3>{m.value}</h3>
                <p>{m.label}</p>
                <p className="small">Evidence: {m.source}</p>
              </article>
            ))}
          </div>
        )}
        <div className="project-source">
          <p>
            This is a recorded project demonstration. It does not establish a
            client engagement, production deployment, or measured business
            results.
          </p>
          {project.externalUrl && (
            <a
              className="text-link"
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn source
              <Icon name="diagonal" />
            </a>
          )}
        </div>
        <div className="project-source">
          <Link href="/work" className="text-link">
            ← All projects
          </Link>
          {next && (
            <Link className="text-link" href={`/work/${next.slug}`}>
              Next: {next.title}
              <Icon />
            </Link>
          )}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
