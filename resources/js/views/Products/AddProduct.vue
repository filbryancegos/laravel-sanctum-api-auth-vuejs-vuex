<template>
   <div>
	  <h1 class="text-black text-3xl text-center">This is Add product</h1>

	  <div class="w-2/4 m-auto mt-8">
		<form @submit.prevent="addProduct" class="mt-8">
			<label class="block mb-6">
				<span class="text-gray-700">Name</span>
				<input 
				v-model="formData.name" 
				:class="{ 'border-red-500': has_error && errorsMessages.name }" 
				type="text" class="mt-1 block w-full rounded-sm" placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.name">{{ errorsMessages.name }}</span>
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Slug</span>
				<input
				v-model="formData.slug" 
				:class="{ 'border-red-500': has_error && errorsMessages.slug }"  
				type="text" class="mt-1 block w-full rounded-sm" placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.slug">{{ errorsMessages.slug }}</span>
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Description</span>
				<input
				v-model="formData.description" 
				:class="{ 'border-red-500': has_error && errorsMessages.description }" 
				type="text" class="mt-1 block w-full rounded-sm" placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.description">{{ errorsMessages.description }}</span>
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Price</span>
				<input
				v-model="formData.price" 
				:class="{ 'border-red-500': has_error && errorsMessages.price }"  
				type="text" class="mt-1 block w-full rounded-sm" placeholder="">
				<span class="help-block text-red-500" v-if="has_error && errorsMessages.price">{{ errorsMessages.price }}</span>
			</label>
			<div class="flex">
				<button class="bg-blue-400 hover:bg-blue-500 p-4 text-white w-full rounded-sm">Add Product</button>
			</div>
		</form>
		
	  </div>
  </div>
</template>

<script>
export default {
	name: 'AddProduct',
	data() {
		return {
			formData: {
				name: '',
				slug: '',
				description: '',
				price: ''
			},
			errorsMessages: {},
			has_error: false
		}
	},
	methods: {
		addProduct() {
			this.$store.dispatch('addProduct', this.formData)
			.then(() => {
				this.$router.push('/product')
				this.$noty.success("You successfully added product")
				this.clearFields(this.formData)
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
		clearFields(data) {
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					data[key] = '';
				}
			}
		}
	},
}
</script>

<style>

</style>