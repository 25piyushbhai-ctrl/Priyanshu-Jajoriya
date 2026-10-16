export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  propertyPurchased: string;
  rating: number;
  content: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajendra Singh Shekhawat',
    role: 'Industrialist & Managing Director',
    location: 'Vaishali Nagar, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    propertyPurchased: 'Luxury Villa in Vaishali Nagar',
    rating: 5,
    content: 'Property Junction demonstrated absolute integrity throughout our purchase. We had very specific requirements for Vastu and a private lawn. Not only did they locate an off-market villa within 5 days, but their legal team also cleared the 30-year title history flawlessly.'
  },
  {
    id: 't-2',
    name: 'Dr. Anita & Dr. Vikram Saxena',
    role: 'Senior Cardiac Specialists',
    location: 'C-Scheme, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    propertyPurchased: '4 BHK Sky Residence in C-Scheme',
    rating: 5,
    content: 'Being busy medical professionals, we had zero time for random builder pitches. Property Junction scheduled three private viewings back-to-back on a Sunday, negotiated 7% below quoted builder prices, and handled the bank loan directly. Truly exemplary service.'
  },
  {
    id: 't-3',
    name: 'Manoj Rathore',
    role: 'Tech Executive & NRI Investor',
    location: 'Dubai / Jagatpura',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    propertyPurchased: '2 Commercial Office Units on Tonk Road',
    rating: 5,
    content: 'Investing from abroad can be daunting, but the team sent detailed drone survey videos, rental yield cash-flow projections, and tenant agreement drafts. Both units are now generating guaranteed monthly returns. Best property consultants in Rajasthan.'
  },
  {
    id: 't-4',
    name: 'Pooja & Sameer Agarwal',
    role: 'Founders, Textile Exports',
    location: 'Mansarovar, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    propertyPurchased: 'Duplex Penthouse in Mansarovar',
    rating: 5,
    content: 'Transparent pricing with no hidden developer surprises. From the first site visit in their comfortable executive cab to the registry gift ceremony, Property Junction made our family feel valued. Highly recommended!'
  }
];
