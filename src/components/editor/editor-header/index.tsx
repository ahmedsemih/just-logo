import DownloadMenu from "./download-menu";
import EditorActions from "./editor-actions";

const EditorHeader = () => {
  return (
    <div className="p-4 sticky top-0 w-full z-40 border-b bg-card flex flex-wrap gap-2 items-center justify-center sm:justify-between">
      <a href="/" className="flex items-center gap-2 w-full md:w-fit justify-center md:justify-start">
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
