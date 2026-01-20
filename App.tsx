
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
