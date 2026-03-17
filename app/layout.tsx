import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Pennsylvania Medical Marijuana Card | Online Doctor Evaluations",
  description:
    "Get your Pennsylvania medical marijuana card online. Licensed doctors, HIPAA-compliant consultations, and a money-back guarantee if not approved.",
  icons: { icon: "/assets/logo.png" },
  robots: { index: true, follow: true },
};

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