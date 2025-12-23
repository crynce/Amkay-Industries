
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-display text-2xl font-black">A</div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">Amkay</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-400">
          <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#products" className="hover:text-red-500 transition-colors">Parts Catalog</a>
          <a href="#about" className="hover:text-red-500 transition-colors">Manufacturing</a>
          <a href="#assistant" className="hover:text-red-500 transition-colors">Consultant</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
          Enquire Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
