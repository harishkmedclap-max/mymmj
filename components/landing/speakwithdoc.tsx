import { Calendar, Monitor, Shield, ArrowRight } from "lucide-react";
import doctor from "@/public/assets/speakwithDoctor.png"
import Image from "next/image";
import appointment from "@/public/assets/speakwithdoctor/schedule_consultation.webp";
import onlineProcess from "@/public/assets/speakwithdoctor/onlineprocress.webp";
import doctors from "@/public/assets/speakwithdoctor/licensed_doctors_2.webp";
const features = [
  { img: appointment, title: "Same-Day Appointments Available", desc: "Get started immediately with our flexible scheduling"},
  { img: onlineProcess,  title: "100% Online Process",             desc: "No in-person visits required"},
  { img: doctors,   title: "Licensed PA Physicians",          desc: "Board-Certified medical marijuana doctors"},
];

export default function SpeakWithDoc() {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-emerald-100 py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Left */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="heading-secondary">
            Consult with your Doctor {" "}
            <span className="text-accent">Today</span>
          </h2>

          <p className="text-muted max-w-sm">
            Attend a secure online consultation with an experienced Pennsylvania medical cannabis physician.
          </p>

          <div className="flex flex-col gap-3">
            {features.map(({ img, title, desc }) => (
              <div key={title} className="flex items-center gap-4 bg-[#1a3a35] rounded-xl px-4 py-3">
                {/* <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0"> */}
                  <Image src={img} alt={title} width={30} height={20} style={{height:"auto",width:"auto"}}/>
                {/* </div> */}
                <div>
                  <p className="text-small font-semibold text-white leading-none">{title}</p>
                  <p className="text-muted-inv mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#apply"
            className="inline-flex items-center gap-2 w-fit bg-[#1a3a35] hover:bg-[#224a44] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Get Started Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right — Doctor image with layered shadow effect */}
        <div className="flex-1 flex justify-center lg:justify-end">
          {/* Outer glow/shadow layer */}
          <div
            className="rounded-2xl p-[3px]"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* Inner image container */}
            <div
              className="w-72 md:w-80 aspect-[3/4] rounded-[14px] overflow-hidden relative"
              style={{
                boxShadow: "inset 0 2px 8px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(255,255,255,0.5)",
              }}
            >
              <Image
                src={doctor}
                alt="Doctor consulting with patient"
                style={{height:"auto",width:"auto"}}
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 288px, 320px"
              />
              {/* Subtle inner top highlight */}
              <div
                className="absolute inset-0 rounded-[14px] pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 40%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}