"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';

const icons = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-3-3v6m-7.5 4.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6 6 0 100-12 6 6 0 000 12zm0 0l-3.75 3.75M12 15l3.75-3.75" />,
  <path key="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17.25l3.75-3.75m0 0l3.75 3.75m-3.75-3.75V5.25" />,
  <path key="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
];

export default function Services() {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  const bgColor = isDark ? '#1E293B' : '#F4F5F7';
  const cardBg = isDark ? '#334155' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#172B4D';
  const subtitleColor = isDark ? '#94A3B8' : '#5E6C84';

  return (
    <section id="services" className="py-24" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: textColor }}>
          {content.services.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl hover:shadow-lg transition-shadow"
              style={{ backgroundColor: cardBg }}
            >
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#0052CC' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                  {icons[index]}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: textColor }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: subtitleColor }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
