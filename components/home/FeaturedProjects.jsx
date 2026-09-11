'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFD]" id="portfolio">
      <div className="container-main">
        {/* Header Section matching reference */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.18em] text-[#0066FF] uppercase mb-2 block">
              OUR WORK
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold leading-[1.15] tracking-tight text-[#0B1220] mb-3">
              Featured Projects
            </h2>
            <p className="text-[#64748B] text-[15px] leading-relaxed max-w-xl">
              From e-commerce stores to business platforms, we&apos;ve helped
              clients across industries build their digital presence.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors whitespace-nowrap group self-start md:self-end"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Project Cards in a row matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: 'easeOut' }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl border border-[#E8ECF1] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/30 transition-all duration-300"
              >
                {/* Visual Mockup Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0A1628]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image || `/images/projects/${project.slug}.jpg`}
                    alt={`${project.name} — ${project.category} by CSA Technologies CO`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Card Content: Title First, Badge Second, View Project Third */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-[17px] font-heading font-bold text-[#0B1220] group-hover:text-[#0066FF] transition-colors mb-2">
                      {project.name}
                    </h3>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#EBF5FF] text-[#0066FF]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] group-hover:text-[#0052CC] transition-colors pt-2">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
