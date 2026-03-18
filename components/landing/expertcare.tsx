import expert from "@/public/assets/expert.jpg";
import Image from "next/image";

const badges = ["Board Certified", "HIPAA Compliant", "100% Legal"];

export default function ExpertCare() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-14 xl:gap-20">

        {/* ── LEFT: Text Content ── */}
        <div className="w-full lg:flex-1 lg:min-w-0">

          {/* Badge */}
          {/* <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 text-[11px] sm:text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 sm:mb-5 border border-teal-200">
            <span
              className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block"
              aria-hidden="true"
            />
            Expert Care
          </span> */}

          {/* Heading */}
          <h2 className="heading-secondary">
            Expert Care from{" "}
            <span className="text-accent">
              Licensed Pennsylvania Medical Professionals
            </span>
          </h2>

          {/* Body copy */}
          <p className="text-muted mb-4 sm:mb-6">
            Our network of experienced physicians specializes in medical cannabis
            evaluations, ensuring every patient receives personalized attention and
            comprehensive guidance throughout the application process. Each doctor
            is fully licensed in Pennsylvania and stays up to date with the latest
            state regulations.
          </p>
          <p className="text-muted mb-4 sm:mb-6">
            We understand that seeking medical cannabis treatment is a significant
            decision. That's why our doctors take the time to thoroughly review
            your medical history, answer all your questions, and provide clear
            recommendations based on your individual health needs and qualifying
            conditions.
          </p>

          {/* Badges */}
          <div
            className="flex flex-wrap gap-2 sm:gap-3"
            role="list"
            aria-label="Certifications"
          >
            {badges.map((label) => (
              <span
                key={label}
                role="listitem"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-300"
              >
                <svg
                  className="w-3.5 h-3.5 text-teal-700 shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.2" />
                  <path
                    d="M5 8.5l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image Card ── */}
        <div className="w-full sm:w-4/5 md:w-3/4 lg:flex-1 lg:min-w-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">

            {/* Decorative background blob — hidden on smallest screens */}
            <div
              className="hidden sm:block absolute -top-3 -right-3 md:-top-5 md:-right-5 w-full h-full bg-teal-50 rounded-2xl md:rounded-3xl -z-10"
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
                  <p className="text-xs font-bold text-gray-900 leading-none">
                    State Licensed
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Pennsylvania Certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}