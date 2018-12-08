import React from 'react';
import { connect } from 'react-redux';
import { createPlantandRefresh } from '../actions';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// TODO  update button

class PlantForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      commonName: '',
      species: '',
      color: '',
      imageUrl: '',
      height: '',
      plantingDepth: '',
      plantSpacing: '',
      number: '',
      sunReq: '',
      daysToBloom: '',
      seedingDate: new Date(),
      notes: ''
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPlantandRefresh(this.state);
    this.setState({
      commonName: '',
      species: '',
      color: '',
      imageUrl: '',
      height: '',
      plantingDepth: '',
      plantSpacing: '',
      number: '',
      sunReq: '',
      daysToBloom: '',
      seedingDate: new Date(),
      notes: ''
    })
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleDateChange = e =>  {
    this.setState({ seedingDate: e });
  }
  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="commonName" value={this.state.commonName} placeholder="Common Name"/>
          </div>
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="species" value={this.state.species} placeholder="Species"/>
          </div>
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="color" value={this.state.color} placeholder="Color"/>
          </div>
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="imageUrl" value={this.state.imageUrl} placeholder="Image URL"/>
          </div>
        </div>
        <div className="fields">
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="height" value={this.state.height} placeholder="Height"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="plantingDepth" value={this.state.plantingDepth} placeholder="Planting Depth"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="plantSpacing" value={this.state.plantSpacing} placeholder="Plant Spacing"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="number" value={this.state.number} placeholder="# of Plants"/>
          </div>
          <div className="three wide field">
            <input onChange={this.handleInputChange} type="text" name="sunReq" value={this.state.sunReq} placeholder="Sun Requirement"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="daysToBloom" value={this.state.daysToBloom} placeholder="Days to Bloom"/>
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
        <button onClick={this.handleSubmit} className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default connect(null, { createPlantandRefresh })(PlantForm);
