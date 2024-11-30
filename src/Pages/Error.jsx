import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  
  const navigate = useNavigate();
  
  const backto = () =>{
    navigate(-1)
  }
  const error = useRouteError();
  
  console.log(error.text,error.mesaage);

  return (
    <>
      <div className="container">
        <p className="backlink" onClick={backto}>&nbsp;Back to prveious page</p>
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
