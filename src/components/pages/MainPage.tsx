import { Carousels } from "../Carousels";
import { RandomMovie } from "../RandomMovie";

export function MainPage () {
  return (
    <>
      <RandomMovie />
      <Carousels typeNumber={1} title={'Фильмы'} />
      <Carousels typeNumber={2} title={'Сериалы'}/>
      <Carousels typeNumber={3} title={'Мультфильмы'}/>
      <Carousels typeNumber={4} title={'Аниме'} />
    </>
  )
}
