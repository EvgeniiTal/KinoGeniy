import { Title } from '../Title'
import { Card } from '../Card'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieList } from '../../redux/MovieList-slice'
import { Pagination } from '../Pagination'
import { SortSelect } from '../SortSelect'
import Loader from '../../styles/Loader.module.css'

export function FilmsPage (): JSX.Element | null {
  const dispatch = useDispatch()
  const { data, status, error, pagesCounter } = useSelector((state: any) => state.movieList)
  const { page } = useParams()

  useEffect(() => {
    dispatch(fetchMovieList({typeNumber: 1, page: page}) as any)
  }, [dispatch])

  function handleClick(pageNumber: number): void {
    dispatch(fetchMovieList({typeNumber: 1, page: pageNumber}) as any)
  }

  function renderData (data: any ): JSX.Element | null {

    if (status === 'loading') {
      return (
        <>
          <Title title="Фильмы"/>
          <SortSelect fetch={fetchMovieList} typeNumber={1}/>
          <div className="container mt-5">
            <div className={Loader.loader} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )
    } else if(status === 'resolved') {
        return (
          <>
            <Title title="Фильмы"/>
            <SortSelect fetch={fetchMovieList} typeNumber={1}/>
            <div className="container mt-5 mb-5">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.docs.map((item: object, index: number) => {
                  return (
                    <div className="col" key={index}>
                      <Card status={status} data={item} section="film" />
                    </div>
                  )
                })}
              </div>
              <ul className="pagination justify-content-center mt-5">
                <Pagination
                  onClick={handleClick}
                  pagesCounter={pagesCounter}
                  section="films"
                />
              </ul>
            </div>
          </>
        )
      } else if(status === 'rejected') {
        <div className="container mt-5">
          <h1 className="text-danger">{error}</h1>
        </div>
      }

    return null
  }

  return renderData(data)
}
