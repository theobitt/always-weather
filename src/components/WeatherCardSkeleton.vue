<template>
    <div class="weather-card-skeleton">
        <h2 class="skeleton-title"  />
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

<script>
export default {

}
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
}
.weather-card-skeleton {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
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

.home-text{
  width: 210px;
  height: 20px;
  background-color:#ffffff;
  border-radius: 20px;
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