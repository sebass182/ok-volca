import React, { useState } from 'react';
import { MusicVideo } from '../types';
import { MUSIC_VIDEOS } from '../data/bandData';
import { Play, ArrowUpRight, Flame } from 'lucide-react';

interface MusicVideosProps {
  onSelectVideo: (video: MusicVideo) => void;
}

export const MusicVideosSection: React.FC<MusicVideosProps> = ({ onSelectVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'TOUT' },
    { id: 'official', label: 'VIDÉOCLIPS OFFICIELS' },
    { id: 'behind_scenes', label: 'DANS LES COULISSES' }
  ];

  const filteredVideos = MUSIC_VIDEOS.filter((v) =>
    activeCategory === 'all' || v.category === activeCategory
  );

  return (
    <section id="videos" className="py-20 md:py-28 border-b border-[#1f1f1d] bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#181815] border border-[#2e2e2a] px-3 py-1 font-mono-code text-xs text-[#d2ff00] uppercase mb-4">
            <Flame className="w-3.5 h-3.5 fill-[#d2ff00]" />
            VIDÉOS
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none mb-6">
            Vidéoclips & coulisses
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-mono-code text-xs tracking-wider uppercase px-4 py-2.5 border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d2ff00] text-black border-[#d2ff00] font-bold shadow-[0_2px_10px_rgba(210,255,0,0.3)]'
                  : 'bg-[#121210] text-[#a0a09e] border-[#2a2a26] hover:border-white hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="bg-[#121210] border border-[#282824] hover:border-[#d2ff00] group cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                    <div className="bg-[#d2ff00] text-black p-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-6 h-6 fill-black" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 bg-[#d2ff00] text-black font-mono-code font-bold text-[10px] px-2 py-0.5">
                    {video.releaseYear}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <span className="uppercase text-xs font-mono-code text-[#d2ff00] font-bold block">
                    {video.category === 'official' ? 'Vidéoclip officiel' : 'Coulisses'}
                  </span>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#d2ff00] transition-colors leading-tight">
                    {video.title}
                  </h3>

                  <p className="font-sans-grotesk text-xs text-[#a0a09a] line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-[#22221e] bg-[#0e0e0c] flex items-center justify-between font-mono-code text-xs text-white group-hover:text-[#d2ff00] transition-colors">
                <span>REGARDER SUR YOUTUBE</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
