import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { SelectedWorkCarousel } from "./selected-work-carousel";
import { ProjectCard } from "./project-card";
import { Icon } from "@/components/ui/icon";

export function SelectedWork({ all = false }: { all?: boolean }) {
  const visible = projects.filter(
    (p) => p.status === "published" && (all || p.featured),
  );

  if (all) {
    const featuredProject = visible[0];
    const secondaryProjects = visible.slice(1);

    return (
      <section className="max-w-7xl mx-auto px-6 py-20" id="work">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-brandPurple font-bold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brandPurple inline-block" />
            Selected Work
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight text-dark mb-4 leading-tight">
            Less theory.
            <br />
            More working systems.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Explore recorded demonstrations of AI and automation in action. Real
            workflows, connected tools, and a closer look at how each system
            works.
          </p>
        </div>

        {/* Work Showcase Layout */}
        <div className="space-y-16">
          {/* Featured Large Project Card (Top) */}
          {featuredProject && (
            <div className="layered-shadow-card w-full">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 relative">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <Link
                    href={`/work/${featuredProject.slug}`}
                    className="w-full lg:w-3/5 bg-slate-900 rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center border border-slate-800 shadow-inner group"
                    aria-label={`View ${featuredProject.title}`}
                  >
                    {featuredProject.cover ? (
                      <Image
                        src={featuredProject.cover}
                        alt={featuredProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    ) : (
                      <span className="text-slate-500 font-medium text-sm">
                        [ Project Workflow Preview Interface ]
                      </span>
                    )}
                  </Link>

                  <div className="w-full lg:w-2/5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {featuredProject.category}
                        </span>
                        <span className="text-xs font-bold text-brandPurple bg-brandPurple/10 px-3 py-1 rounded-full">
                          01 / Featured
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl lg:text-3xl font-bold text-dark mb-3">
                        <Link
                          href={`/work/${featuredProject.slug}`}
                          className="hover:text-brandPurple transition-colors"
                        >
                          {featuredProject.title}
                        </Link>
                      </h3>
                      <p className="text-slate-600 text-base mb-6 leading-relaxed">
                        {featuredProject.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {(
                          featuredProject.workflowSummary ?? [
                            "PDF / Google Drive",
                            "AI Extraction",
                            "Sheets",
                          ]
                        ).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Link
                        href={`/work/${featuredProject.slug}`}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brandGreen text-dark font-bold px-6 py-3 rounded-full hover:opacity-80 transition-opacity shadow-sm text-sm"
                      >
                        View Project
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2-Column Grid for Secondary Projects */}
          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {secondaryProjects.map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  Media_Preview={project.cover}
                  Category={project.category}
                  Project_Number={String(idx + 2).padStart(2, "0")}
                  Project_Title={project.title}
                  Project_Description={project.shortDescription}
                  Tags={project.workflowSummary ?? []}
                  Project_Link={`/work/${project.slug}`}
                />
              ))}
            </div>
          )}

          {visible.length === 0 && (
            <p className="empty-state text-slate-500 text-center py-12">
              New project demonstrations are being prepared.{" "}
              <Link href="/contact" className="text-brandPurple font-semibold">
                Talk to us about what you want to build.
              </Link>
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="selected-work-surface" id="work">
      <div className="section container selected-work">
        <div className="flowforge-work-header text-center md:text-left flex flex-col md:flex-row items-center md:items-end justify-between mx-auto md:mx-0">
          <div className="text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
            <p className="flowforge-eyebrow">REAL SYSTEMS</p>
            <h2 className="flowforge-heading">See them in action.</h2>
          </div>
          <p className="flowforge-work-sub text-center md:text-left mx-auto md:mx-0">
            Explore how we’ve helped teams build, automate, and scale with AI.
          </p>
        </div>
        {visible.length > 0 ? (
          <SelectedWorkCarousel projects={visible} />
        ) : (
          <p className="empty-state">
            New project demonstrations are being prepared.{" "}
            <Link href="/contact">
              Talk to us about what you want to build.
            </Link>
          </p>
        )}
        <div className="work-bottom">
          <span>Recorded demonstrations. Real workflows.</span>
          <Link href="/work" className="text-link">
            Explore all work
            <Icon name="diagonal" />
          </Link>
        </div>
      </div>
    </section>
  );
}
