<script lang="ts"> 
  import { navigate } from 'svelte-navigator'

</script>

<footer>
    <div class="flex flex-col">
      <div class="footer-links bg-indigo-950 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-start p-5">
        <div class="footer-soc-list flex flex-col justify-start gap-3 py-4">
          <p class="text-lg text-white font-semibold m-0">Ijtimoiy tarmoqlar</p>
          <div class="flex flex-col">
            <a href="https://instagram.com/hamroh_taxi" target="_blank" rel="noreferrer" class="text-sm lg:text-md font-medium text-white p-1"><i
                class="bi bi-instagram mr-2"></i>Instagram</a>
            <a href="https://t.me/hamroh_taxi" target="_blank" rel="noreferrer"  class="text-sm lg:text-md font-medium text-white p-1"><i
                class="bi bi-telegram mr-2"></i>Telegram</a>
            <a href="https://youtube.com/@hamroh_taxi" target="_blank" rel="noreferrer"  class="text-sm lg:text-md font-medium text-white p-1"><i
                class="bi bi-youtube mr-2"></i>You Tube</a>
          </div>
        </div>
        <div class="footer-contact  flex flex-col justify-start gap-3 py-4">
          <p class="text-lg text-white font-semibold m-0">Biz bilan bog'lanish</p>
          <div class="container flex flex-col align-items-start px-0">
            <a href="tel:+998905789204" class="text-sm font-medium text-white p-1"><i
                class="bi bi-phone mr-2"></i>+998999999999</a>
            <a href="mailto:hamrohtaxi@gmail.com" class="text-sm font-medium text-white p-1"><i
                class="bi bi-envelope mr-2"></i>hamrohtaxi@gmail.com</a>
            <a href="https://maps.google.com" class="text-sm font-medium text-white p-1"><i
                class="bi bi-map mr-2"></i>Xorazm, Urganch</a>
          </div>
        </div>
        <div class="sitemap  flex flex-col justify-start gap-3 py-4">
          <p class="text-lg text-white font-semibold m-0">Qo'shimcha menu</p>
          <div class="flex flex-col items-start px-0">
            <button on:click={() => { navigate('/')}} class="text-sm font-medium text-decoration-none text-white p-1">Bosh sahifa</button>
            <button on:click={() => { navigate('/profile')}} class="text-sm font-medium text-decoration-none text-white p-1">Profile</button>
            <button on:click={() => { navigate('/drivers')}}  class="text-sm font-medium text-decoration-none text-white p-1">Taxi izlash</button>
          </div>
        </div>
        <div class="flex flex-col gap-3 justify-start py-4">
          <p class="text-white font-semibold m-0">Ilovani yuklab oling</p>
          <div class="flex flex-col rounded bg-white p-2 w-[fit-content]">
            <a href="https://play.google.com/store/apps/details?id=com.khusinov.hamrohtaxi" target="_blank" rel="noreferrer" class=""><img src="./images/google-play.png" alt="" class="" width="120px"></a>
          </div>
        </div>
      </div>
      <div class="footer-copy bg-indigo-900 flex items-center justify-center text-white gap-3 py-3 py-sm-2 mx-0">
        <i class="bi bi-c-circle"></i>
        <p class="m-0 font-medium">2022 Hamroh Taxi</p>
      </div>
    </div>
  </footer>