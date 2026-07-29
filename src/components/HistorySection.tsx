import React from 'react';
import { BAND_INFO } from '../data/bandData';

const TIMELINE = [
  { year: '2005–2006', label: 'Formation sous le nom Haang Upps, virage vers le français' },
  { year: '2006', label: 'Premier album éponyme, Slam Disques' },
  { year: '2011', label: 'Fréquence Trémor' },
  { year: '2020', label: '« Ouvre toé les yeux », avec Haang Upps' },
  { year: '2024', label: 'Retour au Festival Sève' },
];

export const HistorySection: React.FC = () => {
  return (
    <section id="histoire" className="py-20 md:py-28 border-b border-[#1f1f1d] bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 pb-6 border-b border-[#222220]">
          <span className="font-mono-code text-xs text-[#d2ff00] uppercase tracking-widest block mb-2">
            HISTOIRE
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
            Notre histoire
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5">
            {BAND_INFO.bio.map((p, idx) => (
              <p key={idx} className="font-sans-grotesk text-base text-[#b5b5b0] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-4">
            {TIMELINE.map((t) => (
              <div key={t.year} className="border-l-2 border-[#d2ff00] pl-4 py-1">
                <span className="font-display font-extrabold text-2xl text-white block">{t.year}</span>
                <span className="font-sans-grotesk text-sm text-[#a0a09a]">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
