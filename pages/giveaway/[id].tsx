import { FC } from 'react';
import axios from 'axios';

import GiveAwayDetails from '../../components/GiveAwayDetails';
import Games from '../../components/Games';
import SubTitle from '../../components/SubTitle';
import PageWrapper from '../../components/PageWrapper';
import Container from '../../components/Container';

import { IGame } from '../../types';

interface GiveAwayPageProps {
  game: IGame;
  popularGames: IGame[];
}

export async function getServerSideProps(context: any) {
  const options = {
    method: 'GET',
    url: 'https://gamerpower.p.rapidapi.com/api/giveaway',
    params: { id: context.params.id },
    headers: {
      'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    },
  };

  const options2 = {
    method: 'GET',
    url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    },
  };

  const result = await axios
    .request(options)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });

  const result2 = await axios
    .request(options2)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });

  // if (result.data.status === 0) {
  //   return {
  //     props: {
  //       error: result.data,
  //     },
  //   };
  // }

  return {
    props: {
      game: result.data ? result.data : null,
      popularGames: result2.data ? result2.data : null,
    },
  };
}

const GiveAwayPage: FC<GiveAwayPageProps> = ({ game, popularGames }) => {
  return (
    <PageWrapper className="pt-20">
      <Container>
        {game ? (
          <GiveAwayDetails game={game} />
        ) : (
          <SubTitle className="py-10">Error: Failed to load</SubTitle>
        )}
        <div>
          <SubTitle className="mb-4">The most popular giveaways</SubTitle>
          {popularGames ? (
            <Games games={popularGames.slice(0, 11)} />
          ) : (
            <SubTitle className="py-10">Error: Failed to load</SubTitle>
          )}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default GiveAwayPage;
