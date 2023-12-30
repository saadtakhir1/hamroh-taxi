<script lang="ts">

  export let showme: boolean

  let user = JSON.parse(localStorage.getItem('user'))

</script>

<div class={"flex-col gap-3 p-5 " + (showme ? "flex" : "hidden")}>
  <div class="flex px-5 flex-col gap-3">
    <div class="flex justify-between">
      <p class="text-lg font-bold border-l-4 px-2">Malumotlar</p>
    </div>
    <div class="flex justify-between border-b-2">
      <p class="text-md font-semibold">Ism:</p>
      <span class="">{user.profile.userName}</span>
    </div>
    <div class="flex justify-between border-b-2">
      <p class="text-md font-semibold">Telefon raqam:</p>
      <span class="">{user.profile.userPhone}</span>
    </div>
    <div class="flex justify-between border-b-2">
      <p class="text-md font-semibold">Roli:</p>
      <span class="">
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
</div>
