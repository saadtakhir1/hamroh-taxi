import { Writable, writable } from "svelte/store"

export interface UserPosts {
  id: number
  author_id: number 
  from_loc: string
  to_loc: string
  go_time: string
  people: number
  addition: string
  posted_time: any
}

export const userPostsStore: Writable<UserPosts[]> = writable([])