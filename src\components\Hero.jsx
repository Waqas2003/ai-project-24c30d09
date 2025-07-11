import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-4xl font-bold text-white">FIFA World Cup 2025</h1>
        <p className="text-2xl text-white">The biggest football tournament in the world</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Get Tickets
        </button>
      </div>
    </section>
  );
}

export default Hero;