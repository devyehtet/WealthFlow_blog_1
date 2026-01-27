import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { blogs } from "@/content/blogs"; // ✅ make sure this file exists
import { absoluteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: absoluteUrl("/guides"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: absoluteUrl(`/guides/${g.slug}`),
    lastModified: new Date(g.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...guideRoutes, ...blogRoutes];
}
