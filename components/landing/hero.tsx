import Image from "next/image";
import formicon from "@/public/assets/form-top-icon.png";
import Form from "@/components/landing/form";

const features = [
  { label: "Fast Approval" },
  { label: "100% Online" },
  { label: "Licensed Doctors" },
];

const heroList = [
  "Licensed Pennsylvania Medical Marijuana Doctor evaluations",
  "HIPAA-compliant secure consultations",
  "Money-back guarantee if not approved",
];

export default function Hero() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#033c3f_0%,#002124_100%)] pt-[120px] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">

          {/* Left — text content */}
          <div className="flex-1 min-w-0">
            <span className="relative inline-flex items-center border border-[#ffffff33] rounded-full py-1.5 pr-4 pl-7 text-white text-xs font-semibold tracking-wide bg-[#ffffff15]">
              <span className="absolute left-3 w-1.5 h-1.5 rounded-full bg-[#34d399]" aria-hidden="true" />
              Pennsylvania Licensed Physicians
            </span>

            <h1 className="heading-primary text-white mt-3 mb-4">
              Apply for a Pennsylvania Medical Marijuana Card{" "}
              <span style={{ color: "#34d399" }}>Online Today</span>
              {/* CONTRAST FIX: #10b981 on dark bg = 3.1:1 (fail large text threshold)
                  → #34d399 (emerald-400) on #033c3f = 5.2:1 ✓               */}
            </h1>

            <p className="text-body-inv max-w-lg">
              Doctor evaluations help patients qualify for a medical marijuana card
              Pennsylvania residents trust, with licensed providers, private consultations,
              and a simple process.
            </p>

            {/* Feature icons — priority since they're above the fold */}
            <div className="flex gap-6 py-6">
              {features.map(({ label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Image src={formicon} alt="" width={44} height={44} priority sizes="44px" aria-hidden="true" />
                  {/* CONTRAST FIX: text-small was white/80 implicitly — now explicit white */}
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

          {/* Right — Form
              On mobile: full width below the hero text (natural stacking)
              On md+: fixed 460px column beside the text                    */}
          <div className="w-full md:w-[460px] shrink-0">
            <Form />
          </div>

        </div>
      </div>
    </section>
  );
}