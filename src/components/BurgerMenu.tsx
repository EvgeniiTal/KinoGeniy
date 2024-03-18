import '../styles/BurgerMenu.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


 export function BurgerMenu () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log('click')
  }

  const isOpen = isMenuOpen ? 'open' : ''

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          <ul>
            <li className= {isMenuOpen ? 'appear' : ''}>Главная</ li>
            <li className= {isMenuOpen ? 'appear' : ''}>Фильмы</li>
            <li className= {isMenuOpen ? 'appear' : ''}>Сериалы</li>
            <li className= {isMenuOpen ? 'appear' : ''}>Мультфильмы</li>
            <li className= {isMenuOpen ? 'appear' : ''}>Аниме</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
