import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlantList from './PlantList';
import PlantForm from './PlantForm';

// TODO:
// be able to duplicate
// alphabetical
// delete popup

const App = () => {
  return (
    <div className="ui container" style={{marginTop: "20px", background: "#dde1c6"}}>
      <BrowserRouter>
        <div>
          <Route path="/" exact render={() => <PlantForm editing={false} />} />
          <Route path="/" exact component={PlantList} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
