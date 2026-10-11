"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: string;
}

const TECH_LIST: TechItem[] = [
  {
    name: "TypeScript",
    category: "Typed Language",
    description: "End-to-end type safety, robust architecture, and enterprise maintainability.",
    icon: "/tech_img/typescript.png",
  },
  {
    name: "JavaScript",
    category: "Core Engine",
    description: "High-performance asynchronous runtime for responsive and dynamic web experiences.",
    icon: "/tech_img/javascript.png",
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    description: "Rock-solid ACID compliance, complex querying, and reliable data integrity.",
    icon: "/tech_img/postgresql.png",
  },
  {
    name: "MongoDB",
    category: "Document Store",
    description: "Flexible JSON schemas, horizontal clustering, and rapid iteration for modern applications.",
    icon: "/tech_img/mongodb.png",
  },
  {
    name: "Redis",
    category: "In-Memory Cache",
    description: "Sub-millisecond latency caching, pub/sub messaging, and real-time session storage.",
    icon: "/tech_img/redis.png",
  },
  {
    name: "MySQL",
    category: "Relational DB",
    description: "Proven high-throughput relational database supporting mission-critical workloads.",
    icon: "/tech_img/mysql.png",
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full bg-white px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container with Left & Right Vertical Borders matching site aesthetic */}
      <div className="relative max-w-7xl mx-auto border-l border-r border-b border-zinc-200">
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Engineered with Modern Technologies
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              We leverage battle-tested languages, high-performance database engines, and distributed caching systems to build resilient digital infrastructure.
            </p>
          </div>

          {/* Horizontal Line Divider matching framed container */}
          <div className="border-t border-zinc-200 -mx-6 sm:-mx-12 lg:-mx-20 my-12 sm:my-16" />

          {/* Tech Grid (6 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_LIST.map((item) => (
              <div
                key={item.name}
                className="group relative p-7 sm:p-8 bg-white border border-zinc-200 hover:border-[#3A46CA] hover:bg-zinc-50/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon and Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative w-14 h-14 p-2 bg-zinc-50 border border-zinc-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={40}
                        height={40}
                        unoptimized
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-100/80 px-2.5 py-1 border border-zinc-200/60">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-950 group-hover:text-[#3A46CA] transition-colors duration-200">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom link/indicator */}
                <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-800 group-hover:text-[#3A46CA] transition-colors">
                  <span>Explore Stack</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-[#3A46CA]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
