'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Shield,
  Zap,
  Users,
  Target,
  CheckCircle,
  Award,
  Sparkles,
  ArrowRight,
  Clock,
  HeartHandshake,
  Cpu,
  Globe2,
  CheckCircle2,
  Layers,
  ChevronRight,
} from 'lucide-react';

const CORE_VALUES = [
  {
    icon: Target,
    title: 'Business-First Engineering',
    desc: 'We do not build software for the sake of aesthetics alone. Every architectural decision is engineered to drive customer conversion, reduce operational overhead, and generate measurable ROI.',
    color: '#0066FF',
    badge: 'High Impact',
  },
  {
    icon: Zap,
    title: 'Zero-Bloat Performance',
    desc: 'Sluggish load times kill conversion rates. We write clean, lightweight, semantic code utilizing modern SSR and edge delivery to guarantee sub-second page performance across all devices.',
    color: '#00D8FF',
    badge: '< 0.8s Load',
  },
  {
    icon: Shield,
    title: 'Security & 100% IP Ownership',
    desc: 'Your intellectual property is sacred. Upon project completion, 100% of the source code, database schemas, and assets are owned by your organization with zero proprietary locks or licensing fees.',
    color: '#10B981',
    badge: '100% IP Transfer',
  },
  {
    icon: HeartHandshake,
    title: 'Radical Transparency',
    desc: 'No hidden fees, no opaque progress reports. You receive direct access to development staging environments, sprint roadmaps, and dedicated communication channels from day one.',
    color: '#8B5CF6',
    badge: 'Daily Sprints',
  },
];

const ENGINEERING_STANDARDS = [
  'Lighthouse 90+ Score Guarantee across Performance, Accessibility, Best Practices & SEO',
  'Strict adherence to OWASP Top 10 Security guidelines and encryption protocols',
  'Modular component architecture ensuring long-term maintainability and zero technical debt',
  'Continuous Integration & Continuous Deployment (CI/CD) pipelines with automated linting',
  '100% responsive layouts rigorously verified across 15+ real physical device viewports',
  'Comprehensive code documentation, API schemas, and seamless handover for internal teams',
];

const LEADERSHIP = [
  {
    name: 'Vandana Rajpoot',
    role: 'Co-Founder & CTO',
    bio: 'Leads the technical direction of CSA Technologies CO, turning business requirements into secure, scalable products and dependable engineering systems.',
    initials: 'VR',
    bg: 'from-blue-600 to-cyan-500',
    specialty: 'Technology Strategy & Product Architecture',
  },
  {
    name: 'Santosh Upadhyay',
    role: 'Co-Founder',
    bio: 'Shapes the company vision and client partnerships, helping growing businesses choose practical digital solutions that create lasting value.',
    initials: 'SU',
    bg: 'from-sky-500 to-blue-600',
    specialty: 'Business Growth & Client Partnerships',
  },
  {
    name: 'Dhirendra K.',
    role: 'Director',
    bio: 'Supports strategic planning and operational excellence, keeping delivery focused, transparent, and aligned with each client’s long-term goals.',
    initials: 'DK',
    bg: 'from-cyan-600 to-blue-800',
    specialty: 'Operations & Strategic Direction',
  },
];

const SERVICE_CARDS = [
  { title: 'Website Development', desc: 'Responsive, SEO-friendly websites that establish your brand and turn attention into action.', image: '/images/hero/hero.jpg', icon: Globe2 },
  { title: 'E-Commerce Development', desc: 'Secure, scalable stores with product management, checkout, payments, and order workflows.', image: '/images/hero/hero-laptop.jpg', icon: Layers },
  { title: 'Web & Mobile Apps', desc: 'Purpose-built digital products shaped around your users, data, and everyday operations.', image: '/images/hero/hero2.jpg', icon: Code2 },
  { title: 'CRM & Custom Software', desc: 'Connected systems for leads, teams, reporting, automation, and the work that makes your business move.', image: '/images/hero/hero3.png', icon: Users },
];

const PROCESS_STEPS = [
  ['01', 'Discover', 'We understand your business, users, goals, challenges, and requirements.'],
  ['02', 'Plan', 'We define scope, architecture, technology, timeline, and the delivery roadmap.'],
  ['03', 'Design', 'We create intuitive interfaces focused on usability, identity, and responsive experiences.'],
  ['04', 'Develop', 'We build the frontend, backend, database, APIs, integrations, and core functionality.'],
  ['05', 'Test & Secure', 'We test functionality, responsiveness, performance, permissions, and security controls.'],
  ['06', 'Launch', 'We deploy the finished product and help establish a reliable production environment.'],
  ['07', 'Support & Improve', 'We continue maintaining, optimizing, and expanding the product as your business evolves.'],
];

