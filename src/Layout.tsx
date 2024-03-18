import { Header } from './components/Header'
import { Main } from './components/Main'
import { Outlet } from 'react-router-dom'

export function Layout (props) {
  return (
    <>
      <Header />
      <Outlet />
      <Main>{props.children}</Main>
    </>
  )
}
