
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';
import { SCHOOL_NAME, SCHOOL_ADDRESS, SCHOOL_PHONE, SCHOOL_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Info Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-white text-navy p-2 rounded-lg">
              <GraduationCap size={28} />
            </div>
            <span className="text-xl font-bold">{SCHOOL_NAME}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading the way in premium private education in Ikorodu. We nurture excellence, character, and global citizenship in every student.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-400 shrink-0" />
              <span>{SCHOOL_ADDRESS}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-blue-400 shrink-0" />
              <span>{SCHOOL_PHONE}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-blue-400 shrink-0" />
              <span>{SCHOOL_EMAIL}</span>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#/about" className="hover:text-white transition-colors">About Mike-Jane Academy</a></li>
            <li><a href="#/primary" className="hover:text-white transition-colors">Primary Curriculum</a></li>
            <li><a href="#/secondary" className="hover:text-white transition-colors">Secondary Curriculum</a></li>
            <li><a href="#/gallery" className="hover:text-white transition-colors">Campus Gallery</a></li>
            <li><a href="#/careers" className="hover:text-white transition-colors">Job Openings</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay updated with school news and events.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg outline-none w-full focus:border-blue-400 transition-colors"
            />
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-r-lg transition-colors font-bold">Join</button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. All Rights Reserved. Excellence in Education.</p>
      </div>
    </footer>
  );
};

export default Footer;
