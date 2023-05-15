import { FC } from 'react';

import { IGame } from '../types';
import Game from './Game';

interface GamesProps {
  games: IGame[];
}

const Games: FC<GamesProps> = ({ games }) => {
  return (
    <div className="flex justify-center text-center">
      <div className="flex flex-wrap justify-center">
        {games && games.map((game) => <Game key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default Games;
