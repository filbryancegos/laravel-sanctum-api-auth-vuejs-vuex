<template>
  <div>
	  <div class="loading"></div>
  </div>
</template>

<script>
export default {
	name: 'Loading',
}
</script>

<style scoped>
	@keyframes spinner {
	to {
		transform: rotate(360deg);
	}
	}

	.loading {
	width: 6rem;
	height: 6rem;
	margin: 0 auto;
	margin-top: 10rem;
	border-radius: 50%;
	border: 3px solid #ccc;
	border-top-color: var(--clr-primary-5);
	animation: spinner 0.6s linear infinite;
	}
</style>