import axios from 'axios'
import { regionsStore } from '../store/regions.store'
import { districtsStore } from '../store/districts.store'

const access = localStorage.getItem('access')

export async function getRegions() {
    console.log(access)
    const response = await axios.get('http://127.0.0.1:8000/api/regions-list', { headers: {
        'Authorization': `Bearer ${access}`
    }})
    regionsStore.set(response.data)
}
export async function getDistricts() {
    const response = await axios.get('http://127.0.0.1:8000/api/districts-list', { headers: {
        'Authorization': `Bearer ${access}`
    }})
    districtsStore.set(response.data)
    console.log(response.data)
}