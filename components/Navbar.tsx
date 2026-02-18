
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Fixed: Added missing Lock import from lucide-react to avoid collision with global Lock type
import { Menu, X, ChevronDown, Download, GraduationCap, Lock } from 'lucide-react';
import logo from '../images/logo.png';
import { SCHOOL_NAME } from '../constants';

interface NavbarProps {
  onOpenYearbook: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenYearbook }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Primary School', path: '/primary' },
    { label: 'Secondary School', path: '/secondary' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-navy text-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
  <img
    src={logo}
    alt={`${SCHOOL_NAME} logo`}
    className="h-full w-full object-contain"
  />
</div>

            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>
                {SCHOOL_NAME}
              </span>
              <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                Ikorodu, Lagos
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold hover:opacity-70 transition-opacity ${location.pathname === link.path ? (isScrolled ? 'text-blue-900 border-b-2 border-blue-900' : 'text-white border-b-2 border-white') : (isScrolled ? 'text-gray-700' : 'text-white')}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Downloads Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`flex items-center gap-1 text-sm font-semibold transition-opacity ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Downloads <ChevronDown size={16} />
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <Download size={16} className="text-navy" />
                    <span>Primary School Bill</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <Download size={16} className="text-navy" />
                    <span>Secondary School Bill</span>
                  </a>
                  <button 
                    onClick={() => {
                      onOpenYearbook();
                      setIsDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                  >
                    <Download size={16} className="text-yellow-600" />
                    <span>Year Book (Protected)</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} className={isScrolled ? 'text-navy' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-navy' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-2xl absolute top-0 left-0 w-full min-h-screen z-50 animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-6 pb-12 space-y-4">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center gap-2">
                <GraduationCap size={24} className="text-navy" />
                <span className="text-lg font-bold text-navy">{SCHOOL_NAME}</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)}><X size={28} /></button>
            </div>
            
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Downloads</p>
                <a href="#" className="block py-2 text-gray-700 font-medium">Primary School Bill (PDF)</a>
                <a href="#" className="block py-2 text-gray-700 font-medium">Secondary School Bill (PDF)</a>
                <button 
                  onClick={() => {
                    onOpenYearbook();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-navy font-bold flex items-center gap-2"
                >
                  <Lock size={16} /> Digital Year Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
