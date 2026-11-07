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
    <section className="relative w-full bg-side-stripes text-zinc-950 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container with Left, Right & Bottom Borders */}
      <div className="relative max-w-7xl mx-auto bg-white border-l border-r border-b border-zinc-200">

        {/* Centered Heading Content with Typography matching Hero */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-16 sm:py-20 md:py-24 font-sans">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
           
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-tight mb-4">
              Designed for Velocity, Reliability & Precision
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-3xl font-normal leading-relaxed font-sans">
              We eliminate unnecessary bloat and technical debt. Every microservice, UI component, and database query is designed for maximum throughput and ultra-low latency.
            </p>
          </div>
        </div>

        {/* Feature Grid: 3 Principle Cards - Attached Edge-to-Edge with Top/Bottom Borders and Inner Dividing Borders */}
        <div className="relative w-full border-t border-b border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200">
            {CORE_VALUES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-8 sm:p-10 lg:p-12 bg-white hover:bg-zinc-50/60 transition-all duration-300 flex flex-col justify-between"
                >

                  <div>
                    <div className="w-12 h-12 bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-950 mb-8 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-6 h-6 text-zinc-950" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100 flex items-baseline justify-between transition-colors duration-300">
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
