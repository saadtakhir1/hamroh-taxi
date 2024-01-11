<script lang="ts">
    export let profile
    export let show: boolean
    export let close = () => {}
</script>

<div class={"fixed top-0 bottom-0 left-0 right-0 h-screen w-screen flex items-center justify-center bg-black/50 " + (show ? "flex" : "hidden")}>
    <div class="bg-white flex flex-col">
        <p>Ism: {profile.userName}</p>
        <button on:click={close}><i class="bi bi-x"></i></button>
    </div>
</div>