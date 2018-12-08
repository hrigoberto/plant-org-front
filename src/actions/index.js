import API from '../api';
import { FETCH_PLANTS } from '../constants';
import { POST_PLANT } from '../constants';


export const fetchPlants = () => async dispatch => {
  const response = await API.get();

  dispatch({ type: FETCH_PLANTS, payload: response.data})
}

export const postPlant = (plant) => async dispatch => {
  const response = await API.post('/', plant);

  dispatch({ type: POST_PLANT, payload: response.data})
}

export const deletePlant = (plant) => async dispatch => {
  await API.delete(plant._id);
  dispatch(fetchPlants())
}
