<template>
  <div class="w-full sm:w-1/2 m-auto">
	  <Heading />
	  <Card />
  </div>
</template>

<script>
import Heading from '../components/Cart/Heading'
import Card from '../components/Cart/Card'
import { mapGetters, mapActions} from 'vuex'
export default {
	name: 'Cart',
	components: {
		Heading,
		Card
	},
	methods: {
		...mapActions([
			'fetchCart'
		]),
	},
	computed: {
		getCart () {
			return this.$store.getters.getCart
		}
	},
	created() {
		//this.$store.dispatch('fetchCart');
		this.fetchCart()
	}
}
</script>

<style>

</style>