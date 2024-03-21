import { Title } from './Title'
import { useParams } from 'react-router-dom'
import { fetchAnime } from '../redux/AnimeListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export function AnimePostBody (): JSX.Element {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { anime } = useSelector((state: any) => state.animeList)

  useEffect(() => {
    if (anime) return
    dispatch(fetchAnime(id) as any)
  }, [dispatch, id, anime])

  return (
    <>
      <Title title={anime?.name} />
      <div className="d-flex mt-5 gap-5">
        <img src={anime?.poster.previewUrl === null ? 'https://hightech.fm/wp-content/uploads/2022/10/eso-captures-the-ghost-1.jpg' : anime?.poster.previewUrl} className="w-50 h-50" alt="" />
        <div className="w-50 h-50 d-flex flex-column justify-content-between">
          <p>Жанр: {anime?.genres.map((genre: object | any) => genre.name).join(', ')}</p>
          <p>Год: {anime?.year}</p>
          <p>Страна: {anime?.countries.map((country: object | any) => country.name).join(', ')}</p>
          <p>Длительность: {anime?.animeLength}</p>
          <p>Рейтинг КиноПоиск: {anime?.rating.kp}</p>
          <p>Рейтинг IMDB: {anime?.rating.imdb}</p>
        </div>
        <div className="w-50 h-50 d-flex flex-column">
          <h3>Актеры:</h3>
          {anime?.persons.map((person: object | any) => (
            <p key={person.id}>{person.name}</p>
          ))}
        </div>
      </div>
      <p className="mt-5 text-center fs-1">{anime?.description === null ? 'К сожалению, описание отсутствует' : anime?.description}</p>
    </>
  )
}
