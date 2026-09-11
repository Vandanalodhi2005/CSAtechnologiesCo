'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShoppingCart, Code2, Smartphone, Cloud, Cog } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/data/services';

const iconMap = {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Cloud,
  Cog,
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-main">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title={<>Complete Digital Solutions<br className="hidden md:block" />for Your Business</>}
          />
          <p className="text-brand-text-muted text-base leading-relaxed max-w-md lg:text-right">
            From business websites to complex web applications, we design and develop scalable digital solutions tailored to your business goals.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group flex flex-col h-full p-6 rounded-xl border border-brand-border bg-white hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Icon + Number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300">
                      {IconComponent && <IconComponent className="w-5 h-5 text-brand-blue" />}
                    </div>
                    <span className="text-sm font-bold text-brand-text-muted/30 font-heading">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-brand-text-dark mb-2 group-hover:text-brand-blue transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-text-muted leading-relaxed mb-5 flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Learn More */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
