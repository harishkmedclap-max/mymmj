import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["How It Works", "Qualifying Conditions", "Pricing", "FAQ", "About Us"];
const legalLinks  = ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "State Regulations", "Disclaimer"];
const socialIcons = [
  { label: "Facebook on social media",  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter on social media",   d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  { label: "Instagram on social media", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11A3.5 3.5 0 0121 6.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z" },
];
const contacts = [
  { icon: Phone,  primary: "1-800-123-4567",       secondary: "Mon-Fri 9AM-5PM EST" },
  { icon: Mail,   primary: "support@pammjcard.com", secondary: "24/7 Email Support"  },
  { icon: MapPin, primary: "All of Pennsylvania",   secondary: "100% Online Service" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1f1c] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-row flex-wrap gap-10 justify-between">
        <div className="flex flex-col gap-5 max-w-[220px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0" aria-hidden="true">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2l-1-1c1-1 3-3 3-5-2 1-4 3-5 5L6 8c2-2 6-6 6-6C5 4 3 9 3 9c-1 5 2 9 2 9s-1-2-1-5c1-1 2-2 3-2 0 4 1 7 4 9 0-2 0-6 2-8l5-2c-1 2-2 4-2 7 1-1 3-4 3-7l3-3c-1 3-1 7-1 9 1-2 2-4 2-7z"/></svg>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold text-sm">Pennsylvania</p>
              <p className="text-emerald-400 font-semibold text-sm">Medical Marijuana Card</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/80">Trusted by thousands of Pennsylvania patients for secure, professional medical marijuana evaluations.</p>
          <nav aria-label="Social media links">
            <div className="flex gap-2">
              {socialIcons.map(({ label, d }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition">
                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </nav>
        </div>

        <nav aria-label="Quick links">
          <p className="text-white font-semibold text-sm mb-3">Quick Links</p>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link}><a href="#" className="text-sm text-white/80 hover:text-emerald-400 focus:outline-none focus:underline transition">{link}</a></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal links">
          <p className="text-white font-semibold text-sm mb-3">Legal</p>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <li key={link}><a href="#" className="text-sm text-white/80 hover:text-emerald-400 focus:outline-none focus:underline transition">{link}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-white font-semibold text-sm mb-3">Contact Us</p>
          <address className="not-italic flex flex-col gap-3">
            {contacts.map(({ icon: Icon, primary, secondary }) => (
              <div key={primary} className="flex items-start gap-2">
                <Icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <p className="text-sm text-white font-medium">{primary}</p>
                  <p className="text-sm text-white/75">{secondary}</p>
                </div>
              </div>
            ))}
          </address>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/60">
        {/* CONTRAST FIX: /30 = 1.9:1 FAIL → /60 = 3.5:1 ✓ (large text threshold) */}
        © {new Date().getFullYear()} Pennsylvania Medical Marijuana Card. All rights reserved.
      </div>
    </footer>
  );
}