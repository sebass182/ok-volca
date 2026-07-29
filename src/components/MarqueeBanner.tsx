import React from 'react';
import { Flame } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'OK VOLCA',
    'METAL MÉLODIQUE',
    'SAINT-JEAN-SUR-RICHELIEU, QC',
    'ÉPONYME (2006)',
    'FRÉQUENCE TRÉMOR (2011)',
    '#1 PALMARÈS MUSIQUEPLUS',
    'RETOUR AU FESTIVAL SÈVE 2024',
    'DEPUIS 2006'
  ];

  return (
    <div className="bg-[#d2ff00] text-black overflow-hidden py-3 border-y border-black font-mono-code font-bold text-xs sm:text-sm tracking-widest uppercase selection:bg-black selection:text-[#d2ff00]">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="hover:underline cursor-default">{text}</span>
            <Flame className="w-4 h-4 text-black fill-black shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
