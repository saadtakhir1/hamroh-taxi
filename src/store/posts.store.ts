import { Writable, writable } from "svelte/store"

export type Post = {
  id: number
  user: {
    id: number
    name: string
    phone_number: string
  },
  user_role: number
  from_location: string
  to_location: string
  go_time: string
  count: number
  price: string
  posted_time: string
  status: number
  addition: string
}

export const passPostsStore: Writable<Post[]> = writable([])
export const drivPostsStore: Writable<Post[]> = writable([])
export const userPostsStore: Writable<Post[]> = writable([])