import Approval from "@/public/assets/stats/Approval_Time.webp";
import Patient from "@/public/assets/stats/Patients_Served.webp";
import Success from "@/public/assets/stats/Success_Rate.webp";
import Average from "@/public/assets/stats/Average_Rating.webp";
import Image from "next/image";

const stats = [
  { img: Patient,       value: "5,000+", label: "Patients Served"    },
  { img: Average,        value: "4.9/5",  label: "Average Rating"     },
  { img: Approval,       value: "24hrs",  label: "Avg. Approval Time" },
  { img: Success, value: "98%",    label: "Success Rate"       },
];

export default function Stats() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-16 shadow-sm">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-8">
        {stats.map(({ img, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 sm:gap-2.5"
          >
            {/* <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#20B780] flex items-center justify-center shrink-0"> */}
              <Image src={img} alt={label} width={50} height={40} />
            {/* </div> */}
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">
              {value}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 text-center leading-snug">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}