'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import Logo from '@/components/shared/Logo';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060E1A]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-[#060E1A]'
      }`}
    >
      <nav
        className="container-main flex items-center justify-between h-[76px]"
        aria-label="Main Navigation"
      >
        {/* Logo Container — Clean & Visible */}
        <div className="flex items-center">
          <Logo size="md" className="relative z-50" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full shadow-[0_0_8px_#0066FF]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#009BFF] hover:brightness-110 rounded-full shadow-[0_4px_20px_rgba(0,102,255,0.4)] hover:shadow-[0_6px_28px_rgba(0,102,255,0.6)] transition-all duration-300 group"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 lg:hidden p-2 text-white/80 hover:text-white transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 top-0 bg-[#060E1A] z-40 lg:hidden"
            >
              <div className="flex flex-col pt-24 px-6 pb-8 h-full overflow-y-auto">
                <div className="flex flex-col gap-1.5">
                  {NAV_ITEMS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={`flex items-center justify-between py-3.5 px-4 text-base font-heading font-bold rounded-xl transition-all ${
                            isActive
                              ? 'text-white bg-white/[0.08] border border-white/[0.08]'
                              : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#009BFF] rounded-full shadow-[0_4px_18px_rgba(0,102,255,0.4)] transition-all"
                  >
                    <span>Get a Custom Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Mobile Quick Contact */}
                <div className="mt-auto pt-8 border-t border-white/[0.08] text-xs text-white/50 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>hello@csatechco.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
