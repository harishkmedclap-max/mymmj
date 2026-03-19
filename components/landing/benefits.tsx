import { Leaf, Heart, Users, Shield } from "lucide-react";
import benefit from "@/public/assets/benefits.jpg";
import Image from "next/image";

const benefits = [
  { icon: Leaf,   title: "Possession Limits",   desc: "Patients may legally possess a 30-day supply of medical marijuana, as certified by their physician, ensuring full compliance with Pennsylvania law." },
  { icon: Heart,  title: "Sales Tax Exemption", desc: "Registered patients do not pay state sales tax on medical marijuana purchases from licensed dispensaries, reducing treatment costs." },
  { icon: Users,  title: "Potent Products",     desc: "Patients can purchase high-quality, lab-tested, and potent medical cannabis products from state-licensed dispensaries, ensuring safe and effective treatment." },
  { icon: Shield, title: "Legal Protection",    desc: "A valid Pennsylvania MMJ card allows patients to legally purchase, possess, and use medical cannabis for approved medical conditions, protecting them from state penalties." },
];

const statsOverlay = [
  { value: "98%",  label: "Success Rate"  },
  { value: "4.9",  label: "Avg. Rating"   },
  { value: "24hr", label: "Avg. Approval" },
];

export default function Benefits() {
  return (
    <section className="w-full bg-[#0d2e2a] py-10 sm:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-14 xl:gap-16">

        {/* ── Image Card — below content on mobile, left on desktop ── */}
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-72 xl:w-80 shrink-0 order-2 lg:order-1 flex justify-center lg:block">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full aspect-[3/4] bg-gradient-to-b from-green-900 to-green-950">
              <Image
                src={benefit}
                alt="Benefits of Pennsylvania Medical Marijuana Card"
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 66vw, 320px"
              />
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm flex justify-around px-4 py-3">
              {statsOverlay.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-white font-extrabold text-sm sm:text-base leading-none">
                    {value}
                  </span>
                  <span className="text-white/50 text-[10px] sm:text-xs mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Content — always on top on mobile, right on desktop ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">

          {/* Badge */}
          {/* <span className="inline-flex w-fit border border-white/20 text-white/70 text-[11px] sm:text-xs px-4 py-1.5 rounded-full">
            Patient Benefits
          </span> */}

          {/* Heading */}
          <h2 className="heading-secondary text-white">
            Benefits of Your{" "}
            <span className="text-accent">Medical Cannabis Card</span>{" "}
            in Pennsylvania
          </h2>

          {/* Body copy */}
          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            With a valid Pennsylvania medical marijuana card, patients can legally obtain medical
            cannabis from state-licensed dispensaries operating under the Pennsylvania Medical
            Marijuana Program.
          </p>
          {/* <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            The program is designed to provide patients with access to regulated cannabis products
            while ensuring evaluations and recommendations are made by certified physicians in
            accordance with state guidelines.
          </p> */}

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-1">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300
                           hover:bg-white/5 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5
                                transition-all duration-300 group-hover:bg-emerald-500/30 group-hover:scale-110">
                  <Icon
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 transition-transform duration-300 group-hover:rotate-6"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {title}
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-0.5">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}