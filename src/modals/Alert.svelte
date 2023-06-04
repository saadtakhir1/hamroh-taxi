<script lang="ts">

    export let show: boolean
    export let color: string
    export let text: string
    export let close: () => void

</script>

<div class={"fixed top-[40px] right-[40px] justify-between items-center md:w-1/3 px-4 py-2 rounded-md bg-" + color + "-500 shadow-md " + (show ? "flex" : "hidden") }>
    <p class="text-sm font-semibold">{text}</p>
    <button on:click={close}><i class="bi bi-x text-2xl"></i></button>
</div>