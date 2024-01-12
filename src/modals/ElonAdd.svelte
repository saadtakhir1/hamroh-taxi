<script lang="ts">
    import { PostEndpoint } from "../api";
    import { userPostsStore } from "../store";
    import type { Post } from "../store";

    export let show: boolean
    export let close: () => void

    const access = localStorage.getItem('access')
    const postEndpoint = new PostEndpoint()
    
    let countries = []
    let regions =  []

    async function getLocations() {
        try{
            const res = await postEndpoint.getLocations()
            countries = res.data.countries
            regions = res.data.regions
        }catch(err: any){
            console.log(err)
        }
    } getLocations()

    let countryFrom: HTMLSelectElement
    let country_from: number = 1
    let regionFrom: HTMLSelectElement

    let countryTo: HTMLSelectElement
    let country_to: number = 1
    let regionTo: HTMLSelectElement

    function addRegionsFrom(name: string) { country_from = countries.filter(c => c.name == name)[0].id }
    function addRegionsTo(name: string) { country_to = countries.filter(c => c.name == name)[0].id }

    let goTime: HTMLInputElement;
    let count: HTMLInputElement;
    let addition: HTMLTextAreaElement

    async function post() {
        try{
            const res = await postEndpoint.post(regionFrom.value.split(' ')[0] + ' ' + countryFrom.value, regionTo.value.split(' ')[0] + ' ' + countryTo.value, new Date(goTime.value).toJSON(), +count.value, addition.value.toString(), access)
            const post: Post = res.data.post
            const posts = $userPostsStore
            posts.unshift(post)
            userPostsStore.set(posts)
            close()
        } catch(err: any) {
            console.log(err)
        }
    }
    
</script>

<div class={"h-screen w-screen bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center items-center " + (show ? "flex" : "hidden")}>
    <div class="bg-white p-8 flex flex-col gap-3 w-screen h-full md:h-[fit-content] md:w-[fit-content] md:rounded-md shadow-md overflow-y-auto">

        <p class="text-xl text-center font-bold">Elon qo'shish</p>

        <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Yo'nalish*:</label>
                <span class="flex flex-col md:flex-row gap-2">
                    qayerdan
                    <select bind:this={countryFrom} on:change={() => {addRegionsFrom(countryFrom.value)}}  class="outline-0 border-2 px-3 py-1 rounded" name="">
                        {#each countries as country}
                            <option value="{country.name}">{country.name}</option>
                        {/each}
                    </select>
                    <select bind:this={regionFrom}  class="outline-0 border-2 px-3 py-1 rounded" name="">
                        {#each regions.filter(r => r.country_id == country_from) as reg}
                            <option value="{reg.name}">{reg.name}</option>
                        {/each}
                    </select>
                </span>
                <span class="flex flex-col md:flex-row gap-2">
                    qayerga
                    <select bind:this={countryTo} on:change={() => {addRegionsTo(countryTo.value)}}  class="outline-0 border-2 px-3 py-1 rounded" name="">
                        {#each countries as country}
                            <option value="{country.name}">{country.name}</option>
                        {/each}
                    </select>
                    <select bind:this={regionTo} class="outline-0 border-2 px-3 py-1 rounded" name="">
                        {#each regions.filter(r => r.country_id == country_to) as reg}
                            <option value="{reg.name}">{reg.name}</option>
                        {/each}
                    </select>
                </span>
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Ketish vaqti*:</label>
                <input bind:this={goTime} class="outline-0 border-2 px-3 py-1 rounded" type="datetime-local">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Hamrohlar soni*:</label>
                <input bind:this={count} class="outline-0 border-2 px-3 py-1 rounded" type="number" name="" id="" min="1" max="6" placeholder="1">
            </div>
            <div class="flex flex-col gap-2">
                <label for="izoh" class="font-semibold">Qo'shimcha*:</label>
                <textarea bind:this={addition} class="outline-0 border-2 px-3 py-1 rounded" name="izoh" id="" placeholder="Botirlar mahallasidan"></textarea>
            </div>
        </div>

        <div class="flex justify-between">
            <button on:click={() => close()} class="py-2 px-4 rounded-md text-white bg-red-600">Yopish</button>
            <button on:click={post} class="py-2 px-4 rounded-md text-white bg-green-600">Qo'shish</button>
        </div>
    </div>
</div>