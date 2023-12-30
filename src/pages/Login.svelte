<script lang="ts">
    import { navigate } from "svelte-navigator";
    import { LoginDto, authLogin } from "../api/auth.api"
    import Alert from "../modals/Alert.svelte"


    let show: boolean = false
    let text: string
    let color: string

    function closeAlert() {
        show = false
    }

    function addAlert(errText: string, alertColor: string, showAlert: boolean) {
        text = errText
        color = alertColor
        show = showAlert
        setTimeout(closeAlert, 10000)
    }

    let phone: string
    let password: string

    async function login() {
        try {
            const dto: LoginDto = {
                phone: '+998' + phone.toString(),
                password: password.toString()
            }
            const res = await authLogin(dto)
            const user = res.data.user
            const access = res.data.access
            const refresh = res.data.refresh
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('access', access)
            localStorage.setItem('refresh', refresh)
            navigate('/')
        } catch(err: any) {
            addAlert(err.response.data.errors[0].detail, 'red', true)
        }
    }

</script>

<svelte:head>
	<title>Hamroh Taxi - Tizimga kirish</title>
</svelte:head>

<Alert show={show} text={text} color={color} close={() => { show = false }}></Alert>

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
                    <button on:click={login} class="py-2 px-4 text-lg rounded-md font-semibold text-white bg-indigo-900">Kirish</button>
                    <!-- <a class="py-2 px-4 rounded-md text-red-900 font-semibold text-center" href="/reset-password">Parolni tiklash</a> -->
                </span>
                <span class="flex flex-col md:flex-row gap-2">
                    <p class="text-center">Akkaunt mavjud bo'lmasa:</p>
                    <a href="/register" class="underline decoration-sky-900 text-sky-900 font-semibold text-center">Ro'yhatdan o'ting</a>
                </span>
            </div>
        </div>
    </div>
</section>