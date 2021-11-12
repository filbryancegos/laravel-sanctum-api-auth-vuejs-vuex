import axios from 'axios';
import productHeader from './product-header';

console.log(productHeader())

const API_URL = 'http://laravel-api.test/api';

class ProductService {
	getProduct() {
		return axios
		.get(`${API_URL}/products`)
		.then(response => {
			return response;
		})
	}

	addProduct(product) {
		return axios
		.post(`${API_URL}/products`, product, { headers: productHeader() })
		.then(response => {
			return response;
		})
	}

	updateProduct(id, product) {
		return axios
		.put(`${API_URL}/products/${id}`, product, { headers: productHeader() })
		.then(response => {
			return response;
		})
	}

	singleProduct(id) {
		return axios
		.get(`${API_URL}/products/${id}`);
	}

	searchProduct(name) {
		return axios
		.get(`${API_URL}/products/search/${name}`);
	}
	
	deleteProduct(id) {
		return axios
		.delete(`${API_URL}/products/${id}`, { headers: productHeader() } )
		.then(response => {
			return response;
		})
	}
}

  export default new ProductService();