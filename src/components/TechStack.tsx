"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

function NextjsIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="white"
      />
      <rect x="115" y="54" width="12" height="72" fill="white" />
    </svg>
  );
}

function ReactIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function PythonIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.914 2C9.172 2 7.37 3.2 7.37 5.61v2.44h4.63v.81H5.49C3.12 8.86 2 10.37 2 13.12c0 2.76 1.15 4.26 3.49 4.26h2.09v-2.93c0-2.42 1.83-4.26 4.33-4.26h4.63V7.79C16.54 5.38 14.65 2 11.914 2zm-1.8 1.48a.93.93 0 110 1.86.93.93 0 010-1.86z"
        fill="#3776AB"
      />
      <path
        d="M12.086 22c2.742 0 4.544-1.2 4.544-3.61v-2.44H12v-.81h6.51c2.37 0 3.49-1.51 3.49-4.26 0-2.76-1.15-4.26-3.49-4.26h-2.09v2.93c0 2.42-1.83 4.26-4.33 4.26H7.46v2.4c0 2.41 1.89 5.79 4.626 5.79zm1.8-1.48a.93.93 0 110-1.86.93.93 0 010 1.86z"
        fill="#FFD43B"
      />
    </svg>
  );
}

function NodeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#5FA04E">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm-1.15 4.88c-1.86 0-2.85 1.05-2.85 2.68v.17c0 1.63 1.05 2.37 2.62 2.73l.63.15c.98.22 1.45.54 1.45 1.13 0 .73-.64 1.25-1.68 1.25-1.13 0-1.78-.54-1.9-1.46H7.55c.12 1.7 1.34 2.8 3.3 2.8 1.96 0 3.12-1.07 3.12-2.73v-.17c0-1.58-.93-2.34-2.55-2.71l-.63-.15c-.96-.22-1.52-.5-1.52-1.1 0-.68.57-1.13 1.58-1.13 1.05 0 1.63.48 1.75 1.35h1.56c-.12-1.58-1.2-2.76-3.01-2.76z" />
    </svg>
  );
}

function DockerIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.98 9.38h-1.92V7.46h1.92v1.92zm-2.4 0H9.66V7.46h1.92v1.92zm-2.4 0H7.26V7.46h1.92v1.92zm-2.4 0H4.86V7.46h1.92v1.92zm7.2-2.4h-1.92V5.06h1.92v1.92zm-2.4 0H9.66V5.06h1.92v1.92zm-2.4 0H7.26V5.06h1.92v1.92zm7.2 4.8h-1.92V9.86h1.92v1.92zm2.4 0h-1.92V9.86h1.92v1.92zm4.5 1.48c-.46-.33-1.44-.45-2.22-.24-.13-.78-.55-1.48-1.13-1.96l-.55-.42-.37.58c-.37.58-.5 1.31-.38 2.02-.33.18-.7.3-1.14.36H1.54c-.38 1.64.08 3.33 1.25 4.54 1.54 1.6 3.8 2.47 6.46 2.47 5.17 0 9.24-2.82 10.74-7.5.83.05 1.67-.18 2.27-.69l.3-.26-.56-.9zm-13.8 5.4c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2z" />
    </svg>
  );
}

function GraphqlIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#E10098">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L4.84 8.44v7.12L12 19.69l7.16-4.13V8.44L12 4.31zM12 7a2 2 0 110 4 2 2 0 010-4zm5.2 3a2 2 0 110 4 2 2 0 010-4zM6.8 10a2 2 0 110 4 2 2 0 010-4zm2.6 4.5a2 2 0 110 4 2 2 0 010-4zm5.2 0a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  );
}

interface TechItem {
  name: string;
  category: string;
  description: string;
  iconSrc?: string;
  iconSvg?: React.ReactNode;
}

// Column 1: Frontend & Typed Architecture (Slides UP)
const COLUMN_1: TechItem[] = [
  {
    name: "TypeScript",
    category: "Typed Language",
    description: "End-to-end type safety, robust architecture, and enterprise maintainability.",
    iconSrc: "/tech_img/typescript.png",
  },
  {
    name: "Next.js",
    category: "React Framework",
    description: "Server components, streaming SSR, and edge runtimes for maximum Core Web Vitals.",
    iconSvg: <NextjsIcon className="w-8 h-8" />,
  },
  {
    name: "React",
    category: "UI Architecture",
    description: "Declarative component ecosystems, concurrent rendering, and dynamic state engines.",
    iconSvg: <ReactIcon className="w-8 h-8" />,
  },
  {
    name: "Python",
    category: "AI & Data Engine",
    description: "Enterprise LLM orchestration, model fine-tuning, and high-throughput data processing.",
    iconSvg: <PythonIcon className="w-8 h-8" />,
  },
];

