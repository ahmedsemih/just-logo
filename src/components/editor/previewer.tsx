import { useEditor } from '@/components/providers/editor-provider';

const Previewer = () => {
  const { iconSettings, backgroundSettings } = useEditor();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative group border-2 border-foreground/20 hover:border-foreground/50 border-dotted transition-colors w-[516px] h-[516px]">
        <div
          id="export-zone"
          className="relative w-[512px] h-[512px] flex items-center justify-center"
        >
          <div
            className="absolute overflow-clip flex items-center justify-center"
            style={{
              background: backgroundSettings.background,
              borderRadius: backgroundSettings.borderRadius + 'px',
              border: `${backgroundSettings.borderWidth}px solid ${backgroundSettings.borderColor}`,
              width: `calc(512px - ${backgroundSettings.margin}px)`,
              height: `calc(512px - ${backgroundSettings.margin}px)`,
            }}
          />
          {iconSettings.icon && (
            <svg
              viewBox="0 0 24 24"
              width={iconSettings.size}
              height={iconSettings.size}
              preserveAspectRatio="none"
              color={iconSettings.strokeColor}
              strokeWidth={iconSettings.strokeWidth}
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
        <span className="absolute -top-6 right-0 text-foreground/20 group-hover:text-foreground/80 transition-colors">
          512x512
        </span>
        <span className="absolute -top-6 left-0 text-foreground/20 group-hover:text-foreground/80 transition-colors">
          Visible Zone
        </span>
      </div>
    </div>
  );
};

export default Previewer;
