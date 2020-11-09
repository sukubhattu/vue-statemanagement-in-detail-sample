import Vue from "vue";
import Vuex from "vuex";

// Import other store
import count from "./modules/count";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		count,
	},
});
