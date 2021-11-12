<template>
  <section>
	  <div class="bg-gray-100 p-16 text-black  border border-gray-200 rounded-md">
		<article>
			<div class="flex justify-end">
				<span class="text-base text-green-500">Correct Answers <span>{{getCorrectAnswers}}</span>/<span>{{getCurrentIndex}}</span></span>
			</div>
			<div class="text-center mt-8">
				<h1 class="text-black font-bold text-3xl">{{questions}}</h1>
			</div>

			<div class="mt-8">
				<button v-for="answer in answers" :key="answer.id"
				@click="checkAnswer(correct_answer === answer )" 
				class="bg-blue-400 p-3 w-full text-base font-bold mb-4 text-white rounded-md">
				{{answer}}
				</button>
			</div>
			<div class="mt-8 flex justify-end">
				<button @click="nextQuestion" class="bg-yellow-500 py-3 px-12 text-base font-bold mb-4 text-white rounded-md">Next Question</button>
			</div>
		</article>
	  </div>
  </section>
</template>

<script>
export default {
	name: 'Card',
	data() {
		return {
			answers: [],
			questions: '',
			correct_answer: ''
		}
	},
	computed: {
		getCurrentIndex() {
			return this.$store.getters.isCurrentIndex
		},
		getCorrectAnswers() {
			return this.$store.getters.isCorrect
		}
	},
	methods: {
		checkAnswer(payload) {
			this.$store.dispatch('checkAnswer', payload)
			this.checkCurrentQuestions()
		},
		checkCurrentQuestions() {
			const { questions, index } = this.$store.state.quiz
			const { question, incorrect_answers, correct_answer } = questions[index]
			const tempIndex = Math.floor(Math.random() * 4)

			let answers = [...incorrect_answers]

			if (tempIndex === 3) {
				answers.push(correct_answer)
			} else {
				answers.push(answers[tempIndex])
				answers[tempIndex] = correct_answer
			}
			this.questions = question
			this.correct_answer = correct_answer
			this.answers = answers
		},
		nextQuestion() {
			this.$store.dispatch('nextQuestion')
			this.checkCurrentQuestions()
		}
	},
	created() {
		this.checkCurrentQuestions()
	}
}
</script>

<style>

</style>