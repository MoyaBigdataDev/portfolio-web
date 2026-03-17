"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Services() {
  const { content } = useLanguage();

  return (
    <section id="services" className="py-24" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#172B4D' }}>
          {content.services.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#0052CC' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#172B4D' }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#5E6C84' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
