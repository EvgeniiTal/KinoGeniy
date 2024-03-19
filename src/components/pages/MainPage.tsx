import { CarouselsMovies } from "../CarouselsMovies";
import { CarouselsSeries } from "../CarouselsSeries";
import { CarouselsCartoon } from "../CarouselsCartoon"
import { CarouselsAnime } from "../CarouselsAnime";
import { RandomMovie } from "../RandomMovie";

export function MainPage (): JSX.Element {
  return (
    <>
      <RandomMovie />
      <CarouselsMovies title={'Фильмы'} />
      <CarouselsSeries title={'Сериалы'} />
      <CarouselsCartoon title={'Мультфильмы'} />
      <CarouselsAnime title={'Аниме'} />
    </>
  )
}
