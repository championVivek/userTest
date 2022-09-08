import axios from "axios";

const instance = axios.create({
    baseURL: 'http://182.76.237.238/~apitest/sme_link/api'
})

export default instance