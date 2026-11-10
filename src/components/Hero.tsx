"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import GsapButton from "@/components/ui/GsapButton";

const BRANDS = [
  { name: "Amplitude", src: "/brands/Amplitude_idPo7J6YFZ_1.png" },
  { name: "Datadog", src: "/brands/Datadog_idgCeU7PkE_1.png" },
  { name: "Pinterest", src: "/brands/Pinterest_Logo_1.png" },
  { name: "Sprout Social", src: "/brands/Sprout_Social_Logo_1.png" },
  { name: "Supabase", src: "/brands/Supabase_id9q7Wa4Ba_1.png" },
  { name: "SurveyMonkey", src: "/brands/SurveyMonkey_idZLwjwapq_1.png" },
];

export default function Hero() {
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Ensure autoplay works reliably across mobile Safari and Chromium
    [desktopVideoRef.current, mobileVideoRef.current].forEach((vid) => {
      if (vid) {
        vid.muted = true;
        vid.play().catch(() => {
          // Autoplay policy fallback: muted autoplay is generally allowed
        });
      }
    });
  }, []);

  return (
    <section className="relative w-full bg-white px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] md:min-h-[660px] flex flex-col justify-between overflow-hidden">

        {/* Background Video Layer confined strictly INSIDE the container */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Mobile Video (portrait 9:16) */}
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="block md:hidden absolute inset-0 w-full h-full object-cover"
            src="/video/16754685_2160_3840_58fps.mp4"
          />

          {/* Desktop Video (landscape 16:9) */}
          <video
            ref={desktopVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            src="/video/6561562-uhd_3840_2160_25fps.mp4"
          />

          {/* Frosted Legibility Scrim Overlay to keep typography crisp */}
          <div className="absolute inset-0 bg-white/65 sm:bg-white/55 backdrop-blur-[1.5px]" />
          {/* Soft Radial Center Scrim for optimal text contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.25)_80%)]" />
        </div>

        {/* Hero Content with Centered Flex Spacing */}
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-8 sm:py-14 md:pt-24 md:pb-24 flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-2 sm:py-4 w-full">
            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.15] max-w-3xl">
              Build, Deploy & Scale <br />
              <span className="text-zinc-900">Digital Experiences</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-zinc-700 max-w-2xl font-normal leading-relaxed">
              We engineer high-performance web applications, modern software systems,
              and scalable cloud infrastructure designed for your growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto relative z-30">
              <GsapButton
                href="#contact"
                variant="primary"
                className="w-full sm:w-56 h-12 sm:h-14 text-sm sm:text-base shadow-sm"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </GsapButton>
              <GsapButton
                href="#services"
                variant="secondary"
                className="w-full sm:w-56 h-12 sm:h-14 text-sm sm:text-base bg-white/80 hover:bg-white text-zinc-950 border-zinc-300 backdrop-blur-sm"
              >
                <span>Explore Services</span>
              </GsapButton>
            </div>
          </div>
        </div>

        {/* Full-width Seamless Brand Marquee docked at bottom */}
        <div className="relative z-10 w-full border-t border-zinc-200/90 overflow-hidden mt-auto bg-white/80 backdrop-blur-md">
          <div className="animate-marquee flex items-center">
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center px-6 sm:px-12 h-14 sm:h-20 shrink-0 border-r border-zinc-200/80"
              >
                <Image
                  src={brand.src}
                  alt={`${brand.name} enterprise client logo`}
                  width={140}
                  height={40}
                  className="h-5 sm:h-7 w-auto max-w-[110px] sm:max-w-[130px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
