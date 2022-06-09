import axios from "axios"


export const axiosInstance = axios.create({

    baseURL : "https://mitbank.herokuapp.com/api/"
})