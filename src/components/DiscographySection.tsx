import React, { useState } from 'react';
import { DISCOGRAPHY, ALSO_NOTE } from '../data/bandData';
import { DiscographyItem } from '../types';
import { Disc3, ExternalLink, Sparkles } from 'lucide-react';

export const DiscographySection: React.FC = () => {
  const [selectedRelease, setSelectedRelease] = useState<DiscographyItem>(DISCOGRAPHY[0]);

  return (
    <section id="discographie" className="py-20 md:py-28 border-b border-[#1f1f1d] bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222220] gap-6">
          <div>
            <span className="font-mono-code text-xs text-[#d2ff00] uppercase tracking-widest block mb-2">
              DISCOGRAPHIE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
              Nos albums
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 space-y-4">
            {DISCOGRAPHY.map((release) => {
              const isSelected = selectedRelease.id === release.id;
              return (
                <div
                  key={release.id}
                  onClick={() => setSelectedRelease(release)}
                  className={`p-6 border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#181815] border-[#d2ff00] translate-x-2'
                      : 'bg-[#121210] border-[#22221e] hover:border-[#44443e]'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono-code font-extrabold text-2xl tracking-tighter ${
                      isSelected ? 'text-[#d2ff00]' : 'text-[#666660]'
                    }`}>
                      {release.year}
                    </span>

                    <div>
                      <h3 className={`font-display font-bold text-xl uppercase transition-colors ${
                        isSelected ? 'text-white' : 'text-[#b0b0a8] group-hover:text-white'
                      }`}>
                        {release.title}
                      </h3>
                      <p className="font-mono-code text-xs text-[#777770] uppercase">
                        {release.label} /// {release.tracks.length} PISTES
                      </p>
                    </div>
                  </div>

                  <div className={`p-2 border transition-colors ${
                    isSelected ? 'bg-[#d2ff00] text-black border-[#d2ff00]' : 'bg-[#1c1c1a] text-[#888880] border-[#33332e]'
                  }`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              );
            })}

            <p className="font-sans-grotesk text-xs text-[#888880] pt-2 leading-relaxed">
              {ALSO_NOTE}
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#141412] border-2 border-[#2a2a26] p-6 sm:p-8 space-y-8">

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative w-48 sm:w-56 aspect-square shrink-0 border border-[#383834] overflow-hidden group shadow-2xl">
                <img
                  src={selectedRelease.coverImage}
                  alt={selectedRelease.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left flex-1">
                <div className="inline-block bg-[#1f1f1c] border border-[#33332e] text-[#d2ff00] font-mono-code text-xs px-3 py-1">
                  {selectedRelease.label} · {selectedRelease.year}
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  {selectedRelease.title}
                </h3>

                <a
                  href={selectedRelease.bandcampUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#d2ff00] hover:bg-[#c2eb00] text-black font-mono-code font-bold text-xs px-4 py-2.5 tracking-wider uppercase items-center gap-2 transition-transform hover:scale-105 active:scale-95"
                >
                  <Disc3 className="w-4 h-4" />
                  ÉCOUTER SUR BANDCAMP
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="border-t border-[#262622] pt-6 space-y-2">
              {selectedRelease.tracks.map((track) => (
                <div
                  key={track.trackNumber}
                  className="p-3 border font-mono-code text-xs flex items-center justify-between bg-[#181816] text-[#e0e0dc] border-[#282824]"
                >
                  <span>
                    {String(track.trackNumber).padStart(2, '0')}. {track.title}
                    {track.feature && (
                      <span className="text-[#888880] normal-case"> (feat. {track.feature})</span>
                    )}
                  </span>
                  <span className="text-[#888880]">{track.duration}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
