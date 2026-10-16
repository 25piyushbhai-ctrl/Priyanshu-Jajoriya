'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useSiteVisit } from './SiteVisitContext';
import { X, Calendar, Clock, MapPin, Phone, CheckCircle2, Car, ShieldCheck } from 'lucide-react';
import { PROPERTIES } from '@/data/properties';

export default function SiteVisitModal() {
  const { isOpen, selectedProperty, closeSiteVisitModal } = useSiteVisit();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyOverride, setPropertyOverride] = useState<string | null>(null);
  const property = propertyOverride ?? (selectedProperty || (PROPERTIES.length > 0 ? PROPERTIES[0].title : ''));
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [needsCab, setNeedsCab] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPropertyOverride(null);
    setName('');
    setPhone('');
    setEmail('');
    closeSiteVisitModal();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Property Junction! I would like to book a VIP site visit for "${property}" on ${date || 'upcoming weekend'} (${timeSlot}). Name: ${name}, Phone: ${phone}.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
          onClick={closeSiteVisitModal}
        >
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 16 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-[#FAFAF8] rounded-2xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden"
            id="site-visit-modal-container"
          >
        {/* Modal Header */}
        <div className="bg-[#0F3D2E] text-white p-6 sm:p-7 relative">
          <button
            onClick={closeSiteVisitModal}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            id="close-site-visit-modal-button"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            VIP Guided Experience
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Schedule a Private Site Visit
          </h3>
          <p className="text-sm text-white/80 mt-1">
            Experience the finest properties in Jaipur with our senior advisors. Complimentary chauffeured transport included.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#1D6B52]/10 text-[#1D6B52] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10 text-[#0F3D2E]" />
              </div>
              <h4 className="text-xl font-bold text-[#0F3D2E]">
                Site Visit Request Confirmed!
              </h4>
              <p className="text-[#555555] text-sm max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our senior property manager will call you at <strong>{phone}</strong> within 30 minutes to finalize the chauffeur schedule.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#E8E8E2] text-left text-xs space-y-1.5 text-[#111111] max-w-md mx-auto">
                <p><strong>Property:</strong> {property}</p>
                <p><strong>Preferred Time:</strong> {date || 'Next available slot'} ({timeSlot})</p>
                <p><strong>Chauffeured Pickup:</strong> {needsCab ? 'Requested in Jaipur' : 'Self travel'}</p>
                <p><strong>Direct Hotline:</strong> +91 93525 21379</p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919352521379?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-md"
                  id="whatsapp-site-visit-confirm-button"
                >
                  Send Details on WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl bg-[#0F3D2E] text-white font-semibold text-sm hover:bg-[#1D6B52] transition-colors"
                  id="close-site-visit-done-button"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="site-visit-booking-form">
              {/* Property Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                  Select Property of Interest
                </label>
                <select
                  value={property}
                  onChange={(e) => setPropertyOverride(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  id="site-visit-property-select"
                  required
                >
                  {PROPERTIES.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} — {p.locality} ({p.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                    id="site-visit-name-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98290 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                    id="site-visit-phone-input"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                  id="site-visit-email-input"
                />
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                      id="site-visit-date-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E2] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                    id="site-visit-time-select"
                  >
                    <option value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</option>
                    <option value="12:00 PM - 02:00 PM">Noon (12:00 PM - 02:00 PM)</option>
                    <option value="03:00 PM - 05:00 PM">Afternoon (03:00 PM - 05:00 PM)</option>
                    <option value="05:00 PM - 07:00 PM">Sunset View (05:00 PM - 07:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Chauffeured Cab Option */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0F3D2E]/10 text-[#0F3D2E]">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#111111]">
                      Complimentary Chauffeur Pickup
                    </p>
                    <p className="text-[11px] text-[#555555]">
                      We arrange private doorstep luxury pickup & drop across Jaipur.
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={needsCab}
                  onChange={(e) => setNeedsCab(e.target.checked)}
                  className="w-4 h-4 accent-[#0F3D2E] rounded"
                  id="site-visit-cab-checkbox"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0F3D2E] text-white font-semibold text-sm hover:bg-[#1D6B52] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  id="submit-site-visit-button"
                >
                  {submitting ? 'Booking Your Site Visit...' : 'Confirm Site Visit Schedule'}
                </button>
                <p className="text-[11px] text-center text-[#777777] mt-2">
                  Or call directly for immediate priority booking: <a href="tel:+919352521379" className="text-[#0F3D2E] font-bold underline">+91 93525 21379</a>
                </p>
              </div>
            </form>
          )}
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
