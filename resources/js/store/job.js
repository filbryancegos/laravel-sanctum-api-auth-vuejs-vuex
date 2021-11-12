import '../services/job-header'

const state = {
	user: null,
	isLoading: false,
	job: [],
	showAlert: false,
	editItem: null,
	singleJobError: false,
	editComplete: false
};

const setLoading = () => {
	state.isLoading = true
}

const isLogout = () => {
	localStorage.removeItem('user')
	state.user = null;
	state.showAlert = false;
	state.jobs = [];
	state.isEditing = false;
	state.editItem = null;
}


const getters = {
	setLoading: (state) => state.isLoading
};
const actions = {
	async register({commit}, user) {
		console.log(user);
		commit('setLoading')
		try {
			const { data } = await axios.post(`https://jobs-api-06.herokuapp.com/api/v1`,user )
			  commit('setUser', data.user.name)
			  localStorage.setItem(
				'user', 
				JSON.stringify({ name: data.user.name, token: data.token })
			  )
		} catch (error) {
			state.showAlert = true
		}
	},

	async login({commit}, user) {
		commit('setLoading')
		// try {
		// 	const { data } = await axios.post(`/auth/login`, {
		// 		...user,
		// 	  })
		// 	  commit('setUser', data.user.name)
		// 	  localStorage.setItem(
		// 		'user', 
		// 		JSON.stringify({ name: data.user.name, token: data.token })
		// 	  )
		// } catch (error) {
		// 	state.showAlert = true
		// }
	},
	logout({commit}) {
		isLogout()
	},

	async fetchJobs({commit}) {
		setLoading()
		try {
			const { data } = await axios.get(`/jobs`)
			commit('fetchJobs', data.jobs)
		  } catch (error) {
			state.isLoading = false
			logout()
		  }
	},
	async createJob({commit} , user) {
		commit('setLoading')
		try {
			const { data } = await axios.post(`/jobs`, {
			  ...user,
			})
		  } catch (error) {
			  state.isLoading = false
			  state.showAlert = true
		  }
	}
};
const mutations = {
	setLoading: (state) => {
		state.isLoading = true

		console.log(state);
	},
	setUser: (state, user) => {
		state.user = user
		state.isLoading = false
	},
	fetchJobs: (state, jobs) => {
		state.jobs = jobs
		state.isLoading = false
		state.editItem = false
		state.singleJobError = false
		state.editItem = false
	}
};


export default {
	state,
	getters,
	actions,
	mutations
}