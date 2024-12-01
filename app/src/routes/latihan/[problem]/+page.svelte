<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	let content='Still loading...';

	$: {
		(async () => {
			content = await marked.parse($page.data.content, { gfm: true, breaks: true});
			console.log(content);
		})();
	}

	onMount(() => {
		console.log(content);
	});
</script>


<main class="flex justify-center items-center h-screen">
	<div class="w-full h-dvh bg-colors-primary flex flex-col justify-center items-center">
		<div class="m-3 bg-colors-tertiary p-10">
			<div class="gap">{@html content}</div>
		</div>
	</div>
</main>
