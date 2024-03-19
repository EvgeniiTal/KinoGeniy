import { Header } from './components/Header'
import { Main } from './components/Main'
import { Outlet } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export function Layout (props: Props): JSX.Element {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Main>{props.children}</Main>
    </>
  )
}
