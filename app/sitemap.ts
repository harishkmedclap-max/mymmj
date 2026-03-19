// ─────────────────────────────────────────────────────────────────
// FILE LOCATION: src/app/sitemap.ts   ← must be directly in app/
// ─────────────────────────────────────────────────────────────────
// CREATE THIS FILE — it does not exist in your project yet.
// Next.js auto-serves it at: https://yoursite.com/sitemap.xml
// No extra package needed — built into Next.js App Router.
// ─────────────────────────────────────────────────────────────────

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

function url(path: string) {
  return `${SITE_CONFIG.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Add more routes below as you create new pages.
    // Example:
    // {
    //   url: url("/about"),
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ];
}