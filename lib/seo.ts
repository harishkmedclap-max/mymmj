// ─────────────────────────────────────────────────────────────────
// FILE LOCATION: src/lib/seo.ts
// ─────────────────────────────────────────────────────────────────
// Reusable SEO utility. Import buildMetadata() on every page/layout.
// ─────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Pennsylvania Medical Marijuana Card",
  url: "https://mymmj.vercel.app",          // ← replace with your real domain
  twitterHandle: "@YourHandle",             // ← replace with your Twitter handle
  defaultOgImage: "/assets/og-default.jpg", // ← create a 1200×630 image here
  locale: "en_US",
} as const;

export interface SeoOptions {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  extra?: Partial<Metadata>;
}

export function buildMetadata(options: SeoOptions): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalPath = "/",
    ogImage = SITE_CONFIG.defaultOgImage,
    ogType = "website",
    noIndex = false,
    extra = {},
  } = options;

  const canonicalUrl = `${SITE_CONFIG.url}${canonicalPath}`;
  const resolvedOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_CONFIG.url}${ogImage}`;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: ogType,
      images: [
        {
          url: resolvedOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      images: [resolvedOgImage],
    },
    verification: {
      google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // ← paste token from Google Search Console
    },
    ...extra,
  };
}