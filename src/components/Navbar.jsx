import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/places', label: 'Places' },
    { to: '/about', label: 'About' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                : 'bg-white/20'
            }`}>
              <MapPin size={20} className="text-white" />
            </div>
            <span className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-900' 
                : 'text-white'
            } group-hover:scale-105`}>
              Travel Buddy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-lg font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-white'
                }`}></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <button onClick={() => navigate('/BookNow')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white hover:text-gray-900 backdrop-blur-sm'
            }`}>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-4 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-lg rounded-b-lg' 
              : 'bg-black/20 backdrop-blur-sm rounded-b-lg'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                } rounded-lg mx-2`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-2 pt-2">
              <button className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white hover:text-gray-900 backdrop-blur-sm'
              }`}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}