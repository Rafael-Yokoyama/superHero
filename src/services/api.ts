  
import axios from "axios"

const baseApiURL = "https://www.superheroapi.com/api.php/3335649429873428/search"


const api = axios.create({
  baseURL: baseApiURL
})

export default api