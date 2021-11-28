import axios from 'axios'
import {api} from '../helper/urlConfig'



const axiosInstance = axios.create({
    baseURL : api,
    headers : {}
})

export default axiosInstance