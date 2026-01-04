import { useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Kbd } from '@/components/ui/kbd';
import IconSettings from './icon-settings';
import BackgroundSettings from './background-settings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SettingsPanel = () => {
  const tabWrapperRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'icon' | 'background'>('icon');

  useHotkeys(
    'escape',
    () => {
      const activeElement = document.activeElement as HTMLElement;
      activeElement?.blur();
    },
    { enableOnFormTags: true },
  );

  useHotkeys('2', () => {
    setActiveTab('icon');
    tabWrapperRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    const firstChild = tabWrapperRef.current?.firstChild as HTMLElement;
    firstChild?.focus();
  });
  useHotkeys('3', () => {
    setActiveTab('background');
    tabWrapperRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    const firstChild = tabWrapperRef.current?.firstChild as HTMLElement;
    firstChild?.focus();
  });

  return (
    <div className="border rounded-sm bg-card py-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="w-full px-4 pb-4 border-b">
          <TabsList className="w-full">
            <TabsTrigger value="icon">
              Icon <Kbd>2</Kbd>
            </TabsTrigger>
            <TabsTrigger value="background">
              Background <Kbd>3</Kbd>
            </TabsTrigger>
          </TabsList>
        </div>
        <div
          ref={tabWrapperRef}
          className="h-96 lg:h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar p-4"
        >
          <TabsContent value="icon">
            <IconSettings />
          </TabsContent>
          <TabsContent value="background">
            <BackgroundSettings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default SettingsPanel;
