import { createFileRoute } from '@tanstack/react-router';

import CTA from '@/components/landing/cta';
import Hero from '@/components/landing/hero';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import Features from '@/components/landing/features';
import Examples from '@/components/landing/examples';
import HowItWorks from '@/components/landing/how-it-works';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Examples />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
