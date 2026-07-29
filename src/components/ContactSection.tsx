import React from 'react';
import { Mail } from 'lucide-react';
import { LINKS } from '../data/bandData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 border-b border-[#1f1f1d] bg-[#0f0f0d] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
          Contact
        </h2>

        <p className="font-sans-grotesk text-base text-[#b0b0a8] max-w-xl mx-auto">
          Bookings, presse, ou juste pour jaser.
        </p>

        <a
          href={`mailto:${LINKS.email}`}
          className="inline-flex items-center gap-3 bg-[#d2ff00] hover:bg-[#c2eb00] text-black font-mono-code font-extrabold text-sm tracking-wider px-8 py-4 uppercase transition-transform hover:scale-105 active:scale-95"
        >
          <Mail className="w-4 h-4" />
          {LINKS.email}
        </a>

      </div>
    </section>
  );
};
