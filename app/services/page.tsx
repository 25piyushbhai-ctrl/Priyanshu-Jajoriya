'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Home,
  BadgePercent,
  TrendingUp,
  KeyRound,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Calendar,
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';
import { SERVICES_DATA, ADVISORY_PROCESS } from '@/data/services';
import { useSiteVisit } from '@/components/SiteVisitContext';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionReveal';

export default function ServicesPage() {
  const { openSiteVisitModal } = useSiteVisit();
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'property-buying':
        return <Home className="w-6 h-6" />;
      case 'property-selling':
        return <BadgePercent className="w-6 h-6" />;
      case 'property-investment':
        return <TrendingUp className="w-6 h-6" />;
      case 'rental-services':
        return <KeyRound className="w-6 h-6" />;
      case 'commercial-properties':
        return <Building2 className="w-6 h-6" />;
      case 'property-management':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <div className="py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-[#0F3D2E] text-white py-14 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Real Estate Advisory
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Comprehensive Real Estate Services in Jaipur
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            From discovering dream villas in Vaishali Nagar to managing NRI assets and closing high-yield commercial transactions.
          </p>
        </FadeIn>
      </div>

      {/* Services Tabs & Deep Dive Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Interactive Service Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-wider block mb-1">
              Select Advisory Practice
            </span>
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F3D2E] text-white border-[#0F3D2E] shadow-lg translate-x-1'
                      : 'bg-white text-[#111111] border-[#E8E8E2] hover:border-[#D4AF37] hover:bg-gray-50'
                  }`}
                  id={`service-tab-${service.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected ? 'bg-white/15 text-[#D4AF37]' : 'bg-[#0F3D2E]/10 text-[#0F3D2E]'
                      }`}
                    >
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{service.title}</h4>
                      <p className={`text-xs ${isSelected ? 'text-white/70' : 'text-[#777777]'}`}>
                        {service.id === 'property-buying'
                          ? 'Villas, Apartments, Plots'
                          : service.id === 'commercial-properties'
                          ? 'Offices & Showrooms'
                          : service.id === 'property-investment'
                          ? 'Wealth & Land Assets'
                          : 'Professional Care'}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#D4AF37] translate-x-1' : 'text-gray-400'
                    }`}
                  />
                </button>
              );
            })}

            {/* Direct Consultation Box */}
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2] space-y-3 mt-6">
              <h4 className="text-sm font-bold text-[#0F3D2E]">Need Customized Real Estate Advice?</h4>
              <p className="text-xs text-[#555555]">
                Speak directly with RK Reddy for discrete portfolio guidance and verified project walkthroughs.
              </p>
              <a
                href="tel:+919352521379"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F3D2E] text-white text-xs font-bold hover:bg-[#1D6B52] transition-colors w-full justify-center shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                Call +91 93525 21379
              </a>
            </div>
          </div>

          {/* Right: Detailed Service Showcase with AnimatePresence */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E8E2] shadow-xl space-y-8"
                id="active-service-details-panel"
              >
                {/* Header */}
                <div className="space-y-3 border-b border-[#E8E8E2] pb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1D6B52] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>Advisory Practice Breakdown</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3D2E]">
                    {activeService.title}
                  </h2>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Who it is for */}
                <div className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0F3D2E]/10 text-[#0F3D2E]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F3D2E] block uppercase tracking-wider">
                      Tailored For
                    </span>
                    <p className="text-xs text-[#555555]">{activeService.targetAudience}</p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-[#0F3D2E]">Key Client Advantages</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white border border-[#E8E8E2] flex items-start gap-2.5 text-xs text-[#111111]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1D6B52] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step by Step Process */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#0F3D2E]">Execution Methodology</h3>
                  <div className="space-y-2.5">
                    {activeService.process.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF8] text-xs text-[#111111]"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#0F3D2E] text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                          {idx + 1}
                        </span>
                        <span className="font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-[#E8E8E2]">
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    onClick={() => openSiteVisitModal()}
                    className="px-6 py-3 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                    id="service-book-consultation-btn"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    Schedule Free Advisory Session
                  </motion.button>
                  <motion.a
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    href="tel:+919352521379"
                    className="px-6 py-3 rounded-xl bg-[#FAFAF8] hover:bg-gray-100 text-[#0F3D2E] font-bold text-xs border border-[#E8E8E2] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    Call +91 93525 21379
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* End-to-End Advisory Process Timeline */}
      <div className="bg-[#FAFAF8] py-16 border-y border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
              Our 6-Stage Advisory Journey
            </h2>
            <p className="text-sm text-[#555555]">
              Seamless transition from your initial vision to legal ownership and effortless key handover.
            </p>
          </FadeIn>

          {/* Timeline Grid with StaggerContainer */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVISORY_PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <div
                  className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 relative group h-full"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#D4AF37] font-mono">
                      {p.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center font-bold text-xs">
                      Stage {p.step}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="bg-[#0F3D2E] rounded-3xl p-8 sm:p-12 text-white border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Discuss Your Property Plans?
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              No pressure, no aggressive sales. Only confidential, data-backed real estate counsel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              onClick={() => openSiteVisitModal()}
              className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#0F3D2E] font-bold text-xs uppercase tracking-wider hover:bg-[#E5C358] transition-colors cursor-pointer"
            >
              Book Site Visit
            </motion.button>
            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              href="tel:+919352521379"
              className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20 hover:bg-white/20 transition-colors"
            >
              Call +91 93525 21379
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
