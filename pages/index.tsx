import { FC } from 'react';
import axios from 'axios';

import Section from '../components/Section';
import Games from '../components/Games';
import Filters from '../components/Filters';
import SubTitle from '../components/SubTitle';
import PageWrapper from '../components/PageWrapper';
import Container from '../components/Container';
import Image from 'next/legacy/image';

import { IError, IGame } from '../types';

import banner from '../images/banner.jpg';

interface HomeProps {
  games: IGame[];
  error: IError;
}

export async function getServerSideProps(context: any) {
  const platform = context.query.platform;

  const options = {
    method: 'GET',
    url: `https://gamerpower.p.rapidapi.com/api/giveaways${
      platform ? `?platform=${platform}` : ''
    }`,
    params: { 'sort-by': '' },
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

  if (result.data.status === 0) {
    return {
      props: {
        error: result.data,
      },
    };
  }

  return {
    props: {
      games: result.data,
    },
  };
}

const Home: FC<HomeProps> = ({ games, error }) => {
  return (
    <PageWrapper>
      <Container>
        <Section className="w-full mb-5">
          <Filters />
        </Section>
        <Section className="w-full mb-5">
          <div className="w-full h-80 overflow-hidden mx-auto relative">
            <Image src={banner} width={1280} height={720} layout="fixed" />
            <div className="absolute bottom-20 left-10 text-slate-100 max-w-md">
              <h1 className="text-2xl font-semibold">
                Get Free Games & In-Game Loot! Find, track, and collect the best
                giveaways in gaming.
              </h1>
            </div>
          </div>
        </Section>
        {games && (
          <SubTitle className="mb-4">{games.length} Live Giveaways</SubTitle>
        )}
        <Section className="w-full">
          {games ? (
            <Games games={games} />
          ) : (
            <SubTitle>{error.status_message}</SubTitle>
          )}
        </Section>
      </Container>
    </PageWrapper>
  );
};

export default Home;
