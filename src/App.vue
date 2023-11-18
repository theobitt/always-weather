<template>
  <div>
    <input @change="handleSearch()" type="text" v-model="cidade">
    <WeatherCard :weatherData="weatherData" />
  </div>
</template>

<script setup>
import WeatherCard from './components/WeatherCard.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const apiKey = '190dcd76cf4cabc87e9f07e305df8516';
const weatherData = ref(null);
const cidade = ref("Rio de Janeiro");

function handleSearch() {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade.value}&appid=${apiKey}`)
    .then(response => {
      weatherData.value = response.data;
      console.log(weatherData.value)
    })
    .catch(error => {
      console.error('Erro na solicitação à API de previsão do tempo:', error);
    });
}

onMounted(() => {
  // Chamada inicial para 'Rio de Janeiro'
  handleSearch();
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
