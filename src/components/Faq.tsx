"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import GsapButton from "@/components/ui/GsapButton";

interface FaqItem {
  id: string;
  category: "General" | "Engineering" | "Engagement" | "Security";
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "services-scope",
    category: "General",
    question: "What types of digital products and engineering services does Deplysoft build?",
    answer:
      "We architect and deliver end-to-end digital solutions: high-concurrency web applications, distributed cloud systems, mobile apps (native iOS/Android and cross-platform React Native/Flutter), enterprise Generative AI & autonomous agent pipelines, VisionOS spatial computing applications, and real-time IoT hardware telemetry gateways.",
  },
  {
    id: "engagement-models",
    category: "Engagement",
    question: "How do your engagement and pricing models work?",
    answer:
      "We offer three structured engagement models tailored to your roadmap: Dedicated Engineering Pods (senior full-stack engineers, distributed systems architects, and QA embedded into your team), Milestone-Driven Fixed Scope (agile sprints with predefined deliverables and guaranteed budgets), and Technical Architecture & AI Advisory (systems audits, latency profiling, and roadmap validation).",
  },
  {
    id: "ip-ownership",
    category: "Security",
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "Your company retains 100% full ownership of all intellectual property, source code, deployment scripts, database schemas, and proprietary model fine-tuning weights. All work is conducted under strict bilateral NDAs and transferred to your private repositories with zero vendor lock-in.",
  },
  {
    id: "tech-stack-specialization",
    category: "Engineering",
    question: "What technologies and cloud platforms do you specialize in?",
    answer:
      "Our core stack is battle-tested for enterprise throughput and reliability: TypeScript, Next.js, React, Node.js, Python, Rust, Golang, PostgreSQL, Redis, Docker, and Kubernetes. On cloud infrastructure, we build across AWS, Google Cloud, Microsoft Azure, and edge CDNs with automated Terraform IaC.",
  },
  {
    id: "quality-velocity",
    category: "Engineering",
    question: "How do you ensure engineering craftsmanship and rapid deployment velocity?",
    answer:
      "Every project follows automated CI/CD pipelines with strict branch protection rules, comprehensive unit and end-to-end test suites, peer review standards, and sub-second build configurations. We operate in two-week agile sprint cadences with transparent staging environments and bi-weekly executive demos.",
  },
  {
    id: "security-compliance",
    category: "Security",
    question: "How does Deplysoft handle cybersecurity, data privacy, and compliance?",
    answer:
      "Security is engineered from line zero. We apply zero-trust architecture, automated mutual TLS (mTLS), strict least-privilege role boundaries, and end-to-end cryptographic encryption for data at rest and in transit. Our delivery processes comply with SOC 2, ISO 27001, HIPAA, and GDPR regulatory standards.",
  },
  {
    id: "legacy-modernization",
    category: "Engineering",
    question: "Can Deplysoft modernize our legacy application without downtime?",
    answer:
      "Yes. We specialize in zero-downtime legacy modernizations using the Strangler Fig architectural pattern. We iteratively decompose monolithic backends into resilient microservices and modern frontend architectures, guaranteeing uninterrupted uptime and continuous business continuity.",
  },
  {
    id: "post-launch-support",
    category: "Engagement",
    question: "What happens after launch? Do you provide ongoing maintenance and SLAs?",
    answer:
      "We provide comprehensive enterprise maintenance plans including 24/7/365 infrastructure monitoring, p99 latency optimization, automated security vulnerability patching, and committed incident response SLAs ranging from 15 minutes to 1 hour depending on your enterprise tier.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("services-scope");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // FAQ Schema for SEO rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative w-full bg-white text-zinc-950 px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Outer Framed Container matching site structure */}
      <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">
        
        {/* Centered Section Header (No Chip, No Filters) */}
        <div className="px-5 sm:px-12 lg:px-20 py-12 sm:py-16 md:py-20 text-center border-b border-zinc-200 bg-white">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Frequently Asked Questions
            </h2>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
              Direct insights on how Deplysoft partners with enterprises to build, deploy, and scale high-performance digital systems.
            </p>
          </div>
        </div>

        {/* Centered Questions Accordion (No borders on questions) */}
        <div className="px-4 sm:px-8 lg:px-16 py-10 sm:py-14 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto space-y-2">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openId === faq.id;
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={faq.id}
                  className={`transition-colors duration-200 ${
                    isOpen ? "bg-zinc-50" : "bg-white hover:bg-zinc-50/50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                      {/* Numeric Index */}
                      <span className="font-mono text-xs font-semibold text-black shrink-0 select-none">
                        {formattedIndex}
                      </span>

                      {/* Question Text */}
                      <span
                        className={`text-base sm:text-lg font-bold tracking-tight transition-colors leading-snug ${
                          isOpen ? "text-[#3A46CA]" : "text-zinc-950"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon Indicator (border-free) */}
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 transition-all duration-200 ml-2 ${
                        isOpen
                          ? "bg-[#3A46CA] text-white rotate-180"
                          : "text-zinc-500 hover:text-zinc-950"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Expandable Answer (border-free) */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 animate-in fade-in duration-200">
                      <div className="pl-7 sm:pl-8">
                        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Centered Bottom Help Card */}
          <div className="max-w-4xl mx-auto mt-10 sm:mt-12 p-6 sm:p-8 bg-zinc-50  flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                Still have questions about your architecture or project?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600 font-normal">
                Our core engineering leadership is available to review your technical requirements.
              </p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <GsapButton
                href="#contact"
                variant="brand"
                className="w-full sm:w-auto px-6 h-11 text-xs font-bold uppercase tracking-wider hover:!bg-[#323cb5]"
              >
                <span>Talk to Engineering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </GsapButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
