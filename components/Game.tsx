import { FC } from 'react';

import Image from 'next/legacy/image';
import Link from 'next/link';

import { IGame } from '../types';

interface GameProps {
  game: IGame;
}

const Game: FC<GameProps> = ({ game }) => {
  return (
    <Link href={`/giveaway/${game.id}`}>
      <div className="m-3 cursor-pointer bg-white rounded-md overflow-hidden h-80 w-80 relative hover:scale-105 hover:shadow-md transition-all max-[640px]:w-full max-[640px]:h-[400px]">
        <Image
          src={game.image}
          height={140}
          width={300}
          layout="responsive"
          alt="image not found"
          placeholder="blur"
          blurDataURL={game.image}
        />
        <div className="p-3">
          <h2 className="text-sm">{game.title}</h2>
          <div>
            <p>
              $0.00{' '}
              {game.worth !== 'N/A' && (
                <span className="text-sm text-slate-600 line-through">
                  {game.worth}
                </span>
              )}
            </p>
          </div>
          <p className="text-xs">{game.description.slice(0, 80)}...</p>
        </div>
        <div className="absolute top-0 w-full z-30 bg-black bg-opacity-50 py-1">
          <p className="text-xs text-white font-semibold">
            {game.published_date}
          </p>
          <p className="text-xs text-white font-semibold">{game.platforms}</p>
        </div>
        {game.type && (
          <button
            className={`px-4 border-2 absolute bottom-4 -translate-x-1/2 ${
              game.type === 'DLC'
                ? 'border-purple-300 text-purple-300'
                : 'border-green-300 text-green-300'
            }`}
          >
            {game.type === 'DLC' ? 'View Loot' : 'View Game'}
          </button>
        )}
      </div>
    </Link>
  );
};

export default Game;
