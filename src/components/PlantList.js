import React from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';


class PlantList extends React.Component {
  state = {
    searchTerm: ''
  }
  componentDidMount() {
    this.props.fetchPlants();
  }
  getPlants = () => {
    console.log('THISSATE', this.state);
    const alphPlants = this.props.plants.sort(function(a, b) {
      return a.commonName.toLowerCase().localeCompare(b.commonName.toLowerCase());
    })
    const filteredAlphPlants = alphPlants.filter(plant => plant.commonName.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    
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
    const rowMatrix = listToRows(filteredAlphPlants, 3);

    return rowMatrix.map((row, i) =>(
      <div className="columns" key={i}>
        {row.map(plant => <PlantCard plant={plant} key={plant._id} style={{width: "30vw"}}/>)}
      </div>
      )
    )
  }
  handleInput = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  render() {
    return (
      <div className="container is-fluid">
        <div className="field is-centered">
          <input onChange={this.handleInput} className="input is-expanded" type="text" placeholder="Find plant" style={{margin: "10px", width: "40vw"}}/>
        </div>
        {this.getPlants()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { plants: state.plants };
}

export default connect(mapStateToProps, { fetchPlants })(PlantList);
