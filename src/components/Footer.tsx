"use client";

import { useState } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { ArrowRight, ArrowUpRight, Mail, MapPin, CheckCircle2 } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const SERVICES_LINKS = [
  { label: "Generative AI & LLMs", href: "#ai-llms" },
  { label: "Cloud & Distributed Systems", href: "#cloud-systems" },
  { label: "Full-Stack Product Engineering", href: "#fullstack-engineering" },
  { label: "Mobile App Development", href: "#services" },
  { label: "Computer Vision Systems", href: "#cv-development" },
  { label: "VisionOS Spatial Apps", href: "#visionos-apps" },
  { label: "IoT & Hardware Gateways", href: "#iot-solutions" },
  { label: "Cybersecurity & Zero-Trust", href: "#cybersecurity" },
];

const HIRE_LINKS = [
  { label: "Swift / iOS Developers", href: "#hire-swift" },
  { label: "Kotlin / Android Devs", href: "#hire-kotlin" },
  { label: "Next.js & React Engineers", href: "#hire-nextjs" },
  { label: "Python & AI Developers", href: "#hire-python" },
  { label: "Go & Rust Systems Devs", href: "#hire-golang" },
  { label: "AWS & DevOps Architects", href: "#hire-aws" },
  { label: "Node.js Backend Devs", href: "#hire-node" },
  { label: "Full-Stack Engineers", href: "#hire-react" },
];

const COMPANY_LINKS = [
  { label: "About Deplysoft", href: "#about" },
  { label: "Engineering Philosophy", href: "#philosophy" },
  { label: "Modern Tech Stack", href: "#technologies" },
  { label: "Enterprise Case Studies", href: "#portfolio" },
  { label: "Careers", href: "#careers", badge: "Hiring" },
  { label: "Tech Insights & Blog", href: "#blog" },
  { label: "Partner Ecosystem", href: "#partner" },
  { label: "Security & SOC 2", href: "#security" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full bg-[#0d0d0f] text-white font-sans overflow-hidden border-t border-zinc-800">
      
      {/* Top Newsletter & Brand Statement Bar */}
      <div className="w-full border-b border-zinc-800 bg-[#0d0d0f] px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 max-w-7xl mx-auto">
          <div className="max-w-xl">
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
              Architecting Enterprise Digital Experiences
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
              Subscribe to get architectural deep-dives, systems benchmarks, and platform release notes.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative w-full lg:max-w-md">
            <div className="relative flex items-stretch border border-zinc-700 focus-within:border-[#3A46CA] bg-zinc-900/90 transition-colors overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your enterprise email..."
                required
                className="w-full bg-transparent text-white placeholder:text-zinc-500 text-xs sm:text-sm px-4 py-3 sm:py-3.5 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#3A46CA] hover:bg-[#323cb5] text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 self-stretch"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {subscribed && (
              <p className="absolute -bottom-5 left-0 text-xs text-emerald-400 font-medium">
                ✓ Thank you for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main Grid: 2 Columns on Mobile with Vertical Line, 4 Columns on Desktop */}
      <div className="w-full border-b border-zinc-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">

          {/* Column 1: SERVICES */}
          <div className="bg-[#0d0d0f] p-5 sm:p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-zinc font-semibold mb-4 sm:mb-6">
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {SERVICES_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-200 block truncate"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: HIRE TALENT */}
          <div className="bg-[#0d0d0f] p-5 sm:p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-zinc font-semibold mb-4 sm:mb-6">
                Hire Talent
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {HIRE_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-200 block truncate"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: COMPANY */}
          <div className="bg-[#0d0d0f] p-5 sm:p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-zinc font-semibold mb-4 sm:mb-6">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="truncate">{item.label}</span>
                      
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: CONTACT & LOCATIONS */}
          <div className="bg-[#0d0d0f] p-5 sm:p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-zinc font-semibold mb-4 sm:mb-6">
                Contact
              </h3>

              {/* Direct Email */}
              <div className="space-y-2">
                <a
                  href="mailto:info@deplysoft.com"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#3A46CA] shrink-0" />
                  <span>info@deplysoft.com</span>
                </a>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-white hover:text-[#3A46CA] transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Offices */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-zinc-800/80 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <MapPin className="w-3 h-3 text-zinc-500 shrink-0" />
                  <span>San Francisco, CA (HQ)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <MapPin className="w-3 h-3 text-zinc-500 shrink-0" />
                  <span>Bengaluru, India (R&D)</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  Connect
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* SLA Response Badge */}
            <div className="mt-6 pt-3 border-t border-zinc-800/60">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <span>24/7 Enterprise Response</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer Bar: Also 2 Columns on Mobile with Vertical Line */}
      <div className="w-full border-b border-zinc-800">
        <div className="grid grid-cols-2 gap-px bg-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-400">
          
          {/* Sub-Col 1: Copyright & Legal */}
          <div className="bg-[#0d0d0f] px-5 py-4 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>© 2026 DEPLYSOFT Technologies Inc.</span>
            <div className="flex items-center gap-3 text-[11px]">
              <Link href="#privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="#terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>

          {/* Sub-Col 2: System Status & Certifications */}
          <div className="bg-[#0d0d0f] px-5 py-4 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-zync-400">
              <span>All Systems Operational</span>
            </span>
            <span className="text-[11px] text-zinc-500">
              SOC 2 Type II • ISO 27001
            </span>
          </div>

        </div>
      </div>

      {/* Giant Edge-to-Edge DEPLYSOFT Brand Text */}
      <div className="w-full bg-[#0d0d0f] px-2 sm:px-4 lg:px-6 pt-4 pb-0 overflow-hidden select-none">
        <svg
          viewBox="0 0 1300 270"
          className="w-full h-auto block select-none pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="225"
            textAnchor="middle"
            fill="#3A46CA"
            textLength="1280"
            lengthAdjust="spacingAndGlyphs"
            className={outfit.className}
            style={{
              fontSize: "250px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            DEPLYSOFT
          </text>
        </svg>
      </div>

    </footer>
  );
}
