import axios from 'axios'

const URL = 'http://localhost:4802/api'

export type LoginDto = {
    email: string,
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

export class UserEndpoint {
    async login(dto: LoginDto) {
        return await axios.post(`${URL}/user/login`, dto)
    }
    async verify(token: string) {
        return await axios.get(`${URL}/user/verify`, { headers: { 'Authorization': `Bearer ${token}` } })
    }
    async refresh(token: string) {
        return await axios.get(`${URL}/user/verify`, { headers: { 'Authorization': `Bearer ${token}` } })
    }
    async register(dto: RegisterDto) {
        return await axios.post(`${URL}/user/register`, dto)
    }
    async reset(token: string, oldPassword: string, newPassword: string) {
        return await axios.post(`${URL}/user/register`, { oldPassword, newPassword }, { headers: { 'Authorization': `Bearer ${token}` } })
    }
    async forget(email: string) {
        return await axios.post(`${URL}/user/register`, { email })
    }
    async getLocations() {
        return await axios.get(`${URL}/countries`)
    }

}

export class PostEndpoint {
    async get(current_page: number, per_page: number, role: string) {
        return await axios.get(`${URL}/post?current_page=${current_page}&per_page=${per_page}&role=${role}`)
    }
    async getByUser(current_page: number, status: number, per_page: number, token: string) {
        return await axios.get(`${URL}/post/profile?current_page=${current_page}&per_page=${per_page}&status=${status}`, { headers: { 'Authorization': `Bearer ${token}` }})
    }
    async getByDirection(current_page: number, per_page: number, role: string, fromLocation: string, toLocation: string) {
        return await axios.get(`${URL}/post/?current_page=${current_page}&per_page=${per_page}&role=${role}&fromLocation=${fromLocation}&toLocation=${toLocation}`)
    }
    async getByFromLocation(current_page: number, per_page: number, role: string, fromLocation: string) {
        return await axios.get(`${URL}/post/?current_page=${current_page}&per_page=${per_page}&role=${role}&fromLocation=${fromLocation}`)
    }
    async getByToLocation(current_page: number, per_page: number, role: string, toLocation: string) {
        return await axios.get(`${URL}/post/?current_page=${current_page}&per_page=${per_page}&role=${role}&toLocation=${toLocation}`)
    }
    async delete(id: number, token: string) {
        return await axios.patch(`${URL}/post/${id}`, { status: 0 }, { headers: { 'Authorization': `Bearer ${token}` } })
    }
    async post(fromLocation: string, toLocation: string, goTime: string, count: number, addition: string, token: string) {
        return await axios.post(`${URL}/post`, { fromLocation, toLocation, goTime, count, addition }, { headers: { 'Authorization': `Bearer ${token}` }})
    }
    async put(id: number, fromLocation: string, toLocation: string, goTime: string, count: number, addition: string, token: string) {
        return await axios.put(`${URL}/post/${id}`, { fromLocation, toLocation, goTime, count, addition }, { headers: { 'Authorization': `Bearer ${token}` } })
    }
    async patch(id: number, token: string) {
        return await axios.patch(`${URL}/post/${id}`, { status: 0 }, { headers: { 'Authorization': `Bearer ${token}` } })
    }
    async getLocations() {
        return await axios.get(`${URL}/countries`)
    }
}