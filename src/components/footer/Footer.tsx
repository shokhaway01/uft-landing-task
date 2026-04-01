import Image from 'next/image';
import { FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi';
import type { Dictionary } from '@/locales';
import Group from './../../assets/Group.png';

interface FooterProps {
  dict: Dictionary['footer'];
}

const Footer = ({ dict }: FooterProps) => {
  return (
    <footer className="w-full bg-[#061b14] text-white pt-10 pb-2 px-2 md:px-8">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-0 pb-5">

          {/* Logo & Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <Image src={Group} alt="Logo" className="h-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {dict.description}{' '}
              <span className="text-accent cursor-pointer hover:underline">{dict.viewMore}</span>
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-medium">{dict.contactTitle}</h3>
            <div className="text-gray-400 text-sm space-y-4">
              <p>{dict.address}</p>
              <p>{dict.phone}</p>
              <p>{dict.email}</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-medium">{dict.followTitle}</h3>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-hover transition-colors">
                <FiInstagram className="text-white text-lg" />
              </button>
              <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-hover transition-colors">
                <FiLinkedin className="text-white text-lg" />
              </button>
              <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent-hover transition-colors">
                <FiSend className="text-white text-lg" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 p-4">
          {dict.copyright}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
