import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { MainPage } from './components/pages/MainPage'
import { FilmsPage } from './components/pages/FilmsPage'

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
      }
    ]
  }
])
