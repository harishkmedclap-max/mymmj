import { Shield, Clock, Users, DollarSign, Heart, MessageSquare } from "lucide-react";

const cards = [
  { icon: Shield,       title: "Licensed PA Doctors", desc: "Consult with a licensed Pennsylvania MMJ doctor online who is board-certified and fully aligned with state medical cannabis regulations." },
  { icon: Clock,        title: "Convenient Evaluations", desc: "Our streamlined online consultation process allows you to complete your MMJ evaluation securely, with no delays and a hassle-free experience." },
  { icon: Users,        title: "Trusted Platform", desc: "Pennsylvania residents count on us for professional medical marijuana evaluations delivered through a secure, dependable process." },
  { icon: DollarSign,   title: "Honest Pricing", desc: "We provide clear, upfront pricing with no hidden fees, ensuring a transparent and trustworthy experience for Pennsylvania patients." },
  { icon: Heart,        title: "HIPAA-Compliant", desc: "Our secure platform protects your personal and medical information in accordance with HIPAA privacy standards." },
  { icon: MessageSquare,title: "24/7 Patient Support", desc: "Our dedicated support team is available whenever you need assistance, helping ensure a smooth and stress-free evaluation experience." },
];

export default function Trust() {
  return (
    <section className="py-20 px-5 bg-[linear-gradient(247.92deg,#ecfdf5_48.59%,#ffffff_91.29%)]">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="heading-secondary pb-2.5">
          Why Patients Choose Us for Their Medical{" "}
          <span className="text-accent"> Marijuana Card Pennsylvania</span>
        </h2>
        <p className="text-muted">
          Patients rely on our network of licensed doctors to receive medical cannabis certifications through secure online consultations. Every consultation is conducted by a Pennsylvania MMJ doctor online who understands state regulations and provides compassionate guidance.
        </p>
      </div>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-[#20B780]">
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