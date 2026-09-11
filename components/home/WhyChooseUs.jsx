'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Clock, Code, MessageCircle, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled developers, designers and problem solvers.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time and deadlines.',
  },
  {
    icon: Code,
    title: 'Clean & Scalable Code',
    description: 'Future-proof solutions for long-term growth.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description: "You're always in the loop.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden" id="why-csa">
      {/* Dark navy base */}
      <div className="absolute inset-0 bg-[#0A1628]" />

      {/* Background office photo — positioned right, faded left */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/why-choose-bg.jpg')" }}
      />
      {/* Gradient overlay to fade image on the left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]/40" />

      {/* Content */}
      <div className="container-main relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-4 block">
              WHY CHOOSE CSA
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold leading-[1.15] tracking-tight text-white mb-5">
              Why Businesses{' '}
              <br className="hidden md:block" />
              Trust CSA Technologies CO
            </h2>

            <p className="text-[15px] text-white/50 leading-relaxed max-w-lg mb-9">
              We combine technical expertise with a deep understanding of
              business needs. Our goal is simple — to deliver high-quality
              solutions that help you grow, faster.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0066FF] text-white text-sm font-semibold shadow-[0_4px_24px_rgba(0,102,255,0.45)] hover:shadow-[0_6px_32px_rgba(0,102,255,0.6)] hover:bg-[#0052CC] transition-all duration-300 group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* ── Right Column — 4 Benefits Stacked Vertically ── */}
          <div className="flex flex-col gap-7 lg:gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <benefit.icon className="w-5 h-5 text-[#60A5FA]" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[15px] font-heading font-bold text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
