<template>
    <div class="main">
        <div class="discription-weather">
            <span class="temp">{{ getTemp }}</span>
            <span class="desc">{{ getWeatherDiscription }}</span>
        </div>
        <img :src="getSrcImg" alt="image" class="weather-img" />
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                required: true,
            },
        },

        computed: {
            getSrcImg() {
                const src = `../assets/${this.info?.weather[0]?.main.toLowerCase()}.PNG`;
                return new URL(src, import.meta.url);
            },
            getTemp() {
                return `${this.info?.main.temp} °C`;
            },
            getWeatherDiscription() {
                let desc = this.info?.weather[0].description;
                return desc.split("")[0].toUpperCase() + desc.slice(1);
            },
        },
    };
</script>

<style scoped>
    .main {
        display: flex;
        justify-content: center;
        gap: 50px;
    }

    .weather-img {
        width: 225px;
        height: 225px;
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
