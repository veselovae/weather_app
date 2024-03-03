<template>
<div class="main">
    <div class="discription-weather">
        <span class="temp">{{ getTemp }}</span>
        <span class="desc">{{ getWeatherDiscription }}</span>
    </div>
    <img :src="getSrcImg" alt="image">
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
        getSrcImg() {
            return `../src/assets/${this.info?.weather[0].main.split('')[0].toLowerCase() + this.info?.weather[0].main.slice(1)}.png`
        },
        getTemp() {
            return `${this.info?.main.temp} °C`
        },
        getWeatherDiscription() {
            let desc = this.info?.weather[0].description;
            return desc.split('')[0].toUpperCase() + desc.slice(1)
        }
    }
}
</script>

<style scoped>
    .main {
        display: flex;
        justify-content: center;
        gap: 50px;
    }
    .discription-weather {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 224px;
    }

    .discription-weather .temp {
        text-align: left;
        font-size: 50px;
        margin-bottom: 7px;
    }
    .discription-weather .desc {
        text-align: left;
        font-size: 20px;
    }
</style>