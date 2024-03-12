import Flickity from 'react-flickity-component';
import '../styles/Carousels.scss';
import Naruto1 from '../assets/gratis-png-sasuke-uchiha-naruto-uzumaki-gaara-itachi-uchiha-hinata-hyuga-naruto.png'
import Naruto2 from '../assets/png-clipart-render-naruto-uzumaki-naruti.png'
import Naruto3 from '../assets/png-transparent-naruto-uzumaki-rock-lee-orochimaru-naruto-fictional-character-pain-weapon.png'

const flickityOptions = {
  initialIndex: 2,
}

const images = {
  id: [1, 2, 3],
  title: ['title 1', 'title 2', 'title 3'],
  url: [Naruto1, Naruto2, Naruto3],
}

export function Carousels () {
  return (
    <>
      <h1>Flickity</h1>
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
              <div key={id}>
                <>
                  <h2>{images['title'][id - 1]}</h2>
                  <img src={images['url'][id - 1]} alt={images['title'][id - 1]} />
                </>
              </div>
            )
          }
          )
        }
      </Flickity>
    </>
  );
}
