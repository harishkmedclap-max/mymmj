import Support from "@/public/assets/whychooseus/247_patient_support.webp";
import Convenient from "@/public/assets/whychooseus/convenient_evaluations.webp";
import HIPAA from "@/public/assets/whychooseus/hippa_compliant.webp";
import Pricing from "@/public/assets/whychooseus/honest_pricing.webp";
import Doctors from "@/public/assets/whychooseus/licensed_pa_doctors.webp";
import Trusted from "@/public/assets/whychooseus//trusted_platform.webp";

import Image from "next/image";

const cards = [
  { img: Doctors, title: "Licensed PA Doctors",      desc: "Consult with a licensed Pennsylvania MMJ doctor online who is board-certified and fully aligned with state medical cannabis regulations." },
  { img: Convenient,            title: "Convenient Evaluations",   desc: "Our streamlined online consultation process allows you to complete your MMJ evaluation securely, with no delays and a hassle-free experience." },
  { img: Trusted,            title: "Trusted Platform",         desc: "Pennsylvania residents count on us for professional medical marijuana evaluations delivered through a secure, dependable process." },
  { img: Pricing,            title: "Honest Pricing",           desc: "We provide clear, upfront pricing with no hidden fees, ensuring a transparent and trustworthy experience for Pennsylvania patients." },
  { img: HIPAA,            title: "HIPAA-Compliant",          desc: "Our secure platform protects your personal and medical information in accordance with HIPAA privacy standards." },
  { img: Support,            title: "24/7 Patient Support",     desc: "Our dedicated support team is available whenever you need assistance, helping ensure a smooth and stress-free evaluation experience." },
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
        {cards.map(({img, title, desc }) => (
          <div
              key={title}
              className="bg-white rounded-xl p-8
                        border-t-[3px] border-t-[#20B780]
                        shadow-[0_1px_3px_rgba(0,0,0,0.06)]
                        hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                        transition-shadow duration-300"
            >
            <div className=" mb-2">
                <Image src={img} alt={title} width={40} height={30} className="object-contain" style={{height:"auto",width:"auto"}}/>
              
            </div>
            <h3 className="heading-quaternary mb-2.5">{title}</h3>
            <p className="text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}