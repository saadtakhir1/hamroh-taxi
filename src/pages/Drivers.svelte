<script lang="ts">
    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
    import Elon from '../components/Elon.svelte'
    import FilterPost from '../modals/FilterPost.svelte';
    import { getPosts } from '../api/posts.api'

    let show_filter: boolean = false

    getPosts()
  
  </script>

<section class="body-elon">
    <Navbar></Navbar>

    <section class="elonlar flex flex-col items-start gap-[24px] gap-sm-2 my-4 my-sm-5 px-2 sm:px-5">
        <h1 class="text-3xl font-bold outline-0">Elonlar</h1>
       <div class="flex justify-between w-full gap-2">
            <div class="flex justify-between w-full border-2 border-indigo-900 pl-3 rounded-2xl">
                <input class="grow outline-0" type="text" name="search" id="search" placeholder="Post izlash...">
                <button class="bg-indigo-900 text-white py-2 px-3 rounded-r-xl"><i class="bi bi-search"></i></button>
            </div>
            <div>
                <button class="bg-indigo-900 text-white py-2 px-3 rounded-xl" on:click={() => {show_filter = true}}><i class="bi bi-filter"></i></button>
                <FilterPost show={show_filter} close={() => {show_filter = false}}></FilterPost>
            </div>
       </div>
       <div class="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center">
        <Elon author_name={"Doni"} from_loc={"xorazm"} to_loc={"tashkent"} go_time={"20-apr 10:00"} count={3} addition={"Yangiyo'l mahallasidan"}></Elon>
        <Elon author_name={"Doni"} from_loc={"xorazm"} to_loc={"tashkent"} go_time={"20-apr 10:00"} count={3} addition={"Yangiyo'l mahallasidan"}></Elon>
        <Elon author_name={"Doni"} from_loc={"xorazm"} to_loc={"tashkent"} go_time={"20-apr 10:00"} count={3} addition={"Yangiyo'l mahallasidan"}></Elon>  
       </div>

    </section>

    <Footer></Footer>
</section>