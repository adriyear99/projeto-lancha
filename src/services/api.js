import axios from "axios"

const instance = axios.create({
    baseURL: 'localhost:19006'
})

export default instance