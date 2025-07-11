import React from 'react';
import TeamCard from './TeamCard';

function Teams() {
  const teams = [
    {
      id: 1,
      name: 'Brazil',
      flag: '/images/brazil-flag.png',
      players: ['Neymar', 'Gabriel Jesus', 'Alisson']
    },
    {
      id: 2,
      name: 'Argentina',
      flag: '/images/argentina-flag.png',
      players: ['Lionel Messi', 'Sergio Aguero', 'Angel Di Maria']
    },
    {
      id: 3,
      name: 'Spain',
      flag: '/images/spain-flag.png',
      players: ['Sergio Ramos', 'Andres Iniesta', 'David de Gea']
    }
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-3xl font-bold">Participating Teams</h2>
        <ul className="flex flex-wrap justify-center">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Teams;