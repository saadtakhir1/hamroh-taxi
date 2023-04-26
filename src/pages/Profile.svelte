<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
    import Malumotlarim from '../components/Malumotlarim.svelte';
    import Elonlarim from "../components/Elonlarim.svelte";
    import { getVerify } from '../api/auth/auth.api';
    import { navigate } from 'svelte-navigator';
    import { getDistricts, getRegions } from "../api/districts.api"

    async function getRegs() {
        await getDistricts()
        await getRegions()
    }

    getRegs()

    const token = localStorage.getItem('token')
    let payload: any = JSON.parse(localStorage.getItem('payload'))
    let showMenu = false
    let user_name: boolean = false

    let showInfo: boolean = true;
    let showAd: boolean = false;

    function clickInfo() {
        showInfo = true
        showAd = false
        btn_info.style.background = "rgb(49 46 129 / var(--tw-bg-opacity)"
        btn_info.style.color = "white"
        btn_ads.style.background = "white"
        btn_ads.style.color = "rgb(49 46 129 / var(--tw-bg-opacity)"
    }

    function clickAds() {
        showInfo = false 
        showAd = true
        btn_info.style.background = "white"
        btn_info.style.color = "rgb(49 46 129 / var(--tw-bg-opacity)"
        btn_ads.style.background = "rgb(49 46 129 / var(--tw-bg-opacity)"
        btn_ads.style.color = "white"
    }

    let btn_info: HTMLButtonElement
    let btn_ads: HTMLButtonElement

</script>

<main>
    <Navbar></Navbar>
        
        <div class="flex flex-col md:flex-row mt-[60px] py-5 px-3 md:px-[64px] flex gap-5">
            <div class="sm:h-screen bg-white flex flex-col gap-3">
                <div class="flex flex-row sm:flex-col justify-center items-center w-full gap-2">
                    <img src="./images/pf-pic.jpeg" class="w-[120px]" alt="profile-pic">
                    <div class="flex flex-col">
                        <p class="text-2xl font-semibold">{payload.name}</p>
                        <p>{payload.role}</p>
                    </div>
                </div>
                <div class="flex md:flex-col px-3 gap-3 text-lg">
                    <button on:click={clickInfo} bind:this={btn_info} class="px-4 py-2 rounded-md shadow-md bg-indigo-900 text-white font-semibold">Malumotlarim</button>
                    <button on:click={clickAds} bind:this={btn_ads} class="px-4 py-2 grow rounded-md shadow-md font-semibold">Elonlarim</button>
                </div>
            </div>
            
            <div class="flex flex-col mx-auto w-full gap-3">
                <Malumotlarim showme={showInfo}></Malumotlarim>
                <Elonlarim showme={showAd}></Elonlarim>
            </div>
        </div>

    <Footer></Footer>
</main>