<script lang="ts">
    import { navigate } from 'svelte-navigator'

</script>

<section class="profile-aside w-1/3 flex flex-col justify-between">
    <div class="flex gap-2">
        <span>
            <img src="./images/pf-pic.jpeg" alt="profile-pic" height="80px" width="80px">
        </span>
        <div class="flex flex-col">
            <p class="text-2xl font-semibold">Doniyor</p>
            <p>Haydovchi</p>
            <p></p>
        </div>
    </div>
    <div class="flex flex-col px-3 gap-3 text-lg">
        <button on:click={() => { navigate('/profile/malumotlarim')} } class="text-white px-4 py-2 rounded-md shadow-md bg-indigo-500">Malumotlarim</button>
        <button on:click={() => { navigate('/profile/elonlarim')} } class="px-4 py-2 rounded-md shadow-md">Elonlarim</button>
        <button on:click={() => { navigate('/profile/sozlamalar')} } class="px-4 py-2 rounded-md shadow-md">Malumotlarim</button>
    </div>
    <div>
        <button><i class="bi bi-"></i> Chiqish</button>
    </div>
</section>