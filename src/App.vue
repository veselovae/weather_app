<template>
  <div class="wrapper"> 
    <h1>WeatherApp</h1>
    <input type="text" v-model="city" placeholder="Enter the city" @keydown="getData($event)" autofocus>
    <button v-if="city != ''" @click="getWeather()">Search</button>
    <button v-else class="disabled" disabled @click="emptyInp()">Search</button>

    <p class="error">{{ error }}</p>

    <WeatherData :info="info" v-if="info != null"/>
  </div>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow';

import axios from 'axios';
import WeatherData from './components/WeatherData.vue';

export default {
  components: { WeatherData },

  mixins: [smoothReflow],

  data() {
    return {
      city: '',
      cityName: '',
      error: '',
      info: null,
    }
  },

  mounted(){
        this.$smoothReflow()
    },

  methods: {
    getWeather() {

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=d1c1073cd52af103cef859ea159ea52b`)
      .catch(() => { 
          this.info = null;
          this.error = 'The city was not found';
          return;
        })
        .then(res => (this.info = res.data));

        this.error = '';
        this.cityName = this.city;
      
    },

    getData(event) {
      if (this.city === '') {
        return false;
      }

      if (event.key === 'Enter') {
        this.getWeather();
      }
    },  
  },
}
</script>

<style scoped>
  .wrapper {
    width:  700px;
    /*max-height: 219px;*/
    border-radius: 50px;
    background: #1f0f24;
    color: #fff;
    text-align: center;
    transition: all .3s ease;
    padding: 50px 0px;
    overflow: hidden;
  }

  /*.error-wrapper {
    max-height: 237px; edit
    transition: all .3s ease;
    overflow: hidden;
  }*/

  /*.info-wrapper {
    max-height: 788px; edit
    transition: all .3s ease;
    overflow: hidden;
  }*/

  .wrapper h1 {
    margin-bottom: 20px;
  }

  .wrapper input {
    margin-top: 20px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #6a6a6a;
    color: #fcfcfc;
    font-size: 14px;
    padding: 5px 8px;
    outline: none;
    transition: all .2s;
    font-size: 15px;
  }
  .wrapper input:focus {
    border-bottom-color: #6e2d7d;
  }

  .wrapper button {
    background: #22c1c3;
    color: #fff;
    border-radius: 10px;
    padding: 10px 25px;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: all .2s;
    margin-left: 20px;
    font-size: 15px;
  }

  .wrapper button:hover {
    background: #1ca1a3;
  }

  .wrapper button.disabled {
    background: #a0b1b2;
    cursor: not-allowed;
  }

  .error {
    color: red;
    margin-top: 10px;
  }

  p.city-name {
    font-size: 20px;
  }

  div.info {
    margin-bottom: 50px;
    margin-top: 25px;
  }
</style>
