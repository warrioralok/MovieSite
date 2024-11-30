import { useLoaderData } from "react-router-dom";

const Movies = () => {
  const MovieDetail = useLoaderData(); 
  return (
    <>
      <section className="banner" style={{background:`URL(${MovieDetail.Poster}`}}>
        <div className="banner-content">
          <h1 style={{color:'#fff'}}>{MovieDetail.Title}</h1>
          <p>
          {MovieDetail.Plot}
          </p>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </section>
    </>
  );
};

export default Movies;
