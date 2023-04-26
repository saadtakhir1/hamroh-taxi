<script lang="ts">

  import ElonEdit from '../modals/ElonEdit.svelte'

  export let showEdit: boolean
  showEdit

  function onEdit() {
    showEdit = true
  }

</script>

<div class="flex flex-col items-end justify-center bg-slate-50 p-4 rounded-2xl bg-slate-200 shadow-lg">

    <div class="flex justify-start w-full">
      <div class="d-flex flex-column gap-3 px-3 py-4">

        <div class="flex flex-row justify-start items-center">
          <i class="bi bi-person-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Ismi:</p>
            <p class="attendant-value my-0">Doniyor</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-geo-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Jo'nalish:</p>
            <p class="attendant-value my-0">Gurlan - Urganch</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-clock-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Ketish vaqti:</p>
            <p class="attendant-value my-0">8:00</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-people-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Hamrohlar soni:</p>
            <p class="attendant-value my-0">3 ta</p>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start">
          <i class="bi bi-map-fill"></i>
          <div class="flex items-center justify-center">
            <p class="font-bold mx-2 my-0">Mahallla:</p>
            <p class="attendant-value my-0">Botirlar</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-5 right-5 bg-white">
      <!-- <button on:click={onEdit} class=" p-2"> <i class="bi bi-three-dots-vertical"></i> </button> -->
      <div class="relative">
        <ElonEdit show={showEdit}></ElonEdit>
      </div>
    </div>

    <button class="btn bg-indigo-900 text-white text-sm font-semibold rounded-3xl py-2 px-5">Hamroh
      bo'lish</button>
  </div>
