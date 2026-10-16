'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { Bed, Bath, Square, MapPin, ArrowRight, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { Property } from '@/data/properties';
import { useSiteVisit } from './SiteVisitContext';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { openSiteVisitModal } = useSiteVisit();
  const [imageLoaded, setImageLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const whatsappMessage = encodeURIComponent(
    `Hello Property Junction! I am interested in "${property.title}" in ${property.locality} (${property.price}). Please share more details and schedule a visit.`
  );

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E8E8E2] hover:border-[#D4AF37]/50 shadow-md hover:shadow-[0_20px_40px_rgba(15,61,46,0.12)] transition-shadow duration-300 flex flex-col h-full"
      id={`property-card-${property.id}`}
    >
      {/* Image Container with Badges */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        {/* Skeleton Shimmer while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton-shimmer z-0" />
        )}

        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={() => setImageLoaded(true)}
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
          <span className="px-2.5 py-1 rounded-full bg-[#0F3D2E]/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wide uppercase shadow-sm">
            {property.type}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0F3D2E] text-[11px] font-semibold shadow-sm">
            {property.status}
          </span>
        </div>

        {/* Top Right Verified Badge */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4AF37]/90 text-[#0F3D2E] text-[10px] font-extrabold shadow-sm tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            RERA
          </span>
        </div>

        {/* Bottom Price Tag on Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white z-10">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/80 block font-medium">
              Offered Price
            </span>
            <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
              {property.price}
            </span>
          </div>
          <span className="text-xs text-white/90 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md font-mono">
            {property.pricePerSqFt}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-[#1D6B52] text-xs font-semibold uppercase tracking-wider mb-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{property.locality}, Jaipur</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0F3D2E] transition-colors line-clamp-1">
            {property.title}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs text-[#555555] mt-1 line-clamp-2 leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2] text-xs text-[#111111]">
          {property.bedrooms > 0 ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-[#0F3D2E] font-bold">
                <Bed className="w-3.5 h-3.5" />
                <span>{property.bedrooms} BHK</span>
              </div>
              <span className="text-[10px] text-[#777777]">Bedrooms</span>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-[#0F3D2E] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Commercial</span>
              </div>
              <span className="text-[10px] text-[#777777]">Asset</span>
            </div>
          )}

          <div className="flex flex-col items-center text-center border-x border-[#E8E8E2]">
            <div className="flex items-center gap-1 text-[#0F3D2E] font-bold">
              <Bath className="w-3.5 h-3.5" />
              <span>{property.bathrooms > 0 ? `${property.bathrooms} Baths` : 'Equipped'}</span>
            </div>
            <span className="text-[10px] text-[#777777]">Washrooms</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-[#0F3D2E] font-bold">
              <Square className="w-3.5 h-3.5" />
              <span className="truncate">{property.area.split(' ')[0]}</span>
            </div>
            <span className="text-[10px] text-[#777777]">Area sq.ft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] active:scale-[0.98] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
            id={`view-details-${property.id}`}
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/919352521379?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] active:scale-[0.95] text-[#128C7E] hover:text-white transition-all border border-[#25D366]/30 flex items-center justify-center"
            title="Chat on WhatsApp"
            aria-label="WhatsApp inquiry"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => openSiteVisitModal(property.title)}
            className="p-2.5 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37] active:scale-[0.95] text-[#0F3D2E] transition-all border border-[#D4AF37]/40 flex items-center justify-center cursor-pointer"
            title="Schedule Site Visit"
            aria-label="Schedule visit"
          >
            <Phone className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
