'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Code, Rocket, Headphones } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/data/process';

const iconMap = { Search, FileText, Code, Rocket, Headphones };

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white" id="process">
      <div className="container-main">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="How We Work"
          description="A unique and transparent process to turn your ideas into a successful digital product."
          align="center"
          className="mb-16"
        />

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-brand-border" />

          <div className="grid grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, i) => {
              const IconComponent = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                >
                  {/* Node Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-brand-blue/10 border-2 border-brand-blue flex items-center justify-center mb-5">
                    {IconComponent && <IconComponent className="w-6 h-6 text-brand-blue" />}
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-bold text-brand-blue mb-1.5">{step.step}</span>

                  {/* Title */}
                  <h3 className="text-base font-heading font-bold text-brand-text-dark mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-text-muted leading-relaxed max-w-[200px]">
                    {step.shortDesc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, i) => {
            const IconComponent = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                className="flex gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 border-2 border-brand-blue flex items-center justify-center flex-shrink-0">
                    {IconComponent && <IconComponent className="w-5 h-5 text-brand-blue" />}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-[2px] flex-1 bg-brand-border mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-brand-blue">{step.step}</span>
                  <h3 className="text-base font-heading font-bold text-brand-text-dark mt-1 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
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
