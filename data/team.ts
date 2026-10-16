export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
  specialization: string;
  phone: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'RK Reddy',
    role: 'Real Estate Professional & Digital Creator',
    experience: '12+ Years Experience',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    specialization: 'JDA & RERA Approved Luxury Estates & Media Showcase',
    phone: '+91 93525 21379'
  },
  {
    name: 'Vikramaditya Rathore',
    role: 'Head of Luxury Residential',
    experience: '11+ Years Experience',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    specialization: 'Villas & Penthouses in C-Scheme & Vaishali',
    phone: '+91 93525 21379'
  },
  {
    name: 'Priyanka Sharma',
    role: 'Vice President — Commercial Investments',
    experience: '9+ Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialization: 'Pre-Leased Commercial & Retail Assets',
    phone: '+91 93525 21379'
  },
  {
    name: 'Adv. Harish Meena',
    role: 'Head of Legal & Title Due Diligence',
    experience: '14+ Years Experience',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    specialization: 'RERA Compliance, JDA Title Search & Sub-Registrar Deeds',
    phone: '+91 93525 21379'
  }
];
