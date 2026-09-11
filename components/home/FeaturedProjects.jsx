'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { PROJECTS } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="section-padding bg-brand-light-bg" id="portfolio">
      <div className="container-main">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="OUR WORK"
            title="Featured Projects"
            description="From e-commerce stores to business platforms, we've helped clients across industries build their digital presence."
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors whitespace-nowrap group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: 'easeOut' }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-card-hover hover:border-brand-blue/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/projects/${project.slug}.svg`}
                    alt={`${project.name} — ${project.category} by CSA Technologies CO`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge>{project.category}</Badge>
                    <span className="text-xs text-brand-text-muted">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-text-dark mb-1.5 group-hover:text-brand-blue transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-brand-text-muted line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-brand-text-muted">
                      {project.technologies.slice(0, 3).join(' • ')}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                      View Project
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
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
