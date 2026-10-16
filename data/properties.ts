export interface Property {
  id: string;
  title: string;
  tagline: string;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Commercial' | 'Plot';
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  price: string;
  priceNumeric: number; // in Lacs (e.g., 345 = 3.45 Cr, 85 = 85 Lacs)
  pricePerSqFt: string;
  location: string;
  locality: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: string;
  facing: string;
  reraNumber: string;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  investmentBenefits: {
    rentalYield: string;
    expectedAppreciation: string;
    possessionTime: string;
  };
  landmarks: { name: string; time: string }[];
}

export const PROPERTIES: Property[] = [
  {
    id: 'the-raj-palacio-vaishali-nagar',
    title: 'The Royal Sovereign Villa',
    tagline: 'Ultra-Luxury 5 BHK Independent Heritage Villa with Private Pool',
    type: 'Villa',
    status: 'Ready to Move',
    price: '₹4.85 Cr',
    priceNumeric: 485,
    pricePerSqFt: '₹9,200/sq.ft',
    location: 'Gandhi Path West, Vaishali Nagar, Jaipur',
    locality: 'Vaishali Nagar',
    area: '5,250 sq.ft',
    bedrooms: 5,
    bathrooms: 6,
    parking: '3 Covered Cars',
    facing: 'North-East (Vastu Compliant)',
    reraNumber: 'RAJ/P/2023/1842',
    featured: true,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An architectural marvel set in the upscale heart of Vaishali Nagar. Featuring double-height ceilings, bespoke Italian marble flooring, private temperature-controlled plunge pool, and lush manicured courtyard gardens.',
    highlights: [
      'Private Swimming Pool & Sun Deck',
      'Smart Home Automation by Control4',
      'Private Elevator to all 3 levels',
      'Double-height Living Lounge & Bar Area',
      'German Modular Kitchen with Miele Appliances'
    ],
    amenities: [
      'Private Swimming Pool',
      'Private Lift',
      'Italian Statuario Marble',
      'Lush Lawn Garden',
      'Solar Rooftop Grid',
      'Vastu Compliant',
      '24/7 Security & CCTV',
      'EV Car Charger'
    ],
    investmentBenefits: {
      rentalYield: '4.8% p.a.',
      expectedAppreciation: '14.5% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Vaishali Circle & Queens Road', time: '4 mins' },
      { name: 'Elements Mall', time: '6 mins' },
      { name: 'Jaipur Junction Railway Station', time: '14 mins' },
      { name: 'Jaipur International Airport', time: '22 mins' }
    ]
  },
  {
    id: 'skyline-skylark-c-scheme',
    title: 'C-Scheme Grand Sky Residence',
    tagline: 'Signature 4 BHK Sky Mansion with Panoramic Aravalli Views',
    type: 'Apartment',
    status: 'Ready to Move',
    price: '₹3.95 Cr',
    priceNumeric: 395,
    pricePerSqFt: '₹10,500/sq.ft',
    location: 'Near Statue Circle, C-Scheme, Jaipur',
    locality: 'C-Scheme',
    area: '3,800 sq.ft',
    bedrooms: 4,
    bathrooms: 4,
    parking: '2 Covered Slots',
    facing: 'East Facing',
    reraNumber: 'RAJ/P/2022/994',
    featured: true,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Located in Jaipur’s most prestigious PIN code. C-Scheme Grand Sky Residence features wraparound viewing balconies, bespoke wooden acoustics, 11-foot finished ceilings, and exclusive access to the sky club.',
    highlights: [
      'Aravalli Mountain & Central Park Skyline View',
      'Infinity Rooftop Pool on 18th Floor',
      'Dedicated Concierge & Valet Parking',
      'Private Foyer & High-Speed Biometric Lifts'
    ],
    amenities: [
      'Rooftop Infinity Pool',
      'State-of-the-Art Gym',
      'Banquet Hall',
      '24/7 Power Backup',
      'Multi-tier Security',
      'Spa & Sauna Room'
    ],
    investmentBenefits: {
      rentalYield: '5.2% p.a.',
      expectedAppreciation: '11.8% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Central Park', time: '2 mins' },
      { name: 'Statue Circle', time: '3 mins' },
      { name: 'SMS Hospital', time: '7 mins' },
      { name: 'Rambagh Golf Club', time: '8 mins' }
    ]
  },
  {
    id: 'emerald-haven-mansarovar',
    title: 'The Haven Luxury Penthouse',
    tagline: 'Duplex Penthouse with Private Terrace Jacuzzi & Deck',
    type: 'Penthouse',
    status: 'Ready to Move',
    price: '₹2.75 Cr',
    priceNumeric: 275,
    pricePerSqFt: '₹7,600/sq.ft',
    location: 'VT Road Extension, Mansarovar, Jaipur',
    locality: 'Mansarovar',
    area: '3,600 sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    parking: '2 Covered Slots',
    facing: 'North-East Facing',
    reraNumber: 'RAJ/P/2023/1205',
    featured: true,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A lavish two-tier penthouse designed for the connoisseur of fine living. Boasts a private 900 sq.ft open sky deck with Jacuzzi, barbecue station, and open-plan Scandinavian interior architecture.',
    highlights: [
      '900 sq.ft Rooftop Party Terrace with Heated Jacuzzi',
      'Dual Master Suites with Walk-in Closets',
      'Floor-to-ceiling Acoustic Double Glazed Windows',
      'Walking distance from Mansarovar Metro Station'
    ],
    amenities: [
      'Private Terrace Jacuzzi',
      'Clubhouse & Squash Court',
      'Landscaped Podium Gardens',
      '24/7 Security Guard',
      '100% DG Power Backup',
      'Covered Basement Parking'
    ],
    investmentBenefits: {
      rentalYield: '5.5% p.a.',
      expectedAppreciation: '13.0% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Mansarovar Metro Station', time: '3 mins' },
      { name: 'City Park (Jaipur)', time: '5 mins' },
      { name: 'Apex Hospital', time: '8 mins' },
      { name: 'Jaipur Airport', time: '14 mins' }
    ]
  },
  {
    id: 'aegis-residences-jagatpura',
    title: 'Aegis Palm Luxury Villa',
    tagline: 'Modern Contemporary 4 BHK Gated Community Villa',
    type: 'Villa',
    status: 'Ready to Move',
    price: '₹2.15 Cr',
    priceNumeric: 215,
    pricePerSqFt: '₹6,700/sq.ft',
    location: 'Mahal Road, Jagatpura, Jaipur',
    locality: 'Jagatpura',
    area: '3,200 sq.ft',
    bedrooms: 4,
    bathrooms: 4,
    parking: '2 Covered Cars',
    facing: 'North Facing',
    reraNumber: 'RAJ/P/2023/1511',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Impeccably built inside Jagatpura’s most coveted gated villa township. Features sprawling private lawns, double height living, Spanish tiling, and serene green surroundings near Bombay Hospital.',
    highlights: [
      'Gated Township with 5-Star Resort Amenities',
      'Private Front & Rear Garden Courtyard',
      'Rooftop Gazebo & Barbecue Zone',
      'High Capital Appreciation Corridor near Ring Road'
    ],
    amenities: [
      'Grand Club House',
      'Olympic Length Pool',
      'Tennis & Badminton Courts',
      'Kids Play Park',
      '24/7 Gated Security Patrol',
      'Jogging Track'
    ],
    investmentBenefits: {
      rentalYield: '4.5% p.a.',
      expectedAppreciation: '16.0% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Bombay Hospital', time: '4 mins' },
      { name: 'Jagatpura Railway Station', time: '6 mins' },
      { name: 'Jaipur International Airport', time: '10 mins' },
      { name: 'World Trade Park (WTP)', time: '12 mins' }
    ]
  },
  {
    id: 'property-junction-summit-tonk-road',
    title: 'Tonk Road Commercial Landmark',
    tagline: 'Grade-A Corporate Floors & Showroom Commercial Spaces',
    type: 'Commercial',
    status: 'Ready to Move',
    price: '₹5.50 Cr',
    priceNumeric: 550,
    pricePerSqFt: '₹11,000/sq.ft',
    location: 'Main Tonk Road, Near Gopalpura Flyover, Jaipur',
    locality: 'Tonk Road',
    area: '5,000 sq.ft',
    bedrooms: 0,
    bathrooms: 4,
    parking: '8 Dedicated Slots',
    facing: 'Main Road Facing (High Footfall)',
    reraNumber: 'RAJ/P/2022/882',
    featured: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An elite commercial asset suited for corporate headquarters, IT conglomerates, retail banks, and high-end luxury retail showrooms. Featuring triple-height atrium, glass curtain facade, and high rental return.',
    highlights: [
      'Prime 200-ft Main Arterial Road Frontage',
      'Pre-leased / Bare Shell Options Available',
      'Multi-level Automatic Basements',
      '100% Power Backup & Central HVAC Chiller'
    ],
    amenities: [
      'High Speed Mitsubishi Elevators',
      'Central Air Conditioning',
      'Advanced Fire Fighting Network',
      'Dedicated Loading/Unloading Bay',
      'Cafeteria & Terrace Lounge'
    ],
    investmentBenefits: {
      rentalYield: '7.8% p.a.',
      expectedAppreciation: '15.0% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Gopalpura Bypass', time: '2 mins' },
      { name: 'World Trade Park', time: '6 mins' },
      { name: 'Jaipur Airport Terminal 2', time: '8 mins' },
      { name: 'C-Scheme Center', time: '12 mins' }
    ]
  },
  {
    id: 'miramar-malviya-nagar',
    title: 'The Malviya Royal Residences',
    tagline: 'Premium 3 & 4 BHK Designer Apartments near WTP',
    type: 'Apartment',
    status: 'Ready to Move',
    price: '₹1.85 Cr',
    priceNumeric: 185,
    pricePerSqFt: '₹8,200/sq.ft',
    location: 'Sector 8, Malviya Nagar, Jaipur',
    locality: 'Malviya Nagar',
    area: '2,250 sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    parking: '2 Covered Slots',
    facing: 'North-East',
    reraNumber: 'RAJ/P/2023/1102',
    featured: true,
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set in Jaipur’s most established residential and shopping corridor. Steps away from World Trade Park and Gaurav Tower. Luxurious finishes with modular Italian kitchen and spacious master suites.',
    highlights: [
      '500 meters from World Trade Park (WTP)',
      'Low Density - Only 2 Flats per floor',
      'Imported Wooden Flooring & Designer Baths',
      'High Rental Demand from Aviation & Corporate Executives'
    ],
    amenities: [
      'Residents Lounge & Library',
      'Fitness Gymnasium',
      'Landscaped Terrace Garden',
      '24/7 Monitored CCTV',
      'Intercom & Video Door Phone'
    ],
    investmentBenefits: {
      rentalYield: '5.0% p.a.',
      expectedAppreciation: '12.2% p.a.',
      possessionTime: 'Ready to Move'
    },
    landmarks: [
      { name: 'World Trade Park', time: '3 mins' },
      { name: 'Gaurav Tower (GT)', time: '4 mins' },
      { name: 'Fortis Escorts Hospital', time: '5 mins' },
      { name: 'Jaipur Airport', time: '7 mins' }
    ]
  },
  {
    id: 'nirvana-estate-ajmer-road',
    title: 'Aravalli Greens Luxury Estate',
    tagline: 'Palatial 6 BHK Farmhouse Villa on Ajmer Expressway',
    type: 'Villa',
    status: 'Ready to Move',
    price: '₹6.20 Cr',
    priceNumeric: 620,
    pricePerSqFt: '₹7,750/sq.ft',
    location: 'Near DPS, Ajmer Road Express, Jaipur',
    locality: 'Ajmer Road',
    area: '8,000 sq.ft',
    bedrooms: 6,
    bathrooms: 7,
    parking: '6 Car Garage',
    facing: 'East Facing',
    reraNumber: 'RAJ/P/2022/604',
    featured: false,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An idyllic retreat offering pristine air and resort-style living, moments from Mahindra World City SEZ. Boasting a private 1-acre landscaped garden, lap pool, separate servant quarters, and luxury cabanas.',
    highlights: [
      '1-Acre Lush Green Private Lawn & Orchards',
      'Olympic Lap Swimming Pool & Jacuzzi',
      'Private Tennis Court & Putting Green',
      'Independent Staff & Security Quarters'
    ],
    amenities: [
      'Private Pool & Deck',
      'Solar Powered System',
      'Rainwater Harvesting',
      'Organic Kitchen Garden',
      'Perimeter Electric Fencing'
    ],
    investmentBenefits: {
      rentalYield: '4.2% p.a.',
      expectedAppreciation: '18.0% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Delhi Public School (DPS)', time: '5 mins' },
      { name: 'Mahindra World City SEZ', time: '10 mins' },
      { name: '200 Ft Ring Road Junction', time: '8 mins' },
      { name: 'Ajmer Road Toll Plaza', time: '12 mins' }
    ]
  },
  {
    id: 'solitaire-heights-sirsi-road',
    title: 'Solitaire Heights Residence',
    tagline: 'Spacious 3 BHK Luxury Flat in Gated Township',
    type: 'Apartment',
    status: 'Under Construction',
    price: '₹1.15 Cr',
    priceNumeric: 115,
    pricePerSqFt: '₹6,050/sq.ft',
    location: 'Sirsi Road, Vaishali Extension, Jaipur',
    locality: 'Vaishali Nagar',
    area: '1,900 sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    parking: '1 Covered Slot',
    facing: 'North-East',
    reraNumber: 'RAJ/P/2024/2209',
    featured: false,
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A blend of calm suburban charm and urban convenience. Modern open-plan layouts with sun-drenched balconies overlooking community gardens.',
    highlights: [
      'Possession in Q4 2026 (Construction in full swing)',
      'Bank Approvals from SBI, HDFC & ICICI',
      'No GST on Pre-approved payment plans'
    ],
    amenities: [
      'Swimming Pool',
      'Gymnasium',
      'Clubhouse',
      'Kids Play Area',
      '24/7 Security'
    ],
    investmentBenefits: {
      rentalYield: '4.9% p.a.',
      expectedAppreciation: '15.5% p.a.',
      possessionTime: 'December 2026'
    },
    landmarks: [
      { name: 'Sirsi Road Circle', time: '2 mins' },
      { name: 'Vaishali Nagar Main Market', time: '8 mins' },
      { name: 'Railway Station', time: '16 mins' }
    ]
  },
  {
    id: 'property-junction-orchard-jagatpura-plot',
    title: 'The Royal Orchard Premium Plots',
    tagline: 'JDA Approved 250 & 500 Sq.Yard Residential Plots',
    type: 'Plot',
    status: 'Ready to Move',
    price: '₹1.25 Cr',
    priceNumeric: 125,
    pricePerSqFt: '₹5,000/sq.yd',
    location: 'Near Ring Road & D-Mart, Jagatpura, Jaipur',
    locality: 'Jagatpura',
    area: '250 sq.yd (2,250 sq.ft)',
    bedrooms: 0,
    bathrooms: 0,
    parking: 'Roadside & In-plot',
    facing: 'East & North Options',
    reraNumber: 'RAJ/P/2023/1780',
    featured: false,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Gated plot community with wide 40-ft and 60-ft blacktop roads, underground electrical cabling, piped water supply, and immediate registry / loan availability.',
    highlights: [
      '100% JDA Patta & RERA Approved',
      'Underground Electrical & Sewage Cabling',
      'Direct connectivity to Jaipur Ring Road',
      'Immediate construction allowed'
    ],
    amenities: [
      'Boundary Wall Gated Colony',
      'Street LED Lighting',
      'Landscaped Green Parks',
      'Water Harvesting Tank'
    ],
    investmentBenefits: {
      rentalYield: 'N/A (Land Asset)',
      expectedAppreciation: '22.0% p.a.',
      possessionTime: 'Immediate Registry'
    },
    landmarks: [
      { name: 'Jaipur Ring Road Interchange', time: '3 mins' },
      { name: 'D-Mart Jagatpura', time: '5 mins' },
      { name: 'Jaipur International Airport', time: '12 mins' }
    ]
  },
  {
    id: 'civil-lines-heritage-villa',
    title: 'Civil Lines Heritage Bungalow',
    tagline: 'Regal 5 BHK Stately Bungalow in VVIP Diplomatic Zone',
    type: 'Villa',
    status: 'Ready to Move',
    price: '₹7.50 Cr',
    priceNumeric: 750,
    pricePerSqFt: '₹12,500/sq.ft',
    location: 'Near Governor House, Civil Lines, Jaipur',
    locality: 'C-Scheme',
    area: '6,000 sq.ft',
    bedrooms: 5,
    bathrooms: 6,
    parking: '4 Covered Garage',
    facing: 'North-East Facing',
    reraNumber: 'RAJ/P/2021/402',
    featured: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An elite trophy home located in the heart of Jaipur’s VIP administrative sector. Surrounding ministerial residences with utmost privacy, tranquil foliage, and antique heritage architectural touches.',
    highlights: [
      'High Security Diplomatic Zone',
      'Colonial arches with modern German insulation',
      'Private library, study, and banquet lawn',
      'Rare freehold residential title in Civil Lines'
    ],
    amenities: [
      'Security Post & Guard Room',
      'Private Lawn & Courtyard',
      'Servant Quarters (2 units)',
      'Backup Generator',
      'Automated Gate'
    ],
    investmentBenefits: {
      rentalYield: '4.0% p.a.',
      expectedAppreciation: '10.5% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Civil Lines Metro Station', time: '2 mins' },
      { name: 'Raj Bhavan', time: '3 mins' },
      { name: 'Jaipur Railway Station', time: '5 mins' },
      { name: 'Ajmeri Gate (Old City)', time: '10 mins' }
    ]
  },
  {
    id: 'prism-tower-commercial-hub',
    title: 'Prism Corporate Hub',
    tagline: 'Modern Boutique Office Spaces & Co-working Suites',
    type: 'Commercial',
    status: 'New Launch',
    price: '₹1.65 Cr',
    priceNumeric: 165,
    pricePerSqFt: '₹8,900/sq.ft',
    location: 'Malviya Industrial Area, Malviya Nagar, Jaipur',
    locality: 'Malviya Nagar',
    area: '1,850 sq.ft',
    bedrooms: 0,
    bathrooms: 2,
    parking: '3 Car Parking Slots',
    facing: 'North Facing',
    reraNumber: 'RAJ/P/2024/3104',
    featured: false,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed specifically for new-age businesses, consultancies, tech companies, and design studios. Premium glass elevation with plug-and-play IT infrastructure and common rooftop cafeteria.',
    highlights: [
      'High rental yield corridor near Calgiri Road',
      'Triple-height entrance lobby with receptionist',
      'EV car charging slots',
      'Fibre optic redundant network'
    ],
    amenities: [
      'Conference Rooms',
      'Cafeteria on Rooftop',
      'High Speed Lifts',
      '24/7 Access Control',
      'Visitor Valet Parking'
    ],
    investmentBenefits: {
      rentalYield: '8.4% p.a.',
      expectedAppreciation: '14.0% p.a.',
      possessionTime: 'March 2027'
    },
    landmarks: [
      { name: 'Apex Circle', time: '3 mins' },
      { name: 'World Trade Park', time: '6 mins' },
      { name: 'Jaipur Airport', time: '8 mins' }
    ]
  },
  {
    id: 'urban-woods-patrakar-colony',
    title: 'Urban Woods Modern Villa',
    tagline: '3 BHK Contemporary Duplex in Patrakar Colony',
    type: 'Villa',
    status: 'Ready to Move',
    price: '₹1.45 Cr',
    priceNumeric: 145,
    pricePerSqFt: '₹6,900/sq.ft',
    location: 'Patrakar Colony, Mansarovar Extension, Jaipur',
    locality: 'Mansarovar',
    area: '2,100 sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    parking: '1 Covered Car',
    facing: 'North Facing',
    reraNumber: 'RAJ/P/2023/1908',
    featured: false,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Chic modern duplex home designed for young families. Features semi-furnished modular fittings, sunlit balconies, modular kitchen, and proximity to top schools.',
    highlights: [
      'Walk-in wardrobes in Master Bedroom',
      'Modular Kitchen with Chimney & Hob',
      'Peaceful residential neighborhood',
      'Ready for immediate registration'
    ],
    amenities: [
      'CCTV Cameras',
      'Dedicated Car Parking',
      'Borewell & Overhead Tank',
      'Designer Fall Ceiling'
    ],
    investmentBenefits: {
      rentalYield: '4.7% p.a.',
      expectedAppreciation: '13.5% p.a.',
      possessionTime: 'Immediate'
    },
    landmarks: [
      { name: 'Muhana Mandi Road', time: '3 mins' },
      { name: 'Mansarovar Metro', time: '9 mins' },
      { name: 'V.T. Road Market', time: '7 mins' }
    ]
  }
];

export const JAIPUR_LOCALITIES = [
  'All Localities',
  'Vaishali Nagar',
  'C-Scheme',
  'Mansarovar',
  'Malviya Nagar',
  'Jagatpura',
  'Tonk Road',
  'Ajmer Road'
];

export const PROPERTY_TYPES = [
  'All Types',
  'Villa',
  'Apartment',
  'Penthouse',
  'Commercial',
  'Plot'
];
