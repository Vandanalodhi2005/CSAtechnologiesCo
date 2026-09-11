'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = TESTIMONIALS.slice(0, 3);

  const next = () => setCurrent((prev) => (prev + 1) % visible.length);
  const prev = () => setCurrent((prev) => (prev - 1 + visible.length) % visible.length);

  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="CLIENT REVIEWS"
          title="What Our Clients Say"
          description="We're proud to have worked with amazing clients and helped them achieve their goals. Here's what they say about us."
          align="center"
          light
          className="mb-14"
        />

        {/* Desktop: 3-card grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <motion.div
              key={t.id}
              className="flex flex-col p-6 rounded-xl bg-white/[0.04] border border-white/5 hover:border-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-white/40">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col p-6 rounded-xl bg-white/[0.04] border border-white/5"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: visible[current].rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                &ldquo;{visible[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${visible[current].avatarBg} flex items-center justify-center text-white text-xs font-bold`}>
                  {visible[current].initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{visible[current].author}</p>
                  <p className="text-xs text-white/40">
                    {visible[current].role}, {visible[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {visible.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-brand-blue w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
