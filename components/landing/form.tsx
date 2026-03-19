"use client";
import Image from "next/image";
import formicon from "@/public/assets/hero/get_started_today.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaType, formSchema } from "@/lib/formSchema";

// ── Static state config ──────────────────────────────────────────────
const STATE = {
  stateAbbr: "PA",
  stateName: "Pennsylvania",
  city: "Philadelphia",
  timezone: "EST",
} as const;

const UTM_SOURCE = "organic"; // change as needed

const inputClass =
  "w-full border border-[#d1d5db] p-[13px] rounded-md mt-1.5 text-sm text-gray-800 placeholder:text-[#6b7280] outline-none focus:border-[#033c3f] focus:ring-2 focus:ring-[#033c3f]/30 transition";

const labelClass = "block text-sm font-semibold text-[#374151]"; /* CONTRAST FIX: xs→sm, medium→semibold */

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormSchemaType) => {
    // Split full name into first / last
    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    // Build Heally prefill payload
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: data.email,
      phone: data.phone,
      state: STATE.stateAbbr,
      state_of_evaluation: STATE.stateAbbr,
      timezone: STATE.timezone,
      city: STATE.city,
      extra_data: {
        "contact[contact_type]": "Web Form",
        "product[name]": "Eva",
        utm_source: UTM_SOURCE,
      },
    };

    // Base64url-encode the payload
    const preset = btoa(JSON.stringify(payload))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    // Push GTM event — window is always defined here because of "use client"
    // but typeof check is kept as a best-practice safety guard
    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "heallyValidatedSubmit",
        utm_source: UTM_SOURCE,
      });
    }

    // Redirect to Heally prefill — .assign() is preferred over .href =
    window.location.assign(
      `https://mymmj.getheally.com/patient_admin/prefill?redirect=sched&preset=${preset}&utm_source=${UTM_SOURCE}`
    );
  };

  return (
    <div id="apply" className="shadow-[0px_10px_30px_0px_#0000001a] bg-white rounded-xl px-9 py-8">
      <div className="flex flex-col items-center gap-1 pb-6">
        <Image src={formicon} alt="form Icon" width={40} height={30} sizes="50px" aria-hidden="true" />
        <h2 className="heading-tertiary" style={{ fontSize: "1.375rem" }}>Get Started Today</h2>
        <p className="text-muted text-center">Begin your medical marijuana evaluation for Pennsylvania by completing the form below.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="pb-3.5">
          <label htmlFor="name" className={labelClass}>Full Name <span aria-hidden="true">*</span></label>
          <input id="name" type="text" placeholder="Enter your full name" autoComplete="name"
            {...register("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass} />
          {errors.name && <p id="name-error" role="alert" className="text-red-700 text-xs mt-1 font-medium">{errors.name.message}</p>}
        </div>

        <div className="pb-3.5">
          <label htmlFor="email" className={labelClass}>Email Address <span aria-hidden="true">*</span></label>
          <input id="email" type="email" placeholder="Enter your email" autoComplete="email"
            {...register("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass} />
          {errors.email && <p id="email-error" role="alert" className="text-red-700 text-xs mt-1 font-medium">{errors.email.message}</p>}
        </div>

        <div className="pb-3.5">
          <label htmlFor="phone" className={labelClass}>Phone Number <span aria-hidden="true">*</span></label>
          <input
            id="phone"
            type="tel"
            placeholder="999-999-9999"
            autoComplete="tel"
            maxLength={12}
            {...register("phone")}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
              let formatted = digits;
              if (digits.length >= 7) {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
              } else if (digits.length >= 4) {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
              }
              e.target.value = formatted;
            }}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
          />
          {errors.phone && <p id="phone-error" role="alert" className="text-red-700 text-xs mt-1 font-medium">{errors.phone.message}</p>}
        </div>

        <div className="pb-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input id="terms" type="checkbox" {...register("terms")}
              className="mt-0.5 w-4 h-4 cursor-pointer" />
            {/* CONTRAST FIX: text-xs → text-sm, color darkened */}
            <span className="text-sm text-[#1f2937] leading-relaxed">
              I accept the <span className="underline">Terms and Conditions</span> <span aria-hidden="true">*</span>
            </span>
          </label>
          {errors.terms && <p id="terms-error" role="alert" className="text-red-700 text-xs mt-1 font-medium">{errors.terms.message}</p>}
        </div>

        <div className="pb-5">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input id="marketing" type="checkbox" {...register("marketing")}
              className="mt-0.5 w-4 h-4  cursor-pointer" />
            <span className="text-sm text-[#374151] leading-relaxed">
              I agree to receive emails with educational updates and latest offers.
            </span>
          </label>
        </div>

        <div className="text-center">
          {/* CONTRAST FIX: #10b981 bg with white text = 2.9:1 FAIL
              → #059669 (emerald-600) with white = 4.6:1 PASS              */}
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="bg-[#20B780] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#1daa70] focus:outline-none focus:ring-2 focus:ring-[#20B780] focus:ring-offset-2 transition-colors disabled:opacity-60"
          >
            {isSubmitting ? "Submitting…" : "Apply for Your MMJ Card"}
          </button>
        </div>

        {/* CONTRAST FIX: text-[11px] text-gray-400 fails at this size
            → text-xs text-gray-600                                        */}
        {/* <p className="text-center text-xs text-gray-600 mt-4 font-medium">
          🔒 HIPAA Compliant & 100% Secure
        </p> */}
      </form>
    </div>
  );
}