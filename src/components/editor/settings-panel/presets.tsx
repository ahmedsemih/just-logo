import type { Preset } from '@/types';
import { PRESETS } from '@/lib/constants';
import { useEditor } from '@/components/providers/editor-provider';

const Presets = () => {
  const {
    iconSettings,
    backgroundSettings,
    updateIconSettings,
    updateBackgroundSettings,
  } = useEditor();

  const applyPreset = (preset: Preset) => {
    updateIconSettings({
      ...iconSettings,
      ...preset.icon,
    });
    updateBackgroundSettings({
      ...backgroundSettings,
      ...preset.background,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-muted-foreground text-sm font-semibold">Presets</h3>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-4 gap-3">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => applyPreset(preset)}
            className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors group hover:outline-2 hover:outline-primary/50"
            title={preset.name}
          >
            <div
              className="w-full aspect-square rounded-md relative overflow-hidden"
              style={{
                background: preset.background.background,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-full h-full rounded-md flex items-center justify-center"
                  style={{
                    borderWidth: `${(backgroundSettings.borderWidth || 0) / 4}px`,
                    borderColor: preset.background.borderColor,
                    borderStyle: 'solid',
                  }}
                >
                  {iconSettings.icon && (
                    <svg
                      viewBox="0 0 24 24"
                      width={Math.max(iconSettings.size / 8, 24)}
                      height={Math.max(iconSettings.size / 8, 24)}
                      color={preset.icon.strokeColor}
                      strokeWidth={1}
                      strokeOpacity={(preset.icon.strokeOpacity || 100) + '%'}
                      fill={preset.icon.fillColor}
                      fillOpacity={(iconSettings.fillOpacity || 0) + '%'}
                      style={{
                        transform: `rotate(${iconSettings.rotate}deg)`,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: iconSettings.icon.body,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
              {preset.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Presets;
