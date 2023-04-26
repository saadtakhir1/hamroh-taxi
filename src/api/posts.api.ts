import axios from 'axios'
import { navigate } from 'svelte-navigator'
import { UserPosts, userPostsStore } from '../store/userposts.store'

type PostDto = {
    author_id: number,
    from_loc: string,
    to_loc: string,
    go_time: string,
    count: number,
    addition: string
}

const URL = "url"

export async function getPosts() {
    const res = await axios.get(`http://localhost:4800/posts`)
    console.log(res.data.posts)
    const userPosts: UserPosts[] = res.data.posts
    userPostsStore.set(userPosts)
    return res
}

export async function getUserPosts(access: string) {
    const res = await axios.get(`${URL}/api/posts/`, {
        headers: {
            "Authoration": `Bearer ${access}`
        }
    })
    
    if(res.status == 403) {
       return navigate('/auth/login')
    }

    const userPosts: UserPosts[] = res.data.posts
    userPostsStore.set(userPosts)

}

export async function postPost(author_id: number, from_loc: string, to_loc: string, go_time: string, count: number, addition: string) {
    const data = { author_id, from_loc, to_loc, go_time, count, addition }
    const res = await axios.post('http://localhost:4800/posts', data)

}