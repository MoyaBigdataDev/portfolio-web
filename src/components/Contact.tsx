"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
  const { language, content } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);
    setFormState({ name: '', message: '' });
    alert(language === 'es' ? '¡Mensaje enviado!' : 'Message sent!');
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#172B4D' }}>
          {content.contact.title}
        </h2>
        <p className="text-center mb-12" style={{ color: '#5E6C84' }}>
          {content.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <p className="text-sm mb-1" style={{ color: '#5E6C84' }}>{content.contact.email}</p>
              <p style={{ color: '#172B4D' }}>anderson.moya@email.com</p>
            </div>
            <div className="mb-8">
              <p className="text-sm mb-1" style={{ color: '#5E6C84' }}>{content.contact.phone}</p>
              <p style={{ color: '#172B4D' }}>+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: '#5E6C84' }}>{content.contact.location}</p>
              <p style={{ color: '#172B4D' }}>Bogotá, Colombia</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder={content.contact.form.name}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors"
                style={{ border: '1px solid #DFE1E6', backgroundColor: '#FFFFFF', color: '#172B4D' }}
              />
            </div>
            <div>
              <textarea
                placeholder={content.contact.form.message}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors resize-none"
                style={{ border: '1px solid #DFE1E6', backgroundColor: '#FFFFFF', color: '#172B4D' }}
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
          </form>
        </div>
      </div>
    </section>
  );
}
