'use client';

import { useRouter } from 'next/navigation';

const languages = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
  { code: 'uz', label: "O'zbekcha" },
];

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();

  return (
    <select
      value={currentLang}
      onChange={(e) => router.push(`/${e.target.value}`)}
      className="px-4 py-2 bg-white border border-gray-300 rounded-full text-[14px] font-medium text-[#4B5563] hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 transition-all cursor-pointer appearance-none shadow-sm hover:shadow-md"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
