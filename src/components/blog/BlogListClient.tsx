"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, ArrowUpRight, Clock, Calendar, Tag, X } from "lucide-react";
import { BlogPost } from "@/data/blogData";
import GsapButton from "@/components/ui/GsapButton";

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtered posts based on search
  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return posts;

    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.author.name.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      );
    });
  }, [posts, searchQuery]);

  // Featured post is shown only when search is empty
  const featuredPost = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts.find((p) => p.featured) || posts[0];
    }
    return null;
  }, [posts, searchQuery]);

  // Remaining posts when featured is displayed, or all filtered posts
  const displayPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  return (
    <div className="w-full">
      {/* Search Bar Bar */}
      <div className="border-b border-zinc-200 bg-zinc-50/70 p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture, AI, cloud, tags..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-zinc-200 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-[#3A46CA] focus:ring-1 focus:ring-[#3A46CA] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Featured Article Spotlight (Hero card) */}
      {featuredPost && (
        <div className="border-b border-zinc-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Visual Cover on Left */}
            <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[280px] sm:min-h-[360px] bg-zinc-100 border-b lg:border-b-0 lg:border-r border-zinc-200 overflow-hidden">
              {featuredPost.coverImage && (
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              )}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-zinc-950 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 shadow-sm">
                  Featured Deep-Dive
                </span>
              </div>
            </div>

            {/* Featured Post Meta & Description on Right */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-3 text-xs text-zinc-500 font-medium">
                  <span className="text-[#3A46CA] font-semibold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`} className="block mt-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-950 leading-[1.25]">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="mt-3 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featuredPost.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 border border-zinc-200"
                    >
                      <Tag className="w-2.5 h-2.5 text-zinc-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & CTA Button */}
              <div className="mt-6 sm:mt-8 pt-5 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full border border-zinc-200 overflow-hidden shrink-0">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-950">
                      {featuredPost.author.name}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-normal">
                      {featuredPost.author.role}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-950"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="p-4 sm:p-8 lg:p-12 bg-white">
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayPosts.map((post) => (
              <article
                key={post.slug}
                className="relative bg-white border border-zinc-200 flex flex-col justify-between"
              >
                <div>
                  {/* Article Thumbnail */}
                  <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-zinc-200">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-400 text-xs">
                        Deplysoft Insights
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/95 text-zinc-900 border border-zinc-200 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Article Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-2">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-base sm:text-lg font-bold text-zinc-950 leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-zinc-600 bg-zinc-50 px-2 py-0.5 border border-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Author & Footer Link */}
                <div className="p-5 sm:p-6 pt-0 border-t border-zinc-100 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full border border-zinc-200 overflow-hidden shrink-0">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="text-xs font-semibold text-zinc-900 truncate max-w-[120px]">
                      {post.author.name}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-950"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 sm:py-24 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto text-zinc-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-950">No articles found</h3>
            <p className="mt-1 text-sm text-zinc-500">
              No engineering posts matched your query &ldquo;{searchQuery}&rdquo;. Try another keyword.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-zinc-950 text-white hover:bg-[#3A46CA] transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Engineering Newsletter Card */}
      <div className="border-t border-zinc-200 bg-zinc-950 text-white p-6 sm:p-10 lg:p-14">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Subscribe to Deplysoft Systems Digest
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
              Curated articles, sub-millisecond benchmarking, and enterprise generative AI patterns delivered once a month. No spam.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <GsapButton
              href="#contact"
              variant="brand"
              className="w-full md:w-auto px-6 h-12 text-xs font-bold uppercase tracking-wider hover:!bg-[#323cb5]"
            >
              <span>Get in Touch with Engineering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </GsapButton>
          </div>
        </div>
      </div>
    </div>
  );
}

