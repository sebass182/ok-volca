import React from 'react';
import { BAND_INFO, LINKS } from '../data/bandData';
import { ArrowDownLeft, Disc3, Facebook, Music, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const socials = [
    { name: 'BANDCAMP', icon: Disc3, href: LINKS.bandcamp },
    { name: 'SPOTIFY', icon: Music, href: LINKS.spotify },
    { name: 'FACEBOOK', icon: Facebook, href: LINKS.facebook },
    { name: 'SOUNDCLOUD', icon: Music, href: LINKS.soundcloud },
  ];

  return (
    <footer className="bg-[#090909] text-white pt-16 border-t border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-[#22221e]">
          <div className="flex flex-wrap gap-6 sm:gap-8 font-mono-code text-xs tracking-widest text-[#a0a09e] uppercase">
            <button onClick={() => onScrollToSection('hero')} className="hover:text-[#d2ff00] cursor-pointer">Accueil</button>
            <button onClick={() => onScrollToSection('histoire')} className="hover:text-[#d2ff00] cursor-pointer">Histoire</button>
            <button onClick={() => onScrollToSection('discographie')} className="hover:text-[#d2ff00] cursor-pointer">Discographie</button>
            <button onClick={() => onScrollToSection('membres')} className="hover:text-[#d2ff00] cursor-pointer">Membres</button>
            <button onClick={() => onScrollToSection('contact')} className="hover:text-[#d2ff00] cursor-pointer">Contact</button>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141412] hover:bg-[#d2ff00] text-[#a0a09a] hover:text-black border border-[#2e2e2a] hover:border-black font-mono-code text-[11px] px-3 py-1.5 flex items-center gap-1.5 transition-colors"
              >
                <s.icon className="w-3.5 h-3.5" />
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-baseline justify-between gap-6">
          <h2 className="font-display font-extrabold text-6xl sm:text-8xl lg:text-9xl tracking-tighter uppercase text-white leading-none">
            OK VOLCA
          </h2>
          <div className="p-4 bg-[#d2ff00] text-black shrink-0 hidden md:block border border-black">
            <ArrowDownLeft className="w-12 h-12 stroke-[2.5]" />
          </div>
        </div>

        <p className="font-sans-grotesk text-sm text-[#888880] max-w-xl pb-8">
          {BAND_INFO.tagline}
        </p>

      </div>

      <div className="bg-[#d2ff00] text-black font-mono-code font-bold text-xs py-4 px-4 sm:px-8 border-t border-black selection:bg-black selection:text-[#d2ff00]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 OK VOLCA</span>
          <span className="uppercase flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Saint-Jean-sur-Richelieu, QC
          </span>
        </div>
      </div>
    </footer>
  );
};
