import { Leaf, Heart, Users, Shield } from "lucide-react";
import benefit from "@/public/assets/benefits.jpg"
import Image from "next/image";
const benefits = [
  { icon: Leaf,   title: "Possession Limits",   desc: "Patients may legally possess a 30-day supply of medical marijuana, as certified by their physician, ensuring full compliance with Pennsylvania law." },
  { icon: Heart,  title: "Sales Tax Exemption", desc: "Registered patients do not pay state sales tax on medical marijuana purchases from licensed dispensaries, reducing treatment costs." },
  { icon: Users,  title: "Potent Products",    desc: "Patients can purchase high-quality, lab-tested, and potent medical cannabis products from state-licensed dispensaries, ensuring safe and effective treatment." },
  { icon: Shield, title: "Legal Protection",    desc: "A valid Pennsylvania MMJ card allows patients to legally purchase, possess, and use medical cannabis for approved medical conditions, protecting them from state penalties." },
];

const statsOverlay = [
  { value: "98%",  label: "Success Rate"   },
  { value: "4.9",  label: "Avg. Rating"    },
  { value: "24hr", label: "Avg. Approval"  },
];

export default function Benefits() {
  return (
    <section className="w-full bg-[#0d2e2a] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Image card */}
        <div className="relative w-full max-w-xs shrink-0 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full aspect-[3/4] bg-gradient-to-b from-green-900 to-green-950 flex items-center justify-center">
            <Image src={benefit} alt="Benefits" className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm flex justify-around px-4 py-3">
            {statsOverlay.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-white font-extrabold text-base leading-none">{value}</span>
                <span className="text-white/50 text-[10px] mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          <span className="inline-flex w-fit border border-white/20 text-white/70 text-xs px-4 py-1.5 rounded-full">
            Patient Benefits
          </span>
          
          <h2 className="heading-secondary text-white">
            Benefits of Your{" "}
            <span className="text-accent">Medical Cannabis Card</span>{" "}
            in <span className="text-accent">Pennsylvania</span>
          </h2>

          <p className="text-muted-inv">
            With a valid Pennsylvania medical marijuana card, patients can legally obtain medical cannabis from state-licensed dispensaries operating under the Pennsylvania Medical Marijuana Program.
          </p>
          <p className="text-muted-inv">
           The program is designed to provide patients with access to regulated cannabis products while ensuring evaluations and recommendations are made by certified physicians in accordance with state guidelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-emerald-400" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-small font-semibold text-white">{title}</p>
                  <p className="text-muted-inv mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}