import axios from "axios"

const URL = 'http://localhost:4802/api'

export type LoginDto = {
    phone: string,
    password: string
}

export type RegisterDto = {
    name: string, 
    phone: string, 
    email: string,
    role: string,
    password: string,
    carNumber: string | null,
    carType: string | null
}

export async function authLogin(dto: LoginDto) {
    return await axios.post(URL + `/user/login`, dto)
}

export async function authRegister(dto: RegisterDto) {
    return await axios.post(URL + '/user/register', dto)
}

