<script lang="ts">
  export let author_name: string
  export let from_loc: string
  export let to_loc: string
  export let go_time: string
  export let count: number
  export let addition: string
  export let user_role: number

  let userRole: string

  if(user_role == 0) {
    userRole = "Yo'lovchi"
  } else{
    userRole = "Haydovchi"
  }

</script>

<div class="flex flex-col w-full h-full  items-end justify-center p-4 rounded-2xl bg-slate-200 shadow-lg mx-3">

    <div class="flex justify-start w-full">
      <div class="d-flex flex-column gap-3 px-3 py-4">

        <div class="flex flex-row justify-start items-center">
          <i class="bi bi-person-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Ismi:</p>
            <p class="attendant-value my-0">{author_name + `(${userRole})`}</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-geo-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Yo'nalish:</p>
            <p class="attendant-value my-0">{from_loc + '-' + to_loc}</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-clock-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Ketish vaqti:</p>
            <p class="attendant-value my-0">{go_time}</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-people-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Hamrohlar soni:</p>
            <p class="attendant-value my-0">{count} ta</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-map-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Qo'shimcha:</p>
            <p class="attendant-value my-0">{addition}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="btn bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-sm font-semibold rounded-xl py-2 px-5"><i class="bi bi-telephone mr-2"></i> Hamroh
      bo'lish</button>
  </div>
