import logo from "@/public/assets/logo.webp";
import Image from "next/image";
import facebook from "@/public/assets/social/facebook.webp";
import twitter from "@/public/assets/social/twiter.webp";
import instagram from "@/public/assets/social/instagram.webp";
import telephone from "@/public/assets/social/phone.webp";
import mail from "@/public/assets/social/email.webp";
import location from "@/public/assets/social/location.webp";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

const quickLinks = [
  { label: "How It Works",           href: `${BASE_URL}/#process`   },
  { label: "Qualifying Conditions",  href: `${BASE_URL}/#conditions`},
  { label: "Pricing",                href: `${BASE_URL}/#pricing`   },
  { label: "FAQ",                    href: `${BASE_URL}/#faq`       },
  { label: "About Us",               href: `${BASE_URL}/#apply`     },
];

const legalLinks = [
  { label: "Privacy Policy",    href: `${BASE_URL}` },
  { label: "Terms of Service",  href: `${BASE_URL}` },
  { label: "HIPAA Compliance",  href: `${BASE_URL}` },
  { label: "State Regulations", href: `${BASE_URL}` },
  { label: "Disclaimer",        href: `${BASE_URL}` },
];

const socialIcons = [
  { label: "Facebook on social media", img: facebook, href: "https://facebook.com" },
  { label: "Twitter on social media",  img: twitter,  href: "https://twitter.com"  },
  { label: "Instagram on social media",img: instagram, href: "https://instagram.com"},
];

const contacts = [
  { img: telephone,  primary: "1-800-123-4567",       secondary: "Mon-Fri 9AM-5PM EST" },
  { img: mail,   primary: "support@pammjcard.com", secondary: "24/7 Email Support"  },
  { img: location, primary: "All of Pennsylvania",   secondary: "100% Online Service" },
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
              sizes="(max-width: 768px) 160px, 200px"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/80">
            The United State's Trusted Medical Marijuana Evaluation Platform
          </p>
          <nav aria-label="Social media links">
            <div className="flex gap-2">
              {socialIcons.map(({ label, img, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mr-4 inline-block transition-all duration-300"
              >
                <Image
                  src={img}
                  alt={label}
                  width={28}
                  height={28}
                  className="object-contain transition-all duration-300 ease-out
                            group-hover:-translate-y-1 
                            group-hover:scale-110 
                            group-hover:rotate-[10deg]
                            group-hover:drop-shadow-[0_8px_15px_rgba(16,185,129,0.5)]"
                />
              </a>
              ))}
            </div>
          </nav>
        </div>

        <nav aria-label="Quick links">
          <p className="text-white font-semibold text-sm mb-3">Quick Links</p>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/80 hover:text-emerald-400 focus:outline-none focus:underline transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal links">
          <p className="text-white font-semibold text-sm mb-3">Legal</p>
          <ul className="flex flex-col gap-2">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/80 hover:text-emerald-400 focus:outline-none focus:underline transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-white font-semibold text-sm mb-3">Contact Us</p>
          <address className="not-italic flex flex-col gap-3">
            {contacts.map(({ img, primary, secondary }) => (
              <div
                key={primary}
                className="group flex items-start gap-3 cursor-pointer transition-all duration-300"
              >
                <Image
                  src={img}
                  alt={primary}
                  width={22}
                  height={22}
                  className="object-contain transition-all duration-300 ease-out
                            group-hover:-translate-y-1
                            group-hover:scale-110
                            group-hover:rotate-[10deg]
                            group-hover:drop-shadow-[0_8px_15px_rgba(16,185,129,0.5)]"
                />
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
        © {new Date().getFullYear()} Pennsylvania Medical Marijuana Card. All rights reserved.
      </div>
    </footer>
  );
}