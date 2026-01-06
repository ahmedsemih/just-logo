import { GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 ">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Just Logo"
              width={36}
              height={36}
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg font-app">Just Logo</span>
          </a>
          <p className="text-sm text-muted-foreground font-app">
            Built by{' '}
            <a
              className="hover:text-primary"
              href="https://github.com/ahmedsemih"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ahmed Semih Erkan
            </a>{' '}
            with ❤️
          </p>
          <a href="https://github.com/ahmedsemih/just-logo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors font-app">
            <GithubIcon className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
