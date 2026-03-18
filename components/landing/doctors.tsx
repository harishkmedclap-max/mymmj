import expert from "@/public/assets/expert.jpg";
import Image from "next/image";
const heroList = [
  "Schedule your renewal evaluation and submit your updated medical information.",
  "Consult with a Pennsylvania-licensed physician via secure telehealth to confirm continued eligibility.",
  "Receive your renewed certification and complete your annual state registration/payment to keep your card active",
];

export default function Doctors() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-14 xl:gap-20">

        {/* ── LEFT: Image Card — appears after text on mobile, left on desktop ── */}
        <div className="w-full sm:w-4/5 md:w-3/4 lg:flex-1 lg:min-w-0 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">

            {/* Decorative blob — hidden on smallest screens */}
            <div
              className="hidden sm:block absolute -top-3 -left-3 md:-top-5 md:-left-5 w-full h-full bg-teal-50 rounded-2xl md:rounded-3xl -z-10"
              aria-hidden="true"
            />

            {/* Image container */}
            <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl bg-gradient-to-br from-teal-100 via-slate-200 to-slate-300">
              <Image
                src={expert}
                alt="Doctor consulting with patient"
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 50vw"
              />

              {/* Overlay badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-md flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#20B780] flex items-center justify-center shrink-0">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-none">State Licensed</p>
                  <p className="text-xs text-gray-600 mt-0.5">Pennsylvania Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text Content — appears first on mobile, right on desktop ── */}
        <div className="w-full lg:flex-1 lg:min-w-0 order-1 lg:order-2">

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 text-[11px] sm:text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 sm:mb-5 border border-teal-200">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block" aria-hidden="true" />
            Expert Care
          </span>

          {/* Heading */}
          <h2 className="heading-secondary">
            How to Renew Your Pennsylvania {" "}
            <span className="text-accent">
              Medical Marijuana Card
            </span>
          </h2>

          {/* Body copy */}
          <p className="text-muted mb-4 sm:mb-6">
            Renewing your Pennsylvania medical marijuana card is simple and can be completed entirely online, ensuring you maintain uninterrupted access to your treatment.
          </p>
          {/* <p className="text-muted mb-4 sm:mb-6">
            We understand that applying for a medical marijuana card in Pennsylvania is an important
            healthcare decision. That's why our doctors take a detailed, patient-focused approach,
            carefully reviewing medical history and answering every question with clarity. Their goal
            is to provide informed, responsible recommendations tailored to your specific condition
            and long-term wellness needs.
          </p> */}
          <ul className="list-disc pl-5 space-y-2 mb-7" aria-label="Key benefits">
              {heroList.map((item) => (
                <li key={item} className="text-sm text-muted marker:text-[#34d399]">{item}</li>
              ))}
            </ul>
          {/* CTA Button */}
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl
                       text-sm font-semibold text-white
                       bg-emerald-700 hover:bg-emerald-800
                       transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700"
          >
            Apply for Your MMJ Card
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}