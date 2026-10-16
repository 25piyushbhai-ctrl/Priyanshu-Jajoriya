'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Send,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Building,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useSiteVisit } from '@/components/SiteVisitContext';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionReveal';

export default function ContactPage() {
  const { openSiteVisitModal } = useSiteVisit();

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Luxury Villa');
  const [budget, setBudget] = useState('₹2.5 Cr - ₹5 Cr');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are all properties listed with Property Junction JDA & RERA approved?',
      a: 'Yes. Every project and property in our active catalog undergoes strict RERA verification and 30-year JDA (Jaipur Development Authority) title clearance before being presented to clients.'
    },
    {
      q: 'Do you charge a brokerage fee for newly launched developer projects?',
      a: 'No. For all newly launched and primary builder projects in Jaipur, our advisory and site-visit services are 100% free with zero brokerage. We negotiate direct builder pricing on your behalf.'
    },
    {
      q: 'How does the complimentary chauffeured site visit work?',
      a: 'Once you book a site visit online or call +91 93525 21379, our team coordinates a private luxury cab to pick you up from any residence, hotel, or airport location in Jaipur and escort you through your shortlisted properties.'
    },
    {
      q: 'Can NRIs legally purchase residential and commercial property in Jaipur?',
      a: 'Yes. Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely acquire residential and commercial properties in Rajasthan. We assist with NRE/NRO banking paperwork, FEMA compliance, and Power of Attorney registrations.'
    },
    {
      q: 'Do you assist with bank loans and registry documentation at the Sub-Registrar?',
      a: 'Yes. We have dedicated tie-ups with leading banks (HDFC, SBI, ICICI, Axis) for expedited approvals at preferential interest rates, and our legal team manages deed drafting and Sub-Registrar registry in Jaipur.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Property Junction! My name is ${name || 'Prospective Buyer'}. I am interested in ${interest} in Jaipur with a budget around ${budget}. Phone: ${phone || '+91 93525 21379'}. Please get in touch.`
  );

  return (
    <div className="py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-[#0F3D2E] text-white py-14 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With RK Reddy & Team
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Contact Property Junction
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Have questions about a property or planning to explore Jaipur’s luxury market? Reach out by phone, WhatsApp, or connect on our social channels.
          </p>
        </div>
      </div>

      {/* Main Contact Grid (Cards + Inquiry Form) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-wider">
                Direct Contact Points
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3D2E]">
                We’re Here to Assist You
              </h2>
              <p className="text-sm text-[#555555]">
                Reach out directly to our principal advisors in Jaipur.
              </p>
            </div>

            {/* Contact Box 1: Phone */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E8E2] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#777777] font-semibold uppercase tracking-wider">
                  Direct Phone Line
                </span>
                <a
                  href="tel:+919352521379"
                  className="text-lg font-bold text-[#0F3D2E] block hover:text-[#1D6B52]"
                >
                  +91 93525 21379
                </a>
                <p className="text-[11px] text-[#555555]">
                  Available 7 days a week, 9:00 AM to 8:00 PM IST
                </p>
              </div>
            </div>

            {/* Contact Box 2: WhatsApp */}
            <div className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#128C7E] font-bold uppercase tracking-wider">
                  Instant WhatsApp Chat
                </span>
                <a
                  href="https://wa.me/919352521379?text=Hello%20Property%20Junction!%20I%20am%20interested%20in%20properties%20in%20Jaipur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#128C7E] block hover:underline"
                >
                  Chat with RK Reddy / Advisory Desk
                </a>
                <p className="text-[11px] text-[#555555]">
                  Instant floor plans, pricing sheets, and site visit coordination
                </p>
              </div>
            </div>

            {/* Contact Box 3: Office Address */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E8E2] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#777777] font-semibold uppercase tracking-wider">
                  Jaipur Headquarters
                </span>
                <p className="text-sm font-bold text-[#111111]">
                  Property Junction – Jaipur Real Estate
                </p>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Near Statue Circle & Main Tonk Road, Jaipur, Rajasthan 302001, India
                </p>
              </div>
            </div>

            {/* Contact Box 4: Email & Hours */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E8E2] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#777777] font-semibold uppercase tracking-wider">
                  Office Hours & Email
                </span>
                <p className="text-xs font-bold text-[#111111]">
                  Monday to Sunday: 9:00 AM – 8:00 PM
                </p>
                <a
                  href="mailto:contact@propertyjunctionjaipur.com"
                  className="text-xs text-[#1D6B52] font-semibold hover:underline block"
                >
                  contact@propertyjunctionjaipur.com
                </a>
              </div>
            </div>

            {/* Social Media & Digital Channels */}
            <div className="p-5 rounded-2xl bg-[#0F3D2E] text-white shadow-md space-y-3">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37]">
                  Follow & Watch Video Tours
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  RK Reddy on Social Media
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Watch exclusive on-ground video walkthroughs of Jaipur villas, penthouses, and JDA approved townships.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="https://youtube.com/@rkreddyx100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-sm"
                  aria-label="YouTube Channel by RK Reddy"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube @rkreddyx100
                </a>
                <a
                  href="https://www.instagram.com/propertyjunctionjaipurx100?rpxt=a2U4ZG13Zm1wZTF2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white text-xs font-bold transition-all shadow-sm"
                  aria-label="Instagram Profile Property Junction"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/1Dpgv97wTW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold transition-all shadow-sm"
                  aria-label="Facebook Page Property Junction"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right: Lead Generation Form */}
          <div className="lg:col-span-7">
            <div
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E8E2] shadow-xl space-y-6"
              id="contact-form-container"
            >
              <div className="border-b border-[#E8E8E2] pb-4">
                <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-wider">
                  Fast Response Guarantee
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F3D2E]">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-[#555555] mt-1">
                  Fill in your requirements below and our senior advisor will contact you within 30 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F3D2E]">
                    Thank you, {name}!
                  </h4>
                  <p className="text-sm text-[#555555] max-w-md mx-auto">
                    Your inquiry regarding <strong>{interest}</strong> has been logged. Our Jaipur advisor will call you at <strong>{phone}</strong> promptly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/919352521379?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Forward Details on WhatsApp
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-[#0F3D2E] text-white font-bold text-xs"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3D2E] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rameshwar Agarwal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                        id="contact-name-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3D2E] mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98290 12345"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                        id="contact-phone-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3D2E] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                        id="contact-email-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3D2E] mb-1.5">
                        Property Interest
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                        id="contact-interest-select"
                      >
                        <option value="Luxury Villa">Luxury Villa (Vaishali / Jagatpura)</option>
                        <option value="Sky Penthouse">Sky Penthouse (C-Scheme / Statue Circle)</option>
                        <option value="Modern Apartment">Modern Apartment (Mansarovar / Tonk Rd)</option>
                        <option value="Commercial Space">Commercial / Pre-Leased Office</option>
                        <option value="Residential Plot">Residential Plot / JDA Land</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3D2E] mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                      id="contact-budget-select"
                    >
                      <option value="Under ₹1.00 Cr">Under ₹1.00 Cr</option>
                      <option value="₹1.00 Cr - ₹2.50 Cr">₹1.00 Cr – ₹2.50 Cr</option>
                      <option value="₹2.50 Cr - ₹5.00 Cr">₹2.50 Cr – ₹5.00 Cr</option>
                      <option value="Above ₹5.00 Cr">Above ₹5.00 Cr (Ultra Luxury)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3D2E] mb-1.5">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about preferred locations, timeline, or family preferences..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                      id="contact-message-input"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      id="contact-form-submit-btn"
                    >
                      <Send className="w-4 h-4" />
                      {submitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Office Map & Location Visual Representation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E8E2] shadow-xl">
          <div className="p-6 sm:p-8 bg-[#0F3D2E] text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                Central Jaipur Hub
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Visit Our Office Near Statue Circle
              </h3>
              <p className="text-xs text-white/80 mt-0.5">
                Conveniently located 15 minutes from Jaipur International Airport and 10 minutes from Jaipur Railway Station.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Statue+Circle+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#0F3D2E] font-bold text-xs flex items-center gap-2 hover:bg-[#E5C358] transition-colors shrink-0"
            >
              <MapPin className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>

          {/* Interactive Jaipur Map Frame */}
          <div className="h-80 w-full relative bg-gray-100">
            <iframe
              title="Property Junction Jaipur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.398640194833!2d75.7951594975549!3d26.900350700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db419c72ecb31%3A0x6a1a44c9b13fa7d1!2sStatue%20Circle%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="bg-[#FAFAF8] py-16 border-y border-[#E8E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-widest">
              Buyer & Investor FAQs
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F3D2E] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#555555]">
              Everything you need to know about purchasing property in Jaipur, Rajasthan.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E8E8E2] overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-[#111111] hover:text-[#0F3D2E] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0F3D2E] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs text-[#555555] leading-relaxed border-t border-[#FAFAF8] pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
