'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    name: 'JavaScript',
    category: 'Language',
    color: '#F7DF1E',
    bgColor: '#FEFCE8',
    borderColor: '#FEF08A',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#EAB308">
        <path d="M3 3h18v18H3V3zm16.5 13.5h-2.2c0 1.2-.7 1.8-1.8 1.8-1.2 0-1.8-.7-1.8-1.9v-5.4h2.2v5.3c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-5.3h2.6v5.5zm-5.7-4.1c-.4-.7-1.2-1.3-2.3-1.3-1.5 0-2.4 1-2.4 2.4 0 1.6 1 2.2 2.3 2.7l.5.2c.7.3 1.1.6 1.1 1.1 0 .6-.5 1-1.3 1-.8 0-1.4-.4-1.6-1.1l-2 .9c.5 1.2 1.6 2 3.6 2 2.1 0 3.5-1.1 3.5-2.8 0-1.5-.9-2.2-2.3-2.7l-.5-.2c-.6-.2-1-.5-1-1 0-.5.4-.8 1.1-.8.6 0 1.1.3 1.4.8l2.1-.8z" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'Frontend',
    color: '#00D8FF',
    bgColor: '#ECFEFF',
    borderColor: '#A5F3FC',
    svg: (
      <svg className="w-6 h-6 text-[#00B4D8]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="0" cy="0" r="2.05" fill="#00B4D8" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'Framework',
    color: '#000000',
    bgColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="88" fill="#0F172A" stroke="#0F172A" strokeWidth="4" />
        <path d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white" />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#16A34A',
    bgColor: '#F0FDF4',
    borderColor: '#BBF7D0',
    svg: (
      <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.7v8.6L12 21.7l7.5-4.4V8.7L12 4.3z" />
        <text x="12" y="15.5" fontSize="7" fontWeight="bold" fill="#16A34A" textAnchor="middle" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: 'Express',
    category: 'Backend',
    color: '#334155',
    bgColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    svg: (
      <div className="w-6 h-6 rounded bg-[#334155] flex items-center justify-center text-white text-[11px] font-bold">
        Ex
      </div>
    ),
  },
  {
    name: 'MongoDB',
    category: 'Database',
    color: '#15803D',
    bgColor: '#F0FDF4',
    borderColor: '#BBF7D0',
    svg: (
      <svg className="w-6 h-6 text-[#15803D]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C11.5 3.5 9 8 9 12c0 3.5 2 6.5 3 8 1-1.5 3-4.5 3-8 0-4-2.5-8.5-3-10z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: '#0284C7',
    bgColor: '#F0F9FF',
    borderColor: '#BAE6FD',
    svg: (
      <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.14.28 1.95 1.1 2.86 2 1.47 1.5 3.2 3.25 6.64 3.25 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.14-.28-1.95-1.1-2.86-2C17.17 7.75 15.44 6 12 6zM5 13c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.14.28 1.95 1.1 2.86 2 1.47 1.5 3.2 3.25 6.64 3.25 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.14-.28-1.95-1.1-2.86-2C10.17 14.75 8.44 13 5 13z" />
      </svg>
    ),
  },
  {
    name: 'WordPress',
    category: 'CMS',
    color: '#0284C7',
    bgColor: '#F0F9FF',
    borderColor: '#BAE6FD',
    svg: (
      <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 1.2c4.86 0 8.8 3.94 8.8 8.8 0 1.8-.54 3.48-1.46 4.88L15.6 6.3c.4-.04.8-.08.8-.08a.6.6 0 00-.08-1.2h-3.6a.6.6 0 000 1.2s.36.04.74.08l-2.4 7.2-1.9-6.3c.36-.04.7-.08.7-.08a.6.6 0 10-.08-1.2H7.2a.6.6 0 100 1.2s.36.04.7.08L11 18.2l-3.3-9.9c.36-.04.7-.08.7-.08a.6.6 0 10-.08-1.2H5.4a.6.6 0 00-.1 1.2s.36.04.74.08l3.6 10.7a8.77 8.77 0 01-6.44-7C3.2 7.14 7.14 3.2 12 3.2z" />
      </svg>
    ),
  },
  {
    name: 'WooCommerce',
    category: 'E-Commerce',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    borderColor: '#DDD6FE',
    svg: (
      <div className="w-6 h-6 rounded bg-[#7C3AED] flex items-center justify-center text-white text-[11px] font-bold">
        W
      </div>
    ),
  },
  {
    name: 'Git',
    category: 'Version Control',
    color: '#EA580C',
    bgColor: '#FFF7ED',
    borderColor: '#FED7AA',
    svg: (
      <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.6L10.6 2.6c.8-.8 2-.8 2.8 0l1.4 1.4-2.3 2.3c-.6-.2-1.3-.1-1.8.4-.5.5-.6 1.2-.4 1.8L8 10.8V16c-.3.1-.6.3-.8.6-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1-.2-.2-.5-.4-.8-.5v-4.5l2.2-2.2c.4.1.8.1 1.1 0l2.3 2.3c-.1.3-.1.7 0 1 .3.7 1.1 1.1 1.8.8.7-.3 1.1-1.1.8-1.8-.3-.6-1-1-1.7-.9l-2.3-2.3 1.4-1.4 7.3 7.3c.8.8.8 2 0 2.8L13.4 21.4c-.8.8-2 .8-2.8 0L2.6 13.4c-.8-.8-.8-2 0-2.8z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'DevOps',
    color: '#0F172A',
    bgColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    svg: (
      <svg className="w-6 h-6 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    color: '#000000',
    bgColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    svg: (
      <svg className="w-5 h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
];

export default function TechGrid() {
  return (
    <section className="py-20 md:py-24 bg-[#F8FAFD] border-t border-[#EDF2F7] relative overflow-hidden" id="tech-stack">
      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2.5 block">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold leading-[1.15] tracking-tight text-[#0B1220] mb-3">
            Technology That Powers Your Ideas
          </h2>
          <p className="text-[15px] text-[#64748B] leading-relaxed max-w-xl mx-auto">
            We use modern, battle-tested technologies to build fast, scalable, and secure digital products.
          </p>
        </motion.div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-[#E8ECF2] hover:border-[#0066FF]/40 hover:shadow-[0_8px_25px_rgba(0,102,255,0.08)] transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon Container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: tech.bgColor,
                  border: `1px solid ${tech.borderColor}`,
                }}
              >
                {tech.svg}
              </div>

              <span className="text-sm font-heading font-bold text-[#0B1220] group-hover:text-[#0066FF] transition-colors text-center">
                {tech.name}
              </span>
              <span className="text-[11px] text-[#94A3B8] font-medium mt-0.5">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
