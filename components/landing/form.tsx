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
    <div className="hero_form_wrap">
      <div className="form_top">
        <Image
          src={formicon}
          alt="Application form icon"
          width={50}
          height={50}
        />
        <h2>Get Started Today</h2>
        <p className="pb-20px">
          Begin your medical marijuana card Pennsylvania application
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        
        {/* Name */}
        <div className="form_group">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="form_group">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="form_group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="text-red-500 text-sm">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2">
          <input
            id="terms"
            type="checkbox"
            {...register("terms")}
            aria-invalid={!!errors.terms}
            aria-describedby="terms-error"
          />
          <label htmlFor="terms">
            I accept the terms and conditions *
          </label>
        </div>
        {errors.terms && (
          <p id="terms-error" role="alert" className="text-red-500 text-sm">
            {errors.terms.message}
          </p>
        )}

        {/* Marketing */}
        <div className="flex items-center space-x-2 pt-10px pb-20px">
          <input id="marketing" type="checkbox" {...register("marketing")} />
          <label htmlFor="marketing">
            I agree to receive emails with educational content and offers
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn_primary"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Apply Your Card"}
          </button>
        </div>
      </form>
    </div>
  );
}