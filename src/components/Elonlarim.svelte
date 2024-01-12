<script lang="ts">
    import ElonAdd from "../modals/ElonAdd.svelte"
    import ElonProfile from "./ElonProfile.svelte"
    import { PostEndpoint } from "../api";
    import { Post, userPostsStore } from "../store"

    const access = localStorage.getItem('access')
    const postEndpoint = new PostEndpoint()

    
    export let showme: boolean
    let show = false

    let status: number = 1
    let statusSelect: HTMLSelectElement

    async function getPosts() {
        try{
            const res = await postEndpoint.getByUser(1, status, 40, access)
            const posts: Post[] = res.data.posts
            userPostsStore.set(posts)
        }
        catch(err: any) {
            console.log(err)
        }
    }

    getPosts()

    async function getByStatus(value: string) {
        status = +value
        getPosts()
    }
</script>

<div class={"flex-col md:h-screen py-3 w-full gap-3 " + (showme ? "flex" : "hidden")}>
    <div class="flex flex-col rounded-lg w-full gap-3 ">
        <div class="grid grid-cols-5 gap-3">
            <select bind:this={statusSelect} on:change={() => { getByStatus(statusSelect.value)}    } name="status_post" id="" class="p-3 col-span-2 outline-0 rounded-xl">
                <option value="1">Faol</option>
                <option value="0">Tugatilgan</option>
            </select>
            <button on:click={() => (show = true)} class="col-span-3 bg-green-500 text-stone-100 text-xl font-semibold p-3 rounded-xl"><i class="bi bi-plus" /> Elon qo'shish</button>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 snap-x md:py-8 md:px-8 overflow-y-auto">
            {#each $userPostsStore as post} 
                <ElonProfile post={post}></ElonProfile>
            {/each}
        </div>
    </div>
    <ElonAdd show={show} close={() => (show = false)} />
</div>