import { Title } from './Title'
import { useParams } from 'react-router-dom'
import { fetchSerial } from '../redux/SerialsList-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export function SerialPostBody () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { serial } = useSelector((state: any) => state.serialsList)

  useEffect(() => {
    if (serial) return
    dispatch(fetchSerial(id) as any)
  }, [dispatch, id, serial])

  return (
    <>
      <Title title={serial?.name} />
      <div className="d-flex mt-5 gap-5">
        <img src={serial?.poster.previewUrl === null ? 'https://hightech.fm/wp-content/uploads/2022/10/eso-captures-the-ghost-1.jpg' : serial?.poster.previewUrl} className="w-50 h-50" alt="" />
        <div className="w-50 h-50 d-flex flex-column justify-content-between">
          <p>Жанр: {serial?.genres.map((genre: object) => genre.name).join(', ')}</p>
          <p>Год: {serial?.year}</p>
          <p>Страна: {serial?.countries.map((country: object) => country.name).join(', ')}</p>
          <p>Длительность: {serial?.movieLength}</p>
          <p>Рейтинг КиноПоиск: {serial?.rating.kp}</p>
          <p>Рейтинг IMDB: {serial?.rating.imdb}</p>
        </div>
        <div className="w-50 h-50 d-flex flex-column">
          <h3>Актеры:</h3>
          {serial?.persons.map((person: object) => (
            <p key={person?.id}>{person?.name}</p>
          ))}
        </div>
      </div>
      <p className="mt-5 text-center fs-1">{serial?.description === null ? 'К сожалению, описание отсутствует' : serial?.description}</p>
    </>
  )
}
