import AuthService from '../services/auth.service';

const state = {
	status: '',
    token: localStorage.getItem('token') || '',
    user : {}
};

const getters = {
	isLoggedIn: state => !!state.token,
  	authStatus: state => state.status,
};

const actions = {
	login({ commit }, user) {
		commit('auth_request')
		return AuthService.login(user).then(
			user => {
			localStorage.setItem('token', user.token);
			commit('auth_success', user)
			return Promise.resolve(user);
		  },
		  error => {
			commit('auth_error')
			localStorage.removeItem('token')
			return Promise.reject(error);
		  }
		);
	  },
	  logout({commit}) {
		AuthService.logout();
		commit('logout');
	  },
	  register({ commit }, user) {
		commit('auth_request')
		return AuthService.register(user).then(
			response => {
				commit('auth_success', response)
			return Promise.resolve(response.data);
		  },
		  error => {
			commit('auth_error')
			return Promise.reject(error);
		  }
		);
	  }
}

const mutations = {
	auth_request(state){
		state.status = 'loading'
	},
	auth_success(state, response){
		state.status = 'success'
		state.token = response.token
		state.user = response.user
	},
	auth_error(state){
		state.status = 'error'
	},
	logout(state){
		state.status = ''
		state.token = ''
	},
} 

export default {
	state,
	getters,
	actions,
	mutations

}



