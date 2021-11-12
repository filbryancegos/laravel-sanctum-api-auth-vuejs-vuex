<template>
  <div class="min-h-screen flex items-center grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16">
	  <div>
		  <h1 class="text-black text-3xl font-extrabold">Jobs<span class="text-purple-500">App</span></h1>
		  <p class="text-base mb-6 mt-16">I'm baby viral enamel pin chartreuse cliche retro af selfies kinfolk photo booth plaid jianbing actually squid 3 wolf moon lumbersexual. Hell of humblebrag gluten-free lo-fi man braid leggings.</p>
		  <p class="text-base mb-6">Cloud bread kale chips wayfarers deep v chicharrones leggings fingerstache actually blog cliche four dollar toast. Sriracha ugh kickstarter, next level la croix butcher lomo.</p>
		  <div class="mt-8">
			  <router-link :to="{name: 'Rehistro'}">
			  	<button class="bg-purple-500 hover:bg-purple-600 text-white text-base px-12 py-2 rounded-md">Login</button>
			  </router-link>
		  </div>
	  </div>
	  <div>
		  <img :src="image" alt="image">
	  </div>
  </div>
</template>

<script>
import image from "./images/eking.svg"
export default {
	name: 'Job',
	data() {
		return {
			image: image
		}
	}
}
</script>

<style>

</style>