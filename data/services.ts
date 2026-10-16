export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  targetAudience: string;
  icon: string; // lucide icon name
  image: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  ctaText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'property-buying',
    title: 'Property Buying Assistance',
    subtitle: 'End-to-end guidance for finding and acquiring your dream home or luxury villa in Jaipur.',
    category: 'Residential',
    targetAudience: 'Families, HNIs, and first-time luxury buyers seeking verified homes in Jaipur.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'We eliminate the friction of property hunting. From identifying non-listed high-value villas in Vaishali Nagar and C-Scheme to conducting comprehensive 30-point legal title verifications, our senior advisors accompany you at every milestone.',
    benefits: [
      '100% RERA verified property inventory',
      'Direct developer negotiations with best price guarantee',
      'Comprehensive title search & encumbrance certification',
      'VIP chauffeured site visits across Jaipur',
      'Pre-approved home loan coordination with SBI, HDFC & ICICI'
    ],
    deliverables: [
      'Personalized property shortlist within 24 hours',
      'Comparative market price analysis report',
      'Full legal documentation vetting & registry support'
    ],
    process: [
      'Discovery call & lifestyle budget blueprinting',
      'Handpicked portfolio presentation with title records',
      'Chauffeured VIP on-ground property inspections',
      'Price negotiation & seamless Sub-Registrar deed registry'
    ],
    ctaText: 'Find Your Property'
  },
  {
    id: 'property-selling',
    title: 'Property Selling Assistance',
    subtitle: 'Strategic valuation, high-impact marketing, and vetted buyer matching for top market value.',
    category: 'Selling',
    targetAudience: 'Property owners and investors seeking swift, confidential sales at peak valuation.',
    icon: 'BadgePercent',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Selling a premium asset in Jaipur requires discretion and elite reach. We utilize architectural photography, 4K video tours, and our private network of 5,000+ vetted HNIs and NRI investors to close deals smoothly and swiftly.',
    benefits: [
      'Professional architectural staging & visual presentation',
      'Direct access to pre-qualified high-net-worth buyers',
      'Zero spam policy — only qualified buyer visits',
      'Transparent escrow and agreement handling',
      'Targeted digital marketing campaigns across India & Gulf NRIs'
    ],
    deliverables: [
      'Complimentary official property valuation report',
      'High-resolution visual brochure & virtual walkthrough',
      'Structured negotiation & safe registry execution'
    ],
    process: [
      'On-site appraisal & comparative rate audit',
      'Elite multimedia staging, floor plans & 4K video reel',
      'Confidential presentation to active HNI investor pool',
      'Safe escrow, token agreement & registry completion'
    ],
    ctaText: 'List Your Property'
  },
  {
    id: 'commercial-properties',
    title: 'Commercial Properties & Retail',
    subtitle: 'High-yield commercial buildings, retail high-streets, corporate offices, and warehouse hubs.',
    category: 'Commercial',
    targetAudience: 'Business founders, retail chains, and institutional investors targeting cash-flow assets.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Whether you require pre-leased bank branches on Tonk Road, Grade-A IT offices near Malviya Nagar, or high-street retail showrooms on MI Road, we identify commercial assets with guaranteed rental cash flows.',
    benefits: [
      'Pre-leased properties offering 7.5% - 9.5% annual ROI',
      'Prime frontage locations with guaranteed footfalls',
      'Institutional lease agreement structures (9-15 year lock-ins)',
      'Due diligence on zoning laws and commercial fire NOCs',
      'Tenant placement and corporate negotiation'
    ],
    deliverables: [
      'Cap rate & cash flow projection modeling',
      'Tenant credit assessment reports',
      'Turnkey commercial handover documentation'
    ],
    process: [
      'Yield modeling & footfall analysis on prime Jaipur corridors',
      'Tenant covenants & lease tenure verification',
      'Commercial zoning & municipal NOC verification',
      'Title transfer & ongoing rental escrow setup'
    ],
    ctaText: 'Explore Commercial'
  },
  {
    id: 'rental-services',
    title: 'Rental & Luxury Leasing',
    subtitle: 'Corporate leasing, furnished luxury residences, and verified premium tenant onboarding.',
    category: 'Leasing',
    targetAudience: 'Corporate executives, doctors, and expats looking for premium furnished stays.',
    icon: 'KeyRound',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    description: 'Connecting reputable corporate executives, embassy staff, doctors, and senior professionals with premium furnished penthouses and villas. We handle background verifications and watertight tenancy contracts.',
    benefits: [
      'Strict background checks and police verification assistance',
      'Standardized legal rental agreements with security deposits',
      'Inspection check-in and inventory condition reporting',
      'Timely monthly rent collection automation',
      'Minimal vacancy turnaround time'
    ],
    deliverables: [
      'Verified tenant dossier',
      'Stamped legal tenancy agreement',
      'Detailed photographic move-in inventory report'
    ],
    process: [
      'Rental appraisal & photographic asset documentation',
      'Corporate tenant screening & KYC background check',
      'Custom bilingual tenancy agreement execution',
      'Handover inventory checklist & deposit escrow'
    ],
    ctaText: 'Explore Rental Services'
  },
  {
    id: 'investment-consultation',
    title: 'Investment Consultation & NRI Advisory',
    subtitle: 'Strategic wealth creation through high-growth real estate corridors and land banking in Jaipur.',
    category: 'Advisory',
    targetAudience: 'Domestic HNIs and overseas NRIs planning high-multiplier wealth growth in Jaipur.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description: 'Jaipur is one of North India’s fastest-growing capital appreciation zones. We guide domestic and NRI investors on infrastructure catalysts (Ring Road, Delhi-Mumbai Expressway, Airport expansion, Metro Phase 2) for maximum capital gains.',
    benefits: [
      'Micro-market appreciation forecasting',
      'Specialized NRI taxation, NRE/NRO repatriation advisory',
      'JDA land banking and future corridor selection',
      'Portfolio diversification across residential and commercial',
      'Regular site progress video reporting for overseas clients'
    ],
    deliverables: [
      'Customized 5-year investment thesis report',
      'Exit strategy and capital redeployment roadmaps',
      'Quarterly asset valuation updates'
    ],
    process: [
      'Macro & micro-market corridor growth mapping',
      'Tax-optimized holding structure & NRI FEMA clearance',
      'Acquisition of land parcels / pre-launch allocations',
      'Periodic progress video dispatches & planned exit execution'
    ],
    ctaText: 'Book Investment Call'
  },
  {
    id: 'property-management',
    title: 'Comprehensive Property Management',
    subtitle: 'Hassle-free upkeep, bill payments, security monitoring, and regular maintenance for absentee owners.',
    category: 'Management',
    targetAudience: 'Outstation and NRI owners needing complete property upkeep and security in Jaipur.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    description: 'Ideal for NRIs, outstation owners, and busy professionals who own vacant or tenanted properties in Jaipur. We treat your property with the vigilance and prestige it deserves.',
    benefits: [
      'Monthly on-site physical inspections with high-res photo logs',
      'Bill payments (Electricity, Water, Property Tax, Society Maintenance)',
      'Vendor management (Plumbing, Electrical, Deep Cleaning, Painting)',
      'Immediate crisis response and 24/7 security audit',
      'Key custody and controlled inspection visits'
    ],
    deliverables: [
      'Monthly digital asset health inspection scorecard',
      'Consolidated expense receipt statements',
      'Annual maintenance & deep cleaning schedule'
    ],
    process: [
      'Comprehensive property onboarding & key custody handover',
      'Routine monthly on-site physical health and safety audit',
      'Automated utility payments & preventive contractor repairs',
      'Monthly digital photo dispatch & 24/7 emergency response'
    ],
    ctaText: 'Manage My Property'
  }
];

export const PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Personalized Consultation',
    description: 'We listen to your lifestyle goals, budget parameters, and investment horizon over coffee or a dedicated virtual call.'
  },
  {
    step: '02',
    title: 'Curated Selection',
    description: 'We handpick 3-5 verified properties that strictly align with your criteria, complete with legal due diligence notes.'
  },
  {
    step: '03',
    title: 'VIP Site Visit',
    description: 'Experience guided, chauffeured on-ground tours at your preferred schedule with our senior property specialists.'
  },
  {
    step: '04',
    title: 'Transparent Deal Closure',
    description: 'From developer price negotiations to registry at the Sub-Registrar office, we secure your ownership seamlessly.'
  }
];

export const SERVICES_DATA = SERVICES;
export const ADVISORY_PROCESS = PROCESS_TIMELINE;

