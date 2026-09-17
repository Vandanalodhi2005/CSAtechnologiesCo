'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShoppingCart, Code2, Smartphone, Cloud, Cog, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '@/data/services';

const iconMap = {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Cloud,
  Cog,
};

const serviceImages = [
  '/images/projects/technosky.jpg',
  '/images/projects/printscarts.jpg',
  '/images/projects/driverinfohub.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero-laptop.jpg',
  '/images/projects/smartprinthelp.jpg',
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const autoplay = window.setInterval(() => {
      setActiveService((current) => (current + 1) % SERVICES.length);
    }, 4500);

    return () => window.clearInterval(autoplay);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveService((current) => (current === 0 ? SERVICES.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveService((current) => (current + 1) % SERVICES.length);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFD] overflow-hidden" id="services">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-blue uppercase mb-3 block">SIGNATURE SERVICES</span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-extrabold leading-[1.1] tracking-tight text-brand-text-dark">Digital work with a clear purpose.</h2>
          </div>
          <p className="text-brand-text-muted text-[15px] leading-relaxed max-w-md">From first impression to daily operations, we design and engineer the digital systems that help ambitious businesses move forward.</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-0 items-stretch w-full">
            {[-1, 0, 1].map((offset) => {
              const serviceIndex = (activeService + offset + SERVICES.length) % SERVICES.length;
              const service = SERVICES[serviceIndex];
              const IconComponent = iconMap[service.icon];
              const isActive = offset === 0;

              return (
                <motion.div
                  key={`${service.id}-${activeService}`}
                  initial={{ opacity: 0, x: offset > 0 ? 28 : -28 }}
                  animate={{ opacity: isActive ? 1 : 0.62, x: 0, scale: isActive ? 1 : 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className={`${isActive ? 'w-full md:w-[56%]' : 'hidden md:block md:w-[22%]'} flex-shrink-0`}
                >
                  <Link href={`/services#${service.id}`} className="group relative flex min-h-[430px] h-full overflow-hidden rounded-[1.5rem] bg-[#061426] shadow-[0_16px_40px_rgba(6,20,38,0.14)]">
                    <img src={serviceImages[serviceIndex]} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-[#061426]/35 to-transparent" />
                    <div className="relative z-10 mt-auto p-7 sm:p-9 text-white">
                      <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-5">
                        <IconComponent className="w-5 h-5 text-[#93C5FD]" />
                      </div>
                      <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#93C5FD] mb-2">{service.number} / {service.highlight}</p>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold mb-3">{service.title}</h3>
                      <p className="text-sm text-white/72 leading-relaxed max-w-lg mb-6">{service.shortDescription}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-white">Explore service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {SERVICES.map((service, index) => (
                <button key={service.id} onClick={() => setActiveService(index)} aria-label={`Show ${service.title}`} className={`h-1.5 rounded-full transition-all ${index === activeService ? 'w-8 bg-brand-blue' : 'w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'}`} />
              ))}
              <span className="ml-3 text-xs text-[#94A3B8]">{isPaused ? 'Paused' : 'Auto-playing'}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={showPrevious} aria-label="Previous service" className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] text-[#334155] hover:border-brand-blue hover:text-brand-blue shadow-sm transition-all"><ChevronLeft className="w-4 h-4 mx-auto" /></button>
              <button onClick={showNext} aria-label="Next service" className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] text-[#334155] hover:border-brand-blue hover:text-brand-blue shadow-sm transition-all"><ChevronRight className="w-4 h-4 mx-auto" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
