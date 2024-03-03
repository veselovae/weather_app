<template>
    <div class="sun-info">
        <div class="sunrise-info">
            <div class="svgs">
                <font-awesome-icon icon="sun" class="svg sun-svg" />
                <font-awesome-icon icon="arrow-up" class="svg" />
            </div>
            <p class="sun-text">Sunrise</p>
            <p class="sun-time">{{ getSunrise }}</p>
        </div>
        <div class="sunset-info">
            <div class="svgs">
                <font-awesome-icon :icon="['far', 'sun']" class="svg sun-svg" />
                <font-awesome-icon icon="arrow-down" class="svg" />
                <p class="sun-text">Sunset</p>
                <p class="sun-time">{{ getSunset }}</p>
            </div>
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
        getSunrise() {
            const date = new Date(this.info?.sys.sunrise * 1000);
            let minutes = date.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return `${date.getHours()}:${minutes}`;
        },

        getSunset() {
            const date = new Date(this.info?.sys.sunset * 1000);
            let minutes = date.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return `${date.getHours()}:${minutes}`;
        }
    }
}
</script>

<style>
    .sun-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-top: 50px;
        color: #afafaf;
    }

    .sunrise-info, .sunset-info {
        width: 224px;
    }

    .svg {
        font-size: 30px;
    }

    .sun-svg {
        margin-right: 5px;
    }

    .sun-text {
       font-size: 13px;
       margin-top: 8px;
    }

    .sun-time {
        font-size: 25px;
       margin-top: 10px;
    }
</style>