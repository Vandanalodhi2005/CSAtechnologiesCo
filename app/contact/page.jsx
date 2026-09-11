'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/navigation';
import ContactForm from '@/components/ui/ContactForm';

const ONBOARDING_STEPS = [
  {
    step: '01',
    title: 'Initial Discovery (Within 24h)',
    desc: 'Our technical architects review your requirements, research your industry domain, and evaluate technical feasibility.',
  },
  {
    step: '02',
    title: '30-Min Strategy Consultation',
    desc: 'We discuss architectural goals, user flows, database models, milestone budgets, and target delivery dates.',
  },
  {
    step: '03',
    title: 'Detailed Proposal & Quote',
    desc: 'You receive a comprehensive scope document with fixed milestone pricing, architecture diagrams, and a sprint roadmap.',
  },
  {
    step: '04',
    title: 'Development Kickoff',
    desc: 'Dedicated Git repository setup, weekly staging deployments, and direct communication channels with your lead engineers.',
  },
];

const CONTACT_FAQS = [
  {
    q: 'How quickly will I receive a response after submitting?',
    a: 'We review all project inquiries within 24 hours (usually within 2-4 hours during business days). A senior technical architect will personally reach out with clarifying questions or an invitation to a discovery call.',
  },
  {
    q: 'Can you sign a Non-Disclosure Agreement (NDA) first?',
    a: 'Yes, absolutely. We frequently execute mutual NDAs prior to reviewing proprietary business ideas, database schemas, or sensitive internal requirements.',
  },
  {
    q: 'Do you work with international clients across different time zones?',
    a: 'Yes! We actively collaborate with enterprise clients across North America, Europe, the Middle East, and Asia. Our team provides overlapping business hours for weekly sprint demos and synchronous meetings.',
  },
  {
    q: 'What if we only have a rough concept and no technical spec?',
    a: 'That is completely fine. Our technical architects specialize in translating high-level business goals into precise feature specifications, user stories, and Figma wireframes during our Discovery phase.',
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* ──────────────────────────────────────────────
          1. HERO SECTION (Dark Navy with Background Image & Glow)
          ────────────────────────────────────────────── */}
      <section className="relative bg-[#060E1A] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Real photo background overlay with dark fade */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('/images/why-choose-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060E1A]/80 via-[#060E1A]/95 to-[#060E1A] pointer-events-none" />

        {/* Ambient Radial Gradient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#0066FF]/20 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-[450px] h-[350px] bg-[#00D8FF]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="container-main relative z-10 text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/[0.08] text-[#60A5FA] border border-white/[0.12] mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>START YOUR PROJECT • 24-HOUR RESPONSE SLA</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.12]"
          >
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">
              Exceptional
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl mx-auto"
          >
            Ready to modernize your web presence, launch a custom web application, or build a scalable e-commerce store? We provide transparent fixed-milestone quotes and rapid turnarounds.
          </motion.p>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div>
              <div className="text-3xl font-heading font-extrabold text-[#60A5FA]">&lt; 2h</div>
              <div className="text-xs text-white/50 mt-1 font-medium">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-extrabold text-white">100%</div>
              <div className="text-xs text-white/50 mt-1 font-medium">Milestone-Based Billing</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-extrabold text-emerald-400">Zero</div>
              <div className="text-xs text-white/50 mt-1 font-medium">Vendor Lock-In (100% IP)</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-extrabold text-white">NDA</div>
              <div className="text-xs text-white/50 mt-1 font-medium">Mutual NDA on Request</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. MAIN DUAL-COLUMN INTERACTIVE SECTION (Light #F8FAFD)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-main max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Direct Contact & Next Steps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
                  COMMUNICATION CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-4">
                  Direct Access to Senior Engineers
                </h2>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  You won&apos;t get routed through junior account managers. You speak directly with architects and engineers who understand your domain.
                </p>
              </div>

              {/* Contact Chips */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Email Inquiry</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-bold text-[#0B1220] hover:text-[#0066FF] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Phone Support</p>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm font-bold text-[#0B1220] hover:text-[#0066FF] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Engineering Headquarters</p>
                    <p className="text-sm font-bold text-[#0B1220]">{COMPANY_INFO.address.full}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-emerald-50 border border-emerald-200/80">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-sm font-heading font-bold text-[#0B1220]">Instant Consultation</h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  Need a quick technical opinion or have an urgent timeline? Reach out directly via WhatsApp for same-day evaluation.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    "Hello CSA Technologies CO! I'd like to discuss a web development project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Onboarding Timeline */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                <h3 className="text-sm font-heading font-bold text-[#0B1220] mb-4 pb-3 border-b border-[#F1F5F9] flex items-center justify-between">
                  <span>What Happens Next?</span>
                  <span className="text-[11px] font-bold text-[#0066FF] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full">
                    4 Steps
                  </span>
                </h3>
                <div className="space-y-4">
                  {ONBOARDING_STEPS.map((s) => (
                    <div key={s.step} className="flex items-start gap-3 text-xs">
                      <span className="w-6 h-6 rounded-lg bg-[#EFF6FF] text-[#0066FF] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        {s.step}
                      </span>
                      <div>
                        <p className="font-bold text-[#0B1220]">{s.title}</p>
                        <p className="text-[#64748B] mt-0.5 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-7 bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-7 pb-6 border-b border-[#F1F5F9]">
                <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-1.5 block">
                  PROJECT INQUIRY FORM
                </span>
                <h2 className="text-2xl font-heading font-extrabold text-[#0B1220]">
                  Tell Us About Your Vision
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Fill in your project details below. We guarantee a detailed technical review and cost estimate within 24 hours.
                </p>
              </div>

              <ContactForm initialService={serviceParam} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. FREQUENTLY ASKED QUESTIONS (Light White)
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E2E8F0]">
        <div className="container-main max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              CLARIFICATIONS
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#0B1220] tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#64748B]">
              Quick answers regarding NDAs, timelines, international timezones, and pricing.
            </p>
          </div>

          <div className="space-y-3.5">
            {CONTACT_FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all"
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
                        <div className="px-6 pb-6 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#E8ECF2]">
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
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactContent />
    </Suspense>
  );
}
