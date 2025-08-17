import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
    </main>
  );
}