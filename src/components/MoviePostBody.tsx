import { Title } from './Title'
import { useParams } from 'react-router-dom'
import { fetchMovie } from '../redux/MovieList-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export function MoviePostBody (): JSX.Element {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { movie } = useSelector((state: any) => state.movieList)

  useEffect(() => {
    if (movie) return
    dispatch(fetchMovie(id) as any)
  }, [dispatch, id, movie])

  return (
    <>
      <Title title={movie?.name} />
      <div className="d-flex mt-5 gap-5">
        <img src={movie?.poster.previewUrl === null ? 'https://hightech.fm/wp-content/uploads/2022/10/eso-captures-the-ghost-1.jpg' : movie?.poster.previewUrl} className="w-50 h-50" alt="" />
        <div className="w-50 h-50 d-flex flex-column justify-content-between">
          <p>Жанр: {movie?.genres.map((genre: object | any) => genre.name).join(', ')}</p>
          <p>Год: {movie?.year}</p>
          <p>Страна: {movie?.countries.map((country: object | any) => country.name).join(', ')}</p>
          <p>Длительность: {movie?.movieLength}</p>
          <p>Рейтинг КиноПоиск: {movie?.rating.kp}</p>
          <p>Рейтинг IMDB: {movie?.rating.imdb}</p>
        </div>
        <div className="w-50 h-50 d-flex flex-column">
          <h3>Актеры:</h3>
          {movie?.persons.map((person: object | any) => (
            <p key={person.id}>{person.name}</p>
          ))}
        </div>
      </div>
      <p className="mt-5 text-center fs-1">{movie?.description === null ? 'К сожалению, описание отсутствует' : movie?.description}</p>
    </>
  )
}
