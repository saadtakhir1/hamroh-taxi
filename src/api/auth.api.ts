import axios from "axios"

const URL = 'http://185.105.91.162/api/'

export type LoginDto = {
    phone_number: string,
    password: string
}

export type RegisterDto = {
    name: string, 
    phone_number: string, 
    user_role: number,
    password: string
}

export async function authLogin(dto: LoginDto) {
    return await axios.post(URL + `auth/login/`, dto)
}

export async function authRegister(dto: RegisterDto) {
    return await axios.post(URL + 'auth/signup/', dto)
}

