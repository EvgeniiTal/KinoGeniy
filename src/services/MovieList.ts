import { moviesEndpoint } from '../api'
import { client } from '../utils/client'

interface Params {
  typeNumber: number,
  limit?: number,
  page?: number | string
}

export const requestMovieList = async (params: Params ) => {
  const { data } = await client.get(moviesEndpoint, { params })

  return data
}
