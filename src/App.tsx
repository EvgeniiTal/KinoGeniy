import { RouterProvider } from 'react-router-dom'
import { router } from './route'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App(): JSX.Element {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
