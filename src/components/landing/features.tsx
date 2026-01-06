import {
  BadgeCheckIcon,
  BrushIcon,
  DownloadIcon,
  SettingsIcon,
  ShieldCheckIcon,
  Smile,
} from 'lucide-react';

const FEATURES = [
  {
    name: '10000+ Icons',
    description:
      'Not just one icon library, but thousands of icons from popular libraries.',
    icon: <BrushIcon className="w-6 h-6" />,
  },
  {
    name: 'Easy Customization',
    description: 'Customize color, size, background, and more instantly.',
    icon: <SettingsIcon className="w-6 h-6" />,
  },
  {
    name: 'Instant Download',
    description:
      'Download your logo immediately in PNG or SVG format and use it anywhere.',
    icon: <DownloadIcon className="w-6 h-6" />,
  },
  {
    name: 'Free & Open Source',
    description:
      'All features are completely free. Source code is available on GitHub.',
    icon: <BadgeCheckIcon className="w-6 h-6" />,
  },
  {
    name: 'High Quality',
    description: 'Create high-resolution logos that look perfect at any size.',
    icon: <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    name: 'User Friendly',
    description:
      'Designed with simplicity in mind for a seamless logo creation experience.',
    icon: <Smile className="w-6 h-6" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create easy and beautiful logos
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.name}
              className="relative rounded-2xl border bg-card p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.name}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
