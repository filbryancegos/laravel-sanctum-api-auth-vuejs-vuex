<template>
  <div>
	  <div class="w-2/4 m-auto mt-8">
	  <h1 class="text-black text-3xl font-bold text-center">Dashboard</h1>
		<form class="register mt-8">
			<label class="block mb-8">
				<span class="text-gray-700">Company</span>
				<input 
				type="text" 
				class="mt-1 block w-full rounded-sm" 
				placeholder="">
			</label>

			<label class="block mb-8">
				<span class="text-gray-700">Position</span>
				<input 
				type="text" 
				class="mt-1 block w-full rounded-md" 
				placeholder="">
			</label>
			<div>
				<button class="bg-purple-400 hover:bg-purple-500 p-4 text-white w-full rounded-sm mb-6">Submit</button>
			</div>
		</form>
		
	  </div>
  </div>
</template>

<script>
export default {
	name: 'Dashboard'
}
</script>

<style>

</style>