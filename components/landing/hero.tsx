import Image from "next/image";
import formicon from "@/public/assets/form-top-icon.png";
/**
 * PERFORMANCE FIX: Import FormWrapper (lazy) instead of Form (eager).
 * This one line change moves react-hook-form + zod out of the critical bundle.
 *
 * FILE LOCATION: src/components/landing/hero.tsx
 */
import FormWrapper from "@/components/landing/formwrapper";

const features = [
  { label: "HIPAA-Compliant" },
  { label: "Money-Back Guarantee" },
  { label: "Licensed Doctors" },
];

const heroList = [
  "Board-Certified Pennsylvania MMJ Doctors",
  "HIPAA-compliant secure consultations",
  "Money-back guarantee if not approved",
];

export default function Hero() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#033c3f_0%,#002124_100%)] pt-28 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <span className="relative inline-flex items-center border border-[#ffffff33] rounded-full py-1.5 pr-4 pl-7 text-white text-xs font-semibold tracking-wide bg-[#ffffff15]">
              <span className="absolute left-3 w-1.5 h-1.5 rounded-full bg-[#34d399]" aria-hidden="true" />
              Pennsylvania Licensed Physicians
            </span>

            <h1 className="heading-primary text-white mt-3 mb-4">
              Apply for a Pennsylvania Medical Marijuana Card{" "}
              <span style={{ color: "#34d399" }}>Online Today</span>
            </h1>

            <p className="text-body-inv max-w-lg">
              Connect with licensed physicians to get evaluated for your medical marijuana card Pennsylvania through our secure telehealth platform.
            </p>

            <div className="flex gap-6 py-6">
              {features.map(({ label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Image
                    src={formicon}
                    alt=""
                    width={44}
                    height={44}
                    sizes="44px"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-white">{label}</span>
                </div>
              ))}
            </div>

            <ul className="list-disc pl-5 space-y-2" aria-label="Key benefits">
              {heroList.map((item) => (
                <li key={item} className="text-sm text-white/90 marker:text-[#34d399]">{item}</li>
              ))}
            </ul>
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