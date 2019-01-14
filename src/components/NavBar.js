import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';



const NavBar = (props) => {
  const signedInConditional = () => {
    if (props.auth.isSignedIn) {
      return (
        <Link to="/form">
          <button className="button is-info">
            <strong>Create New Plant</strong>
          </button>
        </Link>
      )
    } else {
      return null;
    }
  }

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" >
      <div className="navbar-end">
        <div className="navbar-item">
          {signedInConditional()}
        </div>
        <div className="navbar-item">
          <GoogleAuth />
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
