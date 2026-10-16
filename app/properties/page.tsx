'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  MapPin,
  Building,
  Calendar,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PROPERTIES, JAIPUR_LOCALITIES, PROPERTY_TYPES, Property } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import { useSiteVisit } from '@/components/SiteVisitContext';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionReveal';

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialLocality = searchParams.get('locality') || 'All Localities';
  const initialType = searchParams.get('type') || 'All Types';
  const initialBudget = searchParams.get('budget') || 'All';

  const { openSiteVisitModal } = useSiteVisit();

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedBedrooms, setSelectedBedrooms] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(initialBudget);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Keyword search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = property.title.toLowerCase().includes(query);
        const matchesLocality = property.locality.toLowerCase().includes(query);
        const matchesDesc = property.description.toLowerCase().includes(query);
        const matchesTagline = property.tagline.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocality && !matchesDesc && !matchesTagline) {
          return false;
        }
      }

      // Locality
      if (selectedLocality !== 'All Localities' && property.locality !== selectedLocality) {
        return false;
      }

      // Type
      if (selectedType !== 'All Types' && property.type !== selectedType) {
        return false;
      }

      // Status
      if (selectedStatus !== 'All' && property.status !== selectedStatus) {
        return false;
      }

      // Bedrooms
      if (selectedBedrooms !== 'All') {
        if (selectedBedrooms === '5+' && property.bedrooms < 5) return false;
        if (selectedBedrooms !== '5+' && property.bedrooms !== parseInt(selectedBedrooms)) return false;
      }

      // Price Range (priceNumeric is in Lacs)
      if (selectedPriceRange !== 'All') {
        if (selectedPriceRange === 'under-1cr' && property.priceNumeric >= 100) return false;
        if (selectedPriceRange === '1cr-2.5cr' && (property.priceNumeric < 100 || property.priceNumeric > 250)) return false;
        if (selectedPriceRange === '2.5cr-5cr' && (property.priceNumeric < 250 || property.priceNumeric > 500)) return false;
        if (selectedPriceRange === 'above-5cr' && property.priceNumeric <= 500) return false;
      }

      return true;
    });
  }, [searchTerm, selectedLocality, selectedType, selectedStatus, selectedBedrooms, selectedPriceRange]);

  // Sort Logic
  const sortedProperties = useMemo(() => {
    const list = [...filteredProperties];
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (sortBy === 'bedrooms') {
      list.sort((a, b) => b.bedrooms - a.bedrooms);
    } else {
      // featured default
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [filteredProperties, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  const currentProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProperties, currentPage, itemsPerPage]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedLocality('All Localities');
    setSelectedType('All Types');
    setSelectedStatus('All');
    setSelectedBedrooms('All');
    setSelectedPriceRange('All');
    setSortBy('featured');
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedLocality !== 'All Localities' ||
    selectedType !== 'All Types' ||
    selectedStatus !== 'All' ||
    selectedBedrooms !== 'All' ||
    selectedPriceRange !== 'All';

  return (
    <div className="py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-[#0F3D2E] text-white py-14 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Jaipur Catalog
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Explore Premium Properties in Jaipur
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            From regal independent villas in Vaishali Nagar to high-yield commercial assets on Tonk Road. Filter by locality, type, and price.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Advanced Filters Container */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#E8E8E2] space-y-5" id="advanced-filters-panel">
          {/* Top Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-[#777777] absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by property name, landmark, or locality (e.g. Vaishali, Villa, C-Scheme)..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#E8E8E2] text-sm text-[#111111] focus:outline-none focus:border-[#0F3D2E] bg-[#FAFAF8]"
                id="property-search-input"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-56">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E8E2] text-sm text-[#111111] bg-[#FAFAF8] focus:outline-none focus:border-[#0F3D2E] font-medium"
                id="property-sort-select"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="bedrooms">Most Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Filter Pills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-3 border-t border-[#E8E8E2]">
            {/* Locality */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                Locality
              </label>
              <select
                value={selectedLocality}
                onChange={(e) => {
                  setSelectedLocality(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E8E2] text-xs bg-white text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                id="filter-locality-select"
              >
                {JAIPUR_LOCALITIES.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E8E2] text-xs bg-white text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                id="filter-type-select"
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                Budget / Price
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => {
                  setSelectedPriceRange(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E8E2] text-xs bg-white text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                id="filter-price-select"
              >
                <option value="All">All Price Ranges</option>
                <option value="under-1cr">Under ₹1.00 Cr</option>
                <option value="1cr-2.5cr">₹1.00 Cr – ₹2.50 Cr</option>
                <option value="2.5cr-5cr">₹2.50 Cr – ₹5.00 Cr</option>
                <option value="above-5cr">₹5.00 Cr+ (Ultra Luxury)</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                Bedrooms
              </label>
              <select
                value={selectedBedrooms}
                onChange={(e) => {
                  setSelectedBedrooms(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E8E2] text-xs bg-white text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                id="filter-bedrooms-select"
              >
                <option value="All">All Configurations</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="5+">5+ BHK</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0F3D2E] mb-1">
                Construction Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E8E2] text-xs bg-white text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                id="filter-status-select"
              >
                <option value="All">All Statuses</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
                <option value="New Launch">New Launch</option>
              </select>
            </div>
          </div>

          {/* Active Filter Bar & Results Count */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[#555555]">
            <div>
              Showing <strong className="text-[#0F3D2E]">{sortedProperties.length}</strong> verified properties found
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0F3D2E] font-semibold text-xs transition-colors cursor-pointer"
                id="reset-filters-btn"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Properties Grid */}
        {sortedProperties.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E8E2] space-y-4 my-8">
            <div className="w-16 h-16 bg-[#0F3D2E]/10 rounded-full flex items-center justify-center mx-auto text-[#0F3D2E]">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0F3D2E]">No Properties Match Your Current Filters</h3>
            <p className="text-sm text-[#555555] max-w-md mx-auto">
              Try adjusting your price range or locality preferences, or contact our team directly for exclusive unlisted properties.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#0F3D2E] text-white text-xs font-bold hover:bg-[#1D6B52]"
              >
                Reset Filters
              </button>
              <button
                onClick={() => openSiteVisitModal()}
                className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#0F3D2E] text-xs font-bold hover:bg-[#E5C358]"
              >
                Inquire For Custom Requirement
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-10 my-8">
            <AnimatePresence mode="wait">
              <StaggerContainer
                key={`${currentPage}-${sortBy}-${selectedLocality}-${selectedType}-${selectedPriceRange}`}
                staggerDelay={0.06}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {currentProperties.map((property) => (
                  <StaggerItem key={property.id}>
                    <PropertyCard property={property} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-xl border border-[#E8E8E2] bg-white text-[#0F3D2E] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  id="pagination-prev-btn"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {[...Array(totalPages)].map((_, idx) => {
                  const pageNum = idx + 1;
                  const isCurrent = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        isCurrent
                          ? 'bg-[#0F3D2E] text-white shadow-md'
                          : 'bg-white border border-[#E8E8E2] text-[#111111] hover:bg-gray-50'
                      }`}
                      id={`pagination-page-${pageNum}`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-xl border border-[#E8E8E2] bg-white text-[#0F3D2E] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  id="pagination-next-btn"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[#0F3D2E]">Loading properties...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
