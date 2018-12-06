import React from 'react';
import PlantList from './PlantList';
import API from '../api';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plants: []
    }
  }
  async componentDidMount()  {
    const res = await API.get();
    this.setState({ plants: res.data })
  }
  render() {
    return (
      <div className="ui container" style={{marginTop: "20px"}}>

        <PlantList plants={this.state.plants} />
      </div>
    )
  }
}

export default App;
