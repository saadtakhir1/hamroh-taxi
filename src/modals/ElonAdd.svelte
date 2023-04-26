<script lang="ts">
    import axios from "axios";
    import { getDistricts, getRegions } from "../api/districts.api"
    import { District, districtsStore } from "../store/districts.store"
    import { regionsStore } from "../store/regions.store";

    export let show: boolean
    export let close: () => void

    getRegions()
    getDistricts()

    let region_dan: HTMLSelectElement
    let region_ga: HTMLSelectElement
    let district_dan: number = 0
    let district_ga: number = 0

    let districtga, districtdan, go_date, gotime, count, addition

    function addDistrictsDan(region_name: string) {
        let region = $regionsStore.filter(reg => reg.region_uz == region_name)
        district_dan = region[0].id
    }
    
    function addDistrictsGa(region_name: string) {
        let region = $regionsStore.filter(reg => reg.region_uz == region_name)
        district_ga = region[0].id
    }

    function onload(){
        addDistrictsDan(region_dan.value)
        addDistrictsGa(region_ga.value)
    }


    async function postPost() {
        
        console.log("s")
        close()
    }
    
</script>

<div class={"h-max md:h-screen md:w-screen bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center items-center " + (show ? "flex" : "hidden")}>
    <div class="bg-white p-8 flex flex-col gap-3 md:w-[fit-content] rounded-md shadow-md">

        <p class="text-xl text-center font-bold">Elon qo'shish</p>

        <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Yo'nalish:</label>
                <span class="flex flex-col md:flex-row gap-2">
                    dan
                    <select on:change={() => {addDistrictsDan(region_dan.value)}}  class="outline-0 border-2 px-3 py-1 rounded" name="" id="" bind:this={region_dan}>
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
                    <select on:change={() => {addDistrictsGa(region_ga.value)}} class="outline-0 border-2 px-3 py-1 rounded" name="" id="" bind:this={region_ga}>
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
                <label class="font-semibold" for="">Ketish vaqti:</label>
                <input bind:value={go_date} class="outline-0 border-2 px-3 py-1 rounded" type="datetime-local">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Hamrohlar soni:</label>
                <input bind:value={count} class="outline-0 border-2 px-3 py-1 rounded" type="number" name="" id="" min="1" max="20" placeholder="1">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Qo'shimcha:</label>
                <input bind:value={addition} class="outline-0 border-2 px-3 py-1 rounded" type="text" name="" id="" placeholder="Botirlar mahallasidan">
            </div>
        </div>

        <div class="flex justify-between">
            <button on:click={() => close()} class="py-2 px-4 rounded-md text-white bg-red-600">Yopish</button>
            <button on:click={() => { postPost()}} class="py-2 px-4 rounded-md text-white bg-green-600">Qo'shish</button>
        </div>
    </div>
</div>