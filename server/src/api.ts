import axios from 'axios';

const HOSTNAME = "https://ghibliapi.vercel.app"

const api = axios.create({
  baseURL: `${HOSTNAME}`
})

export default api
