import React from 'react';

// TODO wire up input fields to state, and then on formsubmit make a post request through an action creator

class PlantForm extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <h4 className="ui dividing header">Description</h4>
        <div className="field">
          <input type="text" name="plant[commonName]" placeholder="Common Name"/>
        </div>
        <div className="field">
          <input type="text" name="plant[species]" placeholder="Species"/>
        </div>
        <div className="field">
          <input type="text" name="plant[color]" placeholder="Color"/>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

export default PlantForm;
