export interface ShowHistoryItem {
  id: string;
  venue: string;
  location: string;
  period: string; // e.g. "2006–2011" or "4 mai 2024" — most historical shows have no exact recorded date
  note?: string;
}

export interface MusicVideo {
  id: string;
  title: string;
  category: 'official' | 'behind_scenes';
  youtubeId: string;
  releaseYear: string;
  description: string;
}

export interface DiscographyTrack {
  trackNumber: number;
  title: string;
  duration: string;
  feature?: string;
}

export interface DiscographyItem {
  id: string;
  title: string;
  type: 'Album' | 'Single';
  year: string;
  label?: string;
  coverImage: string;
  bandcampUrl: string;
  tracks: DiscographyTrack[];
}

export interface BandMember {
  id: string;
  name: string;
  fullName?: string;
  role: string;
  era?: string; // for members tied to a specific album era (e.g. bassists)
}
