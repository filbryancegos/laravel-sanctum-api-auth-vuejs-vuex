import axios from 'axios'

const table = {
	sports: 21,
	history: 23,
	politics: 24
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'
const URL = ''
const TEMP_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const state = {
	waiting: true,
	start: false,
	loading: false,
	questions: [],
	index: 0,
	correct: 0,
	error: false,
	setQuiz: {
		amount: 10,
		category: 'sports',
		difficulty: 'easy'
	},
	isModalOpen: false
};

const getters = {
	isLoading: state => state.loading,
	isWaiting: state => state.waiting,
	isStart: state => state.start,
	isQuestions: state => state.questions,
	isCurrentIndex: state => state.index,
	isCorrect: state => state.correct,
	isModalOpen: state =>  state.isModalOpen
};

const actions = {
	handleSubmit({commit}, payload) {
		commit('handleSubmit', payload)
	},
	checkAnswer({commit}, payload) {
		commit('checkAnswer', payload)
	},
	nextQuestion({commit}) {
		commit('nextQuestion')
	},
	closeModal({commit}) {
		commit('closeModal')
	}
};

const fetchQuestions = async (url) => {
	state.loading = true
	state.waiting = false
	state.start = false

	await fetch(url)
	.then(response => response.json())
	.then(response => {
		if (response) {
			const data = response.results
			if (data.length > 0) {
				state.questions = data
				state.loading = false
				state.waiting = false
				state.error = false
				state.start = true
			  } else {
				state.waiting = true
				state.error = true
				state.start = false
			  }
	
		} else {
			state.waiting = true
			state.start = false
		}
	})	
}

const nextQuestion = () => {
	const index = state.index + 1
	if (index > state.questions.length - 1) {
		state.isModalOpen = true
		return 0
	} else {
		state.index = index
		state.isModalOpen = false
	}
}

const mutations = {
	handleSubmit: (state, payload) => {
		const { amount, category, difficulty } = payload
		const URL = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
		fetchQuestions(URL)
	},
	checkAnswer: (state, payload) => {
		if (payload) {
			state.correct = state.correct + 1
		}
		nextQuestion()
	},
	nextQuestion: () => {
		nextQuestion()
	},
	closeModal: () => {
		state.waiting = true
		state.correct = 0
		state.isModalOpen = false
		state.start = false
		state.questions = []
		state.index = 0
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}