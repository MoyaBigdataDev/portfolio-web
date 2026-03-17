"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Education() {
  const { content } = useLanguage();

  return (
    <section id="education" className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#172B4D' }}>
          {content.education.title}
        </h2>
        <div className="space-y-8">
          {content.education.items.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#172B4D' }}>
                    {edu.degree}
                  </h3>
                  <p className="mt-1" style={{ color: '#0052CC' }}>{edu.institution}</p>
                </div>
                <span className="text-sm mt-2 md:mt-0" style={{ color: '#5E6C84' }}>
                  {edu.period}
                </span>
              </div>
              <p style={{ color: '#5E6C84' }}>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
