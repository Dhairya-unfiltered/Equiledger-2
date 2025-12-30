import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Industries from '@/components/Industries';
import WhyChoose from '@/components/WhyChoose';
import Contact from '@/components/Contact';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Industries />
        <WhyChoose />
        <Contact />
        <Testimonial />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
