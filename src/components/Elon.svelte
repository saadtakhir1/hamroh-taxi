<script lang="ts">
  export let author_name: string
  export let price: string
  export let from_loc: string
  export let to_loc: string
  export let go_time: string
  // export let posted_time: string
  export let count: number
  export let addition: string
  export let user_role: number
  export let phone_number: string

  let from_name: string, from_dist: string, to_name: string, to_dist: string

  let month: string
  let date = go_time.split(' ')[0]
  let time = go_time.split(' ')[1]
  
  function findMonth() {
    if(date.split('-')[1] == '01') {
      month = 'yan'
    } else if (date.split('-')[1] == '02') {
      month = 'fev'
    } else if (date.split('-')[1] == '03') {
      month = 'mar'
    } else if (date.split('-')[1] == '04') {
      month = 'apr'
    } else if (date.split('-')[1] == '05') {
      month = 'may'
    } else if (date.split('-')[1] == '06') {
      month = 'iyn'
    } else if (date.split('-')[1] == '07') {
      month = 'iyl'
    } else if (date.split('-')[1] == '08') {
      month = 'avg'
    } else if (date.split('-')[1] == '09') {
      month = 'sen'
    } else if (date.split('-')[1] == '10') {
      month = 'okt'
    } else if (date.split('-')[1] == '11') {
      month = 'noy'
    } else {
      month = 'dek'
    }
  }

  findMonth()

  function addLoc() {
    const from_arr = from_loc.split(' ')
    from_name = from_arr[0]
    from_dist = from_arr[1]

    const to_arr = to_loc.split(' ')
    to_name = to_arr[0]
    to_dist = to_arr[1]
  }

  let userRole: string

  if(user_role == 0) {
    userRole = "Yo'lovchi"
  } else{
    userRole = "Haydovchi"
  }

  addLoc()

</script>

<div class="flex flex-col w-full h-full  items-end justify-center p-4 rounded-2xl shadow bg-gradient-to-b from-slate-200 from-1%  to-slate-400 to-100%">

    <div class="flex flex-col justify-start gap-3 w-full lg:px-8 md:py-4">

        <!-- count and price -->
    <div class="1 flex justify-between items-start">
      <div class="go_time flex flex-col gap-1">
        <span class="flex items-center gap-1">
          <i class="bi bi-people"></i>
          <p class="font-semibold text-sm">Hamrohlar:</p>
        </span>
        <span class="flex items-end gap-1">
          <p class="my-0 text-base font-bold">{count}</p>
          <p>ta</p>
        </span>
      </div>
      <div class="price flex flex-col items-end gap-1">
        <span class="flex items-center gap-1">
          <i class="bi bi-coin"></i>
          <p class="font-semibold text-sm">Yo'lkira narxi:</p>
        </span>
        <span class="flex items-end gap-1">
          <p class="my-0 text-base font-bold">{price}</p>
          <p>so'm</p>
        </span>
      </div>
    </div>

    <!-- got time -->
  
    <div class="2 flex justify-between gap-1">
      <div class="flex flex-col items-start gap-1">
        <span class="flex items-center gap-1">
          <i class="bi bi-calendar"></i>
          <p class="font-semibold text-sm">Sana:</p>
        </span>
        <span class="">
          <p class="my-0 text-base text-right font-semibold">{#if +date.split('-')[0][0] == 0} {date.split('-')[0][1] + '-' + month} {:else} {date.split('-')[0] + '-' + month} {/if}{date.split('-')[2] + '-' + 'yil'}</p>
        </span>
      </div>
      <div class="flex flex-col items-end gap-1">
        <span class="flex items-center gap-1">
          <i class="bi bi-clock"></i>
          <p class="font-semibold text-sm">Vaqt:</p>
        </span>
        <span class="">
          <p class="my-0 text-base text-right font-semibold">{time}</p>
        </span>
      </div>
    </div>

    <!-- addition -->
    <div class="3 flex justify-between items-center">
      <div class="go_time flex gap-1 w-full">
        <span class="flex items-center gap-1">
          <i class="bi bi-pencil-square"></i>
          <p class="font-semibold text-sm">Izoh:</p>
        </span>
        <p class="my-0">{addition}</p>
      </div>
    </div>

    <!-- direction -->
    <div class="4 flex flex-col">
      <div class="flex justify-between items-center">
        <div class="from_loc flex flex-col">
          <p class="font-bold text-2xl">{from_name}</p>
          <p class="my-0">{from_dist}</p>
        </div>
        <div class="to_loc flex flex-col items-end">
          <p class="font-bold text-2xl">{to_name}</p>
          <p class="my-0">{to_dist}</p>
        </div>
      </div>
      <img class="" src="./images/direction.svg" alt="">
    </div>

    <div class="flex flex-col gap-2 items-center w-full">
      <div class="5 flex justify-between items-center w-full">
        <div class="user flex items-center gap-1">
          <img class="rounded-full" src="./images/userpic.png" alt="" width="54px">
          <span class="flex flex-col items-start">
            <p class="text-sm lg:text-base xl:text-xl font-semibold">{author_name}</p>
            <p class="text-xs lg:text-sm ">{userRole}</p>
          </span>
        </div>
        <a href="tel:{phone_number}" class="bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-xs md:text-sm text-center font-semibold rounded-xl py-4 px-5"><i class="bi bi-telephone mr-2"></i> Hamroh
          bo'lish</a>
      </div>
    </div>

    </div>

    
  </div>