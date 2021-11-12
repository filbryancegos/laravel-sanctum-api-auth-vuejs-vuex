<template>
  <div>
	  <h1 class="text-black text-3xl text-center">This is Register</h1>

	  <div class="w-2/4 m-auto mt-8">
		<form @submit.prevent="onRegister" class="register">
			<label class="block mb-8">
				<span class="text-gray-700">Name</span>
				<input 
				v-model="formData.name" 
				type="text" 
				class="mt-1 block w-full rounded-sm" 
				:class="{ 'border-red-500': has_error && errorsMessages.name }" 
				placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.name">{{ errorsMessages.name }}</span>
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Email</span>
				<input 
				v-model="formData.email" 
				type="email" class="mt-1 block w-full rounded-sm" 
				:class="{ 'border-red-500': has_error && errorsMessages.email }" 
				placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.email">{{ errorsMessages.email }}</span>
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Password</span>
				<input 
				v-model="formData.password" 
				type="password" class="mt-1 block w-full rounded-sm" 
				:class="{ 'border-red-500': has_error && errorsMessages.password }" 
				placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.password">{{ errorsMessages.password }}</span>
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Confirm Password</span>
				<input v-model="formData.password_confirmation" type="password" class="mt-1 block w-full rounded-sm" placeholder="">
			</label>

		

			<div class="flex">
				<button class="bg-blue-400 hover:bg-blue-500 p-4 text-white w-full rounded-sm">Register</button>
			</div>
		</form>
		
	  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'Register',
	data() {
		return {
			formData: {
				name: '',
				email: '',
				password: '',
				password_confirmation: ''
			},
			errorsMessages: {},
			has_error: false
		}
	},
	methods: {
		onRegister() {
			this.$store.dispatch('register', this.formData)
			.then((response) => {
				console.log(response, 'amang');
				this.$router.push('/')
				this.$noty.success("You successfully registered")
			},
			(error) => {
				const errors = error.response.data.errors
				this.has_error = true
				Object.keys(errors).forEach(err => {
					const errorKey = err
					if (errors.hasOwnProperty(errorKey)) {
						this.errorsMessages[errorKey] = errors[errorKey][0]
					}
				})
			});
			
			// .then(() => {
			// 	this.$noty.success("You successfully log in")
			// 	this.$router.push('/')
			// 	this.clearFields()
			// })
			// .catch(err => {
			// 	const errors = err.response.data.errors

			// 	console.log('errors')
			// 	this.has_error = true
			// 	Object.keys(errors).forEach(err => {
			// 		const errorKey = err
			// 		if (errors.hasOwnProperty(errorKey)) {
			// 			this.errorsMessages[errorKey] = errors[errorKey][0]
			// 		}
			// 	})
			// })
		},
		clearFields() {
			this.formData.name = ''
			this.formData.email = ''
			this.formData.password = ''
			this.formData.password_confirmation = ''
		}

	}

}
</script>

<style scoped>
	input.has_error {
		border: 1px solid red;
	}
</style>

