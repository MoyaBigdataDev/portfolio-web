"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="py-8" style={{ backgroundColor: '#172B4D' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm" style={{ color: '#FFFFFF' }}>
          © {new Date().getFullYear()} Anderson Moya. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
