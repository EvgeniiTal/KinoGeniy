import '../styles/RandomMovie.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRandomMovie } from '../redux/randomMovie-slice'
import { NavLink } from 'react-router-dom'
import Loader from '../styles/Loader.module.css'

export function RandomMovie (): JSX.Element | null {
  const dispatch = useDispatch()
  const { data, status, error } = useSelector((state: any) => state.randomMovie)

  useEffect(() => {
    if (status === 'resolved') return
    dispatch(fetchRandomMovie() as any)
  }, [dispatch])

  function renderData (data: any): JSX.Element | null {
    if (status === 'loading') {
      return (
        <div className="container d-flex justify-content-center mt-5">
          <div className={Loader.loader} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    } else if (status === 'resolved') {
      return (
        <>
          <div className={'random-film'} style={data.poster.url === null ? { backgroundImage: `url(https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710115200&semt=ais)` } : { backgroundImage: `url(${data.poster.url})` }}>
            <h1 className={'random-film__title'}>{data.name === null ? data.alternativeName : data.name}</h1>
            <div className={'random-film__info'}>
              <div className={'random-film__info__top'}>
                <p>{data.rating.kp}</p>
                <p>{data.genres.map((genre: any) => genre.name).join(', ')}</p>
                <p>{data.year}</p>
                <p>{data.countries.map((country: any) => country.name).join(', ')}</p>
                <p>{data.movieLength}</p>
              </div>
              <h1>{data.description === null ? 'К сожалению, описание отсутствует' : data.description}</h1>
              <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                <NavLink to={`/film/${data.id}`} className="btn btn-primary me-3">Подробнее</NavLink>
              </div>
            </div>
          </div>
        </>
      )
    } else if (status === 'rejected') {
      return (
        <div className="container d-flex justify-content-center mt-5">
          <h1 className="text-danger">{error}</h1>
        </div>
      )
    }

    return null
  }

  return renderData(data)
}
