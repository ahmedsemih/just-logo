import { createContext, useContext, ReactNode } from 'react';

import { STORAGE_KEYS } from '@/lib/constants';
import { useLocalStorage } from '@/hooks/use-local-storage';
import type { BackgroundSettings, IconSettings } from '@/types';
import { useTheme } from '@/components/providers/theme-provider';

const getDefaultIconSettings = (isLightMode: boolean): IconSettings => ({
  icon: null,
  size: 128,
  rotate: 0,
  strokeColor: isLightMode ? '#000' : '#fff',
  strokeWidth: 2,
  strokeOpacity: 100,
  fillOpacity: 0,
  fillColor: isLightMode ? '#fff' : '#000',
});

const getDefaultBackgroundSettings = (
  isLightMode: boolean,
): BackgroundSettings => ({
  background: 'transparent',
  margin: 0,
  borderRadius: 0,
  borderWidth: 0,
  borderColor: isLightMode ? '#000' : '#fff',
});

type EditorContextType = {
  iconSettings: IconSettings;
  updateIconSettings: (updates: Partial<IconSettings>) => void;
  backgroundSettings: BackgroundSettings;
  updateBackgroundSettings: (updates: Partial<BackgroundSettings>) => void;
  resetSettings: () => void;
  defaultIconSettings: IconSettings;
  defaultBackgroundSettings: BackgroundSettings;
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const defaultIconSettings = getDefaultIconSettings(theme === 'light');
  const defaultBackgroundSettings = getDefaultBackgroundSettings(
    theme === 'light',
  );

  const [iconSettings, setIconSettings] = useLocalStorage<IconSettings>(
    STORAGE_KEYS.ICON,
    defaultIconSettings,
    500,
  );
  const [backgroundSettings, setBackgroundSettings] =
    useLocalStorage<BackgroundSettings>(
      STORAGE_KEYS.BACKGROUND,
      defaultBackgroundSettings,
      500,
    );

  const updateIconSettings = (updates: Partial<IconSettings>) => {
    setIconSettings((prev) => ({ ...prev, ...updates }));
  };

  const updateBackgroundSettings = (updates: Partial<BackgroundSettings>) => {
    setBackgroundSettings((prev) => ({ ...prev, ...updates }));
  };

  const resetSettings = () => {
    setIconSettings(defaultIconSettings);
    setBackgroundSettings(defaultBackgroundSettings);
  };

  return (
    <EditorContext.Provider
      value={{
        iconSettings,
        updateIconSettings,
        backgroundSettings,
        updateBackgroundSettings,
        resetSettings,
        defaultIconSettings,
        defaultBackgroundSettings,
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
