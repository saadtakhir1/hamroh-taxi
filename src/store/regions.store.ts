import { Writable, writable } from "svelte/store"

export interface Region {
  id:        number
  region_uz:   string
}

export const regionsStore: Writable<Region[]> = writable([])