import React from 'react';
import Image from 'next/image';

function TeamCard({ team }) {
  return (
    <li className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-white rounded shadow-md p-4">
        <Image src={team.flag} alt={team.name} width={50} height={50} />
        <h3 className="text-2xl font-bold">{team.name}</h3>
        <ul className="list-disc pl-4">
          {team.players.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default TeamCard;