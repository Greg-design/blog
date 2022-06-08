import axios from "axios";

const api = axios.create({
    baseURL:'http://192.168.80.1:1337/'
})

export default api