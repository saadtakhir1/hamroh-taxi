<script lang="ts">
    import { navigate } from "svelte-navigator";
    import { authLogin } from "../api/auth.api"

    let phone: string
    let password: string

    async function login(phone: string, password: string) {
        authLogin('+998' + phone.toString(), password.toString())
    }

    const token = localStorage.getItem('token')
    let payload: any = JSON.parse(localStorage.getItem('payload'))

    // async function verify(){
    //     const res = await getVerify(token)
    //     if(res.status == 200) {
    //         payload = res.data.payload
    //         navigate('/profile')
    //     }else if(res.status == 401 || res.status == 403){
    //         navigate('/login')
    //     }
    // }


    // verify()

</script>

<svelte:head>
	<title>Hamroh Taxi - Tizimga kirish</title>
</svelte:head>

<section class="register-component">
    <div class="h-screen w-screen bg-indigo-900 flex justify-center items-center">
        <div class="flex flex-col gap-3 bg-white p-8 rounded-xl shadow-md w-4/3 md:w-1/3">
            <div class="flex items-center justify-center">
                <img src="./images/logo.png" alt="logo" width="32px">
                <p class="text-2xl font-bold">Hamroh Taxi</p>
            </div>
            <p class="text-3xl text-center font-semibold">Kirish</p>
            <div class="flex flex-col gap-3">
                <span class="flex flex-col gap-1">
                    <label for="raqam">Phone:</label>
                    <input bind:value={phone} class="outline-0 rounded-md border-2 py-1 px-3" type="text" name="raqam" id="" placeholder="905550055">
                </span>
                <span class="flex flex-col gap-1">
                    <label for="parol">Parol:</label>
                    <input bind:value={password} class="outline-0 rounded-md border-2 py-1 px-3" type="password" name="parol" id="" placeholder="****">
                </span>
                <span class="flex flex-col gap-2 justify-center">
                    <button on:click={() => { login(phone, password) }} class="py-2 px-4 text-lg rounded-md font-semibold text-white bg-indigo-900">Kirish</button>
                    <a class="py-2 px-4 rounded-md text-red-900 font-semibold text-center" href="/reset-password">Parolni tiklash</a>
                </span>
                <span class="flex flex-col md:flex-row gap-2">
                    <p class="text-center">Akkaunt mavjud bo'lmasa:</p>
                    <a href="/register" class="underline decoration-sky-900 text-sky-900 font-semibold text-center">Ro'yhatdan o'ting</a>
                </span>
            </div>
        </div>
    </div>
</section>