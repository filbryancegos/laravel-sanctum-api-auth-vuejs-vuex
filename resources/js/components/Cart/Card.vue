<template>
  <div>
	<h1 class="text-black text-4xl text-center font-bold">Your BAG</h1>
	<p v-show="getAmount === 0" class="tex-black text-yellow-500 text-2xl text-center mt-6">is currently empty</p>

	<div v-for="item in getCart" :key="item.id" class="grid grid-cols-1 sm:grid-cols-2 justify-between mt-12 mb-4">
		<div>
			<div class="flex items-center">
				<img :src="item.img" alt="">
				<div>
					<h1 class="text-black text-3xl">{{item.title}}</h1>
					<div class="text-yellow-600 font-bold text-xl">${{item.price}}</div>
					<div class="text-red-500 font-bold text-sm" @click="isRemoveItem(item.id)">removed</div>
				</div>
			</div>
		</div>
		<div class="flex justify-end">
			<div class="text-black flex flex-col items-center">
				<span @click="isToogleAmount(item.id, 'inc')" class="cursor-pointer"><chevron-up-icon size="1.5x" class="custom-class"></chevron-up-icon></span>
				<span>{{item.amount}}</span>
				<span @click="isToogleAmount(item.id, 'dec')" class="cursor-pointer"><chevron-down-icon size="1.5x" class="custom-class"></chevron-down-icon></span>
			</div>
		</div>
	</div>

	<div class="mt-4">
		<div class="w-full bg-gray-500 h-px"></div>
		<div class="flex items-center justify-between mt-2">
			<h1 class="text-black text-2xl font-bold">Total</h1>
			<span class="total text-black text-2xl font-bold">${{getTotal}}</span>
		</div>
	</div>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
import { ChevronUpIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
	name: 'Card',
	components: {
		ChevronUpIcon,
		ChevronDownIcon
	},
	computed: {
		getCart() {
			return this.$store.getters.getCart
		},
		getTotal() {
			return this.$store.getters.getTotal
		},
		getAmount() {
			return this.$store.getters.getAmount
		}
	},
	methods: {
		isRemoveItem(id) {
			this.$store.dispatch('removeItem', id)
		},
		isToogleAmount(id,type) {
			const payload = { id, type }
			this.$store.dispatch('toogleAmount', payload)
		}
	}
}
</script>

<style scoped>
	img {
		width: 100px;
	}
</style>