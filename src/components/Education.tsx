"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';

export default function Education() {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  const bgColor = isDark ? '#0F172A' : '#FFFFFF';
  const cardBg = isDark ? '#1E293B' : '#F3F4F6';
  const textColor = isDark ? '#FFFFFF' : '#172B4D';
  const subtitleColor = isDark ? '#94A3B8' : '#5E6C84';

  return (
    <section id="education" className="py-24" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: textColor }}>
          {content.education.title}
        </h2>
        <div className="space-y-8">
          {content.education.items.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl hover:shadow-md transition-shadow"
              style={{ backgroundColor: cardBg }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: textColor }}>
                    {edu.degree}
                  </h3>
                  <p className="mt-1" style={{ color: '#0052CC' }}>{edu.institution}</p>
                </div>
                <span className="text-sm mt-2 md:mt-0" style={{ color: subtitleColor }}>
                  {edu.period}
                </span>
              </div>
              <p style={{ color: subtitleColor }}>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
