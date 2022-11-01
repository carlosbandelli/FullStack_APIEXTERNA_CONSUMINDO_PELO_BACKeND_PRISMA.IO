import axios from 'axios';

const HOSTNAME = "https://ghibliapi.herokuapp.com"

const api = axios.create({
  baseURL: `${HOSTNAME}`
})

export default api