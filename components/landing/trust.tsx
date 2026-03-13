import { Shield, Clock, Users, DollarSign, Heart, MessageSquare } from "lucide-react";

const cards = [
  { icon: Shield,       title: "Licensed & Trusted",   desc: "Work with licensed Pennsylvania physicians who understand state medical cannabis regulations" },
  { icon: Clock,        title: "Fast & Simple",         desc: "Complete evaluations quickly through our streamlined online consultation process" },
  { icon: Users,        title: "Thousands Helped",      desc: "Join thousands of satisfied patients who have received their Pennsylvania Medical Marijuana Card Online" },
  { icon: DollarSign,   title: "Transparent Pricing",   desc: "No hidden fees. Just straightforward pricing for your medical cannabis card in Pennsylvania" },
  { icon: Heart,        title: "Compassionate Care",    desc: "Personalized attention and support throughout your medical cannabis journey" },
  { icon: MessageSquare,title: "24/7 Support",          desc: "Patient support available when you need it most" },
];

export default function Trust() {
  return (
    <section className="py-20 px-5 bg-[linear-gradient(247.92deg,#ecfdf5_48.59%,#ffffff_91.29%)]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="heading-secondary pb-2.5">
          Trusted Choice for a Medical Marijuana Card{" "}
          <span className="text-accent">in Pennsylvania</span>
        </h2>
        <p className="text-muted">
          Trusted by thousands of patients, our licensed doctors provide secure evaluations for a
          Pennsylvania Medical Marijuana Card Online through a fast and affordable process.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-[#2ecc71]">
              <Icon size={22} className="text-white" />
            </div>
            <h3 className="heading-quaternary mb-2.5">{title}</h3>
            <p className="text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}