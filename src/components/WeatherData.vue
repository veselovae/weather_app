<template>
<div class="weather-data">
    <MainWeather :info="info" />
    <DetailedTempInfo :info="info" />
    <DetailedWeatherInfo :info="info" />
    <SunInfo :info="info" />
</div>
</template>

<script>
import MainWeather from './MainWeather.vue';
import DetailedTempInfo from './DetailedTempInfo.vue';
import DetailedWeatherInfo from './DetailedWeatherInfo.vue';
import SunInfo from './SunInfo.vue';

export default {
    components: { MainWeather, DetailedTempInfo, DetailedTempInfo, DetailedWeatherInfo, SunInfo },

    props: {
        info: {
            type: Object,
            required: true,
        }
    }
}

</script>

<style scoped> 

</style>