const LOGO_STYLES = [
  {
    title: 'Transparent Background',
    description:
      'Clean logos with no background, perfect for overlaying on any surface or color.',
    image: '/examples/transparent-example.png',
    badge: 'Clean',
  },
  {
    title: 'Gradient Background',
    description:
      'Modern gradient backgrounds that add depth and visual interest to your logo.',
    image: '/examples/gradient-example.png',
    badge: 'Trendy',
  },
  {
    title: 'Solid Color Background',
    description:
      'Classic solid backgrounds for a clean, professional look that never goes out of style.',
    image: '/examples/solid-example.png',
    badge: 'Classic',
  },
  {
    title: 'Circle Logo',
    description:
      'Rounded logos perfect for profile pictures, app icons, and social media.',
    image: '/examples/circle-example.png',
    badge: 'Versatile',
  },
  {
    title: 'Bordered Logo',
    description:
      'Add borders to make your logo stand out with defined edges and structure.',
    image: '/examples/bordered-example.png',
    badge: 'Bold',
  },
  {
    title: 'Square Logo',
    description:
      'Sharp, geometric logos ideal for modern brands and tech companies.',
    image: '/examples/square-example.png',
    badge: 'Modern',
  },
];

const Examples = () => {
  return (
    <section id="examples" className="py-20 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create Any Style You Want
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From transparent backgrounds to bordered designs, customize every
            aspect of your logo
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LOGO_STYLES.map((style) => (
            <div
              key={style.title}
              className="group relative rounded-2xl border bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-background">
                <img
                  src={style.image}
                  alt={style.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {style.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{style.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
