<script lang="ts">

  import { navigate } from "svelte-navigator"
  import { getUserPosts } from '../api/posts.api'

  const access = localStorage.getItem('access')
  let payload: any = JSON.parse(localStorage.getItem('payload'))
  let showMenu = false
  let user_name: boolean = false

  async function checkUser(){
    const res = await getUserPosts(access)
    if(res.status == 200){
      user_name = true
    }else{
      user_name = false
    }
  }

  checkUser()

  

</script>

<nav class="shadow-sm fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-md px-4 py-3 lg:px-8 sm:py-3 text-white z-[999]">
    <div class="flex justify-between items-center lg:px-8">
      <a on:click={() => navigate('/')} class="sm:text-2xl font-[900] text-xl flex items-center gap-1" href="/" ><img src="./images/logonav.svg" alt="navlogo"></a>
      <button on:click={() => {
        showMenu = true
      }} class="open-menu bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% px-2 py-1 rounded-lg shadow-sm" type="button">
        <i class="bi bi-list text-xl text-white"></i>
      </button>
      <div class={"h-screen w-screen bg-black/50 relative top-0 left-0 " + (showMenu ? "block" : "hidden")}>
        <div class={"collapsse w-screen fixed top-0 right-0 h-screen transition-all duration-200 ease-in-out flex flex-col justify-between gap-3 px-4 py-3 sm:px-8 sm:py-3 bg-indigo-800 text-white " + (showMenu ? "translate-x-[0]" : "translate-x-[100%]")}>
          <div class="collapse-menu flex justify-between">
            <p class="px-5 text-xl font-semibold">Menu</p>
            <button on:click={() => showMenu = false} class="close-menu bg-white text-black px-2 py-1 rounded-lg"><i class="bi bi-x text-xl"></i></button>
          </div>
          <div class="flex flex-col items-start px-5 gap-2 font-semibold sm:text-xs">
              <button on:click={() => navigate('/')} class="py-2 rounded"><i
                  class="bi bi-house mr-1"></i>Asosiy sahifa</button> 
              <button on:click={() => navigate('/passengers')} class="py-2 rounded"><i
                  class="bi bi-person-badge mr-1"></i>Hamroh izlash</button>
              <button on:click={() => navigate('/drivers')} class="py-2 rounded"><i
                  class="bi bi-car-front mr-1"></i>Taxi izlash</button>
              <button on:click={() => navigate('/about')} class="py-2 rounded"><i
                  class="bi bi-info-circle mr-1"></i>Biz haqimizda</button>
              {#if user_name}
                <button on:click={() => { navigate('/profile')}} class="py-2 rounded"><i class="bi bi-person mr-1"></i>Profile</button>
              {:else}
                <button on:click={() => { navigate('/login') }} class="py-2 rounded-2xl"><i class="bi bi-person mr-1"></i>Kirish</button>
              {/if}
              </div>
          <div class="flex flex-col items-center">
            <p class="m-0">Ijtimoiy tarmoqlar</p>
            <div class="flex gap-3 p-3">
              <a href="https://instagram.com/hamroh_taxi" target="_blank" rel="noreferrer" class=""><i class="bi bi-instagram text-xl"></i></a>
              <a href="https://t.me/hamroh_taxi" target="_blank" rel="noreferrer" class=""><i class="bi bi-telegram text-xl"></i></a>
              <a href="https://youtube.com/@hamroh_taxi" target="_blank" rel="noreferrer" class=""><i class="bi bi-youtube text-xl"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-menu-lg">
        <ul class="flex items-center justify-center gap-2 md:text-xs lg:text-sm xl:text-base text-indigo-950 font-semibold">
          <li class="nav-item">
            <button class="lg:px-5 px-2 py-2 rounded-2xl hover:bg-gradient-to-b from-slate-100 to-slate-300" on:click={() => navigate('/')}><i class="bi bi-house mr-1"></i>Asosiy
              sahifa</button>
          </li>
          <li class="nav-item">
            <button class="lg:px-5 px-2 py-2 rounded-2xl  hover:bg-gradient-to-b from-slate-100 to-slate-300" on:click={() => navigate('/passengers')}><i class="bi bi-person-badge mr-1"></i>Hamroh izlash</button>
          </li>
          <li class="nav-item">
            <button class="lg:px-5 px-2 py-2 rounded-2xl  hover:bg-gradient-to-b from-slate-100 to-slate-300" on:click={() => navigate('/drivers')}><i class="bi bi-car-front mr-1"></i>Taxi izlash</button>
          </li>
          <li class="nav-item">
            <button class="lg:px-5 px-2 py-2 rounded-2xl  hover:bg-gradient-to-b from-slate-100 to-slate-300" on:click={() => navigate('/about')}><i class="bi bi-info-circle mr-1"></i>Biz
              haqimizda</button>
          </li>
          <li class="nav-item">
            {#if user_name}
              <button on:click={() => { navigate('/profile')}} class="bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white font-semibold px-5 py-2 rounded-2xl"><i class="bi bi-person mr-1"></i>Profile</button>
            {:else}
              <button on:click={() => { navigate('/login') }} class="bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white font-semibold px-5 py-2 rounded-2xl"><i class="bi bi-person mr-1"></i>Kirish</button>
            {/if}
        </li>
        </ul>
      </div>
    </div>
  </nav>