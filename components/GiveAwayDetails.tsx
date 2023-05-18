import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/legacy/image';

import { IGame } from '../types';

interface GiveAwayDetailsProps {
  game: IGame;
}

const GiveAwayDetails: FC<GiveAwayDetailsProps> = ({ game }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-10 max-[640px]:flex-wrap max-[640px]:justify-center">
        <div className="flex max-[640px]:flex-wrap max-[640px]:justify-center">
          <Image
            src={game.image}
            height={140}
            width={300}
            // layout="responsive"
            alt="image not found"
            placeholder="blur"
            blurDataURL={game.image}
            className="rounded-2xl"
          />
          <div className="ml-4 max-[640px]:my-4">
            <h2 className="font-semibold mb-2">{game.title}</h2>
            <p className="mb-2 max-[640px]:text-center">
              <span
                className={`text-sm p-1 rounded ${
                  game.type === 'DLC' ? 'bg-purple-300' : 'bg-green-300'
                }`}
              >
                {game.type}
              </span>{' '}
              | <span className="text-sm">{game.platforms}</span>
            </p>
            <p className="max-[640px]:text-center">
              $0.00{' '}
              {game.worth !== 'N/A' && (
                <span className="text-sm text-slate-600 line-through">
                  {game.worth}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="ml-4">
          <div className="flex items-center mb-2">
            <p className="h-16 w-16 bg-slate-300 rounded mr-2 text-xs flex items-center justify-center px-2">
              {game.end_date !== 'N/A'
                ? (new Date().getDate() - new Date(game.end_date).getDate()) *
                    -1 +
                  ' days left'
                : 'Limited time'}
            </p>
            <p className="h-16 w-16 bg-slate-300 rounded text-center text-xs flex items-center justify-center px-2">
              {game.users}+<br />
              Collected
            </p>
          </div>
          <Link href={game.open_giveaway_url}>
            <button className="w-full py-2 bg-yellow-400 rounded">
              Get {game.type}
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-20">
        <p className="mb-10">{game.description}</p>
        {game.instructions && (
          <div>
            <h3 className="font-bold mb-2">Instructions</h3>
            <p>{game.instructions}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default GiveAwayDetails;
