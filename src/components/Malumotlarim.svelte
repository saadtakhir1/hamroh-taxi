<script lang="ts">

  export let showme: boolean

  let payload = JSON.parse(localStorage.getItem('payload'))

</script>

<div class={"flex-col gap-3 p-5 " + (showme ? "flex" : "hidden")}>
  <div class="flex px-5 flex-col gap-3">
    <div class="flex justify-between">
      <p class="text-lg font-bold border-l-4 px-2">Malumotlar</p>
    </div>
    <div class="flex justify-between border-b-2">
      <p class="text-md font-semibold">Ism:</p>
      <span class="">{payload.name}</span>
    </div>
    <div class="flex justify-between border-b-2">
      <p class="text-md font-semibold">Telefon raqam:</p>
      <span class="">{payload.phone_number}</span>
    </div>
    <div class="flex justify-between border-b-2">
      <p class="text-md font-semibold">Roli:</p>
      <span class="">{#if payload.user_role == 0}
        Yo'lovchi
    {:else}
        Haydovchi
    {/if}</span>
    </div>
  </div>
  {#if payload.user_role == 1}
    <div class="flex flex-col px-4 gap-3">
      <div class="flex justify-between">
        <p class="text-lg font-bold border-l-4 px-2">Avtomobil</p>
      </div>
      <div class="flex justify-between border-b-2">
        <p class="text-md font-semibold">Davlat raqami:</p>
        <span class="text-md">90F097RA</span>
      </div>
      <div class="flex justify-between border-b-2">
        <p class="text-md font-semibold">Rusumi:</p>
        <span class="text-md">Lacetti</span>
      </div>
    </div>
  {/if}
  <div class="flex justify-center md:justify-end">
    <button class="btn inline bg-indigo-900 py-2 px-5 text-white font-semibold rounded">Malumotlarni tahrirlash</button>
  </div>
</div>
