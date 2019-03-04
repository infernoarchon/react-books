import React from "react";
import { NavLink } from 'react-router-dom'

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="books" className="navbar-brand"><i className="fas fa-book-open"></i></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/books" className="nav-link">Search</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/saved" className="nav-link">Saved</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
