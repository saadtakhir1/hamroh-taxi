import { Writable, writable } from "svelte/store"

export interface District {
  id:        number
  region_id: number
  district_uz:   string
}

export const districtsStore: Writable<District[]> = writable([])