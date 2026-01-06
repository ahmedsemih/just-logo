import { Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
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
      <nav>
        <ul className="items-center gap-6 md:flex hidden">
          <li>
            <a
              href="#features"
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#examples"
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              How It Works
            </a>
          </li>
        </ul>
      </nav>
      <Link to="/create" preload="viewport">
        <Button>Create Logo</Button>
      </Link>
    </header>
  );
};

export default Header;
