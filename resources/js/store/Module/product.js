import axios from 'axios';
const URL = 'http://laravel-api.test/api';
const headers = {
	'Accept': 'application/json',
} 
const token = localStorage.getItem('token')

if (token) {
	axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}


const state = {
	products: [],
};

const getters = {
	allProducts: state => state.products
};


const actions = {
	async fetchProducts({commit}) {
		const response = await axios.get('http://laravel-api.test/api/products')
		console.log(response)
		commit('setProducts',response.data)
	},

	addProduct({commit}, user) {
		return new Promise((resolve, reject) => {
			axios({url: 'http://laravel-api.test/api/products', data: user, method: 'POST', headers })
			.then(resp => {
				resolve(resp)
			})
			.catch(err => {
				reject(err)
			})
		})
	},
	singleProduct({commit}, id) {

		console.log(id, 'solod')
		return new Promise((resolve, reject) => {
			axios({url: `http://laravel-api.test/api/products/${id}`, method: 'GET', headers })
			.then(resp => {

				console.log(resp);
				resolve(resp)
			})
			.catch(err => {
				reject(err)
			})
		})
	}

};
const mutations = {
	setProducts: (state, data) => {
		return state.products = data
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}