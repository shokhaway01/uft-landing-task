import { FiArrowUpRight } from 'react-icons/fi';
import type { Dictionary } from '@/locales';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  dict: {
    header: Dictionary['header'];
    common: Dictionary['common'];
  };
  lang: string;
}

const Header = ({ dict, lang }: HeaderProps) => {
  return (
    <header className="w-full pb-3 pt-3 px-4 md:px-8 bg-white fixed top-0 z-50">
      <div className="max-w-[1452px] mx-auto flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="text-xl md:text-[26px] md:flex gap-5 font-semibold text-primary-dark tracking-tight">
          <a href="#home" className="hover:text-primary-dark transition-colors">
            {dict.common.brand}
          </a>
          <nav className="hidden lg:flex items-center space-x-10 text-[15px] font-semibold text-[#4B5563]">
            <a href="#home" className="hover:text-primary-dark transition-colors">{dict.header.navHome}</a>
            <a href="#about" className="hover:text-primary-dark transition-colors">{dict.header.navAbout}</a>
            <a href="#projects" className="hover:text-primary-dark transition-colors">{dict.header.navProjects}</a>
            <a href="#services" className="hover:text-primary-dark transition-colors">{dict.header.navServices}</a>
          </nav>
        </div>

        {/* CTA + Language */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher currentLang={lang} />
          <a href="#contact" className="flex items-center space-x-2 bg-primary-dark hover:bg-primary-light text-white px-6 py-2 rounded-full text-[15px] font-medium transition-colors border border-transparent text-sm">
            <span>{dict.header.contactUs}</span>
            <FiArrowUpRight className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

// Component is exported as default for use in other parts of the application
export default Header;
