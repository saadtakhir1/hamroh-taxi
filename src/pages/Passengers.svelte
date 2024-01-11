<script lang="ts">
  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
  import Elon from '../components/Elon.svelte'
  import { PostEndpoint } from '../api'
  import { countryStore, passPostsStore, type Post } from '../store'

  let from_reg, from_dis, to_reg, to_dis, go_time, count, price

  const postEndpoint = new PostEndpoint()
  let current_page = 1
  let per_page = 12

  // get passengers posts
  async function getPosts() {
    try{
      const res = await postEndpoint.get(current_page, per_page, 'passenger')
      const posts: Post[] = res.data.posts
      passPostsStore.set(posts)
      console.log(posts)
    }catch(err: any) {
      console.log(err)
    }
  }

  // get locations
  async function getLocations() {
    try{
      const res = await postEndpoint.getLocations()
      const countries = res.data
      countryStore.set(countries)
    }catch(err: any){
      console.log(err)
    }
  }

  // tumanlar filteri uchun o'zgaruvchilar
  let district_dan: number = 1
  let district_ga: number = 1


  // function addDistrictsFrom(region_uz: string) {
  //    district_dan = $regionsStore.filter(reg => reg.region_uz == region_uz)[0].id
  // }
    
  // function addDistrictsTo(region_uz: string) {
  //       district_ga  = $regionsStore.filter(reg => reg.region_uz == region_uz)[0].id
  //   }

  async function filter() {
    // try{
    //   const res = await getPostsByFilter(from_dis, to_dis, go_time, count)
    //   const posts: Post[] = res.data.results
    //   console.log(posts)
    //   passPostsStore.set(posts.filter(post => post.user_role == 0))
    //   console.log($passPostsStore)
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
	<title>Hamroh Taxi - Hamrohlar</title>
</svelte:head>


<section class="elonlar min-h-screen flex flex-col justify-betwwen">
  <Navbar></Navbar>
  <div class="grow flex flex-col gap-3 p-3 sm:p-5 md:p-8">
    <h1 class="text-3xl text-slate-900 font-bold outline-0">Hamrohlar</h1>
    <div class="flex flex-col justify-between items-start w-full gap-2 bg-indigo-900 p-5 rounded-xl">
          <div class="flex justify-between items-center gap-2 w-full">
            <p class="text-white text-xl font-semibold">Filtrlash:</p>
            <button on:click={showFiltr} class={"bg-white py-2 px-3 rounded-md " + (showPlus ? "block" : "hidden")}><i class="bi bi-plus"></i></button>
            <button on:click={hideFiltr} class={"bg-white py-2 px-3 rounded-md " + (showMinus ? "block" : "hidden")}><i class="bi bi-dash"></i></button>
          </div>
          <!-- <div class={"flex-col justify-between items-start gap-2 w-full " + (showFilter ? "flex" : "hidden")}>
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
          </div> -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-5 place-items-center">
      {#each $passPostsStore as post}
        <Elon post={post}></Elon>
      {/each} 
    </div>
  </div>
 <Footer></Footer>
</section>
