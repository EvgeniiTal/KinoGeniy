import { Header } from './components/Header'
import { Main } from './components/Main'

export function Layout (props) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  )
}
