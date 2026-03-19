"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';

export default function Footer() {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className="py-8" style={{ backgroundColor: isDark ? '#172B4D' : '#F4F5F7' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm" style={{ color: isDark ? '#FFFFFF' : '#172B4D' }}>
          © {new Date().getFullYear()} Anderson Moya. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
