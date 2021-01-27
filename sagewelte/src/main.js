import Vue from "vue";
import VueLayers from "vuelayers";
import App from "./App.vue";
import "vuelayers/lib/style.css";

Vue.use(VueLayers);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
