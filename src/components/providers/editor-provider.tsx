import { createContext, useState, useContext, ReactNode } from 'react';

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

export type EditorContextType = {
  iconSettings: IconSettings;
  updateIconSettings: (updates: Partial<IconSettings>) => void;
  backgroundSettings: BackgroundSettings;
  updateBackgroundSettings: (updates: Partial<BackgroundSettings>) => void;
  resetSettings: () => void;
};

export const DEFAULT_ICON_SETTINGS: IconSettings = {
  icon: null,
  size: 128,
  rotate: 0,
  strokeColor: '#fff',
  strokeWidth: 2,
  strokeOpacity: 100,
  fillOpacity: 0,
  fillColor: '#fff',
};

export const DEFAULT_BACKGROUND_SETTINGS: BackgroundSettings = {
  background: 'transparent',
  margin: 0,
  borderRadius: 0,
  borderWidth: 0,
  borderColor: '#fff',
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [iconSettings, setIconSettings] = useState<IconSettings>(
    DEFAULT_ICON_SETTINGS,
  );

  const [backgroundSettings, setBackgroundSettings] =
    useState<BackgroundSettings>(DEFAULT_BACKGROUND_SETTINGS);

  const updateIconSettings = (updates: Partial<IconSettings>) => {
    setIconSettings((prev) => ({ ...prev, ...updates }));
  };

  const updateBackgroundSettings = (updates: Partial<BackgroundSettings>) => {
    setBackgroundSettings((prev) => ({ ...prev, ...updates }));
  };

  const resetSettings = () => {
    setIconSettings(DEFAULT_ICON_SETTINGS);
    setBackgroundSettings(DEFAULT_BACKGROUND_SETTINGS);
  };

  return (
    <EditorContext.Provider
      value={{
        iconSettings,
        updateIconSettings,
        backgroundSettings,
        updateBackgroundSettings,
        resetSettings,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }

  return context;
};
