<script lang="ts">

    export let show: boolean
    export let close: () => void

</script>

<div class={"rounded-xl right-0 shadow-md p-4 bg-white absolute " + (show ? "block" : "hidden")}>
    <p class="text-black">filter posts</p>
    <button class="text-black border-2" on:click={() => {close()}}>close</button>
</div>