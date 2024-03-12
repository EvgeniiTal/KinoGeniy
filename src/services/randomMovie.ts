import { randomMoviesEndpoint } from '../api'
import { client } from '../utils/client'

export const requestRandomMovie = async () => {
  const { data } = await client.get(randomMoviesEndpoint)

  return data
}
