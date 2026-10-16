'use client';

import React from 'react';
import Link from 'next/link';
import { Building, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Award, Instagram, Facebook, Youtube } from 'lucide-react';
import { useSiteVisit } from './SiteVisitContext';

export default function Footer() {
  const { openSiteVisitModal } = useSiteVisit();

  return (
    <footer className="bg-[#0A261D] text-white pt-16 pb-12 border-t border-[#D4AF37]/20" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-[#0F3D2E] via-[#164E3B] to-[#1D6B52] rounded-2xl p-8 mb-16 border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              JDA & RERA Approved Projects Specialist
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to Discover Your Dream Property?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Connect directly with RK Reddy for verified villas, modern apartments, and premium projects.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openSiteVisitModal()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89324] hover:from-[#E5C358] hover:to-[#D4AF37] text-[#0F3D2E] font-bold text-sm shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
              id="footer-book-site-visit-cta"
            >
              Book Site Visit Today
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919352521379"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors flex items-center gap-2"
              id="footer-call-cta"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              +91 93525 21379
            </a>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-sm">
          {/* Col 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B89324] flex items-center justify-center text-[#0F3D2E] font-extrabold shadow-md">
                <Building className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white block">
                  Property <span className="text-[#D4AF37]">Junction</span>
                </span>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block">
                  Jaipur Real Estate
                </span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-xs">
              Property Junction – Jaipur Real Estate. Led by <strong>RK Reddy</strong>, Real Estate Professional & Digital Creator. Connecting discerning buyers and investors with verified luxury villas, modern apartments, and JDA & RERA approved projects across Jaipur, Rajasthan.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4" />
              <span>JDA & RERA Approved Projects</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] text-white/60 uppercase tracking-wider block mb-2 font-semibold">
                Follow Us Online
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/propertyjunctionjaipurx100?rpxt=a2U4ZG13Zm1wZTF2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E1306C] hover:text-white text-white/80 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Property Junction Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Dpgv97wTW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] hover:text-white text-white/80 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Property Junction Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@rkreddyx100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF0000] hover:text-white text-white/80 flex items-center justify-center transition-all shadow-sm"
                  aria-label="RK Reddy YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs border-b border-white/10 pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#D4AF37] transition-colors">Properties in Jaipur</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Our Advisory Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Property Junction</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact & Office Location</Link>
              </li>
              <li>
                <Link href="/ai-studio" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-[#D4AF37]">
                  <span>AI Valuation & Visualizer</span>
                  <span className="px-1.5 py-0.2 bg-[#D4AF37]/20 rounded text-[9px]">NEW</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Prime Jaipur Localities */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs border-b border-white/10 pb-2">
              Prime Jaipur Localities
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/properties?locality=Vaishali+Nagar" className="hover:text-[#D4AF37] transition-colors">
                  Vaishali Nagar (Villas & Estates)
                </Link>
              </li>
              <li>
                <Link href="/properties?locality=C-Scheme" className="hover:text-[#D4AF37] transition-colors">
                  C-Scheme (Sky Mansions & Penthouses)
                </Link>
              </li>
              <li>
                <Link href="/properties?locality=Mansarovar" className="hover:text-[#D4AF37] transition-colors">
                  Mansarovar (Apartments & Duplexes)
                </Link>
              </li>
              <li>
                <Link href="/properties?locality=Jagatpura" className="hover:text-[#D4AF37] transition-colors">
                  Jagatpura (Gated Villas & Plots)
                </Link>
              </li>
              <li>
                <Link href="/properties?locality=Malviya+Nagar" className="hover:text-[#D4AF37] transition-colors">
                  Malviya Nagar (Residences near WTP)
                </Link>
              </li>
              <li>
                <Link href="/properties?locality=Tonk+Road" className="hover:text-[#D4AF37] transition-colors">
                  Tonk Road (Grade-A Commercial Hubs)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs border-b border-white/10 pb-2">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Property Junction, Near Statue Circle / Main Tonk Road, Jaipur, Rajasthan 302001, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+919352521379" className="hover:text-[#D4AF37] font-semibold text-white">
                  +91 93525 21379
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:contact@propertyjunctionjaipur.com" className="hover:text-[#D4AF37]">
                  contact@propertyjunctionjaipur.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Monday – Sunday: 9:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919352521379?text=Hi%20Property%20Junction,%20I%20am%20interested%20in%20properties%20in%20Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md hover:bg-[#20bd5a] transition-colors"
                id="footer-whatsapp-button"
              >
                WhatsApp Us: +91 93525 21379
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>
            © {new Date().getFullYear()} Property Junction – Jaipur Real Estate. All rights reserved. Directed by RK Reddy.
          </p>
          <div className="flex items-center gap-4">
            <span>RERA Registered Agent</span>
            <span>•</span>
            <span>JDA & RERA Approved Projects</span>
            <span>•</span>
            <span>Jaipur, Rajasthan, India</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
