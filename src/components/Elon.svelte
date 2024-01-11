<script lang="ts">
    import type { Post } from "../store";
    import PublicProfile from "../modals/PublicProfile.svelte";

    export let post: Post
    let myDate = new Date(post.goTime);
    let date = myDate.getDate()
    let month = ((myDate.getMonth()+1).toString().length==1?('0'+(myDate.getMonth()+1)):(myDate.getMonth()+1)).toString()
    let year = myDate.getFullYear()
    let goTime = (myDate.getUTCHours().toString().length == 1 ? ('0' + myDate.getUTCHours()) : myDate.getUTCHours())  + ':' + (myDate.getUTCMinutes().toString().length == 1 ? ('0' + myDate.getUTCMinutes()) : myDate.getUTCMinutes())

    let showProfile: boolean = false
</script>

<div class="flex flex-col w-full h-full bg-white text-slate-900 items-end justify-center p-4 rounded-2xl shadow-sm">
    <PublicProfile profile={post.profile} show={showProfile} close={() => { showProfile = false }}></PublicProfile>
    <div class="flex flex-col justify-start gap-3 w-full lg:px-8 md:py-4">
      <!-- count - createdAt - updatedAt -->
      <div class="flex justify-between items-center">
        <span class="flex items-center gap-1">
          <i class="bi bi-people"></i>
          <p class="my-0 text-base font-bold">
            {#if post.status ==1}
              {post.count} kishi
            {:else}
              <st class="text-red-500 font-semibold">To'lgan</st>
            {/if}
          </p>
        </span>
        <p class="text-right">
          {#if post.createdAt == post.updatedAt}
            {post.createdAt.slice(0,10)} {post.createdAt.slice(11,16)}
          {:else}
            {post.updatedAt.slice(0,10)} {post.updatedAt.slice(11,16)} (tahrirlangan)
          {/if}
        </p>
      </div>
      <!-- addition - izoh -->
      <div class="flex flex-col gap-1 bg-green-100 p-2 rounded-xl">
        <p><b><i class="bi bi-quote"></i> Izoh:</b></p>
        <p>{post.addition}</p>
      </div>
      <!-- go time -->
      <div class="flex flex-col gap-1 w-full bg-indigo-50 rounded-xl p-2">
        <p class="text-center"><b>Yo'lga chiqish sanasi va vaqti:</b></p>
        <div class="flex justify-between">
          <span class="flex items-center gap-1">
            <i class="bi bi-calendar"></i>
            <p class="font-semibold text-xl">
              {date}-{#if month=='01'}yan{:else if month=='02'}fev{:else if month=='03'}mar{:else if month=='04'}apr{:else if month=='05'}may{:else if month=='06'}iyn{:else if month=='07'}iyl{:else if month=='08'}avg{:else if month=='09'}sen{:else if month=='10'}okt{:else if month=='11'}noy{:else if month=='12'}dek{/if} {year}
            </p>
          </span>
          <span class="flex items-center gap-1">
            <i class="bi bi-clock"></i>
            <p class="font-semibold text-xl">{goTime}</p>
          </span>
        </div>
      </div>
      <!-- direction -->
      <div class="4 flex flex-col">
        <div class="flex justify-between items-center">
          <div class="from_loc flex flex-col">
            <p class="font-bold text-2xl">{post.fromLocation.split(' ')[1]}</p>
            <p class="font-semibold text-sm">{post.fromLocation.split(' ').length == 3 ? post.fromLocation.split(' ')[2] : post.fromLocation.split(' ')[1]}</p>
          </div>
          <div class="to_loc flex flex-col items-end">
            <p class="font-bold text-2xl">{post.toLocation.split(' ')[1]}</p>
            <p class="font-semibold text-sm">{post.toLocation.split(' ').length == 3 ? post.toLocation.split(' ')[2] : post.toLocation.split(' ')[1]}</p>
          </div>
        </div>
        <img class="" draggable=false src="./images/direction.svg" alt="">
      </div>
      <!-- profile - call button -->
      <div class="flex flex-col gap-2 items-center w-full">
        <div class="5 flex justify-between items-center w-full">
          <button on:click={() => { showProfile = true }} class="user flex items-center gap-1 p-1 border-2 rounded-xl">
            <img class="rounded-full" src="./images/userpic.png" alt="" width="54px">
            <span class="flex flex-col items-start pr-1">
              <p class="text-sm lg:text-base xl:text-xl font-semibold">{post.profile.userName.split(' ')[0]}</p>
              <p class="text-xs lg:text-sm">{#if post.profile.userRole == 'driver'}Haydovchi{:else}Yo'lovchi{/if}</p>
            </span>
          </button>
          <a href="tel:{post.profile.userPhone}" class="bg-indigo-500 text-zinc-100 md:text-sm text-center flex items-center gap-2 font-semibold rounded-xl h-full px-5"><i class="bi bi-telephone"></i> <p>Bog'lanish</p></a>
        </div>
      </div>

    </div>

    
  </div>