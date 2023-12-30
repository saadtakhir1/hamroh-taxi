<script lang="ts">
    // components
    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
    import UserInfo from '../components/UserInfo.svelte'
    import CarInfo from '../components/CarInfo.svelte'
    import Elonlarim from "../components/Elonlarim.svelte"

    import { navigate } from 'svelte-navigator'
    import { UserEndpoint } from '../api/api'
    
    const access  = localStorage.getItem('access')
    
    // async function checkAccess() {
    //     try{
    //         await getUserPosts(access)
    //     }catch(err: any){
    //         navigate('/login')
    //     }
    // }

    // if(access) {
    //     checkAccess()
    // } else {
    //     navigate('/login')
    // }

    const user = JSON.parse(localStorage.getItem('user'))

    let showInfo: boolean = true;
    let carInfo: boolean = false;
    let showAd: boolean = false;

    if(user.car != null) {
        carInfo = true
    }

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
                    <div class="flex flex-col items-center">
                        <img class="w-[100px]" alt="user-pic" src="./images/userpic.png"/>
                        <p class="text-2xl font-semibold">{user.profile.userName}</p>
                        <p>{#if user.role == "passenger"}
                                Yo'lovchi
                            {:else if user.role == "admin"}
                                Admin
                            {:else}
                                Haydovchi
                            {/if}</p>
                        <button class="underline text-red-500" on:click={logOut}><i class="bi bi-box-arrow-left"></i> Chiqish</button>
                    </div>
                </div>
                <div class="flex md:flex-col px-3 gap-3 text-lg">
                    <button on:click={clickInfo} bind:this={btn_info} class="flex gap-2 px-4 py-2 rounded-md shadow-md bg-indigo-900 text-white font-semibold"><i class="bi bi-person"></i> Malumotlarim</button>
                    <button on:click={clickAds} bind:this={btn_ads} class="flex gap-2 px-4 py-2 grow rounded-md shadow-md font-semibold"><i class="bi bi-card-list"></i> Elonlarim</button>
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