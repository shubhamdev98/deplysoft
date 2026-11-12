import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectWithUs from "@/components/ConnectWithUs";
import BlogListClient from "@/components/blog/BlogListClient";
import { BLOG_POSTS } from "@/data/blogData";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Insights & Engineering Blog",
  description:
    "Architectural deep-dives, distributed systems telemetry, enterprise generative AI patterns, and performance benchmarks from the engineering team at Deplysoft.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Tech Insights & Engineering Blog | Deplysoft",
    description:
      "Deep-dives into distributed systems, generative AI orchestration, low-latency architectures, and cloud deployment from Deplysoft.",
    url: "https://deplysoft.com/blog",
    siteName: "Deplysoft",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-zinc-950">
      <Navbar />

      <section className="relative w-full bg-white px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
        {/* Outer Framed Container matching site-wide aesthetic */}
        <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">
          
          {/* Section Hero Header */}
          <div className="px-5 sm:px-12 lg:px-20 pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-zinc-200 bg-white">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium mb-4 sm:mb-6">
              <Link href="/" className="hover:text-zinc-950 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-950 font-semibold">Blog</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
                Architectural Deep-Dives & Tech Insights
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed">
                Practical blueprints, performance benchmarks, and real-world engineering lessons from building, deploying, and scaling mission-critical enterprise systems.
              </p>
            </div>
          </div>

          {/* Client-side Filterable Blog List */}
          <BlogListClient posts={BLOG_POSTS} />

        </div>
      </section>

      <ConnectWithUs />
      <Footer />
    </main>
  );
}

