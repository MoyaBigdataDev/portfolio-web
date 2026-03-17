"use client";

import { useLanguage } from '@/lib/LanguageContext';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#172B4D' }}>
          {content.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {(content.projects.items as Project[]).map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="h-48 flex items-center justify-center relative" style={{ backgroundColor: '#F4F5F7' }}>
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#0052CC' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-white font-semibold px-4 py-2 rounded-full border-2 border-white">
                      Ver en GitHub →
                    </span>
                  </a>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors" style={{ color: '#172B4D' }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: '#5E6C84' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
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
