import axios from 'axios';
const API_URL = 'http://laravel-api.test/api';

class AuthService {
	login(user) {
	  return axios
		.post(`${API_URL}/login`, user)
		.then(response => {
		  if (response.data.token) {
			localStorage.setItem('user', JSON.stringify(response.data));
			localStorage.setItem('token', response.data.token);
		  }
		  return response.data;
		});
	}
  
	logout() {
	  localStorage.removeItem('user');
	  localStorage.removeItem('token');
	}
  
	register(user) {
	  return axios
	  .post(`${API_URL}/register`, user)
	}
  }

  export default new AuthService();