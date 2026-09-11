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
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="container-main">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-blue uppercase mb-3 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-extrabold leading-[1.15] tracking-tight text-brand-text-dark">
              Complete Digital Solutions
              <br className="hidden md:block" />
              for Your Business
            </h2>
          </div>
          <p className="text-brand-text-muted text-[15px] leading-relaxed max-w-md lg:text-right lg:pt-8">
            We offer end-to-end development services to help you
            build, launch and grow your online presence. From simple
            business websites to complex web applications — we do it all.
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
                  className="group flex flex-col h-full p-6 rounded-xl border border-[#E8ECF1] bg-white hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors duration-300">
                    {IconComponent && <IconComponent className="w-5 h-5 text-brand-blue" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-heading font-bold text-brand-text-dark mb-2 group-hover:text-brand-blue transition-colors duration-200">
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
