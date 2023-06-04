<script lang="ts">
    import { navigate } from 'svelte-navigator';
    import { authRegister, authLogin, LoginDto, RegisterDto } from '../api/auth.api'
    import { CarDto, createCar } from '../api/car.api'
    import Alert from '../modals/Alert.svelte'

    // register uchun o'zgaruvchilar
    let name: HTMLInputElement
    let phone: HTMLInputElement
    let password: HTMLInputElement
    let selectRole: HTMLSelectElement
    let car_number: HTMLInputElement
    let car_model: HTMLInputElement
    let errTextPass: string

    // tekshirish uchun o'zgaruvchilar
    let nameIsTrue: boolean
    let phoneIsTrue: boolean
    let passIsTrue: boolean
    let carRegIsTrue: boolean = false

    function checkName(name_value: string) {
        if(name_value.length === 0){
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
            name.style.border = '1px red solid'
        }else{
            phoneIsTrue = true
            name.style.border = '1px green solid'
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
            password.style.border = "1px solid red"
            errTextPass = "Parolda bo'sh joy bo'lishi mumkin emas"
        }else{
            passIsTrue = true
            password.style.border = "1px solid green"
            errTextPass = ""
        }
    }    

    function showCarReg(){
        if(+selectRole.value == 1){
            carRegIsTrue = true
        }else{
            carRegIsTrue = false
        }
    }

    function upperCaseCarNum(){
        let currentValue = car_number.value;
        if(currentValue.length > 8){
            currentValue = currentValue.slice(0, 8);
        }     
        car_number.value = currentValue.toUpperCase();  
    }

    let showAlert: boolean = false
    let text: string
    let color: string

    function closeAlert() {
        showAlert = false
    }

    function addAlert(errText: string, alertColor: string, show: boolean) {
        text = errText
        color = alertColor
        showAlert = show
    }

    if(showAlert) {
        setTimeout(closeAlert, 7000)
    }
    
    async function onRegister() {
        if(nameIsTrue === true && phoneIsTrue === true && passIsTrue === true) {
            const user_data: RegisterDto = { 
                name: name.value.toString(), 
                phone_number: "+998" + phone.value.toString(), 
                password: password.value.toString(), 
                user_role: +selectRole.value 
            }
            if(carRegIsTrue) {
                const car_data: CarDto = { 
                    car_model: car_model.value.toString(), 
                    car_number: car_number.value.toString() 
                }
                const login_data: LoginDto = {
                    phone_number: user_data.phone_number,
                    password: user_data.password
                }

                try {
                    const res = await authRegister(user_data)
                    const created_car  = await createCar(res.data.access, car_data) 
                    const created_user = await authLogin(login_data)
                    const access = created_user.data.access
                    const refresh = created_user.data.refresh
                    const payload = created_user.data.user
                    const car = created_car.data
                    localStorage.setItem('payload', JSON.stringify(payload))
                    localStorage.setItem('access', access) 
                    localStorage.setItem('refresh', refresh) 
                    localStorage.setItem('car', JSON.stringify(car)) 
                    navigate('/')
                } catch(err: any){
                    addAlert(err.response.data.error, 'red', true)
                    console.log(err)
                }
            }
            else{
                try{
                    await authRegister(user_data)
                    const login_data: LoginDto = {
                        phone_number: user_data.phone_number,
                        password: user_data.password
                    }
                    const created_user = await authLogin(login_data)

                    const access = created_user.data.access
                    const refresh = created_user.data.refresh
                    const payload = created_user.data.user
                    localStorage.setItem('payload', JSON.stringify(payload))
                    localStorage.setItem('access', access) 
                    localStorage.setItem('refresh', refresh)  
                    navigate('/')         
                }catch(err: any) {
                    addAlert(err.response.data.error, 'red', true)
                    console.log(err)
                }
            }
                
            }else{
                console.log('hello')
            }
    }

</script>

<svelte:head>
	<title>Hamroh Taxi - Ro'yhatdan o'tish</title>
</svelte:head>

<Alert show={showAlert} color={color} text={text} close={() => { showAlert = false } }></Alert>

<section class="register-component">
    <div class="p-5 bg-indigo-900 h-full flex justify-center items-center">
        <div class="flex flex-col gap-3 bg-white p-8 rounded-xl shadow-md w-[fit-content]">
            <div class="flex items-center justify-center">
                <img src="./images/logo.png" alt="logo" width="32px">
                <p class="text-2xl font-bold">Hamroh Taxi</p>
            </div>
            <p class="text-3xl text-center font-semibold">Ro'yhatdan o'tish</p>
            <div class="flex flex-col gap-3">
                <p class="font-semibold pl-3 border-l-4 border-indigo-900">Foydalanuvchi malumotlari:</p>
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="name">Name:</label>
                    <input on:change={() => { checkName(name.value)}} bind:this={name} class="outline-0 rounded-md border-2 py-1 px-3" type="text" name="name" id="" placeholder="John Doe">
                </span>
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="raqam">Phone:</label>
                    <span class="flex flex-row w-full">
                        <input on:change={() => { checkPhone(phone.value)}} bind:this={phone} class="outline-0 rounded-r-md border-2 py-1 px-3 grow" type="phone" name="raqam" id="" placeholder="905550055">
                    </span>
                </span>
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="parol">Parol:</label>
                    <input on:change={checkPassword} bind:this={password} class="outline-0 rounded-md border-2 py-1 px-3" type="password" name="parol" id="" placeholder="****">
                </span>
                {#if errTextPass}
                    <p class="font-semibold text-red-500">{errTextPass}</p>
                {/if}
                <span class="flex flex-col gap-1">
                    <label class="font-semibold" for="parol">Kimsiz:</label>
                    <select bind:this={selectRole} on:change={showCarReg} class="outline-0 rounded-md border-2 py-1 px-3" name="" id="">
                        <option class="outline-0 rounded-md border-2 py-1 px-3" value="0">Yo'lovchi</option>
                        <option class="outline-0 rounded-md border-2 py-1 px-3" value="1">Haydovchi</option>
                    </select>
                </span>
                {#if carRegIsTrue}
                    <p class="font-semibold pl-3 border-l-4 border-indigo-900">Avtomobil malumotlari:</p>
                    <div class="flex flex-col sm:flex-row gap-2">
                        <span class="flex flex-col gap-1">
                            <label class="font-semibold" for="">Davlat raqami:</label>
                            <input  on:input={upperCaseCarNum} bind:this={car_number} class="outline-0 rounded-md border-2 py-1 px-3" type="text" name="" id="" placeholder="90A090AA">
                        </span>
                        <span class="flex flex-col gap-1">
                            <label class="font-semibold" for="carType">Rusumi:</label>
                            <input bind:this={car_model} class="outline-0 rounded-md border-2 py-1 px-3" type="text" name="carType" id="" placeholder="Matiz">
                        </span>
                    </div>
                {/if}
                <span class="flex flex-col justify-center gap-2">
                    <button on:click={onRegister} class="py-2 px-4 text-lg rounded-md text-white bg-indigo-900">Ro'yhatdan o'tish</button>
                </span>
                <span class="flex flex-col md:flex-row gap-2 justify-center">
                    <p class="text-center">Akkaunt mavjud bo'lsa:</p>
                    <a href="/login" class="underline decoration-sky-900 text-sky-900 font-semibold text-center">Kirish</a>
                </span>
            </div>
        </div>
    </div>
</section>