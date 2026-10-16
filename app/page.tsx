'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Phone,
  Calendar,
  Search,
  MapPin,
  Building,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Home as HomeIcon,
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  KeyRound,
  BadgePercent,
  Building2,
  Car
} from 'lucide-react';
import { PROPERTIES, JAIPUR_LOCALITIES, PROPERTY_TYPES } from '@/data/properties';
import { TESTIMONIALS } from '@/data/testimonials';
import PropertyCard from '@/components/PropertyCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionReveal';
import { useSiteVisit } from '@/components/SiteVisitContext';

export default function HomePage() {
  const { openSiteVisitModal } = useSiteVisit();
  const prefersReducedMotion = useReducedMotion();

  // Search Bar state
  const [selectedLocality, setSelectedLocality] = useState('All Localities');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBudget, setSelectedBudget] = useState('All');

  // Testimonial Slider state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const featuredProperties = PROPERTIES.filter((p) => p.featured).slice(0, 6);

  const handleSearchRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedLocality !== 'All Localities') params.set('locality', selectedLocality);
    if (selectedType !== 'All Types') params.set('type', selectedType);
    if (selectedBudget !== 'All') params.set('budget', selectedBudget);
    window.location.href = `/properties?${params.toString()}`;
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-[#0F3D2E] text-white overflow-hidden pt-12 pb-20">
        {/* Full-screen luxury villa background image with cinematic slow zoom */}
        <motion.div
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=90"
            alt="Property Junction Luxury Villa in Jaipur"
            fill
            priority
            className="object-cover object-center brightness-[0.38]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Royal Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D2E]/95 via-[#0F3D2E]/75 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-7">
              {/* Trust Badge */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                JDA & RERA Approved Projects Specialist
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
              >
                Find Your Perfect Property <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
                  With Confidence
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl text-white/85 max-w-2xl font-normal leading-relaxed"
              >
                Property Junction – Jaipur Real Estate. Directed by <strong>RK Reddy</strong>, Real Estate Professional & Digital Creator. Guiding buyers and investors with verified JDA & RERA approved projects across Vaishali Nagar, C-Scheme, Mansarovar, and Jagatpura.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                >
                  <Link
                    href="/properties"
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89324] hover:from-[#E5C358] hover:to-[#D4AF37] text-[#0F3D2E] font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                    id="hero-explore-properties-cta"
                  >
                    Explore Properties
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                  onClick={() => openSiteVisitModal()}
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/30 transition-all flex items-center gap-2 cursor-pointer"
                  id="hero-book-site-visit-cta"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  Book Site Visit
                </motion.button>

                <motion.a
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                  href="tel:+919352521379"
                  className="px-5 py-3.5 rounded-xl bg-[#1D6B52]/60 hover:bg-[#1D6B52] text-white font-bold text-sm sm:text-base border border-[#D4AF37]/30 transition-colors flex items-center gap-2"
                  id="hero-call-now-cta"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  Call Now
                </motion.a>
              </motion.div>

              {/* Trust Badges Bar with AnimatedCounter */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                    <AnimatedCounter to={500} suffix="+" />
                  </span>
                  <span className="text-xs text-white/70 font-medium">Happy Clients</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] block">
                    <AnimatedCounter to={100} suffix="+" />
                  </span>
                  <span className="text-xs text-white/70 font-medium">Properties Sold</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                    <AnimatedCounter to={10} suffix="+" />
                  </span>
                  <span className="text-xs text-white/70 font-medium">Years Experience</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating Statistics Card with subtle luxury float */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 25, y: 15 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <div
                className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-[#D4AF37]/40 shadow-2xl space-y-6 text-[#111111] transition-transform hover:-translate-y-1 duration-300"
                id="hero-stats-floating-card"
              >
                <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#1D6B52]">
                      Jaipur Luxury Real Estate
                    </span>
                    <h2 className="text-xl font-extrabold text-[#0F3D2E]">
                      Why Choose Us?
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] text-[#D4AF37] flex items-center justify-center font-bold shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2]">
                    <div className="w-7 h-7 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center mx-auto mb-1.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-extrabold text-[#0F3D2E] block leading-tight">
                      <AnimatedCounter to={98} suffix="%" />
                    </span>
                    <span className="text-[10px] text-[#555555] block">Client Trust</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2]">
                    <div className="w-7 h-7 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center mx-auto mb-1.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-extrabold text-[#0F3D2E] block leading-tight">24/7</span>
                    <span className="text-[10px] text-[#555555] block">Support</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2]">
                    <div className="w-7 h-7 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center mx-auto mb-1.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-extrabold text-[#0F3D2E] block leading-tight">
                      <AnimatedCounter to={10} suffix="+" />
                    </span>
                    <span className="text-[10px] text-[#555555] block">Years Exp.</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#555555] pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D6B52] shrink-0" />
                    <span>Direct builder pricing with zero hidden commission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D6B52] shrink-0" />
                    <span>Comprehensive 30-year JDA legal title clearance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D6B52] shrink-0" />
                    <span>Free luxury chauffeured site visits across Jaipur</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openSiteVisitModal()}
                    className="w-full py-3 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] active:scale-[0.98] text-white font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    id="stats-card-book-visit-btn"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    Book Free Site Visit
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Search / Filter Bar on Hero */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#D4AF37]/30 text-[#111111]"
          >
            <form onSubmit={handleSearchRedirect} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              {/* Locality */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                  Locality in Jaipur
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs font-semibold bg-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    id="hero-locality-select"
                  >
                    {JAIPUR_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                  Property Type
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs font-semibold bg-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    id="hero-type-select"
                  >
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                  Budget Range
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs font-semibold bg-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  id="hero-budget-select"
                >
                  <option value="All">All Budgets</option>
                  <option value="under-1cr">Under ₹1.00 Cr</option>
                  <option value="1cr-2.5cr">₹1.00 Cr – ₹2.50 Cr</option>
                  <option value="2.5cr-5cr">₹2.50 Cr – ₹5.00 Cr</option>
                  <option value="above-5cr">Ultra-Luxury (₹5.00 Cr+)</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-6 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] active:scale-[0.98] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer h-[42px]"
                  id="hero-search-submit-btn"
                >
                  <Search className="w-4 h-4 text-[#D4AF37]" />
                  Search Properties
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. QUALITY HOMES / ABOUT SNIPPET */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Description Column */}
          <FadeIn direction="up" className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest block mb-2">
                Our Properties
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight leading-tight">
                Quality Homes, <br />
                <span className="text-[#1D6B52]">Exceptional Living</span>
              </h2>
            </div>

            <p className="text-sm text-[#555555] leading-relaxed">
              From contemporary sky apartments to signature family villas, we offer well-maintained, high-appreciation properties in the best locations of Jaipur. Your comfort, privacy, and long-term security are our top priorities.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1D6B52]/10 text-[#1D6B52] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                </div>
                <span className="text-sm font-semibold text-[#111111]">
                  Well-maintained & RERA verified properties
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1D6B52]/10 text-[#1D6B52] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                </div>
                <span className="text-sm font-semibold text-[#111111]">
                  Prime locations with superior infrastructure
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1D6B52]/10 text-[#1D6B52] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                </div>
                <span className="text-sm font-semibold text-[#111111]">
                  Safe, secure gated environments & modern amenities
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1D6B52]/10 text-[#1D6B52] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0F3D2E]" />
                </div>
                <span className="text-sm font-semibold text-[#111111]">
                  Responsive property support & management team
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                id="quality-homes-view-all-cta"
              >
                View All Properties
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Right Visual Bento */}
          <FadeIn direction="left" delay={0.15} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Big Feature: Modern Apartments */}
            <div className="sm:row-span-2 relative rounded-3xl overflow-hidden shadow-xl group min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Apartments in C-Scheme Jaipur"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-2.5 py-1 rounded-full bg-[#D4AF37] text-[#0F3D2E] text-[10px] font-bold uppercase tracking-wider">
                  Sky Residence
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  Modern Apartments
                </h3>
                <p className="text-xs text-white/80">
                  Statue Circle, C-Scheme & Tonk Road
                </p>
                <div className="flex items-center justify-between pt-2 text-xs border-t border-white/20 text-white/90">
                  <span>3 & 4 BHK • 3,800 sq.ft</span>
                  <Link
                    href="/properties"
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0F3D2E] flex items-center justify-center transition-all hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Feature 1: Family Homes */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group min-h-[185px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Family Luxury Homes in Vaishali Nagar Jaipur"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <h4 className="text-base font-bold">Family Homes</h4>
                  <p className="text-[11px] text-white/80">Vaishali Nagar, Jaipur</p>
                </div>
                <Link
                  href="/properties"
                  className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0F3D2E] flex items-center justify-center transition-all hover:scale-105"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Small Feature 2: Luxury Residences */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group min-h-[185px]">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Residences in Jagatpura Jaipur"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <h4 className="text-base font-bold">Luxury Residences</h4>
                  <p className="text-[11px] text-white/80">Jagatpura & Malviya Nagar</p>
                </div>
                <Link
                  href="/properties"
                  className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0F3D2E] flex items-center justify-center transition-all hover:scale-105"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED PROPERTIES (6 PREMIUM PROPERTIES) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="featured-properties-section">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest block mb-1">
              Handpicked Collections
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
              Featured Properties in Jaipur
            </h2>
            <p className="text-sm text-[#555555] mt-1 max-w-xl">
              Explore our most sought-after luxury villas, sky penthouses, and commercial landmarks with verified documentation.
            </p>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F3D2E] hover:text-[#1D6B52] group"
          >
            <span>View All 12+ Available Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>

        {/* 6 Property Cards Grid with StaggerContainer */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            id="explore-all-properties-mid-btn"
          >
            Explore Complete Property Catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE US (4 PREMIUM CARDS) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#FAFAF8] via-white to-[#FAFAF8] py-16 border-y border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest">
              The Property Junction Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
              Why Discerning Buyers Choose Us
            </h2>
            <p className="text-sm text-[#555555]">
              Decade-long reputation built on trust, transparency, and deep understanding of Jaipur’s premium micro-markets.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Verified Properties */}
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                  Verified Properties
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Every property in our catalog undergoes rigorous 30-year title searches, RERA compliance validation, and JDA approval checks.
                </p>
              </div>
            </StaggerItem>

            {/* Card 2: Expert Guidance */}
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                  Expert Guidance
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Led by RK Reddy, Real Estate Professional & Digital Creator, backed by seasoned local advisors in high-value Rajasthan real estate.
                </p>
              </div>
            </StaggerItem>

            {/* Card 3: Transparent Deals */}
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                  <BadgePercent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                  Transparent Deals
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Direct builder prices with zero hidden markups. Complete visibility over agreement terms, payment schedules, and legal charges.
                </p>
              </div>
            </StaggerItem>

            {/* Card 4: End-to-End Support */}
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                  End-to-End Support
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  From chauffeured site visits and bank loan sanction to registry at the Sub-Registrar and keys handover, we stand by your side.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT TRUST CARD */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="bg-[#0F3D2E] rounded-3xl overflow-hidden text-white p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                About Property Junction
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Your Trusted Partner in <br />
                <span className="text-[#D4AF37]">Jaipur Property Care</span>
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                We are a professional real estate advisory company dedicated to providing safe, comfortable, and high-appreciating living spaces for our residents and lucrative commercial assets for investors. Led by RK Reddy, we bring digital transparency, on-ground video tours, and verified JDA & RERA approvals together.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C358] text-[#0F3D2E] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  id="about-learn-more-btn"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-white/20 group">
              <Image
                src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1200&q=80"
                alt="Happy family in luxury home provided by Property Junction"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ========================================================================= */}
      {/* 6. SERVICES PREVIEW (6 SERVICES) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest">
            Complete Real Estate Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Our Core Services
          </h2>
          <p className="text-sm text-[#555555]">
            Tailored advisory for homeowners, NRI investors, developers, and corporate tenants across Rajasthan.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1: Property Buying */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group h-full">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                Property Buying
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Curated luxury villas, independent houses, and apartments with full title verification and best negotiated developer pricing.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D6B52] group-hover:text-[#0F3D2E] pt-2"
              >
                Explore Buying Support <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          {/* Service 2: Property Selling */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group h-full">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                <BadgePercent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                Property Selling
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Targeted digital marketing, high-net-worth investor network, and premium staging to sell your property at true market value.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D6B52] group-hover:text-[#0F3D2E] pt-2"
              >
                List Your Property <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          {/* Service 3: Property Investment */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group h-full">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                Property Investment
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Strategic capital allocation into high-growth corridors (Ring Road, Airport, Jagatpura) and NRI wealth management.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D6B52] group-hover:text-[#0F3D2E] pt-2"
              >
                Investment Advisory <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          {/* Service 4: Rental Services */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group h-full">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                Rental Services
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Furnished luxury homes and executive residences with thorough tenant verification and automated rental agreement documentation.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D6B52] group-hover:text-[#0F3D2E] pt-2"
              >
                Rental Options <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          {/* Service 5: Commercial Properties */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group h-full">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                Commercial Properties
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Prime retail showrooms, Grade-A IT offices, and pre-leased bank floors on Tonk Road & MI Road delivering 7-9% annual returns.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D6B52] group-hover:text-[#0F3D2E] pt-2"
              >
                Explore Commercial <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          {/* Service 6: Property Management */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group h-full">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                Property Management
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Total peace of mind for outstation and NRI property owners. Monthly inspections, upkeep, tax payments, and key custody.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D6B52] group-hover:text-[#0F3D2E] pt-2"
              >
                Management Packages <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ========================================================================= */}
      {/* 7. TESTIMONIALS (LUXURY SLIDER WITH ANIMATEPRESENCE) */}
      {/* ========================================================================= */}
      <section className="bg-[#0F3D2E] text-white py-16 sm:py-20 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Verified Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-sm text-white/75">
              Read real experiences from families, doctors, industrialists, and NRI investors in Jaipur.
            </p>
          </FadeIn>

          {/* Interactive Testimonial Slider Card with AnimatePresence */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl relative min-h-[360px] flex flex-col justify-between"
            id="testimonial-slider-card"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-base sm:text-lg text-white/95 text-center italic max-w-3xl mx-auto leading-relaxed">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>

                {/* Author Profile */}
                <div className="mt-8 flex flex-col items-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md relative">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs text-[#D4AF37] font-medium">
                      {currentTestimonial.role} • {currentTestimonial.location}
                    </p>
                    <p className="text-[11px] text-white/60 mt-0.5">
                      Purchased: {currentTestimonial.propertyPurchased}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-4 border-t border-white/10">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all cursor-pointer"
                id="prev-testimonial-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-white/70 font-mono">
                {currentTestimonialIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all cursor-pointer"
                id="next-testimonial-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CTA BANNER (BOOK SITE VISIT TODAY) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <FadeIn className="bg-gradient-to-r from-[#0F3D2E] via-[#164E3B] to-[#1D6B52] rounded-3xl p-8 sm:p-14 text-white border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider inline-block">
              Priority Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Book Your Private Site Visit Today
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Don’t settle for virtual previews. Inspect the architecture, finishes, sun exposure, and neighborhood atmosphere in person with our senior Jaipur specialists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <motion.button
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              onClick={() => openSiteVisitModal()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89324] hover:from-[#E5C358] hover:to-[#D4AF37] text-[#0F3D2E] font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="cta-banner-book-site-visit"
            >
              <Calendar className="w-4 h-4" />
              Book Free Site Visit
            </motion.button>
            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              href="tel:+919352521379"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
              id="cta-banner-call-btn"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call +91 93525 21379
            </motion.a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
