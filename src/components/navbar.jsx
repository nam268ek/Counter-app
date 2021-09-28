import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Vidly
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rentals">
                Rentals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
