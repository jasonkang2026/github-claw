import type { MetadataRoute } from "next";

const baseUrl = "https://jasonkang2026.github.io/github-claw";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
