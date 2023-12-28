<template>
  <div v-if="state.NotLoading" class="weather-card">
    <h2>{{ state.cityName }}, {{ state.estado }}</h2>
    <div class="weather-icon">
      <img :src="getWeatherIcon(state.description)" alt="Weather Icon" />
    </div>
    <div class="weather-info">
      <div class="weather-details">
        <p>Temperatura: {{ Math.round(state.temperature - 273.15) }} °C</p>
        <p>Sensação Térmica: {{ Math.round(state.feelsLike / 10) }} °C</p>
        <p>Umidade: {{ state.humidity }}%</p>
        <p>Velocidade do Vento: {{ state.windSpeed }} m/s</p>
        <p>Nuvens: {{ state.clouds }}%</p>
      </div>
    </div>
  </div>
  <div v-else class="weather-card-skeleton">
    <h2 class="skeleton-title">
      
    </h2>
    <div class="weather-icon">
      <div class="skeleton-img" />
    </div>
    <div class="weather-info">
      <div class="weather-details">
        <p class="skeleton-text" />
        <p class="skeleton-text" />
        <p class="skeleton-text" />
        <p class="skeleton-text" />
        <p class="skeleton-text" />
      </div>
    </div>
   
  </div>
</template>

<script setup>
import { defineProps, reactive, watchEffect } from 'vue';
import clouds from "../assets/img/clouds.png"
import sunny from "../assets/img/sunny.png"
import padrao from "../assets/img/padrao.png"
import rain from "../assets/img/rain.png"
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
  estado: '',
  NotLoading: false
});

watchEffect(() => {
  if (props.weatherData) {
    state.NotLoading = false;
    setTimeout(() => {
      state.NotLoading = true;
      console.log("aqui", props.weatherData);
      state.cityName = props.weatherData.name || '';
      state.country = props.weatherData.sys?.country || '';
      state.description = props.weatherData.weather[0]?.description || '';
      state.temperature = props.weatherData.main?.temp || 0;
      state.feelsLike = props.weatherData.main?.feels_like || 0;
      state.humidity = props.weatherData.main?.humidity || 0;
      state.windSpeed = props.weatherData.wind?.speed || 0;
      state.clouds = props.weatherData.clouds?.all || 0;
      state.estado = props.weatherData.state || props.weatherData.sys?.country;
      console.log("aqui", props.weatherData);
    }, 750); // Ajuste o tempo de simulação conforme necessário

  }
});
const getWeatherIcon = (description) => {
  if (description.includes('clear')) {
    return sunny;
  } else if (description.includes('cloud')) {
    return clouds;
  } 
  else if (description.includes('rain')) {
    return rain;
  } 
  else {
    return padrao;
  }
};
</script>

<style>
.weather-card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  transition: opacity 0.5s linear;

}
.weather-card-skeleton {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  transition: opacity 0.5s linear;

}
.weather-card-skeleton {
  opacity: 1;
}

.weather-card.loading {
  opacity: 1;
}

.skeleton-img{
  background-color: #e5e2e2;
  padding: 10px;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  /* filter: invert(54%) sepia(0%) saturate(172%) hue-rotate(148deg) brightness(95%) contrast(89%); */
}
h2 {
  color: #333;
}

.weather-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.skeleton-text{
  width: 210px;
  height: 20px;
  background-color:#e5e2e2;
  border-radius: 20px;
}
.skeleton-title{
  background-color:#e5e2e2;
  border-radius: 20px;
  
  height: 35px;
  width: 210px;
}
.weather-icon{
  width: 100%;
  justify-content: center;
  display: flex;
}

.weather-icon img {
  max-width: 80px;
}

.weather-details {
  text-align: left;
}

p {
  margin: 8px 0;
}
</style>
