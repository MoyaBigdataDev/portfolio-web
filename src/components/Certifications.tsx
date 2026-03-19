"use client";

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  image?: string;
}

export default function Certifications() {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  const bgColor = isDark ? '#1E293B' : '#F4F5F7';
  const cardBg = isDark ? '#334155' : '#FFFFFF';
  const cardBorder = isDark ? '#475569' : '#E5E7EB';
  const textColor = isDark ? '#FFFFFF' : '#172B4D';
  const subtitleColor = isDark ? '#94A3B8' : '#5E6C84';

  return (
    <section id="certifications" className="py-24" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: textColor }}>
          {content.certifications.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {(content.certifications.items as Certification[]).map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border hover:shadow-md transition-shadow flex items-center gap-4"
              style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
              {cert.image ? (
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#0052CC' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              )}
              <div>
                <h3 className="font-semibold" style={{ color: textColor }}>
                  {cert.name}
                </h3>
                <p className="text-sm" style={{ color: subtitleColor }}>
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
