import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';
import "./style.css";

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  inputChange = event => {
    this.setState({formValue: event.target.value});
  };

  formSubmit = event => {
    const {formValue} = this.state;
    const {addMovie} = this.props;
    event.preventDefault();
    console.log("Trying to add movie");
    addMovie({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const {showForm, formValue} = this.state;
    if (showForm) {
      return (
        <div id="movie-add-form" className="col s10 offset-s1">
          <form onSubmit={this.formSubmit}>
            <div className="input-field">
              <input 
                value={formValue}
                onChange={this.inputChange}
                id="movieNext"
                type="text"
              />
              <label htmlFor="movieNext">Next Movie?</label>
            </div>
          </form>
        </div>
      );
    }
  };
  renderMovieItem() {
    const {data} = this.props;
    const movieItem = _.map(data, (value, key) => {
      return <ListItem key={key} movieId={key} movie={value} />;
    });
    if (!_.isEmpty(movieItem)) {
      return movieItem;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>You have no listed movies !!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.getMovies();
  }
  render() {
    const {showForm} = this.state;
    return (
      <div className="movies-list-container">
        <div className="row">
          {this.renderForm()}
          {this.renderMovieItem()}
        </div>
        <div className="fixed-action-btn">
          <button 
            onClick={() => this.setState({showForm: !showForm})}
            className="btn-floating btn-large red darken-4"
          >
          {showForm ? (
            <i className="large material-icons">-</i>
          ) : (
            <i className="large material-icons">+</i>
          )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

// Connect is used to update store for every actions.
export default connect(mapStateToProps, actions)(List);