// ─────────────────────────────────────────────────────────────────
// FILE LOCATION: src/app/page.tsx
// ─────────────────────────────────────────────────────────────────
// HOMEPAGE — page-level metadata override + all JSON-LD schemas.
// CHANGES FROM YOUR ORIGINAL:
//   1. Added `export const metadata` with page-specific SEO
//   2. Added <JsonLd> with 5 schemas built from your existing data:
//      Organization, WebSite, FAQPage, HowTo, AggregateRating
//   3. All your existing dynamic imports and component order unchanged
// ─────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata, SITE_CONFIG } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Header from "@/components/header/headerServer";
import Hero from "@/components/landing/hero";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/backtotop";

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

// ── 1. Page-level metadata (overrides layout.tsx defaults) ────────
export const metadata: Metadata = buildMetadata({
  title: "Pennsylvania Medical Marijuana Card – Get Certified Online Today",
  description:
    "Apply for your Pennsylvania medical marijuana card online in minutes. " +
    "Our certified Pennsylvania Medical Marijuana Doctor approves qualifying patients fast. " +
    "Get your medical marijuana card in Pennsylvania without leaving home.",
  keywords: [
    "Pennsylvania medical marijuana card",
    "medical marijuana card Pennsylvania",
    "Pennsylvania Medical Marijuana Doctor",
    "medical marijuana card in Pennsylvania",
    "Pennsylvania Medical Marijuana Card Online",
    "Medical Cannabis Card in Pennsylvania",
    "Pennsylvania MMJ doctor online",
    "MMJ Doctor Pennsylvania",
    "Pennsylvania medical marijuana card",
    "medical marijuana card Pennsylvania",
    "medical marijuana card in Pennsylvania",
    "Pennsylvania medical marijuana card",
    "medical marijuana card Pennsylvania",
  ],
  canonicalPath: "/",
  ogImage: "/assets/og-homepage.jpg", // ← create a 1200×630 homepage image
  ogType: "website",
});

// ── 2. JSON-LD Schemas ────────────────────────────────────────────
// Built directly from your existing component data arrays.
// Google uses these for rich results in search (stars, FAQ dropdowns, How-To steps).

// Schema A — MedicalOrganization
// Tells Google what your business is and where it operates.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Pennsylvania Medical Marijuana Card",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/assets/pennsylvania.webp`,
  description:
    "Board-certified Pennsylvania Medical Marijuana Doctors providing online MMJ card " +
    "certifications to qualifying Pennsylvania patients.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "PA",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "800-123-4567",       // ← update to your real phone
    contactType: "customer service",
    availableLanguage: "English",
  },
  medicalSpecialty: "Medical Marijuana Certification",
};

// Schema B — WebSite (enables Google Sitelinks Search Box)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pennsylvania Medical Marijuana Card",
  url: SITE_CONFIG.url,
};

// Schema C — FAQPage
// Built from the same FAQ data used in faq.tsx.
// Google shows these as expandable dropdowns directly in search results.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Pennsylvania medical marijuana card, and who needs one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Pennsylvania medical marijuana card is an official card issued by the Pennsylvania Department of Health that allows certified patients to legally purchase and possess medical cannabis from state-licensed dispensaries after they receive a physician's certification.",
      },
    },
    {
      "@type": "Question",
      name: "How do I qualify for a Pennsylvania medical marijuana card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must be a Pennsylvania resident and have a serious medical condition certified by a physician approved to participate in the state's Medical Marijuana Program. Conditions include anxiety disorders, chronic pain, cancer, PTSD, epilepsy, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for a medical marijuana card in Pennsylvania online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After you register on the state's medical marijuana registry, you can complete your evaluation with a licensed physician via secure telehealth, and if certified, proceed with state registration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost to get a Pennsylvania medical marijuana card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are two main costs: a physician evaluation fee (varies) and a $50 state registration fee paid to the Pennsylvania Department of Health. Fee waivers may apply to Medicaid or SNAP recipients.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to receive my Pennsylvania medical marijuana card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After certification and payment of the state fee, the Department of Health typically prints and mails your card within 7–14 days.",
      },
    },
    {
      "@type": "Question",
      name: "How long is a Pennsylvania medical marijuana card valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Pennsylvania medical marijuana card is valid for one year from the date of issuance and must be renewed annually with a physician recertification.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay sales tax on medical cannabis purchases in Pennsylvania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Medical cannabis purchases made with a valid Pennsylvania medical marijuana card are exempt from state sales tax, reducing costs compared with regular taxable purchases.",
      },
    },
    {
      "@type": "Question",
      name: "Can I designate a caregiver to help me with my medical marijuana card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A patient can designate a caregiver who must also register with the Pennsylvania Medical Marijuana Program and complete a background check, allowing the caregiver to obtain medical cannabis on the patient's behalf.",
      },
    },
  ],
};

// Schema D — HowTo
// Built from your 4 steps in steps.tsx.
// Google can show these as numbered steps directly in search results.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Pennsylvania Medical Marijuana Card Online",
  description:
    "Get your medical marijuana evaluation with licensed physicians before proceeding " +
    "with state registration through the Pennsylvania Department of Health.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create Your Account",
      text: "Sign up and provide your basic information to begin your medical marijuana card Pennsylvania evaluation process.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Schedule Consultation",
      text: "Choose a convenient time to speak with our licensed medical cannabis doctor for your health evaluation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Attend MMJ Evaluation",
      text: "Meet with a licensed MMJ Doctor Pennsylvania through a secure virtual consultation to review your medical history and qualifying condition.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Register with the State",
      text: "If approved, your physician certification is submitted to the Pennsylvania Department of Health, allowing you to complete your Medical Cannabis Card in Pennsylvania.",
    },
  ],
};

// Schema E — AggregateRating + Reviews
// Built from your 3 reviews in reviews.tsx.
// Google shows star ratings in search results (rich snippet).
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Pennsylvania Medical Marijuana Card",
  url: SITE_CONFIG.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3",        // ← update to your real review count
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah M." },
      datePublished: "2024-01-15",
      reviewBody:
        "The entire process was so simple and professional. I got my Pennsylvania medical marijuana card approved within days. The doctor was knowledgeable and really took time to understand my condition.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James T." },
      datePublished: "2024-01-20",
      reviewBody:
        "I was nervous about the online consultation, but it was incredibly easy. The Pennsylvania MMJ doctor online was compassionate and answered all my questions. Highly recommend!",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Maria L." },
      datePublished: "2023-12-10",
      reviewBody:
        "Best decision I made for my chronic pain management. Getting my medical marijuana card in Pennsylvania through this service was straightforward with transparent pricing and no surprises.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
};

// ── 3. Page component ─────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* JSON-LD schemas — injected into <head> automatically by Next.js */}
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={websiteSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howToSchema} />
      <JsonLd schema={reviewSchema} />

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