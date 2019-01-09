import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PlantList from './PlantList';
import PlantForm from './PlantForm';
import NavBar from './NavBar';
import GoogleAuth from './GoogleAuth';

// TODO:
// be able to duplicate

const App = () => {
  return (
    <div className="container is-fluid" >
      <BrowserRouter>
        <div>
            <Route path="/" exact component={NavBar} />
            <Route path="/login" exact component={GoogleAuth} />
            <section className="hero">
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                    Kristins Plants
                  </h1>
                  <h2 className="subtitle">
                    virtual seed packets
                  </h2>
                </div>
              </div>
            </section>
            <Route path="/form" exact render={() =>
              <div>
                <PlantForm edit={false} />
                <Link to="/">
                  <button class="button is-danger">
                    <strong>Cancel</strong>
                  </button>
                </Link>
              </div>} />
            <Route path="/" exact component={PlantList} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
