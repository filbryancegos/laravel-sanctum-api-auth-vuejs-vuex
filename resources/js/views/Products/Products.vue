<template>
  <div>
	  <h1 class="text-black text-3xl text-center">This is products page</h1>
		<div class="flex justify-end mt-4">
			<router-link to="/product/create">
				<button class="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-sm text-white cursor-pointer">Add Product</button>
	  		</router-link>
		</div>
	  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-black mt-8 gap-6">
		  <div v-for="product in allProducts" :key="product.id" class="border-gray-400  border-2">
			<div>
				<router-link :to="{name: 'ProductDetails', params: { id: product.id, edit: false }}">
					<img :src="image" class="w-full" alt="products"/>
				</router-link>
				<div class="p-4">
					<h2 class="text-green-500 text-xl">{{product.name}}</h2>
					<div class="flex justify-between border-b pb-4">
						<h4 class="text-black-500">price</h4>
						<h4 class="text-black-500"><span>&#8369;</span>{{product.price}}</h4>
					</div>
					<div class="flex justify-end space-x-2 mt-4">
						<div class="cursor-pointer">
							<router-link :to="{name: 'ProductDetails', params: { id: product.id, edit: true, product: product  }}"><edit-2-icon size="1x" class="text-green-500"></edit-2-icon></router-link>
						</div>
						<div class="cursor-pointer" @click="isDeleteProduct(product.id)"><archive-icon size="1x" class="text-red-500"></archive-icon></div>
					</div>
				</div>
			</div>
		  </div>
	  </div>
	  <Modal :isModal="isModal" @closeModal="isModal = false">
		  <template v-slot:header>
				<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
					Are you sure you want to delete this product?
				</h3>
				<div class="mt-2">
					<p class="text-sm text-gray-500">
						Are you sure you want to delete this product? This product will be permanently removed. This action cannot be undone.
					</p>
				</div>
		  </template>

		<template v-slot:buttons>
			<button @click="isModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
				Cancel
			</button>
			<button @click="onSubmit" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
				submit
			</button>
		</template>
	  </Modal>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import product from "./images/product.jpg"
import { Edit2Icon, ArchiveIcon  } from 'vue-feather-icons'
import Modal  from '../../components/Modal'

export default {
	name: 'Products',
	components: {
		Edit2Icon,
		ArchiveIcon,
		Modal
	},
	data() {
		return {
			image:product,
			isModal: false,
			id: null
		}
	},
	computed: {
		...mapGetters(['allProducts'])
	},
	methods: {
		...mapActions([
			'getProduct',
		]),
		isDeleteProduct(id) {
			this.id = id
			this.isModal = !this.isModal
		},
		onSubmit() {
			this.$store.dispatch('deleteProduct', this.id)
				.then((response) => {
					this.isModal = !this.isModal
					this.getProduct()
					this.$noty.success("You successfully deleted product")
					
				})
		}
	},
	created() {
		this.getProduct()
	}
}
</script>

<style>

</style>