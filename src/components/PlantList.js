import React from 'react';
import PlantCard from './PlantCard';
import API from '../api';


class PlantList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plants: []
    }
  }
  async componentDidMount() {
    const res = await API.get();
    this.setState({ plants: res.data })
  }
  getPlants() {
    return this.state.plants.map(plant => <PlantCard plant={plant} key={plant._id} />);
  }
  render() {
    return (
      <div className="ui list">
        {this.getPlants()}
      </div>
    )
  }
}

export default PlantList;
