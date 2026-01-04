import {
  BrushCleaningIcon,
  FlameIcon,
  Redo2Icon,
  Undo2Icon,
} from 'lucide-react';
import { useHotkeys } from 'react-hotkeys-hook';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Kbd } from '@/components/ui/kbd';
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

  useHotkeys('mod+z', (e) => {
    e.preventDefault();
    handleUndo();
  });
  useHotkeys('mod+y', (e) => {
    e.preventDefault();
    handleRedo();
  });
  useHotkeys('r', () => handleRandomize());
  useHotkeys('backspace, delete', () => resetSettings());

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
      <Tooltip>
        <TooltipTrigger>
          <ThemeToggle />
        </TooltipTrigger>
        <TooltipContent>
          Toggle Theme <Kbd>T</Kbd>
        </TooltipContent>
      </Tooltip>
      <Separator orientation="vertical" />
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="secondary"
              disabled={!canUndo}
              onClick={handleUndo}
            >
              <Undo2Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Undo Last Action <Kbd>Ctrl + Z</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="secondary"
              disabled={!canRedo}
              onClick={handleRedo}
            >
              <Redo2Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Redo Last Action <Kbd>Ctrl + Y</Kbd>
          </TooltipContent>
        </Tooltip>
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger>
            <Button variant="outline" onClick={handleRandomize}>
              <FlameIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Randomize <Kbd>R</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="outline" onClick={resetSettings}>
              <BrushCleaningIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Clear <Kbd>Backspace</Kbd>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default EditorActions;
