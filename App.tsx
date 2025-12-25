import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import { LanguageProvider } from './LanguageContext';
import { Analytics } from '@vercel/analytics/react';

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
        <Analytics />
      </div>
    </LanguageProvider>
  );
}

export default App;