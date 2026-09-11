'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const technologies = [
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'WooCommerce', category: 'E-Commerce' },
  { name: 'Git', category: 'Version Control' },
  { name: 'GitHub', category: 'DevOps' },
  { name: 'Vercel', category: 'Deployment' },
];

export default function TechGrid() {
  return (
    <section className="section-padding bg-brand-light-bg">
      <div className="container-main">
        <SectionHeading
          eyebrow="TECHNOLOGY STACK"
          title="Technology That Powers Your Ideas"
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-5 rounded-xl bg-white border border-brand-border hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <span className="text-base font-heading font-bold text-brand-text-dark group-hover:text-brand-blue transition-colors">
                {tech.name}
              </span>
              <span className="text-xs text-brand-text-muted mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
