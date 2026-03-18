"use client";

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/useTheme';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const { language, content } = useLanguage();
  const { isDark } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_portfolio',
        'template_portfolio',
        form.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormState({ name: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setSending(false);
    }
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

          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="from_name"
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
              disabled={sending}
              className="w-full py-4 rounded-lg font-medium transition-colors hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: '#0052CC', color: '#FFFFFF' }}
            >
              {sending ? content.contact.form.sending : content.contact.form.send}
            </button>
            {status === 'success' && (
              <p className="text-green-500 text-center">
                {language === 'es' ? '¡Mensaje enviado correctamente!' : 'Message sent successfully!'}
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">
                {language === 'es' ? 'Error al enviar. Intenta de nuevo.' : 'Error sending. Please try again.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
