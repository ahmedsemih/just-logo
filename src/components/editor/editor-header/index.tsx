import DownloadMenu from "./download-menu";
import EditorActions from "./editor-actions";

const EditorHeader = () => {
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
        <span className="text-2xl font-bold">Just Logo</span>
      </a>
      <EditorActions />
      <DownloadMenu />
    </div>
  );
};

export default EditorHeader;
