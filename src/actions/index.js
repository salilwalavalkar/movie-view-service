import {moviesRef} from '../config/firebase';
import {GET_MOVIES} from './types';

export const addMovie = newMovie => async dispatch => {
  moviesRef.push().set(newMovie);
};

export const deleteMovie = movieId => async dispatch => {
  moviesRef.child(movieId).remove();
};

export const getMovies = () => async dispatch => {
  moviesRef.on("value", snapshot => {
    dispatch({
      type: GET_MOVIES,
      payload: snapshot.val()
    });
  });
};