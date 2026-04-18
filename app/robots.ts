import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/", "/dashboard", "/all-tasks"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "claudebot"],
        allow: "/",
        disallow: ["/dashboard", "/all-tasks"],
      },
    ],
    sitemap: "https://planow.app/sitemap.xml",
  };
}
