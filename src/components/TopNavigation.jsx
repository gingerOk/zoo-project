import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useUser, logout} from "contexts/UserContext";
import Search from "components/Search";
import {FaSignOutAlt} from "react-icons/fa";
import {FiPlus} from "react-icons/fi";
import {FaUserPlus} from "react-icons/fa";
import {FiLogIn} from "react-icons/fi";

const TopNavigation = () => {
  const [user, dispatch] = useUser();
  const [showNav, setShowNav] = useState(false);
  const isAdmin = user.token && user.role === "admin";
  const isAuth = !!user.token;

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={showNav ? "clicked" : ""}>
      <div className="logo-brand">
        <NavLink to="/" className="">
          Animals & Facts
        </NavLink>
      </div>
      <div className="nav-modal">
        <div className="blob"></div>
        <nav>
          <ul onClick={toggleNav}>
            <li>
              <NavLink exact to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/animals">
                ANIMALS
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/blog">
                BLOG
              </NavLink>
            </li>
            {isAdmin ? (
              <li>
                <NavLink exact to="/animals/new">
                  <FiPlus /> Animal
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
      <div className="head" onClick={() => (showNav ? setShowNav(false) : "")}>
        {isAuth ? (
          <span onClick={() => logout(dispatch)}>
            <FaSignOutAlt /> Logout
          </span>
        ) : (
          <span>
            <NavLink to="/register" className="tile icons">
              <FaUserPlus />
            </NavLink>
            <NavLink to="/login" className="tile icons">
              <FiLogIn />
            </NavLink>
          </span>
        )}
        <div className="tile burger" onClick={toggleNav}>
          <div className="meat">
            <div className="line one"></div>
            <div className="line two"></div>
            <div className="line three"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
