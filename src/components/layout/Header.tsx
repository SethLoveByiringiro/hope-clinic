'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12">
                <img 
                  src="/logo.jpg" 
                  alt="Hope Integrated Clinic Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-sm sm:text-lg font-bold text-gray-900">HOPE INTEGRATED CLINIC</h1>
                <p className="text-xs text-gray-600 hidden sm:block">One step at a time</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/appointment" 
              className="bg-teal-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-teal-700 hover:scale-105 transition-all duration-300 font-medium text-sm lg:text-base"
            >
              BOOK APPOINTMENT
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 transition-colors p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
              <Link 
                href="/" 
                className="block px-3 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/appointment" 
                className="block px-3 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 font-medium text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
