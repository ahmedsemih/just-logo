import { TriangleAlertIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

type IconErrorProps = {
  refetch: () => void;
};

const IconError = ({ refetch }: IconErrorProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <TriangleAlertIcon className="w-16 h-16 text-destructive mb-4" />
      <h3 className="text-lg font-semibold mb-2">An Error Occurred</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Failed to load icons. Please try again.
      </p>
      <Button onClick={() => refetch()} className="px-8 font-semibold">
        Try Again
      </Button>
    </div>
  );
};

export default IconError;
