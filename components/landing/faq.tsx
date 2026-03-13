"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is a Medical Cannabis Card in Pennsylvania and who needs it?",       a: "This card allows eligible patients to legally access medical cannabis within the state after approval for a qualifying medical condition." },
  { q: "How do I know if I qualify for medical cannabis?",                        a: "A licensed physician will review your medical history and determine if you have a qualifying condition under Pennsylvania state law." },
  { q: "How long does the evaluation and approval process usually take?",          a: "Most patients receive approval within 24 hours of their consultation. The state registration may take a few additional days." },
  { q: "Do I need to visit a clinic in person for the evaluation?",               a: "No. All evaluations are conducted 100% online via secure video consultation from the comfort of your home." },
  { q: "Can a licensed physician review my condition and guide me?",              a: "Yes. Our board-certified Pennsylvania physicians will thoroughly review your condition and provide personalized guidance." },
  { q: "Is medical cannabis legal for registered patients in the state?",         a: "Yes. Pennsylvania has a legal medical marijuana program. Registered patients are fully protected under state law." },
  { q: "Can someone apply on behalf of a minor or dependent patient?",            a: "Yes. A parent or legal guardian may apply on behalf of a minor patient. Additional documentation will be required." },
  { q: "Will my medical information remain private during the evaluation?",       a: "Absolutely. Our platform is fully HIPAA-compliant and your medical information is kept strictly confidential." },
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
          <h2 className="heading-secondary text-white">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-muted-inv">
            Everything you need to know about getting your medical marijuana card in Pennsylvania.
          </p>
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