'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/process';

export default function ProcessSection() {
  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-28 bg-[#F8FAFD]" id="process">
      <div className="container-main">
        {/* Header - Left Aligned matching reference image */}
        <div className="mb-14 md:mb-16">
          <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold leading-[1.15] tracking-tight text-[#0B1220] mb-3">
            How We Work
          </h2>
          <p className="text-[#64748B] text-[15px] leading-relaxed max-w-xl">
            A simple and transparent process to turn your idea into a successful digital product.
          </p>
        </div>

        {/* Desktop 5-Step Row with Horizontal Arrows */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8">
          {PROCESS_STEPS.map((step, i) => {
            const isFirst = i === 0;
            const stepNum = step.step; // '01', '02', etc.

            return (
              <motion.div
                key={step.step}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: 'easeOut' }}
              >
                {/* Top: Circle Badge + Arrow to next */}
                <div className="flex items-center justify-between mb-5 pr-2">
                  {/* Circle Badge */}
                  {isFirst ? (
                    <div className="w-12 h-12 rounded-full bg-[#0066FF] text-white font-heading font-bold text-sm flex items-center justify-center shadow-[0_4px_16px_rgba(0,102,255,0.35)] flex-shrink-0">
                      01
                    </div>
                  ) : (
                    <div className="relative w-12 h-12 rounded-full bg-white border border-[#93C5FD] flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                      {/* Stylized progress shape at bottom matching reference image */}
                      <div
                        className="absolute bottom-0 inset-x-0 bg-[#0066FF]/15 rounded-b-full transition-all"
                        style={{ height: `${(i + 1) * 16}%` }}
                      />
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="21.5"
                          fill="none"
                          stroke="#0066FF"
                          strokeWidth="1.5"
                          strokeDasharray={`${((i + 1) / 5) * 135} 135`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="relative z-10 font-heading font-bold text-sm text-[#0066FF]">
                        {stepNum}
                      </span>
                    </div>
                  )}

                  {/* Horizontal Arrow between steps */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#94A3B8] ml-auto mr-1 flex-shrink-0"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-heading font-bold text-[#0B1220] mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[13px] text-[#64748B] leading-relaxed max-w-[210px]">
                  {step.shortDesc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tablet & Mobile: Responsive Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
          {PROCESS_STEPS.map((step, i) => {
            const isFirst = i === 0;
            const stepNum = step.step;

            return (
              <motion.div
                key={step.step}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8ECF1] shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Circle Badge */}
                {isFirst ? (
                  <div className="w-11 h-11 rounded-full bg-[#0066FF] text-white font-heading font-bold text-sm flex items-center justify-center shadow-[0_4px_14px_rgba(0,102,255,0.35)] flex-shrink-0">
                    01
                  </div>
                ) : (
                  <div className="relative w-11 h-11 rounded-full bg-white border border-[#93C5FD] flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                    <div
                      className="absolute bottom-0 inset-x-0 bg-[#0066FF]/15 rounded-b-full"
                      style={{ height: `${(i + 1) * 16}%` }}
                    />
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                      viewBox="0 0 48 48"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="21.5"
                        fill="none"
                        stroke="#0066FF"
                        strokeWidth="1.5"
                        strokeDasharray={`${((i + 1) / 5) * 135} 135`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="relative z-10 font-heading font-bold text-sm text-[#0066FF]">
                      {stepNum}
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-base font-heading font-bold text-[#0B1220] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {step.shortDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
