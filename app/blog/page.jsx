'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Tag,
  Mail,
  CheckCircle,
  Search,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogPosts';

const CATEGORIES = ['All', 'Engineering', 'Strategy', 'E-Commerce'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter((p) => {
    const matchesCategory =
      activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ──────────────────────────────────────────────
          1. HERO SECTION (Dark Navy with Background Image & Glow)
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-[#EAF2F8] text-[#0B1220] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 pointer-events-none"
          style={{ backgroundImage: "url('/images/hero/hero2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/20 pointer-events-none" />

        <div className="container-main relative z-10 py-32 md:py-40 max-w-5xl">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#0066FF] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>KNOWLEDGE BASE &amp; TECH INSIGHTS</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.04]"
          >
            Engineering Insights &amp;{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">
              Architecture Strategy
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            Deep-dives into modern Next.js 14 App Router, sub-second performance tuning, headless e-commerce optimization, and full-stack software architecture written by practitioners.
          </motion.p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. FEATURED ARTICLE SPOTLIGHT (Light)
          ────────────────────────────────────────────── */}
      {featuredPost && (
        <section className="py-12 md:py-16 bg-white border-b border-[#E2E8F0]">
          <div className="container-main max-w-5xl">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0066FF] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span>Featured Deep Dive</span>
              </span>
              <span className="text-xs font-semibold text-[#64748B]">Editor&apos;s Choice</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-[#F8FAFD] rounded-3xl border border-[#E2E8F0] overflow-hidden hover:border-[#0066FF]/30 hover:shadow-[0_12px_40px_rgba(0,102,255,0.08)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Column */}
              <div className="lg:col-span-6 bg-[#060E1A] relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Text Column */}
              <div className="lg:col-span-6 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="px-3 py-1 font-bold rounded-full bg-[#EFF6FF] text-[#0066FF] border border-[#DBEAFE]">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#64748B] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="text-[#64748B] flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1220] leading-snug mb-3 hover:text-[#0066FF] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8ECF2] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center text-xs font-bold">
                      CK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-[#64748B]">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] hover:text-[#0052CC] transition-colors group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────
          3. ARTICLES GRID & FILTERS (Light #F8FAFD)
          ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === 'All'
                    ? BLOG_POSTS.length
                    : BLOG_POSTS.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0066FF] text-white shadow-sm'
                        : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#0066FF]/30 hover:text-[#0F172A]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#F1F5F9] text-[#64748B]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-[#E2E8F0] rounded-full focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/30 outline-none text-[#0F172A] placeholder:text-[#94A3B8] transition-all"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_12px_36px_rgba(0,102,255,0.08)] hover:border-[#0066FF]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Preview Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1628] border-b border-[#E8ECF2]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#0A1628]/85 text-white backdrop-blur-md border border-white/10 shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[11px] text-[#64748B] mb-2 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-extrabold text-[#0B1220] group-hover:text-[#0066FF] transition-colors leading-snug mb-2.5">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 mb-5">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-semibold bg-[#F8FAFD] border border-[#E2E8F0] text-[#475569] rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="px-6 pb-6 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B1220]">
                      {post.author.name}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0066FF] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. NEWSLETTER SUBSCRIPTION (Dark Gradient Card)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="container-main max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#060E1A] to-[#0A1A30] text-white p-8 sm:p-12 md:p-14 text-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,102,255,0.15)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />

            <span className="text-xs font-bold text-[#60A5FA] tracking-[0.2em] uppercase mb-3 block">
              STAY INFORMED
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-4">
              Get Engineering Deep-Dives in Your Inbox
            </h2>
            <p className="text-white/65 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              No marketing spam. Only actionable software engineering case studies, performance benchmarks, and modern architecture guides.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-emerald-300 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are now subscribed to our engineering updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:border-[#0066FF] focus:bg-white/15 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold whitespace-nowrap shadow-[0_4px_16px_rgba(0,102,255,0.4)] transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
