import { ShowHistoryItem, MusicVideo, DiscographyItem, BandMember } from '../types';
import coverEponyme from '../assets/images/cover-eponyme.jpg';
import coverTremor from '../assets/images/cover-tremor.jpg';

export const BAND_INFO = {
  name: 'OK VOLCA',
  tagline: 'METAL MÉLODIQUE /// SAINT-JEAN-SUR-RICHELIEU, QUÉBEC',
  bio: [
    "Avant d'être OK VOLCA, le quintette chantait en anglais sous le nom Haang Upps. Le virage vers le français a changé la donne : quelques titres ont grimpé au sommet des palmarès francophones sur MusiquePlus et sur les ondes de nombreuses radios indépendantes.",
    "Le premier album éponyme paraît en 2006 sous étiquette Slam Disques, suivi de Fréquence Trémor en 2011. Entre les deux, le groupe roule sa bosse à travers le Québec — du Rockfest de Montebello à Woodstock en Beauce, en passant par des salles mythiques comme les Foufounes Électriques et le Spectrum de Montréal.",
    "Puis, silence. Plus de dix ans passent. En mai 2024, OK VOLCA refait surface pour un retour remarqué au Festival Sève. La même année, le groupe boucle une boucle : un dernier concert avec Louis au chant, filmé à la boutique Rookery — une page qui se tourne après près de deux décennies de bruit et de fureur."
  ],
  highlights: [
    { value: '2', label: 'ALBUMS', detail: 'Éponyme (2006) & Fréquence Trémor (2011)' },
    { value: '#1', label: 'PALMARÈS MUSIQUEPLUS', detail: '« Facteur temps », 22 octobre 2011' },
    { value: '2006', label: 'FORMATION', detail: 'Sous le nom Haang Upps, virage français en 2006' }
  ]
};

export const SHOW_HISTORY: ShowHistoryItem[] = [
  {
    id: 'sh-1',
    venue: 'Rockfest de Montebello',
    location: 'Montebello, QC',
    period: '2006–2011',
  },
  {
    id: 'sh-2',
    venue: 'Woodstock en Beauce',
    location: 'Saint-Éphrem, QC',
    period: '2006–2011',
  },
  {
    id: 'sh-3',
    venue: 'Les Foufounes Électriques',
    location: 'Montréal, QC',
    period: '2006–2011',
  },
  {
    id: 'sh-4',
    venue: 'Le Spectrum de Montréal',
    location: 'Montréal, QC',
    period: '2006–2011',
  },
  {
    id: 'sh-5',
    venue: 'Festival Sève',
    location: 'Rookery, Saint-Jean-sur-Richelieu, QC',
    period: '4 mai 2024',
    note: 'Retour remarqué après plus de dix ans, et dernier concert avec Louis au chant.'
  }
];

export const MUSIC_VIDEOS: MusicVideo[] = [
  {
    id: 'mv-1',
    title: 'FACTEUR TEMPS',
    category: 'official',
    youtubeId: 'wc931KL4Cr0',
    releaseYear: '2011',
    description: "Vidéoclip officiel. Le titre a atteint la 1ʳᵉ position du palmarès MusiquePlus le 22 octobre 2011.",
  },
  {
    id: 'mv-2',
    title: 'PROBOPHOBIE',
    category: 'official',
    youtubeId: 'HOpByoCfAM4',
    releaseYear: '2011',
    description: "Vidéoclip officiel, tiré de l'album Fréquence Trémor.",
  },
  {
    id: 'mv-3',
    title: 'EN STUDIO AVEC OK VOLCA',
    category: 'behind_scenes',
    youtubeId: 'FcR3MHFcV2c',
    releaseYear: '2011',
    description: "Regard dans les coulisses de l'enregistrement du groupe.",
  }
];

