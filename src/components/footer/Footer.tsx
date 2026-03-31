import React from 'react';
import { FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi';
import Group from './../../assets/Group.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#061b14] text-white pt-20 pb-8 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16 border-b border-gray-800 pb-16">
          
          {/* Logo & Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-wider">
                <img src={Group} alt="Logo" />
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Dream Home is a gated community with a great location. Located downtown, you're within walking distance of Parks, and the... <span className="text-accent cursor-pointer hover:underline">View More</span>
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-medium">Contact Us</h3>
            <div className="text-gray-400 text-sm space-y-4">
              <p>Deam home villas San Diego, CA, USA</p>
              <p>025-777-3067</p>
              <p>info@dreamhome.com</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-medium">Follow Us</h3>
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
        <div className="text-center text-xs text-gray-500 pb-4">
          © 2026 Shokhway | All Rights Reserved. Adapted for Power Build Construction.
        </div>

      </div>
    </footer>
  );
};

export default Footer;