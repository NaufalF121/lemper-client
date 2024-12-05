<div class="border-2 m-2 w-full border-gray-600">
    <AceEditor
	on:input={(obj) => text = obj.detail}
    width='100%'
    height='585px'
    lang="golang"
    theme="chrome"
    value={text} />
	<div class="flex">
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={submitCode}>Submit</button>
		<p class="text-green-200">{status}</p>
	</div>
</div>


<script lang="ts">
    import { AceEditor } from "svelte-ace";
    import "brace/theme/chrome";
    import "brace/mode/golang";
	import { Buffer } from 'buffer';
	let status = 'unknown';
	const submitCode = async () => {
		
		const encodedText = Buffer.from(text, 'utf8').toString('hex');
	
		const res = await fetch('http://localhost:5530/api/restricted/Sandbox', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user : "Doe",
    			problem: "A",
    			language: "GO",
				code: encodedText,
			}),
		}).then((res) => res.json()).then((data) => {
			console.log(data);
			status = data.data;
		});
		
	};
    let text = '';
</script>