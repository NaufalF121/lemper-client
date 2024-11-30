<script>
	import { redirect } from "@sveltejs/kit";
    import ListProblem from "../../component/listProblem.svelte";

    async function handleLogout() {
       throw redirect(300,"/sign-out");
    }
</script>

<main class="flex justify-center items-center h-screen">
    <div class="w-full h-dvh bg-main-primary flex flex-col justify-center items-center">
        <blockquote class="italic text-main-text w-96 text-center">
            {" "}
            Programming is not about what you know, it’s about what you can figure
            out.
        </blockquote>
        <div class="w-full p-5 flex grid-cols-3 place-content-center gap-5">
            <ListProblem id = {"A"} title = {"Assignment 1"}/>
        {#each [{ id: "B", title: "Assignment 2" }, { id: "C", title: "Assignment 3" }] as problem}
            <ListProblem id={problem.id} title={problem.title} />
        {/each}
        </div>

        <button class="bg-negative py-2 px-5 rounded-md hover:border-2" on:click={handleLogout}>
            <a href="/sign-out" class="text-main-primary">Logout</a>
        </button>
    </div>
</main>