import axios from 'axios'

const URL = 'http://185.105.91.162/api/'

export async function editCar(access: string, car_model: string, car_number: string, id: number) {
    return await axios.put(URL + 'cars/' + id + '/', { car_model, car_number }, { headers: {
        'Authorization': `Bearer ${access}`
    }})
}

export async function getCar(access: string) {
    return await axios.get(URL + 'cars/', { headers: {
        'Authorization': `Bearer ${access}`
    }})
}