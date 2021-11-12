<template>
	<div>
		 <div class="bg-blue-500 px-10 py-5 text-white d-none">
			 <div class="flex justify-end mb-4">
				<label class="switch">
					<input type="checkbox" v-model="checked" @change="onMode" >
					<span class="slider round"></span>
				</label>
			</div>
			<div>
				<ul class="flex  items-center w-full" :class="[isLoggedIn ? 'justify-between' : 'justify-between']">
					<div v-if="!isLoggedIn">
						<router-link to="/">Home</router-link>
					</div>
					
					<div v-if="isLoggedIn" class="space-x-4">
						<router-link to="/">Home</router-link>
						<router-link :to="{name: 'Products'}">Products</router-link>
						<router-link :to="{name: 'Notes'}">Notes</router-link>
						<router-link :to="{name: 'Cart'}">Cart</router-link>
						<router-link :to="{name: 'Quiz'}">Quiz</router-link>
						<router-link :to="{name: 'Job'}">Job</router-link>
						
					</div>

					<div v-if="isLoggedIn" class="space-x-4 flex items-center">
						<div>
							<a class="cursor-pointer block" @click="logout">Logout</a>
						</div>
					</div>

					<div v-if="!isLoggedIn" class="space-x-4">
						<router-link :to="{name: 'Login'}">Login</router-link>
						<router-link :to="{name: 'Register'}">Register</router-link>
					</div>
				</ul>
			</div>
		</div>
		<div class="px-10 py-8 min-h-screen " :class="{ 'bg-gray-300': checked }">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import 'vuejs-noty/dist/vuejs-noty.css'
export default {
	data() {
		return {
			checked: false
		}
	},
	computed : {
		isLoggedIn() {
			return this.$store.getters.isLoggedIn
		}
	
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
			.then(() => {
				this.$noty.success("You successfully log out")
				this.$router.push('/login')
			})
		},
		onMode() {
			console.log(this.checked)
		}
	}
}
</script>

<style scoped>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input { 
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
	}

	input:checked + .slider {
		background-color: #2196F3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196F3;
	}

	input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
	border-radius: 34px;
	}

	.slider.round:before {
	border-radius: 50%;
	}
</style>