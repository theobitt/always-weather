import axios from 'axios';

const apiKey = '190dcd76cf4cabc87e9f07e305df8516';
const cidade = 'rio-de-janeiro';

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na solicitação à API de previsão do tempo:', error);
  });
