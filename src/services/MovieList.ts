import { moviesEndpoint } from '../api'
import { client } from '../utils/client'

export const requestMovieList = async (params: any) => {
  const { data } = await client.get(moviesEndpoint, { params })

  return data
}
