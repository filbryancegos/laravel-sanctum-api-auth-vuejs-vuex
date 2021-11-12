<template>
	<div class="grid grid-cols-1 sm:grid.cols-2 md:grid-cols-4 gap-6">
		<div v-for="note in notes" :key="note.id" class="bg-yellow-200 rounded-md p-4 note flex flex-col justify-between h-full">
			<div>
				<p>{{note.text}}</p>
			</div>
			<div class="flex justify-between items-center">
				<span>{{note.date}}</span>
				<div class="flex items-center space-x-2">
					<span @click="$emit('handeleEdit',note)" class="cursor-pointer"><edit-2-icon size="1x" class="custom-class"></edit-2-icon></span>
					<span @click="$emit('handeleDelete',note.id)" class="cursor-pointer"><archive-icon size="1x" class="custom-class"></archive-icon></span>
				</div>
			</div>
		</div>
		<AddNote :noteText="noteText"  @handleAddNote="handleAddNote" />
	</div>
</template>

<script>
import AddNote from './AddNote'
import { ArchiveIcon } from 'vue-feather-icons'
import { Edit2Icon } from 'vue-feather-icons'
export default {
	name: 'Note',
	components: {
		ArchiveIcon,
		Edit2Icon,
		AddNote
	},
	props: ['notes', 'noteText'],
	methods: {
		handleAddNote(note) {
			this.$emit('handleAddNote', note)
		}
	}
}
</script>

<style scoped>
	.note {
		min-height: 170px;
	}
</style>