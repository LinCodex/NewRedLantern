import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased selection:bg-lantern-red selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Reviews />
          <InfoSection />
        </main>
        <Footer />
        <StickyFooter />
      </div>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;