import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import Logo from '../assets/great-india-steels-logo.jpeg'; // ✅ Import your logo

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Quality', path: '/quality' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="Great India Steels Logo"
                className="w-16 h-16 object-contain rounded-full shadow-md hover:scale-105 transform transition-transform"
              />
              <span className="text-white text-xl font-bold tracking-tight">
                Great India Steels
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/enquiry"
              className="ml-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/enquiry"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-md text-base font-medium hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-md mt-4"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
