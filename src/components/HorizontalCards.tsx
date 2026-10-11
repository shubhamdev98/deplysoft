"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Setup horizontal scroll pinned to vertical page scroll
      const getScrollDistance = () => {
        return track.scrollWidth - window.innerWidth;
      };

      gsap.to(track, {
        x: () => -Math.max(0, getScrollDistance()),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight, getScrollDistance())}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Refresh ScrollTrigger after elements render
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => clearTimeout(timer);
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleScrollByButton = (direction: "left" | "right") => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    const scrollAmount = window.innerHeight * 0.75;
    window.scrollBy({
      top: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-zinc-900 overflow-hidden font-sans border-b border-zinc-200"
    >
      {/* Framed Outer Container Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l border-r border-zinc-200 pt-16 sm:pt-20 pb-8 sm:pb-12">
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
                aria-label="Previous card"
                className="w-10 h-10 border border-zinc-200 bg-white hover:bg-[#3A46CA] text-zinc-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScrollByButton("right")}
                aria-label="Next card"
                className="w-10 h-10 border border-zinc-200 bg-white hover:bg-[#3A46CA] text-zinc-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Cards Slider Track with Normal Top and Bottom Borders */}
      <div className="w-full relative border-t border-b border-zinc-200 bg-white overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap items-stretch will-change-transform"
          style={{ width: "max-content" }}
        >
          {CARDS_DATA.map((card, index) => (
            <div
              key={card.number}
              className={`group relative w-[310px] sm:w-[360px] md:w-[410px] h-[380px] sm:h-[420px] p-8 sm:p-10 bg-white hover:bg-[#3A46CA] border-r border-zinc-200 flex flex-col justify-between shrink-0 transition-all duration-300 cursor-pointer ${
                index === 0 ? "border-l border-zinc-200" : ""
              }`}
            >
              {/* Top: Large Outlined Number with Outfit Font */}
              <div>
                <div className="flex items-start justify-between">
                  <span
                    className={`${outfit.className} card-outline-number text-6xl sm:text-7xl font-bold tracking-tight select-none inline-block transition-transform duration-300 group-hover:scale-105`}
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
    </section>
  );
}
