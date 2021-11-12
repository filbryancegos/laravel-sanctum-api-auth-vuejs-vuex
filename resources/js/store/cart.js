import axios from 'axios';
const url = 'https://course-api.com/react-useReducer-cart-project';

const state = {
	loading: false,
	cart: [],
	total: 0,
	amount: 12
};

const getters = {
	getCart: state => state.cart,
	getTotal: state => state.total,
	getAmount: state => state.amount
};

const actions = {
	async fetchCart({commit}) {
		const response = await axios.get(url)
		commit('setCart',response.data)
	},
	removeItem({commit}, payload) {
		commit('deleteItem', payload)
	},
	toogleAmount({commit}, payload) {
		commit('toogleAmount', payload)
	}
};

const getTotalAmount = () => {
	let {total, amount} = state.cart.reduce((prevTotal, currentValue) => {
		
		const {price, amount} = currentValue;
		const itemTotal = price * amount;

		prevTotal.total += itemTotal
		prevTotal.amount += amount

		return prevTotal
	},{ 
		total:0, 
		amount:0 
	})

	total = parseFloat(total.toFixed(2))
	state.total = total
	state.amount = amount
}
const mutations = {
	setCart: (state, response) => {
		state.cart = response;
		getTotalAmount()
	},
	deleteItem: (state, payload) => {
		state.cart = state.cart.filter(item => item.id !== payload)
		getTotalAmount()
	},
	toogleAmount: (state, payload) => {
		let tempCart = state.cart
		.map(cartItem => {
			if (cartItem.id === payload.id) {
				if (payload.type === 'inc') {
					return {...cartItem, amount: cartItem.amount + 1 }
				}
				if (payload.type === 'dec') {
					return {...cartItem, amount: cartItem.amount - 1}
				}
			}
			return cartItem
		})
		.filter(cartItem => cartItem.amount !== 0)
		state.cart = tempCart
		getTotalAmount()
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
