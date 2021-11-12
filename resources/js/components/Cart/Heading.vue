<template>
  <div>
	  <div class="flex justify-end relative">
		  <div class="absolute cart">
			  <span class="bg-yellow-500 text-white text-base rounded-full w-16 h-16 p-2 top-0">{{getAmount}}</span>
		  </div>
		  <shopping-cart-icon size="1.5x" class="custom-class"></shopping-cart-icon>
	  </div>
  </div>
</template>

<script>
import { ShoppingCartIcon } from 'vue-feather-icons'
export default {
	name: 'Heading',
	components: {
		ShoppingCartIcon
	},
	computed: {
		getAmount() {
			return this.$store.getters.getAmount
		}
	}
}
</script>

<style scoped>
	.cart {
		top: -14px;
		right: -22px
	}
</style>