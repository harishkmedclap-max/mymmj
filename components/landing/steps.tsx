import { User, Calendar, FileText, Mail } from "lucide-react";

const steps = [
  { id: 1, icon: User,     title: "Create Your Account",    description: "Sign up and provide your basic information to start your medical marijuana card Pennsylvania application" },
  { id: 2, icon: Calendar, title: "Schedule Consultation",  description: "Book a convenient time for your online evaluation with a Pennsylvania MMJ doctor online" },
  { id: 3, icon: FileText, title: "Get Evaluated",          description: "Meet with a licensed MMJ Doctor Pennsylvania through a secure virtual consultation" },
  { id: 4, icon: Mail,     title: "Receive Approval",       description: "Once approved, receive your certification to complete your Medical Cannabis Card in Pennsylvania registration" },
];

export default function Steps() {
  return (
    <section id="process" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 bg-[#0b2620]">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="heading-secondary text-white">
          Steps to Receive Your Pennsylvania
        </h2>
        <p className="heading-secondary text-accent mt-1">Medical Marijuana Card</p>
        <p className="text-muted-inv mt-4 max-w-md mx-auto">
          Patients can complete their evaluation through a secure online consultation without unnecessary clinic visits.
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
        className="inline-flex items-center gap-2 border border-[#2db882] text-[#2db882] rounded-full px-7 py-3 text-sm font-semibold hover:bg-[#2db882]/10 transition-colors"
      >
        Start Your Journey Now →
      </a>
    </section>
  );
}