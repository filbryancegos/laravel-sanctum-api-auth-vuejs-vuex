<template>
	<div>
		<NoteList />
	</div>
</template>
<script>
import { SearchIcon } from 'vue-feather-icons'
import NoteList from '../components/NoteList'

export default {
	name: 'Notes',
	components: {
		NoteList,
		SearchIcon,

	}
}
</script>

