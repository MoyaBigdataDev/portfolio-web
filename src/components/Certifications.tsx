"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Certifications() {
  const { content } = useLanguage();

  return (
    <section id="certifications" className="py-24" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#172B4D' }}>
          {content.certifications.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.certifications.items.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-4"
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#0052CC' }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#172B4D' }}>
                  {cert.name}
                </h3>
                <p className="text-sm" style={{ color: '#5E6C84' }}>
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
