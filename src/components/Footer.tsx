"use client";

import { useState } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 11 11"
      className={`w-[11px] h-[11px] pointer-events-none select-none text-zinc-400 overflow-visible ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <line x1="5.5" y1="0.5" x2="5.5" y2="10.5" />
      <line x1="0.5" y1="5.5" x2="10.5" y2="5.5" />
    </svg>
  );
}

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
      {/* Top 3-Column Section */}
      <div className="w-full border-b border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          
          {/* Column 1: CONTACT */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 flex flex-col justify-between min-h-[340px] sm:min-h-[400px]">
            {/* Top-left corner cross mark at outer left border */}
            <CrossMark className="hidden md:block absolute top-[-0.5px] left-[-0.5px] -translate-x-1/2 -translate-y-1/2 z-20" />
            {/* Bottom-left corner cross mark at outer left border */}
            <CrossMark className="hidden md:block absolute bottom-[-0.5px] left-[-0.5px] -translate-x-1/2 translate-y-1/2 z-20" />

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                Contact
              </h3>

              <div className="mt-8 space-y-2.5">
                <a
                  href="mailto:info@deplysoft.com"
                  className="block text-sm sm:text-base font-normal text-zinc-300 hover:text-white transition-colors"
                >
                  info@deplysoft.com
                </a>
                <Link
                  href="#contact"
                  className="block text-sm sm:text-base font-normal text-zinc-300 hover:text-white transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 space-y-2">
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                DEPLYSOFT Origin powers
                <br />
                Enterprise Infrastructure
              </p>
              <Link
                href="#solutions"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold border-b text-[#ffffff] underline-offset-4 transition-colors"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: CONNECT */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 flex flex-col justify-between min-h-[340px] sm:min-h-[400px]">
            {/* Top-left corner cross mark at divider 1 */}
            <CrossMark className="hidden md:block absolute top-[-0.5px] left-[-0.5px] -translate-x-1/2 -translate-y-1/2 z-20" />
            {/* Bottom-left corner cross mark at divider 1 */}
            <CrossMark className="hidden md:block absolute bottom-[-0.5px] left-[-0.5px] -translate-x-1/2 translate-y-1/2 z-20" />

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                Connect
              </h3>

              <div className="mt-8 space-y-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm sm:text-base font-normal text-zinc-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm sm:text-base font-normal text-zinc-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm sm:text-base font-normal text-zinc-300 hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm sm:text-base font-normal text-zinc-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: SUBSCRIBE */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 flex flex-col justify-between min-h-[340px] sm:min-h-[400px]">
            {/* Top-left corner cross mark at divider 2 */}
            <CrossMark className="hidden md:block absolute top-[-0.5px] left-[-0.5px] -translate-x-1/2 -translate-y-1/2 z-20" />
            {/* Bottom-left corner cross mark at divider 2 */}
            <CrossMark className="hidden md:block absolute bottom-[-0.5px] left-[-0.5px] -translate-x-1/2 translate-y-1/2 z-20" />
            {/* Top-right corner cross mark at outer right border */}
            <CrossMark className="hidden md:block absolute top-[-0.5px] right-[-0.5px] translate-x-1/2 -translate-y-1/2 z-20" />
            {/* Bottom-right corner cross mark at outer right border */}
            <CrossMark className="hidden md:block absolute bottom-[-0.5px] right-[-0.5px] translate-x-1/2 translate-y-1/2 z-20" />

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                Subscribe
              </h3>

              <form onSubmit={handleSubscribe} className="mt-8 relative max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-zinc-700 text-white placeholder:text-zinc-500 text-sm sm:text-base pb-2.5 pr-10 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-0 bottom-2.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                {subscribed && (
                  <p className="absolute -bottom-6 left-0 text-xs text-white">
                    Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Giant Edge-to-Edge DEPLYSOFT Brand Text */}
      <div className="w-full bg-[#0d0d0f] px-2 sm:px-4 lg:px-6 pt-2 pb-0 overflow-hidden select-none">
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
