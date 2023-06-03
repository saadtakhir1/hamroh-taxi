<script lang="ts">
    import { getDistricts, getRegions } from "../api/locations.api"
    import { regionsStore, districtsStore } from "../store/location.store"
    import { createPost, getUserPosts } from '../api/posts.api'
    import { Post, userPostsStore } from "../store/posts.store";

    export let show: boolean
    export let close: () => void

    const access = localStorage.getItem('access')
    const payload = JSON.parse(localStorage.getItem('payload'))

    async function getLocations() {
        try{
        const reg = await getRegions()
        const dis = await getDistricts()
        regionsStore.set(reg.data)
        districtsStore.set(dis.data)
        }catch(err: any){
        console.log(err)
        }
    }

    let region_dan: HTMLSelectElement
    let region_ga: HTMLSelectElement
    let district_dan: number = 1
    let district_ga: number = 1

    let districtga, districtdan, go_date, count, price, addition;

    function addDistrictsFrom(region_uz: string) {
        district_dan = $regionsStore.filter(reg => reg.region_uz == region_uz)[0].id
    }
    
    function addDistrictsTo(region_uz: string) {
        district_ga  = $regionsStore.filter(reg => reg.region_uz == region_uz)[0].id
    }

    async function post() {
        try{
            await createPost(access, payload.user_role, districtdan.toString(), districtga.toString(), go_date.toString(), +count, price, addition.toString())
            const res = await getUserPosts(access)
            const user_posts: Post[] = res.data.results
            userPostsStore.set(user_posts)
            close()
        } catch(err: any) {
            console.log(err)
        }
    }
    
    getLocations()
    
</script>

<div class={"h-max md:h-screen md:w-screen bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center items-center " + (show ? "flex" : "hidden")}>
    <div class="bg-white p-8 flex flex-col gap-3 md:w-[fit-content] rounded-md shadow-md">

        <p class="text-xl text-center font-bold">Elon qo'shish</p>

        <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Yo'nalish*:</label>
                <span class="flex flex-col md:flex-row gap-2">
                    dan
                    <select on:change={() => {addDistrictsFrom(region_dan.value)}}  class="outline-0 border-2 px-3 py-1 rounded" name="" id="" bind:this={region_dan}>
                        {#each $regionsStore as region}
                            <option value="{region.region_uz}">{region.region_uz}</option>
                        {/each}
                    </select>
                    <select bind:value={districtdan} class="outline-0 border-2 px-3 py-1 rounded" name="" id="">
                        {#each $districtsStore.filter(dist => dist.region_id == district_dan) as dist}
                            <option value="{dist.district_uz}" >{dist.district_uz}</option>
                        {/each}
                    </select>
                </span>
                <span class="flex flex-col md:flex-row gap-2">
                    ga
                    <select on:change={() => {addDistrictsTo(region_ga.value)}} class="outline-0 border-2 px-3 py-1 rounded" name="" id="" bind:this={region_ga}>
                        {#each $regionsStore as region}
                            <option value="{region.region_uz}">{region.region_uz}</option>
                        {/each}
                    </select>
                    <select bind:value={districtga} class="outline-0 border-2 px-3 py-1 rounded" name="" id="">
                        {#each $districtsStore.filter(dist => dist.region_id == district_ga) as dist}
                            <option value="{dist.district_uz}">{dist.district_uz}</option>
                        {/each}
                    </select>
                </span>
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Ketish vaqti*:</label>
                <input bind:value={go_date} class="outline-0 border-2 px-3 py-1 rounded" type="datetime-local">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Hamrohlar soni*:</label>
                <input bind:value={count} class="outline-0 border-2 px-3 py-1 rounded" type="number" name="" id="" min="1" max="20" placeholder="1">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Narxi*:</label>
                <input bind:value={price} class="outline-0 border-2 px-3 py-1 rounded" type="text" name="" id="" placeholder="200000">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Qo'shimcha*:</label>
                <input bind:value={addition} class="outline-0 border-2 px-3 py-1 rounded" type="text" name="" id="" placeholder="Botirlar mahallasidan">
            </div>
        </div>

        <div class="flex justify-between">
            <button on:click={() => close()} class="py-2 px-4 rounded-md text-white bg-red-600">Yopish</button>
            <button on:click={() => { post()}} class="py-2 px-4 rounded-md text-white bg-green-600">Qo'shish</button>
        </div>
    </div>
</div>