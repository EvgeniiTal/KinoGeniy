import axios from 'axios'

export const client: any = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4/',
  timeout: 5000
})

client.defaults.headers.common['X-API-KEY'] = 'DQMBKVD-F644JHJ-H203PKK-6BB75X4'
