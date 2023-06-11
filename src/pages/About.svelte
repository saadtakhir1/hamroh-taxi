<script>

  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'

</script>

<svelte:head>
	<title>Hamroh Taxi - Biz haqimizda</title>
</svelte:head>

<Navbar></Navbar>

<section class="flex flex-col items-center mt-[88px] px-4">
  <section class="about md:w-[80%]">
    <h1 class="text-2xl font-bold border-l-8 px-2 border-indigo-500 outline-0 mb-3">Biz haqimizda</h1>
    <div class="flex flex-col md:flex-row justify-center items-center py-4 px-5 md:px-20 bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% rounded-xl shadow-md">
      <div class="main-img">
        <img src="./images/about-img.png" alt="" class="img-fluid">
      </div>
      <div class="about-info flex flex-col items-center gap-3 text-white">
        <p class="text-center font-medium">Bizning maqsadimiz sizga qulaylik yaratib berish. Biz bilan tez qulay hamroh toping.</p>
        <div class="flex gap-3 p-3">
          <a href="https://instagram.com/hamroh_taxi" class=""><i class="bi bi-instagram text-3xl"></i></a>
          <a href="https://t.me/hamroh_taxi" class=""><i class="bi bi-telegram text-3xl"></i></a>
          <a href="https://youtube.com/@hamroh_taxi" class=""><i class="bi bi-youtube text-3xl"></i></a>
        </div>
      </div>
    </div>
  </section>

  <section class="our-team w-full md:w-[80%]">

    <div class="flex flex-col  gap-5 my-5">
      <h1 class="text-2xl border-l-8 px-2 border-yellow-400 outline-0 font-bold mt-3">Bizning jamoa</h1>
      <div class="team-members grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        <div class="flex flex-col items-center p-5 rounded-xl bg-gradient-to-b from-yellow-400 from-1% to-yellow-700 to-100% text-white shadow-md">
          <img src="./images/Web design.png" alt="">
          <p class="text-xl text-center font-semibold m-0">Frontend Developer</p>
          <p class="fs-5 m-0">Saad Takhir</p>
          <div class="flex gap-3 p-3">
            <a href="https://instagram.com/saad_takhir" target="_blank" class=""><i class="bi bi-instagram text-xl"></i></a>
            <a href="https://t.me/saad_takhir" target="_blank" class=""><i class="bi bi-telegram text-xl"></i></a>
            <a href="https://youtube.com/@saadtakhir" class=""><i class="bi bi-youtube text-xl"></i></a>
          </div>
        </div>
        <div class="flex flex-col items-center p-5 rounded-xl bg-gradient-to-b from-yellow-400 from-1% to-yellow-700 to-100% text-white shadow-md">
          <img src="./images/Cloud software.png" alt="">
          <p class="text-xl text-center font-semibold m-0">Backend Developer</p>
          <p class="fs-5 m-0">Doniyor Samandarov</p>
          <div class="flex gap-3 p-3">
            <a href="https://instagram.com/c_don1yor" target="_blank" class=""><i class="bi bi-instagram text-xl"></i></a>
            <a href="https://t.me/c_don1yor" target="_blank" class=""><i class="bi bi-telegram text-xl"></i></a>
            <a href="/" target="_blank" class=""><i class="bi bi-youtube text-xl"></i></a>
          </div>
        </div>
        <div class="flex flex-col items-center p-5 rounded-xl bg-gradient-to-b from-yellow-400 from-1% to-yellow-700 to-100% text-white shadow-md">
          <img src="./images/Security guard with shield protecting phone and password.png" alt="">
          <p class="text-xl text-center font-semibold m-0">Android Developer</p>
          <p class="fs-5 m-0">Shaxriyor Xusinov</p>
          <div class="flex gap-3 p-3">
            <a href="https://instagram.com/shakhriyor_xusinov" target="_blank" class=""><i class="bi bi-instagram text-xl"></i></a>
            <a href="https://t.me/Xusinov" target="_blank" class=""><i class="bi bi-telegram text-xl"></i></a>
            <a href="https://youtube.com/@codingwithshahriyor" target="_blank" class=""><i class="bi bi-youtube text-xl"></i></a>
          </div>
        </div>
      </div>
    </div>

</section>
</section>


<Footer></Footer>