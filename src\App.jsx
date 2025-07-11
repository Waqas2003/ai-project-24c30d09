import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Teams from './components/Teams';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Features />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;