import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import SiteVisitModal from '@/components/SiteVisitModal';
import { SiteVisitProvider } from '@/components/SiteVisitContext';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Property Junction | Jaipur Real Estate — JDA & RERA Approved Projects',
  description: 'Property Junction – Jaipur Real Estate. Directed by RK Reddy, Real Estate Professional & Digital Creator. Explore verified luxury villas, modern apartments, penthouses, and JDA & RERA approved projects in Vaishali Nagar, C-Scheme, Mansarovar, and Jagatpura. Call/WhatsApp +91 93525 21379.',
  keywords: [
    'Property Junction',
    'Property Junction Jaipur',
    'RK Reddy',
    'Jaipur real estate',
    'JDA approved projects Jaipur',
    'RERA approved projects Jaipur',
    'luxury villas in Jaipur',
    'apartments in C-Scheme Jaipur',
    'Vaishali Nagar property',
    'plots in Jagatpura',
    'buy property in Jaipur',
    '+91 93525 21379'
  ],
  openGraph: {
    title: 'Property Junction | Jaipur Real Estate — JDA & RERA Approved Projects',
    description: 'Find verified properties with confidence. Luxury villas, modern apartments, and JDA & RERA approved projects in Jaipur. Contact RK Reddy at +91 93525 21379.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Property Junction',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Junction — Jaipur Real Estate | RK Reddy',
    description: 'Find verified properties with confidence. JDA & RERA approved luxury villas, modern apartments, and prime spaces in Jaipur.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#111111] antialiased" suppressHydrationWarning>
        <SiteVisitProvider>
          <Navbar />
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <SiteVisitModal />
          <FloatingActions />
        </SiteVisitProvider>
      </body>
    </html>
  );
}
