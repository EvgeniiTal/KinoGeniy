import { moviesEndpoint } from '../api'
import { client } from '../utils/client'

interface Params {
  typeNumber: number,
  limit?: number,
  page?: number | string,
  sortField?: string,
  sortType?: number
}

export const requestMovieList = async (params: Params ) => {
  const newParams = new URLSearchParams();
  newParams.append('typeNumber', params.typeNumber.toString());
  newParams.append('limit', params.limit.toString());
  newParams.append('page', params.page.toString());
  newParams.append('notNullFields', 'name');
  newParams.append('sortType', params.sortType.toString());
  newParams.append('sortField', params.sortField.toString());
  newParams.append('notNullFields', 'year');


  const { data } = await client.get(moviesEndpoint, { params: newParams })

  return data
}

export const requestMovie = async (id: string | undefined) => {
  const { data } = await client.get(`${moviesEndpoint}/${id}`)

  return data
}
