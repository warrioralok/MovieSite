import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Card = ({detail}) =>{
    // eslint-disable-next-line react/prop-types
    const {Poster, imdbID} = detail;
    return(
        <NavLink key={imdbID} to={`/movies/${imdbID}`}><img 
            src={Poster}
            alt="Movie 1"
          /></NavLink>
    )
} 