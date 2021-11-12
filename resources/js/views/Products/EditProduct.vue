<template>
  <div>
	  <h1 class="text-black text-3xl">This is Edit</h1>
  </div>
</template>

<script>
export default {
	name: 'EditProduct',
	data() {
		return {
			isEdit: false
		}
	},
	created() {
		this.isEdit = this.$route.params.edit;

		console.log(this.isEdit)
	}
}
</script>

<style>

</style>