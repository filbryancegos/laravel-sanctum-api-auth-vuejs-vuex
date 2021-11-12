<template>
   <div>
	  <h1 class="text-black text-3xl text-center">This is Login</h1>
	  <div class="w-2/4 m-auto mt-8">
		<form @submit.prevent="onLogin">
			<label class="block mb-6">
				<span class="text-gray-700">Email</span>
				<input 
				v-model="formData.email"
				:class="{ 'border-red-500': has_error && errorsMessages.email }" 
				type="email" class="mt-1 block w-full rounded-sm" placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.email">{{ errorsMessages.email }}</span>
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Password</span>
				<input
				v-model="formData.password"
				:class="{ 'border-red-500': has_error && errorsMessages.password }"
				 type="password" class="mt-1 block w-full rounded-sm" placeholder="">
				 <span class="help-block text-red-500" v-if="has_error && errorsMessages.password">{{ errorsMessages.password }}</span>
			</label>
			<div class="flex">
				<button class="bg-blue-400 hover:bg-blue-500 p-4 text-white w-full rounded-sm">Login</button>
			</div>
		</form>
	  </div>
  </div>
</template>
<script>

export default {
	name: 'Login',
	data() {
		return {
			formData: {
				email: '',
				password: ''
			},
			errorsMessages: {
				email: '',
				password: ''
			},
			has_error: false
		}
	},
	methods: {
		onLogin() {
			this.$store.dispatch('login', this.formData)
			.then(() => {
				this.$router.push('/')
				this.$noty.success("You successfully log in")
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
		},
		clearFields() {
			this.formData.email = ''
			this.formData.password = ''
		}
	}
}
</script>

<style>

</style>