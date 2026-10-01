import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { Contact } from './components/sections/Contact';
import { Differentials } from './components/sections/Differentials';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
