const badges = ["Board Certified", "HIPAA Compliant", "100% Legal"];

export default function ExpertCare() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        <div className="flex-1 min-w-0">
          {/* CONTRAST FIX: text-teal-600 on bg-teal-50 = 3.1:1 (fail)
              → text-teal-800 on bg-teal-50 = 7.2:1 ✓                  */}
          <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-5 border border-teal-200">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block" aria-hidden="true" />
            Expert Care
          </span>

          <h2 className="heading-secondary mb-4">
            Expert Care from{" "}
            <span style={{ color: "#0d9488" }}>
              Licensed Pennsylvania Medical Professionals
            </span>
            {/* teal-600 (#0d9488) on white = 4.5:1 ✓ */}
          </h2>

          <p className="text-muted mb-4">
            Our network of experienced physicians specializes in medical cannabis evaluations,
            ensuring every patient receives personalized attention and comprehensive guidance
            throughout the application process. Each doctor is fully licensed in Pennsylvania
            and stays current with the latest state regulations.
          </p>
          <p className="text-muted mb-8">
            We understand that seeking medical cannabis treatment is a significant decision.
            That's why our doctors take the time to thoroughly review your medical history,
            answer all your questions, and provide clear recommendations based on your
            individual health needs and qualifying conditions.
          </p>

          <div className="flex flex-wrap gap-3" role="list" aria-label="Certifications">
            {badges.map((label) => (
              <span key={label} role="listitem"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-300">
                <svg className="w-3.5 h-3.5 text-teal-700 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.2" />
                  <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0 flex justify-center lg:justify-end relative">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-teal-50 rounded-3xl -z-10" aria-hidden="true" />
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-teal-100 via-slate-200 to-slate-300 flex items-center justify-center">
            <svg className="w-24 h-24 text-teal-400 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              <circle cx="12" cy="12" r="9" strokeWidth={1} />
            </svg>
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-none">State Licensed</p>
                <p className="text-xs text-gray-600 mt-0.5">Pennsylvania Certified</p>
                {/* CONTRAST FIX: text-[10px] text-gray-400 fails → text-xs text-gray-600 */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}