import { useState, useEffect } from 'react';

import { useDebounce } from '@/hooks/use-debounce';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  debounceMs: number = 0,
) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') return initialValue;

      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  const debouncedValue = useDebounce(storedValue, debounceMs);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(debouncedValue));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  }, [key, debouncedValue]);

  return [storedValue, setStoredValue] as const;
}