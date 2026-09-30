"use client";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { MediaImage } from "@/components/media/media-image";

export function SelectedWorkCarousel({ projects }: { projects: Project[] }) {
  return (
    <div className="demo-marquee-outer">
      {/* Animated flex track — duplicated for seamless infinite scroll */}
      <div className="demo-marquee-track animate-marquee hover:[animation-play-state:paused]">
        {/* First set */}
        {projects.map((project, index) => (
          <div key={`proj-1-${project.slug}`} className="demo-card-wrapper group">
            {/* Neon green accent — bottom-right corner */}
            <div className="demo-card-green" />
            {/* Purple depth layer — offset down-left */}
            <div className="demo-card-purple" />
            {/* Main dark card */}
            <article className="demo-card-main">
              {/* Image / cover area */}
              <Link
                href={`/work/${project.slug}`}
                className="demo-card-cover"
                tabIndex={-1}
                aria-hidden="true"
              >
                {/* Badge */}
                <span className="demo-card-badge">
                  {String(index + 1).padStart(2, "0")} / DEMONSTRATION
                </span>
                {project.cover ? (
                  <MediaImage
                    src={project.cover}
                    alt={`${project.title} workflow demonstration`}
                    sizes="320px"
                  />
                ) : (
                  <div className="demo-card-cover-placeholder" />
                )}
              </Link>
              {/* Text content */}
              <div className="demo-card-copy">
                <h3>
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.shortDescription}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="demo-card-cta"
                >
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        ))}
        {/* Duplicated set for seamless loop */}
        {projects.map((project, index) => (
          <div key={`proj-2-${project.slug}`} className="demo-card-wrapper group">
            <div className="demo-card-green" />
            <div className="demo-card-purple" />
            <article className="demo-card-main">
              <Link
                href={`/work/${project.slug}`}
                className="demo-card-cover"
                tabIndex={-1}
                aria-hidden="true"
              >
                <span className="demo-card-badge">
                  {String(index + 1).padStart(2, "0")} / DEMONSTRATION
                </span>
                {project.cover ? (
                  <MediaImage
                    src={project.cover}
                    alt={`${project.title} workflow demonstration`}
                    sizes="320px"
                  />
                ) : (
                  <div className="demo-card-cover-placeholder" />
                )}
              </Link>
              <div className="demo-card-copy">
                <h3>
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.shortDescription}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="demo-card-cta"
                >
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>

    </div>
  );
}
