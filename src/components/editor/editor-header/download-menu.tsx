import { useRef } from 'react';
import { toPng, toSvg } from 'html-to-image';
import { useHotkeys } from 'react-hotkeys-hook';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Kbd } from '@/components/ui/kbd';
import { Button } from '@/components/ui/button';
import { EXPORT_ZONE_ID } from '@/lib/constants';

const DownloadMenu = () => {
  const downloadButtonRef = useRef<HTMLButtonElement | null>(null);

  useHotkeys('mod+shift+e, e, d', () => {
    downloadButtonRef.current?.click();
  });
  useHotkeys('mod+shift+p, p', (e) => {
    e.preventDefault();
    handleExportPng();
  });
  useHotkeys('mod+shift+s, s', (e) => {
    e.preventDefault();
    handleExportSvg();
  });

  const handleExportPng = async () => {
    const zone = document.getElementById(EXPORT_ZONE_ID);
    if (zone) {
      const isMobile = zone.clientWidth < 512;
      const dataUrl = await toPng(zone, {
        width: isMobile ? 256 : 512,
        height: isMobile ? 256 : 512,
        pixelRatio: isMobile ? 2 : 1,
      });

      const link = document.createElement('a');
      link.download = 'logo.png';
      link.href = dataUrl;
      link.click();
    }
  };

  const handleExportSvg = async () => {
    const zone = document.getElementById(EXPORT_ZONE_ID);
    if (zone) {
      const isMobile = zone.clientWidth < 512;
      const dataUrl = await toSvg(zone, {
        width: isMobile ? 256 : 512,
        height: isMobile ? 256 : 512,
      });

      const link = document.createElement('a');
      link.download = 'logo.svg';
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button ref={downloadButtonRef} className="w-32 text-lg font-app">
          Download
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 z-50">
        <DropdownMenuItem
          className="text-md cursor-pointer font-app flex items-center justify-between"
          onClick={handleExportPng}
        >
          Download as PNG
          <Kbd>P</Kbd>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-md cursor-pointer font-app flex items-center justify-between"
          onClick={handleExportSvg}
        >
          Download as SVG
          <Kbd>S</Kbd>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadMenu;
