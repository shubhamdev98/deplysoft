"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface TechItem {
  name: string;
  category: string;
  description: string;
  iconSrc: string;
}

// Column 1: Frontend & Design Architecture (Slides UP)
const COLUMN_1: TechItem[] = [
  {
    name: "TypeScript",
    category: "Typed Language",
    description: "End-to-end type safety, robust architecture, and enterprise maintainability.",
    iconSrc: "/tech_img/typescript.png",
  },
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
    iconSrc: "/tech_img/node-js.png",
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    description: "Collaborative interface design, interactive prototypes, and production design systems.",
    iconSrc: "/tech_img/figma.png",
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

// Column 3: Cloud Infrastructure & DevOps (Slides UP)
const COLUMN_3: TechItem[] = [
  {
    name: "Docker",
    category: "Containerization",
    description: "Automated container orchestration, reproducible environments, and seamless deployments.",
    iconSrc: "/tech_img/docker.png",
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    description: "Scalable cloud architecture, enterprise hosting, and high-availability global services.",
    iconSrc: "/tech_img/aws.png",
  },
  {
    name: "WordPress",
    category: "CMS & Platforms",
    description: "Flexible content management, custom themes, and robust digital publishing solutions.",
    iconSrc: "/tech_img/wordpress.png",
  },
  {
    name: "Redis In-Memory",
    category: "Real-Time Data",
    description: "High-throughput in-memory data store engineered for extreme performance and streaming.",
    iconSrc: "/tech_img/redis (1).png",
  },
];

// Mobile 3-Row Configurations for Horizontal Loop Marquee
const MOBILE_ROW_1: TechItem[] = [
  ...COLUMN_1,
  ...COLUMN_1,
];

const MOBILE_ROW_2: TechItem[] = [
  ...COLUMN_2,
  ...COLUMN_2,
];

const MOBILE_ROW_3: TechItem[] = [
  ...COLUMN_3,
  ...COLUMN_3,
];

function MobileTechCard({ item }: { item: TechItem }) {
  return (
    <div className="w-[230px] sm:w-[260px] p-4 sm:p-5 bg-white border-r border-zinc-200 shrink-0 flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="relative w-10 h-10 p-1.5 bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
            <Image
              src={item.iconSrc}
              alt={`${item.name} technology icon - ${item.category}`}
              width={28}
              height={28}
              unoptimized
              className="w-7 h-7 object-contain"
            />
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
            <Image
              src={item.iconSrc}
              alt={`${item.name} technology icon - ${item.category}`}
              width={40}
              height={40}
              unoptimized
              className="w-10 h-10 object-contain"
            />
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
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-10 sm:py-16 md:py-20 overflow-hidden">
          <div className="relative z-10 flex flex-col max-w-3xl">
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
          {/* Left & Right Subtle Gradient Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-8 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-8 bg-gradient-to-l from-white to-transparent z-20" />

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
          
          {/* Top & Bottom Subtle Gradient Fade Masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-12 bg-gradient-to-b from-white to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-12 bg-gradient-to-t from-white to-transparent z-20" />

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
        <div className="px-5 sm:px-12 lg:px-20 py-4 sm:py-5 flex justify-end bg-white">
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
