import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <NavLink href="#" className="logo">
          NETFLIX
        </NavLink>
        <nav>
          <ul>
            <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'linkClass active' : 'linkClass'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/tvshows" className={({isActive}) => isActive ? 'linkClass active' : 'linkClass'}>TV Shows</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={({isActive}) => isActive ? 'linkClass active' : 'linkClass'}>Movies</NavLink>
            </li>
            <li>
              <NavLink to="/popular" className={({isActive}) => isActive ? 'linkClass active' : 'linkClass'}>New & Popular</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'linkClass active' : 'linkClass'}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => isActive ? 'linkClass active' : 'linkClass'}>ContctUs</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
