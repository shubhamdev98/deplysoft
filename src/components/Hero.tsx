import Image from "next/image";
import { ArrowRight } from "lucide-react";
import GsapButton from "@/components/ui/GsapButton";
import PixelCluster from "@/components/ui/PixelCluster";

const BRANDS = [
  { name: "Amplitude", src: "/brands/Amplitude_idPo7J6YFZ_1.png" },
  { name: "Datadog", src: "/brands/Datadog_idgCeU7PkE_1.png" },
  { name: "Pinterest", src: "/brands/Pinterest_Logo_1.png" },
  { name: "Sprout Social", src: "/brands/Sprout_Social_Logo_1.png" },
  { name: "Supabase", src: "/brands/Supabase_id9q7Wa4Ba_1.png" },
  { name: "SurveyMonkey", src: "/brands/SurveyMonkey_idZLwjwapq_1.png" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Framed Container with Left & Right Vertical Borders */}
      <div className="relative max-w-7xl mx-auto border-l border-r border-zinc-200">

        {/* Hero Content with Spacing */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-4">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.1] max-w-3xl">
              Build, Deploy & Scale <br className="hidden sm:inline" />
              <span className="text-zinc-900">Digital Experiences</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed">
              We engineer high-performance web applications, modern software systems,
              and scalable cloud infrastructure designed to accelerate your growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-30">
              <GsapButton
                href="#contact"
                variant="primary"
                className="w-full sm:w-56 h-14 text-base"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </GsapButton>
              <GsapButton
                href="#services"
                variant="secondary"
                className="w-full sm:w-56 h-14 text-base"
              >
                <span>Explore Services</span>
              </GsapButton>
            </div>
          </div>
        </div>

        {/* Full-width Seamless Right-to-Left Brand Marquee */}
        <div className="relative z-10 w-full border-t border-b border-zinc-200 overflow-hidden">
          <div className="animate-marquee flex items-center">
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center px-8 sm:px-12 h-20 sm:h-24 shrink-0 border-r border-zinc-200"
              >
                <Image
                  src={brand.src}
                  alt={`${brand.name} enterprise client logo`}
                  width={140}
                  height={40}
                  className="h-7 sm:h-8 w-auto max-w-[130px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
