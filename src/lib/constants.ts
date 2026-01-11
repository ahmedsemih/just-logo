import { Preset } from "@/types";

export const AVAILABLE_ICON_SETS = [
  'lucide',
  'lucide-lab',
  'hugeicons',
  'tabler',
  'meteor-icons',
] as const;

export const EXPORT_ZONE_ID = 'export-zone';

export const STORAGE_KEYS = {
  ICON: 'just-logo-icon-state',
  BACKGROUND: 'just-logo-background-state',
  THEME: 'just-logo-theme'
} as const;

export const PRESETS: Preset[] = [
  {
    name: 'Default Light',
    icon: {
      strokeColor: '#000000',
      strokeOpacity: 100,
      fillColor: '#ffffff',
    },
    background: {
      background: '#ffffff',
      borderColor: '#000000',
    },
  },
  {
    name: 'Dark Mode',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#000000',
    },
    background: {
      background: '#000000',
      borderColor: '#ffffff',
    },
  },
  {
    name: 'Instagram',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#fcb045',
    },
    background: {
      background:
        'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
      borderColor: '#833ab4',
    },
  },
  {
    name: 'Sunset',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#ff6b6b',
    },
    background: {
      background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
      borderColor: '#fb923c',
    },
  },
  {
    name: 'Ocean Breeze',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#667eea',
    },
    background: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderColor: '#667eea',
    },
  },
  {
    name: 'Purple Haze',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#a855f7',
    },
    background: {
      background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      borderColor: '#a855f7',
    },
  },
  {
    name: 'Fresh Mint',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#11998e',
    },
    background: {
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      borderColor: '#11998e',
    },
  },
  {
    name: 'Warm Flame',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#ff0844',
    },
    background: {
      background: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
      borderColor: '#ff0844',
    },
  },
  {
    name: 'Sky Blue',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#2f80ed',
    },
    background: {
      background: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)',
      borderColor: '#2f80ed',
    },
  },
  {
    name: 'Minimal',
    icon: {
      strokeColor: '#555',
      strokeOpacity: 100,
      fillColor: '#f5f5f5',
    },
    background: {
      background: '#ffffff',
      borderColor: '#000000',
    },
  },
  {
    name: 'Moonlight',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#2c5364',
    },
    background: {
      background:
        'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      borderColor: '#2c5364',
    },
  },
  {
    name: 'Peach',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#ed4264',
    },
    background: {
      background: 'linear-gradient(135deg, #ed4264 0%, #ffedbc 100%)',
      borderColor: '#ed4264',
    },
  },
  {
    name: 'Emerald',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#348f50',
    },
    background: {
      background: 'linear-gradient(135deg, #348f50 0%, #56b4d3 100%)',
      borderColor: '#348f50',
    },
  },
  {
    name: 'Pink Bliss',
    icon: {
      strokeColor: '#ee9ca7',
      strokeOpacity: 100,
      fillColor: '#ffdde1',
    },
    background: {
      background: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
      borderColor: '#ee9ca7',
    },
  },
  {
    name: 'Autumn',
    icon: {
      strokeColor: '#7a7042',
      strokeOpacity: 100,
      fillColor: '#b0dab9',
    },
    background: {
      background: 'linear-gradient(135deg, #dad299 0%, #b0dab9 100%)',
      borderColor: '#dad299',
    },
  },
  {
    name: 'Arctic',
    icon: {
      strokeColor: '#1e3a8a',
      strokeOpacity: 100,
      fillColor: '#cfdef3',
    },
    background: {
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      borderColor: '#cfdef3',
    },
  },
  {
    name: 'Neon Life',
    icon: {
      strokeColor: '#029e99',
      strokeOpacity: 100,
      fillColor: '#029e99',
    },
    background: {
      background: 'linear-gradient(135deg, #b3ffab 0%, #12fff7 100%)',
      borderColor: '#029e99',
    },
  },
  {
    name: 'Bloody Mary',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#ff512f',
    },
    background: {
      background: 'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)',
      borderColor: '#ff512f',
    },
  },
  {
    name: 'Lemon Twist',
    icon: {
      strokeColor: '#166c19',
      strokeOpacity: 100,
      fillColor: '#24fe41',
    },
    background: {
      background: 'linear-gradient(135deg, #fdfc47 0%, #24fe41 100%)',
      borderColor: '#fdfc47',
    },
  },
  {
    name: 'Deep Space',
    icon: {
      strokeColor: '#ffffff',
      strokeOpacity: 100,
      fillColor: '#004e92',
    },
    background: {
      background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
      borderColor: '#004e92',
    },
  },
];