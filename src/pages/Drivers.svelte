<script lang="ts">
    
    // components
    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
    import Elon from '../components/Elon.svelte'  
    // functions
    import { PostEndpoint } from '../api/api'
    // import { getRegions, getDistricts } from '../api/locations.api'
    // stores
    import { drivPostsStore } from '../store/posts.store'
    import { regionsStore, districtsStore } from '../store/location.store'
    // types
    import type { Post } from '../store/posts.store'
  
    let from_reg, from_dis, to_reg, to_dis, go_time, count, price
  
    // get passengers posts
    async function getPosts() {
      // try{
      //   const res = await getAllPosts()
      //   const posts: Post[] = res.data.results
      //   drivPostsStore.set(posts.filter(post => {
      //     if(post.user_role == 1 && post.status == 1){
      //       return post
      //     }
      //   }))
      // }catch(err: any) {
      //   console.log(err)
      // }
    }
  
    // get locations
    async function getLocations() {
      // try{
      //   const reg = await getRegions()
      //   const dis = await getDistricts()
      //   regionsStore.set(reg.data)
      //   districtsStore.set(dis.data)
      // }catch(err: any){
      //   console.log(err)
      // }
    }
  
    let district_dan: number = 0
    let district_ga: number = 0
  
    function addDistrictsFrom(region_uz: string) {
          district_dan = $regionsStore.filter(reg => reg.region_uz == region_uz)[0].id
      }
      
    function addDistrictsTo(region_uz: string) {
          district_ga  = $regionsStore.filter(reg => reg.region_uz == region_uz)[0].id
      }
    
      async function filter() {
        // try{
        //   const res = await getPostsByFilter(from_dis, to_dis, go_time, count)
        //   const posts: Post[] = res.data.results
        //   console.log(posts)
        //   drivPostsStore.set(posts.filter(post => post.user_role == 1))
        //   console.log($drivPostsStore)
        // } catch(err: any) {
        //   console.log(err)
        // }

      }

  let showFilter: boolean = false
  let showPlus: boolean = true
  let showMinus: boolean = false

  function showFiltr() {
    showFilter = true
    showMinus = true
    showPlus = false
  }

  function hideFiltr() {
    showFilter = false
    showMinus = false
    showPlus = true
  }
  
    getPosts()
    getLocations()
  
  </script>
  
  <svelte:head>
      <title>Hamroh Taxi - Haydovchilar</title>
  </svelte:head>
  
  <Navbar></Navbar>
  
  <section class="elonlar flex flex-col items-start gap-[24px] gap-sm-2 my-4 my-sm-5 px-2 mt-[100px] sm:px-12">
    <h1 class="text-3xl font-bold outline-0">Haydovchilar</h1>
    <div class="flex flex-col justify-between items-start w-full gap-2 bg-indigo-900 p-5 rounded-xl">
      <div class="flex justify-between items-center gap-2 w-full">
        <p class="text-white text-xl font-semibold">Filtrlash:</p>
        <button on:click={showFiltr} class={"bg-white py-2 px-3 rounded-md " + (showPlus ? "block" : "hidden")}><i class="bi bi-plus"></i></button>
        <button on:click={hideFiltr} class={"bg-white py-2 px-3 rounded-md " + (showMinus ? "block" : "hidden")}><i class="bi bi-dash"></i></button>
      </div>
      <div class={"flex-col justify-between items-start gap-2 w-full " + (showFilter ? "flex" : "hidden")}>
        <div class="flex flex-col md:flex-row justify-between items-start gap-5 w-full">
          <div class="flex flex-col w-full">
            <div>
              <div class="from-reg flex flex-col">
                <p class="text-white">Viloyat: (Qayerdan)</p>
                <select name="" id="" bind:value={from_reg} on:change={() => { addDistrictsFrom(from_reg.toString())}} class="p-3 rounded-xl border-2">
                  {#each $regionsStore as region}
                    <option value="{region.region_uz}">{region.region_uz}</option>
                  {/each}
                </select>
              </div>
              <div class="from-dis flex flex-col">
                <p class="text-white">Tuman: (Qayerdan)</p>
                <select name="" id="" bind:value={from_dis} class="p-3 rounded-xl border-2">
                  {#each $districtsStore.filter(dist => dist.region_id == district_dan) as dist}
                    <option value="{dist.district_uz}">{dist.district_uz}</option>
                  {/each}
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <div>
              <div class="to_reg flex flex-col">
                <p class="text-white">Viloyat: (Qayerga)</p>
                <select name="" id="" bind:value={to_reg} on:change={() => { addDistrictsTo(to_reg.toString())}} class="p-3 rounded-xl border-2">
                  {#each $regionsStore as region}
                    <option value="{region.region_uz}">{region.region_uz}</option>
                  {/each}
                </select>
              </div>
              <div class="to-dis flex flex-col">
                <p class="text-white">Tuman: (Qayerga)</p>
                <select name="" id="" bind:value={to_dis} class="p-3 rounded-xl border-2">
                  {#each $districtsStore.filter(dist => dist.region_id == district_ga) as dist}
                    <option value="{dist.district_uz}">{dist.district_uz}</option>
                  {/each}
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <div>
              <p class="text-white">Ketish vaqti:</p>
              <input  bind:value={go_time} type="datetime-local" name="" id="" class="px-3 py-[0.64rem] rounded-xl border-2 w-full">
            </div>
            <div>
              <p class="text-white">Hamrohlar soni:</p>
              <input bind:value={count} type="number" min="1" max="20" name="" id="" class="px-3 py-[0.64rem] rounded-xl border-2 w-full">
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div>
            <button on:click={filter} class="px-8 py-4 rounded-xl bg-indigo-500 w-full text-white font-medium"><i class="bi bi-search text-white"></i>  Izlash</button>
          </div>
        </div>
      </div>
    </div>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center w-full">
    {#each $drivPostsStore as post}
      <Elon phone_number={post.user.phone_number} price={post.price} author_name={post.user.name} user_role={post.user_role} from_loc={post.from_location} to_loc={post.to_location} go_time={post.go_time} count={post.count} addition={post.addition}></Elon>
    {/each} 
   </div>
  
  </section>
  
  <Footer></Footer>