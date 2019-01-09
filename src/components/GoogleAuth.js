import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { Link } from 'react-router-dom';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '491897972661-vrmecp3ffdsqmi399vdrllb7e7qho5od.apps.googleusercontent.com',
        scope: 'email'

      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    })
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this.auth.signIn();
  }
  onSignOutClick = () => {
    this.auth.signOut();
  }
  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="button is-info" onClick={this.onSignOutClick}>
          <i className="google icon" />
          <span>Sign Out</span>
        </button>
      );
    } else {
      return (
        <button className="button is-info" onClick={this.onSignInClick}>
          <i className="google icon" />
          <span>Sign In With Google</span>
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
        <Link to="/">
          <button className="button is-info">
            <strong>Go Back</strong>
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn}
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
