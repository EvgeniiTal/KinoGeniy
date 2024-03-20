import '../styles/BurgerMenu.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


 export function BurgerMenu (): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
    console.log('click')
  }

  const handleLinkClick = (link: string): void => {
    setIsMenuOpen(false)
    navigate(link)
  }



  const isOpen = isMenuOpen ? 'open' : ''

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          <ul>
            <li className= {isMenuOpen ? 'appear' : ''} onClick={() => handleLinkClick('/main')}>Главная</ li>
            <li className= {isMenuOpen ? 'appear' : ''} onClick={() => handleLinkClick('/films/1')}>Фильмы</li>
            <li className= {isMenuOpen ? 'appear' : ''} onClick={() => handleLinkClick('/tv-series/1')}>Сериалы</li>
            <li className= {isMenuOpen ? 'appear' : ''} onClick={() => handleLinkClick('/cartoons/1')}>Мультфильмы</li>
            <li className= {isMenuOpen ? 'appear' : ''} onClick={() => handleLinkClick('/animes/1')}>Аниме</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
