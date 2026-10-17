"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: string;
}

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
        
        {/* Header with Container Padding */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Engineered with <br className="hidden sm:inline" /> 
              Modern Technologies
            </h2>

            <p className="mt-4 text-lg sm:text-xl text-zinc-600 leading-relaxed">
              We leverage battle-tested languages, high-performance database engines, and distributed caching systems to build resilient digital infrastructure.
            </p>
          </div>
        </div>

        {/* Tech Grid (6 Cards) - Attached Edge-to-Edge with Top Border and Inner Dividing Borders */}
        <div className="relative w-full border-t border-zinc-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
            {TECH_LIST.map((item, index) => (
              <div
                key={item.name}
                className="group relative p-7 sm:p-9 lg:p-10 bg-white hover:bg-zinc-50/70 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top-Left CrossMark for Row 1 columns */}
                {(index === 0 || index === 1 || index === 2) && (
                  <CrossMark className="hidden lg:block absolute top-[-0.5px] left-[-0.5px] -translate-x-1/2 -translate-y-1/2 z-20" />
                )}

                {/* Top-Right CrossMark for outer right column of Row 1 */}
                {index === 2 && (
                  <CrossMark className="hidden lg:block absolute top-[-0.5px] right-[-0.5px] translate-x-1/2 -translate-y-1/2 z-20" />
                )}

                {/* Bottom-Left CrossMark for all columns in both rows */}
                <CrossMark className="hidden lg:block absolute bottom-[-0.5px] left-[-0.5px] -translate-x-1/2 translate-y-1/2 z-20" />

                {/* Bottom-Right CrossMark for outer right column of both rows */}
                {(index === 2 || index === 5) && (
                  <CrossMark className="hidden lg:block absolute bottom-[-0.5px] right-[-0.5px] translate-x-1/2 translate-y-1/2 z-20" />
                )}

                <div>
                  {/* Top Bar: Icon and Category Tag */}
                  <div className="flex items-center justify-between mb-8">
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
                <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-800 group-hover:text-[#3A46CA] transition-colors">
                  <span>Explore Stack</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-[#3A46CA]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Right corner "More" link */}
        <div className="border-t border-zinc-200 px-6 sm:px-12 lg:px-20 py-5 flex justify-end bg-white">
          <Link
            href="#technologies"
            className="group/more inline-flex items-center gap-1.5 text-sm sm:text-base font-light text-zinc-950 hover:text-[#3A46CA] transition-all duration-200 cursor-pointer"
          >
            <span className="underline-offset-4 group-hover/more:underline">View All Technologies</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover/more:text-[#3A46CA] transition-transform duration-200 group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
