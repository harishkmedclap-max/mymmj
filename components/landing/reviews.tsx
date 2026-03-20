// import { Quote } from "lucide-react";
import Quote from "@/public/assets/commonicons/colon.webp";
import Image from "next/image";
const reviews = [
  {
    text: "The entire process was so simple and professional. I got my Pennsylvania medical marijuana card approved within days. The doctor was knowledgeable and really took time to understand my condition.",
    name: "Sarah M.",
    location: "Philadelphia, PA",
    date: "January 2024",
  },
  {
    text: "I was nervous about the online consultation, but it was incredibly easy. The Pennsylvania MMJ doctor online was compassionate and answered all my questions. Highly recommend!",
    name: "James T.",
    location: "Pittsburgh, PA",
    date: "January 2024",
  },
  {
    text: "Best decision I made for my chronic pain management. Getting my medical marijuana card in Pennsylvania through this service was straightforward with transparent pricing and no surprises.",
    name: "Maria L.",
    location: "Allentown, PA",
    date: "December 2023",
  },
];

function Stars() {
  return (
    /* role="img" + aria-label so screen readers say "5 stars" not 5 SVGs */
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">

        <div className="flex flex-col items-center gap-3 text-center">
          {/* CONTRAST FIX: text-emerald-600 on bg-emerald-50 = 3.1:1 fail → emerald-800 = 6.9:1 ✓ */}
          {/* <span className="border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full">
            Patient Reviews
          </span> */}
          <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-secondary pb-2.5">
             What Our Patients {" "}
            <span className="text-accent"> Are Saying</span>
          </h2>
          <p className="text-muted max-w-3xl mx-auto">
            Real patient feedback highlights the clear guidance our physicians provide, helping patients feel confident and supported throughout the evaluation process.
          </p>
        </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {reviews.map(({ text, name, location, date }) => (
            <article key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <Stars />
              <Image src={Quote} alt="Quote" width={24} height={24} className="object-contain" />
              <p className="text-sm text-gray-700 leading-relaxed flex-1">{text}</p>
              <footer>
                <p className="text-sm font-bold text-gray-900">{name}</p>
                {/* CONTRAST FIX: text-gray-400 fails at text-xs → text-gray-600 */}
                <p className="text-sm text-gray-600">{location}</p>
                <p className="text-sm text-gray-600">
                  <time>{date}</time>
                </p>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}