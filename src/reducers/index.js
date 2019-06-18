// The redux library contains a function named combineReducers that can take 
// multiple reducers and combine them into one reducer.

import {combineReducers} from 'redux';
import data from './moviesReducer';

export default combineReducers({
  data
});