<script lang="ts">

    export let show: boolean
    export let name: string
    export let close: () => void

</script>

<section class={"chat-dialog fixed top-0 left-0 bg-white h-screen w-screen " + (show ? "block" : "hidden")}>
    <div class="h-[10%] flex justify-between items-center bg-indigo-900 py-3 px-4">
        <span class="text-white font-semibold text-xl">{name}</span>
        <button on:click={() => close()} class="bg-white px-3 py-1 rounded-md"><i class="bi bi-x text-xl"></i></button>
    </div>
    <div class="h-[80%]"></div>
    <div class="h-[10%] flex justify-between items-center px-4 bg-indigo-900">
        <input class="outline-0 py-2 px-3 grow rounded-l-md" type="text" placeholder="Message here...">
        <button class="outline-0 py-2 px-3 border-l-2 bg-white rounded-r-md">Send</button>
    </div>
</section>