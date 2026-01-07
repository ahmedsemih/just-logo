import Fuse from 'fuse.js';
import { useHotkeys } from 'react-hotkeys-hook';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import type { IconItem } from '@/types';
import { Kbd } from '@/components/ui/kbd';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/use-debounce';
import { AVAILABLE_ICON_SETS } from '@/lib/constants';

type IconFilterProps = {
  icons: IconItem[];
  setFilteredIcons: (icons: IconItem[]) => void;
};

const IconFilter = ({ icons, setFilteredIcons }: IconFilterProps) => {
  const iconFilterRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const [selectedSet, setSelectedSet] = useState<string | null>(null);

  useHotkeys('1', () => {
    setTimeout(() => iconFilterRef.current?.select(), 100);
  });

  useEffect(() => {
    let filteredIcons = icons.filter((icon) => {
      if (selectedSet && icon.set !== selectedSet) return false;
      return true;
    });

    const trimmedSearch = debouncedSearch.trim();
    if (!!trimmedSearch) {
      const fuse = new Fuse(filteredIcons, {
        keys: ['name', 'set'],
        threshold: 0.2,
        distance: 100,
      });

      const results = fuse.search(trimmedSearch);
      filteredIcons = results.map((result) => result.item);
    }

    setFilteredIcons(filteredIcons);
  }, [icons, debouncedSearch, selectedSet, setFilteredIcons]);

  return (
    <div className="p-4 border-b flex flex-col gap-2">
      <div className="relative flex items-center">
        <input
          ref={iconFilterRef}
          placeholder="Search icons..."
          className="w-full p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Kbd className="absolute right-3">1</Kbd>
      </div>
      <div className="flex gap-2 flex-wrap">
        {AVAILABLE_ICON_SETS.map((set) => (
          <Button
            variant="outline"
            key={set}
            className={cn(
              selectedSet === set &&
                'border-primary! text-shadow-foreground focus:ring-0! focus:outline-0!',
              'text-xs',
            )}
            onClick={() =>
              setSelectedSet((prev) => (prev === set ? null : set))
            }
          >
            {set}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default IconFilter;
