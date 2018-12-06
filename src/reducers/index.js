import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';

export default combineReducers({
  plants: plantsReducer
})
