<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { marked } from 'marked';

	let content = '';

	$: {
		(async () => {
			content = await marked($page.data.content, { gfm: true, breaks: true });
		})();
	}

	onMount(() => {
		console.log(content);
	});
</script>

<main class="flex justify-center items-center h-screen">
	<div class="w-full h-dvh bg-main-primary flex flex-col justify-center items-center">
		<div class="m-3 bg-main-tertiary p-10">
			<div>{@html content}</div>
		</div>
	</div>
</main>
