/**
 * PERFORMANCE FIX — page.tsx
 *
 * FILE LOCATION: src/app/page.tsx
 *
 * Problem: Every section (Trust, Steps, ExpertCare, Stats, ...) was a
 * static import, meaning ALL their JS and lucide-react icon trees were
 * bundled into the initial JS payload. This is the source of the three
 * large chunks Lighthouse flagged:
 *   - chunks/a7914d7b27d74101.js  59.9 KiB  (45.8 KiB unused)
 *   - chunks/87037a5848f6727d.js  66.7 KiB  (25.8 KiB unused)
 *   - chunks/63e188124b14454a.js  36.7 KiB  (23.0 KiB unused)
 *
 * Fix: Keep Header, Hero (and its lazy Form), and Footer as static imports
 * since they're needed for first paint. Everything else is dynamically
 * imported so it only loads when the user scrolls toward it.
 *
 * This splits the page into ~5 separate chunks instead of one monolith.
 * The total JS transferred is the same, but none of it blocks initial paint.
 */
import dynamic from "next/dynamic";
import Header from "@/components/header/headerServer";
import Hero from "@/components/landing/hero";       // hero already lazy-loads Form
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/backtotop";


// Everything below the fold — lazy load
// No loading skeleton needed for server components (they SSR fine);
// the dynamic() here only defers the client JS, not the HTML.
const Trust        = dynamic(() => import("@/components/landing/trust"));
const Steps        = dynamic(() => import("@/components/landing/steps"));
const ExpertCare   = dynamic(() => import("@/components/landing/expertcare"));
const Stats        = dynamic(() => import("@/components/landing/stats"));
const StartJourney = dynamic(() => import("@/components/landing/startjourney"));
const Conditions   = dynamic(() => import("@/components/landing/conditions"));
const Benefits     = dynamic(() => import("@/components/landing/benefits"));
const Doctors      = dynamic(() => import("@/components/landing/doctors"));
const Pricing      = dynamic(() => import("@/components/landing/pricing"));
const Reviews      = dynamic(() => import("@/components/landing/reviews"));
const Faq          = dynamic(() => import("@/components/landing/faq"));
const SpeakWithDoc = dynamic(() => import("@/components/landing/speakwithdoc"));

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Trust />
        <Steps />
        <ExpertCare />
        <Stats />
        <StartJourney />
        <Conditions />
        <Benefits />
        <Doctors />
        <Pricing />
        <Reviews />
        <Faq />
        <SpeakWithDoc />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}