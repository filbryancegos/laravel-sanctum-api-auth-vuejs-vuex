import ProductService from '../services/product.service';

const state = {
	products: []
};

const getters = {
	allProducts: state => state.products
};

const actions = {
	getProduct({ commit }) {
	commit('auth_request')
		return ProductService.getProduct().then(
			response => {
				commit('setProducts',response.data)
				return Promise.resolve(response);
			}
		);
	},
	addProduct({ commit }, product) {
		return ProductService.addProduct(product).then(
			response => {
			return Promise.resolve(response);
		  },
		  error => {
			return Promise.reject(error);
		  }
		);
	},
	singleProduct({commit}, id, product) {
		return ProductService.singleProduct(id, product).then(
			response => {
			return Promise.resolve(response);
		  }
		);
	},
	updateProduct({commit}, id, product) {
		return ProductService.updateProduct(id, product).then(
			response => {
			console.log(response)
			return Promise.resolve(response);
		  },
		  error => {
			return Promise.reject(error);
		  }
		);
	},
	deleteProduct({commit}, id) {
		return ProductService.deleteProduct(id).then(
			response => {
				console.log(response, 'brutos');
				return Promise.resolve(response);
			},
			error => {
				console.log("error")
			}
		)
	}

};

const mutations = {
	setProducts: (state, data) => state.products = data
};

export default {
	state,
	getters,
	actions,
	mutations
}
