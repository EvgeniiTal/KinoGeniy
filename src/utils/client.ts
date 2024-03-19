import axios from 'axios'

export const client: any = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4/',
  timeout: 6000
})

client.defaults.headers.common['X-API-KEY'] = 'HXX4VGJ-P1E486Z-MYBYPQ6-MZFXACG'
