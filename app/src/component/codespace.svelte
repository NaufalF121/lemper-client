<div class="border-2 m-2 w-full h-4/5 border-gray-600">
    <AceEditor
    on:input={(obj) => text = obj.detail}
    width='100%'
    height='585px'
    lang="golang"
    theme="chrome"
    value={text} />
    <button
		class="bg-green-500 w-32 border-2 border-colors-fourtiary text-colors-fourtiary hover:bg-colors-fourtiary hover:text-colors-primary rounded-lg my-2"
		on:click={submitCode}
	>
		Submit
	</button>

</div>

<script lang="ts">
    import { AceEditor } from "svelte-ace";
    import "brace/theme/chrome";
    import "brace/mode/golang";
    const submitCode = () => {
		console.log(text);
		// const res = fetch('http://localhost:3000/api/submit', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		code: text,
		// 	}),
		// });
	};
    let text = '42';
</script>