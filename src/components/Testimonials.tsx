"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Testimonials() {
  const { content } = useLanguage();

  return (
    <section id="testimonials" className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#172B4D' }}>
          {content.testimonials.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <svg className="w-8 h-8 mb-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#0052CC' }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 leading-relaxed" style={{ color: '#5E6C84' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold" style={{ color: '#172B4D' }}>
                  {testimonial.author}
                </p>
                <p className="text-sm" style={{ color: '#5E6C84' }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
