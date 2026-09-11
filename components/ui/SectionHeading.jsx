'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <motion.div
      className={`max-w-2xl ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${
            light ? 'text-brand-blue' : 'text-brand-blue'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold leading-[1.15] tracking-tight mb-4 ${
          light ? 'text-white' : 'text-brand-text-dark'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-brand-text-light-muted' : 'text-brand-text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
