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
    <section className="relative w-full bg-white text-zinc-950 px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">

        {/* Centered Heading Content with Clean Responsive Padding */}
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-12 sm:py-16 md:py-20 font-sans">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-tight mb-3 sm:mb-4">
              Designed for Velocity, Reliability & Precision
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-3xl font-normal leading-relaxed font-sans">
              We eliminate unnecessary bloat and technical debt. Every microservice, UI component, and database query is designed for maximum throughput and ultra-low latency.
            </p>
          </div>
        </div>

        {/* Feature Grid: 3 Principle Cards - Attached Edge-to-Edge with Inner Dividing Borders */}
        <div className="relative w-full border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200">
            {CORE_VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-6 sm:p-8 lg:p-12 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-950 mb-6 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-950" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-950 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                        {item.stat}
                      </span>
                      <span className="ml-2 text-xs font-medium text-zinc-500">
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
