import React from 'react';

function Features() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-3xl font-bold">What to Expect</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 xl:w-1/3 p-6">
            <i className="fas fa-trophy text-4xl text-orange-500" />
            <h3 className="text-2xl font-bold">Exciting Matches</h3>
            <p>Watch the best teams in the world compete for the ultimate prize</p>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-6">
            <i className="fas fa-stadium text-4xl text-orange-500" />
            <h3 className="text-2xl font-bold">State-of-the-Art Stadiums</h3>
            <p>Experience the thrill of the game in our modern and comfortable stadiums</p>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-6">
            <i className="fas fa-fan text-4xl text-orange-500" />
            <h3 className="text-2xl font-bold">Electric Atmosphere</h3>
            <p>Join thousands of fans from around the world and be part of the excitement</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;