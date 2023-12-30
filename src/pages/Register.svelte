<script lang="ts">
    import { navigate } from 'svelte-navigator';
    import { authRegister, authLogin, LoginDto, RegisterDto } from '../api/auth.api'
    import Alert from '../modals/Alert.svelte'

    document.body.classList.add('bg-indigo-500')

    // register uchun o'zgaruvchilar
    let name: HTMLInputElement
    let phone: HTMLInputElement
    let email: HTMLInputElement
    let password: HTMLInputElement
    let role: HTMLSelectElement
    let carNumber: HTMLInputElement
    let carType: HTMLSelectElement
    let errTextPass: string

    // tekshirish uchun o'zgaruvchilar
    let nameIsTrue: boolean
    let phoneIsTrue: boolean
    let passIsTrue: boolean
    let carRegIsTrue: boolean = false

    function checkName(name_value: string) {
        if(name_value.length < 3){
            nameIsTrue = false
            name.style.border = '1px red solid'
        }else{
            nameIsTrue = true
            name.style.border = '1px green solid'
        }
    }

    function checkPhone(phone_value: string) {
        if(phone_value.length === 0 || phone_value.length > 9 || phone_value.length < 9){
            phoneIsTrue = false
            phone.style.border = '1px red solid'
        }else{
            phoneIsTrue = true
            phone.style.border = '1px green solid'
        }
    }

    function checkPassword(){
        if(password.value.toString().length < 6){
            passIsTrue = false
            password.style.border = "1px solid red"
            errTextPass = "Parolda kamida 6 belgi bo'lishi kerak"
        }
        else if(password.value.toString().includes(' ')){
            passIsTrue = false
            password.style.border = "1px solid red"
            errTextPass = "Parolda bo'sh joy bo'lishi mumkin emas"
        }else{
            passIsTrue = true
            password.style.border = "1px solid green"
            errTextPass = ""
        }
    }    

    function showCarReg(){
        if(+role.value == 1){
            carRegIsTrue = true
        }else{
            carRegIsTrue = false
        }
    }

    function upperCaseCarNum(){
        let currentValue = carNumber.value;
        if(currentValue.length > 8){
            currentValue = currentValue.slice(0, 8);
        }     
        carNumber.value = currentValue.toUpperCase();  
    }

    let showAlert: boolean = false
    let text: string
    let color: string

    function closeAlert() { showAlert = false }

    function addAlert(errText: string, alertColor: string, show: boolean) {
        text = errText
        color = alertColor
        showAlert = show
        setTimeout(closeAlert, 10000)
    }

    const carTypes = ['Damas','Largus','Tico','Matiz','Nexia_1','Nexia_2','Nexia_3','Lacetti','Captiva','Epica','Tacuma','Spark','Cobalt','Orlondo','Gentra','Boshqa']
    
    async function register() {
        if(nameIsTrue === true && phoneIsTrue === true && passIsTrue === true) {
            let user_data: RegisterDto = {
                name: name.value.toString(),
                phone: "+998" + phone.value.toString(),
                password: password.value.toString(),
                role: +role.value == 1 ? 'driver' : 'passenger',
                email: email.value.toString(),
                carNumber: carRegIsTrue ? carNumber.value : null,
                carType: carRegIsTrue ? carType.value : null
            }
            try {
                const res = await authRegister(user_data)
                const access = res.data.access
                const refresh = res.data.refresh
                const user = res.data.user
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('access', access) 
                localStorage.setItem('refresh', refresh)
                document.body.classList.remove('bg-indigo-500')
                navigate('/')
            } catch(err: any){
                addAlert(err.response.data.message, 'red', true)
            }
        }
                
    }
    let btn_passenger: HTMLButtonElement

</script>

<svelte:head>
	<title>Hamroh Taxi - Ro'yhatdan o'tish</title>
</svelte:head>

<Alert show={showAlert} color={color} text={text} close={() => { showAlert = false } }></Alert>

