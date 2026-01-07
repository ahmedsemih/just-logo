import { useQuery } from '@tanstack/react-query';

import type { IconItem } from '@/components/providers/editor-provider';

export function useIcons() {
  return useQuery({
    queryKey: ['icons-db'],
    queryFn: async (): Promise<IconItem[]> => {
      const res = await fetch('/icons-db.json');
      if (!res.ok) {
        throw new Error('Failed to fetch icons');
      }
      return res.json();
    },
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });
}
