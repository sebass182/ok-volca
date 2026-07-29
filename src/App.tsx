import React, { useState } from 'react';
import { Header } from './components/Header';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { HistorySection } from './components/HistorySection';
import { ShowHistorySection } from './components/ShowHistorySection';
import { MusicVideosSection } from './components/MusicVideosSection';
import { DiscographySection } from './components/DiscographySection';
import { BandSection } from './components/BandSection';
import { ContactSection } from './components/ContactSection';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';

import { MusicVideo } from './types';
import { MUSIC_VIDEOS } from './data/bandData';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<MusicVideo | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // Header height compensation
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f2f2f0] font-sans-grotesk overflow-x-hidden selection:bg-[#d2ff00] selection:text-black">

      <Header onScrollToSection={handleScrollToSection} />

      <main>
        <Hero
          onExplore={() => handleScrollToSection('discographie')}
          onWatchVideo={() => setSelectedVideo(MUSIC_VIDEOS[0])}
        />

        <MarqueeBanner />

        <Highlights />

        <HistorySection />
        <ShowHistorySection />

        <MusicVideosSection onSelectVideo={(video) => setSelectedVideo(video)} />

        <DiscographySection />

        <BandSection />

        <ContactSection />
      </main>

      <Footer onScrollToSection={handleScrollToSection} />

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />

    </div>
  );
}
