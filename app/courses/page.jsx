'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Search,
  Star,
  Users,
  Clock,
  BookOpen,
  TrendingUp,
  Award,
  ChevronDown,
  Code2,
  Layout,
  Server,
  Brain,
  Cloud,
  Palette,
  ShoppingCart,
  LineChart,
  GraduationCap,
  Video,
  Briefcase,
  Rocket,
  CalendarDays,
  Target,
  MessageSquare,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import {
  COURSES,
  COURSE_CATEGORIES,
  COURSE_LEVELS,
  COURSE_STATS,
  LEARNING_TRACKS,
  LEARNING_BENEFITS,
  ENROLLMENT_STEPS,
  STUDENT_TESTIMONIALS,
  COURSE_FAQS,
} from '@/data/courses';

const iconMap = { Code2, Layout, Server, Brain, Cloud, Palette, ShoppingCart, LineChart };
const benefitIconMap = { GraduationCap, Video, Briefcase, Rocket, Award, MessageSquare };

const formatPrice = (value) => `₹${value.toLocaleString('en-IN')}`;

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const flagship = COURSES.find((c) => c.featured) || COURSES[0];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.categoryId === activeCategory;
    const matchesLevel = activeLevel === 'All Levels' || course.level === activeLevel;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      course.title.toLowerCase().includes(q) ||
      course.subtitle.toLowerCase().includes(q) ||
      course.shortDescription.toLowerCase().includes(q) ||
      course.tools.some((tool) => tool.toLowerCase().includes(q));
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const resetFilters = () => {
    setActiveCategory('all');
    setActiveLevel('All Levels');
    setSearchQuery('');
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ──────────────────────────────────────────────
          1. HERO SECTION (Light Background Image + Blue Gradient Heading)
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-[#EAF2F8] text-[#0B1220] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 pointer-events-none"
          style={{ backgroundImage: "url('/images/hero/hero2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-white/20 pointer-events-none" />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(11,18,32,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.08) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        <div className="container-main relative z-10 py-32 md:py-40">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#0066FF] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>CAREER-FOCUSED TECH TRAINING</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.04]"
          >
            Learn Modern Tech by{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">
              Shipping Real Projects
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            Mentor-led courses designed and taught by the engineers who build client platforms every day.
            Small cohorts, live code reviews, production-grade capstone projects, and career support from
            your very first commit.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#course-catalogue"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(0,102,255,0.4)] hover:shadow-[0_6px_28px_rgba(0,102,255,0.6)] transition-all duration-300 group"
            >
              <span>Browse All Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/85 hover:bg-white border border-[#CBD5E1] text-[#0B1220] text-sm font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#0066FF]" />
              <span>Talk to a Mentor</span>
            </Link>
          </motion.div>

          {/* Trust Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 max-w-3xl rounded-2xl border border-[#CBD5E1] bg-white/65 backdrop-blur-md p-5 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-5 shadow-[0_20px_60px_rgba(11,18,32,0.1)]"
          >
            {COURSE_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0066FF]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-[#64748B] mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. FLAGSHIP PROGRAM SPOTLIGHT (White)
          ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0066FF] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span>Flagship Program</span>
            </span>
            <span className="text-xs font-semibold text-[#64748B]">Most enrolled course this season</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFD] overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-[#0066FF]/30 hover:shadow-[0_12px_40px_rgba(0,102,255,0.08)] transition-all duration-300"
          >
            {/* Program Overview */}
            <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0066FF] text-white shadow-[0_4px_14px_rgba(0,102,255,0.3)]">
                    {flagship.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white text-[#0066FF] border border-[#DBEAFE]">
                    {flagship.category}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B] flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {flagship.rating} rating • {flagship.learners.toLocaleString('en-IN')} learners
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-extrabold text-[#0B1220] leading-tight mb-3">
                  {flagship.title}
                </h2>
                <p className="text-sm font-semibold text-[#0066FF] mb-4">{flagship.subtitle}</p>
                <p className="text-sm text-[#64748B] leading-relaxed mb-7">{flagship.shortDescription}</p>

                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#94A3B8] mb-4">
                  What you will be able to do
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                  {flagship.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2.5 text-[13px] text-[#0B1220] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {flagship.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#475569] bg-white border border-[#E2E8F0]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Syllabus & Enrolment Panel */}
            <div className="lg:col-span-5 bg-[#060E1A] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#0066FF]/20 rounded-full blur-[110px] pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#60A5FA] flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Inside the curriculum</span>
                </span>

                {/* Program facts */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3">
                    <Clock className="w-3.5 h-3.5 text-[#60A5FA] mb-1.5" />
                    <p className="text-[11px] font-bold">{flagship.duration}</p>
                    <p className="text-[10px] text-white/50">Duration</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3">
                    <BookOpen className="w-3.5 h-3.5 text-[#60A5FA] mb-1.5" />
                    <p className="text-[11px] font-bold">{flagship.lessons} lessons</p>
                    <p className="text-[10px] text-white/50">Live + recorded</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3">
                    <Rocket className="w-3.5 h-3.5 text-[#60A5FA] mb-1.5" />
                    <p className="text-[11px] font-bold">{flagship.projects} projects</p>
                    <p className="text-[10px] text-white/50">Capstone</p>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {flagship.curriculum.map((block) => (
                    <div
                      key={block.module}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4"
                    >
                      <p className="text-[10px] font-bold text-[#60A5FA] uppercase tracking-[0.14em]">
                        {block.module}
                      </p>
                      <h4 className="text-sm font-heading font-bold mt-1.5 mb-2.5">{block.title}</h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {block.topics.map((topic) => (
                          <li
                            key={topic}
                            className="text-[10px] font-medium text-white/60 bg-white/[0.05] border border-white/[0.06] rounded-full px-2 py-0.5"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-7 mt-7 border-t border-white/[0.08]">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] text-white/50 font-semibold uppercase tracking-wider">
                      Program fee
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-heading font-extrabold">
                        {formatPrice(flagship.price)}
                      </span>
                      <span className="text-xs text-white/40 line-through">
                        {formatPrice(flagship.originalPrice)}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                    <Award className="w-3 h-3" /> Certificate included
                  </span>
                </div>
                <p className="text-[11px] text-white/50 mt-2 mb-5">
                  {flagship.priceNote} • {flagship.nextBatch}
                </p>

                <div className="space-y-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(flagship.title + ' Course')}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(0,102,255,0.35)] hover:shadow-[0_6px_22px_rgba(0,102,255,0.5)] transition-all duration-200 group"
                  >
                    <span>Enrol in this Program</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-sm font-semibold transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 text-[#60A5FA]" />
                    <span>Request the full syllabus</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. STICKY COURSE FILTER & SEARCH BAR
          ────────────────────────────────────────────── */}
      <section className="sticky top-[76px] z-30 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
        <div className="container-main py-3.5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {COURSE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? COURSES.length
                    : COURSES.filter((c) => c.categoryId === cat.id).length;

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
                      className={`text-[11px] px-1.5 rounded-full font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-white text-[#64748B]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Field */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, tools..."
                aria-label="Search courses"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F1F5F9] border border-transparent focus:border-[#0066FF]/40 focus:bg-white text-sm text-[#0B1220] placeholder:text-[#94A3B8] outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Level Pills */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] shrink-0 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Level</span>
            </span>
            {COURSE_LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap border transition-all duration-200 ${
                  activeLevel === level
                    ? 'bg-[#EFF6FF] text-[#0066FF] border-[#0066FF]/40'
                    : 'bg-white text-[#64748B] border-[#E2E8F0] hover:text-[#0F172A] hover:border-[#CBD5E1]'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. COURSE CATALOGUE GRID (Light #F8FAFD)
          ────────────────────────────────────────────── */}
      <section id="course-catalogue" className="py-16 md:py-24 scroll-mt-32">
        <div className="container-main">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
                COURSE CATALOGUE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight">
                Choose the Program That Fits Your Goal
              </h2>
            </div>
            <p className="text-sm text-[#64748B]">
              Showing <span className="font-bold text-[#0B1220]">{filteredCourses.length}</span> of{' '}
              {COURSES.length} courses
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course, idx) => {
                  const Icon = iconMap[course.icon] || Code2;

                  return (
                    <motion.article
                      key={course.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="group bg-white rounded-2xl border border-[#E8ECF2] overflow-hidden flex flex-col hover:border-[#0066FF]/30 hover:shadow-[0_16px_40px_rgba(0,102,255,0.1)] hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Card Header */}
                      <div className="p-6 pb-5 border-b border-[#F1F5F9] bg-gradient-to-br from-[#F8FAFD] to-white">
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] transition-all duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex flex-col items-end gap-1.5">
                            {course.badge && (
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0066FF] text-white">
                                {course.badge}
                              </span>
                            )}
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-[#475569] bg-white border border-[#E2E8F0]">
                              {course.category}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-heading font-extrabold text-[#0B1220] leading-snug mb-1.5 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#0066FF]">{course.subtitle}</p>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 pt-5 flex-1 flex flex-col">
                        <p className="text-[13px] text-[#64748B] leading-relaxed line-clamp-3 mb-5">
                          {course.shortDescription}
                        </p>

                        <div className="grid grid-cols-3 gap-2 mb-5">
                          <div className="rounded-xl bg-[#F8FAFD] border border-[#EEF2F7] p-2.5 text-center">
                            <Clock className="w-3.5 h-3.5 text-[#0066FF] mx-auto mb-1" />
                            <p className="text-[11px] font-bold text-[#0B1220]">{course.duration}</p>
                          </div>
                          <div className="rounded-xl bg-[#F8FAFD] border border-[#EEF2F7] p-2.5 text-center">
                            <TrendingUp className="w-3.5 h-3.5 text-[#0066FF] mx-auto mb-1" />
                            <p className="text-[11px] font-bold text-[#0B1220]">{course.level}</p>
                          </div>
                          <div className="rounded-xl bg-[#F8FAFD] border border-[#EEF2F7] p-2.5 text-center">
                            <BookOpen className="w-3.5 h-3.5 text-[#0066FF] mx-auto mb-1" />
                            <p className="text-[11px] font-bold text-[#0B1220]">
                              {course.lessons} lessons
                            </p>
                          </div>
                        </div>

                        {/* Rating & Reach */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-[#64748B] mb-5">
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            <span className="text-[#0B1220]">{course.rating}</span>
                            <span>rating</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-[#94A3B8]" />
                            <span>{course.learners.toLocaleString('en-IN')} learners</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Rocket className="w-3.5 h-3.5 text-[#94A3B8]" />
                            <span>{course.projects} projects</span>
                          </span>
                        </div>

                        {/* Tool Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {course.tools.slice(0, 3).map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-0.5 rounded-md text-[10px] font-semibold text-[#475569] bg-[#F8FAFD] border border-[#E8ECF2]"
                            >
                              {tool}
                            </span>
                          ))}
                          {course.tools.length > 3 && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-[#0066FF] bg-[#EFF6FF] border border-[#DBEAFE]">
                              +{course.tools.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Pricing & Actions */}
                        <div className="mt-auto pt-5 border-t border-[#F1F5F9]">
                          <div className="flex flex-wrap items-end justify-between gap-2 mb-4">
                            <div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-xl font-heading font-extrabold text-[#0B1220]">
                                  {formatPrice(course.price)}
                                </span>
                                <span className="text-xs text-[#94A3B8] line-through">
                                  {formatPrice(course.originalPrice)}
                                </span>
                              </div>
                              <p className="text-[10px] text-[#64748B] mt-0.5">{course.priceNote}</p>
                            </div>
                            {course.certification && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <Award className="w-3 h-3" /> Certificate
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <Link
                              href={`/contact?service=${encodeURIComponent(course.title + ' Course')}`}
                              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-[13px] font-semibold shadow-[0_4px_14px_rgba(0,102,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,102,255,0.4)] transition-all duration-200 group/cta"
                            >
                              <span>Enrol Now</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
                            </Link>
                            <Link
                              href="/contact"
                              aria-label={`Ask a mentor about ${course.title}`}
                              className="w-10 h-10 shrink-0 rounded-xl bg-[#F8FAFD] hover:bg-[#EFF6FF] border border-[#E8ECF2] text-[#0066FF] flex items-center justify-center transition-all duration-200"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </Link>
                          </div>

                          <p className="text-[10px] text-[#94A3B8] mt-3 flex items-center gap-1.5">
                            <CalendarDays className="w-3 h-3" />
                            <span>{course.nextBatch}</span>
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#CBD5E1] bg-white p-12 text-center max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-[#F1F5F9] text-[#94A3B8] flex items-center justify-center mx-auto mb-5">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B1220] mb-2">
                No courses match those filters
              </h3>
              <p className="text-sm text-[#64748B] mb-6">
                Try a different track or level, or clear the filters to see all {COURSES.length}{' '}
                programs.
              </p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_18px_rgba(0,102,255,0.3)] transition-all duration-200"
              >
                <span>Reset Filters</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          5. GUIDED CAREER TRACKS (Dark Navy)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#060E1A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[260px] bg-[#0066FF]/[0.12] blur-[140px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        <div className="container-main relative z-10">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold tracking-[0.18em] text-[#60A5FA] uppercase mb-3 block">
              GUIDED CAREER TRACKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-4">
              Not Sure Where to Start? Pick a Track.
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              Each track sequences our courses in the right order, adds mentor checkpoints, and finishes
              with a capstone that our hiring partners actually review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEARNING_TRACKS.map((track, idx) => {
              const Icon = iconMap[track.icon] || Target;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 flex flex-col hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                    style={{
                      backgroundColor: `${track.color}1A`,
                      borderColor: `${track.color}33`,
                      color: track.color,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-heading font-extrabold mb-1.5">{track.title}</h3>
                  <p className="text-xs text-white/50 mb-4">{track.subtitle}</p>
                  <p className="text-[13px] text-white/70 leading-relaxed mb-5">{track.outcome}</p>

                  <ul className="space-y-2 mb-5">
                    {track.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-[11px] text-white/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2 text-[11px] font-semibold text-white/50">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
                      {track.duration}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[#60A5FA] hover:text-white transition-colors group"
                    >
                      <span>Get guidance</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          6. THE CSA LEARNING EXPERIENCE (White)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E2E8F0]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              THE CSA LEARNING EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Training Built Inside a Working Software Studio
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              You learn the same standards, review process and tooling we use to deliver client platforms
              every week — not simulated classroom exercises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARNING_BENEFITS.map((benefit, idx) => {
              const Icon = benefitIconMap[benefit.icon] || GraduationCap;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  className="bg-[#F8FAFD] rounded-2xl border border-[#E8ECF2] p-7 hover:border-[#0066FF]/30 hover:shadow-[0_8px_30px_rgba(0,102,255,0.06)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#0B1220] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[13px] text-[#64748B] leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          7. ENROLMENT JOURNEY (Light #F8FAFD)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[#F8FAFD] border-y border-[#E2E8F0]">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
                HOW ENROLMENT WORKS
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
                From First Call to Placed Developer
              </h2>
              <p className="text-[15px] text-[#64748B] leading-relaxed">
                A clear four-step onboarding so you always know what happens next — and exactly what you
                walk away with.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(0,102,255,0.35)] transition-all duration-300 group shrink-0"
            >
              <span>Book a Free Counselling Call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENROLLMENT_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="relative bg-white rounded-2xl border border-[#E8ECF2] p-7 hover:border-[#0066FF]/30 hover:shadow-[0_10px_30px_rgba(0,102,255,0.07)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-heading font-extrabold text-[#E2E8F0]">
                    {step.step}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-[#0B1220] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          8. LEARNER STORIES (White)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              LEARNER STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Career Switches That Actually Happened
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Real feedback from learners who completed a cohort, shipped a capstone, and moved into a new
              role or freelance practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_TESTIMONIALS.map((story, idx) => (
              <motion.figure
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-[#F8FAFD] rounded-2xl border border-[#E8ECF2] p-7 flex flex-col h-full hover:border-[#0066FF]/30 hover:shadow-[0_10px_30px_rgba(0,102,255,0.07)] transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: story.rating }).map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <blockquote className="text-[13px] text-[#475569] leading-relaxed mb-6 flex-1">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <figcaption className="pt-5 border-t border-[#E8ECF2] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066FF] to-[#38BDF8] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {story.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1220]">{story.name}</p>
                    <p className="text-[11px] text-[#64748B]">
                      {story.role} • {story.company}
                    </p>
                    <p className="text-[10px] font-semibold text-[#0066FF] mt-0.5">{story.course}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          9. COURSE FAQ (Light #F8FAFD)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="container-main max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              QUESTIONS, ANSWERED
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Course &amp; Enrolment FAQs
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Still unsure about something? Write to us and a mentor will reply within one working day.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E8ECF2] overflow-hidden divide-y divide-[#F1F5F9]">
            {COURSE_FAQS.map((faq, i) => {
              const isOpen = openFaq === i;

              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-[15px] text-[#0B1220] hover:text-[#0066FF] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#94A3B8] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0066FF]' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold text-[#64748B]">
            <span className="inline-flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#0066FF]" />
              +91 92112 93383
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#0066FF]" />
              info@csatechnologiesco.com
            </span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          10. FINAL CONVERSION BANNER (Dark Gradient Card)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="container-main max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#060E1A] to-[#0A1A30] text-white p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,102,255,0.15)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />

            <span className="text-xs font-bold text-[#60A5FA] tracking-[0.2em] uppercase mb-3 block">
              READY TO START LEARNING?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold tracking-tight mb-4">
              Your Next Role Starts With One Commit.
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Talk to a mentor about your background and goals. We will recommend the right track, share
              the detailed syllabus, and reserve your seat in the upcoming cohort.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(0,102,255,0.4)] transition-all duration-300 group"
              >
                <span>Enrol or Book a Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white text-sm font-semibold transition-all duration-300"
              >
                <span>Explore Our Engineering Services</span>
              </Link>
            </div>

            <p className="mt-7 text-[11px] text-white/40">
              Flexible EMI options • Weekday and weekend cohorts • Lifetime recording access
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
