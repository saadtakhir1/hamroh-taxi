import axios from 'axios'

const URL = 'http://185.105.91.162/api/'

export async function getRegions() {
    return await axios.get(URL + 'regions-list/')
}
export async function getDistricts() {
    return await axios.get(URL + 'districts-list/')
}