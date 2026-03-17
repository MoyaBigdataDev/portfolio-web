"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#172B4D' }}>
          {content.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {content.projects.items.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #DFE1E6' }}
            >
              <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#F4F5F7' }}>
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#0052CC' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: '#172B4D' }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: '#5E6C84' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ backgroundColor: '#EBECF0', color: '#172B4D' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
