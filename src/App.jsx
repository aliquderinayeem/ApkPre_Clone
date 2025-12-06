import { RouterProvider } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import router from './routes/Routes'

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
