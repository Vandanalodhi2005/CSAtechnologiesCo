'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-deep-blue to-brand-navy overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-blue uppercase mb-4 block">
            LET&apos;S TALK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-extrabold leading-[1.15] tracking-tight text-white mb-5">
            Have a Project in Mind?
          </h2>
          <p className="text-base md:text-lg text-white/50 leading-relaxed mb-8 max-w-lg mx-auto">
            Tell us what you&apos;re looking to build. Let&apos;s discuss your requirements and create a digital solution that moves your business forward.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
