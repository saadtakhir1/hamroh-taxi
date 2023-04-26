<script lang="ts">
  import { navigate } from 'svelte-navigator'

  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
  import Elon from '../components/Elon.svelte'
  import NotFound from './NotFound.svelte';


</script>

<section class="body-home">

  <Navbar></Navbar>

  <section class="feature px-8 h-screen">

    <div class="flex flex-col md:flex-row mt-12 items-center gap-5">

      <div class="sm:w-1/2">
        <img class="img" src="./images/3682361.jpg" width="600px" alt="">
      </div>

      <div class="flex flex-col items-center gap-5 sm:w-1/2">
        <h1 class="font-bold text-4xl lg:text-5xl outline-0">Hamroh Taxi</h1>
        <p class="fs-6 my-sm-3 lg:text-xl text-center w">Biz bilan tez va qulay hamroh toping !</p>
        <button on:click={() => { navigate('/passengers')}} class="btn bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-md md:textlg px-5 py-2 rounded-2xl shadow-sm font-bold"><i class="bi bi-search mr-2"></i> Hamroh
          izlash</button>
      </div>
    </div>

  </section>

  <section class="elonlar md:h-3/4  flex flex-col items-center gap-5 px-3 sm:px-8 my-8">
    <h2 class="text-3xl lg:text-4xl font-semibold m-0">Elonlar</h2>
    <div class="text-sm md:text-base grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly w-full gap-4">

      <Elon author_name={"Doni"} from_loc={"xorazm"} to_loc={"tashkent"} go_time={"20-apr 10:00"} count={3} addition={"Yangiyo'l mahallasidan"}></Elon>
      <Elon author_name={"Doni"} from_loc={"xorazm"} to_loc={"tashkent"} go_time={"20-apr 10:00"} count={3} addition={"Yangiyo'l mahallasidan"}></Elon>
      <Elon author_name={"Doni"} from_loc={"xorazm"} to_loc={"tashkent"} go_time={"20-apr 10:00"} count={3} addition={"Yangiyo'l mahallasidan"}></Elon>

    </div>
    <button on:click={() => { navigate('/elonlar')}} class="bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white font-semibold py-2 px-5 rounded-2xl">Ko'proq
      e'lonlar</button>
  </section>

  <section class="about md:h-screen flex flex-col  justify-center items-center px-3  sm:px-8">
    <div class="flex flex-col sm:flex-row justify-center items-center px-8 pb-5 xl:w-4/5 rounded-2xl bg-slate-200 shadow-lg">
      <div class="about-info flex flex-col justify-center items-center gap-4 sm:w-1/2">
        <p class="text-3xl lg:text-4xl font-semibold">Biz haqimizda</p>
        <p class="text-center md:w-3/4 lg:text-lg">Bizning maqsadimiz sizga qulaylik yaratib berish. Biz bilan tez qulay hamroh toping.</p>
        <button on:click={() => { navigate('/about')}} class="bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-lg text-white font-semibold py-2 px-6 rounded-2xl">Batafsil bilish</button>
        <div class="flex gap-3 p-3">
          <a href="https://instagram.com/hamroh_taxi" target="_blank" rel="noreferrer" class=""><i class="bi bi-instagram text-purple-600 text-2xl"></i></a>
          <a href="https://t.me/hamroh_taxi" target="_blank" rel="noreferrer" class=""><i class="bi bi-telegram text-sky-600 text-2xl"></i></a>
          <a href="https://youtube.com/@hamroh_taxi" target="_blank" rel="noreferrer" class=""><i class="bi bi-youtube text-red-600 text-2xl"></i></a>
        </div>
      </div>
      <div class="sm:w-1/2">
        <img src="./images/about-img.png" alt="" class="">
      </div>
    </div>
  </section>

  <section class="contact flex items-center justify-center px-3 md:pb-8 sm:px-8">
    <div class="flex flex-col md:flex-row justify-around items-center p-5 xl:w-4/5 sm:gap-5 rounded-2xl bg-slate-200 shadow-lg my-5">
      <div class="">
        <img src="./images/12982910_5124556-removebg-preview.png" alt="" width="500px">
      </div>
      <div class="inline-flex flex-col gap-4 p-5 rounded">
        <p class="text-2xl font-semibold text-center">Biz bilan bog'lanish</p>
          <p class="text-center">Murojat va takliflar uchun biz bilan bog'laning</p>
          <a href="tel:+998335789204" class="text-white bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% font-bold text-lg text-center rounded-2xl shadow-lg py-2 px-3 lg:py-3"><i class="bi bi-phone"></i> Phone</a>
          <a href="mailto:info@hamrohtaxi.uz" class="text-white bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% font-bold text-lg text-center rounded-2xl shadow-lg py-2 px-3 lg:py-3"><i class="bi bi-envelope"></i> Email</a>
      </div>
    </div>
  </section>

  <Footer></Footer>

</section>