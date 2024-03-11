import { BurgerMenu } from "./BurgerMenu"

export function Header () {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-between">
        <BurgerMenu />
        <h1
        style={{
          cursor: 'pointer',
          fontSize: '3rem',
          color: '#621ed4',
        }}
      className="navbar-brand">KinoGeniy</h1>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}
