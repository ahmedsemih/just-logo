import { ComponentProps } from 'react';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

type SliderFieldProps = Omit<
  ComponentProps<typeof Slider>,
  'value' | 'onValueChange'
> & {
  value: number;
  unit?: string;
  label: string;
  name: string;
  onValueChange: (value: number) => void;
};

const SliderField = ({
  value,
  unit,
  label,
  name,
  onValueChange,
  ...props
}: SliderFieldProps) => {
  const handleChangeSlider = (sliderValue: number | readonly number[]) => {
    onValueChange(Array.isArray(sliderValue) ? sliderValue[0] : sliderValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="text-lg">
          {label}
        </Label>
        <div>
          <span className="text-lg">{value}</span>
          {unit && <span className="text-sm ml-1">{unit}</span>}
        </div>
      </div>
      <Slider
        id={name}
        value={value}
        onValueChange={handleChangeSlider}
        {...props}
      />
    </div>
  );
};

export default SliderField;
