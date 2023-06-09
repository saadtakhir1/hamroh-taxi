<script lang="ts">

  import { navigate } from 'svelte-navigator'
  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'

</script>

<svelte:head>
	<title>Hamroh Taxi - Asosiy sahifa</title>
</svelte:head>

<section class="body-home">

  <Navbar></Navbar>

  <div class="flex flex-col md:flex-row items-center justify-center gap-5 h-screen mt-[40px] w-full">
    <div class="">
      <img class="img w-[250px] sm:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[550px]" src="./images/Smartphone.png" alt="" draggable="false">
    </div>
    <div class="flex flex-col items-center justify-start w-full gap-5 sm:w-1/2">
      <h1 class="font-bold text-center text-4xl sm:w-full lg:text-5xl outline-0">Hamroh Taxi</h1>
      <p class="lg:text-xl text-center w-3/4">Ilovani yuklab oling va post joylang. Biz bilan tez va qulay hamroh toping!</p>
      <a href="https://play.google.com/store/apps/details?id=com.khusinov.hamrohtaxi" target="_blank" rel="noreferrer" class="btn bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-md md:textlg px-5 py-2 rounded-2xl shadow-sm font-bold">Yuklab olish</a>
    </div>
  </div>
 
  <div class="flex flex-col md:flex-row items-center justify-center gap-5 mt-[64px] w-full">
    <div class="">
      <img class="img w-[250px] sm:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[550px]" src="./images/3682361.jpg" alt="" draggable="false">
    </div>
    <div class="flex flex-col items-center gap-5">
      <h1 class="font-bold text-4xl lg:text-5xl outline-0">Hamroh Izlash</h1>
      <p class="fs-6 my-sm-3 lg:text-xl text-center ">Biz bilan tez va qulay hamroh toping !</p>
      <button on:click={() => { navigate('/passengers')}} class="btn bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-md md:textlg px-5 py-2 rounded-2xl shadow-sm font-bold"><i class="bi bi-search mr-2"></i> Hamroh
        izlash</button>
    </div>
  </div>


  <div class="flex flex-col md:flex-row items-center justify-center gap-5 my-[64px] w-full">
    <div class="flex flex-col items-center gap-5 sm:w-1/2">
      <h1 class="font-bold text-4xl lg:text-5xl outline-0">Taxi Izlash</h1>
      <p class="fs-6 my-sm-3 lg:text-xl text-center ">Biz bilan tez va qulay taxi toping !</p>
      <button on:click={() => { navigate('/drivers')}} class="btn bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-md md:textlg px-5 py-2 rounded-2xl shadow-sm font-bold"><i class="bi bi-search mr-2"></i> Taxi
        izlash</button>
    </div>
    <div class="">
      <img class="img w-[250px] sm:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[550px]" src="./images/7119303_3411096.jpg" alt="">
    </div>
  </div>

  <section class="about md:h-screen flex flex-col  justify-center items-center px-3  sm:px-8">
    <div class="flex flex-col sm:flex-row justify-center items-center px-8 pt-8 pb-5 xl:w-4/5 rounded-2xl bg-slate-200 shadow-lg">
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
        <img src="./images/about-img.png" alt="" class="img w-[250px] sm:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[550px]">
      </div>
    </div>
  </section>

  <section class="contact flex items-center justify-center px-3 md:pb-8 sm:px-8">
    <div class="flex flex-col md:flex-row justify-around items-center p-5 xl:w-4/5 sm:gap-5 rounded-2xl bg-slate-200 shadow-lg my-5">
      <div class="">
        <img src="./images/12982910_5124556-removebg-preview.png" alt="" class='img w-[250px] sm:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[550p90'>
      </div>
      <div class="inline-flex flex-col gap-4 p-5 rounded">
        <p class="text-2xl font-semibold text-center">Biz bilan bog'lanish</p>
          <p class="text-center">Murojat va takliflar uchun biz bilan bog'laning</p>
          <a href="tel:+998905789204" class="text-white bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% font-bold text-lg text-center rounded-2xl shadow-lg py-2 px-3 lg:py-3"><i class="bi bi-phone"></i> Phone</a>
          <a href="mailto:hamrohtaxi@gmail.com" class="text-white bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% font-bold text-lg text-center rounded-2xl shadow-lg py-2 px-3 lg:py-3"><i class="bi bi-envelope"></i> Email</a>
      </div>
    </div>
  </section>

  <Footer></Footer>

</section>