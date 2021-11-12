
const state = {
	status: '',
    token: localStorage.getItem('token') || '',
    user : {}
};

const URL = 'http://laravel-api.test/api';
const headers = {
	'Accept': 'application/json',
  }

const getters = {
	isLoggedIn: state => !!state.token,
  	authStatus: state => state.status,
};

const actions = {
	login({commit}, user){
		return new Promise((resolve, reject) => {
		  commit('auth_request')
		  axios({url:`${URL}/login`, data: user, method: 'POST', headers })
		  .then(resp => {
			localStorage.setItem('token', resp.data.token)
			// axios.defaults.headers.common['Authorization'] = token
			commit('auth_success', resp.data)
			resolve(resp)
		  })
		  .catch(err => {
			commit('auth_error')
			localStorage.removeItem('token')
			reject(err)
		  })
		})
	},
	register({commit}, user) {
		return new Promise((resolve, reject) => {
			commit('auth_request')
			axios({url: `${URL}/register`, data: user, method: 'POST', headers })
			.then(resp => {
				localStorage.setItem('token', resp.data.token)
				// axios.defaults.headers.common['Authorization'] = token
				commit('auth_success', resp.data)
				resolve(resp)
			})
			.catch(err => {
				commit('auth_error', err)
				localStorage.removeItem('token')
				reject(err)
			})
		})
	},
	logout({commit}){
		return new Promise((resolve, reject) => {
			commit('logout')
			localStorage.removeItem('token')
			// delete axios.defaults.headers.common['Authorization']
			resolve()
		})
	}
};


const resetErrors = (values) => {
	for (const key in values) {
		if (values.hasOwnProperty(key)) {
			values[key] = null;
		}
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
};

export default {
	state,
	getters,
	actions,
	mutations
}