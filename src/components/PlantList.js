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
    const listToRows = (list, elementsPerSubArray) => {
      let matrix = [], i, k;

      for (i = 0, k = -1; i < list.length; i++) {
          if (i % elementsPerSubArray === 0) {
              k++;
              matrix[k] = [];
          }

          matrix[k].push(list[i]);
      }

      return matrix;
    }
    const rowMatrix = listToRows(alphPlants, 3);

    return rowMatrix.map((row, i) =>(
      <div className="columns" key={i}>
        {row.map(plant => <PlantCard plant={plant} key={plant._id} />)}
      </div>
      )
    )
  }
  render() {
    return (
      <div className="container is-fluid">
        {this.getPlants()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { plants: state.plants };
}

export default connect(mapStateToProps, { fetchPlants })(PlantList);
