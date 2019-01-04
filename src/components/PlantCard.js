import React from 'react';
import { connect } from 'react-redux';
import { deletePlant } from '../actions';
import PlantForm from './PlantForm';


class PlantCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }
  }
  deleteThething = () => {
    this.props.deletePlant(this.props.plant)
  }
  switchEdit = () => {
    this.setState({ editing: !this.state.editing });
  }
  render() {
    const { plant } = this.props;
    return this.state.editing ? (
    <div className="ui raised fluid card">
      <PlantForm plant={plant} editing={true} />
      <button className="ui blue button right floated" onClick={this.switchEdit}>Close</button>
    </div>
    ) : (
      <div className="ui raised fluid plant card">
        <div className="content">
          <div className="ui medium image left floated">
            <img src={plant.imageUrl} alt={plant.commonName} />
          </div>
          <div className="header">{plant.commonName}</div>
          <div className="meta">
            <span>species: {plant.species}</span>
            <br />
            <span>variery: {plant.variety}</span>
            <br />
            <span>Sun Requirement: {plant.sunReq}</span>
          </div>
          <br />
          <div className="left floated"><h4>Notes:</h4>{plant.notes}</div>
          <button className="ui red button right floated right attached" onClick={this.deleteThething}>DELETE</button>
          <button className="ui teal button right floated left attached" onClick={this.switchEdit}>EDIT</button>
          <div className="description">
            <div className="ui grid">
              <div className="one wide column"><h4>Height:</h4> {plant.height} inches</div>
              <div className="two wide column"><h4>Planting Depth:</h4> {plant.plantingDepth} inches</div>
              <div className="two wide column"><h4>Plant Spacing:</h4> {plant.plantSpacing} inches</div>
              <div className="two wide column"><h4>Color:</h4> {plant.color}</div>
              <div className="one wide column"><h4>Number:</h4> {plant.number}</div>
              <div className="two wide column"><h4>Days to bloom:</h4> {plant.daysToBloom}</div>
              <div className="two wide column"><h4>Germination Temp:</h4> {plant.germinationTemp}</div>
              <div className="two wide column"><h4>Seeding Date:</h4> {plant.seedingDate}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deletePlant: deletePlant
  }
}

export default connect(mapStateToProps, { deletePlant })(PlantCard);
