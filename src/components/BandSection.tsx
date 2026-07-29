import React from 'react';
import { BAND_MEMBERS } from '../data/bandData';

export const BandSection: React.FC = () => {
  return (
    <section id="membres" className="py-20 md:py-28 border-b border-[#1f1f1d] bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 pb-6 border-b border-[#222220] max-w-2xl">
          <span className="font-mono-code text-xs text-[#d2ff00] uppercase tracking-widest block mb-2">
            SAINT-JEAN-SUR-RICHELIEU, QUÉBEC
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
            Les membres
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BAND_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#121210] border border-[#262622] hover:border-[#d2ff00] p-6 group transition-all duration-300 flex items-center gap-5"
            >
              <div className="w-16 h-16 shrink-0 rounded-full border-2 border-[#d2ff00] flex items-center justify-center font-display font-black text-2xl text-[#d2ff00]">
                {member.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-[#d2ff00] transition-colors uppercase tracking-tight">
                  {member.name}
                </h3>
                {member.fullName && (
                  <p className="font-mono-code text-[10px] text-[#666660] uppercase">{member.fullName}</p>
                )}
                <p className="font-mono-code text-[11px] text-[#a0a09a] uppercase tracking-wider mt-1">
                  {member.role}
                </p>
                {member.era && (
                  <p className="font-mono-code text-[10px] text-[#666660] uppercase mt-0.5">{member.era}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
