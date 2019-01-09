import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';
import authReducer from './authReducer';

export default combineReducers({
  plants: plantsReducer,
  auth: authReducer
})
