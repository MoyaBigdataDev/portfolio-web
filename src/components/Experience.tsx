"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Experience() {
  const { content } = useLanguage();

  return (
    <section id="experience" className="py-24" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#172B4D' }}>
          {content.experience.title}
        </h2>
        <div className="space-y-8">
          {content.experience.items.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#172B4D' }}>
                    {exp.role}
                  </h3>
                  <p className="mt-1" style={{ color: '#0052CC' }}>{exp.company}</p>
                </div>
                <span className="text-sm mt-2 md:mt-0" style={{ color: '#5E6C84' }}>
                  {exp.period}
                </span>
              </div>
              <p style={{ color: '#5E6C84' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
