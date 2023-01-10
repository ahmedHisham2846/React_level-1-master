import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="hide-when-mobile fullScreenWidthBar">
        <Link to="/">
          <h1>React Training</h1>
        </Link>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
          </li>
        </ul>
      </header>

      <header className="show-when-mobile fullScreenWidthBar">
        <Link to="/">
          <h1>React Training</h1>
        </Link>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <Link to="/html">
              <label htmlFor="html">HTML</label>
            </Link>
          </div>
          <div className="main-div">
            <Link to="/css">
              <label htmlFor="css">CSS</label>
            </Link>
          </div>
          <div className="main-div">
            <Link to="/javascript">
              <label htmlFor="js">JavaScript</label>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
