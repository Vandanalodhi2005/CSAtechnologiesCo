'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { NAV_LINKS } from '@/data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main flex items-center justify-between h-16 lg:h-[68px]" aria-label="Main Navigation">
        {/* Logo */}
        <Logo light className="relative z-50" />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue-hover shadow-button-glow transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 lg:hidden p-2 text-white/80 hover:text-white transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 top-0 bg-brand-navy z-40 lg:hidden"
            >
              <div className="flex flex-col pt-24 px-6 pb-8 h-full overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                            isActive
                              ? 'text-white bg-white/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center w-full py-3.5 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue-hover shadow-button-glow transition-all"
                  >
                    Get a Quote
                  </Link>
                </div>

                <div className="mt-auto pt-8 text-sm text-white/40">
                  <p>hello@csatechnologies.co</p>
                  <p className="mt-1">+91 98765 43210</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
