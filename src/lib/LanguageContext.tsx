"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, getContent } from '@/lib/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: ReturnType<typeof getContent>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang === 'es' || savedLang === 'en') {
        return savedLang;
      }
    }
    return 'es';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    content: getContent(language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
