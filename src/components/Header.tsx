import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HISTOIRE', sectionId: 'histoire' },
    { label: 'DISCOGRAPHIE', sectionId: 'discographie' },
    { label: 'VIDÉOS', sectionId: 'videos' },
    { label: 'MEMBRES', sectionId: 'membres' },
    { label: 'SUR SCÈNE', sectionId: 'scene' },
    { label: 'CONTACT', sectionId: 'contact' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#090909]/95 backdrop-blur-md border-[#222220] py-3 shadow-2xl'
          : 'bg-[#0c0c0c] border-[#1f1f1d] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          onClick={() => onScrollToSection('hero')}
          className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
        >
          <div className="bg-[#d2ff00] text-black p-1.5 font-black text-xl tracking-tighter flex items-center justify-center border border-black group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 fill-black stroke-black" />
          </div>
          <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tighter text-white group-hover:text-[#d2ff00] transition-colors">
            OK VOLCA
          </span>
        </button>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => onScrollToSection(item.sectionId)}
              className="text-xs font-mono-code tracking-widest text-[#a0a09e] hover:text-[#d2ff00] transition-colors uppercase cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onScrollToSection('contact')}
            className="bg-[#d2ff00] hover:bg-[#c1ea00] text-black font-mono-code font-bold text-xs tracking-wider px-4 sm:px-5 py-2 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <span>CONTACT</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#d2ff00] cursor-pointer"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#252522] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => {
                onScrollToSection(item.sectionId);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left font-display font-bold text-lg text-white hover:text-[#d2ff00] py-2 border-b border-[#181816] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
