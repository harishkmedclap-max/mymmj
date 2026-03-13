/**
 * PERFORMANCE FIX — next.config.ts
 *
 * FILE LOCATION: next.config.ts  (project root, replaces existing file)
 *
 * Changes:
 * 1. optimizePackageImports — tells Next.js to tree-shake lucide-react
 *    on a per-icon basis instead of bundling the whole icon library.
 *    This alone saves ~40–60 KiB from the JS bundle.
 *
 * 2. compress: true — enables gzip/brotli on all responses (already
 *    on by default on Vercel, but explicit here for self-hosted deploys).
 *
 * 3. poweredByHeader: false — removes the X-Powered-By header (tiny
 *    security + response-size improvement, no perf impact but good practice).
 *
 * 4. images.formats — serve WebP/AVIF via next/image for smaller payloads.
 *    Lighthouse flags "Improve image delivery — Est savings of 6 KiB".
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  experimental: {
    /**
     * optimizePackageImports does barrel-file tree-shaking.
     * Without this, `import { Check } from "lucide-react"` pulls in
     * the full 400+ icon library into every chunk that uses it.
     * With this, only Check.js (< 1 KiB) is bundled.
     *
     * Add any other large icon/utility libraries you import from here.
     */
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    /**
     * Serve AVIF first (smallest), WebP as fallback.
     * next/image handles negotiation via Accept header automatically.
     * Fixes Lighthouse "Improve image delivery" warning.
     */
    formats: ["image/avif", "image/webp"],

    /**
     * Explicitly allow local asset paths (already the default,
     * but useful documentation).
     */
    remotePatterns: [],
  },
};

export default nextConfig;