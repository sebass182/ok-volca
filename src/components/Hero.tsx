import React from 'react';
import { Play, ArrowUpRight, Disc3, Music2 } from 'lucide-react';
import { LINKS } from '../data/bandData';
import bandLive from '../assets/images/band-live.jpg';

interface HeroProps {
  onExplore: () => void;
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onWatchVideo }) => {
  const platforms = [
    { name: 'Bandcamp', href: LINKS.bandcamp, icon: Disc3 },
    { name: 'Spotify', href: LINKS.spotify, icon: Music2 },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-4 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#d2ff00] animate-pulse"></span>
          <p className="font-mono-code text-xs sm:text-sm text-[#a0a09e] uppercase tracking-widest">
            SITE OFFICIEL /// METAL MÉLODIQUE /// SAINT-JEAN-SUR-RICHELIEU, QC
          </p>
        </div>

        <div className="mb-12">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-9xl tracking-tighter text-white uppercase leading-[0.88] select-none">
            OK VOLCA
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-6 space-y-8">

            <div className="grid grid-cols-2 gap-3 max-w-xs">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#141412] border border-[#2a2a26] p-3 text-center transition-all duration-300 hover:border-[#d2ff00] hover:-translate-y-1"
                >
                  <p className="font-mono-code text-xs font-bold text-[#e0e0dc] tracking-wider uppercase flex items-center justify-center gap-1.5">
                    <p.icon className="w-3.5 h-3.5 text-[#d2ff00]" />
                    {p.name}
                  </p>
                </a>
              ))}
            </div>

            <p className="font-sans-grotesk text-base sm:text-lg text-[#b5b5b0] leading-relaxed">
              Deux décennies de bruit et de fureur&nbsp;: de <span className="text-white font-bold uppercase">Haang Upps</span> à OK VOLCA, en passant par un{' '}
              <span className="text-white font-bold uppercase underline decoration-[#d2ff00] decoration-2">retour au sommet des palmarès MusiquePlus</span>{' '}
              et un retour remarqué au Festival Sève en 2024.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                id="hero-explore-btn"
                className="bg-[#d2ff00] hover:bg-[#c2eb00] text-black font-mono-code font-extrabold text-sm tracking-wider px-7 py-4 flex items-center gap-3 border border-black cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(210,255,0,0.25)]"
              >
                <span>LA DISCOGRAPHIE</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={onWatchVideo}
                id="hero-watch-video-btn"
                className="bg-[#121210] hover:bg-[#1a1a18] text-white border border-[#383834] hover:border-[#d2ff00] font-mono-code font-bold text-sm tracking-wider px-7 py-4 flex items-center gap-3 cursor-pointer transition-colors"
              >
                <span>REGARDER</span>
                <Play className="w-4 h-4 fill-[#d2ff00] text-[#d2ff00]" />
              </button>
            </div>

            <div className="pt-4 border-t border-[#1e1e1c] grid grid-cols-2 gap-4 font-mono-code text-xs text-[#888882]">
              <div>
                <span className="block text-[#d2ff00] font-bold">DERNIER ALBUM :</span>
                Fréquence Trémor (2011)
              </div>
              <div>
                <span className="block text-[#d2ff00] font-bold">RETOUR EN 2024 :</span>
                Festival Sève, Saint-Jean-sur-Richelieu
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              <div className="relative bg-[#141412] border-2 border-[#2b2b27] p-2 overflow-hidden shadow-2xl group">
                <div className="overflow-hidden relative aspect-[3/4]">
                  <img
                    src={bandLive}
                    alt="OK VOLCA en spectacle"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute bottom-4 left-4 bg-black/90 border border-[#d2ff00] p-3 backdrop-blur-md">
                    <p className="font-mono-code text-xs text-[#d2ff00] font-bold tracking-widest uppercase">
                      OK VOLCA EN SPECTACLE
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#d2ff00]/30 -z-10 pointer-events-none hidden sm:block"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
