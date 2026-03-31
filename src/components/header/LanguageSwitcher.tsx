'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
  { code: 'uz', label: "O'zbekcha" },
];

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white border border-gray-300 rounded-full text-[14px] font-medium text-[#4B5563] hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center gap-2"
      >
        {currentLanguage?.label}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                router.push(`/${lang.code}`);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                lang.code === currentLang
                  ? 'bg-primary-dark text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}