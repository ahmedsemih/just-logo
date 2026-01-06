import { Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-app tracking-tight sm:text-6xl bg-linear-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            Don’t let logo creation
            <br /> hold you back.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Choose from thousands of icon sets to design your own unique logo.
            <br />
            No coding required, completely free and open source.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link to="/create">
              <Button size="lg" className="gap-2 font-semibold font-app">
                Create Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold font-app"
            >
              <a href="#how-it-works">How it works?</a>
            </Button>
          </div>
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-8xl">
              <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-primary/30 to-primary/20 blur-3xl opacity-50" />
              <div className="relative rounded-xl shadow-2xl ring-1 ring-border/50 bg-background overflow-hidden hover:scale-105 transition-transform">
                <img
                  src="/examples/example.png"
                  alt="Just Logo Example"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
