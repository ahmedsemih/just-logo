import {
  BrushCleaningIcon,
  FlameIcon,
  Redo2Icon,
  Undo2Icon,
} from 'lucide-react';
import { toPng, toSvg } from 'html-to-image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

const EditorHeader = () => {
  const { data } = useIcons();
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

  const handleExportPng = async () => {
    const node = document.getElementById('export-zone');
    if (node) {
      const dataUrl = await toPng(node, {
        width: 512,
        height: 512,
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = 'logo.png';
      link.href = dataUrl;
      link.click();
    }
  };

  const handleExportSvg = async () => {
    const node = document.getElementById('export-zone');
    if (node) {
      const dataUrl = await toSvg(node, {
        width: 512,
        height: 512,
      });
      const link = document.createElement('a');
      link.download = 'logo.svg';
      link.href = dataUrl;
      link.click();
    }
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
      icon: data?.[Math.floor(Math.random() * data.length)],
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
    <div className="p-4 sticky top-0 w-full border-b bg-card flex items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <img
          src="/logo.svg"
          alt="Just Logo"
          width={64}
          height={64}
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold">Just Logo</h1>
      </a>
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
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="w-32 text-lg font-app">Download</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuItem
            className="text-md cursor-pointer font-app"
            onClick={handleExportPng}
          >
            Download as PNG
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-md cursor-pointer font-app"
            onClick={handleExportSvg}
          >
            Download as SVG
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default EditorHeader;
