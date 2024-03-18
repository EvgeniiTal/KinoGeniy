import Flickity from 'react-flickity-component';
import '../styles/Carousels.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieList } from '../redux/MovieList-slice';
import { Card } from './Card';



export function Carousels (props: any) {
  const dispatch = useDispatch()
  const { movieList, status } = useSelector((state: any) => state.movieList)

  useEffect(() => {
    if (status === 'resolved') return
    dispatch(fetchMovieList(props.typeNumber) as any)
  }, [dispatch])

  const dataForRender = []


  const flickityOptions = {
    initialIndex: 0,
  }

  const images = {
    id: [1, 2, 3],
    title: ['', '', ''],
    url: dataForRender
  }



  return (
    <div className="container mt-5">
      <h1>{ props.title }</h1>
      <Flickity
        className='mt-5 mb-5 flickity'
        elementType='div'
        disableImagesLoaded={false}
        options={ flickityOptions }
        reloadOnUpdate
        static
      >
        {
          images['id'].map((id) => {
            return (
              <div key={id} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <>
                  { images['url'].map((url, index) => {
                    return (
                      <div key={index + 1}>
                        <Card status={status} data={url} />
                      </div>
                    )
                  }) }
                </>
              </div>
            )
          }
          )
        }
      </Flickity>
    </div>
  );
}
