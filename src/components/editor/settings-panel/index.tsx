import IconSettings from './icon-settings';
import BackgroundSettings from './background-settings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SettingsPanel = () => {
  return (
    <div className="border rounded-sm bg-card py-4">
      <Tabs defaultValue="icon">
        <div className="w-full px-4 pb-4 border-b">
          <TabsList className="w-full">
            <TabsTrigger value="icon">Icon</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
          </TabsList>
        </div>
        <div className="h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar p-4">
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
