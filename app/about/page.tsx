'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  Building,
  Award,
  ShieldCheck,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Phone,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/team';
import { useSiteVisit } from '@/components/SiteVisitContext';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function AboutPage() {
  const { openSiteVisitModal } = useSiteVisit();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="py-10 space-y-20">
      {/* Header Banner */}
      <div className="bg-[#0F3D2E] text-white py-16 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Our Heritage & Commitment
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About Property Junction
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Founded in the heart of Jaipur with a singular ambition: to bring uncompromising integrity, deep local legal diligence, and verified JDA & RERA approved projects to Rajasthan’s property market.
          </p>
        </FadeIn>
      </div>

      {/* Origin Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="up" className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest block">
              The Property Junction Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight leading-tight">
              A Decade of Safeguarding <br />
              <span className="text-[#1D6B52]">Generational Wealth in Jaipur</span>
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed">
              Established over ten years ago, Property Junction was directed by <strong>RK Reddy</strong>, Real Estate Professional & Digital Creator, to replace the chaotic and untransparent broker culture with institutional-grade property consultancy.
            </p>
            <p className="text-sm text-[#555555] leading-relaxed">
              We realized that purchasing a home or investing capital in Rajasthan is not merely a financial deal—it represents years of hard work, family legacy, and security. That’s why we mandated 100% 30-year title diligence, strict JDA & RERA vetting, and direct developer pricing for every transaction.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2]">
                <span className="text-2xl font-black text-[#0F3D2E] block">
                  <AnimatedCounter to={500} suffix="+" />
                </span>
                <span className="text-xs text-[#555555]">Delighted Families & Investors</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2]">
                <span className="text-2xl font-black text-[#D4AF37] block">
                  ₹<AnimatedCounter to={450} suffix="+ Cr" />
                </span>
                <span className="text-xs text-[#555555]">Cumulative Advisory Value</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 group">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Property Junction Jaipur Headquarters"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                Jaipur, Rajasthan
              </span>
              <h3 className="text-lg font-bold">
                Excellence Across Every Micro-Market
              </h3>
              <p className="text-xs text-white/80">
                Vaishali Nagar • C-Scheme • Mansarovar • Tonk Road • Jagatpura
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Mission & Vision Bento */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <StaggerItem>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F3D2E] text-white border border-[#D4AF37]/30 shadow-xl space-y-4 hover:-translate-y-1 transition-transform duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#D4AF37] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                To empower home buyers and commercial investors in Jaipur with verified information, rigorous legal safety, zero hidden costs, and warm, personalized guidance at every turn.
              </p>
            </div>
          </StaggerItem>

          {/* Vision */}
          <StaggerItem>
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E8E2] shadow-xl space-y-4 hover:-translate-y-1 transition-transform duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F3D2E]">Our Vision</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                To be recognized as Rajasthan’s most trusted real estate advisory brand, benchmarked for ethical transactions, architectural appreciation, and enduring client partnerships.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Core Values (5 Pillars) */}
      <div className="bg-[#FAFAF8] py-16 border-y border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
              Our Non-Negotiable Values
            </h2>
            <p className="text-sm text-[#555555]">
              Every team member and advisory process adheres strictly to these five tenets.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] space-y-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#111111]">100% Legal Transparency</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  We never recommend a property without exhaustive 30-year chain of title, JDA land conversion, and RERA approval check.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] space-y-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#111111]">Client Interest Over Commission</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  If a property doesn&apos;t match your goals or exhibits legal red flags, we advise you to walk away immediately.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] space-y-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#111111]">Architectural Superiority</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  We curate only prime quality construction, high carpet-to-super-builtup ratios, and well-ventilated layouts.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] space-y-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#111111]">Dedicated Relationship Manager</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Single point of contact from your first WhatsApp inquiry through registration and home setup.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] space-y-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#111111]">Direct Builder Pricing</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Zero arbitrary broker markups. We secure official builder discounts and pass all benefits directly to you.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Leadership Team Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeIn className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest">
            Leadership & Advisory Board
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Meet the Experts Behind Your Trust
          </h2>
          <p className="text-sm text-[#555555]">
            Seasoned property veterans and legal counselors dedicated to your peace of mind.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E8E2] shadow-md hover:shadow-xl transition-shadow group h-full flex flex-col justify-between"
              >
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0F3D2E]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white font-mono">
                    {member.experience}
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#1D6B52]">{member.role}</p>
                    <p className="text-[11px] text-[#555555] leading-relaxed pt-1">
                      {member.specialization}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E8E2] flex items-center justify-between text-xs">
                    <a
                      href="tel:+919352521379"
                      className="inline-flex items-center gap-1 text-[#0F3D2E] font-bold hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" /> +91 93525 21379
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <FadeIn className="bg-gradient-to-r from-[#0F3D2E] to-[#1D6B52] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl border border-[#D4AF37]/30">
          <h2 className="text-2xl sm:text-4xl font-extrabold max-w-xl mx-auto">
            Experience the Property Junction Difference
          </h2>
          <p className="text-sm text-white/80 max-w-lg mx-auto">
            Connect directly with RK Reddy or visit our Jaipur office near Statue Circle for verified project tours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openSiteVisitModal()}
              className="px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C358] active:scale-95 text-[#0F3D2E] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Book Chauffeured Site Visit
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              Contact Our Advisors
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
