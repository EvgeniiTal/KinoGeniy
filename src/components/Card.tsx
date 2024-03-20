import '../styles/Card.scss'
import Loader from '../styles/Loader.module.css'

interface Props {
  status: string,
  data: any,
  section: string
}

export function Card (props: Props): JSX.Element {

function renderData (data: any): JSX.Element {
  if (props.status === 'loading') {
    return (
      <div className={'card'}>
          <div className={Loader.loader} role="status" >
            <span>Loading...</span>
          </div>
      </div>
    )
  } else if (props.status === 'resolved') {
    return (
      <div className={'card'}>
        <div className={'img-box'}>
          <img
            src={data.poster.previewUrl === null ? 'https://hightech.fm/wp-content/uploads/2022/10/eso-captures-the-ghost-1.jpg' : data.poster.previewUrl}
            alt="" />
        </div>
        <div className={'content'}>
          <h2>{data.name === null ? data.alternativeName : data.name}</h2>
          <p>{data.description === null ? 'К сожалению, описание отсутствует' : data.description}</p>
          <a href={`/${props.section}/${data.id}`}>Подробнее</a>
        </div>
      </div>
    )
  }
  return <></>
}


  return renderData(props.data)
}
