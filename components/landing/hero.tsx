/**
 * PERFORMANCE FIX: Import FormWrapper (lazy) instead of Form (eager).
 * This one line change moves react-hook-form + zod out of the critical bundle.
 *
 * FILE LOCATION: src/components/landing/hero.tsx
 */
import FormWrapper from "@/components/landing/formwrapper";

const features = [
  {
    label: "HIPAA-Compliant",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: "Money-Back Guarantee",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: "Licensed Doctors",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>
      </svg>
    ),
  },
];


// const heroList = [
//   "Board-Certified Pennsylvania MMJ Doctors",
//   "HIPAA-compliant secure consultations",
//   "Money-back guarantee if not approved",
// ];

export default function Hero() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#033c3f_0%,#002124_100%)] pt-28 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex px-4 flex-col md:flex-row gap-8 md:gap-10 items-start">

          {/* Left */}
          <div className="flex-1 min-w-0">
            {/* <span className="relative inline-flex items-center border border-[#ffffff33] rounded-full py-1.5 pr-4 pl-7 text-white text-xs font-semibold tracking-wide bg-[#ffffff15]">
              <span className="absolute left-3 w-1.5 h-1.5 rounded-full bg-[#20B780]" aria-hidden="true" />
              Pennsylvania Licensed Physicians
            </span> */}

            <h1 className="heading-primary text-white mt-3 mb-4">
              Apply for a Pennsylvania Medical Marijuana Card{" "}
              <span className = "text-accent">Online Today</span>
            </h1>

            <p className="text-body-inv max-w-lg">
              Get evaluated by licensed physicians and apply for your medical marijuana card Pennsylvania through our secure telehealth platform.
            </p>

            <p className="text-body-inv max-w-lg">
              In Full Compliance with the Pennsylvania Department of Health Medical Marijuana Program. Providing evaluations that meet all state-mandated legal, clinical, and ethical standards
            </p>

            <div className="flex gap-6 py-6">
              {features.map(({ label, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20">
                    <Icon className ="text-[#34d399]" />
                  </div>
                  <span className="text-xs font-medium text-white text-center">{label}</span>
                </div>
              ))}
            </div>

            {/* <ul className="list-disc pl-5 space-y-2" aria-label="Key benefits">
              {heroList.map((item) => (
                <li key={item} className="text-sm text-white/90 marker:text-[#34d399]">{item}</li>
              ))}
            </ul> */}
          </div>

          {/* Right — Lazy Form (splits RHF+Zod out of critical bundle) */}
          <div className="w-full md:flex-1 shrink-0">
            <FormWrapper />
          </div>

        </div>
      </div>
    </section>
  );
}