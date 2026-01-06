import ColorField from '@/components/ui/color-field';
import SliderField from '@/components/ui/slider-field';
import { useElementWidth } from '@/hooks/use-element-width';
import { useEditor } from '@/components/providers/editor-provider';

const IconSettings = () => {
  const { iconSettings, updateIconSettings } = useEditor();
  const [wrapperRef, wrapperWidth] = useElementWidth<HTMLDivElement>();

  return (
    <div ref={wrapperRef} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-muted-foreground text-sm font-semibold -mb-2">
          Icon Settings
        </h3>
        <SliderField
          name="size"
          value={iconSettings.size}
          label="Size"
          unit="px"
          onValueChange={(size) => updateIconSettings({ size })}
          min={0}
          max={512}
        />
        <SliderField
          name="rotate"
          value={iconSettings.rotate}
          label="Rotate"
          unit="°"
          onValueChange={(rotate) => updateIconSettings({ rotate })}
          min={-180}
          max={180}
        />
        <SliderField
          name="strokeWidth"
          value={iconSettings.strokeWidth}
          label="Stroke Width"
          unit="px"
          onValueChange={(strokeWidth) => updateIconSettings({ strokeWidth })}
          min={0}
          max={4}
          step={0.1}
          decimalPlaces={1}
        />
        <SliderField
          name="strokeOpacity"
          value={iconSettings.strokeOpacity}
          label="Stroke Opacity"
          onValueChange={(strokeOpacity) =>
            updateIconSettings({ strokeOpacity })
          }
          unit="%"
          min={0}
          max={100}
        />
        <ColorField
          label="Stroke Color"
          name="strokeColor"
          width={wrapperWidth}
          value={iconSettings.strokeColor}
          onChange={(strokeColor) => updateIconSettings({ strokeColor })}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-muted-foreground text-sm font-semibold -mb-2">
          Fill Settings
        </h3>
        <SliderField
          name="fillOpacity"
          value={iconSettings.fillOpacity}
          label="Fill Opacity"
          onValueChange={(fillOpacity) => updateIconSettings({ fillOpacity })}
          unit="%"
          min={0}
          max={100}
        />
        <ColorField
          label="Fill Color"
          name="fillColor"
          width={wrapperWidth}
          value={iconSettings.fillColor}
          onChange={(fillColor) => updateIconSettings({ fillColor })}
        />
      </div>
    </div>
  );
};

export default IconSettings;
