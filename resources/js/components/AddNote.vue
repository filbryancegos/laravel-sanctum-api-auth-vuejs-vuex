<template>
	<div class="bg-green-200 rounded-md p-4 note flex flex-col justify-between">
	<div>
		<p>
			<textarea 
			@change="handleChange" 
			v-model="note" 
			placeholder="add your note here..." >
			</textarea>
		</p>
	</div>
	<div class="flex justify-between">
		<span>{{characterLimit - note.length}} remaining..</span>
		<span class="cursor-pointer"><button @click="handleAddNote" class="rounded-lg px-4 py-1 bg-gray-200 text-black">Add note</button></span>
	</div>
	</div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
	name: 'AddNote',
	props: ['noteText'],
	data() {
		return {
			note: '',
			characterLimit: 200
		}
	},
	methods: {
		handleAddNote() {
			if (this.note.trim().length > 0) {
				const newDate = new Date ();
				const newNote = {
					id: nanoid(),
					text: this.note,
					date: newDate.toLocaleDateString()
				}
				this.$emit('handleAddNote', newNote)
				this.note = ''	
			}
		},
		handleChange() {
			if (this.characterLimit - this.note.length >= 0 ) {
				return this.note;
			}
		}
	}
}
</script>

<style scoped>
	textarea {
		background: transparent;
	}
	textarea {
		border: none
	}
	[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: #a7f3d0;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    border-color: #a7f3d0;
}
</style>

