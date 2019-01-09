import API from '../api';
import { FETCH_PLANTS, POST_PLANT, SIGN_IN, SIGN_OUT } from '../constants';
import {  } from '../constants';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createPlantandRefresh = (plant) => async dispatch => {
  await dispatch(postOrPutPlant(plant));
  await dispatch(fetchPlants());
}

export const fetchPlants = () => async dispatch => {
  const response = await API.get();

  dispatch({ type: FETCH_PLANTS, payload: response.data})
}

export const postOrPutPlant = (plant) => async dispatch => {
  const response = plant._id ? await API.put(`/${plant._id}`, plant) : await API.post('/', plant);

  dispatch({ type: POST_PLANT, payload: response.data})
}

export const deletePlant = (plant) => async dispatch => {
  await API.delete(plant._id);
  dispatch(fetchPlants())
}
