'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ShieldCheck,
  Calendar,
  Phone,
  MessageCircle,
  Car,
  Compass,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowRight,
  Share2,
  Building,
  Check,
  ExternalLink,
  Award
} from 'lucide-react';
import { Property } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import { useSiteVisit } from '@/components/SiteVisitContext';

interface Props {
  property: Property;
  relatedProperties: Property[];
}

export default function PropertyDetailClient({ property, relatedProperties }: Props) {
  const { openSiteVisitModal } = useSiteVisit();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Inquiry form inside page
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState(
    `Hi, I am interested in viewing "${property.title}" in ${property.locality}. Please provide floor plans and arrange a visit.`
  );
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Property Junction! I would like more information and a site visit for "${property.title}" (${property.price}, ${property.locality}). Name: ${inquiryName || 'Prospective Buyer'}, Phone: ${inquiryPhone || '+91 93525 21379'}.`
  );

  return (
    <div className="py-8 space-y-12">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-[#777777]">
          <Link href="/" className="hover:text-[#0F3D2E]">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-[#0F3D2E]">Properties</Link>
          <span>/</span>
          <span className="text-[#0F3D2E] font-semibold truncate">{property.title}</span>
        </nav>
      </div>

      {/* Main Property Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E8E8E2]">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#0F3D2E] text-white text-xs font-bold uppercase tracking-wider">
                {property.type}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E8E8E2] text-[#0F3D2E] text-xs font-semibold">
                {property.status}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#0F3D2E] text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0F3D2E]" />
                RERA: {property.reraNumber}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F3D2E] tracking-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#555555]">
              <MapPin className="w-4 h-4 text-[#1D6B52]" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Pricing & Share */}
          <div className="flex flex-col sm:items-end gap-2">
            <div className="text-left sm:text-right">
              <span className="text-xs text-[#777777] uppercase tracking-wider block">
                Offered Price
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E]">
                {property.price}
              </div>
              <span className="text-xs text-[#1D6B52] font-mono font-medium">
                {property.pricePerSqFt}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E8E2] hover:bg-gray-100 text-xs text-[#555555] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Property'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Large Image Gallery & Interactive Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {/* Main Large Display Image with Smooth Fade */}
          <div className="relative h-[400px] sm:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-[#E8E8E2]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full w-full"
              >
                <Image
                  src={images[activeImageIndex]}
                  alt={`${property.title} preview view ${activeImageIndex + 1}`}
                  fill
                  priority
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-mono z-10">
              Photo {activeImageIndex + 1} of {images.length}
            </div>
          </div>

          {/* Thumbnails Row */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 sm:w-32 h-16 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#0F3D2E] scale-95 shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content & Sticky Inquiry Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (Specs, Description, Amenities, Landmarks, Investment) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#E8E8E2] shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#777777]">
                  <Square className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Carpet Area</span>
                </div>
                <div className="text-sm font-bold text-[#111111]">{property.area}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#777777]">
                  <Bed className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Bedrooms</span>
                </div>
                <div className="text-sm font-bold text-[#111111]">
                  {property.bedrooms > 0 ? `${property.bedrooms} BHK Suites` : 'Commercial Space'}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#777777]">
                  <Bath className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Bathrooms</span>
                </div>
                <div className="text-sm font-bold text-[#111111]">
                  {property.bathrooms > 0 ? `${property.bathrooms} Washrooms` : 'Fitted Restrooms'}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#777777]">
                  <Car className="w-4 h-4 text-[#0F3D2E]" />
                  <span>Parking</span>
                </div>
                <div className="text-sm font-bold text-[#111111]">{property.parking}</div>
              </div>
            </div>

            {/* Description & Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0F3D2E]">About This Property</h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                {property.description}
              </p>
              <p className="text-sm text-[#555555] leading-relaxed">
                Facing: <strong>{property.facing}</strong>. Meticulously inspected by Property Junction’s senior architectural assessors. Complete freehold documentation and immediate registry assistance provided at the Jaipur Sub-Registrar office.
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-4 p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2]">
              <h3 className="text-lg font-bold text-[#0F3D2E]">Property Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D6B52] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0F3D2E]">World-Class Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E8E8E2] flex items-center gap-2.5 text-xs font-semibold text-[#111111] shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Benefits */}
            <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-[#0F3D2E] to-[#1D6B52] text-white">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-lg font-bold text-white">Investment Potential & Capital ROI</h3>
              </div>
              <p className="text-xs text-white/80">
                Backed by real transactions and historical growth trends across {property.locality}, Jaipur.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                  <span className="text-xs text-white/70 block">Projected Rental Yield</span>
                  <span className="text-xl font-bold text-[#D4AF37] block mt-1">
                    {property.investmentBenefits.rentalYield}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                  <span className="text-xs text-white/70 block">Estimated Appreciation</span>
                  <span className="text-xl font-bold text-white block mt-1">
                    {property.investmentBenefits.expectedAppreciation}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                  <span className="text-xs text-white/70 block">Possession Status</span>
                  <span className="text-base font-bold text-white block mt-1">
                    {property.investmentBenefits.possessionTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Location & Nearby Landmarks */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0F3D2E]">Neighborhood & Connectivity</h3>
              <p className="text-xs text-[#555555]">
                Strategically positioned in {property.locality} with effortless access to Jaipur’s prominent healthcare, educational, and transit hubs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.landmarks.map((lm, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white border border-[#E8E8E2] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2 font-medium text-[#111111]">
                      <MapPin className="w-3.5 h-3.5 text-[#1D6B52]" />
                      <span>{lm.name}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#FAFAF8] text-[#0F3D2E] font-bold font-mono">
                      {lm.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Inquiry & Senior Agent Contact Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sticky Form */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[#E8E8E2] shadow-xl space-y-5" id="property-inquiry-box">
                <div className="border-b border-[#E8E8E2] pb-4">
                  <span className="text-[11px] font-bold text-[#1D6B52] uppercase tracking-wider block">
                    Inquire Directly
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F3D2E]">
                    Schedule a Private Viewing
                  </h3>
                  <p className="text-xs text-[#777777] mt-0.5">
                    No spam. Direct coordination with senior advisor.
                  </p>
                </div>

                {inquirySubmitted ? (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-center space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
                    <h4 className="text-sm font-bold text-green-900">Inquiry Received!</h4>
                    <p className="text-xs text-green-700">
                      Our lead advisor for {property.locality} will reach out via call/WhatsApp shortly.
                    </p>
                    <a
                      href={`https://wa.me/919352521379?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold"
                    >
                      Continue on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F3D2E] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajat Verma"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                        id="inquiry-name-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F3D2E] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98290 12345"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                        id="inquiry-phone-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F3D2E] mb-1">
                        Message / Query
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                        id="inquiry-message-input"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md cursor-pointer"
                      id="submit-property-inquiry-btn"
                    >
                      Request Callback & Brochure
                    </button>
                  </form>
                )}

                <div className="pt-2 space-y-2.5 border-t border-[#E8E8E2]">
                  <button
                    onClick={() => openSiteVisitModal(property.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C358] text-[#0F3D2E] font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    id="property-detail-book-visit-btn"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Chauffeured Site Visit
                  </button>

                  <a
                    href={`https://wa.me/919352521379?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    id="property-detail-whatsapp-btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Instant WhatsApp Inquiry
                  </a>

                  <a
                    href="tel:+919352521379"
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#0F3D2E] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    id="property-detail-call-btn"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0F3D2E]" />
                    Call Advisor: +91 93525 21379
                  </a>
                </div>
              </div>

              {/* Senior Agent Profile Box */}
              <div className="bg-[#FAFAF8] rounded-2xl p-5 border border-[#E8E8E2] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border border-[#D4AF37]">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                      alt="RK Reddy Property Junction Real Estate Professional"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F3D2E]">RK Reddy</h4>
                    <span className="text-[11px] text-[#777777] block">
                      Real Estate Professional & Digital Creator
                    </span>
                    <span className="text-[10px] text-[#1D6B52] font-semibold">
                      JDA & RERA Approved Deals
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-[#555555]">
                  Specialist in JDA & RERA approved projects across {property.locality}. Available for private tours, video walkthroughs, and legal title consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#E8E8E2]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#1D6B52] uppercase tracking-wider block">
              Similar Opportunities
            </span>
            <h3 className="text-2xl font-extrabold text-[#0F3D2E]">
              Properties in {property.locality} & Similar Category
            </h3>
          </div>
          <Link
            href="/properties"
            className="text-xs font-bold text-[#0F3D2E] hover:text-[#1D6B52] flex items-center gap-1"
          >
            View All Properties <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProperties.map((rel) => (
            <PropertyCard key={rel.id} property={rel} />
          ))}
        </div>
      </div>
    </div>
  );
}
