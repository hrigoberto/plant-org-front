import React from 'react';
import { connect } from 'react-redux';
import { deletePlant, createPlantandRefresh } from '../actions';
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
  duplicate = () => {
    const dup = this.props.plant
    delete dup._id
    this.props.createPlantandRefresh(dup);
    return this.switchEdit();
  }
  render() {
    const { plant } = this.props
    return this.state.editing ? (
    <div className="ui raised fluid card">
      <div className="content">
        <PlantForm plant={plant} edit={true} switchEdit={this.switchEdit} />
        <button className="ui grey small button right floated" onClick={this.switchEdit}>back</button>
      </div>
    </div>
    ) : (
      <div className="column">
        <div className="card" style={{height: "70vh"}}>
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={plant.imageUrl} alt={plant.commonName} />
            </figure>
          </div>
          <div className="card-content">
            <p class="title is-4">{plant.commonName}</p>
            <p class="subtitle is-6">{() => plant.variety ? `@${plant.variety}` : ''}</p>
            <p class="subtitle is-6">{plant.variety}</p>
          </div>
          <div className="card-content"></div>
        </div>
      </div>
      // <div className="ui raised fluid plant card">
      //   <div className="content">
      //     <div className="ui medium image left floated">
      //       <img src={plant.imageUrl} alt={plant.commonName} />
      //     </div>
      //     <div className="header">
      //       <span>{plant.commonName}</span>
      //       <button className="ui red button right floated right attached" onClick={this.deleteThething}>DELETE</button>
      //       <button className="ui teal button right floated left attached" onClick={this.switchEdit}>EDIT</button>
      //       <button className="ui teal button right floated left attached" onClick={this.duplicate}>DUPLICATE</button>
      //     </div>
      //     <div className="meta">
      //       <span>species: {plant.species}</span>
      //       <br />
      //       <span>variety: {plant.variety}</span>
      //       <br />
      //       <span>Sun Requirement: {plant.sunReq}</span>
      //     </div>
      //     <div className="left floated"><h4>Notes:</h4>{plant.notes}</div>
      //     <div className="description">
      //       <div className="ui grid">
      //         <div className="one wide column"><h4>Height:</h4> {plant.height} inches</div>
      //         <div className="two wide column"><h4>Planting Depth:</h4> {plant.plantingDepth} inches</div>
      //         <div className="two wide column"><h4>Plant Spacing:</h4> {plant.plantSpacing} inches</div>
      //         <div className="two wide column"><h4>Color:</h4> {plant.color}</div>
      //         <div className="one wide column"><h4>Number:</h4> {plant.number}</div>
      //         <div className="two wide column"><h4>Days to bloom:</h4> {plant.daysToBloom}</div>
      //         <div className="two wide column"><h4>Germination Temp:</h4> {plant.germinationTemp}</div>
      //         <div className="two wide column"><h4>Seeding Date:</h4> {plant.seedingDate.toString()}</div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deletePlant: deletePlant,
    createPlantandRefresh: createPlantandRefresh
  }
}

export default connect(mapStateToProps, { deletePlant, createPlantandRefresh })(PlantCard);
