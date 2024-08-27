<script>
	import { redirect } from "@sveltejs/kit";

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
        <div class="w-full p-5 flex grid-cols-3 place-content-center">
            <div class="w-1/4 h-64 border-2 border-main-fourtiary flex flex-col justify-center items-center">
                <h1 class="text-main-fourtiary font-mono font-semibold text-xl">
                    Assignment 1
                </h1>
                <a href="/latihan/assignment1">
                    <button class="w-32 h-10 border-2 border-main-fourtiary text-main-fourtiary hover:bg-main-fourtiary hover:text-main-primary rounded-lg my-2">
                        Start
                    </button>
            </div>
        </div>

        <button class="bg-negative py-2 px-5 rounded-md hover:border-2" on:click={handleLogout}>
            <a href="/sign-out" class="text-main-primary">Logout</a>
        </button>
    </div>
</main>