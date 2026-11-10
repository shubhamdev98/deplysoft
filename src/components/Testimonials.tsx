import { Star } from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  highlight: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "marcus-treasury",
    quote:
      "Deplysoft re-architected our legacy settlement pipeline with a sub-second distributed system that has scaled past a billion dollars in daily volume without a single outage.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "Global Treasury Infrastructure",
    highlight: "$1.4B+ Daily Volume Scaled",
  },
  {
    id: "julian-cloud",
    quote:
      "Their team brought exceptional engineering maturity to our Kubernetes migration. Our mean-time-to-resolution dropped from 45 minutes to under two minutes across 18 global regions.",
    author: "Julian Thorne",
    role: "Chief Technology Officer",
    company: "Aether Cloud Networks",
    highlight: "99.999% SLA Achieved",
  },
  {
    id: "samantha-ai",
    quote:
      "From custom retrieval-augmented generation to real-time telemetry streaming, Deplysoft engineers think like founders. They eliminated months of technical debt in weeks.",
    author: "David Sterling",
    role: "Head of Product & AI",
    company: "Synthetix Intelligence",
    highlight: "10x Faster Deployment",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-white px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">

        {/* Section Header */}
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-10 sm:py-16 md:py-20 border-b border-zinc-200">
          <div className="flex flex-col max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Trusted by Engineering <br className="hidden sm:inline" />
              Leaders at Scale
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-600 leading-relaxed font-normal">
              What founders, CTOs, and enterprise engineering executives say about architecting mission-critical platforms with Deplysoft.
            </p>
          </div>
        </div>

        {/* 3-Column Connected Grid with Dividing Borders */}
        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="group relative p-6 sm:p-8 lg:p-11 bg-white hover:bg-zinc-50/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Highlight Tag */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-1 text-[#3A46CA]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 leading-tight">
                      {item.author}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 font-normal leading-tight">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
