import { moviesEndpoint } from '../api'
import { client } from '../utils/client'

interface Params {
  typeNumber: number
}

export const requestCartoonList = async (params: Params ) => {
  const { data } = await client.get(moviesEndpoint, { params })

  return data
}
