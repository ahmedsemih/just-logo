const STEPS = [
  {
    number: '01',
    title: 'Pick an Icon',
    description:
      'Pick an icon from popular icon libraries to start your logo design.',
  },
  {
    number: '02',
    title: 'Customize',
    description: 'Adjust colors, sizes, and background to match your brand.',
  },
  {
    number: '03',
    title: 'Download',
    description: 'Download your logo in PNG or SVG format and start using it.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Easy and simple steps to create your perfect logo
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-linear-to-r from-primary to-transparent" />
              )}
              <div className="relative text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
