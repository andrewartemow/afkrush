import axios from 'axios';

export const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
    headers: {
      'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    },
  };

  const games = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    props: {
      games: games ? games : null,
    },
  };
};