<section class="register-component">
    <div class="p-5 h-full flex justify-center items-center">
        <div class="flex flex-col gap-3 bg-white p-8 rounded-xl shadow-md w-[fit-content]">
            <div class="flex items-center justify-center">
                <img src="./images/logo.png" alt="logo" width="32px">
                <p class="text-2xl font-bold">Hamroh Taxi</p>
            </div>
            <p class="text-3xl text-center font-semibold">Ro'yhatdan o'tish</p>
            <div class="flex flex-col gap-3">
                <p class="font-semibold pl-3 border-l-4 border-indigo-900">Foydalanuvchi malumotlari:</p>
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="ism">Name:</label>
                    <input on:change={() => { checkName(name.value)}} bind:this={name} class="outline-0 rounded-md border-2 py-1 px-3" type="text" name="ism" id="ism" placeholder="John Doe">
                </span>
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="raqam">Phone:</label>
                    <span class="flex flex-row w-full">
                        <input on:change={() => { checkPhone(phone.value)}} bind:this={phone} class="outline-0 rounded-md border-2 py-1 px-3 grow" type="phone" name="raqam" id="raqam" placeholder="905550055">
                    </span>
                </span>
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="email">Email:</label>
                    <input on:change={() => {}} bind:this={email} class="outline-0 rounded-md border-2 py-1 px-3" type="email" name="email" id="email" placeholder="example@gmail.com">
                </span>
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="parol">Parol:</label>
                    <input on:change={checkPassword} bind:this={password} class="outline-0 rounded-md border-2 py-1 px-3" type="password" name="parol" id="parol" placeholder="****">
                </span>
                {#if errTextPass}
                    <p class="font-semibold text-red-500">{errTextPass}</p>
                {/if}
                <span class="flex flex-col gap-1">
                    <span class="flex gap-3 items-center">
                        <p>Kimsiz</p>
                        <button bind:this={btn_passenger} on:click={() => { btn_passenger.classList.add('bg-slate-300') }} class="border-2 py-2 px-3 rounded-xl">Yo'lovchi</button>
                        <button bind:this={btn_passenger} on:click={() => { btn_passenger.classList.add('bg-slate-300') }} class="border-2 py-2 px-3 rounded-xl">Haydovchi</button>
                    </span>
                    <select bind:this={role} on:change={showCarReg} class="outline-0 rounded-md border-2 py-1 px-3" name="role" id="role">
                        <option class="outline-0 rounded-md border-2 py-1 px-3" value="0">Yo'lovchi</option>
                        <option class="outline-0 rounded-md border-2 py-1 px-3" value="1">Haydovchi</option>
                    </select>
                </span>
                {#if carRegIsTrue}
                    <p class="font-semibold pl-3 border-l-4 border-indigo-900">Avtomobil malumotlari:</p>
                    <div class="flex flex-col sm:flex-row gap-2">
                        <span class="flex flex-col gap-1">
                            <label class="font-semibold" for="">Davlat raqami:</label>
                            <input  on:input={upperCaseCarNum} bind:this={carNumber} class="outline-0 rounded-md border-2 py-1 px-3" type="text" name="" id="" placeholder="90A090AA">
                        </span>
                        <span class="flex flex-col gap-1">
                            <label class="font-semibold" for="carType">Rusumi:</label>
                            <select class="outline-0 rounded-md border-2 py-1 px-3" bind:this={carType} name="carType" id="">
                                {#each carTypes as type}
                                    <option value="{type}">{type}</option>
                                {/each}
                            </select>
                        </span>
                    </div>
                {/if}
                <span class="flex flex-col justify-center gap-2">
                    <button on:click={register} class="py-2 px-4 text-lg rounded-md text-white bg-indigo-900">Ro'yhatdan o'tish</button>
                </span>
                <span class="flex flex-col md:flex-row gap-2 justify-center">
                    <p class="text-center">Akkaunt mavjud bo'lsa:</p>
                    <button on:click={() => { navigate('/login') }} class="underline decoration-sky-900 text-sky-900 font-semibold text-center">Kirish</button>
                </span>
            </div>
        </div>
    </div>
</section>
