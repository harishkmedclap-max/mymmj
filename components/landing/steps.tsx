import { User, Calendar, FileText, Mail } from "lucide-react";

const steps = [
  { id: 1, icon: User,     title: "Create Your Account",  description: "Sign up and provide your basic information to begin your medical marijuana card Pennsylvania evaluation process." },
  { id: 2, icon: Calendar, title: "Schedule Consultation",  description: "Choose a convenient time to speak with our licensed medical cannabis doctor for your health evaluation." },
  { id: 3, icon: FileText, title: "Attend Your MMJ Evaluation",  description: "Meet with a licensed MMJ Doctor Pennsylvania through a secure virtual consultation to review your medical history and qualifying condition." },
  { id: 4, icon: Mail,     title: "Register with the State",  description: "If approved, your physician certification is submitted to the Pennsylvania Department of Health, allowing you to complete your Medical Cannabis Card in Pennsylvania." },
];

export default function Steps() {
  return (
    <section id="process" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 bg-[#0b2620]">
      {/* Heading */}

       <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="heading-secondary pb-2.5 text-white">
           How to Get a Pennsylvania Medical {" "}
          <span className="text-accent"> Marijuana Card Online</span>
        </h2>
        <p className="text-muted-inv">
          Get your medical marijuana evaluation with our licensed physicians before proceeding with state registration through the Pennsylvania Department of Health, which administers the Pennsylvania medical marijuana program.
        </p>
      </div>
      {/* Cards */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mb-10">
        {steps.map(({ id, icon: Icon, title, description }) => (
          <div key={id} className="rounded-2xl p-6 bg-[#112921] flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2db882] flex items-center justify-center shrink-0">
                <Icon size={18} className="text-white" />
              </div>
              <span className="text-5xl font-bold text-white leading-none">{id}</span>
            </div>
            <h3 className="heading-quaternary text-white mb-2">{title}</h3>
            <p className="text-muted-inv">{description}</p>
          </div>
        ))}   
      </div>

      {/* CTA */}
      <a
        href="#apply"
        className="inline-flex items-center gap-2 w-fit bg-[#1a3a35] hover:bg-[#224a44] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
      >
        Start Your Journey Now →
      </a>
    </section>
  );
}