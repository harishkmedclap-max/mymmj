"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is a Pennsylvania medical marijuana card, and who needs one?",       a: "A Pennsylvania medical marijuana card is an official card issued by the Pennsylvania Department of Health that allows certified patients to legally purchase and possess medical cannabis from state‑licensed dispensaries after they receive a physician’s certification." },
  { q: "How do I qualify for a Pennsylvania medical marijuana card?",                        a: "You must be a Pennsylvania resident and have a serious medical condition certified by a physician approved to participate in the state’s Medical Marijuana Program. Conditions include anxiety disorders, chronic pain, cancer, PTSD, epilepsy, and more." },
  { q: "Can I apply for a medical marijuana card in Pennsylvania online?",          a: "Yes. After you register on the state’s medical marijuana registry, you can complete your evaluation with a licensed physician via secure telehealth, and if certified, proceed with state registration." },
  { q: "What is the cost to get a Pennsylvania medical marijuana card?",               a: "There are two main costs: a physician evaluation fee (varies) and a $50 state registration fee paid to the Pennsylvania Department of Health. Fee waivers may apply to certain assistance program participants, such as Medicaid or SNAP recipients." },
  { q: "How long does it take to receive my Pennsylvania medical marijuana card?",              a: "After certification and payment of the state fee, the Department of Health typically prints and mails your card within 7–14 days." },
  { q: "How long is a Pennsylvania medical marijuana card valid?",         a: "A Pennsylvania medical marijuana card is valid for one year from the date of issuance and must be renewed annually with a physician recertification." },
  { q: "Where can I use my Pennsylvania medical marijuana card?",            a: "Once issued, you can purchase medical cannabis products from state‑licensed dispensaries throughout Pennsylvania; out‑of‑state medical cards are not accepted." },
  { q: "What products can I buy with my Pennsylvania medical marijuana card?",       a: "Pennsylvania dispensaries offer regulated medical cannabis products such as tinctures, capsules, oils, vaporizable products, and other forms approved under state program rules." },
  {q:"Do I need to pay sales tax on medical cannabis purchases in Pennsylvania?", a:"No. Medical cannabis purchases made with a valid Pennsylvania medical marijuana card are exempt from state sales tax, reducing costs compared with regular taxable purchases."},
  {q:"Can I designate a caregiver to help me with my medical marijuana card?", a:"Yes. A patient can designate a caregiver who must also register with the Pennsylvania Medical Marijuana Program and complete a background check, allowing the caregiver to obtain medical cannabis on the patient’s behalf"},
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="w-full bg-[#0d2e2a] py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">

        <div className="text-center flex flex-col gap-2">
          <span className="inline-flex mx-auto border border-white/20 text-white/60 text-xs px-4 py-1.5 rounded-full w-fit">
            FAQ
          </span>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-secondary text-white">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-muted-inv">
              Everything you need to know about getting your medical marijuana card in Pennsylvania.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-[#1a3a35] rounded-xl overflow-hidden border border-white/5">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="text-small font-medium text-white/90">{q}</span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  {open === i
                    ? <Minus className="w-3 h-3 text-white" strokeWidth={2.5} />
                    : <Plus  className="w-3 h-3 text-white" strokeWidth={2.5} />}
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-4 border-t border-white/5 pt-3">
                  <p className="text-muted-inv">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}