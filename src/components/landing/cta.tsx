import { Link } from '@tanstack/react-router';
import { ArrowRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="cta" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-primary/90 to-primary/80 px-8 py-16 shadow-2xl sm:px-16">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              You wanna ship fast but stuck at logo?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/90">
              Start for free and design your good-looking logo in minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link to="/create" preload="viewport">
                <Button size="lg" variant="secondary" className="gap-2">
                  Create Now
                  <ArrowRightIcon />
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div className="aspect-1404/767 w-351 bg-linear-to-r from-primary-foreground/30 to-primary-foreground/10 opacity-25" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
