import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/services",
    "/work",
    "/process",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...projects
      .filter((p) => p.status === "published")
      .map((p) => `/work/${p.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/work/") ? 0.7 : 0.6,
  }));
}
