import API from '../api';
import { FETCH_PLANTS } from '../constants';


export const fetchPlants = () => async dispatch => {
  const response = await API.get();

  dispatch({ type: FETCH_PLANTS, payload: response.data})
}
