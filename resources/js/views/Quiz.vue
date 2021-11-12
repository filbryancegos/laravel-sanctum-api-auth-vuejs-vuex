<template>
  <div class="w-full sm:w-1/2 m-auto">
		<div v-if="getIsWaiting">
			<Form />
		</div>
		
		<div v-if="getIsStart">
			<Card />
		</div>
		
		<div v-if="getIsLoading">
			<Loading />
		</div>
		
		<Modal :isModal="getIsModalOpen">
		  <template v-slot:header>
				<h3 class="text-3xl font-bold text-black text-center" id="modal-title">
					congrats!
				</h3>
				<div class="mt-2">
					<p class="text-base font-bold">
					You answered {{((getCorrectAnswers / getQuestion.length) * 100).toFixed(0)}}% of
					questions correctly
					</p>
				</div>
		  </template>

		<template v-slot:buttons>
			<button @click="closeModal" type="button" class="bg-yellow-500 py-2 px-6  text-base font-bold rounded-md text-white">
				Play Again
			</button>
		</template>
	  </Modal>
	  
  </div>
</template>

<script>
import Form from '../components/Quiz/Form'
import Card from '../components/Quiz/Card'
import Modal from '../components/Quiz/Modal'
import Loading from '../components/Quiz/Loading'

export default {
	name: 'Quiz',
	components: {
		Form,
		Card,
		Modal,
		Loading
	},
	methods: {
		closeModal() {
			this.$store.dispatch('closeModal')
		}
	},
	computed: {
		getIsLoading() {
			return this.$store.getters.isLoading
		},
		getIsWaiting() {
			return this.$store.getters.isWaiting
		},
		getIsStart() {
			return this.$store.getters.isStart
		},
		getIsModalOpen() {
			return this.$store.getters.isModalOpen
		},
		getCorrectAnswers() {
			return this.$store.getters.isCorrect
		},
		getQuestion() {
			return this.$store.getters.isQuestions
		},
	}
}
</script>

<style>

</style>