export const DISCOGRAPHY: DiscographyItem[] = [
  {
    id: 'd-1',
    title: 'Éponyme',
    type: 'Album',
    year: '2006',
    label: 'Slam Disques',
    coverImage: coverEponyme,
    bandcampUrl: 'https://okvolca.bandcamp.com/album/ok-volca',
    tracks: [
      { trackNumber: 1, title: 'Fléau Destructeur', duration: '3:56' },
      { trackNumber: 2, title: 'Sans Raison', duration: '2:04' },
      { trackNumber: 3, title: 'Imaginaire Incontournable', duration: '2:43' },
      { trackNumber: 4, title: 'Lourd Silence', duration: '4:45' },
      { trackNumber: 5, title: 'D.R.E.V.E.C', duration: '4:03' },
      { trackNumber: 6, title: 'D-31', duration: '4:16' },
      { trackNumber: 7, title: "L'Ataraxie des Sang", duration: '4:28' },
      { trackNumber: 8, title: 'Statix', duration: '0:54' },
      { trackNumber: 9, title: 'Amnésie', duration: '4:16' },
      { trackNumber: 10, title: "L'Humanité Court au Suicide", duration: '2:13' },
      { trackNumber: 11, title: 'Diagnostic Tragique', duration: '5:41' },
      { trackNumber: 12, title: 'Industrie Hell', duration: '3:40' },
      { trackNumber: 13, title: 'Workoholique', duration: '6:53' },
    ]
  },
  {
    id: 'd-2',
    title: 'Fréquence Trémor',
    type: 'Album',
    year: '2011',
    label: 'Slam Disques',
    coverImage: coverTremor,
    bandcampUrl: 'https://okvolca.bandcamp.com/album/fr-quence-tr-mor',
    tracks: [
      { trackNumber: 1, title: 'Facteur temps', duration: '3:58' },
      { trackNumber: 2, title: 'Depuis des siècles et des siècles', duration: '3:34' },
      { trackNumber: 3, title: "Pluie d'automne", duration: '4:18' },
      { trackNumber: 4, title: 'Le plan Kevorkian', duration: '4:36', feature: 'Alex Erian (Despised Icon)' },
      { trackNumber: 5, title: 'S.D.F', duration: '1:42' },
      { trackNumber: 6, title: 'Parasomnolique', duration: '3:41' },
      { trackNumber: 7, title: 'Nos Jurons', duration: '1:08' },
      { trackNumber: 8, title: 'Volte-face', duration: '4:23' },
      { trackNumber: 9, title: 'Corps morts', duration: '3:04' },
      { trackNumber: 10, title: 'Probophobie', duration: '3:14' },
      { trackNumber: 11, title: "L'Éphémère", duration: '4:08' },
      { trackNumber: 12, title: 'QWERTY', duration: '4:15' },
    ]
  }
];

export const ALSO_NOTE = "En 2020, OK VOLCA et Haang Upps unissent leurs forces pour le titre « Ouvre toé les yeux ».";

export const BAND_MEMBERS: BandMember[] = [
  { id: 'bm-1', name: 'Louis', role: 'Chant' },
  { id: 'bm-2', name: 'Ben', fullName: 'Benoît Dunn', role: 'Chant, guitare' },
  { id: 'bm-3', name: 'Vinz', fullName: 'Vincent Larivière', role: 'Guitare, effets' },
  { id: 'bm-4', name: 'Doom', fullName: 'Dominic Benoît', role: 'Batterie' },
  { id: 'bm-5', name: 'Sebas', fullName: 'Sébastien Lemyre', role: 'Basse', era: 'Éponyme, 2006' },
  { id: 'bm-6', name: 'Pat', role: 'Basse', era: 'Fréquence Trémor, 2011' },
];

export const LINKS = {
  email: 'okvolca@gmail.com',
  bandcamp: 'https://okvolca.bandcamp.com/',
  facebook: 'https://www.facebook.com/okvolca',
  soundcloud: 'https://soundcloud.com/okvolca',
  spotify: 'https://open.spotify.com/artist/0KhW3m00dTKyDtyQvqHiT9',
};
