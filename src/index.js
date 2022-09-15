
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import App from './App';

import 'bulma/css/bulma.min.css';

import history from './utils/history'
import configureStore from './store/configureStore'
import "./index.css"

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root')


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);