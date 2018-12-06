import React from 'react';
import PlantCard from './PlantCard';


const PlantList = ({plants}) => {
  const getPlants = () => {
    return plants.map(plant => <PlantCard plant={plant} key={plant._id} />);
  }
  return (
    <div className="ui list">
      {getPlants()}
    </div>
  )
}

export default PlantList;
