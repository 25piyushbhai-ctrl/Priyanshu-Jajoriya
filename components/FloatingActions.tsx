'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const prefersReducedMotion = useReducedMotion();
  const whatsappUrl =
    'https://wa.me/919352521379?text=Hello%20Property%20Junction!%20I%20am%20interested%20in%20exploring%20properties%20in%20Jaipur.';

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-end"
    >
      {/* Call Button */}
      <motion.a
        whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
        transition={{ duration: 0.2 }}
        href="tel:+919352521379"
        className="group flex items-center gap-2 bg-[#0F3D2E] text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-xl hover:bg-[#1D6B52] border border-[#D4AF37]/40 transition-colors"
        id="floating-call-btn"
        aria-label="Call Property Junction at +91 93525 21379"
      >
        <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F3D2E] shadow-sm">
          <Phone className="w-4 h-4" />
        </div>
        <div className="hidden sm:block text-left leading-tight">
          <span className="text-[10px] text-white/70 block uppercase tracking-wider font-semibold">
            Direct Line
          </span>
          <span className="text-xs font-bold text-white tracking-wide">
            +91 93525 21379
          </span>
        </div>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
        transition={{ duration: 0.2 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with Property Junction"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shadow-sm">
          <MessageCircle className="w-5 h-5 fill-white" />
        </div>
        <div className="hidden sm:block text-left leading-tight">
          <span className="text-[10px] text-white/80 block uppercase tracking-wider font-semibold">
            Instant Support
          </span>
          <span className="text-xs font-bold text-white tracking-wide">
            WhatsApp Inquiry
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}
