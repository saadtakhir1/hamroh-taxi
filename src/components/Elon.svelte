<script lang="ts">
  export let author_name: string
  export let price: string
  export let from_loc: string
  export let to_loc: string
  export let go_time: string
  export let count: number
  export let addition: string
  export let user_role: number
  export let phone_number: string

  let from_name: string, from_dist: string, to_name: string, to_dist: string

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

        <div class="1 flex justify-between items-center">
          <div class="go_time flex flex-col gap-1">
            <span class="flex items-center gap-1">
              <i class="bi bi-calendar"></i>
              <p class="font-semibold text-sm">Post joylangan sana:</p>
            </span>
            <p class="go_time my-0">{go_time}</p>
          </div>
          <div class="price flex flex-col items-end gap-1">
            <span class="flex items-center gap-1">
              <i class="bi bi-coin"></i>
              <p class="font-semibold text-sm">Yo'lkira narxi:</p>
            </span>
            <span class="flex items-end">
              <p class="my-0 text-2xl font-bold">{price}</p>
              <p>so'm</p>
            </span>
          </div>
        </div>

        <div class="2 flex justify-between items-center">
          <div class="count flex flex-col gap-1">
            <span class="flex items-center gap-1">
              <i class="bi bi-people"></i>
              <p class="font-semibold text-sm">Hamrohlar:</p>
            </span>
            <p class="go_time my-0 text-xl font-semibold">{count} ta</p>
          </div>
          <div class="go_time flex flex-col items-end gap-1">
            <span class="flex items-center gap-1">
              <i class="bi bi-coin"></i>
              <p class="font-semibold text-sm">Ketish vaqti:</p>
            </span>
            <span class="">
              <p class="my-0 text-xl font-semibold">{go_time}</p>
            </span>
          </div>
        </div>

        <div class="3 flex justify-between items-center">
          <div class="go_time flex gap-1 w-full">
            <span class="flex items-center gap-1">
              <i class="bi bi-pencil-square"></i>
              <p class="font-semibold text-sm">Izoh:</p>
            </span>
            <p class="my-0">{addition}</p>
          </div>
        </div>

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

        <div class="5 flex justify-between items-center">
          <div class="user flex items-center gap-1">
            <img class="rounded-full" src="./images/pf-pic.jpeg" alt="" width="54px">
            <span class="flex flex-col items-start">
              <p class="text-sm lg:text-base xl:text-xl font-semibold">{author_name}</p>
              <p class="text-xs lg:text-sm ">{userRole}</p>
            </span>
          </div>
          <a href="tel:{phone_number}" class="bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-xs md:text-sm font-semibold rounded-xl py-3 px-5"><i class="bi bi-telephone mr-2"></i> Hamroh
            bo'lish</a>
        </div>

    </div>

    
  </div>