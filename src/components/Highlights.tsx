import React from 'react';
import { BAND_INFO } from '../data/bandData';

export const Highlights: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-b border-[#1f1f1d] bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="font-mono-code text-xs text-[#d2ff00] tracking-widest uppercase mb-2">
            EN BREF
          </p>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
            L'histoire en chiffres
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BAND_INFO.highlights.map((h, idx) => (
            <div
              key={h.label}
              className={`p-8 border flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1 ${
                idx === 1
                  ? 'bg-[#d2ff00] text-black border-black shadow-[0_10px_30px_rgba(210,255,0,0.2)]'
                  : 'bg-[#f5f5f2] text-black border-white'
              }`}
            >
              <p className={`font-sans-grotesk text-sm leading-relaxed max-w-xs ${idx === 1 ? 'font-bold' : 'font-medium text-[#333330]'}`}>
                {h.detail}
              </p>
              <div className={`mt-8 pt-4 border-t ${idx === 1 ? 'border-black/20' : 'border-black/10'}`}>
                <span className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight block">
                  {h.value}
                </span>
                <span className={`font-mono-code text-xs uppercase tracking-widest ${idx === 1 ? 'font-bold text-black/80' : 'text-[#555550]'}`}>
                  {h.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
