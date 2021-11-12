<template>
  <div class="border bg-white border-gray-300 w-full relative p-1  flex items-center ounded-md">
		<search-icon size="1.5x" class="absolute"></search-icon>
		<input v-model="searchText" @change="onSearch" type="text" class="mt-1 block w-full r px-6" placeholder="type to search...">
	</div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'
export default {
	name: 'Search',
	components: {
		SearchIcon
	},
	data() {
		return {
			searchText: ''
		}
	},
	methods: {
		onSearch() {
			console.log('sdfsd')
			//this.$emit('onSearch', this.searchText)
		}
	}
}
</script>

<style scoped>
	input {
		border: 0;
	}
	input:focus {
		outline: none;
	}
	[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
		outline-offset: 2px;
		--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: #ffffff;
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
		border-color: #ffffff;
	}
</style>