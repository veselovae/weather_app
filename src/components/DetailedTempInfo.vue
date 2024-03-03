<template>
    <div class="temp-info">
        <div class="temp-min-max">
            <div class="min-temp">
                <font-awesome-icon icon="temperature-arrow-down" class="svg"/>
                <p class="min-temp">{{ getMinTemp }}</p>
            </div>
            <div class="max-temp">
                <font-awesome-icon icon="temperature-arrow-up"  class="svg"/>
                <p class="min-temp">{{ getMaxTemp }}</p>
            </div>
        </div>
        <div class="feels-like">
            <p class="feels-like-text">{{ getFeelsLike }}</p>
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
            getMinTemp() {
                return `${this.info?.main.temp_min} °C`
            },
            getMaxTemp() {
                return `${this.info?.main.temp_max} °C`
            },
            getFeelsLike() {
                return `Feels like: ${this.info?.main.feels_like} °C`
            }
        }
    }
    </script>
    
    <style scoped>
    .temp-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        color: #afafaf;
    }
    .temp-min-max {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }


    div.min-temp, div.max-temp {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 224px;
        justify-content: center;
    }

    div.min-temp .svg, div.max-temp .svg {
        font-size: 30px;
    }

    .feels-like {
        font-size: 20px;
    }

    .feels-like-text {
        width: 224px;
        text-align: center;
    }
    </style>