import { Title } from './Title'
import { useParams } from 'react-router-dom'
import { fetchCartoon } from '../redux/CartoonList-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export function CartoonPostBody () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { cartoon } = useSelector((state: any) => state.cartoonList)

  useEffect(() => {
    if (cartoon) return
    dispatch(fetchCartoon(id) as any)
  }, [dispatch, id, cartoon])

  return (
    <>
      <Title title={cartoon?.name} />
      <div className="d-flex mt-5 gap-5">
        <img src={cartoon?.poster.previewUrl === null ? 'https://hightech.fm/wp-content/uploads/2022/10/eso-captures-the-ghost-1.jpg' : cartoon?.poster.previewUrl} className="w-50 h-50" alt="" />
        <div className="w-50 h-50 d-flex flex-column justify-content-between">
          <p>Жанр: {cartoon?.genres.map((genre: object) => genre.name).join(', ')}</p>
          <p>Год: {cartoon?.year}</p>
          <p>Страна: {cartoon?.countries.map((country: object) => country.name).join(', ')}</p>
          <p>Длительность: {cartoon?.cartoonLength}</p>
          <p>Рейтинг КиноПоиск: {cartoon?.rating.kp}</p>
          <p>Рейтинг IMDB: {cartoon?.rating.imdb}</p>
        </div>
        <div className="w-50 h-50 d-flex flex-column">
          <h3>Актеры:</h3>
          {cartoon?.persons.map((person: object) => (
            <p key={person.id}>{person.name}</p>
          ))}
        </div>
      </div>
      <p className="mt-5 text-center fs-1">{cartoon?.description === null ? 'К сожалению, описание отсутствует' : cartoon?.description}</p>
    </>
  )
}
