/**
 * Flow: React-Redux
 * User needs to interact with a React component. 
 * The component will call an action creator which will produce action. 
 * The action is given to the reducers, which will then update the application state.
 */

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * The state of any React app is said to flow in only one direction, from the top most 
 * file to bottom. The index.js file is the top most file of our app because this is where the 
 * App component will be rendered. The App component can further have other components inside it. 
 * So we need to create the store in this top file.
 */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
// The Provider also takes the store prop and declares it as the entire application’s store.  
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();