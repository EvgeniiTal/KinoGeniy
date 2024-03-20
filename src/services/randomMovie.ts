import { randomMoviesEndpoint } from '../api'
import { client } from '../utils/client'

export const requestRandomMovie = async (params: object) => {
  const { data } = await client.get(randomMoviesEndpoint, { params })

  return data
}
