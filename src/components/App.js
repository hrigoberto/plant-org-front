import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlantList from './PlantList';
import PlantForm from './PlantForm';

const App = () => {
  return (
    <div className="ui container" style={{marginTop: "20px"}}>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PlantForm} />
          <Route path="/" exact component={PlantList} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
