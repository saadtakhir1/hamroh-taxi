<script lang="ts">
    // components
    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
    import UserInfo from '../components/UserInfo.svelte'
    import CarInfo from '../components/CarInfo.svelte'
    import Elonlarim from "../components/Elonlarim.svelte"

    import { navigate } from 'svelte-navigator'
    import { getUserPosts } from '../api/posts.api'
    
    const access  = localStorage.getItem('access')
    
    async function checkAccess() {
        try{
            const res = await getUserPosts(access)
        }catch(err: any){
            navigate('/login')
        }
    }

    checkAccess()

    const payload = JSON.parse(localStorage.getItem('payload'))

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

    function logOut() {
        localStorage.removeItem('access')
        localStorage.removeItem('payload')
        localStorage.removeItem('refresh')
        localStorage.removeItem('car')
        navigate('/login')
    }

    let btn_info: HTMLButtonElement
    let btn_ads: HTMLButtonElement

</script>

<svelte:head>
	<title>Hamroh Taxi - Profile</title>
</svelte:head>

<main>
    <Navbar></Navbar>
        
        <div class="flex flex-col md:flex-row md:h-screen pt-[96px] pb-[64px] p-8 px-3 md:px-[64px] gap-5 ">
            <div class="sm:h-screen bg-white flex flex-col gap-3 md:border-r-2 pr-[40px]">
                <div class="flex flex-row sm:flex-col justify-center items-center w-full gap-2">
                    <img src="./images/pf-pic.jpeg" class="w-[120px]" alt="profile-pic">
                    <div class="flex flex-col items-center">
                        <p class="text-2xl font-semibold">{payload.name}</p>
                        <p>{#if payload.user_role == 0}
                                Yo'lovchi
                            {:else}
                                Haydovchi
                            {/if}</p>
                    </div>
                </div>
                <div class="flex md:flex-col px-3 gap-3 text-lg">
                    <button on:click={clickInfo} bind:this={btn_info} class="px-4 py-2 rounded-md shadow-md bg-indigo-900 text-white font-semibold">Malumotlarim</button>
                    <button on:click={clickAds} bind:this={btn_ads} class="px-4 py-2 grow rounded-md shadow-md font-semibold">Elonlarim</button>
                </div>
            </div>
            
            <div class="flex flex-col mx-auto w-full gap-3">
                <div>
                    <UserInfo showme={showInfo}></UserInfo>
                    <CarInfo showme={showInfo}></CarInfo>
                </div>
                <Elonlarim showme={showAd}></Elonlarim>
            </div>
        </div>

    <Footer></Footer>
</main>