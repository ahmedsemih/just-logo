import { useState } from 'react';

import IconGrid from './icon-grid';
import IconFilter from './icon-filter';
import { useIcons } from '@/hooks/use-icons';
import { IconItem } from '@/components/providers/editor-provider';

const IconPicker = () => {
  const { data: icons = [], isLoading } = useIcons();

  const [filteredIcons, setFilteredIcons] = useState<IconItem[]>(icons);

  return (
    <div className="flex flex-col h-[calc(100vh-112px)] border rounded-sm bg-card">
      <IconFilter icons={icons} setFilteredIcons={setFilteredIcons} />
      <IconGrid filteredIcons={filteredIcons} isLoading={isLoading} />
    </div>
  );
};

export default IconPicker;
