import axios from "axios"

const URL = import.meta.env.VITE_APIURL;
const Token = import.meta.env.VITE_TOKEN;

console.log(URL)

let api = axios.create({
  baseURL: URL
})

api.defaults.headers.common["Authorization"] = `Token ${Token}`


export default api
