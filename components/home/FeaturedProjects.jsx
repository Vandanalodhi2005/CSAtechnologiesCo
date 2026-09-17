'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const [activeProject, setActiveProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const autoplay = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % featured.length);
    }, 5000);

    return () => window.clearInterval(autoplay);
  }, [featured.length, isPaused]);

  const showPrevious = () => {
    setActiveProject((current) => (current === 0 ? featured.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveProject((current) => (current + 1) % featured.length);
  };

  return (
    <section className="relative pt-20 pb-10 md:pt-28 md:pb-14 bg-[#DCD8D2] overflow-hidden" id="portfolio">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-45"
        style={{ backgroundImage: `url('${featured[activeProject]?.image || '/images/projects/technosky.jpg'}')` }}
      />
      <div className="absolute inset-0 bg-[#E7E3DE]/75 backdrop-blur-[2px]" />
      <div className="container-main relative z-10">
        {/* Header Section matching reference */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#1F1D1A] uppercase mb-3 block text-center">
              SELECTED WORK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold leading-[1.05] tracking-tight text-[#171513] mb-3 text-center">
              Featured Projects
            </h2>
            <p className="text-[#4F4A45] text-[15px] leading-relaxed max-w-xl">
              From e-commerce stores to business platforms, we&apos;ve helped
              clients across industries build their digital presence.
            </p>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-start items-center gap-0 min-h-[475px] overflow-hidden py-5 w-full">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const projectIndex = (activeProject + offset + featured.length) % featured.length;
              const project = featured[projectIndex];
              const isActive = offset === 0;

              return (
                <motion.div
                  key={`${project.id}-${activeProject}`}
                  initial={{ opacity: 0, x: offset > 0 ? 28 : -28 }}
                  animate={{ opacity: isActive ? 1 : 0.62, x: 0, scale: isActive ? 1 : 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className={`${isActive ? 'w-full md:w-[28%] z-10' : 'hidden lg:block lg:w-[18%]'} flex-shrink-0`}
                >
                  <div className={`group relative flex min-h-[360px] md:min-h-[405px] h-full overflow-hidden rounded-[1.1rem] border border-black/20 shadow-[0_14px_28px_rgba(45,38,32,0.15)] transition-all duration-500 ${isActive ? 'md:min-h-[445px] shadow-[0_24px_55px_rgba(45,38,32,0.28)]' : ''}`}>
                    <img
                      src={project.image || `/images/projects/${project.slug}.jpg`}
                      alt={`${project.name} - ${project.category} by CSA Technologies CO`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 ${isActive ? 'bg-gradient-to-t from-black/75 via-black/20 to-black/5' : 'bg-[#F4F1EC]/55 backdrop-blur-[1px]'}`} />
                    <div className={`relative z-10 mt-auto p-5 sm:p-7 ${isActive ? 'text-white' : 'text-[#171513]'}`}>
                      <p className={`text-[10px] font-bold tracking-[0.16em] uppercase mb-2 ${isActive ? 'text-white/75' : 'text-[#514B45]'}`}>{project.category}</p>
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold mb-2">{project.name}</h3>
                      {isActive && <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-5">{project.shortDescription}</p>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {featured.map((project, index) => (
                <button key={project.id} onClick={() => setActiveProject(index)} aria-label={`Show ${project.name}`} className={`h-1.5 rounded-full transition-all ${index === activeProject ? 'w-8 bg-[#0066FF]' : 'w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'}`} />
              ))}
              <span className="ml-3 text-xs text-[#5D5751]">{isPaused ? 'Paused' : 'Auto-playing'}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={showPrevious} aria-label="Previous project" className="w-10 h-10 rounded-full bg-white/60 border border-black/20 text-[#292521] hover:bg-white shadow-sm transition-all"><ChevronLeft className="w-4 h-4 mx-auto" /></button>
              <button onClick={showNext} aria-label="Next project" className="w-10 h-10 rounded-full bg-white/60 border border-black/20 text-[#292521] hover:bg-white shadow-sm transition-all"><ChevronRight className="w-4 h-4 mx-auto" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
