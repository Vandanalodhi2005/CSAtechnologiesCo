'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'MongoDB', color: '#4DB33D' },
  { name: 'WordPress', color: '#21759B' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
  { name: 'JavaScript', color: '#F7DF1E' },
];

export default function TechStrip() {
  return (
    <section className="bg-brand-deep-dark border-t border-b border-white/5 py-8">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <p className="text-xs font-medium tracking-[0.15em] text-white/30 uppercase whitespace-nowrap">
            Built With Modern Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
