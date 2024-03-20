import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { MainPage } from './components/pages/MainPage'
import { FilmsPage } from './components/pages/FilmsPage'
import { FilmPage } from './components/pages/FilmPage'
import { SerialsPage } from './components/pages/SerialsPage'
import { SerialPage } from './components/pages/SerialPage'
import { CartoonsPage } from './components/pages/CartoonsPage'
import { CartoonPage } from './components/pages/CartoonPage'
import { AnimesPage } from './components/pages/AnimesPage'
import { AnimePage } from './components/pages/AnimePage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/main',
        element: <MainPage />
      },
      {
        path: '/films/:page',
        element: <FilmsPage />
      },
      {
        path: '/film/:id',
        element: <FilmPage />
      },
      {
        path: '/tv-series/:page',
        element: <SerialsPage />
      },
      {
        path: '/serial/:id',
        element: <SerialPage />
      },
      {
        path: '/cartoons/:page',
        element: <CartoonsPage />
      },
      {
        path: '/cartoon/:id',
        element: <CartoonPage />
      },
      {
        path: '/animes/:page',
        element: <AnimesPage />
      },
      {
        path: '/anime/:id',
        element: <AnimePage />
      }
    ]
  }
])
