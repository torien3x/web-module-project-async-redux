import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import nbaReducer from './reducer/standingsReducer'
import App from './App';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(nbaReducer, composeEnhancers(applyMiddleware(thunk)));
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  rootElement
);
