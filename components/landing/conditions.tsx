import { CheckCircle2 } from "lucide-react";

const conditions = [
  "Amyotrophic lateral sclerosis",
  "Anxiety disorders",
  "Autism",
  "Cancer, including remission therapy",
  "Chronic Hepatitis C",
  "Crohn's disease",
  "Central Spasticity",
  "Dyskinetic and spastic movement disorders",
  "Epilepsy",
  "Glaucoma",
  "HIV / AIDS",
  "Huntington's disease",
  "Inflammatory bowel disease",
  "Intractable seizures",
  "Multiple sclerosis",
  "Neurodegenerative diseases",
  "Neuropathies",
  "Opioid use disorder",
  "Parkinson's disease",
  "Post-Traumatic Stress Disorder (PTSD)",
  "Severe Chronic Pain",
  "Sickle cell anemia",
  "Terminal illness",
  "Tourette syndrome",
];

export default function Conditions() {
  return (
    <section id="conditions" className="w-full bg-gradient-to-b from-white to-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-secondary pb-2.5">
             Conditions That Qualify for a Medical{" "}
             <br />
            <span className="text-accent"> Marijuana Card in Pennsylvania</span>
          </h2>
          <p className="text-muted">
            Licensed physicians review your serious medical condition to determine eligibility for the Pennsylvania Medical Marijuana Program. Under state law, a “serious medical condition” includes the following conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-2">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-white hover:shadow-sm transition-shadow"
            >
              <CheckCircle2 className="w-5 h-5 text-[#20B780] shrink-0" strokeWidth={2} />
              <span className="text-small font-medium text-gray-700">{condition}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}