import axios from 'axios'

export const client: any = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4/',
  timeout: 10000
})

client.defaults.headers.common['X-API-KEY'] = 'TRGT0GM-8YMMRKQ-G3ZZHNA-4R75QBG'
