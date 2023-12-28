<template>
  <div
    style="
      gap: 1rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: white;
      display: flex;
      flex-direction: row;
    "
  >
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <a href="https://www.linkedin.com/in/theobittencourt/">
        <img class="icon" src="./assets/img/user.png" title="Contato" />
      </a>
      
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <a href="https://github.com/theobitt">
        <img class="icon" src="./assets/img/github.png" title="Portifolio" />
      </a>
      
    </div>
  </div>
  <div class="main">
    <div style="display: flex; justify-content: center; gap: 0.6rem">
      <input
        class="input"
        placeholder="Rio De Janeiro"
        type="text"
        v-model="cidade"
      />
      <button class="button" @click="handleSearch()">Buscar</button>
    </div>
    <div v-if="isFirstTime" class="weather-card-skeleton">
      <h6 style="font-weight: 500; margin-top: -0.25rem; margin-bottom: 1rem">
        Consulte o clima
        <br />
        de <bold style="font-weight: bolder"> QUALQUER </bold> cidade!
      </h6>
      <div class="weather -icon">
        <img src="./assets/img/home.png" class="skeleton-img" />
      </div>
    </div>
    <WeatherCard v-else :weatherData="weatherData" />
  </div>
</template>

<script setup>
import WeatherCard from "./components/WeatherCard.vue";
import axios from "axios";
import obterLatLonPorNomeCidade from "./utils/axios";
import { onMounted, ref } from "vue";
const apiKey = import.meta.env.VITE_API_KEY;
const weatherData = ref(null);
const cidade = ref("");
const isLoading = ref(false);
const isFirstTime = ref(true);
async function handleSearch() {
  if (cidade.value.length > 4)
    obterLatLonPorNomeCidade(cidade.value)
      .then((response) => {
        isLoading.value = true;
        if (isFirstTime) {
          isFirstTime.value = false;
        }
        const nome = response.data[0].name;
        let lat = response.data[0].latitude;
        let lon = response.data[0].longitude;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
          )
          .then((response) => {
            weatherData.value = response.data;
            weatherData.value.name = nome;
            isLoading.value = false;
          })
          .catch((error) => {
            isLoading.value = true;
            console.error(
              "Erro na solicitação à API de previsão do tempo:",
              error
            );
          });
      })
      .catch((error) => {
        console.error(error);
      });
}

onMounted(() => {});
</script>

<style scoped>
.main {
  transform: scale(1.5);
}
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
