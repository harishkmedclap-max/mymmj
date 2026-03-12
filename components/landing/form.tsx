"use client";

import Image from "next/image";
import formicon from "@/public/assets/form-top-icon.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaType, formSchema } from "@/lib/formSchema";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    try {
      console.log("Form Data:", data);
      alert("Application submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shadow-[0px_10px_30px_0px_#0000001a] bg-white rounded-xl px-[35px] py-[30px]">
      <div className="flex flex-col items-center gap-[5px]">
        <Image src={formicon} alt="Application form icon" width={50} height={50} />
        <h2 className="font-inter font-normal !text-[24px] leading-[36px] tracking-normal text-center text-[#1F2937]">
          Get Started Today
        </h2>
        <p className="text-[#6B7280] !text-sm pb-5">
          Begin your medical marijuana card Pennsylvania application
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        {/* Name */}
        <div className="pb-[14px]">
          <label htmlFor="name" className="font-medium text-xs leading-[18px] text-[#6b7280] block">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            className="w-full border border-[#e5e7eb] border-[1.33px] p-[13.33px] rounded-md mt-[6px] placeholder:font-normal placeholder:text-sm placeholder:leading-[21px] placeholder:text-[#757575] outline-none focus:border-[#033c3f]"
          />
          {errors.name && (
            <span id="name-error" role="alert" className="text-red-500 text-sm">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="pb-[14px]">
          <label htmlFor="email" className="font-medium text-xs leading-[18px] text-[#6b7280] block">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            className="w-full border border-[#e5e7eb] border-[1.33px] p-[13.33px] rounded-md mt-[6px] placeholder:font-normal placeholder:text-sm placeholder:leading-[21px] placeholder:text-[#757575] outline-none focus:border-[#033c3f]"
          />
          {errors.email && (
            <span id="email-error" role="alert" className="text-red-500 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="pb-[14px]">
          <label htmlFor="phone" className="font-medium text-xs leading-[18px] text-[#6b7280] block">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            className="w-full border border-[#e5e7eb] border-[1.33px] p-[13.33px] rounded-md mt-[6px] placeholder:font-normal placeholder:text-sm placeholder:leading-[21px] placeholder:text-[#757575] outline-none focus:border-[#033c3f]"
          />
          {errors.phone && (
            <span id="phone-error" role="alert" className="text-red-500 text-sm">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2 pb-2.5">
          <input
            id="terms"
            type="checkbox"
            {...register("terms")}
            aria-invalid={!!errors.terms}
            aria-describedby="terms-error"
            className="accent-[#10b981]"
          />
          <label htmlFor="terms" className="text-xs leading-[18px] font-normal tracking-normal text-[#374151]">
            I accept the terms and conditions *
          </label>
        </div>
       {errors.terms && (
          <span id="terms-error" role="alert" className="text-red-500 text-sm mt-[-5px]">
            {errors.terms.message}
          </span>
        )}

        {/* Marketing */}
        <div className="flex items-center space-x-2 pb-5">
          <input
            id="marketing"
            type="checkbox"
            {...register("marketing")}
            className="accent-[#10b981]"
          />
          <label htmlFor="marketing" className="text-xs leading-[18px] font-normal tracking-normal text-[#374151]">
            I agree to receive emails with educational content and offers
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="bg-[#10b981] text-[#fff] px-5 py-2 rounded-md font-medium hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Apply Your Card"}
          </button>
        </div>
        <div className="flex flex-col items-center mt-4">
          <span className="font-normal text-[11px] leading-[16.5px] tracking-normal text-gray-500">
            🔒 HIPAA Compliant & 100% Secure
          </span>
        </div>
      </form>
    </div>
  );
}