// Column 2: Data Architecture & Storage (Slides DOWN)
const COLUMN_2: TechItem[] = [
  {
    name: "PostgreSQL",
    category: "Relational DB",
    description: "Rock-solid ACID compliance, complex querying, and reliable data integrity.",
    iconSrc: "/tech_img/postgresql.png",
  },
  {
    name: "MongoDB",
    category: "Document Store",
    description: "Flexible JSON schemas, horizontal clustering, and rapid iteration for modern applications.",
    iconSrc: "/tech_img/mongodb.png",
  },
  {
    name: "Redis",
    category: "In-Memory Cache",
    description: "Sub-millisecond latency caching, pub/sub messaging, and real-time session storage.",
    iconSrc: "/tech_img/redis.png",
  },
  {
    name: "MySQL",
    category: "Relational DB",
    description: "Proven high-throughput relational database supporting mission-critical workloads.",
    iconSrc: "/tech_img/mysql.png",
  },
];

// Column 3: Distributed Systems & Cloud Infrastructure (Slides UP)
const COLUMN_3: TechItem[] = [
  {
    name: "JavaScript",
    category: "Core Engine",
    description: "High-performance asynchronous runtime for responsive and dynamic web experiences.",
    iconSrc: "/tech_img/javascript.png",
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    description: "Event-driven, non-blocking I/O runtime engineered for high-concurrency microservices.",
    iconSvg: <NodeIcon className="w-8 h-8" />,
  },
  {
    name: "Docker & K8s",
    category: "Containerization",
    description: "Automated container orchestration, zero-downtime deployments, and self-healing clusters.",
    iconSvg: <DockerIcon className="w-8 h-8" />,
  },
  {
    name: "GraphQL & APIs",
    category: "API Layer",
    description: "Declarative querying, strong typing contracts, and ultra-efficient data fetching.",
    iconSvg: <GraphqlIcon className="w-8 h-8" />,
  },
];

// Mobile 3-Row Configurations for Horizontal Loop Marquee
const MOBILE_ROW_1: TechItem[] = [
  ...COLUMN_1, // TypeScript, Next.js, React, Python
  ...COLUMN_1,
];

const MOBILE_ROW_2: TechItem[] = [
  ...COLUMN_2, // PostgreSQL, MongoDB, Redis, MySQL
  ...COLUMN_2,
];

const MOBILE_ROW_3: TechItem[] = [
  ...COLUMN_3, // JavaScript, Node.js, Docker & K8s, GraphQL & APIs
  ...COLUMN_3,
];

