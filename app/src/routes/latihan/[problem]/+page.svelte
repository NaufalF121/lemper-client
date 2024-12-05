<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import Codespace from '../../../component/codespace.svelte';
	let text = '';
	let content = 'Still loading...';

	$: {
		(async () => {
			content = await marked.parse($page.data.content, { gfm: true, breaks: true });
		})();
	}

	
</script>

<main class="flex justify-center items-center h-screen">
	<div class="w-full h-dvh bg-colors-primary flex flex-row justify-center items-center">
		<div class="m-3 bg-colors-tertiary p-10 max-h-dvh h-4/5">
			<div class="gap">{@html content}</div>
		</div>
		<Codespace  />
	</div>
	
</main>
