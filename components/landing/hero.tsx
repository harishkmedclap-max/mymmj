/**
 * PERFORMANCE FIX: Import FormWrapper (lazy) instead of Form (eager).
 * This one line change moves react-hook-form + zod out of the critical bundle.
 *
 * FILE LOCATION: src/components/landing/hero.tsx
 */
import FormWrapper from "@/components/landing/formwrapper";
import Hippa from "@/public/assets/HIPAA-Compliant.webp";
import Image from "next/image";
const features = [
  {
    label: "HIPAA-Compliant",
    icon : Hippa
  },
  {
    label: "Money-Back Guarantee",
    icon: Hippa
  },
  {
    label: "Licensed Doctors",
      icon: Hippa
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
              {features.map(({ label, icon }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20">
                    <Image
                      src={icon}
                      alt={label}
                      width={30}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-white text-center">
                    {label}
                  </span>
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