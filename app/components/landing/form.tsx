import Image from "next/image";
import formicon from "@/public/assets/form-top-icon.png";

const fields = [
  { id: "name", label: "Full Name *", type: "text", placeholder: "Enter your name" },
  { id: "email", label: "Email Address *", type: "email", placeholder: "Enter your email" },
  { id: "phone", label: "Phone Number *", type: "tel", placeholder: "Enter your phone" },
];

export default function Form() {
  return (
    <div className="hero_form_wrap">
      <div className="form_top">
        <Image src={formicon} alt="icon" className="main_logo" />
        <h6>Get Started Today</h6>
        <span className="pb-20px">Begin your medical marijuana card Pennsylvania application</span>
      </div>
      <form action="#" method="post">
        {fields.map(({ id, label, type, placeholder }) => (
          <div key={id} className="form_group">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} placeholder={placeholder} />
          </div>
        ))}
         <div className="flex items-center space-x-2">
      <input
        id="terms"
        type="checkbox"
        className="w-4 h-4"
      />
      <label htmlFor="terms" className="text-gray-700 cursor-pointer">
      I accept the terms  and conditions*
      </label>
    </div>
    <div className="flex items-center space-x-2 pt-10px pb-20px">
      <input
        id="terms"
        type="checkbox"
        className="w-4 h-4"
      />
      <label htmlFor="terms" className="text-gray-700 cursor-pointer">
      I agree to receive emails with educational content exclusive offers, partnership discounts and marketing updates 
      </label>
    </div>
    <div className="text-center">
        <button type="submit" className="btn_primary ">Apply Your Card</button>
    </div>
      </form>
    </div>
  );
}