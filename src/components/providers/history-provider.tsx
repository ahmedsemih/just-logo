import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import { useDebounce } from '@/hooks/use-debounce';
import type { BackgroundSettings, IconSettings } from '@/types';
import { useEditor } from '@/components/providers/editor-provider';

type HistoryState = {
  iconSettings: IconSettings;
  backgroundSettings: BackgroundSettings;
};

type HistoryContextType = {
  canUndo: boolean;
  canRedo: boolean;
  undo: () => HistoryState | null;
  redo: () => HistoryState | null;
  pushState: (state: HistoryState) => void;
  clearHistory: () => void;
};

const MAX_HISTORY_SIZE = 50;

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const { iconSettings, backgroundSettings } = useEditor();

  const debouncedIconSettings = useDebounce(iconSettings, 300);
  const debouncedBackgroundSettings = useDebounce(backgroundSettings, 300);

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  useEffect(() => {
    const currentState = history[currentIndex];
    if (
      JSON.stringify(currentState) ===
      JSON.stringify({
        iconSettings: debouncedIconSettings,
        backgroundSettings: debouncedBackgroundSettings,
      })
    ) {
      return;
    }

    pushState({
      iconSettings: debouncedIconSettings,
      backgroundSettings: debouncedBackgroundSettings,
    });
  }, [debouncedIconSettings, debouncedBackgroundSettings]);

  const pushState = (state: HistoryState) => {
    setHistory((prev) => {
      const newHistory = prev.slice(0, currentIndex + 1);
      newHistory.push(state);

      if (newHistory.length > MAX_HISTORY_SIZE) {
        newHistory.shift();
        setCurrentIndex((prev) => prev);
        return newHistory;
      }

      setCurrentIndex(newHistory.length - 1);
      return newHistory;
    });
  };

  const undo = (): HistoryState | null => {
    if (!canUndo) return null;

    setCurrentIndex((prev) => prev - 1);
    return history[currentIndex - 1];
  };

  const redo = (): HistoryState | null => {
    if (!canRedo) return null;

    setCurrentIndex((prev) => prev + 1);
    return history[currentIndex + 1];
  };

  const clearHistory = () => {
    setHistory([]);
    setCurrentIndex(-1);
  };

  return (
    <HistoryContext.Provider
      value={{
        canUndo,
        canRedo,
        undo,
        redo,
        pushState,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};
