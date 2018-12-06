import React from 'react';
import PlantList from './PlantList';
import PlantForm from './PlantForm';

const App = () => {
  return (
    <div className="ui container" style={{marginTop: "20px"}}>
      <PlantForm />
      <PlantList />
    </div>
  )
}

export default App;
