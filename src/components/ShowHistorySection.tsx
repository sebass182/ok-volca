import React from 'react';
import { SHOW_HISTORY } from '../data/bandData';
import { MapPin, Calendar } from 'lucide-react';
import bandLive from '../assets/images/band-live.jpg';
import bandPortrait from '../assets/images/band-portrait.jpg';

export const ShowHistorySection: React.FC = () => {
  return (
    <section id="scene" className="py-20 md:py-28 border-b border-[#1f1f1d] bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#222220] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#d2ff00]"></span>
              <span className="font-mono-code text-xs text-[#d2ff00] uppercase tracking-widest">
                SUR SCÈNE /// SALLES & FESTIVALS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Sur les planches
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="relative aspect-[4/3] overflow-hidden border border-[#262622] group">
            <img
              src={bandLive}
              alt="OK VOLCA en spectacle"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-black/90 border border-[#d2ff00] px-3 py-1.5">
              <p className="font-mono-code text-[10px] text-[#d2ff00] font-bold tracking-widest uppercase">OK VOLCA en spectacle</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-[#262622] group">
            <img
              src={bandPortrait}
              alt="Portrait du groupe OK VOLCA"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-black/90 border border-[#d2ff00] px-3 py-1.5">
              <p className="font-mono-code text-[10px] text-[#d2ff00] font-bold tracking-widest uppercase">Le groupe</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {SHOW_HISTORY.map((item) => (
            <div
              key={item.id}
              className="bg-[#121210] hover:bg-[#181815] border border-[#262622] hover:border-[#d2ff00] p-5 sm:p-6 transition-all duration-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group"
            >
              <div className="md:col-span-3 flex items-center gap-3">
                <div className="bg-[#1c1c1a] group-hover:bg-[#d2ff00] text-white group-hover:text-black p-3 font-mono-code text-center border border-[#33332e] group-hover:border-black transition-colors shrink-0">
                  <Calendar className="w-4 h-4 mx-auto" />
                </div>
                <p className="font-mono-code text-xs font-bold text-white tracking-wider">
                  {item.period}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#d2ff00] transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d2ff00] shrink-0" />
                  {item.venue}
                </h3>
                <p className="font-mono-code text-xs text-[#b0b0a8] mt-0.5">
                  {item.location}
                </p>
                {item.note && (
                  <p className="font-sans-grotesk text-xs text-[#888880] mt-1.5 max-w-2xl">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
