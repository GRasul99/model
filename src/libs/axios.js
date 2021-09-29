import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 20000,
})

Vue.prototype.$http = axiosIns
axiosIns.defaults.headers.common['Content-Type'] = 'multipart/form-data'
export default axiosIns
