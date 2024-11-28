import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import TvShows from "./Pages/TvShows"
import Movies from "./Pages/Movies"
import NewPopular from "./Pages/NewPopular"
import About from "./Pages/About"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/twshows',
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
      path:'about',
      element: <About/>
    }

  ])
  return (
  //   <>
  //     <header>
  //   <a href="#" className="logo">NETFLIX</a>
  //   <nav>
  //     <ul>
  //       <li><a href="#">Home</a></li>
  //       <li><a href="#">TV Shows</a></li>
  //       <li><a href="#">Movies</a></li>
  //       <li><a href="#">New & Popular</a></li>
  //       <li><a href="#">About</a></li>
  //     </ul>
  //   </nav>
  // </header>

  // <section className="hero">
  //   <div className="hero-content">
  //     <h1>Unlimited movies, TV shows, and more.</h1>
  //     <p>Watch anywhere. Cancel anytime.</p>
  //     <button>Get Started</button>
  //   </div>
  // </section>

  // <section className="movie-grid">
  //   <h2>Popular on Netflix</h2>
  //   <div className="movies">
  //     <img src="https://i.pinimg.com/474x/64/ee/5c/64ee5ce4c69a2924a864696a3422c6d2.jpg" alt="Movie 1"/>
  //     <img src="https://i.pinimg.com/736x/0b/2d/a5/0b2da514c3dae7197b2bf4993edf2113.jpg" alt="Movie 2"/>
  //     <img src="https://resizing.flixster.com/g81COrwvWE7pqUEIVL0271ZsFT4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMjVhYWZjMGMtY2I4MS00ZWE2LWE5NTEtNTVlZDRjMDE3ZGU1LmpwZw==" alt="Movie 3"/>
  //     <img src="https://i.pinimg.com/originals/8e/c4/79/8ec479bfe69b22cb83166c0f0a8d8f71.jpg" alt="Movie 4"/>
  //     <img src="https://wallpapercave.com/wp/wp4112166.jpg" alt="Movie 5"/>
  //     <img src="https://m.media-amazon.com/images/M/MV5BNmZmYjhlMTgtYmRjYi00NTk3LWI2M2EtMzYwZTAyMmIzZTI2XkEyXkFqcGc@._V1_.jpg" alt="Movie 6"/>
  //     <img src="https://resizing.flixster.com/1Ap7G-1xZlo5ORGXCIRaf_DIg5Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17114293_b_v13_ab.jpg" alt="Movie 7"/>
  //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlSY4wvlO_VfIV0yH54i--s7DIrKKz1aGUwObyyXsqUhNf1wP8TLXZ8-f9i2DxDy-7OM&usqp=CAU" alt="Movie 8"/>
  //   </div>
  // </section>
  // <section className="movie-grid">
  //   <h2>Popular on Netflix</h2>
  //   <div className="movies">
  //     <img src="https://i.pinimg.com/474x/64/ee/5c/64ee5ce4c69a2924a864696a3422c6d2.jpg" alt="Movie 1"/>
  //     <img src="https://i.pinimg.com/736x/0b/2d/a5/0b2da514c3dae7197b2bf4993edf2113.jpg" alt="Movie 2"/>
  //     <img src="https://resizing.flixster.com/g81COrwvWE7pqUEIVL0271ZsFT4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMjVhYWZjMGMtY2I4MS00ZWE2LWE5NTEtNTVlZDRjMDE3ZGU1LmpwZw==" alt="Movie 3"/>
  //     <img src="https://i.pinimg.com/originals/8e/c4/79/8ec479bfe69b22cb83166c0f0a8d8f71.jpg" alt="Movie 4"/>
  //     <img src="https://wallpapercave.com/wp/wp4112166.jpg" alt="Movie 5"/>
  //     <img src="https://m.media-amazon.com/images/M/MV5BNmZmYjhlMTgtYmRjYi00NTk3LWI2M2EtMzYwZTAyMmIzZTI2XkEyXkFqcGc@._V1_.jpg" alt="Movie 6"/>
  //     <img src="https://resizing.flixster.com/1Ap7G-1xZlo5ORGXCIRaf_DIg5Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17114293_b_v13_ab.jpg" alt="Movie 7"/>
  //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlSY4wvlO_VfIV0yH54i--s7DIrKKz1aGUwObyyXsqUhNf1wP8TLXZ8-f9i2DxDy-7OM&usqp=CAU" alt="Movie 8"/>
  //   </div>
  // </section>
  // <section className="movie-grid">
  //   <h2>Popular on Netflix</h2>
  //   <div className="movies">
  //     <img src="https://i.pinimg.com/474x/64/ee/5c/64ee5ce4c69a2924a864696a3422c6d2.jpg" alt="Movie 1"/>
  //     <img src="https://i.pinimg.com/736x/0b/2d/a5/0b2da514c3dae7197b2bf4993edf2113.jpg" alt="Movie 2"/>
  //     <img src="https://resizing.flixster.com/g81COrwvWE7pqUEIVL0271ZsFT4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMjVhYWZjMGMtY2I4MS00ZWE2LWE5NTEtNTVlZDRjMDE3ZGU1LmpwZw==" alt="Movie 3"/>
  //     <img src="https://i.pinimg.com/originals/8e/c4/79/8ec479bfe69b22cb83166c0f0a8d8f71.jpg" alt="Movie 4"/>
  //     <img src="https://wallpapercave.com/wp/wp4112166.jpg" alt="Movie 5"/>
  //     <img src="https://m.media-amazon.com/images/M/MV5BNmZmYjhlMTgtYmRjYi00NTk3LWI2M2EtMzYwZTAyMmIzZTI2XkEyXkFqcGc@._V1_.jpg" alt="Movie 6"/>
  //     <img src="https://resizing.flixster.com/1Ap7G-1xZlo5ORGXCIRaf_DIg5Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17114293_b_v13_ab.jpg" alt="Movie 7"/>
  //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlSY4wvlO_VfIV0yH54i--s7DIrKKz1aGUwObyyXsqUhNf1wP8TLXZ8-f9i2DxDy-7OM&usqp=CAU" alt="Movie 8"/>
  //   </div>
  // </section>
  //   </>
    <RouterProvider router={router}/>
)
}

export default App
