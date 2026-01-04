import { EXPORT_ZONE_ID } from '@/lib/constants';
import { useElementWidth } from '@/hooks/use-element-width';
import { useEditor } from '@/components/providers/editor-provider';

const Previewer = () => {
  const { iconSettings, backgroundSettings } = useEditor();
  const [exportZoneRef, exportZoneWidth] = useElementWidth<HTMLDivElement>();

  const isMobile = exportZoneWidth < 512;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative group border-2 border-foreground/20 bg-transparent hover:border-foreground/50 border-dotted transition-colors w-[260px] sm:w-[516px] h-[260px] sm:h-[516px] flex items-center justify-center">
        <div
          ref={exportZoneRef}
          id={EXPORT_ZONE_ID}
          className="relative w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] flex items-center justify-center"
        >
          <div
            className="absolute overflow-clip flex items-center justify-center"
            style={{
              background: backgroundSettings.background,
              borderRadius: backgroundSettings.borderRadius + 'px',
              border: `${backgroundSettings.borderWidth}px solid ${backgroundSettings.borderColor}`,
              width: `calc(${exportZoneWidth}px - ${backgroundSettings.margin}px)`,
              height: `calc(${exportZoneWidth}px - ${backgroundSettings.margin}px)`,
            }}
          />
          {iconSettings.icon && (
            <svg
              viewBox="0 0 24 24"
              width={isMobile ? iconSettings.size / 2 : iconSettings.size}
              height={isMobile ? iconSettings.size / 2 : iconSettings.size}
              preserveAspectRatio="none"
              color={iconSettings.strokeColor}
              strokeWidth={isMobile ? iconSettings.strokeWidth / 2 : iconSettings.strokeWidth}
              strokeOpacity={iconSettings.strokeOpacity + '%'}
              fill={iconSettings.fillColor}
              fillOpacity={iconSettings.fillOpacity + '%'}
              style={{
                transform: `rotate(${iconSettings.rotate}deg)`,
              }}
              dangerouslySetInnerHTML={{ __html: iconSettings.icon.body }}
            />
          )}
        </div>
        <span className="absolute -top-6 right-0 text-foreground/20 group-hover:text-foreground/80 transition-colors font-sans">
          {`${exportZoneWidth}x${exportZoneWidth}`}
        </span>
        <span className="absolute -top-6 left-0 text-foreground/20 group-hover:text-foreground/80 transition-colors">
          Visible Zone
        </span>
      </div>
    </div>
  );
};

export default Previewer;
