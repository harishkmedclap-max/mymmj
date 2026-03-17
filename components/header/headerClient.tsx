"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

const navLinks = ["Process", "Conditions", "Pricing", "FAQ"];

export default function HeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${scrolled
          ? "backdrop-blur-md bg-white/70 border-b border-white/40 shadow-md"
          : "bg-white border-b border-gray-100 shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        <Image
          src={logo}
          alt="Pennsylvania Medical Marijuana Card"
          width={200}
          height={56}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 160px, 200px"
        />

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:800-123-4567"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-600" strokeWidth={2} />
            800-123-4567
          </a>
          <a
            href="#apply"
            className="bg-[#01282b] text-white text-sm font-semibold rounded px-5 py-1.5 hover:bg-[#023f44] transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 py-3 border-b border-gray-50 hover:text-emerald-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:800-123-4567"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 py-3 border-b border-gray-50 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" strokeWidth={2} />
              800-123-4567
            </a>
            <a
              href="#apply"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-md text-center hover:bg-gray-700 transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}