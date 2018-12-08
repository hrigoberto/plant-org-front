import { FETCH_PLANTS } from '../constants';
import { POST_PLANT } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_PLANTS:
      return action.payload;
    case POST_PLANT:
    default:
      return state;
  }
};
