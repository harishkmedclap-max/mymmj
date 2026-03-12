"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

const navLinks = ["Process", "Conditions", "Pricing", "FAQ"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out
      ${
        scrolled
          ? "backdrop-blur-md bg-white/70 border-b border-white/40 shadow-md"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
  >
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 min-w-fit">
          <Image src={logo} alt="Pennsylvania Medical Marijuana Card" width={200} height={80} />
        </div>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 text-sm font-medium hover:text-green-600 transition-colors duration-200"
              aria-label={`Link to ${item}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:800-123-4567"
            className="flex items-center gap-2 text-gray-700 text-sm font-medium hover:text-green-600 transition-colors duration-200"
          >
            <Phone className="w-4 h-4 text-green-600" strokeWidth={2} />
            800-123-4567
          </a>
          <a
            href="#"
            className="get_started"
          >
            Get Started
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div  id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50">
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 text-sm font-medium py-3 border-b border-gray-50 hover:text-green-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            {/* Phone */}
            <a
              href="tel:800-123-4567"
              aria-label="Call 800 123 4567"
              className="flex items-center gap-2 text-gray-700 text-sm font-medium py-3 border-b border-gray-50 hover:text-green-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-green-600" strokeWidth={2} />
              800-123-4567
            </a>

            {/* CTA */}
            <a
              href="#"
              className="mt-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-3 rounded-md text-center transition-colors duration-200"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}