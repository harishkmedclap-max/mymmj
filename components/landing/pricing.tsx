import { Check } from "lucide-react";

const plans = [
  {
    name: "New Patient",
    price: "$199",
    desc: "Complete evaluation & certification",
    popular: true,
    ctaLabel: "Get Started Now",
    ctaHref: "#apply",
    features: [
      "Online consultation with licensed physician",
      "Medical marijuana certification",
      "Personalized treatment guidance",
      "Follow-up support included",
      "100% money-back guarantee if not approved",
    ],
  },
  {
    name: "Renewal",
    price: "$149",
    desc: "Annual card renewal",
    popular: false,
    ctaLabel: "Renew Now",
    ctaHref: "#apply",
    features: [
      "Quick renewal consultation",
      "Updated certification",
      "Treatment plan review",
      "Same-day processing available",
      "Continued care support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#0F3030] py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">

        <div className="flex flex-col items-center gap-3 text-center">
          <span className="border border-white/30 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full">
            {/* CONTRAST FIX: white/60 on dark = 3.2:1 fail → white/90 = 9.1:1 ✓ */}
            ✦ SIMPLE PRICING
          </span>
          <h2 className="heading-secondary text-white">
            Transparent Pricing for Your{" "}
            <span style={{ color: "#34d399" }}>MMJ Card Online</span>
          </h2>
          <p className="text-muted-inv max-w-md">
            Simple, upfront pricing for a{" "}
            <span style={{ color: "#34d399" }}>medical marijuana card</span>{" "}
            in Pennsylvania with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {plans.map(({ name, price, desc, popular, ctaLabel, ctaHref, features }) => (
            <div key={name} className="relative bg-white text-gray-800 rounded-2xl p-7 flex flex-col gap-5 shadow-xl">
              {popular && (
                /* CONTRAST FIX: text-[10px] white on emerald-500 = 2.9:1 fail
                   → text-xs font-bold on emerald-700 (#047857) = 5.1:1 ✓     */
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#047857] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  ★ Most Popular
                </span>
              )}

              <div className="flex flex-col gap-1">
                <div className="w-8 h-8 rounded-full bg-[#059669] flex items-center justify-center mb-2" aria-hidden="true">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-sm font-semibold text-gray-700">{name}</p>
                <p className="text-4xl font-extrabold text-gray-900">{price}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>

              <ul className="flex flex-col gap-2" aria-label={`${name} features`}>
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CONTRAST FIX: emerald-500 bg with white text = 2.9:1 FAIL
                  Plan 1 → emerald-700 bg (#047857) = 5.1:1 ✓
                  Plan 2 → dark green bg with white = 8:1 ✓                  */}
              <a
                href={ctaHref}
                className={`w-full mt-auto py-3 rounded-xl text-sm font-bold text-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${popular
                    ? "bg-[#047857] hover:bg-[#065f46] text-white focus:ring-[#047857]"
                    : "bg-[#1a3a36] hover:bg-[#224a44] text-white border border-white/10 focus:ring-[#1a3a36]"
                  }`}
              >
                {ctaLabel} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-muted-inv text-xs text-center max-w-sm">
          Note: Pennsylvania state registration fee of $50 is paid separately to the PA Department of Health.
        </p>
      </div>
    </section>
  );
}