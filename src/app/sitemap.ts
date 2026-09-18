import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const projectRoutes = projects
    .filter((p) => !p.title.includes("Coming Soon"))
    .map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      priority: 0.8 as const,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
