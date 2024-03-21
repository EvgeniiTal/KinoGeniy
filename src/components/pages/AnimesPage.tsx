import { Title } from '../Title'
import { Card } from '../Card'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAnimeList } from '../../redux/AnimeListSlice'
import { Pagination } from '../Pagination'
import { SortSelect } from '../SortSelect'
import Loader from '../../styles/Loader.module.css'

export function AnimesPage (): JSX.Element | null {
  const dispatch = useDispatch()
  const { data, status, error, pagesCounter } = useSelector((state: any) => state.animeList)
  const { page } = useParams()

  useEffect(() => {
    dispatch(fetchAnimeList({typeNumber: 4, page: page}) as any)
  }, [dispatch, status, page])

  function handleClick(pageNumber: number): void {
    dispatch(fetchAnimeList({typeNumber: 4, page: pageNumber}) as any)
  }

  function renderData (data: any): JSX.Element | null {

    if (status === 'loading') {
      return (
        <>
          <Title title="Аниме"/>
          <SortSelect fetch={fetchAnimeList} typeNumber={4}/>
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
            <Title title="Аниме"/>
            <SortSelect fetch={fetchAnimeList} typeNumber={4}/>
            <div className="container mt-5 mb-5">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.docs.map((item: object, index: number) => {
                  return (
                    <div className="col" key={index}>
                      <Card status={status} data={item} section="anime"/>
                    </div>
                  )
                })}
              </div>
              <ul className="pagination justify-content-center mt-5">
                <Pagination
                  onClick={handleClick}
                  pagesCounter={pagesCounter}
                  section="animes"
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
