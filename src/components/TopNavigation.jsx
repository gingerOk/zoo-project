import {useState} from "react";
import {NavLink} from "react-router-dom";

const TopNavigation = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showNav ? "show" : "hide"}`}>
        <span className="navbar-brand mx-3">Hidden brand</span>
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
            <span className="nav-link">Blog</span>
          </li>
        </ul>
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item mx-2">
            <span className="nav-link">Register</span>
          </li>
          <li className="nav-item mx-2">
            <span className="nav-link">Login</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
