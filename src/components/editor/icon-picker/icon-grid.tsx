import { useVirtualizer } from '@tanstack/react-virtual';

import type { IconItem } from '@/types';
import SvgIconButton from './svg-icon-button';
import { Spinner } from '@/components/ui/spinner';
import { useElementWidth } from '@/hooks/use-element-width';

type IconGridProps = {
  filteredIcons: IconItem[];
  isLoading: boolean;
};

const ICON_SIZE = 104;
const MIN_COLUMNS = 2;
const MAX_COLUMNS = 6;

const IconGrid = ({ filteredIcons, isLoading }: IconGridProps) => {
  const [containerRef, containerWidth] = useElementWidth<HTMLDivElement>();

  const columns =
    Math.max(
      MIN_COLUMNS,
      Math.min(MAX_COLUMNS, Math.floor((containerWidth || 0) / ICON_SIZE)),
    ) || 4;

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(filteredIcons.length / columns),
    getScrollElement: () => containerRef.current,
    estimateSize: () => ICON_SIZE,
    overscan: 5,
  });

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto w-full relative p-2 custom-scrollbar"
    >
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="size-16" />
        </div>
      ) : (
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
          }}
          className="w-full relative"
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const startIndex = virtualRow.index * columns;
            const rowIcons = filteredIcons.slice(
              startIndex,
              startIndex + columns,
            );

            return (
              <div
                key={virtualRow.key}
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className="absolute top-0 left-0 w-full flex justify-center gap-4 bg-card"
              >
                {rowIcons.map((icon) => (
                  <SvgIconButton key={`${icon.set}-${icon.name}`} icon={icon} />
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default IconGrid;
