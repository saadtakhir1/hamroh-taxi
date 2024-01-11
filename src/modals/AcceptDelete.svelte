<script lang="ts">
    import { PostEndpoint } from '../api'
    import { Post, userPostsStore } from '../store'

    export let show: boolean
    export let id: number
    export let close: () => void

    const postEndpoint = new PostEndpoint()

    const access = localStorage.getItem('access')

    async function delete_post() {
        try{
                const res = await postEndpoint.patch(id, access)
                const post: Post= res.data.post
                userPostsStore.update(p => {return p.filter(p => p.id != post.id)})
                close()
            }
        catch(err: any) {
                console.log(err)
            }
    }
    
    
</script>

<div class={"h-screen w-screen bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center items-center " + (show ? "flex" : "hidden")}>
    <div class="bg-white p-8 flex flex-col gap-3 md:w-[fit-content] rounded-md shadow-md">
        <p class="text-xl text-center font-bold">Elonni tugatish</p>
        <p>Elonni tugatishni tasdiqlaysizmi?</p>   
        <div class="flex gap-3 justify-between">
            <button on:click={() => close()} class="py-2 px-4 rounded-md text-white bg-red-500">Yopish</button>
            <button on:click={delete_post} class="py-2 px-4 rounded-md text-white bg-indigo-500">Tasdiqlash</button>
        </div>
    </div>
</div>