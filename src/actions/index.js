import API from '../api';
import { FETCH_PLANTS } from '../constants';
import { POST_PLANT } from '../constants';

export const createPlantandRefresh = (plant) => async dispatch => {
  await dispatch(postOrPutPlant(plant));
  await dispatch(fetchPlants());
}

export const fetchPlants = () => async dispatch => {
  const response = await API.get();

  dispatch({ type: FETCH_PLANTS, payload: response.data})
}

export const postOrPutPlant = (plant) => async dispatch => {
  console.log('Plant in action',plant);
  const response = plant._id ? await API.put(`/${plant._id}`, plant) : await API.post('/', plant);

  dispatch({ type: POST_PLANT, payload: response.data})
}

export const deletePlant = (plant) => async dispatch => {
  await API.delete(plant._id);
  dispatch(fetchPlants())
}
