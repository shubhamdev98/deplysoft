"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});


interface CardItem {
  number: string;
  title: string;
  description: string;
  accentColor: string;
  href: string;
}

const CARDS_DATA: CardItem[] = [
  {
    number: "01",
    title: "Generative AI & LLMs",
    description:
      "Enterprise model fine-tuning, autonomous agent orchestration, and high-accuracy retrieval-augmented generation (RAG).",
    accentColor: "#3A46CA",
    href: "#ai-llms",
  },
  {
    number: "02",
    title: "Cloud & Distributed Systems",
    description:
      "Multi-region cloud infrastructure, Kubernetes orchestration, and event-driven microservices for sub-millisecond response.",
    accentColor: "#f59e0b",
    href: "#cloud-systems",
  },
  {
    number: "03",
    title: "Computer Vision Development",
    description:
      "Real-time edge object detection, automated optical inspection, and custom convolutional neural network architectures.",
    accentColor: "#10b981",
    href: "#cv-development",
  },
  {
    number: "04",
    title: "VisionOS App Development",
    description:
      "Spatial computing experiences, immersive 3D workflows, and natural gesture-driven interfaces built for Apple Vision Pro.",
    accentColor: "#3A46CA",
    href: "#visionos-apps",
  },
  {
    number: "05",
    title: "IoT Solutions",
    description:
      "Ultra-low latency telemetry ingestion, industrial edge hardware gateways, and mission-critical firmware communication.",
    accentColor: "#f43f5e",
    href: "#iot-solutions",
  },
  {
    number: "06",
    title: "Legacy Solution Migration",
    description:
      "Deconstructing monolithic architectures into decoupled microservices with zero downtime and strict data integrity.",
    accentColor: "#0284c7",
    href: "#legacy-migration",
  },
  {
    number: "07",
    title: "Full-Stack Product Engineering",
    description:
      "High-velocity modern web platforms and cross-platform native apps engineered for millions of concurrent users.",
    accentColor: "#8b5cf6",
    href: "#fullstack-engineering",
  },
  {
    number: "08",
    title: "Cybersecurity & Zero-Trust",
    description:
      "Defense-in-depth posture management, end-to-end encryption protocols, and automated continuous compliance audits.",
    accentColor: "#0d9488",
    href: "#cybersecurity",
  },
];

export default function HorizontalCards() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollProgress = (progress: number) => {
    setCanScrollLeft(progress > 0.02);
    setCanScrollRight(progress < 0.98);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        const containerWidth =
          track.parentElement?.clientWidth || section.clientWidth || window.innerWidth;
        return Math.max(0, track.scrollWidth - containerWidth);
      };

      const anim = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(1200, getScrollDistance())}`,
          pin: true,
          scrub: 1, // Smooth scrub momentum on both mobile and desktop
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          onUpdate: (self) => {
            checkScrollProgress(self.progress);
          },
        },
      });

      triggerRef.current = anim.scrollTrigger || null;

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      const timer2 = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 600);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        anim.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleScrollByButton = (direction: "left" | "right") => {
    if (typeof window === "undefined") return;

    if (triggerRef.current) {
      const step = (triggerRef.current.end - triggerRef.current.start) / 7;
      const targetScroll =
        direction === "right"
          ? window.scrollY + step
          : window.scrollY - step;

      window.scrollTo({
        top: Math.max(triggerRef.current.start, Math.min(triggerRef.current.end, targetScroll)),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-zinc-900 overflow-hidden font-sans px-4 sm:px-6 lg:px-8"
    >
      {/* Framed Outer Container with Continuous Left, Right & Bottom Borders */}
      <div className="relative max-w-7xl mx-auto border-l border-r border-b border-zinc-200 min-h-screen flex flex-col justify-center">
        
        {/* Header */}
        <div className="px-6 sm:px-12 lg:px-20 pt-8 sm:pt-14 pb-5 sm:pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
                Engineered for Scale, <br className="hidden sm:inline" />
                Speed & Precision
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Quick manual navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleScrollByButton("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous card"
                  className={`w-10 h-10 border border-zinc-200 flex items-center justify-center transition-colors ${
                    canScrollLeft
                      ? "bg-white hover:bg-[#3A46CA] text-zinc-700 hover:text-white cursor-pointer"
                      : "bg-zinc-50 text-zinc-300 cursor-not-allowed"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScrollByButton("right")}
                  disabled={!canScrollRight}
                  aria-label="Next card"
                  className={`w-10 h-10 border border-zinc-200 flex items-center justify-center transition-colors ${
                    canScrollRight
                      ? "bg-white hover:bg-[#3A46CA] text-zinc-700 hover:text-white cursor-pointer"
                      : "bg-zinc-50 text-zinc-300 cursor-not-allowed"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Cards Slider Track with Top Border AND Bottom Border */}
        <div className="relative w-full border-t border-b border-zinc-200 bg-white overflow-hidden">

          <div
            ref={trackRef}
            className="w-max flex flex-nowrap items-stretch will-change-transform select-none cursor-default"
          >
            {CARDS_DATA.map((card) => (
              <div
                key={card.number}
                className="group relative w-[300px] sm:w-[350px] md:w-[410px] h-[370px] sm:h-[400px] md:h-[420px] p-7 sm:p-9 md:p-10 bg-white hover:bg-[#3A46CA] border-r border-zinc-200 flex flex-col justify-between shrink-0 transition-all duration-300 cursor-pointer"
              >
                {/* Top: Large Outlined Number with Outfit Font */}
                <div>
                  <div className="flex items-start justify-between">
                    <span
                      className={`${outfit.className} text-6xl sm:text-7xl font-bold tracking-tight select-none text-zinc-950 group-hover:text-white inline-block transition-all duration-300 group-hover:scale-105`}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-8 text-xl sm:text-2xl font-semibold text-zinc-950 group-hover:text-white transition-colors duration-300 leading-snug tracking-tight">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 group-hover:text-white/90 leading-relaxed font-normal line-clamp-3 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                {/* Bottom: "Know More" Action Link with Divider Border */}
                <div className="pt-6 border-t border-zinc-100 group-hover:border-white/20 flex items-center justify-between transition-colors duration-300">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer group/link text-zinc-950 group-hover:text-white"
                  >
                    <span>Know More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-zinc-400 group-hover:text-white" />
                  </Link>

                  <span className="text-[11px] font-mono text-zinc-400 group-hover:text-white/70 transition-colors duration-300">
                    {card.number} / 08
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
