<script>

    import Navbar from '../components/Navbar.svelte'
    import Footer from '../components/Footer.svelte'
    import { navigate } from 'svelte-navigator'
  
</script>
  
  
<section>

    <Navbar></Navbar>
  
    <div class="mt-[100px]">
        <img src="./images/not_found.jpg" alt="404">
        <p>404 Sahifa topilmadi</p>
        <button on:click={() => { navigate('/')}} class="btn bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-md md:textlg px-5 py-2 rounded-2xl shadow-sm font-bold">Asosiy sahifaga qaytish</button>
    </div>
  
    <Footer></Footer>

</section>