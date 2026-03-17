"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, content } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'education', href: '#education' },
    { key: 'certifications', href: '#certifications' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-semibold" style={{ color: '#172B4D' }}>
            AM
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: '#172B4D' }}
              >
                {content.nav[item.key as keyof typeof content.nav]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium transition-colors px-3 py-1 rounded-full"
              style={{ color: '#172B4D', border: '1px solid #172B4D' }}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: '#172B4D' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2"
                style={{ color: '#172B4D' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav[item.key as keyof typeof content.nav]}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
