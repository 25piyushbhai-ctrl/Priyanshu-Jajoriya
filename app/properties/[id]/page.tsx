import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
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
  Building
} from 'lucide-react';
import { PROPERTIES, Property } from '@/data/properties';
import PropertyDetailClient from './PropertyDetailClient';

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    id: property.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  // Related properties in same locality or same type
  const relatedProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.locality === property.locality || p.type === property.type)
  ).slice(0, 3);

  return (
    <PropertyDetailClient
      property={property}
      relatedProperties={relatedProperties.length > 0 ? relatedProperties : PROPERTIES.slice(0, 3)}
    />
  );
}
