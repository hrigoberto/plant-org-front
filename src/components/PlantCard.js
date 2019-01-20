import React from 'react';
import { connect } from 'react-redux';
import { deletePlant, createPlantandRefresh } from '../actions';
import PlantForm from './PlantForm';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
require('dotenv').config({path: __dirname + '/.env'});
const adminId = process.env.REACT_APP_ADMIN_ID;


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
  displayAdminControls = () => {
    if (this.props.auth.isSignedIn && (this.props.auth.userId === adminId)) {
      return (
        <div className="card-header">
          <button className="ui red button right floated right attached" onClick={this.deleteThething}>DELETE</button>
          <button className="ui teal button right floated left attached" onClick={this.switchEdit}>EDIT</button>
          <button className="ui teal button right floated left attached" onClick={this.duplicate}>DUPLICATE</button>
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    const { plant } = this.props
    return this.state.editing ? (
    <div className="column card">
      <div className="card-content">
        <PlantForm plant={plant} edit={true} switchEdit={this.switchEdit} />
        <button className="ui grey small button right floated" onClick={this.switchEdit}>back</button>
      </div>
    </div>
    ) : (
      <div className="column is-one-third" id="card">
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
        >
          <FrontSide>
            <div className="card" style={{height: "70vh"}} onClick={this.flipCard}>
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src={plant.imageUrl} alt={plant.commonName} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">{plant.commonName}</p>
                <p className="subtitle is-6">{plant.variety}</p>
              </div>
              <div className="card-content"></div>
            </div>
          </FrontSide>
          <BackSide>
            <div className="card" style={{height: "70vh", overflow: "scroll"}}>
              <div className="card-content">
                <p className="title is-4">{plant.commonName}</p>
                <p className="subtitle is-6">{plant.variety}</p>
                <table className="table is-fullwidth is-striped">
                  <tbody className="tbody" >
                    <tr className="tr"><td>Height:</td><td> {plant.height} inches</td></tr>
                    <tr className="tr"><td>Planting Depth:</td><td> {plant.plantingDepth} inches</td></tr>
                    <tr className="tr"><td>Plant Spacing:</td><td> {plant.plantSpacing} inches</td></tr>
                    <tr className="tr"><td>Color:</td><td> {plant.color}</td></tr>
                    <tr className="tr"><td>Days to bloom:</td><td> {plant.daysToBloom}</td></tr>
                    <tr className="tr"><td>Germination Temp:</td><td> {plant.germinationTemp}</td></tr>
                    <tr className="tr"><td>Seeding Date:</td><td> {plant.seedingDate.toString()}</td></tr>
                  </tbody>
                </table>
                <p className="subtitle is-6">NOTES:</p>
                <p style={{fontSize: ".8em"}}>{plant.notes}</p>
              </div>
            </div>
            {this.displayAdminControls()}
          </BackSide>
        </Flippy>
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
    createPlantandRefresh: createPlantandRefresh,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { deletePlant, createPlantandRefresh })(PlantCard);
