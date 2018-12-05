import React from 'react';

import API from '../api';

const getPlants = async () => {
  const plants = await API.get();
  console.log(plants.data);
}

const PlantCard = () => {
  getPlants();
  return (
    <div>
      PlantCards
    </div>
  )
}

export default PlantCard;
