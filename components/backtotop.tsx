"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

 useEffect(() => {
  let ticking = false;
  
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const top = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? (top / height) * 100 : 0);
        setVisible(top > 300);
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const r = 20;
  const circ = 2 * Math.PI * r;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-transparent border-none p-0 transition-all duration-300 group
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="absolute inset-0 rounded-full bg-neutral-900 shadow-lg group-hover:scale-110 group-active:scale-95 transition-transform duration-200" />
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
        <defs>
          <linearGradient id="btt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <circle cx="28" cy="28" r={r} fill="none" stroke="url(#btt-grad)" strokeWidth="2"
          strokeLinecap="round" strokeDasharray={circ}
          strokeDashoffset={circ - (progress / 100) * circ}
          style={{ transition: "stroke-dashoffset 0.15s ease" }}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[7px] font-mono tracking-widest text-white/50 uppercase">top</span>
      </div>
    </button>
  );
}