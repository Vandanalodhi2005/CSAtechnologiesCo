'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ecommerce', label: 'E-Commerce Platforms' },
  { id: 'business-websites', label: 'Business Websites' },
  { id: 'custom-apps', label: 'Custom Web Apps' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      activeCategory === 'all' || p.categorySlug === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ──────────────────────────────────────────────
          1. HERO SECTION (Dark Navy — Matches Site Theme)
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-[#EAF2F8] text-[#0B1220] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{ backgroundImage: "url('/images/projects/technosky.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-white/20" />
        <div className="absolute -right-20 top-20 w-[520px] h-[520px] rounded-full border border-[#94A3B8]/30 opacity-60" />
        <div className="absolute -right-5 top-35 w-[390px] h-[390px] rounded-full border border-[#60A5FA]/30 opacity-60" />

        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(11,18,32,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.08) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        <div className="container-main relative z-10 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#0066FF] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>PORTFOLIO &amp; PRODUCTION WORK</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.03] text-[#0B1220]"
          >
            Proven Results &amp;{' '}
            <span className="text-[#0066FF]">
              Featured Projects
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            Explore our curated showcase of high-converting e-commerce platforms, mission-critical custom web systems, and modern corporate websites built for high-growth businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-3xl rounded-2xl border border-[#CBD5E1] bg-white/65 backdrop-blur-md p-5 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-5 shadow-[0_20px_60px_rgba(11,18,32,0.1)]"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0066FF]">100%</div>
              <div className="text-[11px] text-[#64748B] mt-1 font-medium">On-Time Launch Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-300">&lt; 0.8s</div>
              <div className="text-[11px] text-[#64748B] mt-1 font-medium">Avg Page Load Speed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1220]">+140%</div>
              <div className="text-[11px] text-[#64748B] mt-1 font-medium">Avg Conversion Lift</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1220]">45+</div>
              <div className="text-[11px] text-[#64748B] mt-1 font-medium">Production Launches</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. FILTER TABS & SEARCH BAR (Light Sticky)
          ────────────────────────────────────────────── */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 shadow-sm">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.categorySlug === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0066FF] text-white shadow-sm'
                        : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white text-[#64748B]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F8FAFD] border border-[#E2E8F0] rounded-full focus:bg-white focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/30 outline-none text-[#0F172A] placeholder:text-[#94A3B8] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. PROJECTS GRID (Light)
          ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#E2E8F0]">
              <p className="text-base text-[#64748B] mb-3">
                No projects found matching your search.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-[#0066FF] hover:underline"
              >
                Clear filters and view all projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: (idx % 6) * 0.05, duration: 0.35 }}
                    className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_12px_36px_rgba(0,102,255,0.09)] hover:border-[#0066FF]/30 transition-all duration-300"
                  >
                    <div>
                      {/* Visual Laptop Mockup Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1628] border-b border-[#E8ECF2]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          onError={(e) => {
                            e.currentTarget.src = '/images/projects/printscarts.jpg';
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-[#0A1628]/85 text-white backdrop-blur-md border border-white/10 shadow-sm">
                            {project.category}
                          </span>
                        </div>

                        {/* Top Right Year */}
                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/90 text-[#0F172A] backdrop-blur-md shadow-sm">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6">
                        <div className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase mb-1">
                          Client: <span className="text-[#0B1220]">{project.client}</span>
                        </div>

                        <h3 className="text-xl font-heading font-extrabold text-[#0B1220] group-hover:text-[#0066FF] transition-colors mb-1.5">
                          {project.name}
                        </h3>

                        <p className="text-xs font-semibold text-[#0066FF] mb-3">
                          {project.tagline}
                        </p>

                        <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2 mb-5">
                          {project.shortDescription}
                        </p>

                        {/* Key Results Stats Strip */}
                        {project.results && project.results.length > 0 && (
                          <div className="bg-[#F8FAFD] border border-[#E8ECF2] rounded-xl p-3 mb-5 grid grid-cols-2 gap-2">
                            <div>
                              <div className="text-[10px] uppercase font-bold text-[#94A3B8]">
                                {project.results[0].metric}
                              </div>
                              <div className="text-sm font-heading font-extrabold text-[#0066FF]">
                                {project.results[0].value}
                              </div>
                              <div className="text-[10px] text-emerald-600 font-semibold">
                                {project.results[0].change}
                              </div>
                            </div>
                            {project.results[1] && (
                              <div>
                                <div className="text-[10px] uppercase font-bold text-[#94A3B8]">
                                  {project.results[1].metric}
                                </div>
                                <div className="text-sm font-heading font-extrabold text-[#0F172A]">
                                  {project.results[1].value}
                                </div>
                                <div className="text-[10px] text-[#64748B]">
                                  {project.results[1].change}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Technologies Deployed Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 text-[11px] font-medium bg-white border border-[#E2E8F0] text-[#475569] rounded-md shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-6 pb-6 pt-3 border-t border-[#F1F5F9] flex items-center gap-2">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold text-[#0066FF] bg-[#EFF6FF] hover:bg-[#0066FF] hover:text-white rounded-xl transition-all duration-200 group/btn"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 py-2.5 px-3 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] bg-[#F8FAFD] hover:bg-[#EDF2F7] border border-[#E2E8F0] rounded-xl transition-all duration-200"
                          title={`Visit ${project.name} live`}
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. CONVERSION CALL TO ACTION BANNER (Dark Card)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="container-main max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#060E1A] to-[#0A1A30] text-white p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,102,255,0.15)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />

            <span className="text-xs font-bold text-[#60A5FA] tracking-[0.2em] uppercase mb-3 block">
              READY TO SCALE?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold tracking-tight mb-4">
              Let&apos;s Build Your Next Digital Success
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Have a web platform, e-commerce store, or custom application you need built? Partner with engineers who deliver on-time, high-performance solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(0,102,255,0.4)] transition-all duration-300 group"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white text-sm font-semibold transition-all duration-300"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}