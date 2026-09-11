'use client';

import { motion } from 'framer-motion';
import { Users, Clock, Code, Headphones } from 'lucide-react';
import Button from '@/components/ui/Button';

const benefits = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled developers and designers focused on solving real business problems.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Clear milestones and transparent project communication throughout.',
  },
  {
    icon: Code,
    title: 'Clean & Scalable Code',
    description: 'Future-proof solutions for long-term growth and maintainability.',
  },
  {
    icon: Headphones,
    title: 'Transparent Communication',
    description: "You're always in the loop. Weekly demos, daily standups when needed.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-blue uppercase mb-4 block">
              WHY CHOOSE CSA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold leading-[1.15] tracking-tight text-white mb-5">
              Why Businesses Trust{' '}
              <span className="text-gradient-blue">CSA Technologies CO</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-lg mb-8">
              We combine technical expertise with a deep understanding of business requirements to deliver high-quality solutions that help you grow, faster.
            </p>
            <Button href="/about" variant="outline" size="lg" className="group">
              Learn More About Us
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </motion.div>

          {/* Right Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/15 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
