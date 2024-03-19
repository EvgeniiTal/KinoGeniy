import Flickity from 'react-flickity-component';
import '../styles/Carousels.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSerialsList } from '../redux/SerialsList-slice';
import { Card } from './Card';
import Loader from '../styles/Loader.module.css';

interface Props {
  title: string,
}

export function CarouselsSeries (props: Props): JSX.Element {
  const dispatch = useDispatch()
  const { data, status, error } = useSelector((state: any) => state.serialsList)

  useEffect(() => {
    if (status === 'resolved') return
    dispatch(fetchSerialsList(2) as any)
  }, [dispatch])



  function renderData (data: any): JSX.Element {
    if (status === 'loading') {
      return (
        <div className="container mt-5">
          <div className={Loader.loader} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    } else if(status === 'resolved') {
        const flickityOptions = {
          initialIndex: 0,
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
              data.docs.map((item: any, index: number) => {
                return (
                  <div key={index} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <>
                     <Card status={status} data={item} />
                    </>
                  </div>
                )
              }
              )
            }
          </Flickity>
        </div>
      );
    } else if (status === 'rejected') {
      return (
        <div className="container mt-5">
          <h1>{ props.title }</h1>
          <h1 className="text-danger">{ error }</h1>
        </div>
      )
    }
  }

  return renderData(data)
}