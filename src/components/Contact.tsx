"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';

export default function Contact() {
  const { language, content } = useLanguage();
  const { isDark } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '573105671761';
    const text = `Hola, soy ${formState.name}. ${formState.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    setFormState({ name: '', message: '' });
  };

  const bgColor = isDark ? '#1E293B' : '#F4F5F7';
  const textColor = isDark ? '#FFFFFF' : '#172B4D';
  const subtitleColor = isDark ? '#94A3B8' : '#5E6C84';
  const inputBg = isDark ? '#334155' : '#FFFFFF';
  const inputBorder = isDark ? '#475569' : '#DFE1E6';

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: textColor }}>
          {content.contact.title}
        </h2>
        <p className="text-center mb-12" style={{ color: subtitleColor }}>
          {content.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <p className="text-sm mb-1" style={{ color: subtitleColor }}>{content.contact.email}</p>
              <p style={{ color: textColor }}>anderson.estrategia40@gmail.com</p>
            </div>
            <div className="mb-8">
              <p className="text-sm mb-1" style={{ color: subtitleColor }}>{content.contact.phone}</p>
              <p style={{ color: textColor }}>+57 3105671761</p>
            </div>
            <div className="mb-8">
              <p className="text-sm mb-1" style={{ color: subtitleColor }}>WhatsApp</p>
              <a 
                href="https://wa.me/573105671761"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#0052CC' }}
              >
                Enviar mensaje
              </a>
            </div>
            <div className="mb-8">
              <p className="text-sm mb-1" style={{ color: subtitleColor }}>LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/Anderson-Moya" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#0052CC' }}
              >
                linkedin.com/in/Anderson-Moya
              </a>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: subtitleColor }}>GitHub</p>
              <a 
                href="https://github.com/MoyaBigdataDev" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#0052CC' }}
              >
                github.com/MoyaBigdataDev
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder={content.contact.form.name}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors"
                style={{ border: `1px solid ${inputBorder}`, backgroundColor: inputBg, color: textColor }}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={content.contact.form.message}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors resize-none"
                style={{ border: `1px solid ${inputBorder}`, backgroundColor: inputBg, color: textColor }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-medium transition-colors hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {language === 'es' ? 'Enviar por WhatsApp' : 'Send via WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
