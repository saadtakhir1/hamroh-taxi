<script lang="ts">
    import ElonAdd from "../modals/ElonAdd.svelte";
    import ElonProfile from "./ElonProfile.svelte";

    export let showme: boolean
    let show = false
</script>

<div class={"flex-col w-2/3 py-3 mx-auto w-full gap-3 " + (showme ? "flex" : "hidden")}>
    <div class="flex flex-col mx-auto rounded-lg w-full gap-3">
        <button on:click={() => (show = true)} class="bg-indigo-900 text-white p-3 rounded-xl">
            <i class="bi bi-plus" /> Elon qo'shish</button>
        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <ElonProfile showEdit={show} />
        </div>
    </div>
    <ElonAdd show={show} close={() => (show = false)} />
</div>