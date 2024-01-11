<script lang="ts">
    // components
    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
    import UserInfo from '../components/UserInfo.svelte'
    import Elonlarim from "../components/Elonlarim.svelte"

    import { navigate } from 'svelte-navigator'
    import { UserEndpoint, PostEndpoint } from '../api'
    import { countryStore, districtStore, regionStore } from '../store';

    const postEndpoint = new PostEndpoint()


        
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
    
    let infoClassBtn = 'bg-indigo-500 text-white'
    let elonClassBtn = 'bg-white text-indigo-800'
    
    function clickInfo() {
        showInfo = true
        showAd = false
        infoClassBtn = 'bg-indigo-500 text-white'
        elonClassBtn = 'bg-white text-indigo-800'
    }
    
    function clickElon() {
        showInfo = false 
        showAd = true
        elonClassBtn = 'bg-indigo-500 text-white'
        infoClassBtn = 'bg-white text-indigo-800'
    }
    
    function logOut() {
        localStorage.removeItem('access')
        localStorage.removeItem('user')
        localStorage.removeItem('refresh')
        navigate('/login')
    }
    
</script>

<svelte:head>
	<title>Hamroh Taxi - Profile</title>
</svelte:head>

<div class="flex flex-col">
    <Navbar></Navbar>   
    <div class="grow flex flex-col md:flex-row md:h-screen p-3">
        <div class="flex flex-col gap-3 md:border-r-2">
            <div class="flex flex-row sm:flex-col items-center w-full gap-2">
                <div class="flex items-center">
                    <img class="w-[140px]" alt="user-pic" src="./images/userpic.png"/>
                    <div class="flex-flex-col">
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
            </div>
            <div class="grid grid-cols-2 md:grid-cols-1 gap-3 text-lg">
                <button on:click={clickInfo} class={infoClassBtn + " flex justify-center gap-2 px-4 py-2 rounded-md shadow-md font-semibold"}><i class="bi bi-person"></i> Akkaunt</button>
                <button on:click={clickElon} class={elonClassBtn + " flex justify-center gap-2 px-4 py-2 rounded-md shadow-md font-semibold"}><i class="bi bi-card-list"></i> Elonlarim</button>
            </div>
        </div>    
        <div class="flex flex-col w-full gap-3">
            <UserInfo showme={showInfo}></UserInfo>
            <Elonlarim showme={showAd}></Elonlarim>
        </div>
    </div>
    <Footer></Footer>
</div>