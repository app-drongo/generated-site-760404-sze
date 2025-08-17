import PageHeader from '../../components/PageHeader';
import Services from '../../components/Services';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeader />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
    </main>
  );
}