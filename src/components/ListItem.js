import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteMovie} from '../actions';

class ListItem extends Component {
  deleteClick = movieId => {
    const {deleteMovie} = this.props;
    deleteMovie(movieId);
  };
  render() {
    const{movieId, movie} = this.props;
    console.log("This Movie: " + movie);
    return (
      <div key="MovieName" className="col s10 offset-s1 movie-list-item blue">
        <h4>        
          {movie.title}
          <span 
            onClick={() => this.deleteClick(movieId)}
            className="delete-movie-item white lighten-5 red-text btn"
          >
            <i>Delete</i>
          </span>
        </h4>
      </div>
    );
  }
}

// Connect is used to update store for every actions.
export default connect(null, {deleteMovie})(ListItem);