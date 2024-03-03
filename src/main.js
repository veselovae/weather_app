import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTemperatureArrowDown,  faTemperatureArrowUp, faWind, faArrowsDownToLine, faEye, faArrowUp, faArrowDown, faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";
import { faSun as sunRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTemperatureArrowDown,  faTemperatureArrowUp, faWind, faArrowsDownToLine, faEye, faSun, faArrowUp, faArrowDown, faDroplet);
library.add(sunRegular)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
// createApp(App).mount('#app')
