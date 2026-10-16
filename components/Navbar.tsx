'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Phone, Calendar, Menu, X, Building, ChevronRight } from 'lucide-react';
import { useSiteVisit } from './SiteVisitContext';

export default function Navbar() {
  const pathname = usePathname();
  const { openSiteVisitModal } = useSiteVisit();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'AI Valuation & Studio', href: '/ai-studio', badge: 'AI' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#0F3D2E]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30 py-3'
            : 'bg-[#0F3D2E] text-white py-4 border-b border-white/10'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with subtle hover micro-interaction */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              id="brand-logo-link"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B89324] flex items-center justify-center text-[#0F3D2E] font-extrabold shadow-md shadow-[#D4AF37]/20 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                <Building className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div>
                <span className="font-bold text-lg sm:text-xl tracking-tight text-white block leading-tight">
                  Property <span className="text-[#D4AF37]">Junction</span>
                </span>
                <span className="text-[10px] text-white/70 uppercase tracking-widest block font-medium">
                  Jaipur Real Estate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? 'text-[#D4AF37] font-semibold'
                        : 'text-white/85 hover:text-white hover:bg-white/5'
                    }`}
                    id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-[#D4AF37] text-[#0F3D2E] tracking-wider uppercase shadow-xs">
                        {link.badge}
                      </span>
                    )}

                    {/* Active highlight pill indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/10 rounded-lg -z-10 border border-[#D4AF37]/30"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA actions */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                href="tel:+919352521379"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 text-xs font-semibold tracking-wide transition-all border border-transparent hover:border-white/10"
                id="header-phone-cta"
              >
                <div className="w-7 h-7 rounded-full bg-[#1D6B52] flex items-center justify-center text-[#D4AF37]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 93525 21379</span>
              </motion.a>

              <motion.button
                whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                onClick={() => openSiteVisitModal()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89324] hover:from-[#E5C358] hover:to-[#D4AF37] text-[#0F3D2E] text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
                id="header-book-site-visit-button"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Site Visit</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+919352521379"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
                id="mobile-phone-quick-btn"
                aria-label="Call Property Junction"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                id="mobile-menu-toggle"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer with smooth AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-[#0F3D2E] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 overflow-hidden shadow-2xl"
            >
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -12 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-white/10 text-[#D4AF37] font-semibold border-l-2 border-[#D4AF37]'
                          : 'text-white/90 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        {link.badge && (
                          <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-[#D4AF37] text-[#0F3D2E]">
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSiteVisitModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D4AF37] text-[#0F3D2E] font-bold text-sm shadow-md active:scale-98 transition-transform cursor-pointer"
                  id="mobile-book-site-visit-button"
                >
                  <Calendar className="w-4 h-4" />
                  Book Guided Site Visit
                </button>
                <a
                  href="tel:+919352521379"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 active:scale-98 transition-transform"
                  id="mobile-call-direct-button"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  Direct Hotline: +91 93525 21379
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
