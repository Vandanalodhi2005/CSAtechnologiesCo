'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const techBadges = ['React', 'Next.js', 'Node.js', 'MongoDB', 'WordPress'];

export default function Hero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <motion.p
              className="text-xs font-medium tracking-[0.25em] text-white/50 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              YOUR VISION &nbsp;•&nbsp; OUR CODE &nbsp;•&nbsp; REAL RESULTS
            </motion.p>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              We Build Modern Web Solutions{' '}
              <br className="hidden md:block" />
              for{' '}
              <span className="text-gradient-blue">Growing Businesses</span>
            </h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              CSA Technologies CO is a full-service software development company specializing in modern websites, e-commerce solutions, and custom web applications. We turn business ideas into powerful digital products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button href="/contact" size="lg" className="group">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              className="flex flex-wrap items-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {techBadges.map((tech) => (
                <Badge key={tech} variant="dark">
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual — Laptop Code Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Glow behind laptop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-2xl blur-2xl pointer-events-none" />

              {/* Laptop Mockup SVG */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-card-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/laptop-mockup.svg"
                  alt="CSA Technologies CO — Modern full-stack web development code preview with Next.js, Node.js and MongoDB"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-4 -right-2 md:-right-6 bg-brand-navy-card border border-white/10 rounded-lg p-3 shadow-card-dark hidden sm:flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Let&apos;s build something great</p>
                  <p className="text-[10px] text-white/40">together →</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
