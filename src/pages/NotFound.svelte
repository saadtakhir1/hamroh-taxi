<script>

    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
    import { navigate } from 'svelte-navigator'
  
</script>
  
  
<section>

    <Navbar></Navbar>
  
    <div class="mt-[100px] flex justify-center items-center gap-5">
        <div class="flex gap-5 items-center">
            <img class="w-[350px] sm:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[650px]" src="./images/not_found.jpg" alt="404">
            <div class="flex flex-col gap-5">
                <p class="text-4xl font-semibold">404 Sahifa topilmadi</p>
                <button on:click={() => { navigate('/')}} class="btn bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-md md:textlg px-5 py-2 rounded-2xl shadow-sm font-bold">Asosiy sahifaga qaytish</button>
            </div>
        </div>
    </div>
  
    <Footer></Footer>

</section>