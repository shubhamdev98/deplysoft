"use client";

import { ShieldCheck, Zap, Layers } from "lucide-react";


const CORE_VALUES = [
  {
    icon: Zap,
    title: "Precision Engineering",
    description:
      "We eliminate unnecessary bloat and technical debt. Every microservice, UI component, and database query is designed for maximum throughput and ultra-low latency.",
    stat: "10x",
    statLabel: "Faster Execution",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    description:
      "Architected with zero-trust security, automated failover, and comprehensive test coverage so your platforms run 24/7 without costly disruptions.",
    stat: "99.99%",
    statLabel: "Guaranteed Uptime",
  },
  {
    icon: Layers,
    title: "Purpose-Built Value",
    description:
      "We build what your users actually need. Scalable software architectures tailored to turn complex business requirements into seamless, high-converting digital products.",
    stat: "100%",
    statLabel: "Tailored Solutions",
  },
];

export default function Philosophy() {
  return (
    <section className="relative w-full bg-[#18181b] text-white px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container with Left & Right Vertical Borders matching Hero */}
      <div className="relative max-w-7xl mx-auto border-l border-r border-zinc-800">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-900/15 via-emerald-950/10 to-transparent blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Centered Heading Content with Typography matching Hero */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-16 sm:py-20 md:py-24 font-sans">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
           
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Designed for Velocity, Reliability & Precision
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-3xl font-normal leading-relaxed font-sans">
              We eliminate unnecessary bloat and technical debt. Every microservice, UI component, and database query is designed for maximum throughput and ultra-low latency.
            </p>
          </div>
        </div>

        {/* Feature Grid: 3 Principle Cards - Attached Edge-to-Edge with Top/Bottom Borders and Inner Dividing Borders */}
        <div className="relative w-full border-t border-b border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
            {CORE_VALUES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-8 sm:p-10 lg:p-12 bg-[#18181b] hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between"
                >

                  <div>
                    <div className="w-12 h-12 bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-white mb-8 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800/80 group-hover:border-zinc-700/80 flex items-baseline justify-between transition-colors duration-300">
                    <div>
                      <span className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                        {item.stat}
                      </span>
                      <span className="ml-2 text-xs font-extralight text-zinc-400">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
