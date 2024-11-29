import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container">
        <h1>404</h1>
        <p>Oops! The page youre looking for doesnt exist.</p>
        <NavLink to='/'  className="btn">
          Go Back Home
        </NavLink>
      </div>
    </>
  );
};

export default Error;
