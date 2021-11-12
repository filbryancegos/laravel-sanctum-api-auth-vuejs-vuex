import Vue from "vue"
import Vuex from "vuex"
// import axios from 'axios';

// import auth from "./Module/auth"
import auth  from "./auth"
import product from "./product"
import cart from "./cart"
import quiz from "./quiz"
import job from "./job"
Vue.use(Vuex);

export default new Vuex.Store( {
	modules: {
		auth,
		product,
		cart,
		quiz,
		job
	}
})