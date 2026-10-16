'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SiteVisitContextType {
  isOpen: boolean;
  selectedProperty: string | null;
  openSiteVisitModal: (propertyTitle?: string) => void;
  closeSiteVisitModal: () => void;
}

const SiteVisitContext = createContext<SiteVisitContextType | undefined>(undefined);

export function SiteVisitProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const openSiteVisitModal = (propertyTitle?: string) => {
    setSelectedProperty(propertyTitle || null);
    setIsOpen(true);
  };

  const closeSiteVisitModal = () => {
    setIsOpen(false);
    setSelectedProperty(null);
  };

  return (
    <SiteVisitContext.Provider
      value={{
        isOpen,
        selectedProperty,
        openSiteVisitModal,
        closeSiteVisitModal,
      }}
    >
      {children}
    </SiteVisitContext.Provider>
  );
}

export function useSiteVisit() {
  const context = useContext(SiteVisitContext);
  if (!context) {
    throw new Error('useSiteVisit must be used within a SiteVisitProvider');
  }
  return context;
}
