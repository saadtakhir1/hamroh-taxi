<script lang="ts">
    import { navigate } from "svelte-navigator"
    import { editCar } from "../api/car.api"
    export let show: boolean
    export let close: () => void
    export let car_model: string
    export let car_number: string
    export let id: number

    const access = localStorage.getItem('access')

    async function edit_car() {
        try{
            const res = await editCar(access, car_model, car_number, id)
            const edited_car = res.data
            localStorage.setItem('car', JSON.stringify(edited_car))
            close()
            location.reload()
        } catch(err: any) {
            console.log(err)
        }
    }

    function upperCaseCarNum(){
        let currentValue = car_number;
        if(currentValue.length > 8){
            currentValue = currentValue.slice(0, 8);
        }     
        car_number = currentValue.toUpperCase();  
    }
    
</script>

<div class={"h-screen w-screen bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center items-center " + (show ? "flex" : "hidden")}>
    <div class="bg-white p-8 flex flex-col gap-3 w-[fit-content] h-[fit-content] rounded-md shadow-md overflow-y-auto">

        <p class="text-xl text-center font-bold">Avtomobilni tahrirlash</p>

        <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Davlat raqami*:</label>
                <input bind:value={car_number} on:input={upperCaseCarNum} class="outline-0 border-2 px-3 py-1 rounded" type="text">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Rusumi*:</label>
                <input bind:value={car_model} class="outline-0 border-2 px-3 py-1 rounded" type="text">
            </div>
        </div>

        <div class="flex justify-between">
            <button on:click={() => close()} class="py-2 px-4 rounded-md text-white bg-red-600">Bekor qilish</button>
            <button on:click={edit_car} class="py-2 px-4 rounded-md text-white bg-green-600">Saqlash</button>
        </div>
    </div>
</div>