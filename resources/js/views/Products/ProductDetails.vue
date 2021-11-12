<template>
  <div>
	  <div v-if="!isEdit" class="w-2/5 m-auto mt-8">
	  	<h1 class="text-black text-3xl text-center">This is products details page</h1>
		 <div class="border-gray-400  border-2 mt-8">
			<img :src="image" class="w-full" alt="products"/>
			<div class="p-4">
				<h2 class="text-green-500 text-xl">{{product.name}}</h2>
				<div class="flex justify-between border-b pb-4">
					<h4 class="text-black-500">price</h4>
					<h4 class="text-black-500"><span>&#8369;</span>{{product.price}}</h4>
				</div>
				<p class="mt-4">{{product.description}}</p>
			</div>
		</div>
	  </div>
	  <div v-if="isEdit" class="w-2/4 m-auto mt-8">
	  <h1 class="text-black text-3xl text-center">Update your product</h1>
		<form @submit.prevent="isUpdateProduct" class="mt-8">
			<label class="block mb-6">
				<span class="text-gray-700">Name</span>
				<input v-model="formData.name" type="text" class="mt-1 block w-full rounded-sm" placeholder="">
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Slug</span>
				<input v-model="formData.slug" type="text" class="mt-1 block w-full rounded-sm" placeholder="">
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Description</span>
				<input v-model="formData.description" type="text" class="mt-1 block w-full rounded-sm" placeholder="">
			</label>
			<label class="block mb-6">
				<span class="text-gray-700">Price</span>
				<input v-model="formData.price" type="text" class="mt-1 block w-full rounded-sm" placeholder="">
			</label>
			<div class="flex">
				<button class="bg-blue-400 hover:bg-blue-500 p-4 text-white w-full rounded-sm">Update Product</button>
			</div>
		</form>
		
	  </div>
  </div>
</template>

<script>
import product from "./images/product.jpg"
export default {
	name: 'ProductDetails',
	data() {
		return {
			image:product,
			isEdit: false,
			id: '',
			product: {},
			formData: {
				id: null,
				name: '',
				price: '',
				slug: '',
				description: ''
			}
		}
	},
	methods: {
		getSingle() {
			if (!this.isEdit) {
				this.$store.dispatch('singleProduct', this.id)
				.then((response) => {
					this.product = response.data
				})
			} 
		},
		isUpdateProduct() {
			const { id, name, price, slug, description } = this.formData
			const newData = {
				name,
				price,
				slug,
				description
			}
			this.$store.dispatch('updateProduct', id, newData )
			.then((response) => {
				this.$router.push('/product')
				this.$noty.success("You successfully updated product")
				this.clearFields(this.formData)
			})
		},
		clearFields(data) {
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					data[key] = '';
				}
			}
		}
	},
	created() {
		const { id, edit, product } = this.$route.params
		this.id = id;
		this.isEdit = edit;
		if (edit) {
			const {name, price, slug, description } = product;
			this.formData = {
				id,
				name,
				price,
				slug,
				description
			}
		}
		this.getSingle()
	}
}
</script>

<style>

</style>