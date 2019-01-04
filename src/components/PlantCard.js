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
    const result = window.confirm('Are you sure you want to delete this item?');
    if (result) {
      return this.props.deletePlant(this.props.plant)
    }
  }
  switchEdit = () => {
    this.setState({ editing: !this.state.editing });
  }
  render() {
    return this.state.editing ? (
    <div className="ui raised fluid card">
      <div className="content">
        <PlantForm plant={this.props.plant} edit={true} switchEdit={this.switchEdit} />
        <button className="ui grey small button right floated" onClick={this.switchEdit}>back</button>
      </div>
    </div>
    ) : (
      <div className="ui raised fluid plant card">
        <div className="content">
          <div className="ui medium image left floated">
            <img src={this.props.plant.imageUrl} alt={this.props.plant.commonName} />
          </div>
          <div className="header">
            <span>{this.props.plant.commonName}</span>
            <button className="ui red button right floated right attached" onClick={this.deleteThething}>DELETE</button>
            <button className="ui teal button right floated left attached" onClick={this.switchEdit}>EDIT</button>
          </div>
          <div className="meta">
            <span>species: {this.props.plant.species}</span>
            <br />
            <span>variety: {this.props.plant.variety}</span>
            <br />
            <span>Sun Requirement: {this.props.plant.sunReq}</span>
          </div>
          <div className="left floated"><h4>Notes:</h4>{this.props.plant.notes}</div>
          <div className="description">
            <div className="ui grid">
              <div className="one wide column"><h4>Height:</h4> {this.props.plant.height} inches</div>
              <div className="two wide column"><h4>Planting Depth:</h4> {this.props.plant.plantingDepth} inches</div>
              <div className="two wide column"><h4>Plant Spacing:</h4> {this.props.plant.plantSpacing} inches</div>
              <div className="two wide column"><h4>Color:</h4> {this.props.plant.color}</div>
              <div className="one wide column"><h4>Number:</h4> {this.props.plant.number}</div>
              <div className="two wide column"><h4>Days to bloom:</h4> {this.props.plant.daysToBloom}</div>
              <div className="two wide column"><h4>Germination Temp:</h4> {this.props.plant.germinationTemp}</div>
              <div className="two wide column"><h4>Seeding Date:</h4> {this.props.plant.seedingDate.toString()}</div>
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
