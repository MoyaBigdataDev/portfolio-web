"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { content } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm mb-4 tracking-widest uppercase" style={{ color: '#0052CC' }}>
          {content.hero.greeting}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#172B4D' }}>
          Anderson Moya
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: '#172B4D' }}>
          {content.hero.title}
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#5E6C84' }}>
          {content.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-full font-medium transition-colors hover:opacity-90"
          style={{ backgroundColor: '#0052CC', color: '#FFFFFF' }}
        >
          {content.hero.cta}
        </a>
        <p className="mt-16 text-sm" style={{ color: '#5E6C84' }}>
          {content.hero.scroll}
        </p>
        <div className="mt-4 animate-bounce">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#0052CC' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
