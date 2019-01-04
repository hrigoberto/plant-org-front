import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';


class PlantList extends React.Component {
  componentDidMount() {
    this.props.fetchPlants();
  }
  getPlants() {
    const alphPlants = this.props.plants.sort(function(a, b) {
   return a.commonName.toLowerCase().localeCompare(b.commonName.toLowerCase());
})
    return alphPlants.map(plant => <PlantCard plant={plant} key={plant._id} />);
  }
  render() {
    return (
      <div className="ui list">
        {this.getPlants()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { plants: state.plants };
}

export default connect(mapStateToProps, { fetchPlants })(PlantList);
