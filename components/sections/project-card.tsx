import Link from "next/link";
import Image from "next/image";

export interface ProjectCardProps {
  Media_Preview?: string;
  Category: string;
  Project_Number: string;
  Project_Title: string;
  Project_Description: string;
  Tags: string[];
  Project_Link: string;
}

export function ProjectCard({
  Media_Preview,
  Category,
  Project_Number,
  Project_Title,
  Project_Description,
  Tags,
  Project_Link,
}: ProjectCardProps) {
  return (
    <div className="layered-shadow-card w-full flex">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 relative flex flex-col justify-between w-full">
        <div>
          <Link
            href={Project_Link}
            className="bg-slate-900 rounded-2xl overflow-hidden aspect-video mb-6 relative flex items-center justify-center border border-slate-800 group"
            aria-label={`View ${Project_Title}`}
          >
            {Media_Preview ? (
              <Image
                src={Media_Preview}
                alt={Project_Title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <span className="text-slate-500 font-medium text-sm">
                [ {Project_Title} Preview ]
              </span>
            )}
          </Link>

          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {Category}
            </span>
            <span className="text-xs font-bold text-brandPurple bg-brandPurple/10 px-3 py-1 rounded-full">
              {Project_Number}
            </span>
          </div>

          <h3 className="font-heading text-xl lg:text-2xl font-bold text-dark mb-2">
            <Link
              href={Project_Link}
              className="hover:text-brandPurple transition-colors"
            >
              {Project_Title}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            {Project_Description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {Tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Link
            href={Project_Link}
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
  );
}
