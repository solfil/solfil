
import React, { useState } from 'react';
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
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('PT');

  return (
    <div className="relative overflow-x-hidden">
      <Header lang={lang} setLang={setLang} />
      <main>
        <section id="home">
          <Hero lang={lang} />
        </section>
        
        <section id="produtos" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Products lang={lang} />
        </section>

        <section id="sobre" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
          <About lang={lang} />
        </section>

        <section id="marcas" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Brands lang={lang} />
        </section>

        <section id="galeria" className="py-16 md:py-24 bg-gray-50 overflow-hidden scroll-mt-24">
          <Gallery lang={lang} />
        </section>

        <section id="testemunhos" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Testimonials lang={lang} />
        </section>

        <section id="contactos" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
          <Contact lang={lang} />
        </section>
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
};

export default App;
