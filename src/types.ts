import { AVAILABLE_ICON_SETS } from '@/lib/constants';

export type IconSet = (typeof AVAILABLE_ICON_SETS)[number];

export type IconItem = {
  name: string;
  set: string;
  body: string;
};

export type IconSettings = {
  icon: IconItem | null;
  size: number;
  rotate: number;
  strokeColor: string;
  strokeOpacity: number;
  strokeWidth: number;
  fillColor: string;
  fillOpacity: number;
};

export type BackgroundSettings = {
  background: string;
  margin: number;
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
};

export type Preset = {
  name: string;
  icon: {
    strokeColor: IconSettings['strokeColor'];
    strokeOpacity: IconSettings['strokeOpacity'];
    fillColor: IconSettings['fillColor'];
  };
  background: {
    background: BackgroundSettings['background'];
    borderColor: BackgroundSettings['borderColor'];
  };
};
