import { Writable, writable } from "svelte/store"

export type District = {
  id:        number
  region_id: number
  district_uz:   string
}

export type Region = {
  id: number
  region_uz: string
}

export const regionsStore: Writable<Region[]> = writable([])
export const districtsStore: Writable<District[]> = writable([])