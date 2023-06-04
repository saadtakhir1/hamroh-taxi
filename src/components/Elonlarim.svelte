<script lang="ts">
    import ElonAdd from "../modals/ElonAdd.svelte"
    import ElonProfile from "./ElonProfile.svelte"
    import { getUserPosts } from "../api/posts.api";
    import { Post, userPostsStore } from "../store/posts.store"

    const access = localStorage.getItem('access')
    async function getPosts() {
        try{
            const res = await getUserPosts(access)
            const user_posts: Post[] = res.data.results
            userPostsStore.set(user_posts)
        }
        catch(err: any) {
            console.log(err)
        }
    }

    export let showme: boolean
    let show = false

    getPosts()

</script>

<div class={"flex-col py-3 md:h-screen mx-auto w-full gap-3 " + (showme ? "flex" : "hidden")}>
    <div class="flex flex-col rounded-lg w-full gap-3 h-[80vh]">
        <button on:click={() => (show = true)} class="bg-indigo-900 text-white p-3 rounded-xl">
            <i class="bi bi-plus" /> Elon qo'shish</button>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 snap-x md:py-8 md:px-8 overflow-y-auto">
            {#each $userPostsStore as post} 
                <ElonProfile posted_time={post.posted_time} price={post.price} id={post.id} author_name={post.user.name} user_role={post.user_role} from_loc={post.from_location} to_loc={post.to_location} go_time={post.go_time} count={post.count} addition={post.addition}/>
            {/each}
        </div>
    </div>
    <ElonAdd show={show} close={() => (show = false)} />
</div>