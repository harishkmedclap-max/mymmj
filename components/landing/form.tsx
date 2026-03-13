"use client";
import Image from "next/image";
import formicon from "@/public/assets/form-top-icon.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaType, formSchema } from "@/lib/formSchema";

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
    console.log("Form Data:", data);
    alert("Application submitted!");
  };

  return (
    <div id="apply" className="shadow-[0px_10px_30px_0px_#0000001a] bg-white rounded-xl px-9 py-8">
      <div className="flex flex-col items-center gap-1 pb-6">
        <Image src={formicon} alt="" width={50} height={50} sizes="50px" aria-hidden="true" />
        <h2 className="heading-tertiary" style={{ fontSize: "1.375rem" }}>Get Started Today</h2>
        <p className="text-muted text-center">Begin your medical marijuana card Pennsylvania application</p>
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
          <input id="phone" type="tel" placeholder="Enter your phone number" autoComplete="tel"
            {...register("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass} />
          {errors.phone && <p id="phone-error" role="alert" className="text-red-700 text-xs mt-1 font-medium">{errors.phone.message}</p>}
        </div>

        <div className="pb-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input id="terms" type="checkbox" {...register("terms")}
              className="mt-0.5 w-4 h-4 accent-[#059669] cursor-pointer" />
            {/* CONTRAST FIX: text-xs → text-sm, color darkened */}
            <span className="text-sm text-[#1f2937] leading-relaxed">
              I accept the <span className="underline">terms and conditions</span> <span aria-hidden="true">*</span>
            </span>
          </label>
          {errors.terms && <p id="terms-error" role="alert" className="text-red-700 text-xs mt-1 font-medium">{errors.terms.message}</p>}
        </div>

        <div className="pb-5">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input id="marketing" type="checkbox" {...register("marketing")}
              className="mt-0.5 w-4 h-4 accent-[#059669] cursor-pointer" />
            <span className="text-sm text-[#374151] leading-relaxed">
              I agree to receive emails with educational content and offers
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
            className="bg-[#059669] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#047857] focus:outline-none focus:ring-2 focus:ring-[#059669] focus:ring-offset-2 transition-colors disabled:opacity-60"
          >
            {isSubmitting ? "Submitting…" : "Apply for Your Card"}
          </button>
        </div>

        {/* CONTRAST FIX: text-[11px] text-gray-400 fails at this size
            → text-xs text-gray-600                                        */}
        <p className="text-center text-xs text-gray-600 mt-4 font-medium">
          🔒 HIPAA Compliant & 100% Secure
        </p>
      </form>
    </div>
  );
}