import {
  BrushCleaningIcon,
  FlameIcon,
  Redo2Icon,
  Undo2Icon,
} from 'lucide-react';

import { useIcons } from '@/hooks/use-icons';
import {
  DEFAULT_BACKGROUND_SETTINGS,
  DEFAULT_ICON_SETTINGS,
  useEditor,
} from '@/components/providers/editor-provider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useHistory } from '@/components/providers/history-provider';

const EditorActions = () => {
  const { data: icons } = useIcons();
  const { canRedo, canUndo, redo, undo } = useHistory();
  const { updateBackgroundSettings, updateIconSettings, resetSettings } =
    useEditor();

  const handleUndo = () => {
    const lastState = undo();
    if (!lastState) return;

    updateBackgroundSettings(lastState.backgroundSettings);
    updateIconSettings(lastState.iconSettings);
  };

  const handleRedo = () => {
    const nextState = redo();
    if (!nextState) return;

    updateBackgroundSettings(nextState.backgroundSettings);
    updateIconSettings(nextState.iconSettings);
  };

  const handleRandomize = () => {
    const primaryColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);

    const isGradient = Math.random() < 0.5;
    const gradientAngle = Math.floor(Math.random() * 360);
    const gradientPrimaryColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    const gradientSecondaryColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    const background = isGradient
      ? `linear-gradient(${gradientAngle}deg, ` +
        `${gradientPrimaryColor}, ` +
        `${gradientSecondaryColor}` +
        ')'
      : `${gradientPrimaryColor}`;

    updateBackgroundSettings({
      borderColor: primaryColor,
      background,
      borderRadius: Math.floor(Math.random() * 100),
      borderWidth: Math.floor(Math.random() * 20),
      margin: DEFAULT_BACKGROUND_SETTINGS.margin,
    });

    updateIconSettings({
      icon: icons?.[Math.floor(Math.random() * icons.length)],
      strokeColor: primaryColor,
      fillColor: DEFAULT_ICON_SETTINGS.fillColor,
      size: Math.floor(Math.random() * 400) + 50,
      rotate: Math.floor(Math.random() * 360) - 180,
      strokeWidth: parseFloat((Math.random() * 3).toFixed(1)),
      strokeOpacity: DEFAULT_ICON_SETTINGS.strokeOpacity,
      fillOpacity: DEFAULT_ICON_SETTINGS.fillOpacity,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <div>
        <ThemeToggle />
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          title="Undo"
          disabled={!canUndo}
          onClick={handleUndo}
        >
          <Undo2Icon />
        </Button>
        <Button
          variant="secondary"
          title="Redo"
          disabled={!canRedo}
          onClick={handleRedo}
        >
          <Redo2Icon />
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center gap-2">
        <Button variant="outline" title="Randomize" onClick={handleRandomize}>
          <FlameIcon />
        </Button>
        <Button variant="outline" title="Clear" onClick={resetSettings}>
          <BrushCleaningIcon />
        </Button>
      </div>
    </div>
  );
};

export default EditorActions;
