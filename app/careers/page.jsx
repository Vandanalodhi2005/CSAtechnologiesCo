'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Search,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building,
  GraduationCap,
  Code2,
  HeartHandshake,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Send,
  Zap,
} from 'lucide-react';
import ApplicationModal from '@/components/careers/ApplicationModal';

const PERKS = [
  {
    icon: Code2,
    title: 'Modern Tech Stack',
    desc: 'Build with Next.js 14, React, Node.js, TypeScript, AI APIs, and modern cloud architectures.',
  },
  {
    icon: TrendingUp,
    title: 'Rapid Career Trajectory',
    desc: 'Accelerated promotion cycles, milestone-based bonuses, and direct mentorship from senior architects.',
  },
  {
    icon: HeartHandshake,
    title: 'Hybrid & Flexible Work',
    desc: 'Empowering work-life balance with modern hybrid schedules and high-spec development hardware.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Certifications',
    desc: 'Annual education budget for cloud certifications (AWS/GCP), technical conferences, and workshops.',
  },
];

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  // Modal application state
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch jobs');
      }
      setJobs(data.jobs || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Derive department list dynamically from active jobs
  const departments = useMemo(() => {
    const set = new Set(['All']);
    jobs.forEach((j) => {
      if (j.department) set.add(j.department);
    });
    return Array.from(set);
  }, [jobs]);

  const employmentTypes = useMemo(() => {
    const set = new Set(['All']);
    jobs.forEach((j) => {
      if (j.employmentType) set.add(j.employmentType);
    });
    return Array.from(set);
  }, [jobs]);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchDept = selectedDept === 'All' || job.department === selectedDept;
      const matchType = selectedType === 'All' || job.employmentType === selectedType;
      const matchQuery =
        !searchQuery ||
        job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills?.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.location?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchType && matchQuery;
    });
  }, [jobs, selectedDept, selectedType, searchQuery]);

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ──────────────────────────────────────────────
          1. HERO SECTION (Dark Navy with Brand Gradient)
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center bg-[#061426] text-white overflow-hidden py-24 sm:py-32">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-[#0066FF]/15 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#00D8FF]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container-main relative z-10 text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold tracking-[0.2em] text-[#60A5FA] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>JOIN OUR ENGINEERING TEAM • WE ARE HIRING</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.08]"
          >
            Build Your Career With{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">
              CSA Technologies
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Explore exciting career opportunities, work with talented professionals, and grow your career with CSA Technologies.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#open-positions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 shadow-[0_4px_24px_rgba(0,102,255,0.45)] hover:shadow-[0_6px_32px_rgba(0,102,255,0.6)] transition-all duration-300"
            >
              <span>Explore Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
            >
              <span>About CSA Technologies</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. CULTURE & PERKS STRIP
          ────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2 block">
              LIFE AT CSA TECHNOLOGIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1220] tracking-tight">
              Why Engineers &amp; Designers Thrive Here
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#0066FF]/40 hover:shadow-lg transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <perk.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-heading font-bold text-[#0B1220] mb-2">{perk.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. JOB LISTINGS SECTION
          ────────────────────────────────────────────── */}
      <section id="open-positions" className="py-20 md:py-28 scroll-mt-24">
        <div className="container-main max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2 block">
              AVAILABLE OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Explore Open Positions
            </h2>
            <p className="text-sm text-[#64748B]">
              Discover active roles across Engineering, Design, AI, and Cloud Infrastructure.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, skill, or location..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFD] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#0B1220] placeholder-[#94A3B8] focus:outline-none focus:border-[#0066FF]"
              />
            </div>

            {/* Department Pills / Select */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
              <span className="text-xs font-bold text-[#64748B] whitespace-nowrap">Department:</span>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="bg-[#F8FAFD] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs font-medium text-[#0B1220] focus:outline-none focus:border-[#0066FF]"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Employment Type */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-[#64748B] whitespace-nowrap">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-[#F8FAFD] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs font-medium text-[#0B1220] focus:outline-none focus:border-[#0066FF]"
              >
                {employmentTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings Grid */}
          {loading ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-44 bg-white rounded-2xl border border-[#E2E8F0]" />
              ))}
            </div>
          ) : filteredJobs.length === 0 ? (
            /* Professional Empty State */
            <div className="p-12 sm:p-16 text-center bg-white rounded-3xl border border-[#E2E8F0] shadow-sm max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center mx-auto mb-5">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-[#0B1220] mb-2">
                No Current Openings. Stay Connected With Us!
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md mx-auto mb-6">
                We are constantly growing and scouting for top engineering talent. Send us your resume spontaneously or reach out directly to introduce yourself.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 shadow-[0_4px_16px_rgba(0,102,255,0.35)] transition-all"
              >
                <span>Send Spontaneous Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0066FF]/60 hover:shadow-[0_12px_36px_rgba(11,18,32,0.08)] transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Job Info */}
                    <div className="space-y-3 flex-1">
                      {/* Department and Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#0066FF] text-xs font-bold">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-semibold">
                          {job.employmentType}
                        </span>
                        {job.salaryRange && (
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                            {job.salaryRange}
                          </span>
                        )}
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1220] group-hover:text-[#0066FF] transition-colors">
                        <Link href={`/careers/${job.id}`}>
                          {job.title}
                        </Link>
                      </h3>

                      {/* Meta: Location, Experience, Posted Date */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#64748B]">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
                          <span>{job.experience}</span>
                        </span>
                        <span>•</span>
                        <span>
                          Posted{' '}
                          {new Date(job.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2 max-w-3xl">
                        {job.description}
                      </p>

                      {/* Skills Tags */}
                      {job.skills && job.skills.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {job.skills.slice(0, 6).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-md bg-[#F8FAFD] border border-[#E2E8F0] text-[11px] font-medium text-[#475569]"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 6 && (
                            <span className="text-[11px] text-[#94A3B8] font-medium">
                              +{job.skills.length - 6} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#F1F5F9]">
                      <button
                        onClick={() => setSelectedJobForModal(job)}
                        className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 shadow-[0_4px_16px_rgba(0,102,255,0.35)] transition-all"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        href={`/careers/${job.id}`}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#475569] hover:text-[#0066FF] hover:bg-[#EFF6FF] transition-colors"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. APPLICATION MODAL
          ────────────────────────────────────────────── */}
      <ApplicationModal
        job={selectedJobForModal}
        isOpen={Boolean(selectedJobForModal)}
        onClose={() => setSelectedJobForModal(null)}
      />
    </div>
  );
}
