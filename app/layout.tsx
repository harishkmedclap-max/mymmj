// ─────────────────────────────────────────────────────────────────
// FILE LOCATION: src/app/layout.tsx
// ─────────────────────────────────────────────────────────────────
// ROOT LAYOUT — site-wide default metadata.
// Every page inherits these and can override individually.
// CHANGES FROM YOUR ORIGINAL:
//   1. Replaced raw metadata object with buildMetadata()
//   2. Added full keyword list
//   3. Added Open Graph + Twitter card
//   4. Added canonical URL
//   5. Kept your existing Inter font, viewport, and body unchanged
// ─────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "optional",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#033c3f",
};

// ── Site-wide default metadata ────────────────────────────────────
// Pages that export their own `metadata` will override these values.
export const metadata: Metadata = buildMetadata({
  title: "Pennsylvania Medical Marijuana Card | Online Doctor Evaluations",
  description:
    "Get your Pennsylvania medical marijuana card online. Licensed doctors, HIPAA-compliant consultations, and a money-back guarantee if not approved.",
  keywords: [
    // 3× primary
    "Pennsylvania medical marijuana card",
    "medical marijuana card Pennsylvania",
    "Pennsylvania medical marijuana card",
    "medical marijuana card Pennsylvania",
    "Pennsylvania medical marijuana card",
    "medical marijuana card Pennsylvania",
    // 2×
    "medical marijuana card in Pennsylvania",
    "medical marijuana card in Pennsylvania",
    // 1× each
    "Pennsylvania Medical Marijuana Doctor",
    "Pennsylvania Medical Marijuana Card Online",
    "Medical Cannabis Card in Pennsylvania",
    "Pennsylvania MMJ doctor online",
    "MMJ Doctor Pennsylvania",
  ],
  canonicalPath: "/",
  ogImage: "/assets/og-default.jpg", // ← create this 1200×630 image
  extra: {
    title: {
      default: "Pennsylvania Medical Marijuana Card | Online Doctor Evaluations",
      template: `%s | ${SITE_CONFIG.name}`,
    },
    icons: { icon: "/assets/logo.png" },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}