<template>
  <section class="bg-gray-100 p-16 text-black  border border-gray-200 rounded-md">
	  	<h1 class="text-black text-3xl font-bold">Setup Quiz</h1>
		<div class="mt-6">
			<form @submit.prevent="onSubmit">
				<label class="block mb-6">
					<span class="text-gray-700 font-bold">Number of Questions</span>
					<input v-model="formData.amount" type="number" class="mt-1 block w-full rounded-md" value="10" placeholder="" min="1" max="50">
				</label>
				<label class="block mb-6">
					<span class="text-gray-700 font-bold">Category</span>
					<select v-model="formData.category" name="category" id="category" class="block w-full mt-1 rounded-md">
					<option value="sports">sports</option>
					<option value="history">history</option>
					<option value="politics">politics</option>
					</select>
				</label>
				<label class="block mb-6">
					<span class="text-gray-700 font-bold">Select Defficulty</span>
					<select v-model="formData.difficulty" name="category" id="category" class="block w-full mt-1 rounded-md">
					<option value="easy">easy</option>
					<option value="medium">medium</option>
					<option value="hard">hard</option>
					</select>
				</label>

				<button type="submit" class="bg-yellow-500 p-4 text-white rounded-md text-center font-bold cursor-pointer">Start</button>
			</form>
			
		</div>
  </section>
</template>

<script>
export default {
	name: 'Form',
	data() {
		return {
			formData: {
				amount: '20',
				category: 'sports',
				difficulty: 'hard'
			}
		}
	},
	methods: {
		onSubmit() {
			this.$store.dispatch('handleSubmit', this.formData)
		}
	}
}
</script>

<style soped>
	.form-bg {
		box-shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
	}
</style>