import axios from "axios"
import { navigate } from "svelte-navigator"

const URL = 'http://185.105.91.162/api/'

export async function authLogin(phone_number: string, password: string) {
    const data = { phone_number, password }
    try {
            const res = await axios.post(URL + `auth/login/`, data)
            const payload = res.data.user
            const access = res.data.access
            const refresh = res.data.refresh
            localStorage.setItem('payload', JSON.stringify(payload))
            localStorage.setItem('access', access)
            localStorage.setItem('refresh', refresh)
            navigate('/')
        }
    catch(err: any) {
        console.log(err)
        if(err.status == 404) {
            alert('Foydalanuvchi mavjud emas')
        }else if(err.status == 401){
            alert('Phone or password wrong')
        }
    }
}


export async function authRegister(name: string, phone_number: string, password: string, user_role: number, car_number: string | null, car_model: string | null) {
    const data = { name, phone_number, user_role, password }
    try {
        const res = await axios.post(`${URL}auth/signup/`, data)
        if(user_role == 1) {
            try{
                await axios.post(`${URL}cars/`, { car_model, car_number }, { headers: {
                    'Authorization': `Bearer ${res.data.access}`
                }})
                const created_user = await axios.post(`${URL}auth/login/`, { phone_number, password })
                const created_car = await axios.get(`${URL}cars/`, { headers: {
                    'Authorization': `Bearer ${created_user.data.access}`
                }})
                const access = created_user.data.access
                const refresh = created_user.data.refresh
                const payload = created_user.data.user
                const car = created_car.data
                localStorage.setItem('payload', JSON.stringify(payload))
                localStorage.setItem('access', access) 
                localStorage.setItem('refresh', refresh) 
                localStorage.setItem('car', JSON.stringify(car)) 
                navigate('/')
            }
            catch(err: any){
                console.log(err)
            }
        }else{
            try{
                const created_user = await axios.post(`${URL}auth/login/`, { phone_number, password })
                const access = created_user.data.access
                const refresh = created_user.data.refresh
                const payload = created_user.data.user
                localStorage.setItem('payload', JSON.stringify(payload))
                localStorage.setItem('access', access) 
                localStorage.setItem('refresh', refresh)  
                navigate('/')         
            }
            catch(err: any) {
                console.log(err)
            }
        }
    }
    catch(err: any){
        console.log(err)
        if(err.status == 403) {
            alert(`User already exsist with this ${phone_number} number`)
        }
    }
}

