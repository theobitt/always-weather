// axios.js

import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY2;
const obterLatLonPorNomeCidade = (cityName) => {
  const instance = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/geocoding',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    },
    params: {
      city: encodeURIComponent(cityName),
    },
  });

  return instance.get();
};

export default obterLatLonPorNomeCidade;
