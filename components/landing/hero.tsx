import formicon from "@/public/assets/form-top-icon.png";
import Image from "next/image";
import Form from "@/components/landing/form";

export default function Hero() {
  const features = [
    { label: "Fast Approval", icon: formicon },
    { label: "100% Online", icon: formicon },
    { label: "Licensed Doctors", icon: formicon },
  ];
  const heroList = [
    "Licensed Pennsylvania Medical Marijuana Doctor evaluations",
    "HIPAA-compliant secure consultations",
    "Money-back guarantee if not approved",
  ];

  return (
    <section className="w-full bg-[linear-gradient(135deg,#033c3f_0%,#002124_100%)] pt-[120px] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4">

          {/* Left column */}
          <div className="w-full md:w-1/2 px-4">
            <button className="relative border border-[#ffffff1a] rounded-full py-[5px] pr-[15px] pl-[26px] text-white text-xs font-medium tracking-[0.05em] backdrop-blur-[4px] bg-[#ffffff1a]">
              <span className="absolute top-[38%] left-3 w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Pennsylvania Licensed Physicians
            </button>

            <h1 className="text-white text-[58px] font-semibold leading-16 pb-5 pt-2.5">
              Apply for a Pennsylvania Medical Marijuana Card{" "}
              <span className="text-[#10b981]">Online Today</span>
            </h1>

            <p className="text-lg leading-[28.8px] text-white">
              Doctor evaluations help patients qualify for a medical marijuana card
              Pennsylvania residents trust, with licensed providers, private
              consultations, and a simple process.
            </p>

            {/* Features */}
            <div className="flex gap-4 py-[30px]">
              {features.map(({ label, icon }) => (
                <div key={label} className="flex flex-col justify-center gap-[10px]">
                  <Image src={icon} alt="icon here" width={50} height={50} />
                  <h3 className="text-sm leading-[18px] text-white">{label}</h3>
                </div>
              ))}
            </div>

            {/* List */}
            <ul className="list-disc pl-5 marker:text-[#10b981]">
              {heroList.map((item) => (
                <li
                  key={item}
                  className="text-white text-base leading-[21px] pb-2.5 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Form */}
          <div className="w-full md:w-1/2 px-4">
            <Form />
          </div>

        </div>
      </div>
    </section>
  );
}