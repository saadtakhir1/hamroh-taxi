<script lang="ts">
    import { authRegister } from '../api/auth/auth.api'

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
    
    async function onRegister() {
        if(nameIsTrue === true && phoneIsTrue === true && passIsTrue === true) {
            if(carRegIsTrue) {
                await authRegister(name.value.toString(), "+998" + phone.value.toString(), password.value.toString(), +selectRole.value, car_number.value, car_model.value)
            }else{
                await authRegister(name.value.toString(), "+998" + phone.value.toString(), password.value.toString(), +selectRole.value, null, null)
            }
            
        }
    }
</script>

<section class="register-component">
    <div class="p-5 bg-indigo-900 flex justify-center items-center">
        <div class="flex flex-col gap-3 bg-white p-8 rounded-xl shadow-md w-4/3 md:w-[36%]">
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
                        <p class="outline-0 rounded-l-md border-2 py-1 px-3 bg-gray-200 w-[fit-content] font-semibold">+998</p>
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