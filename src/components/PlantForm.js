import React from 'react';
import { connect } from 'react-redux';
import { createPlantandRefresh } from '../actions';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class PlantForm extends React.Component {
  constructor(props){
    super(props)


      this.state = {
        editing: 'false',
        commonName: '',
        variety: '',
        species: '',
        color: '',
        imageUrl: '',
        height: '',
        plantingDepth: '',
        plantSpacing: '',
        number: '',
        sunReq: '',
        daysToBloom: '',
        germinationTemp: '',
        seedingDate: new Date(),
        notes: ''
      }
  }
  componentDidMount() {
    if (this.props.plant) {
      if((this.props.plant.seedingDate) instanceof Date) {
        return this.setState(this.props.plant);
      } else {
        const plant = this.props.plant
        plant.seedingDate = new Date(plant.seedingDate);
        return this.setState(plant);
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const plant = this.state;
    delete plant.success;
    this.props.createPlantandRefresh(plant);
    if (this.props.edit === false) {
      this.setState({
        commonName: '',
        species: '',
        variety: '',
        color: '',
        imageUrl: '',
        height: '',
        plantingDepth: '',
        plantSpacing: '',
        number: '',
        sunReq: '',
        daysToBloom: '',
        germinationTemp: '',
        seedingDate: new Date(),
        notes: '',
        success: 'success'
      })
    } else {
      this.setState({
        success: 'success'
      })
      return setTimeout(() => this.props.switchEdit(), 500)
    }
    setTimeout(() => this.setState({ success: ''} ), 1000)
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleDateChange = e =>  {
    this.setState({ seedingDate: e });
  }
  render() {
    // if (!this.props.isSignedIn) {
    //   return (
    //     <div className="card">
    //       <div className="card-content">
    //         <div className="title-is-4">
    //           Only the admin can add new plants
    //         </div>
    //       </div>
    //     </div>
    //   )
    // } else {
      return (
          <div className="card" >
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.commonName} name="commonName" placeholder="commonName" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.species} name="species" placeholder="species" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.variety} name="variety" placeholder="variety" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.color} name="color" placeholder="color" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.imageUrl} name="imageUrl" placeholder="imageUrl" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.height} name="height" placeholder="height" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.plantingDepth} name="plantingDepth" placeholder="plantingDepth" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.plantSpacing} name="plantSpacing" placeholder="plantSpacing" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.daysToBloom} name="daysToBloom" placeholder="daysToBloom" />
              </div>
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.germinationTemp} name="germinationTemp" placeholder="germinationTemp" />
              </div>
              <DatePicker
                selected={this.state.seedingDate}
                onChange={this.handleDateChange}
              />
              <div className="control">
                <input onChange={this.handleInputChange} className="input is-small" type="text" value={this.state.notes} name="notes" placeholder="notes" />
              </div>
            </div>
            <button onClick={this.handleSubmit} className="ui submit teal button" type="submit">Submit</button>
          </div>
        )
    // }
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { createPlantandRefresh })(PlantForm);
