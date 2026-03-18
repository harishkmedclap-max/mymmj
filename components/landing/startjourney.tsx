import { Clock, Shield, FileText, Star, ArrowRight } from "lucide-react";

const features = [
  { icon: Clock,    title: "24 Hour Appointments", desc: "Quick scheduling available" },
  { icon: Shield,   title: "100% Confidential",    desc: "HIPAA compliant platform"   },
  { icon: FileText, title: "Licensed Doctors",     desc: "PA certified physicians"    },
];

export default function StartJourney() {
  return (
    <section className="w-full bg-[#0d2e2a] py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        <span className="inline-flex items-center gap-1.5 border border-white/40 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
          {/* CONTRAST FIX: white/80 → white (full opacity) */}
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          Start Your Journey Today
        </span>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-secondary pb-2.5 text-white">
            Connect With a Doctor for Your {" "}
            <span className="text-accent">Medical Marijuana Card {" "}</span>
            in Pennsylvania
          </h2>
          <p className="text-muted-inv">
            Licensed physicians offer secure online consultations to guide patients through the evaluation process with care and confidence.
          </p>
        </div>
       
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#apply"
            className="inline-flex items-center gap-2 border border-white/50 text-[#20B780] bg-[#FFFFFF] text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d2e2a] transition-colors">
            Schedule Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="#process"
            className="bg-white/15 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d2e2a] transition-colors">
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-2" role="list">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} role="listitem"
              className="bg-white/8 border border-white/20 rounded-xl p-5 flex flex-col items-center gap-2 text-center">
              <Icon className="w-5 h-5 text-white/80" strokeWidth={1.5} aria-hidden="true" />
              {/* CONTRAST FIX: white/50 on dark bg → text-muted-inv (white/75) */}
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-muted-inv">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}