import { createApp } from "vue";
import Vue from "vue";
import VueLayers from "vuelayers";
import App from "./App.vue";

Vue.use(VueLayers);

var home = Vue({
	render: (h) => h("#home"),
}).$mount();
