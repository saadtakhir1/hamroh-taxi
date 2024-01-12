import { Writable, writable } from "svelte/store"

export type Post = {
    id: number,
    profile: {
        id: number,
        userId: number,
        userName: string,
        userPhone: string,
        userEmail: string,
        userRole: string,
        userCarNumber: string | null,
        userCarType: string | null
    },
    fromLocation: string,
    toLocation: string,
    goTime: string,
    count: number,
    addition: string,
    status: number,
    createdAt: string,
    updatedAt: string
}

export type User = { 
    id: number,
    role: string,
    profile: { 
        id: number,
        userId: number,
        userName: string,
        userRole: string,
        userPhone: string,
        userEmail: string,
        userCarNumber:null,
        userCarType:null,
        createdAt: string,
        updatedAt: string
    },
    car:{
        id: number,
        userId: number,
        carNumber: string,
        carType: string,
        createdAt: string,
        updatedAt: string
    }
    }

export const passPostsStore: Writable<Post[]> = writable([])
export const drivPostsStore: Writable<Post[]> = writable([])
export const userPostsStore: Writable<Post[]> = writable([])

export type Country = { id: number, name: string, region_count: number }
export type Region = { id: number, country_id: number, name: string, district_count: number }
export type District = { id: number, country_id: number, region_id: number, name: string }

export const countryStore: Writable<Country[]> = writable()
export const regionStore: Writable<Region[]> = writable()
export const districtStore: Writable<District[]> = writable()