import React from 'react';
import { connect } from 'react-redux';
import { deletePlant } from '../actions';

const PlantCard = ({plant, deletePlant}) => {
  const deleteThething = () => {
    deletePlant(plant)
  }
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">{plant.commonName}</div>
        <div className="meta">
          <span>{plant.species}</span>
          <br></br>
          <span>Sun Requirement: {plant.sunReq}</span>
        </div>
        <div className="description">
          <div className="ui grid">
            <div className="four wide column">Height: {plant.height} inches</div>
            <div className="four wide column">Planting Depth: {plant.plantingDepth} inches</div>
            <div className="four wide column">Plant Spacing: {plant.plantSpacing} inches</div>
            <div className="four wide column">Color: {plant.color}</div>
            <div className="four wide column">Number: {plant.number}</div>
            <div className="four wide column">Days to bloom: {plant.daysToBloom}</div>
            <div className="four wide column">Bloom Time: {plant.bloomTime}</div>
            <div className="four wide column">Seeding Date: {plant.seedingDate}</div>
          </div>
          <p className="center aligned">{plant.notes}</p>
          <button className="ui red button" onClick={deleteThething}>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deletePlant })(PlantCard);
