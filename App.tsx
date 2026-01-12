
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Brands from './components/Brands';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        {/* Home section is at the very top, scroll-mt not needed here as it's the start */}
        <section id="home">
          <Hero />
        </section>
        
        <section id="produtos" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Products />
        </section>

        <section id="sobre" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
          <About />
        </section>

        <section id="marcas" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Brands />
        </section>

        <section id="galeria" className="py-16 md:py-24 bg-gray-50 overflow-hidden scroll-mt-24">
          <Gallery />
        </section>

        <section id="testemunhos" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Testimonials />
        </section>

        <section id="contactos" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;