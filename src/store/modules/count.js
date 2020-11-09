const state = {
	count: 0,
};
const getters = {
	getCountValue(state) {
		return state.count;
	},
};
const mutations = {
	increment(state) {
		return (state.count += 1);
	},
	decrement(state) {
		return (state.count -= 1);
	},
	incrementAsync(state, payload) {
		return (state.count += payload);
	},
};
const actions = {
	increment(context) {
		context.commit("increment");
	},
	decrement(context) {
		context.commit("decrement");
	},
	incrementAsync(context, payload) {
		setTimeout(() => {
			context.commit("incrementAsync", payload.by);
		}, payload.duration);
	},
};
export default {
	state,
	getters,
	mutations,
	actions,
};
