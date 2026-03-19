// ─────────────────────────────────────────────────────────────────
// FILE LOCATION: src/app/robots.ts   ← must be directly in app/
// ─────────────────────────────────────────────────────────────────
// CREATE THIS FILE — it does not exist in your project yet.
// Next.js auto-serves it at: https://yoursite.com/robots.txt
// No extra package needed — built into Next.js App Router.
// ─────────────────────────────────────────────────────────────────

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // block API routes from being crawled
        ],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}