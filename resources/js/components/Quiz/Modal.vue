<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
	<div 
	 v-show="getIsModalOpen"
	class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<!--
			Background overlay, show/hide based on modal state.

			Entering: "ease-out duration-300"
				From: "opacity-0"
				To: "opacity-100"
			Leaving: "ease-in duration-200"
				From: "opacity-100"
				To: "opacity-0"
			-->
			<div
			v-show="getIsModalOpen"
			@click="$emit('closeModal')"
            x-transition:enter="ease-out duration-300"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="ease-in duration-200"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0" 
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

			<!--
			Modal panel, show/hide based on modal state.

			Entering: "ease-out duration-300"
				From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				To: "opacity-100 translate-y-0 sm:scale-100"
			Leaving: "ease-in duration-200"
				From: "opacity-100 translate-y-0 sm:scale-100"
				To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			-->
			<div 
			v-show="getIsModalOpen"
            x-transition:enter="ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
            x-transition:leave="ease-in duration-200"
            x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
            x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            style="display: none;"
			class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div class="mt-3 text-center w-full ">
						<slot name="header"></slot>
					</div>
				</div>
			</div>
			<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
				<slot name="buttons"></slot>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	props: ['isModal'],
	computed: {
		getIsModalOpen() {
			return this.$store.getters.isModalOpen
		}
	}
}
</script>

<style>

</style>