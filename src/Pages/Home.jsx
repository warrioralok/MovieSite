import { useLoaderData } from "react-router-dom";
import { Card } from "./Card";

const Home = () => {
  const moviesData = useLoaderData(); 
  console.log(moviesData.Search) 
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <button>Get Started</button>
        </div>
      </section>

      <section className="movie-grid">
        <h2>Popular on Netflix</h2>
        <div className="movies">
        {moviesData.Search.map((elem) =>{
        return  <Card key={elem.imdbID}  detail={elem}/>
        })}
        </div>
      </section>
      </>
  );
};

export default Home;
