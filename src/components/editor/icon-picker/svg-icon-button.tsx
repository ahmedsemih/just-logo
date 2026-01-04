import { cn } from '@/lib/utils';
import { IconItem, useEditor } from '@/components/providers/editor-provider';

const SvgIconButton = ({ icon }: { icon: IconItem }) => {
  const { iconSettings, updateIconSettings } = useEditor();

  const isSelected =
    iconSettings.icon?.name === icon.name &&
    iconSettings.icon?.set === icon.set;

  return (
    <button
      onClick={() => updateIconSettings({ icon })}
      className={cn(
        'h-24 w-24 p-1 m-0 flex flex-col items-center justify-center border rounded',
        isSelected
          ? 'outline-2 outline-primary bg-primary/20'
          : 'hover:outline-2 hover:outline-primary/50',
      )}
    >
      <svg
        viewBox="0 0 24 24"
        width="36"
        height="36"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        dangerouslySetInnerHTML={{ __html: icon.body }}
      />
      <span className="text-xs truncate w-full text-center mt-1">
        {icon.set}
      </span>
      <span className="text-[10px] truncate w-full text-center font-sans">
        {icon.name}
      </span>
    </button>
  );
};

export default SvgIconButton;
