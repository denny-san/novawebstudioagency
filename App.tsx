
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Team from './components/Team';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Team />
        <Process />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default App;
