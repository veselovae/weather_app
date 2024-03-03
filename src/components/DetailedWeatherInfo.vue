<template>
    <div class="ditailed-weather-info">
        <div class="wind weather-parameter">
            <div><font-awesome-icon icon="wind" class="svg" /></div>
            <p class="parameter-name">Wind</p>
            <p class="parameter-value">{{ getWind }}</p>
        </div>
        <div class="humidity weather-parameter">
           <div><font-awesome-icon icon="droplet"  class="svg" /></div>
           <p class="parameter-name">Humidity</p>
           <p class="parameter-value">{{ getHumidity }}</p>
        </div>
        <div class="pressure weather-parameter">
            <div><font-awesome-icon icon="arrows-down-to-line"  class="svg" /></div>
            <p class="parameter-name">Pressure</p>
            <p class="parameter-value">{{ getPressure }}</p>
        </div>
        <div class="visibility weather-parameter">
            <div><font-awesome-icon icon="eye"  class="svg" /></div>
            <p class="parameter-name">Visibility</p>
            <p class="parameter-value">{{ getVisibility }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            required: true,
        }
    },
    computed: {
        getWind() {
            return `${this.info?.wind.speed} km/h`
        },

        getHumidity() {
            return `${this.info?.main.humidity}%`
        },

        getPressure() {
            return `${this.info?.main.pressure} mbar`
        },

        getVisibility() {
            return `${(this.info?.visibility / 1000).toFixed(2).replace(/[.,]00$/, '')} km`
        }
    }
}
</script>

<style scoped>
.ditailed-weather-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 100px 0 140px;
}
.weather-parameter div {
    height: 23px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.weather-parameter .svg {
    font-size: 23px;
    color: #afafaf;
}

.weather-parameter .parameter-name {
    font-size: 13px;
    margin-bottom: 10px;
    color: #afafaf;
}

.weather-parameter .parameter-value {
    font-size: 18px;
}
</style>