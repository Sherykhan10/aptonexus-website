import Link from "next/link";
import { Project } from "@/content/projects";
import { Icon } from "@/components/ui/icon";
import { MediaImage } from "@/components/media/media-image";
import { WorkflowSummary } from "./workflow-summary";
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/work/${project.slug}`}
        className="project-image-link"
        aria-label={`View ${project.title}`}
      >
        <div className="project-image">
          <MediaImage
            src={project.cover}
            alt={`${project.title} workflow demonstration`}
            sizes="(max-width: 760px) 100vw, 60vw"
          />
          <span className="project-view">
            View Project
            <Icon name="diagonal" />
          </span>
        </div>
      </Link>
      <div className="project-info">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p>{project.shortDescription}</p>
          <WorkflowSummary stages={project.workflowSummary} />
        </div>
        <span className="project-index">
          /{String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}
