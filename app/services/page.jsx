'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Cloud,
  Cog,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  ChevronDown,
  ShieldCheck,
  Clock,
  TrendingUp,
  Server,
  FileCode,
  CheckCircle2,
  XCircle,
  HelpCircle,
  PhoneCall,
} from 'lucide-react';
import { SERVICES } from '@/data/services';

const iconMap = {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Cloud,
  Cog,
};

const DELIVERY_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    subtitle: 'Week 1',
    desc: 'We map out your business objectives, target audience, technical requirements, and database schema before writing a single line of code.',
    deliverables: ['Technical Specification Document', 'Database Schema Modeling', 'Milestone Sprint Schedule'],
  },
  {
    step: '02',
    title: 'UI/UX & Prototyping',
    subtitle: 'Week 2 - 3',
    desc: 'Our designers craft custom, responsive UI designs tailored precisely to your brand guidelines with interactive click-through prototypes.',
    deliverables: ['High-Fidelity Component Library', 'Mobile & Desktop Layouts', 'Interactive Flow Review'],
  },
  {
    step: '03',
    title: 'Full-Stack Development',
    subtitle: 'Week 3 - 6',
    desc: 'Our engineers build your solution using modern Next.js, Node.js, and clean modular code with continuous staging deployments.',
    deliverables: ['Production-Grade Clean Code', 'REST / GraphQL API Endpoints', 'Automated QA & Unit Testing'],
  },
  {
    step: '04',
    title: 'Launch, SEO & Warranty',
    subtitle: 'Week 7+',
    desc: 'We deploy to global edge CDNs, run rigorous penetration and performance audits, and provide 30 days of warranty and ongoing support.',
    deliverables: ['Production Edge Deployment', 'Lighthouse 95+ Audit', '30-Day Post-Launch Warranty'],
  },
];

const COMPARISONS = [
  {
    factor: 'Code Quality & Frameworks',
    others: 'Bloated WordPress templates, heavy page builders, slow load times',
    csa: '100% Handcrafted Next.js & React, zero bloat, semantic clean code',
  },
  {
    factor: 'Page Performance & Speed',
    others: '3.5s – 6s average load times, failing Google Core Web Vitals',
    csa: 'Sub-second (<0.8s) load times, Lighthouse 95+ score guaranteed',
  },
  {
    factor: 'Intellectual Property & Code',
    others: 'Proprietary platform lock-in, recurring licensing fees',
    csa: '100% Full IP & Code Ownership transferred to your company',
  },
  {
    factor: 'Communication & Updates',
    others: 'Unpredictable delays, radio silence, weeks between updates',
    csa: 'Transparent sprint updates, clear milestone demos, direct chat',
  },
  {
    factor: 'Post-Launch Technical Support',
    others: 'Project abandoned after hand-off, costly emergency fixes',
    csa: 'Complimentary 30-day warranty, 24/7 SLA monitoring retainers',
  },
];

