<script lang="ts">
  import EditUser from "../modals/EditUser.svelte"

  export let showme: boolean

  let user = JSON.parse(localStorage.getItem('user'))

</script>

<div class={"flex-col gap-3 py-3 " + (showme ? "flex" : "hidden")}>
  <div class="flex flex-col gap-3">
    <p class="text-xl font-bold border-l-4 border-indigo-500 pl-2">Malumotlarim</p>
    <div class="flex justify-between py-2 px-4 rounded-xl bg-white">
      <p class="text-lg font-semibold">Ism:</p>
      <span class="text-lg">{user.profile.userName}</span>
    </div>
    <div class="flex justify-between py-2 px-4 rounded-xl bg-white">
      <p class="text-lg font-semibold">Telefon:</p>
      <span class="text-lg">{user.profile.userPhone}</span>
    </div>
    <div class="flex justify-between py-2 px-4 rounded-xl bg-white">
      <p class="text-lg font-semibold">Email:</p>
      <span class="text-lg">{user.profile.userEmail}</span>
    </div>
    <div class="flex justify-between py-2 px-4 rounded-xl bg-white">
      <p class="text-lg font-semibold">Roli:</p>
      <span class="text-lg">
        {#if user.role == 'passenger'}
          Yo'lovchi
        {:else if user.role == 'admin'}
          Admin
        {:else}
          Haydovchi
        {/if}
      </span>
    </div>
  </div>
  <div class="flex flex-col gap-3">
    <p class="text-xl font-bold border-l-4 border-indigo-500 pl-2">Avtomobil</p>
    <div class="flex justify-between py-2 px-4 rounded-xl bg-white">
    <p class="text-lg font-semibold">Raqami:</p>
    <span class="text-lg">{user.car.carNumber}</span>
    </div>
    <div class="flex justify-between py-2 px-4 rounded-xl bg-white">
    <p class="text-lg font-semibold">Rusumi:</p>
    <span class="text-lg">{user.car.carType}</span>
    </div>
  </div>
  <button class="text-zinc-100 text-xl font-semibold bg-indigo-500 py-2 rounded-lg"><i class="bi bi-pencil"></i> Tahrirlash</button>
</div>


