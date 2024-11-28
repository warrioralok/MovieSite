import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import TvShows from "./Pages/TvShows"
import Movies from "./Pages/Movies"
import NewPopular from "./Pages/NewPopular"
import About from "./Pages/About"
import Layout from "./Component/BodyComponent/Layout"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'/tvshows',
          element:<TvShows/>
        },
        {
          path:'/movies',
          element:<Movies/>
        },
        {
          path:'/popular',
          element: <NewPopular/>
        },
        {
          path:'/about',
          element: <About/>
        }
      ]
    }
    

  ])
  return (
    <RouterProvider router={router}/>
)
}

export default App