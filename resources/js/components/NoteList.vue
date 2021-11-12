

<template>
  <div>
	  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-6">
			<div class="flex items-center space-x-4">
				<Heading title="Notes" />
				<Search @onSearch="onSearch" />
			</div>
		</div>
	  <Note @handleAddNote="handleAddNote" @handeleEdit="handeleEdit" @handeleDelete="handeleDelete" :notes="notes" />
  </div>
</template>

<script>

import Note from './Note'
import Heading from './Heading'
import Search from './Search'
import { nanoid } from 'nanoid'

export default {
	name: 'NoteList',
	components: {
		Note,
		Heading,
		Search
	},
	data() {
		return {
			notes: [],
			edit: false
		}
	},
	methods:  {
		onSearch(value) {
			console.log(value)
		},	
		handeleDelete(id) {
			this.notes = this.notes.filter(note => note.id !==id )
			this.saveItems()
		},
		handeleEdit(note) {
			this.edit = true
			this.noteText = note.text;
			//console.log(this.noteText)
		},
		handleAddNote(note) {
			const newNotes = [...this.notes, note]
			this.notes = newNotes
			this.saveItems()
		},
		saveItems() {
			localStorage.setItem (
			'vue-notes-app-data',
				JSON.stringify(this.notes)
			);
		}
	},
	created() {
		const savedNotes = JSON.parse (
			localStorage.getItem('vue-notes-app-data')
		)
		if (savedNotes) {
			this.notes = savedNotes
		}
		this.saveItems()
	}
}
</script>

