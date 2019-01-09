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
    if (!this.props.isSignedIn) {
      return (
        <div className="card">
          <div className="card-content">
            <div className="title-is-4">
              Only the admin can add new plants
            </div>
          </div>
        </div>
      )
    } else {
      return (
          <div className="ui raised fluid card">
            <div className="content">
              <form className={`ui form ${this.state.success}`}>
                <div className="fields">
                  <div className="four wide field">
                    <input onChange={this.handleInputChange} type="text" name="commonName" value={this.state.commonName} placeholder="Common Name"/>
                  </div>
                  <div className="four wide field">
                    <input onChange={this.handleInputChange} type="text" name="species" value={this.state.species} placeholder="Species"/>
                  </div>
                  <div className="two wide field">
                    <input onChange={this.handleInputChange} type="text" name="variety" value={this.state.variety} placeholder="Variety"/>
                  </div>
                  <div className="two wide field">
                    <input onChange={this.handleInputChange} type="text" name="color" value={this.state.color} placeholder="Color"/>
                  </div>
                  <div className="four wide field">
                    <input onChange={this.handleInputChange} type="text" name="imageUrl" value={this.state.imageUrl} placeholder="Image URL"/>
                  </div>
                </div>
                <div className="fields">
                  <div className="one wide field">
                    <input onChange={this.handleInputChange} type="text" name="height" value={this.state.height} placeholder="Height"/>
                  </div>
                  <div className="two wide field">
                    <input onChange={this.handleInputChange} type="text" name="plantingDepth" value={this.state.plantingDepth} placeholder="Planting Depth"/>
                  </div>
                  <div className="two wide field">
                    <input onChange={this.handleInputChange} type="text" name="plantSpacing" value={this.state.plantSpacing} placeholder="Plant Spacing"/>
                  </div>
                  <div className="one wide field">
                    <input onChange={this.handleInputChange} type="text" name="number" value={this.state.number} placeholder="# of Plants"/>
                  </div>
                  <div className="three wide field">
                    <input onChange={this.handleInputChange} type="text" name="sunReq" value={this.state.sunReq} placeholder="Sun Requirement"/>
                  </div>
                  <div className="two wide field">
                    <input onChange={this.handleInputChange} type="text" name="daysToBloom" value={this.state.daysToBloom} placeholder="Days to Bloom"/>
                  </div>
                  <div className="two wide field">
                    <input onChange={this.handleInputChange} type="text" name="germinationTemp" value={this.state.germinationTemp} placeholder="Germination Temperature"/>
                  </div>
                  <div className="three wide field">
                    <DatePicker
                      selected={this.state.seedingDate}
                      onChange={this.handleDateChange}
                    />
                  </div>
                </div>
                <div className="sixteen wide field">
                  <textarea rows="2" onChange={this.handleInputChange} name="notes" value={this.state.notes} placeholder="Notes"/>
                </div>
                <div className="ui success message">
                  <div className="header">Form Completed</div>
                  <p>Your entry has been recorded</p>
                </div>
                <button onClick={this.handleSubmit} className="ui submit teal button" type="submit">Submit</button>
              </form>
            </div>
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { createPlantandRefresh })(PlantForm);
