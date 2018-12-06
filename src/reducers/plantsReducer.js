import { FETCH_PLANTS } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_PLANTS:
      return action.payload;
    default:
      return state;
  }
};
