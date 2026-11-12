import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectWithUs from "@/components/ConnectWithUs";
import { BLOG_POSTS, BlogPost } from "@/data/blogData";
import {
  ChevronRight,
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  BookOpen,
  Share2,
} from "lucide-react";
import { ShareButtons, CodeBlock } from "@/components/blog/ArticleActions";
import GsapButton from "@/components/ui/GsapButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Deplysoft",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Deplysoft Blog`,
      description: post.excerpt,
      type: "article",
      url: `https://deplysoft.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = BLOG_POSTS[postIndex];
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  // Filter 3 related posts
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aMatches = a.category === post.category ? 2 : 0;
      const bMatches = b.category === post.category ? 2 : 0;
      return bMatches - aMatches;
    })
    .slice(0, 3);

  // Article JSON-LD for rich snippets
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Deplysoft Technologies Inc.",
      logo: "https://deplysoft.com/logo.png",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://deplysoft.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-white font-sans text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Navbar />

      <article className="relative w-full bg-white px-0 sm:px-6 lg:px-8 overflow-hidden">
        {/* Outer Framed Container matching site style */}
        <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">

          {/* Top Breadcrumb & Back Link */}
          <div className="px-5 sm:px-12 lg:px-20 py-4 sm:py-5 border-b border-zinc-200 bg-zinc-50/50 flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <Link href="/" className="hover:text-zinc-950 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <Link href="/blog" className="hover:text-zinc-950 transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-[#3A46CA] font-semibold">{post.category}</span>
            </nav>

            
          </div>

          {/* Article Header */}
          <div className="px-5 sm:px-12 lg:px-20 py-10 sm:py-14 border-b border-zinc-200 bg-white">
            <div className="max-w-4xl mx-auto">
              
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-medium mb-4">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.publishedAt}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.2]">
                {post.title}
              </h1>

              {/* Overview / Subhead */}
              <p className="mt-5 text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed border-l-2 border-[#3A46CA] pl-4 sm:pl-6 my-6 bg-zinc-50 py-3">
                {post.overview}
              </p>

              {/* Author & Share Bar */}
              <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full border border-zinc-200 overflow-hidden shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-950">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-zinc-500 font-normal">
                      {post.author.role} • Deplysoft Engineering
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400 font-medium mr-1 hidden sm:inline">
                    Share:
                  </span>
                  <ShareButtons title={post.title} />
                </div>
              </div>

            </div>
          </div>

          {/* Article Cover Hero Image */}
          {post.coverImage && (
            <div className="relative w-full aspect-[21/9] sm:aspect-[24/10] bg-zinc-100 border-b border-zinc-200 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* Article Body + Sidebar Layout */}
          <div className="px-5 sm:px-12 lg:px-20 py-10 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-5xl mx-auto">
              
              {/* Main Article Content Column */}
              <div className="lg:col-span-8 min-w-0">
                <div className="space-y-10 sm:space-y-12">
                  {post.sections.map((section, idx) => (
                    <section key={idx} className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 pb-3 border-b border-zinc-100">
                        {section.heading}
                      </h2>

                      <div className="mt-4 space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                        {section.body.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Code Block if available */}
                      {section.codeBlock && (
                        <CodeBlock
                          code={section.codeBlock.code}
                          language={section.codeBlock.language}
                          caption={section.codeBlock.caption}
                        />
                      )}

                      {/* Key Takeaway Highlight Box */}
                      {section.keyTakeaway && (
                        <div className="mt-5 p-4 sm:p-5 bg-zinc-50 border-l-4 border-[#3A46CA] text-xs sm:text-sm text-zinc-800">
                          <strong className="block text-[#3A46CA] uppercase tracking-wider font-bold mb-1 text-[11px]">
                            Architectural Takeaway
                          </strong>
                          {section.keyTakeaway}
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* Article Tags */}
                <div className="mt-12 pt-6 border-t border-zinc-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mr-1">
                      Topics:
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 bg-zinc-100 px-3 py-1 border border-zinc-200"
                      >
                        <Tag className="w-3 h-3 text-zinc-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio Box */}
                <div className="mt-10 p-6 sm:p-8 bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative w-16 h-16 rounded-full border border-zinc-200 overflow-hidden shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-950 text-center sm:text-left">
                      Written by {post.author.name}
                    </h3>
                    <p className="text-xs text-[#3A46CA] font-semibold text-center sm:text-left mt-0.5">
                      {post.author.role}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed text-center sm:text-left">
                      Guiding engineering standards, scalable infrastructure, and battle-tested digital product architectures at Deplysoft Technologies.
                    </p>
                  </div>
                </div>

                {/* Next & Previous Post Navigation */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group p-5 border border-zinc-200 hover:border-zinc-400 bg-white transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-[#3A46CA] transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-3 h-3" />
                        Previous Article
                      </div>
                      <div className="text-sm font-bold text-zinc-950 group-hover:text-[#3A46CA] transition-colors mt-2 line-clamp-2">
                        {prevPost.title}
                      </div>
                    </Link>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group p-5 border border-zinc-200 hover:border-zinc-400 bg-white transition-all duration-200 flex flex-col justify-between text-right"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-[#3A46CA] transition-colors flex items-center justify-end gap-1">
                        Next Article
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      <div className="text-sm font-bold text-zinc-950 group-hover:text-[#3A46CA] transition-colors mt-2 line-clamp-2">
                        {nextPost.title}
                      </div>
                    </Link>
                  )}
                </div>
              </div>

              {/* Sidebar: Table of Contents & Quick CTA */}
              <div className="lg:col-span-4 space-y-6">
                {/* Table of Contents Box */}
                <div className="sticky top-24 p-6 bg-zinc-50 border border-zinc-200 space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-zinc-200">
                    <BookOpen className="w-4 h-4 text-black" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
                      Table of Contents
                    </h3>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-600">
                    {post.sections.map((section, idx) => (
                      <li key={idx}>
                        <span className="hover:text-[#3A46CA] transition-colors font-medium block py-0.5">
                          {section.heading}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Share in sidebar */}
                  <div className="pt-4 border-t border-zinc-200">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Share this insight
                    </span>
                    <ShareButtons title={post.title} />
                  </div>

                  {/* Sidebar CTA Card */}
                  <div className="pt-4 border-t border-zinc-200">
                    <div className="bg-zinc-950 text-white p-4 sm:p-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3A46CA] block mb-1">
                        Engineering Partner
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        Need help engineering your next high-scale system?
                      </h4>
                      <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                        Talk directly with our core engineering leadership.
                      </p>
                      <div className="mt-4">
                        <GsapButton
                          href="#contact"
                          variant="brand"
                          className="w-full h-9 text-xs font-semibold hover:!bg-[#323cb5]"
                        >
                          <span>Start a Conversation</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </GsapButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-zinc-200 bg-zinc-50/60 px-5 sm:px-12 lg:px-20 py-12 sm:py-16">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-950 block mb-1">
                      Continue Reading
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                      Related Engineering Insights
                    </h3>
                  </div>
                  <Link
                    href="/blog"
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-950 hover:text-[#3A46CA] transition-colors inline-flex items-center gap-1"
                  >
                    <span>View all</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group bg-white border border-zinc-200 hover:border-zinc-400 p-5 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#3A46CA]">
                          {related.category}
                        </span>
                        <h4 className="text-sm font-bold text-zinc-950 group-hover:text-[#3A46CA] transition-colors mt-2 leading-snug line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="mt-2 text-xs text-zinc-600 line-clamp-2 font-normal">
                          {related.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-medium">
                        <span>{related.readTime}</span>
                        <span className="text-zinc-950 font-semibold group-hover:text-[#3A46CA] flex items-center gap-0.5">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </article>

      <ConnectWithUs />
      <Footer />
    </main>
  );
}

