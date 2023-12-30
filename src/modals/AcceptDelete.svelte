<script lang="ts">
    import { PostEndpoint } from '../api/api'
    import { Post, userPostsStore } from '../store/posts.store'

    export let show: boolean
    export let id: number
    export let close: () => void

    const postEndpoint = new PostEndpoint()

    const access = localStorage.getItem('access')

    // async function delete_post(id: number) {
    //     try{
    //             const res_delete = await deletePost(access, id)
    //             const res = await getUserPosts(access)
    //             const user_posts: Post[] = res.data.results
    //             userPostsStore.set(user_posts)
    //             location.reload()
    //         }
    //     catch(err: any) {
    //             console.log(err)
    //         }
    // }
    
    
</script>

<div class={"h-screen w-screen bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center items-center " + (show ? "flex" : "hidden")}>
    <div class="bg-white p-8 flex flex-col gap-3 md:w-[fit-content] rounded-md shadow-md">
        <p class="text-xl text-center font-bold">Elonni tugatish {id}</p>
        <p>Elonni tugatishni istaysizmi ?</p>   
        <div class="flex gap-3 justify-between">
            <button on:click={() => close()} class="py-2 px-4 rounded-md text-white bg-green-500">Yo'q</button>
            <button on:click={() => {}} class="py-2 px-4 rounded-md text-white bg-red-500">Ha, Tugatish</button>
        </div>
    </div>
</div>