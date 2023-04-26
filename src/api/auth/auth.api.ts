import axios, { AxiosRequestConfig } from "axios"
import { navigate } from "svelte-navigator"

const accessToken = localStorage.getItem('access')

type bodyRegister = {
    name: string
    password: string
    phone_number: string
    user_role: number
    car_model: string | null
    car_number: string | null
}

const URL = "http://127.0.0.1:8000/api"

export async function authLogin(phone: string, password: string) {
    const data = { phone, password }
    try {
        const res = await axios.post(`${URL}/auth/login`, data)
        if(res.status == 200) {
            const payload = res.data.user
            const token = res.data.access
            const refresh = res.data.refresh
            localStorage.setItem('payload', JSON.stringify(payload))
            localStorage.setItem('token', token)
            localStorage.setItem('refresh', refresh)
            navigate('/')
        }else{
            console.log(res.data)
        }
    }catch(err: any) {
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
        const res = await axios.post(`${URL}/auth/signup/`, data)
        const access = res.data.access
        if(user_role == 1) {
            try{
                await axios.post(`${URL}/cars/`, { car_model, car_number }, { headers: {
                    'Authorization': `Bearer ${access}`
                }})
            }
            catch(err: any){
                console.log(err)
            }
        }
        try{
            const created_user = await axios.post(`${URL}/auth/login/`, { phone_number, password })
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
    catch(err: any){
        console.log(err)
        if(err.status == 403) {
            alert(`User already exsist with this ${phone_number} number`)
        }
    }
}

export async function getVerify(token: string) {
    const res = await axios.get(`${URL}/users/verify`, {
        headers: {
            'X-Auth-Key': token
        }
    })
    return res
}

