import { ComponentProps } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';

import { Label } from '@/components/ui/label';

type ColorFieldProps = ComponentProps<typeof ColorPicker> & {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
};

const ColorField = ({
  label,
  name,
  value,
  onChange,
  ...props
}: ColorFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="text-lg">
        {label}
      </Label>
      <ColorPicker
        value={value}
        onChange={(color) => onChange(color)}
        hidePresets
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
        hideOpacity
        hideControls
        style={{
          rbgcpInput: { marginBottom: '4px' },
          body: { background: 'transparent' },
          rbgcpControlBtnSelected: {
            color: 'var(--foreground)',
          },
        }}
        {...props}
      />
    </div>
  );
};

export default ColorField;