const TECH_CATEGORIES = [
  {
    title: 'Frontend Engineering',
    color: '#00D8FF',
    items: ['React 18', 'Next.js 14', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Redux / Zustand'],
  },
  {
    title: 'Backend & APIs',
    color: '#16A34A',
    items: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Microservices'],
  },
  {
    title: 'Databases & Storage',
    color: '#15803D',
    items: ['MongoDB Atlas', 'PostgreSQL', 'Redis Cache', 'Prisma ORM', 'Mongoose', 'AWS S3'],
  },
  {
    title: 'Cloud & Infrastructure',
    color: '#0066FF',
    items: ['AWS Cloud', 'Vercel Edge', 'Docker', 'GitHub Actions', 'Cloudflare CDN', 'Linux / Nginx'],
  },
];

const FAQS = [
  {
    q: 'How long does a typical software or web development project take?',
    a: 'Timelines vary by scope. Standard corporate business websites typically launch in 3 to 5 weeks. E-commerce platforms, SaaS portals, and custom web applications typically require 6 to 12 weeks. We provide a milestone sprint schedule before kickoff so you know exactly when each phase completes.',
  },
  {
    q: 'What is your billing model and payment structure?',
    a: 'We offer fixed-price milestone billing with clear deliverables. Typical payments are phased: 30% project kickoff, 30% UI/UX & architecture approval, 30% staging demo completion, and 10% upon final production deployment. We also offer flexible monthly developer retainers for ongoing maintenance.',
  },
  {
    q: 'Will our business own 100% of the code and intellectual property?',
    a: 'Yes, absolutely. Once final milestone payment is received, 100% of all source code, design files, database schemas, and intellectual property rights belong completely to your company. We provide zero vendor lock-in.',
  },
  {
    q: 'Do you provide technical support and maintenance after launch?',
    a: 'Every project includes an initial complimentary 30-day post-launch warranty covering any bug fixes and performance tuning. Following that, we offer monthly SLA support packages covering security updates, server uptime monitoring, backups, and ongoing feature development.',
  },
  {
    q: 'Can you integrate with our existing third-party APIs and tools?',
    a: 'Yes. We routinely connect custom applications with Stripe, PayPal, Razorpay, HubSpot, Salesforce, Google APIs, shipping carriers, and custom internal ERP systems.',
  },
  {
    q: 'How do we get started with CSA Technologies CO?',
    a: 'Simply click "Request a Quote" or fill out our project inquiry form. We will schedule a 20-minute discovery consultation, analyze your goals, and deliver a detailed technical roadmap and cost estimate within 24 hours.',
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeCategory);

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ──────────────────────────────────────────────
          1. HERO SECTION (Dark Navy — Matching Site Theme)
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-[#EAF2F8] text-[#0B1220] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/images/hero/hero-laptop.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-white/20" />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(11,18,32,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.08) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        <div className="container-main relative z-10 py-32 md:py-40 max-w-5xl">
          {/* Breadcrumb / Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#0066FF] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>FULL-LIFECYCLE SOFTWARE ENGINEERING</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.04]"
          >
            Digital Services Engineered for{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">
              Speed, Scale
            </span>{' '}
            & ROI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            From high-converting e-commerce storefronts to mission-critical custom web platforms and cloud infrastructure — we build digital solutions that propel your business ahead.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(0,102,255,0.4)] hover:shadow-[0_6px_28px_rgba(0,102,255,0.6)] transition-all duration-300 group"
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#services-list"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/70 hover:bg-white border border-[#CBD5E1] text-[#334155] text-sm font-semibold transition-all duration-300"
            >
              <span>Explore All Services</span>
              <ChevronDown className="w-4 h-4 text-[#64748B]" />
            </a>
          </motion.div>

          {/* Value Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 max-w-3xl pt-6 border-t border-[#CBD5E1] grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div>
              <div className="text-3xl font-heading font-extrabold text-[#0B1220]">100%</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">Custom Code (Zero Bloat)</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-extrabold text-[#0066FF]">&lt; 0.8s</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">Avg Page Load Speed</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-extrabold text-emerald-600">99.9%</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-extrabold text-[#0B1220]">24/7</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">Dedicated Engineering Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. INTERACTIVE SERVICE FILTER TABS (Light)
          ────────────────────────────────────────────── */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 shadow-sm">
        <div className="container-main">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-[#0066FF] text-white shadow-sm'
                  : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveCategory(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === s.id
                    ? 'bg-[#0066FF] text-white shadow-sm'
                    : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. CORE SERVICES DETAILED SHOWCASE (Light)
          ────────────────────────────────────────────── */}
      <section id="services-list" className="py-20 md:py-28">
        <div className="container-main">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Tailored Engineering Solutions
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Every solution is architected with modern industry best practices, modular code, and direct business results in mind.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="space-y-10">
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Globe;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45 }}
                  className="bg-white rounded-3xl border border-[#E2E8F0] p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,102,255,0.08)] hover:border-[#0066FF]/30 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column (Main Info & Deliverables) */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Icon className="w-6 h-6" strokeWidth={1.8} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-[#0066FF] uppercase tracking-wider">
                              SERVICE {service.number}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                              {service.highlight}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1220]">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-[15px] font-semibold text-[#0066FF] mb-3">
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-[15px] text-[#64748B] leading-relaxed mb-7">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="pt-6 border-t border-[#F1F5F9]">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1220] mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                          <span>Key Deliverables & Included Specs</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-sm text-[#334155]">
                              <div className="w-4 h-4 rounded-full bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5" strokeWidth={3} />
                              </div>
                              <span className="text-[13.5px] leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column (Tech Stack, Business Value, CTA Box) */}
                    <div className="lg:col-span-5 bg-[#F8FAFD] rounded-2xl border border-[#E8ECF2] p-6 sm:p-7 flex flex-col justify-between h-full">
                      <div>
                        {/* Tech Stack Pills */}
                        <div className="mb-6">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3 flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-[#0066FF]" />
                            <span>Technologies Deployed</span>
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-semibold bg-white border border-[#E2E8F0] text-[#0F172A] rounded-lg shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Business Value */}
                        <div className="mb-6">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3 flex items-center gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Business Impact</span>
                          </h4>
                          <ul className="space-y-2.5">
                            {service.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="text-xs text-[#334155] flex items-start gap-2.5 leading-relaxed">
                                <Zap className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Pricing Guide & Action */}
                      <div className="pt-5 border-t border-[#E2E8F0]">
                        <div className="flex items-baseline justify-between mb-4">
                          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                            Pricing Guide
                          </span>
                          <span className="text-xs font-bold text-[#0B1220] bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                            Milestone Based
                          </span>
                        </div>
                        <p className="text-sm font-heading font-bold text-[#0B1220] mb-4">
                          {service.pricingGuide}
                        </p>

                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(0,102,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,102,255,0.4)] transition-all duration-200 group"
                        >
                          <span>Get a Quote for {service.title}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. THE 4-STEP SERVICE DELIVERY PROCESS (White)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-y border-[#E2E8F0]">
        <div className="container-main">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              OUR ENGINEERING PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              How We Turn Ideas Into Working Software
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              A structured, transparent 4-stage pipeline that guarantees predictable milestones, high code quality, and on-time launches.
            </p>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_PROCESS.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-[#F8FAFD] rounded-2xl border border-[#E8ECF2] p-7 hover:border-[#0066FF]/30 hover:shadow-[0_8px_30px_rgba(0,102,255,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-heading font-extrabold text-[#0066FF]">
                      {stage.step}
                    </span>
                    <span className="text-[11px] font-bold text-[#64748B] bg-white px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                      {stage.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#0B1220] mb-2.5">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8ECF2]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#0B1220] mb-2">
                    Key Outputs:
                  </p>
                  <ul className="space-y-1.5">
                    {stage.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-[#475569] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          5. CSA ADVANTAGE COMPARISON (Dark Navy)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#060E1A] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0066FF]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="container-main relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              THE CSA ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-3">
              Why High-Growth Companies Choose Us
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed">
              See the difference between standard agency outsourcing and dedicated technical engineering with CSA Technologies CO.
            </p>
          </div>

          {/* Comparison Table / Cards */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-12 bg-white/[0.04] border-b border-white/[0.08] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/60">
              <div className="col-span-12 md:col-span-4 mb-2 md:mb-0">Key Standard</div>
              <div className="col-span-6 md:col-span-4 text-rose-400">Typical Freelancer / Agency</div>
              <div className="col-span-6 md:col-span-4 text-[#60A5FA]">CSA Technologies CO</div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {COMPARISONS.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 px-6 py-5 gap-4 items-center hover:bg-white/[0.02] transition-colors">
                  <div className="col-span-12 md:col-span-4 font-heading font-bold text-sm text-white">
                    {row.factor}
                  </div>
                  <div className="col-span-12 md:col-span-4 text-xs text-white/50 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span>{row.others}</span>
                  </div>
                  <div className="col-span-12 md:col-span-4 text-xs text-white font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                    <span>{row.csa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          6. TECH STACK MATRIX (Light)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              ARCHITECTURE & TOOLING
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Modern Full-Stack Technology Stack
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We engineer with battle-tested frameworks that ensure high security, low latency, and infinite horizontal scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-[#F8FAFD] rounded-2xl border border-[#E8ECF2] p-6 hover:border-[#0066FF]/30 transition-all duration-200"
              >
                <h3 className="text-sm font-heading font-bold text-[#0B1220] mb-4 pb-3 border-b border-[#E2E8F0] flex items-center justify-between">
                  <span>{cat.title}</span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-white border border-[#E2E8F0] text-[#334155] rounded-lg shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          7. FREQUENTLY ASKED QUESTIONS (Light)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFD]">
        <div className="container-main max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              FAQ
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#64748B]">
              Common questions about our software development services, deliverables, and timelines.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
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
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          8. CONVERSION CALL TO ACTION BANNER (White / Blue Card)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="container-main max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#060E1A] to-[#0A1A30] text-white p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,102,255,0.15)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />

            <span className="text-xs font-bold text-[#60A5FA] tracking-[0.2em] uppercase mb-3 block">
              READY TO COMMENCE?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold tracking-tight mb-4">
              Have a Project in Mind? Let&apos;s Build It.
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about your project requirements and goals. We will review your specs and deliver a comprehensive technical proposal and quote within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(0,102,255,0.4)] transition-all duration-300 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white text-sm font-semibold transition-all duration-300"
              >
                <span>View Completed Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
