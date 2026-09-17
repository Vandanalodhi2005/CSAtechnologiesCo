'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[#EAF2F8]">
      <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/images/hero/hero.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-white/20 pointer-events-none" />

      {/* ── Slanted Electric Blue Polygon in Background ── */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-2%] lg:right-[4%] w-[420px] sm:w-[500px] lg:w-[540px] h-[300px] sm:h-[360px] lg:h-[380px] bg-gradient-to-br from-[#BFDBFE] via-[#DBEAFE] to-[#BAE6FD] rounded-[42px] -rotate-[14deg] opacity-80 shadow-[0_0_100px_rgba(59,130,246,0.25)] pointer-events-none" />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-blue/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0084FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left Content Column ── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Eyebrow: Your Vision / Our Code / Real Results */}
            <motion.p
              className="text-sm font-medium tracking-wide text-[#0066FF] mb-5 flex items-center gap-2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span>Your Vision</span>
              <span className="text-[#94A3B8]">/</span>
              <span>Our Code</span>
              <span className="text-[#94A3B8]">/</span>
              <span>Real Results</span>
            </motion.p>

            {/* Main Heading: Matching Exact Layout & Font */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-extrabold leading-[1.14] tracking-tight text-[#0B1220] mb-6">
              We Build Modern <br />
              Web Solutions for <br />
              <span className="text-[#0084FF]">Growing Businesses</span>
            </h1>

            {/* Description */}
            <motion.p
              className="text-[#475569] text-[15px] sm:text-[16px] leading-[1.65] max-w-lg mb-8 font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              CSA Technologies CO is a full-stack IT company specializing in
              website development, e-commerce solutions, and custom web
              applications. We turn your ideas into powerful digital products.
            </motion.p>

            {/* CTA Buttons: Pill Shaped matching reference */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5 mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 shadow-[0_4px_20px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#0B1220] bg-white/70 border border-[#CBD5E1] hover:border-[#0084FF] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>View Our Work</span>
              </Link>
            </motion.div>

            {/* Tech Stack Icons Row */}
            <motion.div
              className="flex flex-wrap items-center gap-6 sm:gap-7 text-xs sm:text-sm font-medium text-[#334155]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* React */}
              <div className="flex items-center gap-2 text-black/90 hover:text-white transition-colors">
                <svg
                  className="w-5 h-5 text-[#00D8FF]"
                  viewBox="-11.5 -10.23174 23 20.46348"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </svg>
                <span>React</span>
              </div>

              {/* Next.js */}
              <div className="flex items-center gap-2 text-black/90 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 180 180" fill="none">
                  <circle cx="90" cy="90" r="88" fill="black" stroke="white" strokeWidth="6" />
                  <path
                    d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
                    fill="white"
                  />
                  <rect x="115" y="54" width="12" height="72" fill="black" />
                </svg>
                <span>Next.js</span>
              </div>

              {/* Node.js */}
              <div className="flex items-center gap-2 text-black/90 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#68A063]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.7v8.6L12 21.7l7.5-4.4V8.7L12 4.3z" />
                  <text
                    x="12"
                    y="15.5"
                    fontSize="7.5"
                    fontWeight="bold"
                    fill="#68A063"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    JS
                  </text>
                </svg>
                <span>Node.js</span>
              </div>

              {/* MongoDB */}
              <div className="flex items-center gap-2 text-black/90 hover:text-white transition-colors">
                <svg className="w-4 h-5 text-[#00ED64]" viewBox="0 0 24 28" fill="currentColor">
                  <path
                    d="M11.996 0c-.288 0-.573.08-.823.235C10.024.945 2.128 6.136 2.003 14.77c-.078 5.378 3.528 10.457 9.17 12.995.263.118.556.177.848.177.29 0 .584-.06.847-.177 5.642-2.538 9.248-7.617 9.17-12.995C21.913 6.136 14.017.945 12.868.235A1.666 1.666 0 0 0 11.996 0zm-.008 2.275c1.47 1.05 7.747 5.767 7.822 12.553.057 3.96-2.54 7.818-6.903 9.947-.308.15-.615.15-.919 0-4.363-2.13-6.96-5.987-6.903-9.947.075-6.786 6.352-11.503 7.903-12.553z"
                    fill="#13AA52"
                  />
                  <path
                    d="M11.996 4v19c-3.5-.8-5.5-4.2-5.5-8.5 0-4.8 4.2-8.5 5.5-10.5z"
                    fill="#13AA52"
                  />
                </svg>
                <span>MongoDB</span>
              </div>

              {/* WordPress */}
              <div className="flex items-center gap-2 text-black/90 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.2c5.964 0 10.8 4.836 10.8 10.8 0 2.376-.77 4.57-2.074 6.352l-5.69-15.586C14.184 1.77 13.11 1.2 12 1.2zm-8.736 10.8c0-1.896.536-3.666 1.464-5.176l4.636 12.7C5.992 18.156 3.264 15.348 3.264 12zm8.736 10.8c-1.396 0-2.716-.312-3.896-.868l4.24-12.316 4.348 11.916c-.036.06-.076.12-.116.176-1.32.7-2.852 1.092-4.576 1.092zm6.208-2.604l-3.328-9.664c.548-.028 1.04-.156 1.04-.156.492-.056.436-.784-.056-.756 0 0-1.488.112-2.44.112-.924 0-2.412-.112-2.412-.112-.492-.028-.548.7-.056.756 0 0 .464.128.956.156l1.42 3.9-2.02 6.06-3.344-9.96c.548-.028 1.04-.156 1.04-.156.492-.056.436-.784-.056-.756 0 0-1.488.112-2.44.112-.224 0-.48-.008-.736-.02 1.832-2.64 4.86-4.38 8.3-4.38 2.012 0 3.88.6 5.436 1.636-.048.332-.084.724-.084 1.144 0 1.26.476 2.38 1.008 3.388.42.784.868 1.624.868 2.94 0 .924-.224 1.708-.56 2.408l3.18 8.708c.516-.924.848-1.996.848-3.14 0-1.29-.28-2.512-.784-3.612z" />
                </svg>
                <span>WordPress</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Laptop Visual Showcase ── */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Laptop Image */}
              <div className="relative z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/hero-laptop.jpg"
                  alt="CSA Technologies CO — Full-stack software development with Build Innovate Grow"
                  width={900}
                  height={560}
                  className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.75)]"
                  loading="eager"
                />
              </div>

              {/* Floating Bottom Card: Let's build something great together → */}
              <motion.div
                className="absolute -bottom-2 right-2 sm:right-6 z-20 bg-[#07162C]/90 border border-[#142948] rounded-xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md hidden sm:flex items-center gap-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#0E2445] flex items-center justify-center text-white/90 shrink-0">
                  <svg
                    className="w-4 h-4 text-white/90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-snug">
                    Let&apos;s build something great
                  </p>
                  <p className="text-[11px] text-white/60 flex items-center gap-1 font-medium">
                    together →
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
