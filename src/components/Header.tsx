import { BurgerMenu } from './BurgerMenu'
import { NavLink } from 'react-router-dom'

export function Header (): JSX.Element {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-between">
        <BurgerMenu />
        <NavLink to="/main"
          style={{
            cursor: 'pointer',
            fontSize: '3rem',
            color: '#621ed4',
          }}
          className="navbar-brand">
            KinoGeniy
        </NavLink>
      </div>
    </nav>
  )
}
