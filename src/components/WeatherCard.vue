<template>
    <div v-if="state.cityName" class="weather-card">
      <h2>{{ state.cityName }}, {{ state.country }}</h2>
      <p>{{ state.description }}</p>
      <p>Temperatura: {{ Math.round(state.temperature / 10) }} °C</p>
      <p>Sensação Térmica: {{ Math.round(state.feelsLike / 10) }} °C</p>
      <p>Umidade: {{ state.humidity }}%</p>
      <p>Velocidade do Vento: {{ state.windSpeed }} m/s</p>
      <p>Nuvens: {{ state.clouds }}%</p>
    </div>
    <div v-else>
      Dados do clima não disponíveis.
    </div>
  </template>
  
  <script setup>
  import { defineProps, reactive, watchEffect } from 'vue';
  
  const props = defineProps(['weatherData']);
  const state = reactive({
    cityName: '',
    country: '',
    description: '',
    temperature: 0,
    feelsLike: 0,
    humidity: 0,
    windSpeed: 0,
    clouds: 0,
  });
  
  watchEffect(() => {
    if (props.weatherData) {
      state.cityName = props.weatherData.name || '';
      state.country = props.weatherData.sys?.country || '';
      state.description = props.weatherData.weather[0]?.description || '';
      state.temperature = props.weatherData.main?.temp || 0;
      state.feelsLike = props.weatherData.main?.feels_like || 0;
      state.humidity = props.weatherData.main?.humidity || 0;
      state.windSpeed = props.weatherData.wind?.speed || 0;
      state.clouds = props.weatherData.clouds?.all || 0;
    }
  });
  </script>
  
  <style scoped>
  .weather-card {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
  }
  
  h2 {
    color: #333;
  }
  
  p {
    margin: 8px 0;
  }
  </style>
  