import { FiArrowUpRight } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="w-full pb-5 pt-8 px-4 md:px-8 bg-white fixed top-0 z-50">
      <div className="max-w-[1352px] mx-auto flex  items-center justify-between">
        {/* Logo */}
        <div className="text-xl md:text-[26px] md:flex gap-5 font-semibold text-primary-dark tracking-tight">
          <div>
          Power Build Construction
          </div>
        <nav className="hidden lg:flex items-center space-x-10 text-[15px] font-semibold text-[#4B5563]">
          <a href="#home" className="hover:text-primary-dark transition-colors">Home</a>
          <a href="#about" className="hover:text-primary-dark transition-colors">About Us</a>
          <a href="#projects" className="hover:text-primary-dark transition-colors">Projects</a>
          <a href="#services" className="hover:text-primary-dark transition-colors">Services</a>
        </nav>
        </div>

        {/* Navigation - hidden on mobile */}

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
            <select className='px-4 py-2 bg-white border border-gray-300 rounded-full text-[14px] font-medium text-[#4B5563] hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 transition-all cursor-pointer appearance-none shadow-sm hover:shadow-md'>
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="uz">O'zbekcha</option>
            </select>
          <button className="flex items-center space-x-2 bg-primary-dark hover:bg-primary-light text-white px-6 py-3 rounded-full text-[15px] font-medium transition-colors border border-transparent">
          <span>Contact Us</span>
          <FiArrowUpRight className="text-xl" />
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
