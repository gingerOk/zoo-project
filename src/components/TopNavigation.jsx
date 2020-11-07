import {useState} from "react";
import {NavLink} from "react-router-dom";

const TopNavigation = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showNav ? "show" : "hide"}`}>
        <NavLink exact to="/" className="navbar-brand mx-4">
          <img src="/img/logo.jpg" alt="logo" style={{width: 70}} />
        </NavLink>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active mx-2">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink exact to="/animals" className="nav-link">
              Animals
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink exact to="/blog" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink exact to="/animals/new" className="nav-link">
              Add new animal
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item mx-2">
            <span className="nav-link">Register</span>
          </li>
          <li className="nav-item mx-2">
            <NavLink exact to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
