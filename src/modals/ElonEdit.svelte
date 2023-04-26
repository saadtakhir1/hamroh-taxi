<script lang="ts">

    export let show: boolean

</script>

<div class={"absolute top-0 right-0 flex flex-col p-3 rounded bg-white shadow-sm " + (show ? "flex" : "hidden")}>
    <button>Tugatish</button>
</div>