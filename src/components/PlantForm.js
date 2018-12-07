import React from 'react';

// TODO wire up input fields to state, and then on formsubmit make a post request through an action creator

class PlantForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      plant: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

  }
  handleInputChange = e => {
    this.setState({ plant: { [e.target.name]: e.target.value } })
  }
  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">Description</h4>
        <div className="fields">
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="commonName" value={this.state.commonName}/>
          </div>
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="species" placeholder="Species"/>
          </div>
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="color" placeholder="Color"/>
          </div>
          <div className="four wide field">
            <input onChange={this.handleInputChange} type="text" name="imageUrl" placeholder="Image URL"/>
          </div>
        </div>
        <div className="fields">
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="height" placeholder="Height"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="plantingDepth" placeholder="Planting Depth"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="plantSpacing" placeholder="Plant Spacing"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="number" placeholder="# of Plants"/>
          </div>
          <div className="three wide field">
            <input onChange={this.handleInputChange} type="text" name="sunReq" placeholder="Sun Requirement"/>
          </div>
          <div className="two wide field">
            <input onChange={this.handleInputChange} type="text" name="daysToBloom" placeholder="Days to Bloom"/>
          </div>
          <div className="three wide field">
            <input onChange={this.handleInputChange} type="text" name="seedingDate" placeholder="Seeding Date"/>
          </div>
        </div>
        <div className="sixteen wide field">
          <input onChange={this.handleInputChange} type="text" name="notes" placeholder="Notes"/>
        </div>
        <button onClick={this.handleSubmit} className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default PlantForm;
