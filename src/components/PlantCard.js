import React from 'react';
import { connect } from 'react-redux';
import { deletePlant } from '../actions';


const PlantCard = ({plant, deletePlant}) => {
  const deleteThething = () => {
    deletePlant(plant)
  }
  return (
    <div className="ui raised fluid card">
      <div className="content">
        <div className="ui medium image left floated">
          <img src={plant.imageUrl} alt={plant.commonName} />
        </div>
        <div className="header">{plant.commonName}</div>
        <div className="meta">
          <span>{plant.species}</span>
          <br />
          <span>Sun Requirement: {plant.sunReq}</span>
        </div>
        <br />
        <div className="left floated"><h4>Notes:</h4>{plant.notes}</div>
        <button className="ui red button right floated" onClick={deleteThething}>DELETE</button>
        <div className="description">
          <div className="ui grid">
            <div className="two wide column"><h4>Height:</h4> {plant.height} inches</div>
            <div className="two wide column"><h4>Planting Depth:</h4> {plant.plantingDepth} inches</div>
            <div className="two wide column"><h4>Plant Spacing:</h4> {plant.plantSpacing} inches</div>
            <div className="two wide column"><h4>Color:</h4> {plant.color}</div>
            <div className="two wide column"><h4>Number:</h4> {plant.number}</div>
            <div className="two wide column"><h4>Days to bloom:</h4> {plant.daysToBloom}</div>
            <div className="two wide column"><h4>Bloom Time:</h4> {plant.bloomTime}</div>
            <div className="two wide column"><h4>Seeding Date:</h4> {plant.seedingDate}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deletePlant })(PlantCard);
