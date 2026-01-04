import { toPng, toSvg } from 'html-to-image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { EXPORT_ZONE_ID } from '@/lib/constants';

const DownloadMenu = () => {
  const handleExportPng = async () => {
    const node = document.getElementById(EXPORT_ZONE_ID);
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
    const node = document.getElementById(EXPORT_ZONE_ID);
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-32 text-lg font-app">Download</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit z-50">
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
  );
};

export default DownloadMenu;
