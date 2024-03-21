import axios from 'axios'

export const client: any = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4/',
  timeout: 10000
})

client.defaults.headers.common['X-API-KEY'] = 'YK7XEQE-VC3MYX0-HQDDP2F-2Y5ZAJC'
