import ColorField from '@/components/ui/color-field';
import SliderField from '@/components/ui/slider-field';
import { useElementWidth } from '@/hooks/use-element-width';
import { useEditor } from '@/components/providers/editor-provider';

const BackgroundSettings = () => {
  const { backgroundSettings, updateBackgroundSettings } = useEditor();
  const [wrapperRef, wrapperWidth] = useElementWidth<HTMLDivElement>();

  return (
    <div ref={wrapperRef} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-muted-foreground text-sm font-semibold -mb-2">
          Background Settings
        </h3>
        <SliderField
          name="margin"
          value={backgroundSettings.margin}
          label="Margin"
          unit="px"
          onValueChange={(margin) => updateBackgroundSettings({ margin })}
          min={0}
          max={256}
        />
        <ColorField
          label="Background Color"
          name="background"
          width={wrapperWidth}
          value={backgroundSettings.background}
          hideControls={false}
          hideOpacity={false}
          onChange={(background) => updateBackgroundSettings({ background })}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-muted-foreground text-sm font-semibold -mb-2">
          Border Settings
        </h3>
        <SliderField
          name="borderRadius"
          value={backgroundSettings.borderRadius}
          label="Border Radius"
          unit="%"
          onValueChange={(borderRadius) =>
            updateBackgroundSettings({ borderRadius })
          }
          min={0}
          max={50}
        />
        <SliderField
          name="borderWidth"
          value={backgroundSettings.borderWidth}
          label="Border Width"
          unit="px"
          onValueChange={(borderWidth) =>
            updateBackgroundSettings({ borderWidth })
          }
          min={0}
          max={128}
        />
        <ColorField
          label="Border Color"
          name="borderColor"
          width={wrapperWidth}
          value={backgroundSettings.borderColor}
          onChange={(borderColor) => updateBackgroundSettings({ borderColor })}
        />
      </div>
    </div>
  );
};

export default BackgroundSettings;
