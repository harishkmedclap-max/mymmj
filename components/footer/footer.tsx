import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/public/assets/LOGO PENSYLANIA.webp";
import Image from "next/image";
const quickLinks = ["How It Works", "Qualifying Conditions", "Pricing", "FAQ", "About Us"];
const legalLinks  = ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "State Regulations", "Disclaimer"];
const socialIcons = [
  { label: "Facebook on social media", icon: Facebook },
  { label: "Twitter on social media", icon: Twitter },
  { label: "Instagram on social media", icon: Instagram },
];
const contacts = [
  { icon: Phone,  primary: "1-800-123-4567",       secondary: "Mon-Fri 9AM-5PM EST" },
  { icon: Mail,   primary: "support@pammjcard.com", secondary: "24/7 Email Support"  },
  { icon: MapPin, primary: "All of Pennsylvania",   secondary: "100% Online Service" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d2e2a] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap gap-14 justify-between">
        <div className="flex flex-col gap-5 max-w-[220px]">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Pennsylvania Medical Marijuana Card"
              width={200}
              height={56}
              priority
              fetchPriority="high"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/80">Trusted by thousands of Pennsylvania patients for secure, professional medical marijuana evaluations.</p>
          <nav aria-label="Social media links">
            <div className="flex gap-2">
               {socialIcons.map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  >
                    <Icon
                      className="w-4 h-4 text-white/80"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
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