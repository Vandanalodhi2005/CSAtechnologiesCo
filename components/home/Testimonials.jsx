'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

export default function Testimonials() {
  const allTestimonials = TESTIMONIALS;
  const pageSize = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allTestimonials.length / pageSize);

  const visible = allTestimonials.slice(page * pageSize, page * pageSize + pageSize);

  const nextPage = () => setPage((p) => (p + 1) % totalPages);
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section className="py-20 md:py-28 bg-[#060E1A] relative overflow-hidden" id="testimonials">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Header row: left text + right nav arrows */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold leading-[1.15] tracking-tight text-white mb-3">
              What Our Clients Say
            </h2>
            <p className="text-[15px] text-white/40 leading-relaxed max-w-xl">
              We&apos;re proud to have worked with amazing clients and helped them
              achieve their goals. Here&apos;s what they have to say.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevPage}
              aria-label="Previous testimonials"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-white hover:border-[#0066FF]/40 hover:bg-[#0066FF]/10 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextPage}
              aria-label="Next testimonials"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-white hover:border-[#0066FF]/40 hover:bg-[#0066FF]/10 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop: 3-card grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {visible.map((t, i) => (
              <motion.div
                key={`${page}-${t.id}`}
                className="flex flex-col p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Quote */}
                <p className="text-[15px] text-white/55 leading-relaxed flex-1 mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-white/[0.06]">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-heading font-bold text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-white/35">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: Single card carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${page}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5"
            >
              {visible.map((t) => (
                <div
                  key={t.id}
                  className="flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <p className="text-sm text-white/55 leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.author}</p>
                      <p className="text-xs text-white/35">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
