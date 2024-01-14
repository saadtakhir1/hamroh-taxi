<script lang="ts">
    import { UserEndpoint } from "../api";
    import type { User } from "../store";

    export let show: boolean
    export let close: () => void
    export let user: User
    
    const access = localStorage.getItem('access')
    const userEndpoint = new UserEndpoint()
    
    let name: HTMLInputElement;
    let phone: HTMLInputElement;
    let email: HTMLInputElement;
    let password: HTMLInputElement;
    let carNumber: HTMLInputElement;
    let carType: HTMLSelectElement;

    async function edit() {
        let id = user.id
        try{
            const res = await userEndpoint.put()
            const user: User = res.data.user
            localStorage.setItem('user', user)
            close()
        } catch(err: any) {
            console.log(err)
        }
    }
    
</script>

<div class={"h-screen w-screen bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-[999] justify-center items-center " + (show ? "flex" : "hidden")}>
    <div class="bg-white p-8 flex flex-col gap-3 w-screen h-full md:h-[fit-content] md:w-[fit-content] md:rounded-md shadow-md overflow-y-auto">

        <p class="text-xl text-center font-bold">Profilni tahrirlash</p>

        <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Ism Familiya*:</label>
                <input bind:this={name} bind:value={user.name} class="outline-0 border-2 px-3 py-1 rounded" type="datetime-local">
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-semibold" for="">Ketish vaqti*:</label>
                <input bind:this={goTime} bind:value={user.goTime} class="outline-0 border-2 px-3 py-1 rounded" type="datetime-local">
            </div>
            <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Hamrohlar soni*:</label>
                <input bind:this={count} bind:value={user.count} class="outline-0 border-2 px-3 py-1 rounded" type="number" name="" id="" min="1" max="6" placeholder="1">
            </div>
            <div class="flex flex-col gap-2">
                <label for="izoh" class="font-semibold">Qo'shimcha*:</label>
                <textarea bind:this={addition} bind:value={user.addition} class="outline-0 border-2 px-3 py-1 rounded" name="izoh" id="" placeholder="Botirlar mahallasidan"></textarea>
            </div>
        </div>

        <div class="flex justify-between">
            <button on:click={() => close()} class="py-2 px-4 rounded-md text-white bg-red-600">Yopish</button>
            <button on:click={edit} class="py-2 px-4 rounded-md text-white bg-green-600">Saqlash</button>
        </div>
    </div>
</div>