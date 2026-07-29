import React from 'react';
import { MusicVideo } from '../types';

interface VideoModalProps {
  video: MusicVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121210] border-2 border-[#d2ff00] max-w-4xl w-full p-4 sm:p-6 space-y-4 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">

        <div className="flex items-center justify-between pb-3 border-b border-[#2a2a26]">
          <div>
            <span className="bg-[#d2ff00] text-black font-mono-code font-bold text-[10px] px-2 py-0.5 uppercase">
              {video.category === 'official' ? 'Vidéoclip officiel' : 'Coulisses'}
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mt-1">
              {video.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-[#888880] hover:text-white font-mono-code text-xs p-1 cursor-pointer"
          >
            [ FERMER ✕ ]
          </button>
        </div>

        <div className="relative aspect-video bg-black border border-[#2a2a26] overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-sans-grotesk text-sm text-[#b0b0a8] border-t border-[#22221e] pt-3">
          {video.description}
        </p>

      </div>
    </div>
  );
};