function MobileTechCard({ item }: { item: TechItem }) {
  return (
    <div className="w-[230px] sm:w-[260px] p-4 sm:p-5 bg-white border-r border-zinc-200 shrink-0 flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="relative w-10 h-10 p-1.5 bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
            {item.iconSrc ? (
              <Image
                src={item.iconSrc}
                alt={`${item.name} technology icon - ${item.category}`}
                width={28}
                height={28}
                unoptimized
                className="w-7 h-7 object-contain"
              />
            ) : (
              item.iconSvg
            )}
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-zinc-500 uppercase tracking-wider">
            {item.category}
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-semibold text-zinc-950">
          {item.name}
        </h3>

        <p className="mt-1 text-xs text-zinc-600 leading-relaxed font-normal line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="relative p-7 sm:p-9 lg:p-10 bg-white border-b border-zinc-200 flex flex-col justify-between select-none">
      <div>
        {/* Top Bar: Icon and Category Tag */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="relative w-14 h-14 p-2 bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
            {item.iconSrc ? (
              <Image
                src={item.iconSrc}
                alt={`${item.name} technology icon - ${item.category}`}
                width={40}
                height={40}
                unoptimized
                className="w-10 h-10 object-contain"
              />
            ) : (
              item.iconSvg
            )}
          </div>
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-950">
          {item.name}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="relative w-full bg-white text-zinc-950 px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">

        {/* Section Header */}
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-10 sm:py-16 md:py-20 border-b border-zinc-200">
          <div className="flex flex-col max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Engineered with <br className="hidden sm:inline" /> 
              Modern Technologies
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-600 leading-relaxed font-normal">
              We leverage battle-tested languages, high-performance database engines, and distributed caching systems to build resilient digital infrastructure.
            </p>
          </div>
        </div>

        {/* Mobile: 3-Row Infinite Horizontal Marquee (Row 1 Left, Row 2 Right, Row 3 Left) */}
        <div className="relative w-full bg-white overflow-hidden md:hidden">
          {/* Left & Right Seamless Gradient Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

          {/* Row 1: Leftward scroll loop-wise */}
          <div className="w-full overflow-hidden border-b border-zinc-200">
            <div className="animate-marquee-left">
              <div className="flex">
                {MOBILE_ROW_1.map((item, idx) => (
                  <MobileTechCard key={`mob-r1-a-${idx}`} item={item} />
                ))}
              </div>
              <div className="flex" aria-hidden="true">
                {MOBILE_ROW_1.map((item, idx) => (
                  <MobileTechCard key={`mob-r1-b-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Rightward scroll loop-wise */}
          <div className="w-full overflow-hidden border-b border-zinc-200">
            <div className="animate-marquee-right">
              <div className="flex">
                {MOBILE_ROW_2.map((item, idx) => (
                  <MobileTechCard key={`mob-r2-a-${idx}`} item={item} />
                ))}
              </div>
              <div className="flex" aria-hidden="true">
                {MOBILE_ROW_2.map((item, idx) => (
                  <MobileTechCard key={`mob-r2-b-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Leftward scroll loop-wise */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-left-slow">
              <div className="flex">
                {MOBILE_ROW_3.map((item, idx) => (
                  <MobileTechCard key={`mob-r3-a-${idx}`} item={item} />
                ))}
              </div>
              <div className="flex" aria-hidden="true">
                {MOBILE_ROW_3.map((item, idx) => (
                  <MobileTechCard key={`mob-r3-b-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: 3-Column Infinite Vertical Marquee Arena (Col 1 UP, Col 2 DOWN, Col 3 UP) */}
        <div className="relative w-full bg-white overflow-hidden hidden md:block">
          
          {/* Top & Bottom Seamless Gradient Fade Masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

          {/* 3 Columns Display - Attached Edge-to-Edge with 1px Vertical Dividers */}
          <div className="grid grid-cols-3 divide-x divide-zinc-200">
            
            {/* Column 1: UP side slide loop-wise */}
            <div className="h-[560px] sm:h-[620px] overflow-hidden relative">
              <div className="animate-scroll-up">
                <div className="flex flex-col">
                  {COLUMN_1.map((item, idx) => (
                    <TechCard key={`col1-a-${idx}`} item={item} />
                  ))}
                </div>
                <div className="flex flex-col" aria-hidden="true">
                  {COLUMN_1.map((item, idx) => (
                    <TechCard key={`col1-b-${idx}`} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: DOWN side scroll loop-wise */}
            <div className="h-[560px] sm:h-[620px] overflow-hidden relative">
              <div className="animate-scroll-down">
                <div className="flex flex-col">
                  {COLUMN_2.map((item, idx) => (
                    <TechCard key={`col2-a-${idx}`} item={item} />
                  ))}
                </div>
                <div className="flex flex-col" aria-hidden="true">
                  {COLUMN_2.map((item, idx) => (
                    <TechCard key={`col2-b-${idx}`} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: UP side scroll loop-wise */}
            <div className="h-[560px] sm:h-[620px] overflow-hidden relative">
              <div className="animate-scroll-up-slow">
                <div className="flex flex-col">
                  {COLUMN_3.map((item, idx) => (
                    <TechCard key={`col3-a-${idx}`} item={item} />
                  ))}
                </div>
                <div className="flex flex-col" aria-hidden="true">
                  {COLUMN_3.map((item, idx) => (
                    <TechCard key={`col3-b-${idx}`} item={item} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Right corner "More" link */}
        <div className="border-t border-zinc-200 px-5 sm:px-12 lg:px-20 py-4 sm:py-5 flex justify-end bg-white">
          <Link
            href="#technologies"
            className="group/more inline-flex items-center gap-1.5 text-sm sm:text-base font-light text-zinc-950 hover:text-[#3A46CA] transition-all duration-200 cursor-pointer"
          >
            <span className="underline-offset-4 group-hover/more:underline">View All Technologies</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/more:text-[#3A46CA] transition-transform duration-200 group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
