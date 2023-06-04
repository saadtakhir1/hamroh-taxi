<script lang="ts">
    import CarEdit from '../modals/EditCar.svelte'

    export let showme: boolean
    let showEdit: boolean = false

    type Car = {
        id: number
        car_model: string
        car_number: string
        user: number
    }

    let car: Car

    function getCarInfo() {
        car = JSON.parse(localStorage.getItem('car'))
    }

    getCarInfo()

</script>

<div class={"flex-col gap-3 p-5 " + (showme ? "flex" : "hidden")}>
    <div class="flex flex-col px-4 gap-3">
        <div class="flex justify-between">
        <p class="text-lg font-bold border-l-4 px-2">Avtomobil</p>
        </div>
        <div class="flex justify-between border-b-2">
        <p class="text-md font-semibold">Davlat raqami:</p>
        <span class="text-md">{car.car_number}</span>
        </div>
        <div class="flex justify-between border-b-2">
        <p class="text-md font-semibold">Rusumi:</p>
        <span class="text-md">{car.car_model}</span>
        </div>
    </div>
    <button on:click={() => { showEdit = true}} class="bg-gradient-to-b from-indigo-500 from-1%  to-indigo-900 to-100% text-white text-xs md:text-sm font-semibold rounded-xl py-3 px-5"><i class="bi bi-pencil"></i> Avtomobilni tahrirlash</button>
</div>
<CarEdit show={showEdit} close={() => { showEdit = false}} car_model={car.car_model} car_number={car.car_number} id={car.id}></CarEdit>