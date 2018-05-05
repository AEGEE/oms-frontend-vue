import Vue from "vue";
import Application from "./components/Application.vue";

import router from "./router.ts";

let v = new Vue({
    router: router,
    el: "#app",
    template: `<application></application>`,
    components: {
      Application,
    },
});
