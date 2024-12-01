<script>
</script>

<main class="flex justify-center items-center h-screen">
    <div class="w-full h-dvh bg-colors-primary flex justify-center items-center">
        <div class="w-1/3 bg-colors-secondary rounded-lg flex flex-col items-center p-4">
            <h1 class="text-2xl text-colors-primary font-mono">Sign in</h1>
            <form class="w-1/2 flex flex-col items-center" method="post" action="?/login">
                <label for="username" class="w-full text-colors-primary my-2">Username</label>
                <input id="username" name="username" type="text" placeholder="Username" class="w-full h-10 border-2 border-colors-primary rounded-lg p-2 my-2">
                
                <label for="password" class="w-full text-colors-primary my-2">Password</label>
                <input id="password" name="password" type="password" placeholder="Password" class="w-full h-10 border-2 border-colors-primary rounded-lg p-2 my-2">
                
                <button type="submit" class="w-full h-10 bg-colors-primary text-colors-fourtiary hover:bg-colors-fourtiary hover:text-colors-primary rounded-lg my-2">Submit</button>
            </form>
        </div>
    </div>
</main>