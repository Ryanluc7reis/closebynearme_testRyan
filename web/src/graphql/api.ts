import axios from 'axios'
import { jwtDefaultConfig } from './jwt'

const URI = process.env.NEXT_PUBLIC_API

const api = axios.create({
  baseURL: URI
})

api.interceptors.request.use(
  async (config: any) => {
    const token = window.localStorage.getItem(jwtDefaultConfig.storageTokenKeyName)
    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `${jwtDefaultConfig.tokenType} ${token}`
      }
    }

    return config
  },
  (error: any) => Promise.reject(error)
)

export default api
