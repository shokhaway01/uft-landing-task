import { FiArrowUpRight } from 'react-icons/fi';
import type { Dictionary } from '@/locales';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  dict: Dictionary['header'];
  lang: string;
}

const Header = ({ dict, lang }: HeaderProps) => {
  return (
    <header className="w-full pb-5 pt-8 px-4 md:px-8 bg-white fixed top-0 z-50">
      <div className="max-w-[1352px] mx-auto flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="text-xl md:text-[26px] md:flex gap-5 font-semibold text-primary-dark tracking-tight">
          <div>Power Build Construction</div>
          <nav className="hidden lg:flex items-center space-x-10 text-[15px] font-semibold text-[#4B5563]">
            <a href="#home" className="hover:text-primary-dark transition-colors">{dict.navHome}</a>
            <a href="#about" className="hover:text-primary-dark transition-colors">{dict.navAbout}</a>
            <a href="#projects" className="hover:text-primary-dark transition-colors">{dict.navProjects}</a>
            <a href="#services" className="hover:text-primary-dark transition-colors">{dict.navServices}</a>
          </nav>
        </div>

        {/* CTA + Language */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher currentLang={lang} />
          <button className="flex items-center space-x-2 bg-primary-dark hover:bg-primary-light text-white px-6 py-3 rounded-full text-[15px] font-medium transition-colors border border-transparent">
            <span>{dict.contactUs}</span>
            <FiArrowUpRight className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
