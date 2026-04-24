import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jasonkang2026.github.io/github-claw/sitemap.xml",
    host: "https://jasonkang2026.github.io",
  };
}
