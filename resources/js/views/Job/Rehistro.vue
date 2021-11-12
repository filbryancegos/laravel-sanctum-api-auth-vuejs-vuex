<template>
  <div>
	  <div class="w-2/4 m-auto mt-8">
	  <h1 class="text-black text-3xl font-bold text-center">{{formData.isMember ? 'Login' : 'Register'}}</h1>
		<form @submit.prevent="onSubmit" class="register mt-8">
			<label v-if="!formData.isMember" class="block mb-8">
				<span class="text-gray-700">Name</span>
				<input 
				v-model="formData.name"
				type="text" 
				class="mt-1 block w-full rounded-sm" 
				placeholder="">
			</label>

			<label class="block mb-8">
				<span class="text-gray-700">Email</span>
				<input 
				v-model="formData.email"
				type="email" 
				class="mt-1 block w-full rounded-md" 
				placeholder="">
			</label>

			<label class="block mb-8">
				<span class="text-gray-700">Password</span>
				<input 
				v-model="formData.password"
				type="password" 
				class="mt-1 block w-full rounded-sm" 
				placeholder="">
			</label>
			
			<div>
				
				<button class="bg-purple-400 hover:bg-purple-500 p-4 text-white w-full rounded-sm mb-6">{{isLoading ? 'Fetching User...' : 'Submit'}}</button>
				<div class="text-center mb-2"> 
					<span>{{formData.isMember ? 'Not a member yet?' : 'Already a member?'}} </span>
					<span class="text-purple-500 cursor-pointer" @click="toggleMember"> {{formData.isMember ? 'Register' : 'Login'}}</span>
				</div>
			</div>
		</form>
		
	  </div>
  </div>
</template>

<script>
export default {
	name: 'Rehistro',
	data() {
		return {
			formData: {
				name: '',
				email: '',
				password: '',
				isMember: false
			}
			
		}
	},
	computed: {
		isLoading() {
			return this.$store.getters.setLoading
		}
	},

	methods: {
		toggleMember() {
			this.formData.isMember  = !this.formData.isMember
		},
		onSubmit() {
			const { name, email, password, isMember } = this.formData

			if (isMember) {
				const data = {
					email,
					password
				}
				this.$store.dispatch('login', data )
			} else {
				const data = {
					name, email, password
				}
				this.$store.dispatch('register', data )

				console.log(this.$store.getters.setLoading);
			}
		}
	}
}
</script>

<style>

</style>