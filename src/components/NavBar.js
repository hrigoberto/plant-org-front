import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" >
      <div className="navbar-end">
        <input className="input" type="text" placeholder="Find plant" style={{margin: "10px", width: "40vw"}}/>
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-info">
              <strong>Search</strong>
            </button>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
          <Link to="/form">
            <button class="button is-info">
              <strong>Create New Plant</strong>
            </button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
