import axios from 'axios'

export default function init() {
    const client = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        timeout: 30000
    })

    return {
        client
    }
}