const MILESTONES = [
  {
    year: '2021',
    title: 'Foundation of CSA Technologies CO',
    desc: 'Established with the mission of providing enterprise-grade software development and custom web engineering for forward-thinking businesses.',
  },
  {
    year: '2022',
    title: 'Headless E-Commerce & Custom Portals',
    desc: 'Expanded technical stack into high-throughput e-commerce systems, custom API gateways, and cloud deployment pipelines.',
  },
  {
    year: '2023',
    title: 'Global Delivery & Enterprise Scale',
    desc: 'Delivered mission-critical platforms for international clients across e-commerce, cloud telemetry, and SaaS automation.',
  },
  {
    year: '2024',
    title: 'Next.js 14 & Cloud Infrastructure',
    desc: 'Pioneered rapid sub-second edge deployments and microservices architecture, serving hundreds of thousands of monthly active users.',
  },
  {
    year: '2025',
    title: 'Continued Innovation & Expansion',
    desc: 'Scaling our engineering capabilities across AI-driven diagnostics, custom ERP integrations, and enterprise web solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ──────────────────────────────────────────────
          1. HERO SECTION (Dark Navy with Background Image & Radial Glow)
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-[#EAF2F8] text-[#0B1220] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
          style={{ backgroundImage: "url('/images/hero/hero2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-white/20 pointer-events-none" />

        <div className="container-main relative z-10 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold tracking-[0.2em] text-[#0066FF] uppercase mb-6"
          >
            CSA Technologies CO
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] text-[#0B1220]"
          >
            Building Digital Solutions That Move Businesses Forward
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            Modern websites, e-commerce platforms, web applications, mobile apps, CRM systems, and custom software built for real business growth.
          </motion.p>

          {/* Buttons */}
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
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a href="#values" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/70 hover:bg-white border border-[#CBD5E1] text-[#334155] text-sm font-semibold transition-all duration-300">Explore Our Values</a>
          </motion.div>

          {/* Value Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-6 border-t border-[#CBD5E1] flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm text-[#475569]"
          >
            <span>E-22B, 4th Floor, Sector 8, Noida</span>
            <span className="hidden sm:inline text-[#94A3B8]">|</span>
            <a href="tel:+919211293383" className="hover:text-[#0066FF] transition-colors">+91 92112 93383</a>
            <span className="hidden sm:inline text-[#94A3B8]">|</span>
            <a href="mailto:info@csatechnologiesco.com" className="hover:text-[#0066FF] transition-colors">info@csatechnologiesco.com</a>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. CORE MISSION & VISION (Light White)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-3 block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight leading-[1.18] mb-5">
                We Turn Complex Ideas Into Clean, High-Speed Software
              </h2>
              <p className="text-[15px] text-[#64748B] leading-relaxed mb-5">
                CSA Technologies CO was founded with a singular conviction: businesses deserve custom digital products engineered with modern, battle-tested technologies — without vendor lock-ins, sluggish codebases, or opaque communication.
              </p>
              <p className="text-[15px] text-[#64748B] leading-relaxed mb-8">
                Whether creating bespoke e-commerce engines that handle flash sales smoothly or architecting complex enterprise web portals, our team pairs deep architectural discipline with rapid sprint execution.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#F1F5F9]">
                <div>
                  <div className="text-2xl font-heading font-extrabold text-[#0066FF]">&lt; 0.8s</div>
                  <div className="text-xs text-[#64748B] mt-1 font-medium">Average Load Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-heading font-extrabold text-[#0B1220]">100%</div>
                  <div className="text-xs text-[#64748B] mt-1 font-medium">Milestone Delivery Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E8ECF2] hover:border-[#0066FF]/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0066FF] flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#0B1220]">Uncompromising Speed</h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Every byte matters. We write lightweight, semantic React and Next.js code that scores 95+ on Google Lighthouse and maximizes SEO rankings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E8ECF2] hover:border-[#0066FF]/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#0B1220]">Complete Code Ownership</h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  You own 100% of your source code, database models, and intellectual property. No recurring proprietary licenses or hostage hold.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E8ECF2] hover:border-[#0066FF]/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center font-bold">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#0B1220]">Dedicated Partnership</h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Direct communication with your lead engineers, weekly staging demos, and comprehensive post-launch SLA maintenance retainers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. WHAT WE DO (Image Cards)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFD]">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">WHAT WE DO</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">Digital Products Built Around Your Business</h2>
              <p className="text-[15px] text-[#64748B] leading-relaxed">From your first website to the systems that power your next stage of growth, we make technology practical, reliable, and easy to manage.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#0066FF] hover:text-[#0052CC] transition-colors">Explore services <ArrowRight className="w-4 h-4" /></Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICE_CARDS.map((service, idx) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-[0_14px_35px_rgba(11,132,243,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-36 overflow-hidden">
                  <img src={service.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/75 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-9 h-9 rounded-xl bg-white/90 text-[#0066FF] flex items-center justify-center"><service.icon className="w-4 h-4" /></div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-heading font-extrabold text-[#0B1220] mb-2">{service.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{service.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. TECHNOLOGY & PROCESS
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-4"
            >
              <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">OUR TECHNOLOGY</span>
              <h2 className="text-3xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-4">Modern Tools. Thoughtful Architecture.</h2>
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">We choose proven technologies that make products maintainable, secure, fast, and ready for the next stage of growth.</p>
              <div className="rounded-2xl overflow-hidden h-48 relative">
                <img src="/images/hero/hero-laptop.jpg" alt="Modern software development workspace" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/75 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs font-bold"><Cpu className="w-4 h-4 text-[#60A5FA]" /> Built for the long term</div>
              </div>
            </motion.div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ['Frontend', 'React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS', Code2],
                ['Backend', 'Node.js, Express.js, REST APIs, authentication, and integrations', Layers],
                ['Database', 'MongoDB and application-specific data solutions designed around your workflows', Globe2],
                ['Security & Deployment', 'Vercel, cloud platforms, HTTPS, validation, rate limiting, and secure configuration', Shield],
              ].map(([title, desc, Icon], idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E8ECF2] hover:border-[#0066FF]/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#0066FF] flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                  <h3 className="text-base font-heading font-bold text-[#0B1220] mb-2">{title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">OUR DEVELOPMENT PROCESS</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">From Idea to Launch and Beyond</h2>
              <p className="text-[15px] text-[#64748B] leading-relaxed">A clear, collaborative process keeps decisions visible and progress moving.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROCESS_STEPS.map(([number, title, desc], idx) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  className="relative p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#0066FF]/35 hover:shadow-md transition-all"
                >
                  <span className="text-3xl font-heading font-extrabold text-[#DBEAFE]">{number}</span>
                  <h3 className="text-sm font-heading font-extrabold text-[#0B1220] mt-3 mb-2">{title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          5. CORE VALUES SECTION (Light #F8FAFD)
          ────────────────────────────────────────────── */}
      <section id="values" className="py-20 md:py-28 bg-[#F8FAFD]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Core Values That Shape Every Project
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              How we work, how we communicate, and what you can expect when partnering with our engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-8 hover:border-[#0066FF]/30 hover:shadow-[0_8px_30px_rgba(0,102,255,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${val.color}12`, color: val.color }}
                    >
                      <val.icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569]">
                      {val.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-[#0B1220] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. ENGINEERING STANDARDS (Dark Navy Contrast)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#060E1A] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0066FF]/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="container-main relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              RIGOROUS QUALITY ASSURANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-3">
              Our Non-Negotiable Engineering Standards
            </h2>
            <p className="text-[15px] text-white/55 leading-relaxed max-w-xl mx-auto">
              Every system we deploy must satisfy strict technical and security benchmarks before reaching production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ENGINEERING_STANDARDS.map((std, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex items-start gap-3.5 p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-[#0066FF]/20 text-[#60A5FA] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-white/80 leading-relaxed font-medium">
                  {std}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          5. LEADERSHIP TEAM (Light White)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              LEADERSHIP &amp; EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              The Engineers Behind the Code
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Experienced architects, full-stack engineers, and product designers dedicated to your project success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((lead, idx) => (
              <motion.div
                key={lead.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group relative overflow-hidden bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] p-7 shadow-[0_8px_25px_rgba(11,18,32,0.06)] hover:-translate-y-1 hover:border-[#0066FF]/35 hover:shadow-[0_18px_40px_rgba(0,102,255,0.14)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${lead.bg}`} />
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${lead.bg} flex items-center justify-center text-white text-lg font-bold shadow-[0_8px_18px_rgba(0,102,255,0.22)] mb-6 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {lead.initials}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#0B1220]">
                    {lead.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0066FF] mb-3">
                    {lead.role}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {lead.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider block mb-1">
                    Specialty:
                  </span>
                  <span className="text-xs font-bold text-[#334155] leading-relaxed">
                    {lead.specialty}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          6. COMPANY MILESTONES (Light #F8FAFD)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFD]">
        <div className="container-main max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Growth &amp; Milestones
            </h2>
            <p className="text-sm text-[#64748B]">
              Key highlights of our technological journey and platform growth.
            </p>
          </div>

          <div className="space-y-6">
            {MILESTONES.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
                className="group relative bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 shadow-[0_8px_24px_rgba(11,18,32,0.05)] hover:-translate-y-0.5 hover:border-[#0066FF]/35 hover:shadow-[0_16px_34px_rgba(0,102,255,0.12)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-[#BFDBFE] text-[#0066FF] flex items-center justify-center text-xl font-heading font-extrabold flex-shrink-0 shadow-inner group-hover:from-[#DBEAFE] group-hover:to-[#BFDBFE] transition-colors">
                  {m.year}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-[#0B1220] mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          7. CLOSING CALL TO ACTION BANNER (Dark Card)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="container-main max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#060E1A] to-[#0A1A30] text-white p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,102,255,0.15)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />

            <span className="text-xs font-bold text-[#60A5FA] tracking-[0.2em] uppercase mb-3 block">
              READY TO SCALE?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold tracking-tight mb-4">
              Work With a Team That Cares About Results
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about your project vision. We will review your goals and deliver a detailed technical roadmap and fixed quote within 24 hours.
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
                <span>View Featured Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
