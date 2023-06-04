import { Writable, writable } from "svelte/store"

type Car = {
    id: number
    car_model: string
    car_number: string
    user: number
}

export const carStore: Writable<Car[]> = writable([])