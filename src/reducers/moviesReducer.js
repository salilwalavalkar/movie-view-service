import {GET_MOVIES} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case GET_MOVIES:
      console.log("getting movies");
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};