import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" >
      <div className="navbar-end">
        <input className="input" type="text" placeholder="Find plant" style={{margin: "10px", width: "40vw"}}/>
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-info">
              <strong>Search</strong>
            </button>
          </div>
        </div>
        <div className="navbar-item">
          <div className="buttons">
          <Link to="/form">
            <button className="button is-info">
              <strong>Create New Plant</strong>
            </button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(NavBar);
