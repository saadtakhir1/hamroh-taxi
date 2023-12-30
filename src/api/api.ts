import axios from 'axios'

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

export class UserEndpoint {
    async login(dto: LoginDto) {
        return await axios.post(`${URL}/user/login`, dto)
    }
    async verify(token: string) {
        return await axios.get(`${URL}/user/verify`, { headers: { 'Authorization': `Bearer ${token}` } })
    }
    async refresh(refresh: string) {
        return await axios.get(`${URL}/user/verify`, { headers: { 'Authorization': `Bearer ${refresh}` } })
    }
    async register(dto: RegisterDto) {
        return await axios.post(`${URL}/user/register`, dto)
    }
}

export class PostEndpoint {
    async get(current_page: number, per_page: number) {
        return await axios.get(`${URL}/post?current_page=${current_page}&per_page=${per_page}`)
    }
    async getPostsByFilter(from_location: string, to_location: string, go_time: string, count: number) {
        // with all params
        if (from_location !== undefined && to_location !== undefined && go_time !== undefined && count !== undefined) {
            return await axios.get(`${URL}posts-list/?from_location=${from_location}&to_location=${to_location}&go_time=${go_time}&count=${count}`)
        }
        // without go_time
        if (from_location !== undefined && to_location !== undefined && count !== undefined) {
            return await axios.get(URL + `posts-list/?from_location=${from_location}&to_location=${to_location}&count=${count}`)
        }
        // without count
        if (from_location !== undefined && to_location !== undefined && go_time !== undefined) {
            return await axios.get(URL + `posts-list/?from_location=${from_location}&to_location=${to_location}&go_time=${go_time}`)
        }
        //without count and go_time
        if (from_location !== undefined && to_location !== undefined) {
            return await axios.get(URL + `posts-list/?from_location=${from_location}&to_location=${to_location}`)
        }
        if (from_location !== undefined) {
            return await axios.get(URL + `posts-list/?from_location=${from_location}`)
        }
        if (to_location !== undefined) {
            return await axios.get(URL + `posts-list/?to_location=${to_location}`)
        }
    }
    async getUserPosts(access: string) {
        return await axios.get(URL + `posts/?limit=12`, {
            headers: {
                'Authorization': `Bearer ${access}`
            }
        })
    }

    // delete post
    async deletePost(access: string, id: number) {
        return await axios.patch(URL + 'posts/' + id + '/', { status: 0 }, {
            headers: {
                'Authorization': `Bearer ${access}`
            }
        })
    }

    // create post
    async createPost(access: string, user_role: number, from_location: string, to_location: string, go_time: string, count: number, price: string, addition: string) {
        const data = { user_role, from_location, to_location, go_time, count, price, addition }
        return await axios.post(URL + 'posts/', data, {
            headers: {
                'Authorization': `Bearer ${access}`
            }
        })
    }

    // edit post 
    async editPost(id: number, access: string, user_role: number, from_location: string, to_location: string, go_time: string, count: number, price: string, addition: string) {
        const data = { user_role, from_location, to_location, go_time, count, price, addition }
        return await axios.put(URL + 'posts/' + id + '/', data, {
            headers: {
                'Authorization': `Bearer ${access}`
            }
        })
    }
}